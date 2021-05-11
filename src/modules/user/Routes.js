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

//**** authentication **** //
// user/register
router.post(
  '/register',
  check('email', 'Invalid email. Please, inter a valid email!').isEmail(),
  userAuth,
);
// [check('email', 'Invalid email. Please, inter a valid email!').isEmail(), check('password').isLength({ min: 6 })],
// user/login
router.post(
  '/login',
  check('email', 'Inter valid email').normalizeEmail().isEmail(),
  userLogin,
);

module.exports = router;
