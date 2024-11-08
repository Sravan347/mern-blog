

const User = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const errorHandlier=require('../utils/error')
const jwt =require('jsonwebtoken')

const signUp = async (req, res, next) => {
  const { userName, password, email } = req.body;

  // Check if all required fields are provided
  if (!userName || !password || !email || userName === "" || email === "" || password === "") {
    // return res.status(400).json({ message: "All fields are required" });
    next(errorHandlier(400,"all fields are require"))
  }

  try {
    // Check if a user with the same username or email already exists
    const existingUser = await User.findOne({ $or: [{ userName }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this username or email" });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);
    

    // Create a new user
    const newUser = new User({
      userName: userName,
      email: email,
      password: hashPassword,
    });

    // Save the user to the database
    await newUser.save();
    
    // Respond with a success message
    res.json({ message: "Signup successful" });
  } catch (err) {
    next(err);
  }
};


const signIn=async(req,res,next)=>{
  const{email,password}=req.body;
  if(!email || !password || email===''  || password===''){
    next(errorHandlier(400,'all field are require'))

  }

  try{
    const validUser=await User.findOne({email})
    if(!validUser){
     return next(errorHandlier(404,'User not found'))
    }
    const validPassword=bcryptjs.compareSync(password,validUser.password)
    if(!validPassword){
     return next(errorHandlier(400,'Invalid password'))
    }
    const token =jwt.sign(
      {id:validUser._id},process.env.JWT,
    )
    const{password: pass, ...rest}=validUser._doc
    res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)

  }catch(err){
    next(err)

  }
}

module.exports = { signUp ,signIn};

