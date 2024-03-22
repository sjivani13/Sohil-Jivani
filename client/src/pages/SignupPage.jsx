import React, { useState } from 'react'
import { Container, Row, Form, InputGroup, Col, Button, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import "./pages.css"
import { useProvideAuth } from '../hooks/useProvideAuth';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../utils/api.util';
import { toast } from 'react-toastify';

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: null,
};


function SignupPage() {
    const [data, setData] = useState(initialState);
    const auth = useProvideAuth();

    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSignup = async (event) => {
        console.log("hello")
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
        }

        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null,
        });
        try {
            console.log("Sending POST request")
            const res = await auth.signup(
                data.username,
                data.email,
                data.password,
                data.confirmPassword,
            );
            console.log("Got response")
            toast.success('Welcome aboard our Food Journey!');
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: null,
            });
            console.log("Response:", res);
            setAuthToken(res.data.token);
            console.log("Navigating to /dashboard");
            navigate("/dashboard");
        } catch (error) {
            console.log("Error:", error)
            toast.error('user already exists with that name/email.');
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
                        onSubmit={handleSignup}
                    >
                        <h2 id="head" className="mb-3">Join Our Food Journey!!</h2>

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
                        <Form.Group controlId="email-register">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                required
                                value={data.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="Login">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                required
                                id="inputPassword"
                                value={data.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="Login">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                id="confirm-password"
                                required
                                value={data.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Row className="mr-0">
                            <Col>
                                <br />
                            </Col>

                            <Row className="mr-0">
                                <Row className="mr-0">
                                    <Col>
                                        Already a user?
                                        <Button>
                                            <Nav.Link id="signup" as={Link} to="/login">Login</Nav.Link>
                                        </Button>

                                    </Col>
                                    <Button type="submit"> Sign-Up </Button>
                                </Row>
                            </Row>
                        </Row>
                    </Form>
                </Row>
            </Container >
        </div >
    )
}

export default SignupPage
