function cardUpdate(req, res) {
  /*const cardID = req.params.cardID;
    req.body = { name: 'Updated card', status: 'done' };
    const card = req.body;
    // cards.map((el) => (el.id === cardID ? { ...card, id: el.id } : el));*/
  res.send('card updated');
}

module.exports = cardUpdate;
