import { RouteBoxer } from './RouteBoxer';

let map;
let directionsService;
let directionsRenderer;
let placesService;
let routeBoxer;

export function initMap() {
  // Initilise map to Melbourne location
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -37.8136, lng: 144.9631 },
    zoom: 8,
  });
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  placesService = new google.maps.places.PlacesService(map);
  directionsRenderer.setMap(map);
  routeBoxer = new RouteBoxer();

  // Draw routes on the map
  drawRoutes(directionsService, directionsRenderer);
}

// Google Map places auto completion on input
export function autocomplete(textInput, placeIdInput) {
  if (!textInput) return;

  const dropdown = new google.maps.places.Autocomplete(textInput);
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    placeIdInput.value = place.place_id;
  });

  textInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

function drawRoutes(directionsService, directionsRenderer) {
  directionsService.route(
    {
      origin: { placeId: document.getElementById('orig-id').value },
      destination: { placeId: document.getElementById('dest-id').value },
      travelMode: 'DRIVING',
    },
    function (res, status) {
      if (status === 'OK') {
        const route = res.routes[0];
        const path = route.overview_path;
        const distance = route.legs[0].distance.value / 15000;
        const boxes = routeBoxer.box(path, distance);
        drawBoxes(boxes);
        directionsRenderer.setDirections(res);
      } else {
        console.log(status);
      }
    }
  );
}

function drawBoxes(boxes) {
  var boxpolys = new Array(boxes.length);
  for (var i = 0; i < boxes.length; i++) {
    boxpolys[i] = new google.maps.Rectangle({
      bounds: boxes[i],
      fillOpacity: 0,
      strokeOpacity: 1.0,
      strokeColor: '#000000',
      strokeWeight: 1,
      map: map,
    });
  }
}
