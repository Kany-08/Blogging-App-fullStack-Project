const jwt = require("jsonwebtoken");
const usersSchema = require("../models/usersSchema");

exports.auth = async (req,res, next)=>{
  try {
    const token = req.header("token");
    const decode = jwt.verify(token, "secret")
    if(decode){
      console.log(decode);
      
      const user = await usersSchema.findOne({_id: decode._id})
        console.log(user);
        
        if(user && user._id === req.params.id){
          next()
        } else {
          res.send({success:false, message: "It is not allowed"})
        }
        
    } else {
        res.send({success:false, message: "please provide valid token!"})
    }

  } catch (error) {
      res.send({success:false, message: error.message})
  }
    
}