import axios from 'axios';

const savedRouteId = document.getElementById('saved-route-id');
const heartSaveBtn = document.getElementById('heart-save-btn');
const heartUnsaveBtn = document.getElementById('heart-unsave-btn');
const orig = document.getElementById('orig').value;
const dest = document.getElementById('dest').value;
let waypoint = document.getElementById('waypoint');

export async function initRouteSave() {
  if (!orig || !dest || !window.userId) {
    heartSaveBtn.style.display = 'block';
    return;
  }

  const res = await axios
    .post('/routes/find', {
      userId,
      orig,
      dest,
      waypoint: waypoint.value,
    })
    .catch((e) => console.log(e));

  if (res.status === 200) {
    savedRouteId.value = res.data;
    heartUnsaveBtn.style.display = 'block';
    return;
  }

  heartSaveBtn.style.display = 'block';
}

export async function saveRoute(e) {
  e.preventDefault();

  // If user hasn't logged in, redirect to login page
  if (!userId) window.location.replace('/login');

  const res = await axios
    .post('/routes/save', {
      userId,
      orig,
      dest,
      waypoint: waypoint.value,
    })
    .catch((e) => console.log(e));

  if (res.status === 200) {
    savedRouteId.value = res.data;
    heartSaveBtn.style.display = 'none';
    heartUnsaveBtn.style.display = 'block';
  }
}

export async function deleteRoute(e) {
  e.preventDefault();

  if (savedRouteId.value === '') {
    console.log('Cannot find route id');
    return;
  }

  const res = await axios
    .post('/routes/delete', {
      routeId: savedRouteId.value,
    })
    .catch((e) => console.log(e));

  if (res.status === 200) {
    savedRouteId.value = '';
    heartUnsaveBtn.style.display = 'none';
    heartSaveBtn.style.display = 'block';
  }
}
