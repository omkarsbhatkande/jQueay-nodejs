const mongoose = require("mongoose");

const connectDb = async()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`connection done ${mongoose.connection.host}`);
    
  } catch (error) {
    console.log(error);
  }
}


module.exports = connectDb;