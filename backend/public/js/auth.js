import { auth } from './modules/firebase';
import '@babel/polyfill';

const favLink = document.getElementById('fav-link');

function checkAuth() {
  const username = document.getElementById('username');
  // const userId = document.getElementById('userId');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const favLink = document.getElementById('fav-link');

  auth.onAuthStateChanged(function (user) {
    if (user) {
      const displayName = user.displayName;
      window.userId = user.uid;
      username.innerText = `Welcome ${displayName}`;
      username.style.display = 'block';
      logoutBtn.style.display = 'block';
      loginBtn.style.display = 'none';
      favLink.setAttribute('href', `/favourites/${user.uid}`);
    } else {
      username.style.display = 'none';
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'block';
      favLink.classList.add('disabled');
      // Redirect to login page unless user is on login page or homepage
      if (window.location.pathname !== '/login' && window.location.pathname !== '/') {
        window.location.replace('/login');
      }
    }
  });
}
checkAuth();

window.logout = function () {
  auth.signOut();
};

// document.getElementById('fav-link').addEventListener('click', async function () {
//   await axios.get('/favourites', {
//     headers: {
//       userId: window.userId,
//     },
//   });
// });
