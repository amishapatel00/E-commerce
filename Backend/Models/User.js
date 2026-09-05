import mongoose from "mongoose";
const userSchema=mongoose.Schema({
          name:{
                    type: String,
                    reuquired: true,
          },
          email:{
                    type:String,
                    reuquired: true,
                    unique: true,
          },
          password:{
                    type:String,
                    reuquired: true,
                    
          }


},{timestamps: true}
);
export default mongoose.model('User',userSchema);
