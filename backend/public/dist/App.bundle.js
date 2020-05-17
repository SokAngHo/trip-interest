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

var orig = document.getElementById('orig');
var dest = document.getElementById('dest');
Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["initMap"])(); // Setup places auto completion on origin and destination inputs.

Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["autocomplete"])(orig);
Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["autocomplete"])(dest);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
/* harmony import */ var _RouteBoxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _googlemaps_google_maps_services_js_dist_places_findplacefromtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _googlemaps_google_maps_services_js_dist_places_findplacefromtext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js_dist_places_findplacefromtext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__);



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

function autocomplete(textInput) {
  if (!textInput) return;
  var dropdown = new google.maps.places.Autocomplete(textInput);
  dropdown.addListener('place_changed', function () {
    var place = dropdown.getPlace(); // placeIdInput.value = place.place_id;
  });
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
    origin: orig,
    destination: dest,
    waypoints: waypointsReq,
    travelMode: 'DRIVING'
  }, function (res, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(res);
      var route = res.routes[0];
      console.log(route);
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
  arrow1.classList.add('col-auto');
  var arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-long-arrow-alt-right');
  arrow1.appendChild(arrowIcon);
  var arrow2 = document.createElement('div');
  arrow2.classList.add('col-auto');
  var arrowIcon2 = document.createElement('i');
  arrowIcon2.classList.add('fas', 'fa-long-arrow-alt-right');
  arrow2.appendChild(arrowIcon2);
  var startAddress = document.createElement('div');
  startAddress.classList.add('col');
  startAddress.innerText = route.legs[0].start_address;
  var stopoverAddress;
  var endAddress = document.createElement('div');
  endAddress.classList.add('col');
  endAddress.innerText = route.legs[0].end_address;
  var distance = document.createElement('div');
  distance.classList.add('col-auto');
  distance.innerText = route.legs[0].distance.text;
  var duration = document.createElement('div');
  duration.classList.add('col-auto');
  duration.innerText = route.legs[0].duration.text; // When there is stopover

  if (route.legs.length > 1) {
    stopoverAddress = document.createElement('div');
    stopoverAddress.classList.add('col');
    stopoverAddress.innerText = route.legs[0].end_address;
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
        console.log(res);

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
    placeId: place.place_id
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
exports.defaultParamsSerializer = serialize_1.serializer({}, {
  arrayFormat: "comma"
});

function findPlaceFromText(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.findPlaceFromText = findPlaceFromText;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var rax = __webpack_require__(5);

var directions_1 = __webpack_require__(33);

var distance_1 = __webpack_require__(40);

var elevation_1 = __webpack_require__(41);

var findplacefromtext_1 = __webpack_require__(3);

var geocode_1 = __webpack_require__(42);

var geolocate_1 = __webpack_require__(43);

var nearestroads_1 = __webpack_require__(44);

var autocomplete_1 = __webpack_require__(45);

var details_1 = __webpack_require__(46);

var photo_1 = __webpack_require__(47);

var queryautocomplete_1 = __webpack_require__(48);

var placesnearby_1 = __webpack_require__(49);

var reversegeocode_1 = __webpack_require__(50);

var snaptoroads_1 = __webpack_require__(51);

var textsearch_1 = __webpack_require__(52);

var timezone_1 = __webpack_require__(53);

var axios_1 = __webpack_require__(6);

var agentkeepalive_1 = __webpack_require__(54);

var index_1 = __webpack_require__(55);

exports.defaultHttpsAgent = new agentkeepalive_1.HttpsAgent({
  keepAlive: true
});
exports.defaultTimeout = 10000;
exports.userAgent = "google-maps-services-node-".concat(index_1.version);
exports.acceptEncoding = "gzip";
exports.X_GOOG_MAPS_EXPERIENCE_ID = "X-GOOG-MAPS-EXPERIENCE-ID";
var defaultConfig = {
  timeout: exports.defaultTimeout,
  httpsAgent: exports.defaultHttpsAgent,
  headers: {
    "User-Agent": exports.userAgent,
    "Accept-Encoding": exports.acceptEncoding
  }
};
exports.defaultAxiosInstance = axios_1["default"].create(defaultConfig);
rax.attach(exports.defaultAxiosInstance);
/**
 * Client is a light wrapper around API methods providing shared configuration for Axios
 * settings such as retry logic using the default retry-axios settings and gzip encoding.
 *
 * ### Instantiate with defaults
 * ```
 * const client = Client()
 * ```
 *
 * ### Instantiate with config
 * ```
 * const client = Client({config})
 * ```
 *
 * ### Instantiate with axiosInstance **Advanced**
 * ```
 * const axiosInstance = axios.create(config)
 * const client = Client({axiosInstance})
 * ```
 */

var Client = /*#__PURE__*/function () {
  function Client() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        axiosInstance = _ref.axiosInstance,
        config = _ref.config,
        experienceId = _ref.experienceId;

    _classCallCheck(this, Client);

    if (axiosInstance && config) {
      throw new Error("Provide one of axiosInstance or config.");
    }

    if (axiosInstance) {
      this.axiosInstance = axiosInstance;
      this.axiosInstance.defaults.headers = Object.assign(Object.assign({}, defaultConfig.headers), this.axiosInstance.defaults.headers);
    } else if (config) {
      config = Object.assign(Object.assign({}, defaultConfig), config);
      config.headers = Object.assign(Object.assign({}, defaultConfig.headers), config.headers || {});
      this.axiosInstance = axios_1["default"].create(config);
      rax.attach(this.axiosInstance);
    } else {
      this.axiosInstance = exports.defaultAxiosInstance;
    }

    if (experienceId) {
      this.setExperienceId.apply(this, _toConsumableArray(experienceId));
    }
  }

  _createClass(Client, [{
    key: "setExperienceId",
    value: function setExperienceId() {
      for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
        ids[_key] = arguments[_key];
      }

      this.experienceId = ids;
      this.axiosInstance.defaults.headers[exports.X_GOOG_MAPS_EXPERIENCE_ID] = ids.join(",");
    }
  }, {
    key: "clearExperienceId",
    value: function clearExperienceId() {
      this.experienceId = null;
      this.clearExperienceIdHeader();
    }
  }, {
    key: "clearExperienceIdHeader",
    value: function clearExperienceIdHeader() {
      delete this.axiosInstance.defaults.headers[exports.X_GOOG_MAPS_EXPERIENCE_ID];
    }
  }, {
    key: "getExperienceId",
    value: function getExperienceId() {
      return this.experienceId;
    }
  }, {
    key: "directions",
    value: function directions(request) {
      return directions_1.directions(request, this.axiosInstance);
    }
  }, {
    key: "distancematrix",
    value: function distancematrix(request) {
      return distance_1.distancematrix(request, this.axiosInstance);
    }
  }, {
    key: "elevation",
    value: function elevation(request) {
      return elevation_1.elevation(request, this.axiosInstance);
    }
  }, {
    key: "timezone",
    value: function timezone(request) {
      return timezone_1.timezone(request, this.axiosInstance);
    }
  }, {
    key: "geolocate",
    value: function geolocate(request) {
      return geolocate_1.geolocate(request, this.axiosInstance);
    }
  }, {
    key: "geocode",
    value: function geocode(request) {
      return geocode_1.geocode(request, this.axiosInstance);
    }
  }, {
    key: "reverseGeocode",
    value: function reverseGeocode(request) {
      return reversegeocode_1.reverseGeocode(request, this.axiosInstance);
    }
  }, {
    key: "placeAutocomplete",
    value: function placeAutocomplete(request) {
      return autocomplete_1.placeAutocomplete(request, this.axiosInstance);
    }
  }, {
    key: "placeDetails",
    value: function placeDetails(request) {
      return details_1.placeDetails(request, this.axiosInstance);
    }
  }, {
    key: "findPlaceFromText",
    value: function findPlaceFromText(request) {
      return findplacefromtext_1.findPlaceFromText(request, this.axiosInstance);
    }
  }, {
    key: "placePhoto",
    value: function placePhoto(request) {
      return photo_1.placePhoto(request, this.axiosInstance);
    }
  }, {
    key: "placesNearby",
    value: function placesNearby(request) {
      return placesnearby_1.placesNearby(request, this.axiosInstance);
    }
  }, {
    key: "placeQueryAutocomplete",
    value: function placeQueryAutocomplete(request) {
      return queryautocomplete_1.placeQueryAutocomplete(request, this.axiosInstance);
    }
  }, {
    key: "textSearch",
    value: function textSearch(request) {
      return textsearch_1.textSearch(request, this.axiosInstance);
    }
  }, {
    key: "nearestRoads",
    value: function nearestRoads(request) {
      return nearestroads_1.nearestRoads(request, this.axiosInstance);
    }
  }, {
    key: "snapToRoads",
    value: function snapToRoads(request) {
      return snaptoroads_1.snapToRoads(request, this.axiosInstance);
    }
  }]);

  return Client;
}();

exports.Client = Client;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = __webpack_require__(6);
/**
 * Attach the interceptor to the Axios instance.
 * @param instance The optional Axios instance on which to attach the
 * interceptor.
 * @returns The id of the interceptor attached to the axios instance.
 */


function attach(instance) {
  instance = instance || axios_1["default"];
  return instance.interceptors.response.use(onFulfilled, onError);
}

exports.attach = attach;
/**
 * Eject the Axios interceptor that is providing retry capabilities.
 * @param interceptorId The interceptorId provided in the config.
 * @param instance The axios instance using this interceptor.
 */

function detach(interceptorId, instance) {
  instance = instance || axios_1["default"];
  instance.interceptors.response.eject(interceptorId);
}

exports.detach = detach;

function onFulfilled(res) {
  return res;
}
/**
 * Some versions of axios are converting arrays into objects during retries.
 * This will attempt to convert an object with the following structure into
 * an array, where the keys correspond to the indices:
 * {
 *   0: {
 *     // some property
 *   },
 *   1: {
 *     // another
 *   }
 * }
 * @param obj The object that (may) have integers that correspond to an index
 * @returns An array with the pucked values
 */


function normalizeArray(obj) {
  var arr = [];

  if (!obj) {
    return undefined;
  }

  if (Array.isArray(obj)) {
    return obj;
  }

  if (_typeof(obj) === 'object') {
    Object.keys(obj).forEach(function (key) {
      if (typeof key === 'number') {
        arr[key] = obj[key];
      }
    });
  }

  return arr;
}

function onError(err) {
  var config = getConfig(err) || {};
  config.currentRetryAttempt = config.currentRetryAttempt || 0;
  config.retry = config.retry === undefined || config.retry === null ? 3 : config.retry;
  config.retryDelay = config.retryDelay || 100;
  config.instance = config.instance || axios_1["default"];
  config.backoffType = config.backoffType || 'exponential';
  config.httpMethodsToRetry = normalizeArray(config.httpMethodsToRetry) || ['GET', 'HEAD', 'PUT', 'OPTIONS', 'DELETE'];
  config.noResponseRetries = config.noResponseRetries === undefined || config.noResponseRetries === null ? 2 : config.noResponseRetries; // If this wasn't in the list of status codes where we want
  // to automatically retry, return.

  var retryRanges = [// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
  // 1xx - Retry (Informational, request still processing)
  // 2xx - Do not retry (Success)
  // 3xx - Do not retry (Redirect)
  // 4xx - Do not retry (Client errors)
  // 429 - Retry ("Too Many Requests")
  // 5xx - Retry (Server errors)
  [100, 199], [429, 429], [500, 599]];
  config.statusCodesToRetry = normalizeArray(config.statusCodesToRetry) || retryRanges; // Put the config back into the err

  err.config.raxConfig = Object.assign({}, config); // Determine if we should retry the request

  var shouldRetryFn = config.shouldRetry || shouldRetryRequest;

  if (!shouldRetryFn(err)) {
    return Promise.reject(err);
  } // Create a promise that invokes the retry after the backOffDelay


  var onBackoffPromise = new Promise(function (resolve) {
    // Calculate time to wait with exponential backoff.
    // Formula: (2^c - 1 / 2) * 1000
    var delay;

    if (config.backoffType === 'linear') {
      delay = config.currentRetryAttempt * 1000;
    } else if (config.backoffType === 'static') {
      delay = config.retryDelay;
    } else {
      delay = (Math.pow(2, config.currentRetryAttempt) - 1) / 2 * 1000;
    } // We're going to retry!  Incremenent the counter.


    err.config.raxConfig.currentRetryAttempt += 1;
    setTimeout(resolve, delay);
  }); // Notify the user if they added an `onRetryAttempt` handler

  var onRetryAttemptPromise = config.onRetryAttempt ? Promise.resolve(config.onRetryAttempt(err)) : Promise.resolve(); // Return the promise in which recalls axios to retry the request

  return Promise.resolve().then(function () {
    return onBackoffPromise;
  }).then(function () {
    return onRetryAttemptPromise;
  }).then(function () {
    return config.instance.request(err.config);
  });
}
/**
 * Determine based on config if we should retry the request.
 * @param err The AxiosError passed to the interceptor.
 */


function shouldRetryRequest(err) {
  var config = err.config.raxConfig; // If there's no config, or retries are disabled, return.

  if (!config || config.retry === 0) {
    return false;
  } // Check if this error has no response (ETIMEDOUT, ENOTFOUND, etc)


  if (!err.response && (config.currentRetryAttempt || 0) >= config.noResponseRetries) {
    return false;
  } // Only retry with configured HttpMethods.


  if (!err.config.method || config.httpMethodsToRetry.indexOf(err.config.method.toUpperCase()) < 0) {
    return false;
  } // If this wasn't in the list of status codes where we want
  // to automatically retry, return.


  if (err.response && err.response.status) {
    var isInRange = false;

    var _iterator = _createForOfIteratorHelper(config.statusCodesToRetry),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            min = _step$value[0],
            max = _step$value[1];

        var status = err.response.status;

        if (status >= min && status <= max) {
          isInRange = true;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (!isInRange) {
      return false;
    }
  } // If we are out of retry attempts, return


  config.currentRetryAttempt = config.currentRetryAttempt || 0;

  if (config.currentRetryAttempt >= config.retry) {
    return false;
  }

  return true;
}
/**
 * Acquire the raxConfig object from an AxiosError if available.
 * @param err The Axios error with a config object.
 */


function getConfig(err) {
  if (err && err.config) {
    return err.config.raxConfig;
  }

  return;
}

exports.getConfig = getConfig;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

var bind = __webpack_require__(9);

var Axios = __webpack_require__(10);

var mergeConfig = __webpack_require__(29);

var defaults = __webpack_require__(16);
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


axios.Cancel = __webpack_require__(30);
axios.CancelToken = __webpack_require__(31);
axios.isCancel = __webpack_require__(15); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(32);
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports["default"] = axios;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bind = __webpack_require__(9);
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

var buildURL = __webpack_require__(11);

var InterceptorManager = __webpack_require__(12);

var dispatchRequest = __webpack_require__(13);

var mergeConfig = __webpack_require__(29);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

var transformData = __webpack_require__(14);

var isCancel = __webpack_require__(15);

var defaults = __webpack_require__(16);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(8);

var normalizeHeaderName = __webpack_require__(18);

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
    adapter = __webpack_require__(19);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(19);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(17)))

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

