const User = require('./Model');

function cardCreate(req, res) {
  console.log(req.body);
  // res.send('userRegister is here');
  const newUser = new User({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
  });
  newUser.save();
  res.status(200).json('card created');
  //console.log('new card should be created from react');
}
module.exports = cardCreate;
