const User = require('./Model');

function userGetAll(req, res) {
  User.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user get all error');
    });
}
module.exports = userGetAll;
