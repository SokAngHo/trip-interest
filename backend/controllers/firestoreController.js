const firestore = require('../firestore');
const FieldValue = require('firebase-admin').firestore.FieldValue;

exports.saveRoute = async (req, res) => {
  const { userId, orig, dest, waypoint } = req.body;

  const data = {
    userId,
    orig,
    dest,
    waypoint,
    timestamp: FieldValue.serverTimestamp(),
  };

  await firestore
    .collection('saved-routes')
    .add(data)
    .then((ref) => res.status(200).send(ref.id))
    .catch((e) => console.log(e));
};

exports.deleteRoute = async (req, res) => {};
