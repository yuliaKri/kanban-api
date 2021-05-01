const Routes = require('express');
const info = require('./info');
const router = Routes();

router.get('/', info);

module.exports = router;
