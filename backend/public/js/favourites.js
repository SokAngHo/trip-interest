import axios from 'axios';

let map;
let directionsService;
let directionsRenderer;
let selectedRouteId;

function initMap() {
  // Initilise map to Melbourne location
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -37.8136, lng: 144.9631 },
    zoom: 8,
  });
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

window.showRoute = (routeId) => {
  // If there is previous selected route, clear previous selected route highlight
  if (selectedRouteId != null) document.getElementById(selectedRouteId).classList.remove('active');

  const currentSelectedRoute = selectRoute(savedRoutes, routeId);
  selectedRouteId = routeId;
  // Highlight current selected route
  document.getElementById(selectedRouteId).classList.add('active');

  drawRoute(currentSelectedRoute);
};

function selectRoute(savedRoutes, routeId) {
  for (var i = 0; i < savedRoutes.length; i++) {
    if (savedRoutes[i]['id'] === routeId) {
      return savedRoutes[i];
    }
  }
}

window.deleteRoute = async (routeId) => {
  const res = await axios
    .post('/routes/delete', {
      routeId,
    })
    .catch((e) => console.log(e));

  if (res.status === 200) {
    const element = document.getElementById(routeId);
    element.parentNode.removeChild(element);
    if (routeId === selectedRouteId) selectedRouteId = null;
  }
};

function drawRoute(route) {
  let waypointReq = [];
  if (route.waypoint !== '') {
    waypointReq[0] = { location: { placeId: route.waypoint }, stopover: true };
  }

  directionsService.route(
    {
      origin: { placeId: route.orig },
      destination: { placeId: route.dest },
      waypoints: waypointReq,
      travelMode: 'DRIVING',
    },
    function (res, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(res);
      } else {
        console.log(status);
      }
    }
  );
}

initMap();

// Delete saved route
// for (i = 0; i < heartUnsave.length; i++) {
//   heartUnsave[i].addEventListener('click', deleteRoute(heartUnsave.));
// }
