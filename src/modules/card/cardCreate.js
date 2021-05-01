function cardCreate(req, res) {
  if (!req.body) return res.sendStatus(400);

  /*const userName = req.body.name;
  const userAge = req.body.age;
  const user = new User({name: userName, age: userAge});*/

  //const card = { id: '1', name: 'new card', status: 'done', priority: 2 };
  //const card = req.body;
  /* card.save(function (err) {
      if (err) return console.log(err);
      res.send(card);
    });
  });*/
  //cards.push(req.body);
  console.log(req.body);
  res.send('card created');
}

module.exports = cardCreate;
