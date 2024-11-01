const sessionIdToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secret = "Omkar@1821";

function setUser(user){
  //sessionIdToUserMap.set(id,user)
  return jwt.sign({
    _id:user._id,
    email:user.email
  },secret);
}


function getUser(token){
  //return sessionIdToUserMap.get(id);
  if(!token) return null;
  try {
    return jwt.verify(token,secret);
  } catch (error) {
    return null;
  }
  
  
}


module.exports = {
  setUser,
  getUser
}














// const jwt = require('jsonwebtoken');
// const secret = "Omkar@1821";

// // Function to generate a JWT token for a given user
// function setUser(user) {
//   try {
//     const token = jwt.sign(user, secret, { expiresIn: '1h' }); // Optional: setting token expiration
//     console.log("Generated Token:", token); // Debug: Log the generated token
//     return token;
//   } catch (err) {
//     console.error("Error generating token:", err.message);
//     return null;
//   }
// }

// // Function to verify a JWT token and retrieve the user information
// function getUser(token) {
//   if (!token) {
//     console.error("No token provided or token is null"); // Debug: Log if no token is provided
//     return null;
//   }
//   try {
//     console.log("Token to Verify:", token); // Debug: Log the token to be verified
//     return jwt.verify(token, secret);
//   } catch (err) {
//     console.error("JWT verification error:", err.message); // Debug: Log the error message
//     return null;
//   }
// }

// module.exports = {
//   setUser,
//   getUser
// };


