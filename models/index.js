const db={}
db.User=require("./user.model")()
db.Post=require("./post.model")

module.exports=db
