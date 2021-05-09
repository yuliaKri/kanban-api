const Card = require('./Model');

function cardUpdate(req, res) {
  const cardId = req.params.cardID;
  console.log(req.params, req.body);
  Card.updateOne({ _id: cardId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('card update error');
    });
  res.send('card was updated');
}

module.exports = cardUpdate;
