import axios from 'axios';

export function initMap() {
  // Initilise map to Melbourne location
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -37.8136, lng: 144.9631 },
    zoom: 8,
  });

  // Draw routes on the map
  drawRoutes(map);
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

function drawRoutes(map) {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);

  directionsService.route(
    {
      origin: { placeId: document.getElementById('orig-id').value },
      destination: { placeId: document.getElementById('dest-id').value },
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
