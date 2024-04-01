import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema(
    {
        ingredients: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        likes: [
            {
                type: ObjectId,
                ref: "User"
            }
        ]
    },
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