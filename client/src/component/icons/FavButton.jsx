import * as React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import api from "../../utils/api.util";

const FavButton = (props) => {
    //const handleFavoriteRecipe = (e) => {
      //  api.post(`/recipes/${recipeId}`)
    
    return (
        // <svg fill="none" {...props}>
        //     <path fill="currentColor" 
        //     />
        // </svg>
       <MdOutlineFavoriteBorder style={{ color: "red", width: "30" }} />

    );
};

export default FavButton;  