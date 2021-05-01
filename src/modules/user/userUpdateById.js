const User = require('./Model');

function userUpdateById(req, res) {
  const userId = req.params.userID;

  delete req.body.password;

  console.log(req.params);
  User.updateOne({ _id: userId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user update error');
    });
}
module.exports = userUpdateById;
