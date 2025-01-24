const userModel = require("../models/userModel");

exports.registerController = async (req, res, next) => {
  const { name, lastname, email, password } = req.body;
  // Validate input
  if (!name) {
    next("Please Provide Name");
    // return res
    //   .status(400)
    //   .send({ success: false, message: "Please provide Name" });
  }
  if (!lastname) {
    next("Please Provide Last Name");
    // return res
    //   .status(400)
    //   .send({ success: false, message: "Please provide Last Name" });
  }
  if (!email) {
    next("Email is Required");
    // return res
    //   .status(400)
    //   .send({ success: false, message: "Please provide Email" });
  }
  if (!password) {
    next("Password is Required");
    // return res
    //   .status(400)
    //   .send({ success: false, message: "Please provide Password" });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    next("Email already registered, please log in");
    // return res.status(400).send({
    //   success: false,
    //   message: "Email already registered, please log in",
    // });
  }

  const user = await userModel.create({ name, lastname, email, password });
  res.status(201).send({
    success: true,
    message: "User created successfully",
    user,
  });
};
