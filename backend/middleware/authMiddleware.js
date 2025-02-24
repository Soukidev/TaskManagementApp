const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  // ✅ Ensure token exists and starts with "Bearer "
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      req.user = { id: decoded.id }; // Attach user ID to request
      next(); // Proceed
    } catch (error) {
      return res.status(401).json({ message: 'Token verification failed', error: error.message });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized, no token provided' });
  }
};

module.exports = protect;
