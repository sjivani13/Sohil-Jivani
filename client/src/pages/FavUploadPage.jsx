import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FavUploadPage() {
    return (
        <>
            <Button style={{ background: "#b27581" }} as={Link} to="/dashboard">Go Back</Button>
            <h2>Your Favorite Recipes</h2>
        </>


    )
}

export default FavUploadPage