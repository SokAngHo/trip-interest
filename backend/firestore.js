const admin = require('firebase-admin');

const serviceAccount = require('./firebase-service-account').config;

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
});

const firestore = admin.firestore();

module.exports = firestore;
