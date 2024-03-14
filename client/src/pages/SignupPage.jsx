import React, { useState } from 'react'
import { Container, Row, Form, InputGroup, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import "./pages.css"


const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSubmitting: false,
    errorMessage: null,
};


function SignupPage() {
    const [data, setData] = useState(initialState);

    let navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSignup = async (event) => {
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
            const res = await auth.signup(
                data.username,
                data.email,
                data.password,
                data.confirmPassword,
                profileImage,
            );
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: null,
            });
            setAuthToken(res.token);
            navigate("/");
        } catch (error) {
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

                        {/* <Form.Group>
                            <Button id="uploadBtn">Upload Food Image <input className="fa fa-upload" type="file" /></Button>
                        </Form.Group> */}
                        <Form.Group controlId="username-register">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                // value={data.username}
                                // onChange={handleInputChange}
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
                            // value={data.email}
                            // onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="Login">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                required
                                id="inputPasswordRegister"
                            // value={data.password}
                            // onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="Login">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                id="confirm-password"
                                required
                            // value={data.confirmPassword}
                            // onChange={handleInputChange}
                            />
                        </Form.Group>

                        {/* {data.errorMessage && (
                            <span className="form-error text-warning">
                                {data.errorMessage}
                            </span>
                        )} */}
                        <Row className="mr-0">
                            <Col>
                                <br />
                            </Col>
                            <Button> Sign Up{/*type="submit" disabled={data.isSubmitting}>
                                {data.isSubmitting ? <LoadingSpinner /> : "Sign up"}
                           */} </Button>
                        </Row>
                    </Form>
                </Row>
            </Container >
        </div >
    )
}

export default SignupPage
