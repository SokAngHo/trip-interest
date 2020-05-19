import { RouteBoxer } from './RouteBoxer';
import { initRouteSave } from './routes';

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
  if (orig && dest) drawRoute();
  if (orig && dest && via) setTimeout(findPlaces, 1000);
}

// Google Map places auto completion on input
export function autocomplete(textInput, placeIdInput) {
  if (!textInput) return;

  const dropdown = new google.maps.places.Autocomplete(textInput);
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    placeIdInput.value = place.place_id;
  });

  // Prevent form from submitting with enter key
  textInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

function drawRoute() {
  let waypointsReq = [];

  if (waypoint.value === '') {
    waypointsReq = [];
  } else {
    waypointsReq[0] = { location: { placeId: waypoint.value }, stopover: true };
  }

  directionsService.route(
    {
      origin: { placeId: orig },
      destination: { placeId: dest },
      waypoints: waypointsReq,
      travelMode: 'DRIVING',
    },
    function (res, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(res);
        const route = res.routes[0];
        initRouteSave();
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

// Display route summary info
function displayRouteInfo(route) {
  // Unhide selected route card
  document.getElementById('selected-route-card').style.visibility = 'visible';
  const routeInfo = document.getElementById('route-info');

  // Clear route info
  routeInfo.innerHTML = '';

  const arrow1 = document.createElement('div');
  arrow1.classList.add('col-auto', 'd-flex', 'align-items-center');
  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-long-arrow-alt-right');
  arrow1.appendChild(arrowIcon);

  const arrow2 = document.createElement('div');
  arrow2.classList.add('col-auto', 'd-flex', 'align-items-center');
  const arrowIcon2 = document.createElement('i');
  arrowIcon2.classList.add('fas', 'fa-long-arrow-alt-right');
  arrow2.appendChild(arrowIcon2);

  const startAddress = document.createElement('div');
  startAddress.classList.add('col', 'd-flex', 'align-items-center');
  startAddress.innerText = route.legs[0].start_address;

  let stopoverAddress;

  const endAddress = document.createElement('div');
  endAddress.classList.add('col', 'd-flex', 'align-items-center');
  endAddress.innerText = route.legs[0].end_address;

  const distance = document.createElement('div');
  distance.classList.add('col-auto', 'd-flex', 'align-items-center');
  distance.innerText = route.legs[0].distance.text;

  const duration = document.createElement('div');
  duration.classList.add('col-auto', 'd-flex', 'align-items-center');
  duration.innerText = route.legs[0].duration.text;
  document.getElementById('waypointAddress').value = '';

  // When there is stopover
  if (route.legs.length > 1) {
    stopoverAddress = document.createElement('div');
    stopoverAddress.classList.add('col', 'd-flex', 'align-items-center');
    stopoverAddress.innerText = route.legs[0].end_address;
    document.getElementById('waypointAddress').value = route.legs[0].end_address;

    endAddress.innerText = route.legs[1].end_address;

    // total distance in km
    const totalDistance = (route.legs[0].distance.value + route.legs[1].distance.value) / 1000;
    distance.innerText = totalDistance.toFixed(1) + ' km';
    // total duration in mins
    const totalDuration = (route.legs[0].duration.value + route.legs[1].duration.value) / 60;
    duration.innerText = totalDuration.toFixed() + ' mins';
  }

  routeInfo.appendChild(startAddress);
  routeInfo.appendChild(arrow1);
  if (typeof stopoverAddress !== 'undefined') routeInfo.appendChild(stopoverAddress);
  if (typeof stopoverAddress !== 'undefined') routeInfo.appendChild(arrow2);
  routeInfo.appendChild(endAddress);
  routeInfo.appendChild(distance);
  routeInfo.appendChild(duration);
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
    name: place.name,
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
    selectAPlace(placeReq);
  });
}

function selectAPlace(place) {
  const waypointAddress = document.getElementById('waypointAddress');
  waypointAddress.value = place.name;
  addWaypoints(place);
}

function addWaypoints(place) {
  const url = new URLSearchParams(document.location.search);
  url.set('waypoint', place.placeId);
  window.history.pushState({}, '', '?' + url.toString());

  // Set waupoint at index 0 rather than adding to arrays because only 1 waypoint is needed
  waypoint.value = place.placeId;
  drawRoute();
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
  const origAddress = document.getElementById('orig-input');
  const destAddress = document.getElementById('dest-input');

  if (origAddress.value === '' || destAddress.value === '') {
    window.alert('Please enter origin and destination.');
    return;
  }

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
