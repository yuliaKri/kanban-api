const Card = require('./Model');

function cardDelete(req, res) {
  const userId = req.params.cardID;

  //console.log(req.params);

  Card.deleteOne({ _id: userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card delete error');
    });
  res.send('card deleted');
}

module.exports = cardDelete;
