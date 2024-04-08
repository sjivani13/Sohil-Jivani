import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from "react-bootstrap";
import Header from '../component/Header/Header';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { useProvideAuth } from '../hooks/useProvideAuth'
import FavButton from '../component/icons/FavButton';
import FavFill from '../component/icons/FavFill';
// import ReviewButton from '../component/icons/ReviewButton';
import useSearch from '../hooks/useSearch';
import api from '../utils/api.util';
import TrashIcon from '../component/icons/TrashIcon';

function Dashboard({ recipe, likes }) {

    const { filteredRecipes } = useSearch()
    const [recipes, setRecipes] = useState([]);
    const {
        state: { user }
    } = useProvideAuth();
    // <Header classname="dash" />

    if (!user) {
        return null;
    }
    // useEffect(() => {
    //     api.get("/recipes").then((res) => { setRecipes(res.data) })
    //     console.log()
    // }, [])
    // const [likedState, setLiked] = useState(likes.includes(recipes.id));
    // const [likesState, setLikes] = useState(likes.length);

    const handleToggleLike = async (recipeId) => {
        await api.post(`/recipes/like/${recipeId}`)

        

    }
    async function handleDelete(id) {
        const res = await api.delete(`/recipes/${id}`)

        const updatedRecipes = [...recipes].filter(recipe => recipe._id !== res.data._id)
        console.log(res)
        console.log(updatedRecipes)
        setRecipes(updatedRecipes)
    }
    // console.log(recipes)
    // console.log(user)
    return (
        <div>
            <h2>Hello, {user.username}</h2>
            <Container style={{ marginTop: "50px" }}>
                {filteredRecipes?.map((recipe) => (
                    <Card key={recipe._id} style={{ marginTop: "10px", marginBottom: "5px", background: "black", width: '18rem', borderRadius: "40%" }}>
                        <Card.Img src={recipe.image ? recipe.image : "dinner.jpg"} style={{ borderRadius: "30%" }} />
                        <Card.Text> <Button onClick={() => handleToggleLike(recipe._id)} > {recipe.likes.includes(user.uid) ? <FavFill />: <FavButton />}
                            {console.log("User likes", recipe.title, "?", recipe.likes.includes(user.uid))}
                        </Button>
                            {/* <ReviewButton /> */}
                            {user.uid === recipe.user._id && <TrashIcon onClick={() => handleDelete(recipe._id)} />} </Card.Text>
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
            </Container >
        </div>)
}

export default Dashboard;