/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var origInput = document.getElementById('orig-input');
var destInput = document.getElementById('dest-input');
var orig = document.getElementById('orig');
var dest = document.getElementById('dest');
var heartSave = document.getElementById('heart-save');
var heartUnsave = document.getElementById('heart-unsave');
Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["initMap"])(); // Setup places auto completion on origin and destination inputs.

Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["autocomplete"])(origInput, orig);
Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["autocomplete"])(destInput, dest); // Save route

heartSave.addEventListener('click', function (e) {
  return Object(_modules_routes__WEBPACK_IMPORTED_MODULE_1__["saveRoute"])(e);
}); // Delete saved route

heartUnsave.addEventListener('click', function (e) {
  return Object(_modules_routes__WEBPACK_IMPORTED_MODULE_1__["deleteRoute"])(e);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
/* harmony import */ var _RouteBoxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var map;
var directionsService;
var directionsRenderer;
var placesService;
var routeBoxer;
var routeBoxes = [];
var infoWindow;
var orig = document.getElementById('orig').value;
var dest = document.getElementById('dest').value;
var via = document.getElementById('via').value;
var waypoint = document.getElementById('waypoint');
var findRoutesBtn = document.getElementById('findRoutesBtn');
function initMap() {
  // Initilise map to Melbourne location
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -37.8136,
      lng: 144.9631
    },
    zoom: 8
  });
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  placesService = new google.maps.places.PlacesService(map);
  directionsRenderer.setMap(map);
  routeBoxer = new _RouteBoxer__WEBPACK_IMPORTED_MODULE_0__["RouteBoxer"]();
  infoWindow = new google.maps.InfoWindow();
  findRoutesBtn.addEventListener('click', findRoutes); // Draw routes on the map

  if (orig && dest) drawRoute();
  if (orig && dest && via) setTimeout(findPlaces, 1000);
} // Google Map places auto completion on input

function autocomplete(textInput, placeIdInput) {
  if (!textInput) return;
  var dropdown = new google.maps.places.Autocomplete(textInput);
  dropdown.addListener('place_changed', function () {
    var place = dropdown.getPlace();
    placeIdInput.value = place.place_id;
  }); // Prevent form from submitting with enter key

  textInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) e.preventDefault();
  });
}

function drawRoute() {
  var waypointsReq = [];

  if (waypoint.value === '') {
    waypointsReq = [];
  } else {
    waypointsReq[0] = {
      location: {
        placeId: waypoint.value
      },
      stopover: true
    };
  }

  directionsService.route({
    origin: {
      placeId: orig
    },
    destination: {
      placeId: dest
    },
    waypoints: waypointsReq,
    travelMode: 'DRIVING'
  }, function (res, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(res);
      var route = res.routes[0];
      setTimeout(_routes__WEBPACK_IMPORTED_MODULE_1__["initRouteSave"], 1000);
      displayRouteInfo(route); // Don't box routes for route that is more than 300 km for budget purposes

      if (route.legs[0].distance.value > 300000) {
        window.alert("Sorry, it's too expensive to get places along route that is more than 300 km.");
        return;
      }

      var path = route.overview_path;
      var distance = 0.5; // radius around route is 500 m

      routeBoxes = routeBoxer.box(path, distance); // drawBoxes(routeBoxes);
    } else {
      console.log(status);
    }
  });
} // Display route summary info


