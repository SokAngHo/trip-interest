import axios from 'axios';

const savedRouteId = document.getElementById('saved-route-id');
const heartSaveBtn = document.getElementById('heart-save-btn');
const heartUnsaveBtn = document.getElementById('heart-unsave-btn');
const orig = document.getElementById('orig').value;
const dest = document.getElementById('dest').value;
const origAddress = document.getElementById('orig-input').value;
const destAddress = document.getElementById('dest-input').value;
const waypoint = document.getElementById('waypoint');
const waypointAddress = document.getElementById('waypointAddress');

export async function initRouteSave() {
  if (!window.userId) {
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
    heartSaveBtn.style.display = 'none';
    heartUnsaveBtn.style.display = 'block';
    return;
  }

  heartUnsaveBtn.style.display = 'none';
  heartSaveBtn.style.display = 'block';
}

export async function saveRoute(e) {
  e.preventDefault();

  // If user hasn't logged in, redirect to login page
  if (userId == null) {
    window.location.replace('/login');
    return;
  }

  const res = await axios
    .post('/routes/save', {
      userId,
      orig,
      origAddress,
      dest,
      destAddress,
      waypoint: waypoint.value,
      waypointAddress: waypointAddress.value,
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
