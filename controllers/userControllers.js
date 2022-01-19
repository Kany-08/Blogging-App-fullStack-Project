const usersSchema = require("../models/usersSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await usersSchema.find();
  res.send({ success: true, data: users });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
  
};

exports.createUser = async (req, res, next) => {
  try {
    
  const user = await usersSchema.findOne({ email: req.body.email });
  const hashPassword = bcrypt.hashSync(req.body.password, 10)

  if (user) {
    res.send({ success: false, message: "User is already exists" });
  } else {
    const user = new usersSchema({...req.body, password:hashPassword});
    await user.save();
    res.send({ success: true, data: user });
  }

  } catch (error) {
    res.send({ success: false, message: error.message });
  }

  
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await usersSchema.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
     { new: true }
  );

  res.send({ success: true, data: updatedUser });
  } catch (error) {
    res.send({ success: false, message: error.message });
    console.log(error.message);
  }
  
};


exports.getUser = async (req,res,next)=>{
  try {
    const user = await usersSchema.findOne({_id:req.params.id})
    res.send({success:true, data:user})
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
    
};

exports.deleteUser = async (req,res)=>{
  try {
     const user = await usersSchema.findByIdAndDelete(req.params.id)
    res.send({success:true, data:user})
  } catch (error) {
    res.send({ success: false, message: error.message });
    console.log(error.message);
  }
   
}

exports.loginUser = async (req,res) =>{
  try {
    const user = await usersSchema.findOne({email: req.body.email})
  if(user){
    const test = bcrypt.compareSync(req.body.password, user.password)
    if(test){
      const token = jwt.sign({email:user.email, _id:user._id}, "secret")
      user.token = token;
      await user.save()
      res.send({success:true, token:token})
    } else {
      res.send({success:false, message:"password is wrong!"})
    }

  }else {
    res.send({success:false, message:`email doesn't exist ${this.createUser}`})//to create the registration
    console.log(res.send);
  }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
  
}



