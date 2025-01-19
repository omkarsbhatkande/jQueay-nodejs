import { registerController } from "../controllers/authController";

const express = require("express");

//router object
const router = express.Router();

//routes
router.post("/register", registerController);

//
export default router;
