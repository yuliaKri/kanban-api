const User = require('./Model');
const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
//const { check, validationResult} = require('express-validator');
console.log('reached userLogin file');

async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json('this user dies not exist');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    //console.log(isMatch);

    if (!isMatch) {
      res.status(400).json('incorrect password');
    }

    /* const token = jwt.sign({ userId: user.id }, config.get(), { expiresIn: '1h' });
    res.json({ token, userId: user.id });*/

    res.status(200).json('login was successful');
  } catch (err) {
    res.status(400).json('user login error');
  }
}
module.exports = userLogin;
