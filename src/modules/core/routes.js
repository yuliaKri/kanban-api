/*
const cardCreate = require('../card/cardCreate');
const cardDelete = require('../card/cardDelete');
const cardUpdate = require('../card/cardUpdate');
const cardGetAll = require('../card/cardGetAll');
const bodyParser = require('body-parser');
const info = require('../info/info');
*/
const home = require('../home/home');
const infoRouter = require('../info/Routes');
//const userRouter = require('../user/Routes');
const userRegister = require('../user/userRegister');

let cards = [
  { id: '1', name: 'First card', status: 'to do', priority: 2 },
  { id: '2', name: 'Second card', status: 'progress', priority: 1 },
];

function routes(app) {
  app.get('/', home);
  app.use('/info', infoRouter); //app.get('/info', info);
  console.log('routes');
  app.use('/user', userRegister);
  app.get('/card', card);

  //app.get('/card', cardGetAll);
  //app.post('/card', bodyParser(app), cardCreate);
  //app.delete('/card/:cardID', cardDelete);
  //app.patch('/card/:cardID', cardUpdate);

  app.delete('/card/:cardID', (req, res) => {
    const cardId = req.params.cardID;
    // console.log(cardId);
    cards = cards.filter((el) => el.id !== cardId);
    res.send('card deleted');
  });

  app.post('/card', (req, res) => {
    const card = req.body;
    cards.push({ id: Math.random().toString(), ...card });
    // console.log(req.body)
    res.send('card created');
  });

  app.patch('/card/:cardID', (req, res) => {
    const cardId = req.params.cardID;
    console.log(cardId, req.body.name);
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].name = req.body.name;
      }
    }
    // cards.map((el) => (el.id === cardId ? { ...card, id: el.id } : el));
    console.log(cards);
    res.send('card updated');
  });

  function card(req, res) {
    res.send(cards);
  }
}

module.exports = routes;
