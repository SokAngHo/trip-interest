const firebaseui = require('firebaseui');

import { firebase, auth } from './modules/firebase';

// https://github.com/firebase/firebaseui-web
function initLoginUI() {
  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start('#firebaseui-auth-container', uiConfig);
}

initLoginUI();
