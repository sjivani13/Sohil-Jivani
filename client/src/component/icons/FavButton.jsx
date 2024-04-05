import * as React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import api from "../../utils/api.util";

const FavButton = ({ recipeId }) => {
    const handleFavoriteRecipe = (e) => {
        api.post(`/recipes/${recipeId}`)
    }
    return (
        <MdOutlineFavoriteBorder style={{ color: "pink", width: "30" }} onClick={handleFavoriteRecipe} />

    );
};

export default FavButton;  