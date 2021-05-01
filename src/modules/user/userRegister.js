const User = require('./Model');

function userRegister(req, res) {
  console.log(req.body);
  // res.send('userRegister is here');
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save();
  res.status(200).json('user created');
  console.log('new user should be created from react');
}
module.exports = userRegister;
