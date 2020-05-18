import _ from 'lodash';

let map;
let directionsService;
let directionsRenderer;

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
  const orig = document.getElementById('origInput');
  const dest = document.getElementById('destInput');
  const stopover = document.getElementById('stopoverInput');

  const test = _.find(savedRoutes, { id: routeId });

  console.log(test);
};

function drawRoute() {
  directionsService.route(
    {
      origin: orig,
      destination: dest,
      waypoints: waypointsReq,
      travelMode: 'DRIVING',
    },
    function (res, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(res);
        const route = res.routes[0];
        displayRouteInfo(route);

        // Don't box routes for route that is more than 300 km for budget purposes
        if (route.legs[0].distance.value > 300000) {
          window.alert(
            "Sorry, it's too expensive to get places along route that is more than 300 km."
          );
          return;
        }

        const path = route.overview_path;
        const distance = 0.5; // radius around route is 500 m
        routeBoxes = routeBoxer.box(path, distance);
        // drawBoxes(routeBoxes);
      } else {
        console.log(status);
      }
    }
  );
}

initMap();
