const {getUser} = require('../service/auth')


async function restBreakToLoggedinUserOnly(req,res,next){
  //const userId = req.cookies?.uid;
  const userId = req.headers['authorization'];

  //console.log(req.headers);

  if(!userId) return res.redirect('/login');

    const token = userId.split('Bearer ')[1];
    //const user = getUser(userId);
    const user = getUser(token);

  if(!user) return res.redirect('/login')

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {
  // Retrieve the Authorization header
  const authHeader = req.headers['authorization'];
  
  // Check if the Authorization header is missing or does not start with 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Missing or invalid Authorization header' });
  }
  
  // Extract the token from the Authorization header
  const token = authHeader.split('Bearer ')[1];
  
  // Verify the token using your getUser function
  const user = getUser(token);
  
  // Check if the user was found (i.e., the token is valid)
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
  
  // Attach the user object to the request object
  req.user = user;
  
  // Proceed to the next middleware or route handler
  next();
}


module.exports = {
  restBreakToLoggedinUserOnly,
  checkAuth
}