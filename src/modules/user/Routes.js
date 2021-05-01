const Routes = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');
const userDeleteById = require('./userDeleteById');

const router = Routes();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:userID', userGetById);
router.delete('/:userID', userDeleteById);

module.exports = router;
