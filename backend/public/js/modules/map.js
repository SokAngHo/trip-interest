export function initMap() {
  // Initilise map to Melbourne location
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -37.8136, lng: 144.9631 },
    zoom: 8,
  });

  // new AutocompleteDirectionsHandler(map);
}

export function autocomplete(textInput, placeIdInput) {
  if (!textInput) return;

  const dropdown = new google.maps.places.Autocomplete(textInput);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    placeIdInput.value = place.place_id;
    console.log(place); //"ChIJP3Sa8ziYEmsRUKgyFmh9AQM"
  });

  textInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'DRIVING';
  this.directionsService = new google.maps.DirectionsService();
  this.directionsRenderer = new google.maps.DirectionsRenderer();
  this.directionsRenderer.setMap(map);

  const originInput = document.getElementById('origin-input');
  const destinationInput = document.getElementById('destination-input');
  // let modeSelector = document.getElementById()

  // Setup origin and destination auto complete inputs
  const originAutocomplete = new google.maps.places.Autocomplete(originInput);
  originAutocomplete.setFields(['place_id']);
  const destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
  destinationAutocomplete.setFields(['place_id']);

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
}

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
  const me = this;
  autocomplete.bindTo('bounds', this.map);

  autocomplete.addListener('place_changed', function () {
    const place = autocomplete.getPlace();

    if (!place.place_id) {
      window.alert('Please select an option from the dropdown list.');
      return;
    }

    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.route = function () {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  const me = this;

  this.directionsService.route(
    {
      origin: { placeId: this.originPlaceId },
      destination: { placeId: this.destinationPlaceId },
      travelMode: 'DRIVING',
    },
    function (res, status) {
      if (status === 'OK') {
        me.directionsRenderer.setDirections(res);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
};
