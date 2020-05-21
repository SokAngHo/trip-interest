import * as firebase from 'firebase/app';
import 'firebase/auth';

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

export { firebase };
export const auth = firebase.auth();
