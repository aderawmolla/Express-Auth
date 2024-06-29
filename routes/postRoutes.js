const express=require("express")
const postController=require("../controllers/post.controller")
const router=express.Router()
const verifyJwt=require("../middleware/auth.middleware")

router.post("/createPost",verifyJwt,postController.createPost)
router.get("/getPosts",postController.getPosts)
router.delete("/deletePost/:id",verifyJwt,postController.deletePost)


module.exports=router