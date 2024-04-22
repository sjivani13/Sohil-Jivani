import React from 'react';
import "./LandingPage.css";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../utils/api.util';
function LandingPage({ recipe }) {
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        api.get("/recipes").then((res) => {
            console.log("RESPONSE FROM LANDING PAGE:", res)
            setRecipes(res.data)
        })
    }, [])
    // console.log(recipes)

    return (
        <div>

            <Container style={{ marginTop: "50px" }}>
                {recipes?.map((recipe) => (
                    <Card key={recipe._id} style={{ marginTop: "10px", marginBottom: "5px", 
                    background: "white", width: '15rem', borderRadius: "10%" }}>
                        <Card.Img src={recipe.image ? recipe.image : "dinner.jpg"} style={{ borderRadius: "5%", maxWidth: 300, height:200 }} />

                        <Card.Body style={{ background: "lightgray", marginTop: "10px" }}>
                            <Card.Title style={{  color: "black" }}>{recipe.title} </Card.Title>
                            <Card.Text style={{ color: "black" }}>
                                {recipe.description}
                            </Card.Text>
                            <Button style={{ background: "white", color: "black", fontWeight:"bold" }}
                                as={Link} to={`/OpenRecipe/${recipe._id}`}
                            >Complete Recipe </Button>
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