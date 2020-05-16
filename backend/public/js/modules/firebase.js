//- https://github.com/firebase/firebaseui-web

import * as firebase from 'firebase/app';
import 'firebase/auth';
const firebaseui = require('firebaseui');

export function initFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBqEwkKJD7SWmg_fuQXw08C_X-nJZysy7A',
    authDomain: 'trip-interest.firebaseapp.com',
    databaseURL: 'https://trip-interest.firebaseio.com',
    projectId: 'trip-interest',
    storageBucket: 'trip-interest.appspot.com',
    messagingSenderId: '909777707055',
    appId: '1:909777707055:web:cc220d9f29db019f6766da',
    measurementId: 'G-EW8KJ6DG9G',
  };

  firebase.initializeApp(firebaseConfig);

  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);
}
