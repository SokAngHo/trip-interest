const firestoreController = require('./firestoreController');

exports.index = async (req, res) => {
  if (!req.params.userId) res.redirect('/login');

  const savedRoutes = await firestoreController.getSavedRoutes(req.params.userId);

  res.render('favourites', {
    savedRoutes,
  });
};
