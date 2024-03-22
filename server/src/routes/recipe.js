import express from "express";
const router = express.Router();

// import { Recipe } from "../models";
import Recipe from "../models/recipe";


router.get("/", async (req, res) => {
    const populateQuery = [
        { path: "author", select: ["username"] },
        {
            path: "reviews",
            populate: { path: "user", select: ["username"] },
        },
        {
            path: "likes",
            populate: { path: "user", select: ["username"] },
        }
    ];
    const posts = await Recipe.find({})
        .sort({ created: -1 })
        .populate(populateQuery)
        .exec();

    res.json(posts.map((post) => post.toJSON()));
});

router.post("/", async (req, res, next) => {
    const { ingredients, instructions } = req.body;
    const { user } = req;


    const recipe = new Recipe({
        ingredients: ingredients,
        instructions: instructions,
        user: email,
    });

    try {
        const savedPost = await recipe.save();
        user.posts = user.posts.concat(savedPost._id);

        await user.save();

        res.json(savedPost.toJSON());
    } catch (error) {
        console.log
        next(error);
    }
});

router.get("/:id", async (req, res) => {
    const populateQuery = [
        { path: "email", select: ["username"] },
        {
            path: "reviews",
            populate: { path: "email", select: ["username"] },
        },
    ];
    const post = await Recipe.findById(req.params.id)
        .populate(populateQuery)
        .exec();
    if (post) {
        res.json(post.toJSON());
    } else {
        res.status(404).end();
    }
});

router.delete("/:id", async (req, res, next) => {
    const { id } = req.params

    try {
        const deletePost = await Recipe.findByIdAndDelete(id)

        if (!deletePost) {
            res.status(404).json({ error: "Error deleting recipe." });
        }
        res.status(200).json(deletePost)
    } catch (error) { }
});

router.all("/like/:postId", async (req, res) => {
    const { postId } = req.params;
    const { user } = req;
    const recipe = await Recipe.findOne({ _id: postId });

    if (!recipe) {
        return res.status(422).json({ error: "Cannot find recipe" });
    }
    try {
        if (recipe.likes.includes(user.id)) {
            const result = await recipe.updateOne({
                $pull: { likes: user.id },
            });

            res.json(result);
        } else {
            const result = await recipe.updateOne({
                $push: { likes: user.id },
            });

            res.json(result);
        }
    } catch (err) {
        return res.status(422).json({ error: err });
    }
});

router.put("/reviews", async (req, res, next) => {
    const { ingredients, userId, recipeId } = req.body;
    const reviews = {
        ingredients: ingredients,
        author: userId,
    };
    const populateQuery = [
        { path: "reviews.author", select: ["username"] },
    ];
    Recipe.findByIdAndUpdate(
        recipeId,
        {
            $push: { reviews: reviews },
        },
        {
            new: true,
        }
    )
        .populate(populateQuery)
        .exec((err, result) => {
            if (err) {
                next(err);
            } else {
                res.json(result);
            }
        });
});

module.exports = router;
