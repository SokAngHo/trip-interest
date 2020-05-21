/* Reference:
Firebase, "Add the Firebase Admin SDK to your server", Firebase, 2020. [Online].
Available: https://firebase.google.com/docs/admin/setup.
*/

const admin = require('firebase-admin');

const serviceAccount = require('./firebase-service-account').config;
const serviceAccountJson = JSON.parse(JSON.stringify(serviceAccount).replace(/\\n/g, 'n'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountJson),
});

const firestore = admin.firestore();

module.exports = firestore;
