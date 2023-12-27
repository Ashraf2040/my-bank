
import mongoose from "mongoose";
import { Schema } from "mongoose";


  const userSchema = new Schema ({
    username:{type:String , required:true},
    email:{type:String , required:true},
    password:{type:String , required:true},
    credit : {type :Number ,required:true},
    deposits:{type:Array,required:true},
    withdraw:{type:Array ,required :true},
    AccountNo :{type:Number,required:true},
    IBAN:{type:String,required:true}
    

},
  
  {timestamps:true}
  
  )
  
  // const User = mongoose.models.user || mongoose.model("User",userSchema)
// export default User
  module.exports =
    mongoose.models.User || mongoose.model('User', userSchema);
 