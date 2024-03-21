import React, { useState } from 'react'
import "./LandingPage.css"
import { Container, Card, Button } from "react-bootstrap";

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isSubmitting: false,
    errorMessage: null,
};

function LandingPage() {


    return (
        <Container style={{ marginTop: "50px" }}>
            <Card style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                <Card.Body style={{ background: "black" }}>
                    <Card.Title style={{ color: "white" }}>Fried Chicken</Card.Title>
                    <p>Cook time: 30-45 Min</p>
                    <Card.Text style={{ color: "#b27581" }}>
                        Homemade Fried Chicken. Delicious easy family dinner.
                    </Card.Text>
                    <Button style={{ background: "#b27581" }}>Open Recipe</Button>
                </Card.Body>
            </Card>
        </Container >


    );
}


export default LandingPage;