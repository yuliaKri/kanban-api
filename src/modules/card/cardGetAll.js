const Card = require('./Model');

function cardGetAll(req, res) {
  Card.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Cards get all error');
    });
}

module.exports = cardGetAll;
