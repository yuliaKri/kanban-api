const Card = require('./Model');

function cardCreate(req, res) {
  console.log(req.body);
  // res.send('userRegister is here');
  const newCard = new Card({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
  });
  newCard.save();
  res.status(200).json('card created');
}
module.exports = cardCreate;
