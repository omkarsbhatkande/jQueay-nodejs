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
  //token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User created successfully",
    user: {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return next("Please provide all required fields."); // Improved error message
  }

  try {
    // Find user by email
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return next("Invalid username or password."); // Consistent error message
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next("Invalid username or password.");
    }

    // Remove password from response
    user.password = undefined;

    // Generate token
    const token = user.createJWT();

    // Send response
    res.status(200).json({
      success: true,
      message: "Login successful.",
      user,
      token,
    });
  } catch (error) {
    next(error.message || "An error occurred during login."); // Catch any unexpected errors
  }
};
