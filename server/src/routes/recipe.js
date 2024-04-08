import express from "express";
const router = express.Router();
import requireAuth from "../middleware/requireAuth";
import { Recipe, User } from "../models";
import path from "path";


router.get("/", async (req, res) => {
    const populateQuery = [
        { path: "user", select: ["username"] },
        // {
        // path: "reviews",
        // populate: { path: "user", select: ["username"] },
        // },
        // {
        //   path: "likes",
        //  populate: { path: "user", select: ["username"] },
        //}
    ];
    const posts = await Recipe.find({})
        .sort({ created: -1 })
        .populate(populateQuery)
        .exec();

    res.json(posts.map((post) => post.toJSON()));
});

router.post("/", requireAuth, async (req, res, next) => {
    const { ingredients, instructions, recipe: title, recipeCreated, description } = req.body;
    const { user } = req;

console.log(req.files)
    const recipe = new Recipe({
        ingredients: ingredients,
        instructions: instructions,
        title: title,
        description: description,
        recipeCreate: recipeCreated,
        user: user.id,
    });

    try {
        let sampleFile = req.files?.image;
        let fileName;
 
      let uploadPath
        if (req.files) {
            fileName = req?.files.image.name
            uploadPath = path.join(__dirname, "..", "..", "public", "images", fileName ); 
          
   console.log(uploadPath)
   
    sampleFile.mv(uploadPath, function (err) { 
      if (err) { 
        console.log(err); 
      return  res.send("Failed !!"); 
      } //else  res.send("Successfully Uploaded !!"); 
    }); 
            recipe.image = `/images/${fileName}`
            
            console.log("IN THE IF:",req.body)
        const savedPost = await recipe.save();

          // sabe the recipe id to the userr from the model
          const currentUser = await User.findById({_id: user.id})
          currentUser.recipePost = currentUser.recipePost.concat(savedPost._id);
         

        await currentUser.save();

        return res.json(savedPost.toJSON());
    } else{

            recipe.image = "dinner.jpg"
            console.log(recipe)
        const savedPost = await recipe.save();
        console.log("IN THE ELSE:",req.body)

          // sabe the recipe id to the userr from the model
          const currentUser = await User.findById({_id: user.id})
          currentUser.recipePost = currentUser.recipePost.concat(savedPost._id);
         

            await currentUser.save();

        return res.json(savedPost.toJSON());

    }
    }
    catch (error) {
    console.log(error)
     // res.send(500).json({message: "something went wrong..."})
    }
});

router.get("/:id", async (req, res) => {
    const populateQuery = [
        { path: "user", select: ["username"] },
        //  {
        // path: "reviews",
        //  populate: { path: "email", select: ["username"] },
        // },
    ];
    const post = await Recipe.findById(req.params.id)
        .populate(populateQuery)
        .exec();
    if (post) {
        console.log(post)
        return res.json(post.toJSON());
    } else {
        res.status(404).end();
    }
});

router.delete("/:id", requireAuth, async (req, res, next) => {
    const { id } = req.params;
    const { user } = req;
    try {
        const deleteRecipe = await Recipe.findByIdAndDelete(id)
        console.log(deleteRecipe)
       // if(user && user.uid !== deleteRecipe.user){
         //   console.log("it's getting here")
         //   return res.status(401)
            
       // }
        if (!deleteRecipe) {
            res.status(404).json({ error: "Error deleting recipe." });
        }
        res.status(200).json(deleteRecipe)
    } catch (error) {console.log(error) }
});

router.all("/like/:recipeId", requireAuth, async (req, res) => {
    
    const { recipeId } = req.params;
    console.log(recipeId)
    const { user } = req;
    console.log(user)
    const recipe = await Recipe.findOne({ _id: recipeId });

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
        console.log(err)
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
