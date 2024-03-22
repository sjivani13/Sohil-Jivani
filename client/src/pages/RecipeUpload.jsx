import React, { useState } from 'react';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
// import Recipe from '../../../server/src/models/recipe';

// initialState = {
//     instructions: "",
//     ingredients: "",
//     recipeCreated: Date.now()
// }

function RecipeUpload() {
    // const [share, setShare] = useState(initialState)

    return (<>
        <h2 id="head" className="mb-3">Share Your Recipe!!</h2>
        <Container style={{ marginInline: "425px" }}>
            <Form.Group>
                <Button id="uploadBtn">Upload Food Image <input className="fa fa-upload" type="file" /></Button>
            </Form.Group>


        </Container>
    </>
    )
}

export default RecipeUpload;