function displayRouteInfo(route) {
  // Unhide selected route card
  document.getElementById('selected-route-card').style.visibility = 'visible';
  var routeInfo = document.getElementById('route-info'); // Clear route info

  routeInfo.innerHTML = '';
  var arrow1 = document.createElement('div');
  arrow1.classList.add('col-auto', 'd-flex', 'align-items-center');
  var arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-long-arrow-alt-right');
  arrow1.appendChild(arrowIcon);
  var arrow2 = document.createElement('div');
  arrow2.classList.add('col-auto', 'd-flex', 'align-items-center');
  var arrowIcon2 = document.createElement('i');
  arrowIcon2.classList.add('fas', 'fa-long-arrow-alt-right');
  arrow2.appendChild(arrowIcon2);
  var startAddress = document.createElement('div');
  startAddress.classList.add('col', 'd-flex', 'align-items-center');
  startAddress.innerText = route.legs[0].start_address;
  var stopoverAddress;
  var endAddress = document.createElement('div');
  endAddress.classList.add('col', 'd-flex', 'align-items-center');
  endAddress.innerText = route.legs[0].end_address;
  var distance = document.createElement('div');
  distance.classList.add('col-auto', 'd-flex', 'align-items-center');
  distance.innerText = route.legs[0].distance.text;
  var duration = document.createElement('div');
  duration.classList.add('col-auto', 'd-flex', 'align-items-center');
  duration.innerText = route.legs[0].duration.text;
  document.getElementById('waypointAddress').value = ''; // When there is stopover

  if (route.legs.length > 1) {
    stopoverAddress = document.createElement('div');
    stopoverAddress.classList.add('col', 'd-flex', 'align-items-center');
    stopoverAddress.innerText = route.legs[0].end_address;
    document.getElementById('waypointAddress').value = route.legs[0].end_address;
    endAddress.innerText = route.legs[1].end_address; // total distance in km

    var totalDistance = (route.legs[0].distance.value + route.legs[1].distance.value) / 1000;
    distance.innerText = totalDistance.toFixed(1) + ' km'; // total duration in mins

    var totalDuration = (route.legs[0].duration.value + route.legs[1].duration.value) / 60;
    duration.innerText = totalDuration.toFixed() + ' mins';
  }

  routeInfo.appendChild(startAddress);
  routeInfo.appendChild(arrow1);
  if (typeof stopoverAddress !== 'undefined') routeInfo.appendChild(stopoverAddress);
  if (typeof stopoverAddress !== 'undefined') routeInfo.appendChild(arrow2);
  routeInfo.appendChild(endAddress);
  routeInfo.appendChild(distance);
  routeInfo.appendChild(duration);
}

function findPlaces() {
  if (!routeBoxes) return;

  for (var i = 0; i < routeBoxes.length; i++) {
    var request = {
      bounds: routeBoxes[i],
      keyword: via
    };
    placesService.nearbySearch(request, function (res, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var _i = 0; _i < res.length; _i++) {
          createPlaceMarker(res[_i]);
        }
      }
    });
  }
}

function createPlaceMarker(place) {
  var image = {
    url: 'http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png',
    // size: new google.maps.Size(71, 71),
    // anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(15, 15)
  };
  var marker = new google.maps.Marker({
    map: map,
    icon: image,
    position: place.geometry.location
  });
  var placeReq = {
    placeId: place.place_id,
    name: place.name
  };
  google.maps.event.addListener(marker, 'mouseover', function () {
    setTimeout(function () {
      getPlaceNameForMarker(placeReq, marker);
    }, 300);
  });
  google.maps.event.addListener(marker, 'mouseout', function () {
    infoWindow.close();
  });
  google.maps.event.addListener(marker, 'click', function () {
    selectAPlace(placeReq);
  });
}

function selectAPlace(place) {
  var waypointAddress = document.getElementById('waypointAddress');
  waypointAddress.value = place.name;
  addWaypoints(place);
}

function addWaypoints(place) {
  var url = new URLSearchParams(document.location.search);
  url.set('waypoint', place.placeId);
  window.history.pushState({}, '', '?' + url.toString()); // Set waupoint at index 0 rather than adding to arrays because only 1 waypoint is needed

  waypoint.value = place.placeId;
  drawRoute();
}

function getPlaceNameForMarker(place, marker) {
  placesService.getDetails(place, function (res, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var content = '<strong>' + res.name + '</strong>';
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    }
  });
}

function findRoutes() {
  var origAddress = document.getElementById('orig-input');
  var destAddress = document.getElementById('dest-input');

  if (origAddress.value === '' || destAddress.value === '') {
    window.alert('Please enter origin and destination.');
    return;
  }

  waypoint.value = '';
  document.getElementById('mapForm').submit();
} // Utility function to draw route boxes for debugging


