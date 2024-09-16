// const jwt = require('jsonwebtoken');

// const auth = (roles = []) => {
//   return (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decoded;

//       // Check if the user's role is allowed for this route
//       if (roles.length && !roles.includes(req.user.role)) {
//         return res.status(403).json({ message: 'Forbidden: You do not have access to this resource' });
//       }

//       next();
//     } catch (error) {
//       res.status(400).json({ message: 'Token is not valid' });
//     }
//   };
// };

// module.exports = auth;

const jwt = require('jsonwebtoken');

const auth = (roles = []) => {
  return (req, res, next) => {
    // Extract token from Authorization header
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];  // Get token part of "Bearer <token>"

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Check if the user's role is allowed for this route
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden: You do not have access to this resource' });
      }

      next();
    } catch (error) {
      res.status(400).json({ message: 'Token is not valid' });
    }
  };
};

module.exports = auth;
