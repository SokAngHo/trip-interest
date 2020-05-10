import { RouteBoxer } from './RouteBoxer';
import { findPlaceFromText } from '@googlemaps/google-maps-services-js/dist/places/findplacefromtext';

let map;
let directionsService;
let directionsRenderer;
let placesService;
let routeBoxer;
let routeBoxes = [];
let infoWindow;
const orig = document.getElementById('orig').value;
const dest = document.getElementById('dest').value;
const via = document.getElementById('via').value;
let waypoint = document.getElementById('waypoint');
const findRoutesBtn = document.getElementById('findRoutesBtn');

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
  infoWindow = new google.maps.InfoWindow();
  findRoutesBtn.addEventListener('click', findRoutes);

  // Draw routes on the map
  if (orig && dest) drawRoutes();
  if (orig && dest && via) setTimeout(findPlaces, 1000);
}

// Google Map places auto completion on input
export function autocomplete(textInput) {
  if (!textInput) return;

  const dropdown = new google.maps.places.Autocomplete(textInput);
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    // placeIdInput.value = place.place_id;
  });

  textInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

function drawRoutes() {
  let waypointsReq = [];

  if (waypoint.value === '') {
    waypointsReq = [];
  } else {
    waypointsReq[0] = { location: { placeId: waypoint.value }, stopover: true };
  }

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

function findPlaces() {
  if (!routeBoxes) return;

  for (let i = 0; i < routeBoxes.length; i++) {
    var request = {
      bounds: routeBoxes[i],
      keyword: via,
    };

    placesService.nearbySearch(request, function (res, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          createPlaceMarker(res[i]);
        }
      }
    });
  }
}

function createPlaceMarker(place) {
  const image = {
    url: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
    // size: new google.maps.Size(71, 71),
    // anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(15, 15),
  };

  const marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: place.geometry.location,
  });

  const placeReq = {
    placeId: place.place_id,
  };

  google.maps.event.addListener(marker, 'mouseover', function () {
    setTimeout(() => {
      getPlaceNameForMarker(placeReq, marker);
    }, 300);
  });
  google.maps.event.addListener(marker, 'mouseout', function () {
    infoWindow.close();
  });
  google.maps.event.addListener(marker, 'click', function () {
    addWaypoints(placeReq);
  });
}

function addWaypoints(place) {
  const url = new URLSearchParams(document.location.search);
  url.set('waypoint', place.placeId);
  window.history.pushState({}, '', '?' + url.toString());

  // Set waupoint at index 0 rather than adding to arrays because only 1 waypoint is needed
  waypoint.value = place.placeId;
  drawRoutes();
}

function getPlaceNameForMarker(place, marker) {
  placesService.getDetails(place, function (res, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const content = '<strong>' + res.name + '</strong>';
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    }
  });
}

function findRoutes() {
  waypoint.value = '';
  document.getElementById('mapForm').submit();
}

// Utility function to draw route boxes for debugging
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