var settle = __webpack_require__(20);

var buildURL = __webpack_require__(11);

var buildFullPath = __webpack_require__(23);

var parseHeaders = __webpack_require__(26);

var isURLSameOrigin = __webpack_require__(27);

var createError = __webpack_require__(21);

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
      var cookies = __webpack_require__(28); // Add xsrf header


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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(21);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(22);
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(24);

var combineURLs = __webpack_require__(25);
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8); // Headers whose duplicates are ignored by node
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(30);
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
/* 32 */
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

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var serialize_1 = __webpack_require__(34);

var client_1 = __webpack_require__(4);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/directions/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  origin: serialize_1.latLngToString,
  destination: serialize_1.latLngToString,
  waypoints: function waypoints(o) {
    return o.map(serialize_1.latLngToString);
  },
  arrival_time: serialize_1.toTimestamp,
  departure_time: serialize_1.toTimestamp
});

function directions(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  var optimize = params.optimize; // optimize is passed as the first of the waypoint pipe array
  // &waypoints=optimize:true|Barossa+Valley,SA|Clare,SA|Connawarra,SA|McLaren+Vale,SA

  if (optimize) {
    params.waypoints = ["optimize:true"].concat(_toConsumableArray(params.waypoints));
  }

  delete params.optimize;
  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.directions = directions;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(35);

var query_string_1 = __webpack_require__(36);

var separator = "|";

function latLngToString(o) {
  if (typeof o === "string") {
    return o;
  } else if (Array.isArray(o) && o.length === 2) {// no transformation
  } else if ("lat" in o && "lng" in o) {
    o = [o.lat, o.lng];
  } else if ("latitude" in o && "longitude" in o) {
    o = [o.latitude, o.longitude];
  } else {
    throw new TypeError();
  }

  return o.map(function (x) {
    return x.toString();
  }).join(",");
}

exports.latLngToString = latLngToString;

function objectToString(o) {
  if (typeof o === "string") {
    return o;
  } else {
    var keys = Object.keys(o);
    keys.sort();
    return keys.map(function (k) {
      return k + ":" + o[k];
    }).join(separator);
  }
}

exports.objectToString = objectToString;

function latLngBoundsToString(latLngBounds) {
  if (typeof latLngBounds === "string") {
    return latLngBounds;
  } else {
    return latLngToString(latLngBounds.southwest) + separator + latLngToString(latLngBounds.northeast);
  }
}

exports.latLngBoundsToString = latLngBoundsToString;

function toLatLngLiteral(o) {
  if (typeof o === "string") {
    var parts = o.split(",").map(Number);
    return {
      lat: parts[0],
      lng: parts[1]
    };
  } else if (Array.isArray(o) && o.length === 2) {
    var _parts = o.map(Number);

    return {
      lat: _parts[0],
      lng: _parts[1]
    };
  } else if ("lat" in o && "lng" in o) {
    return o;
  } else if ("latitude" in o && "longitude" in o) {
    return {
      lat: o.latitude,
      lng: o.longitude
    };
  } else {
    throw new TypeError();
  }
}

exports.toLatLngLiteral = toLatLngLiteral;

function latLngArrayToStringMaybeEncoded(o) {
  if (typeof o === "string") {
    return o;
  }

  var concatenated = o.map(latLngToString).join(separator);
  var encoded = "enc:".concat(util_1.encodePath(o.map(toLatLngLiteral)));

  if (encoded.length < concatenated.length) {
    return encoded;
  }

  return concatenated;
}

exports.latLngArrayToStringMaybeEncoded = latLngArrayToStringMaybeEncoded;

function serializer(format) {
  var queryStringOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    arrayFormat: "separator",
    arrayFormatSeparator: separator
  };
  return function (params) {
    Object.keys(format).forEach(function (key) {
      if (key in params) {
        params[key] = format[key](params[key]);
      }
    });
    return query_string_1.stringify(params, queryStringOptions);
  };
}

