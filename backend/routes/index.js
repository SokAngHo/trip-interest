const express = require('express');
const mapController = require('../controllers/mapController');
const loginController = require('../controllers/loginController');
const firestoreController = require('../controllers/firestoreController');

const router = express.Router();

router.get('/', mapController.homePage);
router.get('/login', loginController.index);
router.post('/save', firestoreController.saveRoute);

module.exports = router;
