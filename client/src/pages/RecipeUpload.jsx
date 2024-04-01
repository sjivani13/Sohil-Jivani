import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';

function RecipeUpload() {

    return (
        <Container id="uploadCont">


            <Card>
                <h2 id="share">Share Your Recipe!!</h2>

                <form id='recipe-upload'>
                    <label htmlFor='recipe-title'>
                        <p>Title your dish: </p>
                        <textarea name='recipe-title' id="recipe-title" row="1" required></textarea>
                    </label>
                    <label htmlFor='recipe-desc'>
                        <p>Small description about your dish: </p>
                        <textarea name='recipe-desc' id="desc" rows="2" required></textarea>
                    </label>
                    <label htmlFor="recipe-ingredients">
                        <p>Ingredients:</p>
                        <textarea id="recipe-ingredients" rows="5" required></textarea>
                    </label>
                    <p>Instructions:</p>
                    <label htmlFor="recipe-method">
                        <textarea id="recipe-method" rows="5" required></textarea>
                    </label>
                    <Button id="uploadBtn" type="file"> Upload Food Image
                        <input className="fa fa-upload" type="file" />
                    </Button>
                </form>
                <button id="submitBtn" type="submit">Add Recipe</button>
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



