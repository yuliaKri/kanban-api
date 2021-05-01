const routes = require('./modules/core/routes');
//const lodash = require('lodash');
//const { get } = require('lodash'); //реструктуризация=>get(a,'name','---')
const express = require('express');
//import express from 'express';
//"start": "nodemon --inspect --exec babel-node index.js",
//"start": "nodemon --inspect src/index.js",***
const bodyParser = require('./modules/core/bodyParser');
const dbConnection = require('./modules/core/dbConnection');
// eslint-disable-next-line no-unused-vars
const errorHandler = require('./modules/core/errorHandler');
const logger = require('./modules/core/logger');
const cors = require('./modules/core/cors');

const app = express();
const PORT = process.env.PORT || 5000;

logger(app);
dbConnection();
bodyParser(app);
cors(app);
routes(app);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// mongodb+srv://admin:admin12345@kanban.notsv.mongodb.net/kanban?retryWrites=true&w=majority
