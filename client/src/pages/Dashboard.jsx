import React, { useState } from 'react';
// import { RecipePost } from '../component/RecipePost/RecipePost';
import { Container, Card, Button, Nav } from "react-bootstrap";
// import Header from '../component/Header/Header';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { useProvideAuth } from '../hooks/useProvideAuth'
import FavButton from '../component/icons/FavButton';
import ReviewButton from '../component/icons/ReviewButton';
import useSearch from '../hooks/useSearch';


function Dashboard() {
    // const [recipe, setRecipe] = useState();
    const { filteredRecipes } = useSearch()
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
                {filteredRecipes.map((recipe) => {
                   <Card style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                   <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                   <Card.Text><button> <FavButton recipeId={recipe._id}/> </button>
                   <button> <ReviewButton/> </button>
                   </Card.Text>
                   <Card.Body style={{ background: "black" }}>
                       <Card.Title style={{ color: "white" }}>Fried Chicken 2.0</Card.Title>
                       <Card.Text style={{ color: "#b27581" }}>
                           Some quick example text to build on the card title and make up the
                           bulk of the card's content.
                       </Card.Text>
                       <Button style={{ background: "#b27581" }}
                           as={Link} to="/post"
                       >Open Recipe </Button>
                   </Card.Body>

               </Card>
                })}
                <Card style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                    <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                    <Card.Text><button> <FavButton /> </button>
                    <button> <ReviewButton/> </button>
                    </Card.Text>
                    <Card.Body style={{ background: "black" }}>
                        <Card.Title style={{ color: "white" }}>Fried Chicken 2.0</Card.Title>
                        <Card.Text style={{ color: "#b27581" }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button style={{ background: "#b27581" }}
                            as={Link} to="/post"
                        >Open Recipe </Button>
                    </Card.Body>

                </Card>
                {/* <RecipePost recipe={recipe} /> */}

            </Container >
            {/* <i className="fa fa-cloud-upload" style={{ color: "purple", fontSize: "50px" }} ></i> */}

        </div>

    )
}

export default Dashboard 
// as={Link} to="/recipe"
//this is ^^ a link to submit a recipe from the dashboard.