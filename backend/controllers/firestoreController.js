const firestore = require('../firestore');
const FieldValue = require('firebase-admin').firestore.FieldValue;

exports.save = async (userId, route) => {
  const data = {
    userId,
    orig: route.orig,
    dest: route.dest,
    waypoint: route.waypoint,
    timestamp: FieldValue.serverTimestamp(),
  };

  await firestore
    .collection('saved-routes')
    .add(data)
    .catch((e) => console.log(e));
};
