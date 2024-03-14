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
    const [user, setUser] = useState(initialState);


    return (
        <Container style={{ marginTop: "50px" }}>
            <Card style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                <Card.Body style={{ background: "black" }}>
                    <Card.Title style={{ color: "white" }}>Fried Chicken</Card.Title>
                    <Card.Text style={{ color: "#b27581" }}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button style={{ background: "#b27581" }}>Open Recipe</Button>
                </Card.Body>
            </Card>
        </Container >


    );
}


export default LandingPage;