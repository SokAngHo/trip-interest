import { initMap, autocomplete } from './modules/map';

initMap();

autocomplete(document.getElementById('orig-text-input'), document.getElementById('orig-id'));
autocomplete(document.getElementById('dest-text-input'), document.getElementById('dest-id'));
