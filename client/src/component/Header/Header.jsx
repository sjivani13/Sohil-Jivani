import React from "react";
import { Button, Col, Row, Form, Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar expand="lg" className="header">
            <Container>
                <Navbar.Brand id="title" href="#home">
                    <img
                        alt=""
                        src="/pinkFork.png"
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    Trio Digital Dishes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar id="basic-navbar-nav">
                    <Nav className="center">
                        <Form inline="true">
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className="search"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button id="btn" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link id="home" as={Link} to="home">Home</Nav.Link>
                        <Nav.Link id="login" as={Link} to="login">Log In</Nav.Link>

                    </Nav>

                    {/* <Nav.Link href="#link">Link</Nav.Link> */}

                </Navbar>
            </Container>
        </Navbar>
    );
}

export default Header;