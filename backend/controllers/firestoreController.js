const firestore = require('../firestore');
const FieldValue = require('firebase-admin').firestore.FieldValue;

exports.findSavedRoute = async (req, res) => {
  const { userId, orig, dest, waypoint } = req.body;

  await firestore
    .collection('saved-routes')
    .where('userId', '==', userId)
    .where('orig', '==', orig)
    .where('dest', '==', dest)
    .where('waypoint', '==', waypoint)
    .limit(1)
    .get()
    .then((snapshot) => {
      if (snapshot.empty) res.status(204).end();

      snapshot.forEach((doc) => {
        res.status(200).send(doc.id);
      });
    })
    .catch((e) => console.log(e));
};

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

exports.deleteRoute = async (req, res) => {
  const { routeId } = req.body;

  await firestore
    .collection('saved-routes')
    .doc(routeId)
    .delete()
    .then(() => res.status(200).end())
    .catch((e) => console.log(e));
};
