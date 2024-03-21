import React, { useState } from 'react';
// import { RecipePost } from '../component/RecipePost/RecipePost';
import { Container, Card, Button, Nav } from "react-bootstrap";
// import Header from '../component/Header/Header';
import './dashboard.css';
import { useProvideAuth } from '../hooks/useProvideAuth'

function Dashboard() {
    const [recipe, setRecipe] = useState();
    const {
        state: { user }
    } = useProvideAuth();

    if (!user) {
        return null;
    }
    // <Header classname="dash" />
    return (
        <div>
            <h2>Hello, {user.username}</h2>
            <Container style={{ marginTop: "50px" }}>
                <Card style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                    <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                    <Card.Body style={{ background: "black" }}>
                        <Card.Title style={{ color: "white" }}>Fried Chicken 2.0</Card.Title>
                        <Card.Text style={{ color: "#b27581" }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button style={{ background: "#b27581" }}>Open Recipe</Button>
                    </Card.Body>
                </Card>
                {/* <RecipePost recipe={recipe} /> */}
            </Container >
        </div>

    )
}

export default Dashboard