function drawBoxes(boxes) {
  var boxpolys = new Array(boxes.length);

  for (var i = 0; i < boxes.length; i++) {
    boxpolys[i] = new google.maps.Rectangle({
      bounds: boxes[i],
      fillOpacity: 0,
      strokeOpacity: 1.0,
      strokeColor: '#000000',
      strokeWeight: 1,
      map: map
    });
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteBoxer", function() { return RouteBoxer; });
/**
 * This file is retreived from
 * https://github.com/googlemaps/v3-utility-library/blob/master/archive/routeboxer/src/RouteBoxer.js
 *
 * @name RouteBoxer
 * @version 1.0
 * @copyright (c) 2010 Google Inc.
 * @author Thor Mitchell
 *
 * @fileoverview The RouteBoxer class takes a path, such as the Polyline for a
 * route generated by a Directions request, and generates a set of LatLngBounds
 * objects that are guaranteed to contain every point within a given distance
 * of that route. These LatLngBounds objects can then be used to generate
 * requests to spatial search services that support bounds filtering (such as
 * the Google Maps Data API) in order to implement search along a route.
 * <br/><br/>
 * RouteBoxer overlays a grid of the specified size on the route, identifies
 * every grid cell that the route passes through, and generates a set of bounds
 * that cover all of these cells, and their nearest neighbours. Consequently
 * the bounds returned will extend up to ~3x the specified distance from the
 * route in places.
 */

/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Creates a new RouteBoxer
 *
 * @constructor
 */
function RouteBoxer() {
  this.R = 6371; // earth's mean radius in km
}
/**
 * Generates boxes for a given route and distance
 *
 * @param {google.maps.LatLng[] | google.maps.Polyline} path The path along
 *           which to create boxes. The path object can be either an Array of
 *           google.maps.LatLng objects or a Maps API v2 or Maps API v3
 *           google.maps.Polyline object.
 * @param {Number} range The distance in kms around the route that the generated
 *           boxes must cover.
 * @return {google.maps.LatLngBounds[]} An array of boxes that covers the whole
 *           path.
 */

RouteBoxer.prototype.box = function (path, range) {
  // Two dimensional array representing the cells in the grid overlaid on the path
  this.grid_ = null; // Array that holds the latitude coordinate of each vertical grid line

  this.latGrid_ = []; // Array that holds the longitude coordinate of each horizontal grid line

  this.lngGrid_ = []; // Array of bounds that cover the whole route formed by merging cells that
  //  the route intersects first horizontally, and then vertically

  this.boxesX_ = []; // Array of bounds that cover the whole route formed by merging cells that
  //  the route intersects first vertically, and then horizontally

  this.boxesY_ = []; // The array of LatLngs representing the vertices of the path

  var vertices = null; // If necessary convert the path into an array of LatLng objects

  if (path instanceof Array) {
    // already an arry of LatLngs (eg. v3 overview_path)
    vertices = path;
  } else if (path instanceof google.maps.Polyline) {
    if (path.getPath) {
      // v3 Maps API Polyline object
      vertices = new Array(path.getPath().getLength());

      for (var i = 0; i < vertices.length; i++) {
        vertices[i] = path.getPath().getAt(i);
      }
    } else {
      // v2 Maps API Polyline object
      vertices = new Array(path.getVertexCount());

      for (var j = 0; j < vertices.length; j++) {
        vertices[j] = path.getVertex(j);
      }
    }
  } // Build the grid that is overlaid on the route


  this.buildGrid_(vertices, range); // Identify the grid cells that the route intersects

  this.findIntersectingCells_(vertices); // Merge adjacent intersected grid cells (and their neighbours) into two sets
  //  of bounds, both of which cover them completely

  this.mergeIntersectingCells_(); // Return the set of merged bounds that has the fewest elements

  return this.boxesX_.length <= this.boxesY_.length ? this.boxesX_ : this.boxesY_;
};
/**
 * Generates boxes for a given route and distance
 *
 * @param {LatLng[]} vertices The vertices of the path over which to lay the grid
 * @param {Number} range The spacing of the grid cells.
 */


RouteBoxer.prototype.buildGrid_ = function (vertices, range) {
  // Create a LatLngBounds object that contains the whole path
  var routeBounds = new google.maps.LatLngBounds();

  for (var i = 0; i < vertices.length; i++) {
    routeBounds.extend(vertices[i]);
  } // Find the center of the bounding box of the path


  var routeBoundsCenter = routeBounds.getCenter(); // Starting from the center define grid lines outwards vertically until they
  //  extend beyond the edge of the bounding box by more than one cell

  this.latGrid_.push(routeBoundsCenter.lat()); // Add lines from the center out to the north

  this.latGrid_.push(routeBoundsCenter.rhumbDestinationPoint(0, range).lat());

  for (i = 2; this.latGrid_[i - 2] < routeBounds.getNorthEast().lat(); i++) {
    this.latGrid_.push(routeBoundsCenter.rhumbDestinationPoint(0, range * i).lat());
  } // Add lines from the center out to the south


  for (i = 1; this.latGrid_[1] > routeBounds.getSouthWest().lat(); i++) {
    this.latGrid_.unshift(routeBoundsCenter.rhumbDestinationPoint(180, range * i).lat());
  } // Starting from the center define grid lines outwards horizontally until they
  //  extend beyond the edge of the bounding box by more than one cell


  this.lngGrid_.push(routeBoundsCenter.lng()); // Add lines from the center out to the east

  this.lngGrid_.push(routeBoundsCenter.rhumbDestinationPoint(90, range).lng());

  for (i = 2; this.lngGrid_[i - 2] < routeBounds.getNorthEast().lng(); i++) {
    this.lngGrid_.push(routeBoundsCenter.rhumbDestinationPoint(90, range * i).lng());
  } // Add lines from the center out to the west


  for (i = 1; this.lngGrid_[1] > routeBounds.getSouthWest().lng(); i++) {
    this.lngGrid_.unshift(routeBoundsCenter.rhumbDestinationPoint(270, range * i).lng());
  } // Create a two dimensional array representing this grid


  this.grid_ = new Array(this.lngGrid_.length);

  for (i = 0; i < this.grid_.length; i++) {
    this.grid_[i] = new Array(this.latGrid_.length);
  }
};
/**
 * Find all of the cells in the overlaid grid that the path intersects
 *
 * @param {LatLng[]} vertices The vertices of the path
 */


RouteBoxer.prototype.findIntersectingCells_ = function (vertices) {
  // Find the cell where the path begins
  var hintXY = this.getCellCoords_(vertices[0]); // Mark that cell and it's neighbours for inclusion in the boxes

  this.markCell_(hintXY); // Work through each vertex on the path identifying which grid cell it is in

  for (var i = 1; i < vertices.length; i++) {
    // Use the known cell of the previous vertex to help find the cell of this vertex
    var gridXY = this.getGridCoordsFromHint_(vertices[i], vertices[i - 1], hintXY);

    if (gridXY[0] === hintXY[0] && gridXY[1] === hintXY[1]) {
      // This vertex is in the same cell as the previous vertex
      // The cell will already have been marked for inclusion in the boxes
      continue;
    } else if (Math.abs(hintXY[0] - gridXY[0]) === 1 && hintXY[1] === gridXY[1] || hintXY[0] === gridXY[0] && Math.abs(hintXY[1] - gridXY[1]) === 1) {
      // This vertex is in a cell that shares an edge with the previous cell
      // Mark this cell and it's neighbours for inclusion in the boxes
      this.markCell_(gridXY);
    } else {
      // This vertex is in a cell that does not share an edge with the previous
      //  cell. This means that the path passes through other cells between
      //  this vertex and the previous vertex, and we must determine which cells
      //  it passes through
      this.getGridIntersects_(vertices[i - 1], vertices[i], hintXY, gridXY);
    } // Use this cell to find and compare with the next one


    hintXY = gridXY;
  }
};
/**
 * Find the cell a path vertex is in by brute force iteration over the grid
 *
 * @param {LatLng[]} latlng The latlng of the vertex
 * @return {Number[][]} The cell coordinates of this vertex in the grid
 */


RouteBoxer.prototype.getCellCoords_ = function (latlng) {
  for (var x = 0; this.lngGrid_[x] < latlng.lng(); x++) {}

  for (var y = 0; this.latGrid_[y] < latlng.lat(); y++) {}

  return [x - 1, y - 1];
};
/**
 * Find the cell a path vertex is in based on the known location of a nearby
 *  vertex. This saves searching the whole grid when working through vertices
 *  on the polyline that are likely to be in close proximity to each other.
 *
 * @param {LatLng[]} latlng The latlng of the vertex to locate in the grid
 * @param {LatLng[]} hintlatlng The latlng of the vertex with a known location
 * @param {Number[]} hint The cell containing the vertex with a known location
 * @return {Number[]} The cell coordinates of the vertex to locate in the grid
 */


RouteBoxer.prototype.getGridCoordsFromHint_ = function (latlng, hintlatlng, hint) {
  var x, y;

  if (latlng.lng() > hintlatlng.lng()) {
    for (x = hint[0]; this.lngGrid_[x + 1] < latlng.lng(); x++) {}
  } else {
    for (x = hint[0]; this.lngGrid_[x] > latlng.lng(); x--) {}
  }

  if (latlng.lat() > hintlatlng.lat()) {
    for (y = hint[1]; this.latGrid_[y + 1] < latlng.lat(); y++) {}
  } else {
    for (y = hint[1]; this.latGrid_[y] > latlng.lat(); y--) {}
  }

  return [x, y];
};
/**
 * Identify the grid squares that a path segment between two vertices
 * intersects with by:
 * 1. Finding the bearing between the start and end of the segment
 * 2. Using the delta between the lat of the start and the lat of each
 *    latGrid boundary to find the distance to each latGrid boundary
 * 3. Finding the lng of the intersection of the line with each latGrid
 *     boundary using the distance to the intersection and bearing of the line
 * 4. Determining the x-coord on the grid of the point of intersection
 * 5. Filling in all squares between the x-coord of the previous intersection
 *     (or start) and the current one (or end) at the current y coordinate,
 *     which is known for the grid line being intersected
 *
 * @param {LatLng} start The latlng of the vertex at the start of the segment
 * @param {LatLng} end The latlng of the vertex at the end of the segment
 * @param {Number[]} startXY The cell containing the start vertex
 * @param {Number[]} endXY The cell containing the vend vertex
 */


RouteBoxer.prototype.getGridIntersects_ = function (start, end, startXY, endXY) {
  var edgePoint, edgeXY, i;
  var brng = start.rhumbBearingTo(end); // Step 1.

  var hint = start;
  var hintXY = startXY; // Handle a line segment that travels south first

  if (end.lat() > start.lat()) {
    // Iterate over the east to west grid lines between the start and end cells
    for (i = startXY[1] + 1; i <= endXY[1]; i++) {
      // Find the latlng of the point where the path segment intersects with
      //  this grid line (Step 2 & 3)
      edgePoint = this.getGridIntersect_(start, brng, this.latGrid_[i]); // Find the cell containing this intersect point (Step 4)

      edgeXY = this.getGridCoordsFromHint_(edgePoint, hint, hintXY); // Mark every cell the path has crossed between this grid and the start,
      //   or the previous east to west grid line it crossed (Step 5)

      this.fillInGridSquares_(hintXY[0], edgeXY[0], i - 1); // Use the point where it crossed this grid line as the reference for the
      //  next iteration

      hint = edgePoint;
      hintXY = edgeXY;
    } // Mark every cell the path has crossed between the last east to west grid
    //  line it crossed and the end (Step 5)


    this.fillInGridSquares_(hintXY[0], endXY[0], i - 1);
  } else {
    // Iterate over the east to west grid lines between the start and end cells
    for (i = startXY[1]; i > endXY[1]; i--) {
      // Find the latlng of the point where the path segment intersects with
      //  this grid line (Step 2 & 3)
      edgePoint = this.getGridIntersect_(start, brng, this.latGrid_[i]); // Find the cell containing this intersect point (Step 4)

      edgeXY = this.getGridCoordsFromHint_(edgePoint, hint, hintXY); // Mark every cell the path has crossed between this grid and the start,
      //   or the previous east to west grid line it crossed (Step 5)

      this.fillInGridSquares_(hintXY[0], edgeXY[0], i); // Use the point where it crossed this grid line as the reference for the
      //  next iteration

      hint = edgePoint;
      hintXY = edgeXY;
    } // Mark every cell the path has crossed between the last east to west grid
    //  line it crossed and the end (Step 5)


    this.fillInGridSquares_(hintXY[0], endXY[0], i);
  }
};
/**
 * Find the latlng at which a path segment intersects with a given
 *   line of latitude
 *
 * @param {LatLng} start The vertex at the start of the path segment
 * @param {Number} brng The bearing of the line from start to end
 * @param {Number} gridLineLat The latitude of the grid line being intersected
 * @return {LatLng} The latlng of the point where the path segment intersects
 *                    the grid line
 */


RouteBoxer.prototype.getGridIntersect_ = function (start, brng, gridLineLat) {
  var d = this.R * ((gridLineLat.toRad() - start.lat().toRad()) / Math.cos(brng.toRad()));
  return start.rhumbDestinationPoint(brng, d);
};
/**
 * Mark all cells in a given row of the grid that lie between two columns
 *   for inclusion in the boxes
 *
 * @param {Number} startx The first column to include
 * @param {Number} endx The last column to include
 * @param {Number} y The row of the cells to include
 */


RouteBoxer.prototype.fillInGridSquares_ = function (startx, endx, y) {
  var x;

  if (startx < endx) {
    for (x = startx; x <= endx; x++) {
      this.markCell_([x, y]);
    }
  } else {
    for (x = startx; x >= endx; x--) {
      this.markCell_([x, y]);
    }
  }
};
/**
 * Mark a cell and the 8 immediate neighbours for inclusion in the boxes
 *
 * @param {Number[]} square The cell to mark
 */


RouteBoxer.prototype.markCell_ = function (cell) {
  var x = cell[0];
  var y = cell[1];
  this.grid_[x - 1][y - 1] = 1;
  this.grid_[x][y - 1] = 1;
  this.grid_[x + 1][y - 1] = 1;
  this.grid_[x - 1][y] = 1;
  this.grid_[x][y] = 1;
  this.grid_[x + 1][y] = 1;
  this.grid_[x - 1][y + 1] = 1;
  this.grid_[x][y + 1] = 1;
  this.grid_[x + 1][y + 1] = 1;
};
/**
 * Create two sets of bounding boxes, both of which cover all of the cells that
 *   have been marked for inclusion.
 *
 * The first set is created by combining adjacent cells in the same column into
 *   a set of vertical rectangular boxes, and then combining boxes of the same
 *   height that are adjacent horizontally.
 *
 * The second set is created by combining adjacent cells in the same row into
 *   a set of horizontal rectangular boxes, and then combining boxes of the same
 *   width that are adjacent vertically.
 *
 */


RouteBoxer.prototype.mergeIntersectingCells_ = function () {
  var x, y, box; // The box we are currently expanding with new cells

  var currentBox = null; // Traverse the grid a row at a time

  for (y = 0; y < this.grid_[0].length; y++) {
    for (x = 0; x < this.grid_.length; x++) {
      if (this.grid_[x][y]) {
        // This cell is marked for inclusion. If the previous cell in this
        //   row was also marked for inclusion, merge this cell into it's box.
        // Otherwise start a new box.
        box = this.getCellBounds_([x, y]);

        if (currentBox) {
          currentBox.extend(box.getNorthEast());
        } else {
          currentBox = box;
        }
      } else {
        // This cell is not marked for inclusion. If the previous cell was
        //  marked for inclusion, merge it's box with a box that spans the same
        //  columns from the row below if possible.
        this.mergeBoxesY_(currentBox);
        currentBox = null;
      }
    } // If the last cell was marked for inclusion, merge it's box with a matching
    //  box from the row below if possible.


    this.mergeBoxesY_(currentBox);
    currentBox = null;
  } // Traverse the grid a column at a time


  for (x = 0; x < this.grid_.length; x++) {
    for (y = 0; y < this.grid_[0].length; y++) {
      if (this.grid_[x][y]) {
        // This cell is marked for inclusion. If the previous cell in this
        //   column was also marked for inclusion, merge this cell into it's box.
        // Otherwise start a new box.
        if (currentBox) {
          box = this.getCellBounds_([x, y]);
          currentBox.extend(box.getNorthEast());
        } else {
          currentBox = this.getCellBounds_([x, y]);
        }
      } else {
        // This cell is not marked for inclusion. If the previous cell was
        //  marked for inclusion, merge it's box with a box that spans the same
        //  rows from the column to the left if possible.
        this.mergeBoxesX_(currentBox);
        currentBox = null;
      }
    } // If the last cell was marked for inclusion, merge it's box with a matching
    //  box from the column to the left if possible.


    this.mergeBoxesX_(currentBox);
    currentBox = null;
  }
};
/**
 * Search for an existing box in an adjacent row to the given box that spans the
 * same set of columns and if one is found merge the given box into it. If one
 * is not found, append this box to the list of existing boxes.
 *
 * @param {LatLngBounds}  The box to merge
 */


RouteBoxer.prototype.mergeBoxesX_ = function (box) {
  if (box !== null) {
    for (var i = 0; i < this.boxesX_.length; i++) {
      if (this.boxesX_[i].getNorthEast().lng() === box.getSouthWest().lng() && this.boxesX_[i].getSouthWest().lat() === box.getSouthWest().lat() && this.boxesX_[i].getNorthEast().lat() === box.getNorthEast().lat()) {
        this.boxesX_[i].extend(box.getNorthEast());
        return;
      }
    }

    this.boxesX_.push(box);
  }
};
/**
 * Search for an existing box in an adjacent column to the given box that spans
 * the same set of rows and if one is found merge the given box into it. If one
 * is not found, append this box to the list of existing boxes.
 *
 * @param {LatLngBounds}  The box to merge
 */


RouteBoxer.prototype.mergeBoxesY_ = function (box) {
  if (box !== null) {
    for (var i = 0; i < this.boxesY_.length; i++) {
      if (this.boxesY_[i].getNorthEast().lat() === box.getSouthWest().lat() && this.boxesY_[i].getSouthWest().lng() === box.getSouthWest().lng() && this.boxesY_[i].getNorthEast().lng() === box.getNorthEast().lng()) {
        this.boxesY_[i].extend(box.getNorthEast());
        return;
      }
    }

    this.boxesY_.push(box);
  }
};
/**
 * Obtain the LatLng of the origin of a cell on the grid
 *
 * @param {Number[]} cell The cell to lookup.
 * @return {LatLng} The latlng of the origin of the cell.
 */


RouteBoxer.prototype.getCellBounds_ = function (cell) {
  return new google.maps.LatLngBounds(new google.maps.LatLng(this.latGrid_[cell[1]], this.lngGrid_[cell[0]]), new google.maps.LatLng(this.latGrid_[cell[1] + 1], this.lngGrid_[cell[0] + 1]));
};
/* Based on the Latitude/longitude spherical geodesy formulae & scripts
   at http://www.movable-type.co.uk/scripts/latlong.html
   (c) Chris Veness 2002-2010
*/


google.maps.LatLng.prototype.rhumbDestinationPoint = function (brng, dist) {
  var R = 6371; // earth's mean radius in km

  var d = parseFloat(dist) / R; // d = angular distance covered on earth's surface

  var lat1 = this.lat().toRad(),
      lon1 = this.lng().toRad();
  brng = brng.toRad();
  var lat2 = lat1 + d * Math.cos(brng);
  var dLat = lat2 - lat1;
  var dPhi = Math.log(Math.tan(lat2 / 2 + Math.PI / 4) / Math.tan(lat1 / 2 + Math.PI / 4));
  var q = Math.abs(dLat) > 1e-10 ? dLat / dPhi : Math.cos(lat1);
  var dLon = d * Math.sin(brng) / q; // check for going past the pole

  if (Math.abs(lat2) > Math.PI / 2) {
    lat2 = lat2 > 0 ? Math.PI - lat2 : -(Math.PI - lat2);
  }

  var lon2 = (lon1 + dLon + Math.PI) % (2 * Math.PI) - Math.PI;

  if (isNaN(lat2) || isNaN(lon2)) {
    return null;
  }

  return new google.maps.LatLng(lat2.toDeg(), lon2.toDeg());
};

google.maps.LatLng.prototype.rhumbBearingTo = function (dest) {
  var dLon = (dest.lng() - this.lng()).toRad();
  var dPhi = Math.log(Math.tan(dest.lat().toRad() / 2 + Math.PI / 4) / Math.tan(this.lat().toRad() / 2 + Math.PI / 4));

  if (Math.abs(dLon) > Math.PI) {
    dLon = dLon > 0 ? -(2 * Math.PI - dLon) : 2 * Math.PI + dLon;
  }

  return Math.atan2(dLon, dPhi).toBrng();
};
/**
 * Extend the Number object to convert degrees to radians
 *
 * @return {Number} Bearing in radians
 * @ignore
 */


Number.prototype.toRad = function () {
  return this * Math.PI / 180;
};
/**
 * Extend the Number object to convert radians to degrees
 *
 * @return {Number} Bearing in degrees
 * @ignore
 */


Number.prototype.toDeg = function () {
  return this * 180 / Math.PI;
};
/**
 * Normalize a heading in degrees to between 0 and +360
 *
 * @return {Number} Return
 * @ignore
 */


Number.prototype.toBrng = function () {
  return (this.toDeg() + 360) % 360;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRouteSave", function() { return initRouteSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRoute", function() { return saveRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRoute", function() { return deleteRoute; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var savedRouteId = document.getElementById('saved-route-id');
var heartSaveBtn = document.getElementById('heart-save-btn');
var heartUnsaveBtn = document.getElementById('heart-unsave-btn');
var orig = document.getElementById('orig').value;
var dest = document.getElementById('dest').value;
var origAddress = document.getElementById('orig-input').value;
var destAddress = document.getElementById('dest-input').value;
var waypoint = document.getElementById('waypoint');
var waypointAddress = document.getElementById('waypointAddress');
function initRouteSave() {
  return _initRouteSave.apply(this, arguments);
}

function _initRouteSave() {
  _initRouteSave = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (window.userId) {
              _context.next = 3;
              break;
            }

            heartSaveBtn.style.display = 'block';
            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/routes/find', {
              userId: userId,
              orig: orig,
              dest: dest,
              waypoint: waypoint.value
            })["catch"](function (e) {
              return console.log(e);
            });

          case 5:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            savedRouteId.value = res.data;
            heartSaveBtn.style.display = 'none';
            heartUnsaveBtn.style.display = 'block';
            return _context.abrupt("return");

          case 11:
            heartUnsaveBtn.style.display = 'none';
            heartSaveBtn.style.display = 'block';

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initRouteSave.apply(this, arguments);
}

function saveRoute(_x) {
  return _saveRoute.apply(this, arguments);
}

function _saveRoute() {
  _saveRoute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var res;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault(); // If user hasn't logged in, redirect to login page

            if (userId == null) window.location.replace('/login');
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/routes/save', {
              userId: userId,
              orig: orig,
              origAddress: origAddress,
              dest: dest,
              destAddress: destAddress,
              waypoint: waypoint.value,
              waypointAddress: waypointAddress.value
            })["catch"](function (e) {
              return console.log(e);
            });

          case 4:
            res = _context2.sent;

            if (res.status === 200) {
              savedRouteId.value = res.data;
              heartSaveBtn.style.display = 'none';
              heartUnsaveBtn.style.display = 'block';
            }

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _saveRoute.apply(this, arguments);
}

