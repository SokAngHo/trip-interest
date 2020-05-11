import { initMap, autocomplete } from './modules/map';

initMap();

// Setup places auto completion on origin and destination inputs.
autocomplete(
  document.getElementById('orig')
  // document.getElementById('orig-id')
);
autocomplete(
  document.getElementById('dest')
  // document.getElementById('dest-id')
);
