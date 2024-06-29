
const express=require("express")
const router=express.Router()
const verifyJWT=require("../middleware/auth.middleware")
const userController=require("../controllers/userController")


router.post("/createUser",userController.create)
router.put("/updateUser/:id",verifyJWT,userController.update)
router.get("/getAll",userController.getAll)
router.get("/getuser/:id",userController.getUser)
router.delete("/deleteuser/:id",userController.deleteUser)
router.get("/filterUsers",userController.filterUsers)



module.exports=router