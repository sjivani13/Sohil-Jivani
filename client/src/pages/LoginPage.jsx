import React, { useState } from 'react'
import { Container, Row, Form, InputGroup, Col, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./pages.css"
import { useNavigate } from 'react-router-dom';
import { useProvideAuth } from '../hooks/useProvideAuth';
import { setAuthToken } from '../utils/api.util';
import { toast } from 'react-toastify'


const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
};

function LoginPage() {
    const [data, setData] = useState(initialState);
    const auth = useProvideAuth();

    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSignin = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        event.stopPropagation();
        toast.success('Welcome Back!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null,
        });
        try {
            const res = await auth.signin(data.username, data.password);
            setAuthToken(res.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error)
            toast.error('Missing username or password.');
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error ? error.message || error.statusText : null,
            });
        }
    };


    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <Container className="mb-5">
                <Row className="pt-5 justify-content-center">
                    <Form
                        noValidate
                        validated
                        style={{ width: "350px" }}
                        onSubmit={handleSignin}
                    >
                        <h2 id="head" className="mb-3">Let's Start Cookin'!</h2>

                        <Form.Group controlId="username-register">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    value={data.username}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="Login">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                required
                                id="inputPasswordRegister"
                                value={data.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Row className="mr-0">
                            <Col>
                                New User?

                                <Button>
                                    <Nav.Link id="signup" as={Link} to="/signup"> Sign-Up</Nav.Link>

                                </Button>

                            </Col>
                            <Button type="submit"> Login

                            </Button>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage