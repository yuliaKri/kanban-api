const User = require('./Model');
const bcrypt = require('bcryptjs');
//const { check, validationResult} = require('express-validator');

async function userAuth(req, res) {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json('this user is already exist');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    //console.log(hashedPassword);
    const user = new User({ email: email, password: hashedPassword });

    await user.save();

    res.status(200).json('the user was created');
  } catch (err) {
    res.status(400).json('user register error');
  }
}
module.exports = userAuth;
