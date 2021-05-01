function cardCreate(req, res) {
  if (!req.body) return res.sendStatus(400);

  console.log(req.body);
  res.send('card created');
}

module.exports = cardCreate;
