import React, { useState, useEffect } from 'react';
// import { RecipePost } from '../component/RecipePost/RecipePost';
import { Container, Card, Button, Collapse } from "react-bootstrap";
import Header from '../component/Header/Header';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { useProvideAuth } from '../hooks/useProvideAuth'
import FavButton from '../component/icons/FavButton';
import ReviewButton from '../component/icons/ReviewButton';
import useSearch from '../hooks/useSearch';
import api from '../utils/api.util';
import { MdDinnerDining } from 'react-icons/md';

function Dashboard({ recipe }) {
    const { filteredRecipes } = useSearch()
    const [recipes, setRecipes] = useState();
    const {
        state: { user }
    } = useProvideAuth();
    <Header classname="dash" />

    if (!user) {
        return null;
    }
    useEffect(() => {
        api.get("/recipes").then((res) => { setRecipes(res.data) })
        console.log()
    }, [])
    console.log(recipes)
    return (
        <div>
            <h2>Hello, {user.username}</h2>
            <Container style={{ marginTop: "50px" }}>
                {recipes?.map((recipe) => (
                    <Card key={recipe._id} style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                        <Card.Img src={recipe.image ? recipe.image : "dinner.jpg"} style={{ borderRadius: "30%" }} />
                        <Card.Text><FavButton /> <ReviewButton /> </Card.Text>
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
        </div>

    )
}

export default Dashboard
// as={Link} to="/recipe"
//this is ^^ a link to submit a recipe from the dashboard.px