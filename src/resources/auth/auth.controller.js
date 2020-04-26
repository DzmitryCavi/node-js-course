const HttpStatus = require('http-status-codes');
const catchErrors = require('../../common/catchErrors');
const User = require('../users/user.model');
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = require('../../common/config');
const jwt = require('jsonwebtoken');

exports.login = catchErrors(async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!user || !isPasswordMatch) {
    return res
      .status(HttpStatus.FORBIDDEN)
      .send({ auth: false, error: 'Login failed!' });
  }
  const token = jwt.sign({ id: user._id, login: user.login }, JWT_SECRET_KEY, {
    expiresIn: '3m'
  });
  res
    .status(HttpStatus.OK)
    .json({ auth: true, token, user: user.toResponse() });
});