exports.serializer = serializer;

function toTimestamp(o) {
  if (o instanceof Date) {
    return Number(o) / 1000;
  }

  return o;
}

exports.toTimestamp = toTimestamp;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Polyline encodes an array of LatLng objects.
 *
 * See {@link https://developers.google.com/maps/documentation/utilities/polylinealgorithm}
 *
 */

function encodePath(path) {
  var result = [];
  var start = [0, 0];
  var end;

  var encodePart = function encodePart(part) {
    part = part < 0 ? ~(part << 1) : part << 1;

    while (part >= 0x20) {
      result.push(String.fromCharCode((0x20 | part & 0x1f) + 63));
      part >>= 5;
    }

    result.push(String.fromCharCode(part + 63));
  };

  for (var i = 0, I = path.length || 0; i < I; ++i) {
    end = [Math.round(path[i].lat * 1e5), Math.round(path[i].lng * 1e5)];
    encodePart(end[0] - start[0]); // lat

    encodePart(end[1] - start[1]); // lng

    start = end;
  }

  return result.join("");
}

exports.encodePath = encodePath;
/**
 * Decodes a polyline encoded string.
 *
 * See {@link https://developers.google.com/maps/documentation/utilities/polylinealgorithm}
 */

function decodePath(encodedPath) {
  var len = encodedPath.length || 0;
  var path = new Array(Math.floor(encodedPath.length / 2));
  var index = 0;
  var lat = 0;
  var lng = 0;
  var pointIndex;

  for (pointIndex = 0; index < len; ++pointIndex) {
    var result = 1;
    var shift = 0;
    var b = void 0;

    do {
      b = encodedPath.charCodeAt(index++) - 63 - 1;
      result += b << shift;
      shift += 5;
    } while (b >= 0x1f);

    lat += result & 1 ? ~(result >> 1) : result >> 1;
    result = 1;
    shift = 0;

    do {
      b = encodedPath.charCodeAt(index++) - 63 - 1;
      result += b << shift;
      shift += 5;
    } while (b >= 0x1f);

    lng += result & 1 ? ~(result >> 1) : result >> 1;
    path[pointIndex] = {
      lat: lat * 1e-5,
      lng: lng * 1e-5
    };
  }

  path.length = pointIndex;
  return path;
}

exports.decodePath = decodePath;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var strictUriEncode = __webpack_require__(37);

var decodeComponent = __webpack_require__(38);

var splitOnFirst = __webpack_require__(39);

var isNullOrUndefined = function isNullOrUndefined(value) {
  return value === null || value === undefined;
};

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return function (key) {
        return function (result, value) {
          var index = result.length;

          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[', index, ']'].join('')]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
        };
      };

    case 'bracket':
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[]'].join('')]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '[]=', encode(value, options)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
      return function (key) {
        return function (result, value) {
          if (value === null || value === undefined || value.length === 0) {
            return result;
          }

          if (result.length === 0) {
            return [[encode(key, options), '=', encode(value, options)].join('')];
          }

          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      };

    default:
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [encode(key, options)]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '=', encode(value, options)].join('')]);
        };
      };
  }
}

