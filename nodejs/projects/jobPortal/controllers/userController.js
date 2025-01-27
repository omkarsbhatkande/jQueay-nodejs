const userModel = require("../models/userModel");

exports.updateUserController = async (req, res, next) => {
  const { name, lastname, email, location } = req.body;
  if (!name || !email || !location) {
    next("Please provide all filed");
    const user = await userModel.findOne({ _id: req.user.userI });
    user.name = name;
    user.lastname = lastname;
    user.email = email;
    user.location = location;

    await user.save();

    const token = user.createJWT();
    res.status(200).json({
      user,
      token,
    });
  }
};
