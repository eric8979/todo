const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    jwt.verify(token, config.get('jwtSecret'), (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
      }

      req.user = decoded.user;
      next();
    });
  } catch (err) {
    console.error('something went wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