function parserForArrayFormat(options) {
  var result;

  switch (options.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    case 'comma':
    case 'separator':
      return function (key, value, accumulator) {
        var isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
        var newValue = isArray ? value.split(options.arrayFormatSeparator).map(function (item) {
          return decode(item, options);
        }) : value === null ? value : decode(value, options);
        accumulator[key] = newValue;
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (_typeof(input) === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

function removeHash(input) {
  var hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function getHash(url) {
  var hash = '';
  var hashStart = url.indexOf('#');

  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}

function extract(input) {
  input = removeHash(input);
  var queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

function parse(input, options) {
  options = Object.assign({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  var formatter = parserForArrayFormat(options); // Create an object with no prototype

  var ret = Object.create(null);

  if (typeof input !== 'string') {
    return ret;
  }

  input = input.trim().replace(/^[?#&]/, '');

  if (!input) {
    return ret;
  }

  var _iterator = _createForOfIteratorHelper(input.split('&')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var param = _step.value;

      var _splitOnFirst = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='),
          _splitOnFirst2 = _slicedToArray(_splitOnFirst, 2),
          _key = _splitOnFirst2[0],
          _value = _splitOnFirst2[1]; // Missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters


      _value = _value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? _value : decode(_value, options);
      formatter(decode(_key, options), _value, ret);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  for (var _i = 0, _Object$keys = Object.keys(ret); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var value = ret[key];

    if (_typeof(value) === 'object' && value !== null) {
      for (var _i2 = 0, _Object$keys2 = Object.keys(value); _i2 < _Object$keys2.length; _i2++) {
        var k = _Object$keys2[_i2];
        value[k] = parseValue(value[k], options);
      }
    } else {
      ret[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function (result, key) {
    var value = ret[key];

    if (Boolean(value) && _typeof(value) === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (object, options) {
  if (!object) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ','
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);

  var shouldFilter = function shouldFilter(key) {
    return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
  };

  var formatter = encoderForArrayFormat(options);
  var objectCopy = {};

  for (var _i3 = 0, _Object$keys3 = Object.keys(object); _i3 < _Object$keys3.length; _i3++) {
    var key = _Object$keys3[_i3];

    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  var keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(function (key) {
    var value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      return value.reduce(formatter(key), []).join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&');
};

exports.parseUrl = function (input, options) {
  return {
    url: removeHash(input).split('?')[0] || '',
    query: parse(extract(input), options)
  };
};

exports.stringifyUrl = function (input, options) {
  var url = removeHash(input.url).split('?')[0] || '';
  var queryFromUrl = exports.extract(input.url);
  var parsedQueryFromUrl = exports.parse(queryFromUrl);
  var hash = getHash(input.url);
  var query = Object.assign(parsedQueryFromUrl, input.query);
  var queryString = exports.stringify(query, options);

  if (queryString) {
    queryString = "?".concat(queryString);
  }

  return "".concat(url).concat(queryString).concat(hash);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (x) {
    return "%".concat(x.charCodeAt(0).toString(16).toUpperCase());
  });
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return decodeURIComponent(components.join(''));
  } catch (err) {// Do nothing
  }

  if (components.length === 1) {
    return components;
  }

  split = split || 1; // Split the array in 2 parts

  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher);

    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher);
    }

    return input;
  }
}

function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  var replaceMap = {
    '%FE%FF': "\uFFFD\uFFFD",
    '%FF%FE': "\uFFFD\uFFFD"
  };
  var match = multiMatcher.exec(input);

  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);

      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }

    match = multiMatcher.exec(input);
  } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


  replaceMap['%C2'] = "\uFFFD";
  var entries = Object.keys(replaceMap);

  for (var i = 0; i < entries.length; i++) {
    // Replace all decoded components
    var key = entries[i];
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }

  return input;
}

module.exports = function (encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + _typeof(encodedURI) + '`');
  }

  try {
    encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

    return decodeURIComponent(encodedURI);
  } catch (err) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (string, separator) {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }

  if (separator === '') {
    return [string];
  }

  var separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [string];
  }

  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var serialize_1 = __webpack_require__(34);

var client_1 = __webpack_require__(4);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/distancematrix/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  origins: function origins(o) {
    return o.map(serialize_1.latLngToString);
  },
  destinations: function destinations(o) {
    return o.map(serialize_1.latLngToString);
  },
  arrival_time: serialize_1.toTimestamp,
  departure_time: serialize_1.toTimestamp
});

function distancematrix(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.distancematrix = distancematrix;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/elevation/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  locations: function locations(o) {
    return o.map(serialize_1.latLngToString);
  },
  path: function path(o) {
    return o.map(serialize_1.latLngToString);
  }
});

function elevation(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.elevation = elevation;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/geocode/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  bounds: serialize_1.latLngBoundsToString,
  components: serialize_1.objectToString
});

function geocode(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.geocode = geocode;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var GeolocateErrorReason;

(function (GeolocateErrorReason) {
  /**
   * You have exceeded your daily limit.
   * Domain: usageLimits
   * Code: 403
   */
  GeolocateErrorReason["dailyLimitExceeded"] = "dailyLimitExceeded";
  /**
   * Your API key is not valid for the Geolocate API. Please ensure that you've included the entire key,
   * and that you've either purchased the API or have enabled billing and activated the API to obtain the free quota.
   * Domain: usageLimits
   * Code: 400
   */

  GeolocateErrorReason["keyInvalid"] = "keyInvalid";
  /**
   * You have exceeded the requests per second per user limit that you configured in the Google Cloud Platform Console.
   * This limit should be configured to prevent a single or small group of users from exhausting your daily quota,
   * while still allowing reasonable access to all users.
   * Domain: usageLimits
   * Code: 403
   */

  GeolocateErrorReason["userRateLimitExceeded"] = "userRateLimitExceeded";
  /**
   * The request was valid, but no results were returned.
   * Domain: geolocation
   * Code: 404
   */

  GeolocateErrorReason["notFound"] = "notFound";
  /**
   * The request body is not valid JSON. Refer to the Request Body section for details on each field.
   * Domain: global
   * Code: 400
   */

  GeolocateErrorReason["parseError"] = "parseError";
})(GeolocateErrorReason = exports.GeolocateErrorReason || (exports.GeolocateErrorReason = {}));

exports.defaultUrl = "https://www.googleapis.com/geolocation/v1/geolocate";

function geolocate(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "post" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      config = __rest(_a, ["params", "method", "url"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url
  }, config));
}

exports.geolocate = geolocate;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://roads.googleapis.com/v1/nearestRoads";
exports.defaultParamsSerializer = serialize_1.serializer({
  points: function points(o) {
    return o.map(function (latLng) {
      return serialize_1.latLngToString(latLng);
    });
  }
});

function nearestRoads(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.nearestRoads = nearestRoads;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var serialize_1 = __webpack_require__(34);

var client_1 = __webpack_require__(4);

var PlaceAutocompleteType;

(function (PlaceAutocompleteType) {
  /**
   * instructs the Place Autocomplete service to return only geocoding results, rather than business results.
   * Generally, you use this request to disambiguate results where the location specified may be indeterminate.
   */
  PlaceAutocompleteType["geocode"] = "geocode";
  /**
   * instructs the Place Autocomplete service to return only geocoding results with a precise address.
   * Generally, you use this request when you know the user will be looking for a fully specified address.
   */

  PlaceAutocompleteType["address"] = "address";
  /** instructs the Place Autocomplete service to return only business results. */

  PlaceAutocompleteType["establishment"] = "establishment";
  /**
   * the `(regions)` type collection instructs the Places service to return any result matching the following types:
   *  - `locality`
   *  - `sublocality`
   *  - `postal_code`
   *  - `country`
   *  - `administrative_area_level_1`
   *  - `administrative_area_level_2`
   */

  PlaceAutocompleteType["regions"] = "(regions)";
  /** the (cities) type collection instructs the Places service to return results that match `locality` or `administrative_area_level_3`. */

  PlaceAutocompleteType["cities"] = "(cities)";
})(PlaceAutocompleteType = exports.PlaceAutocompleteType || (exports.PlaceAutocompleteType = {}));

exports.defaultParamsSerializer = serialize_1.serializer({
  location: serialize_1.latLngToString
});
exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

function placeAutocomplete(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.placeAutocomplete = placeAutocomplete;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/details/json";
exports.defaultParamsSerializer = serialize_1.serializer({}, {
  arrayFormat: "comma"
});

function placeDetails(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.placeDetails = placeDetails;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/photo";

function placePhoto(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      config = __rest(_a, ["params", "method", "url"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url
  }, config));
}

exports.placePhoto = placePhoto;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  location: serialize_1.latLngToString
});

function placeQueryAutocomplete(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.placeQueryAutocomplete = placeQueryAutocomplete;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var serialize_1 = __webpack_require__(34);

var client_1 = __webpack_require__(4);

var PlacesNearbyRanking;

(function (PlacesNearbyRanking) {
  /**
   * This option sorts results based on their importance. Ranking will favor prominent places within the specified area.
   * Prominence can be affected by a place's ranking in Google's index, global popularity, and other factors.
   */
  PlacesNearbyRanking["prominence"] = "prominence";
  /**
   * This option biases search results in ascending order by their distance from the specified `location`.
   * When distance is specified, one or more of `keyword`, `name`, or `type` is required.
   */

  PlacesNearbyRanking["distance"] = "distance";
})(PlacesNearbyRanking = exports.PlacesNearbyRanking || (exports.PlacesNearbyRanking = {}));

exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  location: serialize_1.latLngToString
});

function placesNearby(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.placesNearby = placesNearby;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var serialize_1 = __webpack_require__(34);

var client_1 = __webpack_require__(4);
/**
 * If both `result_type` and `location_type` filters are present then the API returns only those results that match both the
 * `result_type` and the `location_type` values. If none of the filter values are acceptable, the API returns `ZERO_RESULTS`.
 */


var ReverseGeocodingLocationType;

(function (ReverseGeocodingLocationType) {
  /** returns only the addresses for which Google has location information accurate down to street address precision. */
  ReverseGeocodingLocationType["ROOFTOP"] = "ROOFTOP";
  /**
   * returns only the addresses that reflect an approximation (usually on a road) interpolated between two precise points
   * (such as intersections). An interpolated range generally indicates that rooftop geocodes are unavailable for a street address.
   */

  ReverseGeocodingLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
  /** returns only geometric centers of a location such as a polyline (for example, a street) or polygon (region). */

  ReverseGeocodingLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
  /** returns only the addresses that are characterized as approximate. */

  ReverseGeocodingLocationType["APPROXIMATE"] = "APPROXIMATE";
})(ReverseGeocodingLocationType = exports.ReverseGeocodingLocationType || (exports.ReverseGeocodingLocationType = {}));

exports.defaultUrl = "https://maps.googleapis.com/maps/api/geocode/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  latlng: serialize_1.latLngToString
});

function reverseGeocode(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.reverseGeocode = reverseGeocode;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://roads.googleapis.com/v1/snapToRoads";
exports.defaultParamsSerializer = serialize_1.serializer({
  path: function path(o) {
    return o.map(serialize_1.latLngToString);
  }
});

function snapToRoads(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.snapToRoads = snapToRoads;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var client_1 = __webpack_require__(4);

var serialize_1 = __webpack_require__(34);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  location: serialize_1.latLngToString
});

function textSearch(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.textSearch = textSearch;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var serialize_1 = __webpack_require__(34);

var client_1 = __webpack_require__(4);

exports.defaultUrl = "https://maps.googleapis.com/maps/api/timezone/json";
exports.defaultParamsSerializer = serialize_1.serializer({
  timestamp: serialize_1.toTimestamp,
  location: serialize_1.latLngToString
});

function timezone(_a) {
  var axiosInstance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : client_1.defaultAxiosInstance;

  var params = _a.params,
      _a$method = _a.method,
      method = _a$method === void 0 ? "get" : _a$method,
      _a$url = _a.url,
      url = _a$url === void 0 ? exports.defaultUrl : _a$url,
      _a$paramsSerializer = _a.paramsSerializer,
      paramsSerializer = _a$paramsSerializer === void 0 ? exports.defaultParamsSerializer : _a$paramsSerializer,
      config = __rest(_a, ["params", "method", "url", "paramsSerializer"]);

  return axiosInstance(Object.assign({
    params: params,
    method: method,
    url: url,
    paramsSerializer: paramsSerializer
  }, config));
}

exports.timezone = timezone;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = noop;
module.exports.HttpsAgent = noop; // Noop function for browser since native api's don't use agents.

function noop() {}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
}); // Cannot be `import` as it's not under TS root dir

exports.version = __webpack_require__(56).version;

__export(__webpack_require__(57));

__export(__webpack_require__(4));

