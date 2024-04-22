import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from "react-bootstrap";
// import Header from '../component/Header/Header';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { useProvideAuth } from '../hooks/useProvideAuth'
import FavButton from '../component/icons/FavButton';
import FavFill from '../component/icons/FavFill';
// import ReviewButton from '../component/icons/ReviewButton';
import useSearch from '../hooks/useSearch';
import api from '../utils/api.util';
import TrashIcon from '../component/icons/TrashIcon';
import { all } from 'axios';




function Dashboard({ recipe, likes }) {

    const { filteredRecipes, state } = useSearch()
    const [ likesR, setLikesR] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const {
        state: { user }
    } = useProvideAuth();
    // <Header classname="dash" />
    if (!user) {
        return null;
    }

    console.log(state)
    async function handleDelete(id) {
        const res = await api.delete(`/recipes/${id}`)

        const updatedRecipes = [...recipes].filter(recipe => recipe._id !== res.data._id)
        console.log(res)
        console.log(updatedRecipes)
        setRecipes(updatedRecipes)
    }

    async function likeRecipes(id){
      const res = await api.put(`recipes/like/${id}`)
       setLikesR (true)
      
    }
    console.log(recipes)
    console.log(user)
    console.log(filteredRecipes)
    return (
        <div>
            <h2>Hello, {user.username}</h2>
            <Container style={{ marginTop: "50px" }}>
                {filteredRecipes?.map((recipe) => (
                    <Card key={recipe._id} style={{ marginTop: "10px", marginBottom: "5px", 
                            background: "white", width: '15rem', borderRadius: "8%" }}>
                        <Card.Img src={recipe.image ? recipe.image : "dinner.jpg"} style={{ borderRadius: "10%", maxWidth: 300, height:200}} />
                        
                        <Card.Text>{likesR ? <FavFill/> : <FavButton onClick={() => likeRecipes(recipe._id)} />}
                            {/* <ReviewButton /> */}
                            {user.uid === recipe.user._id && <TrashIcon onClick={() => handleDelete(recipe._id)} />} </Card.Text>
                        <Card.Body style={{ background: "lightgray" }}>
                            <Card.Title style={{ color: "green" }}>{recipe.title} </Card.Title>
                            <Card.Text style={{ color: "black" }}>
                                {recipe.description}
                            </Card.Text>
                            <Button style={{ background: "white", color: "black", fontWeight: 'bold'  }}
                                as={Link} to={`/OpenRecipe/${recipe._id}`}
                            >Complete Recipe </Button>
                        </Card.Body>

                    </Card>
                ))}
            </Container >
        </div>)
}

export default Dashboard;