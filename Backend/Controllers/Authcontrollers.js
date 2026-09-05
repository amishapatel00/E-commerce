import User from "../Models/User";
import bcrypt from "bycryptjs";

export const signupUser=async (req,res)=>{
          try{
                    const {name,email,password}=req.body;
                    //Check if user already exist
                    const UserExists=await User.findOne({email});
                    if(UserExists){
                              return res.status (400).json({message:"User already Exists"});
                    }
                    //Hash Password
                    const hashPassword=await bcrypt.hash(password,10);
                    //create user
                    await User.create({
                              name,
                              email,
                              password:hashPassword
                    });
                    res.json ({message:"user Registered successfully"});

          }
          catch(error){
                    res.status(500).json({message:"server error",error});
          }
};