/***/ }),
/* 56 */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@googlemaps/google-maps-services-js\",\"_id\":\"@googlemaps/google-maps-services-js@2.6.0\",\"_inBundle\":false,\"_integrity\":\"sha512-+eVnmvMxfp++yGiwewSUyNtAy0Rd6E2b+Fs9IlzWERq0J8jsX4U/s9LoG0qc+yNEYZGh0GX6fNYVGpYyuZ4+Yw==\",\"_location\":\"/@googlemaps/google-maps-services-js\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"@googlemaps/google-maps-services-js\",\"name\":\"@googlemaps/google-maps-services-js\",\"escapedName\":\"@googlemaps%2fgoogle-maps-services-js\",\"scope\":\"@googlemaps\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/@googlemaps/google-maps-services-js/-/google-maps-services-js-2.6.0.tgz\",\"_shasum\":\"cbaacf8f0f8961f9faf94c83231d1640aef38aec\",\"_spec\":\"@googlemaps/google-maps-services-js\",\"_where\":\"/Users/sokang/code/cloud-computing/trip-interest/backend\",\"author\":{\"name\":\"Google Inc.\"},\"bugs\":{\"url\":\"https://github.com/googlemaps/google-maps-services-js/issues\"},\"bundleDependencies\":false,\"contributors\":[{\"name\":\"Justin Poehnelt\",\"email\":\"jpoehnelt@google.com\"}],\"dependencies\":{\"agentkeepalive\":\"^4.1.0\",\"axios\":\"^0.19.0\",\"query-string\":\"^6.11.0\",\"retry-axios\":\"^2.1.2\"},\"deprecated\":false,\"description\":\"Node.js client library for Google Maps API Web Services\",\"devDependencies\":{\"@semantic-release/changelog\":\"^5.0.0\",\"@semantic-release/git\":\"^9.0.0\",\"@semantic-release/github\":\"^7.0.3\",\"@semantic-release/release-notes-generator\":\"^9.0.0\",\"@types/jest\":\"^25.0.25\",\"@types/node\":\"^12.12.15\",\"codecov\":\">=3.6.5\",\"jest\":\"^25.2.2\",\"semantic-release\":\"^17.0.2\",\"ts-jest\":\"^25.2.1\",\"typedoc\":\"^0.16.11\",\"typescript\":\"^3.7.4\"},\"files\":[\"dist\"],\"homepage\":\"https://github.com/googlemaps/google-maps-services-js\",\"keywords\":[\"google\",\"maps\",\"googlemaps\",\"geo\",\"geocode\",\"timezone\",\"api\",\"client\",\"roads\",\"directions\",\"navigation\"],\"license\":\"Apache-2.0\",\"main\":\"./dist/index.js\",\"name\":\"@googlemaps/google-maps-services-js\",\"publishConfig\":{\"registry\":\"https://wombat-dressing-room.appspot.com\",\"access\":\"public\"},\"release\":{\"plugins\":[\"@semantic-release/commit-analyzer\",\"@semantic-release/release-notes-generator\",\"@semantic-release/changelog\",\"@semantic-release/npm\",\"@semantic-release/github\"]},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/googlemaps/google-maps-services-js.git\"},\"scripts\":{\"docs\":\"rm -rf docs/ && typedoc .\",\"prepare\":\"tsc\",\"test\":\"jest src\",\"test:all\":\"jest\",\"test:e2e\":\"jest e2e\"},\"version\":\"2.6.0\"}");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Status;

