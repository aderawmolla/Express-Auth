const express=require("express")
const app=express()
app.use(express.Router())
app.use(express.json())
const userRoute=require("./routes/userRoute")
const db=require('./models/index')
const sequelize=require("./config/config")
const authRoute=require("./routes/authentication.route")
const postRoute=require("./routes/postRoutes")

sequelize.sync().then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});
const port=process.env.PORT
app.use("/users",userRoute)
app.use("/posts",postRoute)
app.use("/",authRoute)


app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`)
})