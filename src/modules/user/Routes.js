const Routes = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');

const router = Routes();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userID', userGetById);

module.exports = router;
