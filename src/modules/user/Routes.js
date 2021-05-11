const Routes = require('express');
const userRegister = require('./userRegister');
const userGetAll = require('./userGetAll');
const userGetById = require('./userGetById');
const userDeleteById = require('./userDeleteById');
const userAuth = require('./userAuth');
const userLogin = require('./userLogin');
const { check } = require('express-validator');

const router = Routes();

router.post('/user', userRegister);
router.get('/', userGetAll);
router.get('/:userID', userGetById);
router.delete('/:userID', userDeleteById);
//console.log('user routes');
//**** authentication **** //
// user/register
router.post('/register', check('email', 'Incorrect email').isEmail(), userAuth); // [check('email', 'Incorrect email').isEmail(), check('password').isLength({ min: 6 })],
// user/login
router.post('/login', userLogin);

module.exports = router;
