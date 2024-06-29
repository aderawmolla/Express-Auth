const jwt=require("jsonwebtoken")

const verifyJwt=(req,res,next)=>{
    console.log("request headers are",req.headers.cookie.split("="))
    // const token=req.headers.authorization.split(" ")[1]
    const token=req.headers.cookie.split("=")[1]
    if(!token){
        res.send("Please give token")
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,data)=>{
        if(err){
            res.send("Invalid token")
        }
        else{
         req.user=data
         console.log("user data is",data)
         next();
        }
    })

}
module.exports=verifyJwt
