const User = require('./Model');

function userGetById(req, res) {
  const userId = req.params.userId;

  User.findById(userId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user get all error');
    });
}
module.exports = userGetById;
