const express = require('express');

const mapController = require('../controllers/mapController');

const router = express.Router();

router.get('/', mapController.homePage);

module.exports = router;
