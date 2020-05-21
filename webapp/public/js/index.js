import { initMap, autocomplete } from './modules/map';

const origInput = document.getElementById('orig-input');
const destInput = document.getElementById('dest-input');
const orig = document.getElementById('orig');
const dest = document.getElementById('dest');

initMap();

// Setup places auto completion on origin and destination inputs.
autocomplete(origInput, orig);
autocomplete(destInput, dest);
