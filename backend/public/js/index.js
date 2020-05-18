import { initMap, autocomplete } from './modules/map';
import { saveRoute, deleteRoute, initRouteSave } from './modules/routes';

const orig = document.getElementById('orig');
const dest = document.getElementById('dest');
const heartSave = document.getElementById('heart-save');
const heartUnsave = document.getElementById('heart-unsave');

initMap();

// Setup places auto completion on origin and destination inputs.
autocomplete(orig);
autocomplete(dest);

setTimeout(initRouteSave, 1000);
// Save route
heartSave.addEventListener('click', (e) => saveRoute(e));
// Delete saved route
heartUnsave.addEventListener('click', (e) => deleteRoute(e));
