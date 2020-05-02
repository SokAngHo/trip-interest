// function autocompleteAddress(input) {
//   if (!input) return;

//   const dropdown = new google.maps.places.Autocomplete(input);
// }

// autocompleteAddress($.$('#fromAddress'));

function autocomplete(input) {
  if (!input) return;
  const dropdown = new google.maps.places.Autocomplete(input);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();
autocomplete(document.getElementById('fromAddress'));
