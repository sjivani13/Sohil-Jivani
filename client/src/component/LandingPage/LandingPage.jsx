import React from 'react';
import "./LandingPage.css";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../utils/api.util';
function LandingPage({ recipe }) {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        api.get("/recipes").then((res) => { setRecipes(res.data) })
        console.log()
    }, [])
    // console.log(recipes)

    return (
        <div>

            <Container style={{ marginTop: "50px" }}>
                {recipes?.map((recipe) => (
                    <Card key={recipe._id} style={{ marginTop: "10px", marginBottom: "5px", background: "black", width: '18rem', borderRadius: "40%" }}>
                        <Card.Img src={recipe.image ? recipe.image : "dinner.jpg"} style={{ borderRadius: "30%" }} />

                        <Card.Body style={{ background: "black" }}>
                            <Card.Title style={{ color: "white" }}>{recipe.title} </Card.Title>
                            <Card.Text style={{ color: "#b27581" }}>
                                {recipe.description}
                            </Card.Text>
                            <Button style={{ background: "#b27581" }}
                                as={Link} to={`/OpenRecipe/${recipe._id}`}
                            >Open Recipe </Button>
                        </Card.Body>

                    </Card>

                ))}



                {/* <RecipePost recipe={recipe} /> */}

            </Container >
            {/* <i className="fa fa-cloud-upload" style={{ color: "purple", fontSize: "50px" }} ></i> */}

        </div>

    )

}


export default LandingPage;