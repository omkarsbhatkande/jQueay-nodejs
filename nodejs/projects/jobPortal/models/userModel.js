const mongoose = require("mongoose");
const validator = require("validator"); // Importing the validator library

// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Please mention a correct email"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    location: {
      type: String,
      default: "Pune",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
