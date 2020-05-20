const admin = require('firebase-admin');

const serviceAccount = require('./firebase-service-account').config;
const serviceAccountJson = JSON.parse(JSON.stringify(serviceAccount).replace(/\\n/g, 'n'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountJson),
});

const firestore = admin.firestore();

module.exports = firestore;
