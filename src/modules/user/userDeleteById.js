const User = require('./Model');

function userDeleteById(req, res) {
  const userId = req.params.userID;

  //console.log(req.params);

  User.deleteOne({ _id: userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('user delete error');
    });
}
module.exports = userDeleteById;
