const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Servers up static files in public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Routes handling
app.use('/', routes);

module.exports = app;
