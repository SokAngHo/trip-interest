const firestoreController = require('../controllers/firestoreController');

exports.index = async (req, res) => {
  const savedRoutes = await firestoreController.getSavedRoutes(req.params.userId);

  res.render('favourites', {
    savedRoutes,
  });
};
