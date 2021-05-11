const User = require('./Model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
console.log('reached userLogin file');

async function userLogin(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data during registration',
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json('This user does not exist');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    //console.log(isMatch);

    if (!isMatch) {
      res.status(400).json('Incorrect password');
    }

    const token = jwt.sign({ userId: user.id }, '_9876543210_', { expiresIn: '1h' });
    res.json({ token, userId: user.id });

    res.status(200).json('success login');
  } catch (err) {
    res.status(400).json('user login error');
  }
}
module.exports = userLogin;
