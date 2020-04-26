const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');
const User = require('../resources/users/user.model');
const { JWT_SECRET_KEY } = require('../common/config');

module.exports = async (req, res, next) => {
  let token = req.header('Authorization');
  if (token && token.indexOf('Bearer ') === 0) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      auth: false,
      error: 'Not authorized to access this'
    });
  }

  try {
    const { id: _id } = await jwt.verify(token, JWT_SECRET_KEY);
    const user = await User.findById(_id);

    if (!user) throw Error('Not authorized to access this');
  } catch (error) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      auth: false,
      error: error.message
    });
  }
  next();
};
