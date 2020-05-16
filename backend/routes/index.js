const express = require('express');

const mapController = require('../controllers/mapController');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.get('/', mapController.homePage);
router.get('/login', loginController.index);

module.exports = router;