function deleteRoute(_x2) {
  return _deleteRoute.apply(this, arguments);
}

function _deleteRoute() {
  _deleteRoute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();

            if (!(savedRouteId.value === '')) {
              _context3.next = 4;
              break;
            }

            console.log('Cannot find route id');
            return _context3.abrupt("return");

          case 4:
            _context3.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/routes/delete', {
              routeId: savedRouteId.value
            })["catch"](function (e) {
              return console.log(e);
            });

          case 6:
            res = _context3.sent;

            if (res.status === 200) {
              savedRouteId.value = '';
              heartUnsaveBtn.style.display = 'none';
              heartSaveBtn.style.display = 'block';
            }

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteRoute.apply(this, arguments);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

var bind = __webpack_require__(7);

var Axios = __webpack_require__(8);

var mergeConfig = __webpack_require__(27);

var defaults = __webpack_require__(14);
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(28);
axios.CancelToken = __webpack_require__(29);
axios.isCancel = __webpack_require__(13); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(30);
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports["default"] = axios;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bind = __webpack_require__(7);
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (_typeof(val) === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

var buildURL = __webpack_require__(9);

var InterceptorManager = __webpack_require__(10);

var dispatchRequest = __webpack_require__(11);

var mergeConfig = __webpack_require__(27);
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

var transformData = __webpack_require__(12);

var isCancel = __webpack_require__(13);

var defaults = __webpack_require__(14);
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(6);

var normalizeHeaderName = __webpack_require__(16);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(17);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(17);
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

var settle = __webpack_require__(18);

var buildURL = __webpack_require__(9);

var buildFullPath = __webpack_require__(21);

var parseHeaders = __webpack_require__(24);

var isURLSameOrigin = __webpack_require__(25);

var createError = __webpack_require__(19);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(26); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(19);
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(20);
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(22);

var combineURLs = __webpack_require__(23);
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(6);
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(28);
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map