const express = require('express');
const mapController = require('../controllers/mapController');
const loginController = require('../controllers/loginController');
const firestoreController = require('../controllers/firestoreController');
const favouritesController = require('../controllers/favouritesController');

const router = express.Router();

router.get('/', mapController.homePage);
router.get('/login', loginController.index);
router.get('/favourites', favouritesController.index);
router.get('/favourites/:userId', favouritesController.index);

router.post('/routes/find', firestoreController.findSavedRoute);
router.post('/routes/save', firestoreController.saveRoute);
router.post('/routes/delete', firestoreController.deleteRoute);
router.get('/routes/:userId', firestoreController.getSavedRoutes);

module.exports = router;
