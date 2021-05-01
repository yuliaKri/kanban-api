const Routes = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');

const router = Routes();

router.post('/', userRegister);
router.get('/', userGetAll);

module.exports = router;
