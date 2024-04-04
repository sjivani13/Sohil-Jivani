import express from "express";
const router = express.Router();
import requireAuth from "../middleware/requireAuth";
import { Recipe } from "../models";
import  path  from "path";

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
    const { ingredients, instruction, recipe:title, recipeCreated, descriptions  } = req.body;
    const { user } = req;
console.log(req.body)
console.log(req.files.File)
    const recipe = new Recipe({
        ingredients: ingredients,
        instructions: instruction,
        title:title,
        description: descriptions,
        recipeCreate:recipeCreated,
        user: user.id,
    });

    try {
      let  sampleFile = req.files?.file;
      let uploadPath
      if (req.files) {uploadPath =  path.join(__dirname, "..", "public", "images", req?.files.File.name); 
  
    // To save the file using mv() function 
  //  sampleFile.mv(uploadPath, function (err) { 
   //   if (err) { 
        console.log(err); 
   //   return  res.send("Failed !!"); 
  //    } else  res.send("Successfully Uploaded !!"); 
  //  }); 
      //  recipe.image= uploadPath
       // const savedPost = await recipe.save();
       // user.posts = user.posts.concat(savedPost._id);

        await user.save();

        res.json(savedPost.toJSON());
    } 
    }
    catch (error) {
    
        next(error);
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
    if (post) {console.log(post)
        return res.json(post.toJSON());
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
