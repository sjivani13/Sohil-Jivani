import React from 'react'
import { Container, Row, Form, InputGroup, Col, Button } from 'react-bootstrap'
import "./pages.css"

function LoginPage() {

    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <Container className="mb-5">
                <Row className="pt-5 justify-content-center">
                    <Form
                        noValidate
                        validated
                        style={{ width: "350px" }}
                    // onSubmit={handleSignup}
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
                                Already a User?
                                <Button
                                    as="a"
                                    variant="link"
                                // onClick={() => navigate("/login")}
                                >
                                    Sign-in
                                </Button>
                            </Col>
                            <Button> Log-in{/*type="submit" disabled={data.isSubmitting}>
                                {data.isSubmitting ? <LoadingSpinner /> : "Sign up"}
                           */} </Button>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    );
};

export default LoginPage