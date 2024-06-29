const Sequilize=require("sequelize")
const sequelize=require("../config/config")

const model=()=>{
  const User= sequelize.define("newUser",{
    username:{
    type:Sequilize.STRING
    },
    email:{
    type:Sequilize.STRING

    },
    password:{
      type:Sequilize.STRING
    },
   })
   return User
}

module.exports=model