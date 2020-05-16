import { initMap, autocomplete } from './modules/map';

const orig = document.getElementById('orig');
const dest = document.getElementById('dest');

initMap();

// Setup places auto completion on origin and destination inputs.
autocomplete(orig);
autocomplete(dest);
