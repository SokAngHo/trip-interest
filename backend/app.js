const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

module.exports = app;
