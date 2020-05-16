const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Servers up static files in public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/css',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, 'node_modules/jquery/dist'))
);

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes handling
app.use('/', routes);

// Error handling for dev environment
// if (app.get('env') === 'development') {
//   app.use(errorHandlers.developmentErrors);
// }

// // Error handling for prod environment
// app.use(errorHandlers.productionErrors);

module.exports = app;
