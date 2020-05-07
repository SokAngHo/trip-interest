import { initMap, autocomplete } from './modules/map';

initMap();

// Setup places auto completion on origin and destination inputs.
autocomplete(document.getElementById('orig-text-input'), document.getElementById('orig-id'));
autocomplete(document.getElementById('dest-text-input'), document.getElementById('dest-id'));
