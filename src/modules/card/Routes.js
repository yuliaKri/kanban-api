const Routes = require('express');
const cardCreate = require('./cardCreate');
const cardGetAll = require('./cardGetAll');
const cardDelete = require('./cardDelete');
const cardUpdate = require('./cardUpdate');

const router = Routes();

router.post('/', cardCreate);
router.get('/', cardGetAll);
router.delete('/:cardID', cardDelete);
router.patch('/card/:cardID', cardUpdate);

module.exports = router;
