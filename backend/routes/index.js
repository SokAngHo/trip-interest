const express = require('express');
const mapController = require('../controllers/mapController');
const loginController = require('../controllers/loginController');
const firestoreController = require('../controllers/firestoreController');

const router = express.Router();

router.get('/', mapController.homePage);
router.get('/login', loginController.index);

router.post('/route/find', firestoreController.findSavedRoute);
router.post('/route/save', firestoreController.saveRoute);
router.post('/route/delete', firestoreController.deleteRoute);

module.exports = router;
