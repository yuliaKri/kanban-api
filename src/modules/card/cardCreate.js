const Card = require('./Model');
//const date = require('date-and-time');

function cardCreate(req, res) {
  console.log(req.body);
  //const now = new Date();
  //date.format(now, 'YYYY/MM/DD HH:mm:ss');
  const newCard = new Card({
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
    markedToDelete: req.body.markedToDelete,
    // createdAt: date,
  });
  newCard.save();
  res.status(200).json('card created');
}
module.exports = cardCreate;
