import React, { useState } from 'react';
import { Form, Button, InputGroup, Container, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import Recipe from '../../../server/src/models/recipe';
import api from '../utils/api.util';
import { toast } from 'react-toastify'
import ImageUpdater from '../component/ImageUpdater/ImageUpdater';

const initialState = {
    instructions: "",
    ingredients: "",
    description: "",
    recipe: "",
    recipeCreated: Date.now(),
    image: "",
}

function RecipeUpload({ setIsUploaded, handleFileChange, image, setImage }) {
    const [share, setShare] = useState(initialState)
    const handleInputChange = (event) => {
        setShare({
            ...share,
            [event.target.name]: event.target.value,
        });
    };
    console.log(share)

    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        event.stopPropagation();
        toast.success('Submitted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        //setData({
        //  ...data,
        //   isSubmitting: true,
        //  errorMessage: null,
        // });

        try {
            const res = await api.post("/recipes", { instructions: share, ingredients: share.ingredients, description: share.description, recipe: share.recipe, recipeCreated: share.recipeCreated, image }, { headers: { "content-type": "multipart/form-data" } });
            console.log(res)
            setIsUploaded(true)
            setImage(null)
            navigate("/dashboard");
        } catch (error) {
            console.log(error)
            toast.error('Error!! Please try again! ');
            setIsUploaded(false)
            //setData({
            //  ...data,
            //   isSubmitting: false,
            //  errorMessage: error ? error.message || error.statusText : null,
            //  });
        }
    };
    return (
        <Container id="uploadCont">


            <Card id="yourRecipe">
                <h2 id="share">Share Your Recipe!!</h2>

                <Form onSubmit={handleSubmit} id='recipe-upload'>
                    <Form.Label htmlFor='recipe-title'>
                        <p>Title your dish: </p>

                        <textarea onChange={handleInputChange} name='recipe' id="recipe-title" required></textarea>
                    </Form.Label>
                    <Form.Label htmlFor='recipe-desc'>
                        <p>Small description about your dish: </p>
                        <textarea onChange={handleInputChange} name="description" id="desc" rows="3" required></textarea>
                        <Button id="uploadBtn" type="file"> Upload Food Image
                            <input onChange={handleFileChange} name="file" className="fa fa-upload" type="file" />
                        </Button>
                    </Form.Label>
                    <Form.Label htmlFor="recipe-ingredients">
                        <p>Ingredients:</p>
                        <textarea onChange={handleInputChange} name="ingredients" id="recipe-ingredients" rows="5" required></textarea>
                    </Form.Label>
                    <p>Instructions:</p>
                    <textarea onChange={handleInputChange} name="instructions" id="recipe-method" rows="5" required></textarea>
                    <Form.Label htmlFor="recipe-method">
                    </Form.Label>
                    <button id="submitBtn" type="submit">Add Recipe</button>
                </Form>

            </Card>
        </Container >
    )
}

export default RecipeUpload;





















{/* <form >
    <label>
        Meal Type:
        <select>
            <option value="mealType">Choose Meal Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="snack">Snack</option>
        </select>
    </label>
    <label>
        Cook Time:
        <select>
            <option value="cooktime">Choose Cook Time</option>
            <option value="lessThan30">Less Than 30 </option>
            <option value="thirty">30 min to 1 hour</option>
            <option value="hours">1 to 2 hours</option>
            <option value="crockpot">Crockpot</option>
        </select>
    </label>
</form> */}



