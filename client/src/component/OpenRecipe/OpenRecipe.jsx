import { Card, Container, Button } from "react-bootstrap";
import { useEffect, useState, } from "react";
import { useParams, Link } from "react-router-dom";
import FavButton from '../icons/FavButton';
// import ReviewButton from "../icons/ReviewButton";
import api from "../../utils/api.util";

// { recipe: { created, ingredients, instructions, reviews, likes } }
function OpenRecipe() {
    const [date, setDate] = useState(new Date())
    const [oneRecipe, setOneRecipe] = useState()
    const params = useParams()
    useEffect(() => {
        api.get(`/recipes/${params.id}`).then((res) => { setOneRecipe(res.data) })

    }, [params])
    return (
        <>
            <Button style={{ background: "#b27581" }} as={Link} to="/dashboard">Go Back</Button>
            <Container style={{
                fontFamily: "Madimi One",
                fontSize: 'large',
                textAlign: 'center'

            }}>
                <Card key={oneRecipe?._id} style={{ color: '#ff7878', backgroundColor: '#3a4c2e', height: '25rem', width: '60rem' }}>
                    <Card.Body>

                        <Card.Img src={oneRecipe?.image ? oneRecipe?.image : "dinner.jpg"} style={{ borderRadius: "30%" }} />
                        <Card.Title style={{ fontSize: '33px' }}>{oneRecipe?.title}</Card.Title>

                        <Card.Subtitle style={{ fontSize: '17px' }} className="mb-2 text-muted">
                            <FavButton />
                            {/* <ReviewButton /> */}
                            {/* {date.toDateString(oneRecipe)} */}
                            {Date(oneRecipe?.recipeCreated)}
                        </Card.Subtitle>
                        <Card.Text style={{ fontSize: '20px' }}>Ingredients:
                            <br />
                            {oneRecipe?.ingredients}</Card.Text>
                        <Card.Text style={{ fontSize: '20px' }}>Instructions:
                            <br />
                            {oneRecipe?.instructions}</Card.Text>
                    </Card.Body>
                </Card>
            </Container >
        </>
    )
}


export default OpenRecipe; 