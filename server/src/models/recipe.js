import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        // title,
        // description,
        ingredients: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        // recipeType: {
        //     type: String,
        //     enum: ["breakfast", "brunch", "lunch", "dinner", "appetizer", "dessert", "snack"]
        // },
        recipeCreated: {
            type: Date,
            default: Date.now,
        },
    }, { timestamps: true }
)

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;











// likes: [
//     {
//         type: ObjectId,
//         ref: "User",
//     },
// ],
// reviews: [
//     {
//         text: {
//             type: String,
//             required: true,
//             maxlength: 120,
//         },
//         author: { type: ObjectId, ref: "User" },
//         recipeCreated: {
//             type: Date,
//             default: Date.now,
//         },
//     },
// ],