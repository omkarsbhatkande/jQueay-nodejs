import userModel from "../models/userModel";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validate
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "please provide Name" });
    }
    if (!email) {
      return res
        .status(400)
        .send({ success: false, message: "please provide Email" });
    }
    if (!password) {
      return res
        .status(400)
        .send({ success: false, message: "please provide Password" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Email already Register please Login",
      });
    }
  } catch (error) {
    console.log(error);
    res.send(400).send({
      message: "Error In Register controller",
      success: false,
      error,
    });
  }
};
