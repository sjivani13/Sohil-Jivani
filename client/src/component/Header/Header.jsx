import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import "./Header.css";
import {Link} from 'react-router-dom'
function Header() {
    return (
        <Navbar expand="lg" className="header">
            <Container>
                <Navbar.Brand id="title" href="#home">
                    <img
                        alt=""
                        src="/spork-circle.png"
                        width="60"
                        height="65"
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
                        <Nav.Link id="login"as={Link} to="login">Log In</Nav.Link>
                    </Nav>

                    {/* <Nav.Link href="#link">Link</Nav.Link> */}

                </Navbar>
            </Container>
        </Navbar>
    );
}

export default Header;