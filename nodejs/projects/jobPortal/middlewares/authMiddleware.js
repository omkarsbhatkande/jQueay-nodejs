const JWT = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // Added proper logic for "Bearer" check
    return next("Authentication Failed"); // Updated error message for clarity
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    return next("Authentication Failed"); // Updated error message for consistency
  }
};

module.exports = userAuth;
