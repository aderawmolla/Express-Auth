const dotenv=require("dotenv").config()
const userModel = require("../models/index").User
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const register = (req, res) => {
    const { username, password, email } = req.body;
    userModel.findOne({ where: { username: username } }).then((data) => {
      if (data) {
        res.send("User already exist");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = {
          username: username, // Corrected variable name
          password: hashedPassword,
          email: email
        };
  
        userModel.create(user).then((data) => {
          res.send({
            "message": "User Registered Successfully",
            "user": data
          });
        }).catch((error) => {
          console.log(error);
        });
      }
    }).catch((error) => {
      res.send("There is some problem here");
    });
  };
const login = (req, res, next) => {
    const { username, password } = req.body;
    userModel.findOne({ where: { username: username } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "User not exist" });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ message: "Internal server error" });
                }

                if (!isMatch) {
                    return res.status(401).json({ message: "Invalid credentials" });
                }

                const token = jwt.sign({ username: username,userId:user.id}, process.env.SECRET_KEY, { expiresIn: '1h' });
                const refreshToken = jwt.sign({ username: username,userId:user.id}, process.env.SECRET_KEY);

                // Set the auth cookie before sending the response
                res.cookie("authcookie", token, { maxAge: 900000, httpOnly: true });

                // Send the response
                res.json({ message: "Login success", token: token, refreshToken: refreshToken });
            });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        });
};
const logout=(req,res)=>{
    res.clearCookie("authcookie")
    res.json({message:"Logout success"})
}

const refreshToken=(req,res)=>{
   const token=req.headers.cookie.split("=")[1]
   jwt.verify(token,process.env.REFRESH_TOKEN_SECRETE,(err,data)=>{
      if(err){
         res.send("Invalid token")
      }
      else{
         const newToken=jwt.sign({username:data.username},process.env.SECRET_KEY)
         res.cookie("authcookie",newToken,{maxAge:900000,httpOnly:true})
         res.json({message:"Token refreshed",token:newToken})
      }

   })
}
module.exports={register,login,logout,refreshToken}