(function (Status) {
  /** indicates the response contains a valid result. */
  Status["OK"] = "OK";
  /** indicates that the provided request was invalid. */

  Status["INVALID_REQUEST"] = "INVALID_REQUEST";
  /**
   * indicates that too many `waypoints` were provided in the request. For applications using the Directions API as a web service,
   * or the [directions service in the Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/directions),
   * the maximum allowed number of `waypoints` is 23, plus the origin and destination.
   */

  Status["MAX_WAYPOINTS_EXCEEDED"] = "MAX_WAYPOINTS_EXCEEDED";
  /**
   * indicates the requested route is too long and cannot be processed.
   * This error occurs when more complex directions are returned.
   * Try reducing the number of waypoints, turns, or instructions.
   */

  Status["MAX_ROUTE_LENGTH_EXCEEDED"] = "MAX_ROUTE_LENGTH_EXCEEDED";
  /**
   * indicates any of the following:
   *  - The API key is missing or invalid.
   *  - Billing has not been enabled on your account.
   *  - A self-imposed usage cap has been exceeded.
   *  - The provided method of payment is no longer valid (for example, a credit card has expired).
   * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
   */

  Status["OVER_DAILY_LIMIT"] = "OVER_DAILY_LIMIT";
  /** indicates the service has received too many requests from your application within the allowed time period. */

  Status["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
  /** indicates that the service denied use of the Distance Matrix service by your application. */

  Status["REQUEST_DENIED"] = "REQUEST_DENIED";
  /** indicates a Distance Matrix request could not be processed due to a server error. The request may succeed if you try again. */

  Status["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
  /** indicates that the request was successful but returned no results. */

  Status["ZERO_RESULTS"] = "ZERO_RESULTS";
})(Status = exports.Status || (exports.Status = {}));

var PlaceIdScope;

(function (PlaceIdScope) {
  /**
   * The place ID is recognised by your application only.
   * This is because your application added the place, and the place has not yet passed the moderation process.
   */
  PlaceIdScope["APP"] = "APP";
  /** The place ID is available to other applications and on Google Maps. */

  PlaceIdScope["GOOGLE"] = "GOOGLE";
})(PlaceIdScope = exports.PlaceIdScope || (exports.PlaceIdScope = {}));

var PlaceInputType;

(function (PlaceInputType) {
  PlaceInputType["textQuery"] = "textquery";
  PlaceInputType["phoneNumber"] = "phonenumber";
})(PlaceInputType = exports.PlaceInputType || (exports.PlaceInputType = {}));
/**
 * Table 1: Types supported in place search and addition
 *
 * You can use the following values in the types filter for place searches and when adding a place.
 *
 * @see https://developers.google.com/places/web-service/supported_types#table1
 */


var PlaceType1;

(function (PlaceType1) {
  PlaceType1["accounting"] = "accounting";
  PlaceType1["airport"] = "airport";
  PlaceType1["amusement_park"] = "amusement_park";
  PlaceType1["aquarium"] = "aquarium";
  PlaceType1["art_gallery"] = "art_gallery";
  PlaceType1["atm"] = "atm";
  PlaceType1["bakery"] = "bakery";
  PlaceType1["bank"] = "bank";
  PlaceType1["bar"] = "bar";
  PlaceType1["beauty_salon"] = "beauty_salon";
  PlaceType1["bicycle_store"] = "bicycle_store";
  PlaceType1["book_store"] = "book_store";
  PlaceType1["bowling_alley"] = "bowling_alley";
  PlaceType1["bus_station"] = "bus_station";
  PlaceType1["cafe"] = "cafe";
  PlaceType1["campground"] = "campground";
  PlaceType1["car_dealer"] = "car_dealer";
  PlaceType1["car_rental"] = "car_rental";
  PlaceType1["car_repair"] = "car_repair";
  PlaceType1["car_wash"] = "car_wash";
  PlaceType1["casino"] = "casino";
  PlaceType1["cemetery"] = "cemetery";
  PlaceType1["church"] = "church";
  PlaceType1["city_hall"] = "city_hall";
  PlaceType1["clothing_store"] = "clothing_store";
  PlaceType1["convenience_store"] = "convenience_store";
  PlaceType1["courthouse"] = "courthouse";
  PlaceType1["dentist"] = "dentist";
  PlaceType1["department_store"] = "department_store";
  PlaceType1["doctor"] = "doctor";
  PlaceType1["electrician"] = "electrician";
  PlaceType1["electronics_store"] = "electronics_store";
  PlaceType1["embassy"] = "embassy";
  PlaceType1["fire_station"] = "fire_station";
  PlaceType1["florist"] = "florist";
  PlaceType1["funeral_home"] = "funeral_home";
  PlaceType1["furniture_store"] = "furniture_store";
  PlaceType1["gas_station"] = "gas_station";
  PlaceType1["gym"] = "gym";
  PlaceType1["hair_care"] = "hair_care";
  PlaceType1["hardware_store"] = "hardware_store";
  PlaceType1["hindu_temple"] = "hindu_temple";
  PlaceType1["home_goods_store"] = "home_goods_store";
  PlaceType1["hospital"] = "hospital";
  PlaceType1["insurance_agency"] = "insurance_agency";
  PlaceType1["jewelry_store"] = "jewelry_store";
  PlaceType1["laundry"] = "laundry";
  PlaceType1["lawyer"] = "lawyer";
  PlaceType1["library"] = "library";
  PlaceType1["liquor_store"] = "liquor_store";
  PlaceType1["local_government_office"] = "local_government_office";
  PlaceType1["locksmith"] = "locksmith";
  PlaceType1["lodging"] = "lodging";
  PlaceType1["meal_delivery"] = "meal_delivery";
  PlaceType1["meal_takeaway"] = "meal_takeaway";
  PlaceType1["mosque"] = "mosque";
  PlaceType1["movie_rental"] = "movie_rental";
  PlaceType1["movie_theater"] = "movie_theater";
  PlaceType1["moving_company"] = "moving_company";
  PlaceType1["museum"] = "museum";
  PlaceType1["night_club"] = "night_club";
  PlaceType1["painter"] = "painter";
  PlaceType1["park"] = "park";
  PlaceType1["parking"] = "parking";
  PlaceType1["pet_store"] = "pet_store";
  PlaceType1["pharmacy"] = "pharmacy";
  PlaceType1["physiotherapist"] = "physiotherapist";
  PlaceType1["plumber"] = "plumber";
  PlaceType1["police"] = "police";
  PlaceType1["post_office"] = "post_office";
  PlaceType1["real_estate_agency"] = "real_estate_agency";
  PlaceType1["restaurant"] = "restaurant";
  PlaceType1["roofing_contractor"] = "roofing_contractor";
  PlaceType1["rv_park"] = "rv_park";
  PlaceType1["school"] = "school";
  PlaceType1["shoe_store"] = "shoe_store";
  PlaceType1["shopping_mall"] = "shopping_mall";
  PlaceType1["spa"] = "spa";
  PlaceType1["stadium"] = "stadium";
  PlaceType1["storage"] = "storage";
  PlaceType1["store"] = "store";
  PlaceType1["subway_station"] = "subway_station";
  PlaceType1["supermarket"] = "supermarket";
  PlaceType1["synagogue"] = "synagogue";
  PlaceType1["taxi_stand"] = "taxi_stand";
  PlaceType1["train_station"] = "train_station";
  PlaceType1["transit_station"] = "transit_station";
  PlaceType1["travel_agency"] = "travel_agency";
  PlaceType1["veterinary_care"] = "veterinary_care";
  PlaceType1["zoo"] = "zoo";
})(PlaceType1 = exports.PlaceType1 || (exports.PlaceType1 = {}));
/**
 * Table 2: Additional types returned by the Places service
 *
 * The following types may be returned in the results of a place search, in addition to the types in table 1 above.
 * For more details on these types, refer to [Address Types](https://developers.google.com/maps/documentation/geocoding/intro#Types)
 * in Geocoding Responses.
 *
 * @see https://developers.google.com/places/web-service/supported_types#table2
 */


var PlaceType2;

(function (PlaceType2) {
  PlaceType2["administrative_area_level_1"] = "administrative_area_level_1";
  PlaceType2["administrative_area_level_2"] = "administrative_area_level_2";
  PlaceType2["administrative_area_level_3"] = "administrative_area_level_3";
  PlaceType2["administrative_area_level_4"] = "administrative_area_level_4";
  PlaceType2["administrative_area_level_5"] = "administrative_area_level_5";
  PlaceType2["colloquial_area"] = "colloquial_area";
  PlaceType2["country"] = "country";
  PlaceType2["establishment"] = "establishment";
  PlaceType2["finance"] = "finance";
  PlaceType2["floor"] = "floor";
  PlaceType2["food"] = "food";
  PlaceType2["general_contractor"] = "general_contractor";
  PlaceType2["geocode"] = "geocode";
  PlaceType2["health"] = "health";
  PlaceType2["intersection"] = "intersection";
  PlaceType2["locality"] = "locality";
  PlaceType2["natural_feature"] = "natural_feature";
  PlaceType2["neighborhood"] = "neighborhood";
  PlaceType2["place_of_worship"] = "place_of_worship";
  PlaceType2["political"] = "political";
  PlaceType2["point_of_interest"] = "point_of_interest";
  PlaceType2["post_box"] = "post_box";
  PlaceType2["postal_code"] = "postal_code";
  PlaceType2["postal_code_prefix"] = "postal_code_prefix";
  PlaceType2["postal_code_suffix"] = "postal_code_suffix";
  PlaceType2["postal_town"] = "postal_town";
  PlaceType2["premise"] = "premise";
  PlaceType2["room"] = "room";
  PlaceType2["route"] = "route";
  PlaceType2["street_address"] = "street_address";
  PlaceType2["street_number"] = "street_number";
  PlaceType2["sublocality"] = "sublocality";
  PlaceType2["sublocality_level_4"] = "sublocality_level_4";
  PlaceType2["sublocality_level_5"] = "sublocality_level_5";
  PlaceType2["sublocality_level_3"] = "sublocality_level_3";
  PlaceType2["sublocality_level_2"] = "sublocality_level_2";
  PlaceType2["sublocality_level_1"] = "sublocality_level_1";
  PlaceType2["subpremise"] = "subpremise";
})(PlaceType2 = exports.PlaceType2 || (exports.PlaceType2 = {}));

var AspectRatingType;

(function (AspectRatingType) {
  AspectRatingType["appeal"] = "appeal";
  AspectRatingType["atmosphere"] = "atmosphere";
  AspectRatingType["decor"] = "decor";
  AspectRatingType["facilities"] = "facilities";
  AspectRatingType["food"] = "food";
  AspectRatingType["overall"] = "overall";
  AspectRatingType["quality"] = "quality";
  AspectRatingType["service"] = "service";
})(AspectRatingType = exports.AspectRatingType || (exports.AspectRatingType = {}));
/**
 * By default the API will attempt to load the most appropriate language based on the users location or browser settings.
 * Some APIs allow you to explicitly set a language when you make a request
 *
 * @see https://developers.google.com/maps/faq#languagesupport
 */


var Language;

(function (Language) {
  /** Arabic */
  Language["ar"] = "ar";
  /** Belarusian */

  Language["be"] = "be";
  /** Bulgarian */

  Language["bg"] = "bg";
  /** Bengali */

  Language["bn"] = "bn";
  /** Catalan */

  Language["ca"] = "ca";
  /** Czech */

  Language["cs"] = "cs";
  /** Danish */

  Language["da"] = "da";
  /** German */

  Language["de"] = "de";
  /** Greek */

  Language["el"] = "el";
  /** English */

  Language["en"] = "en";
  /** English (Australian) */

  Language["en_Au"] = "en-Au";
  /** English (Great Britain) */

  Language["en_GB"] = "en-GB";
  /** Spanish */

  Language["es"] = "es";
  /** Basque */

  Language["eu"] = "eu";
  /** Farsi */

  Language["fa"] = "fa";
  /** Finnish */

  Language["fi"] = "fi";
  /** Filipino */

  Language["fil"] = "fil";
  /** French */

  Language["fr"] = "fr";
  /** Galician */

  Language["gl"] = "gl";
  /** Gujarati */

  Language["gu"] = "gu";
  /** Hindi */

  Language["hi"] = "hi";
  /** Croatian */

  Language["hr"] = "hr";
  /** Hungarian */

  Language["hu"] = "hu";
  /** Indonesian */

  Language["id"] = "id";
  /** Italian */

  Language["it"] = "it";
  /** Hebrew */

  Language["iw"] = "iw";
  /** Japanese */

  Language["ja"] = "ja";
  /** Kazakh */

  Language["kk"] = "kk";
  /** Kannada */

  Language["kn"] = "kn";
  /** Korean */

  Language["ko"] = "ko";
  /** Kyrgyz */

  Language["ky"] = "ky";
  /** Lithuanian */

  Language["lt"] = "lt";
  /** Latvian */

  Language["lv"] = "lv";
  /** Macedonian */

  Language["mk"] = "mk";
  /** Malayalam */

  Language["ml"] = "ml";
  /** Marathi */

  Language["mr"] = "mr";
  /** Burmese */

  Language["my"] = "my";
  /** Dutch */

  Language["nl"] = "nl";
  /** Norwegian */

  Language["no"] = "no";
  /** Punjabi */

  Language["pa"] = "pa";
  /** Polish */

  Language["pl"] = "pl";
  /** Portuguese */

  Language["pt"] = "pt";
  /** Portuguese (Brazil) */

  Language["pt_BR"] = "pt-BR";
  /** Portuguese (Portugal) */

  Language["pt_PT"] = "pt-PT";
  /** Romanian */

  Language["ro"] = "ro";
  /** Russian */

  Language["ru"] = "ru";
  /** Slovak */

  Language["sk"] = "sk";
  /** Slovenian */

  Language["sl"] = "sl";
  /** Albanian */

  Language["sq"] = "sq";
  /** Serbian */

  Language["sr"] = "sr";
  /** Swedish */

  Language["sv"] = "sv";
  /** Tamil */

  Language["ta"] = "ta";
  /** Telugu */

  Language["te"] = "te";
  /** Thai */

  Language["th"] = "th";
  /** Tagalog */

  Language["tl"] = "tl";
  /** Turkish */

  Language["tr"] = "tr";
  /** Ukrainian */

  Language["uk"] = "uk";
  /** Uzbek */

  Language["uz"] = "uz";
  /** Vietnamese */

  Language["vi"] = "vi";
  /** Chinese (Simlified) */

  Language["zh_CN"] = "zh-CN";
  /** Chinese (Traditional) */

  Language["zh_TW"] = "zh-TW";
})(Language = exports.Language || (exports.Language = {}));
/**
 * When you calculate directions, you may specify the transportation mode to use.
 * By default, directions are calculated as `driving` directions.
 *
 * **Note:** Both walking and bicycling directions may sometimes not include clear pedestrian or bicycling paths,
 * so these directions will return warnings in the returned result which you must display to the user.
 */


var TravelMode;

(function (TravelMode) {
  /** (default) indicates standard driving directions using the road network. */
  TravelMode["driving"] = "driving";
  /** requests walking directions via pedestrian paths & sidewalks (where available). */

  TravelMode["walking"] = "walking";
  /** requests bicycling directions via bicycle paths & preferred streets (where available). */

  TravelMode["bicycling"] = "bicycling";
  /**
   * requests directions via public transit routes (where available).
   * If you set the mode to transit, you can optionally specify either a departure_time or an arrival_time.
   * If neither time is specified, the departure_time defaults to now (that is, the departure time defaults to the current time).
   * You can also optionally include a transit_mode and/or a transit_routing_preference.
   */

  TravelMode["transit"] = "transit";
})(TravelMode = exports.TravelMode || (exports.TravelMode = {}));

var TravelRestriction;

(function (TravelRestriction) {
  /** indicates that the calculated route should avoid toll roads/bridges. */
  TravelRestriction["tolls"] = "tolls";
  /** indicates that the calculated route should avoid highways. */

  TravelRestriction["highways"] = "highways";
  /** indicates that the calculated route should avoid ferries. */

  TravelRestriction["ferries"] = "ferries";
  /**
   * indicates that the calculated route should avoid indoor steps for walking and transit directions.
   * Only requests that include an API key or a Google Maps APIs Premium Plan client ID will receive indoor steps by default.
   */

  TravelRestriction["indoor"] = "indoor";
})(TravelRestriction = exports.TravelRestriction || (exports.TravelRestriction = {}));
/**
 * Directions results contain text within distance fields that may be displayed to the user to indicate the distance of
 * a particular "step" of the route. By default, this text uses the unit system of the origin's country or region.
 */


var UnitSystem;

(function (UnitSystem) {
  /** specifies usage of the metric system. Textual distances are returned using kilometers and meters. */
  UnitSystem["metric"] = "metric";
  /** specifies usage of the Imperial (English) system. Textual distances are returned using miles and feet. */

  UnitSystem["imperial"] = "imperial";
})(UnitSystem = exports.UnitSystem || (exports.UnitSystem = {}));

var TrafficModel;

(function (TrafficModel) {
  /**
   * indicates that the returned `duration_in_traffic` should be the best estimate of travel time given what is known about
   * both historical traffic conditions and live traffic. Live traffic becomes more important the closer the `departure_time` is to now.
   */
  TrafficModel["best_guess"] = "best_guess";
  /**
   * indicates that the returned `duration_in_traffic` should be longer than the actual travel time on most days,
   * though occasional days with particularly bad traffic conditions may exceed this value.
   */

  TrafficModel["pessimistic"] = "pessimistic";
  /**
   * indicates that the returned `duration_in_traffic` should be shorter than the actual travel time on most days,
   * though occasional days with particularly good traffic conditions may be faster than this value.
   */

  TrafficModel["optimistic"] = "optimistic";
})(TrafficModel = exports.TrafficModel || (exports.TrafficModel = {}));

var TransitMode;

(function (TransitMode) {
  /** indicates that the calculated route should prefer travel by bus. */
  TransitMode["bus"] = "bus";
  /** indicates that the calculated route should prefer travel by subway. */

  TransitMode["subway"] = "subway";
  /** indicates that the calculated route should prefer travel by train. */

  TransitMode["train"] = "train";
  /** indicates that the calculated route should prefer travel by tram and light rail. */

  TransitMode["tram"] = "tram";
  /**
   * indicates that the calculated route should prefer travel by train, tram, light rail, and subway.
   * This is equivalent to `transit_mode=train|tram|subway`
   */

  TransitMode["rail"] = "rail";
})(TransitMode = exports.TransitMode || (exports.TransitMode = {}));

var TransitRoutingPreference;

(function (TransitRoutingPreference) {
  /** indicates that the calculated route should prefer limited amounts of walking. */
  TransitRoutingPreference["less_walking"] = "less_walking";
  /** indicates that the calculated route should prefer a limited number of transfers. */

  TransitRoutingPreference["fewer_transfers"] = "fewer_transfers";
})(TransitRoutingPreference = exports.TransitRoutingPreference || (exports.TransitRoutingPreference = {}));
/**
 * The `status` field within the Directions response object contains the status of the request, and may contain debugging information
 * to help you track down why the Directions service failed.
 */


var DirectionsReponseStatus;

(function (DirectionsReponseStatus) {
  /** indicates the response contains a valid `result`. */
  DirectionsReponseStatus["OK"] = "OK";
  /** indicates at least one of the locations specified in the request's origin, destination, or waypoints could not be geocoded. */

  DirectionsReponseStatus["NOT_FOUND"] = "NOT_FOUND";
  /** indicates no route could be found between the origin and destination. */

  DirectionsReponseStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
  /**
   * indicates that too many `waypoints` were provided in the request. For applications using the Directions API as a web service,
   * or the [directions service in the Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/directions),
   * the maximum allowed number of `waypoints` is 23, plus the origin and destination.
   */

  DirectionsReponseStatus["MAX_WAYPOINTS_EXCEEDED"] = "MAX_WAYPOINTS_EXCEEDED";
  /**
   * indicates the requested route is too long and cannot be processed.
   * This error occurs when more complex directions are returned.
   * Try reducing the number of waypoints, turns, or instructions.
   */

  DirectionsReponseStatus["MAX_ROUTE_LENGTH_EXCEEDED"] = "MAX_ROUTE_LENGTH_EXCEEDED";
  /** indicates that the provided request was invalid. Common causes of this status include an invalid parameter or parameter value. */

  DirectionsReponseStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
  /**
   * indicates any of the following:
   *  - The API key is missing or invalid.
   *  - Billing has not been enabled on your account.
   *  - A self-imposed usage cap has been exceeded.
   *  - The provided method of payment is no longer valid (for example, a credit card has expired).
   * See the [Maps FAQ](https://developers.google.com/maps/faq#over-limit-key-error) to learn how to fix this.
   */

  DirectionsReponseStatus["OVER_DAILY_LIMIT"] = "OVER_DAILY_LIMIT";
  /** indicates the service has received too many requests from your application within the allowed time period. */

  DirectionsReponseStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
  /** indicates that the service denied use of the directions service by your application. */

  DirectionsReponseStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
  /** indicates a directions request could not be processed due to a server error. The request may succeed if you try again. */

  DirectionsReponseStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(DirectionsReponseStatus = exports.DirectionsReponseStatus || (exports.DirectionsReponseStatus = {}));

var GeocodedWaypointStatus;

(function (GeocodedWaypointStatus) {
  /** indicates that no errors occurred; the address was successfully parsed and at least one geocode was returned. */
  GeocodedWaypointStatus["OK"] = "OK";
  /**
   * indicates that the geocode was successful but returned no results.
   * This may occur if the geocoder was passed a non-existent `address`.
   */

  GeocodedWaypointStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(GeocodedWaypointStatus = exports.GeocodedWaypointStatus || (exports.GeocodedWaypointStatus = {}));

var AddressType;

(function (AddressType) {
  /** indicates a precise street address. */
  AddressType["street_address"] = "street_address";
  /** indicates a named route (such as "US 101"). */

  AddressType["route"] = "route";
  /** indicates a major intersection, usually of two major roads. */

  AddressType["intersection"] = "intersection";
  /** indicates a political entity. Usually, this type indicates a polygon of some civil administration. */

  AddressType["political"] = "political";
  /** indicates the national political entity, and is typically the highest order type returned by the Geocoder. */

  AddressType["country"] = "country";
  /**
   * indicates a first-order civil entity below the country level. Within the United States, these administrative levels are states.
   * Not all nations exhibit these administrative levels. In most cases, `administrative_area_level_1` short names will closely match
   * ISO 3166-2 subdivisions and other widely circulated lists; however this is not guaranteed as our geocoding results are based
   * on a variety of signals and location data.
   */

  AddressType["administrative_area_level_1"] = "administrative_area_level_1";
  /**
   * indicates a second-order civil entity below the country level. Within the United States, these administrative levels are counties.
   * Not all nations exhibit these administrative levels.
   */

  AddressType["administrative_area_level_2"] = "administrative_area_level_2";
  /**
   * indicates a third-order civil entity below the country level. This type indicates a minor civil division.
   * Not all nations exhibit these administrative levels.
   */

  AddressType["administrative_area_level_3"] = "administrative_area_level_3";
  /**
   * indicates a fourth-order civil entity below the country level. This type indicates a minor civil division.
   * Not all nations exhibit these administrative levels.
   */

  AddressType["administrative_area_level_4"] = "administrative_area_level_4";
  /**
   * indicates a fifth-order civil entity below the country level. This type indicates a minor civil division.
   * Not all nations exhibit these administrative levels.
   */

  AddressType["administrative_area_level_5"] = "administrative_area_level_5";
  /** indicates a commonly-used alternative name for the entity. */

  AddressType["colloquial_area"] = "colloquial_area";
  /** indicates an incorporated city or town political entity. */

  AddressType["locality"] = "locality";
  /**
   * indicates a specific type of Japanese locality, to facilitate distinction between multiple locality components within a
   * Japanese address.
   */

  AddressType["ward"] = "ward";
  /**
   * indicates a first-order civil entity below a locality. For some locations may receive one of the additional types:
   * `sublocality_level_1` to `sublocality_level_5`. Each sublocality level is a civil entity. Larger numbers indicate a smaller
   * geographic area.
   */

  AddressType["sublocality"] = "sublocality";
  AddressType["sublocality_level_1"] = "sublocality_level_1";
  AddressType["sublocality_level_2"] = "sublocality_level_2";
  AddressType["sublocality_level_3"] = "sublocality_level_3";
  AddressType["sublocality_level_4"] = "sublocality_level_4";
  AddressType["sublocality_level_5"] = "sublocality_level_5";
  /** indicates a named neighborhood */

  AddressType["neighborhood"] = "neighborhood";
  /** indicates a named location, usually a building or collection of buildings with a common name */

  AddressType["premise"] = "premise";
  /**
   * indicates a first-order entity below a named location, usually a singular building within a collection of buildings with a
   * common name.
   */

  AddressType["subpremise"] = "subpremise";
  /** indicates a postal code as used to address postal mail within the country. */

  AddressType["postal_code"] = "postal_code";
  /** indicates a prominent natural feature. */

  AddressType["natural_feature"] = "natural_feature";
  /** indicates an airport. */

  AddressType["airport"] = "airport";
  /** indicates a named park. */

  AddressType["park"] = "park";
  /**
   * indicates a named point of interest. Typically, these "POI"s are prominent local entities that don't easily fit in another category,
   * such as "Empire State Building" or "Statue of Liberty".
   */

  AddressType["point_of_interest"] = "point_of_interest";
  AddressType["establishment"] = "establishment";
})(AddressType = exports.AddressType || (exports.AddressType = {}));

var Maneuver;

(function (Maneuver) {
  Maneuver["turn_slight_left"] = "turn-slight-left";
  Maneuver["turn_sharp_left"] = "turn-sharp-left";
  Maneuver["uturn_left"] = "uturn-left";
  Maneuver["turn_left"] = "turn-left";
  Maneuver["turn_slight_right"] = "turn-slight-right";
  Maneuver["turn_sharp_right"] = "turn-sharp-right";
  Maneuver["uturn_right"] = "uturn-right";
  Maneuver["turn_right"] = "turn-right";
  Maneuver["straight"] = "straight";
  Maneuver["ramp_left"] = "ramp-left";
  Maneuver["ramp_right"] = "ramp-right";
  Maneuver["merge"] = "merge";
  Maneuver["fork_left"] = "fork-left";
  Maneuver["fork_right"] = "fork-right";
  Maneuver["ferry"] = "ferry";
  Maneuver["ferry_train"] = "ferry-train";
  Maneuver["roundabout_left"] = "roundabout-left";
  Maneuver["roundabout_right"] = "roundabout-right";
})(Maneuver = exports.Maneuver || (exports.Maneuver = {}));
/** @see https://developers.google.com/maps/documentation/directions/intro#VehicleType. */


var VehicleType;

(function (VehicleType) {
  /** Rail. */
  VehicleType["RAIL"] = "RAIL";
  /** Light rail transit. */

  VehicleType["METRO_RAIL"] = "METRO_RAIL";
  /** Underground light rail. */

  VehicleType["SUBWAY"] = "SUBWAY";
  /** Above ground light rail. */

  VehicleType["TRAM"] = "TRAM";
  /** Monorail. */

  VehicleType["MONORAIL"] = "MONORAIL";
  /** Heavy rail. */

  VehicleType["HEAVY_RAIL"] = "HEAVY_RAIL";
  /** Commuter rail. */

  VehicleType["COMMUTER_TRAIN"] = "COMMUTER_TRAIN";
  /** High speed train. */

  VehicleType["HIGH_SPEED_TRAIN"] = "HIGH_SPEED_TRAIN";
  /** Bus. */

  VehicleType["BUS"] = "BUS";
  /** Intercity bus. */

  VehicleType["INTERCITY_BUS"] = "INTERCITY_BUS";
  /** Trolleybus. */

  VehicleType["TROLLEYBUS"] = "TROLLEYBUS";
  /** Share taxi is a kind of bus with the ability to drop off and pick up passengers anywhere on its route. */

  VehicleType["SHARE_TAXI"] = "SHARE_TAXI";
  /** Ferry. */

  VehicleType["FERRY"] = "FERRY";
  /** A vehicle that operates on a cable, usually on the ground. Aerial cable cars may be of the type `GONDOLA_LIFT`. */

  VehicleType["CABLE_CAR"] = "CABLE_CAR";
  /** An aerial cable car. */

  VehicleType["GONDOLA_LIFT"] = "GONDOLA_LIFT";
  /**
   * A vehicle that is pulled up a steep incline by a cable.
   * A Funicular typically consists of two cars, with each car acting as a counterweight for the other.
   */

  VehicleType["FUNICULAR"] = "FUNICULAR";
  /** All other vehicles will return this type. */

  VehicleType["OTHER"] = "OTHER";
})(VehicleType = exports.VehicleType || (exports.VehicleType = {}));

var GeocodingAddressComponentType;

(function (GeocodingAddressComponentType) {
  /** indicates the floor of a building address. */
  GeocodingAddressComponentType["floor"] = "floor";
  /** typically indicates a place that has not yet been categorized. */

  GeocodingAddressComponentType["establishment"] = "establishment";
  /** indicates a named point of interest. */

  GeocodingAddressComponentType["point_of_interest"] = "point_of_interest";
  /** indicates a parking lot or parking structure. */

  GeocodingAddressComponentType["parking"] = "parking";
  /** indicates a specific postal box. */

  GeocodingAddressComponentType["post_box"] = "post_box";
  /** indicates a grouping of geographic areas, such as locality and sublocality, used for mailing addresses in some countries. */

  GeocodingAddressComponentType["postal_town"] = "postal_town";
  /** indicates the room of a building address. */

  GeocodingAddressComponentType["room"] = "room";
  /** indicates the precise street number. */

  GeocodingAddressComponentType["street_number"] = "street_number";
  /**  indicate the location of a bus. */

  GeocodingAddressComponentType["bus_station"] = "bus_station";
  /**  indicate the location of a train. */

  GeocodingAddressComponentType["train_station"] = "train_station";
  /**  indicate the location of a public transit stop. */

  GeocodingAddressComponentType["transit_station"] = "transit_station";
})(GeocodingAddressComponentType = exports.GeocodingAddressComponentType || (exports.GeocodingAddressComponentType = {}));

var LocationType;

(function (LocationType) {
  /**
   * indicates that the returned result is a precise geocode for which we have location information
   * accurate down to street address precision
   */
  LocationType["ROOFTOP"] = "ROOFTOP";
  /**
   * indicates that the returned result reflects an approximation (usually on a road) interpolated between two precise points
   * (such as intersections). Interpolated results are generally returned when rooftop geocodes are unavailable for a street address.
   */

  LocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
  /**
   * indicates that the returned result is the geometric center of a result such as a polyline
   * (for example, a street) or polygon (region).
   */

  LocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
  /** indicates that the returned result is approximate. */

  LocationType["APPROXIMATE"] = "APPROXIMATE";
})(LocationType = exports.LocationType || (exports.LocationType = {}));

var RadioType;

(function (RadioType) {
  RadioType["lte"] = "lte";
  RadioType["gsm"] = "gsm";
  RadioType["cdma"] = "cdma";
  RadioType["wcdma"] = "wcdma";
})(RadioType = exports.RadioType || (exports.RadioType = {}));

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map