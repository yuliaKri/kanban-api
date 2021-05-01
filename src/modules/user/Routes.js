const Routes = require('express');
const userRegister = require('./userRegister');
const router = Routes();

router.get('/', userRegister);

module.exports = router;
