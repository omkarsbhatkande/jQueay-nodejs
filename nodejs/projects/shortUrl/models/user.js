const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name :{
      type:String,
      required:true,
    },email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    },
    visitHistory:[{timeStamps:{type:Number}}],
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'users',
    }
},
{timeStamps:true}
)

const User = mongoose.model("User" , userSchema);

module.exports = User;