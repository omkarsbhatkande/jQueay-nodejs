const userModel = require("../models/userModel");

exports.registerController = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    // Validate input
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide Name" });
    }
    if (!lastname) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide Last Name" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide Email" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "Please provide Password" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Email already registered, please log in",
      });
    }

    const user = await userModel.create({ name, lastname, email, password });
    res.status(201).send({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in Register controller",
      success: false,
      error,
    });
  }
};
