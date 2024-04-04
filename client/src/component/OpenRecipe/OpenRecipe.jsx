import { Card, Container, Button } from "react-bootstrap";
import { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import FavButton from '../icons/FavButton';
import ReviewButton from "../icons/ReviewButton";
import api from "../../utils/api.util";

// { recipe: { created, ingredients, instructions, reviews, likes } }
function OpenRecipe() {
    const [oneRecipe, setOneRecipe] = useState()
    const params = useParams()
    useEffect(()=>{
         api.get(`/recipes/${params.id}`).then((res)=>{setOneRecipe(res.data)})
         
     },[params])
    return (
        <div>
                 <Container style={{ marginTop: "50px" }}>
               
                     <Card key = {oneRecipe?._id} style={{ background: "black", width: '18rem', borderRadius: "40%" }}>
                     <Card.Img src="dinner.jpg" style={{ borderRadius: "30%" }} />
                     <Card.Text><FavButton /> <ReviewButton /> </Card.Text>
                     <Card.Body style={{ background: "black" }}>
                         <Card.Title style={{ color: "white" }}>{oneRecipe?.title} </Card.Title>
                         <Card.Text style={{ color: "#b27581" }}>
                             {oneRecipe?.instructions}
                             
                        
                         <Card.Text style={{ color: "#b27581" }}>
                             {oneRecipe?.ingredients}
                             
                         </Card.Text>
                         </Card.Text>
                         <Card.Text style={{ color: "#b27581" }}>
                             {Date(oneRecipe?.recipeCreated)}
                             
                         </Card.Text>
                         <Button hidden style={{ background: "#b27581" }}
                             as={Link} to="/OpenRecipe"
                         >Open Recipe </Button>
                     </Card.Body>
 
                 </Card>
                
               
                {/* <RecipePost recipe={recipe} /> */}

            </Container >

        </div>
           
            
            
            
           
        
    )
}


export default OpenRecipe; 