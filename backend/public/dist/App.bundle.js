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

Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["initMap"])(); // Setup places auto completion on origin and destination inputs.

Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["autocomplete"])(document.getElementById('orig') // document.getElementById('orig-id')
);
Object(_modules_map__WEBPACK_IMPORTED_MODULE_0__["autocomplete"])(document.getElementById('dest') // document.getElementById('dest-id')
);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocomplete", function() { return autocomplete; });
/* harmony import */ var _RouteBoxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

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
var waypoints = [];
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
  infoWindow = new google.maps.InfoWindow(); // Draw routes on the map

  if (orig && dest) drawRoutes();
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

function drawRoutes() {
  directionsService.route({
    origin: orig,
    destination: dest,
    waypoints: waypoints,
    travelMode: 'DRIVING'
  }, function (res, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(res);
      var route = res.routes[0]; // Don't box routes for route that is more than 300 km for budget purposes

      if (route.legs[0].distance.value > 300000) {
        window.alert("Sorry, it's too expensive to get places along route that is more than 300 km.");
        return;
      } // Only box routes for main route


      if (waypoints <= 0) {
        var path = route.overview_path;
        var distance = 0.5; // radius around route is 500 m

        routeBoxes = routeBoxer.box(path, distance); // drawBoxes(routeBoxes);
      }
    } else {
      console.log(status);
    }
  });
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
    addWaypoints(placeReq);
  });
}

function addWaypoints(place) {
  // Clear waypoints to make sure only 1 waypoint is selected
  if (waypoints.length > 0) waypoints = [];
  waypoints.push({
    location: place,
    stopover: true
  });
  drawRoutes();
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

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map