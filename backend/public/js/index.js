import { initMap, autocomplete } from './modules/map';
import { saveRoute, deleteRoute } from './modules/routes';

const origInput = document.getElementById('orig-input');
const destInput = document.getElementById('dest-input');
const orig = document.getElementById('orig');
const dest = document.getElementById('dest');
const heartSave = document.getElementById('heart-save');
const heartUnsave = document.getElementById('heart-unsave');

initMap();

// Setup places auto completion on origin and destination inputs.
autocomplete(origInput, orig);
autocomplete(destInput, dest);

// Save route
heartSave.addEventListener('click', (e) => saveRoute(e));
// Delete saved route
heartUnsave.addEventListener('click', (e) => deleteRoute(e));
