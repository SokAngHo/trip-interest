import { auth } from './modules/firebase';

function checkAuth() {
  const userElement = document.getElementById('user');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');

  auth.onAuthStateChanged(function (user) {
    if (user) {
      const displayName = user.displayName;
      userElement.innerText = `Welcome ${displayName}`;
      userElement.style.display = 'block';
      logoutBtn.style.display = 'block';
      loginBtn.style.display = 'none';
    } else {
      userElement.style.display = 'none';
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'block';
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
