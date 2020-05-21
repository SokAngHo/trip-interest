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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ (Array(33).concat([
/* 33 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var firebase = _interopDefault(__webpack_require__(35));

var name = "firebase";
var version = "7.14.4";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

firebase.registerVersion(name, version, 'app');
module.exports = firebase;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var tslib = __webpack_require__(36);

var util = __webpack_require__(37);

var component = __webpack_require__(38);

var logger$1 = __webpack_require__(39);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;

var ERRORS = (_a = {}, _a["no-app"
/* NO_APP */
] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"
/* BAD_APP_NAME */
] = "Illegal App name: '{$appName}", _a["duplicate-app"
/* DUPLICATE_APP */
] = "Firebase App named '{$appName}' already exists", _a["app-deleted"
/* APP_DELETED */
] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"
/* INVALID_APP_ARGUMENT */
] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"
/* INVALID_LOG_ARGUMENT */
] = 'First argument to `onLog` must be null or a function.', _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);
var name$1 = "@firebase/app";
var version = "0.6.3";
var name$2 = "@firebase/analytics";
var name$3 = "@firebase/auth";
var name$4 = "@firebase/database";
var name$5 = "@firebase/functions";
var name$6 = "@firebase/installations";
var name$7 = "@firebase/messaging";
var name$8 = "@firebase/performance";
var name$9 = "@firebase/remote-config";
var name$a = "@firebase/storage";
var name$b = "@firebase/firestore";
var name$c = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a$1;

var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name$1] = 'fire-core', _a$1[name$2] = 'fire-analytics', _a$1[name$3] = 'fire-auth', _a$1[name$4] = 'fire-rtdb', _a$1[name$5] = 'fire-fn', _a$1[name$6] = 'fire-iid', _a$1[name$7] = 'fire-fcm', _a$1[name$8] = 'fire-perf', _a$1[name$9] = 'fire-rc', _a$1[name$a] = 'fire-gcs', _a$1[name$b] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$c] = 'fire-js-all', _a$1);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var logger = new logger$1.Logger('@firebase/app');
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */

var FirebaseAppImpl =
/** @class */
function () {
  function FirebaseAppImpl(options, config, firebase_) {
    var e_1, _a;

    var _this = this;

    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = util.deepCopy(options);
    this.container = new component.ComponentContainer(config.name); // add itself to container

    this._addComponent(new component.Component('app', function () {
      return _this;
    }, "PUBLIC"
    /* PUBLIC */
    ));

    try {
      // populate ComponentContainer with existing components
      for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var component$1 = _c.value;

        this._addComponent(component$1);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  }

  Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
    get: function get() {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function set(val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "name", {
    get: function get() {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "options", {
    get: function get() {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: true,
    configurable: true
  });

  FirebaseAppImpl.prototype["delete"] = function () {
    var _this = this;

    return new Promise(function (resolve) {
      _this.checkDestroyed_();

      resolve();
    }).then(function () {
      _this.firebase_.INTERNAL.removeApp(_this.name_);

      return Promise.all(_this.container.getProviders().map(function (provider) {
        return provider["delete"]();
      }));
    }).then(function () {
      _this.isDeleted_ = true;
    });
  };
  /**
   * Return a service instance associated with this app (creating it
   * on demand), identified by the passed instanceIdentifier.
   *
   * NOTE: Currently storage and functions are the only ones that are leveraging this
   * functionality. They invoke it by calling:
   *
   * ```javascript
   * firebase.app().storage('STORAGE BUCKET ID')
   * ```
   *
   * The service name is passed to this already
   * @internal
   */


  FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }

    this.checkDestroyed_(); // getImmediate will always succeed because _getService is only called for registered components.

    return this.container.getProvider(name).getImmediate({
      identifier: instanceIdentifier
    });
  };
  /**
   * Remove a service instance from the cache, so we will create a new instance for this service
   * when people try to get this service again.
   *
   * NOTE: currently only firestore is using this functionality to support firestore shutdown.
   *
   * @param name The service name
   * @param instanceIdentifier instance identifier in case multiple instances are allowed
   * @internal
   */


  FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    this.container.getProvider(name).clearInstance(instanceIdentifier);
  };
  /**
   * @param component the component being added to this app's container
   */


  FirebaseAppImpl.prototype._addComponent = function (component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };

  FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
    this.container.addOrOverwriteComponent(component);
  };
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */


  FirebaseAppImpl.prototype.checkDestroyed_ = function () {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted"
      /* APP_DELETED */
      , {
        appName: this.name_
      });
    }
  };

  return FirebaseAppImpl;
}(); // Prevent dead-code elimination of these methods w/o invalid property
// copying.


FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype["delete"] || console.log('dc');
var version$1 = "7.14.3";
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */

function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var components = new Map(); // A namespace is a plain JavaScript Object.

  var namespace = {
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeApp,
    // @ts-ignore
    app: app,
    registerVersion: registerVersion,
    setLogLevel: logger$1.setLogLevel,
    onLog: onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION: version$1,
    INTERNAL: {
      registerComponent: registerComponent,
      removeApp: removeApp,
      components: components,
      useAsService: useAsService
    }
  }; // Inject a circular default export to allow Babel users who were previously
  // using:
  //
  //   import firebase from 'firebase';
  //   which becomes: var firebase = require('firebase').default;
  //
  // instead of
  //
  //   import * as firebase from 'firebase';
  //   which becomes: var firebase = require('firebase');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  namespace['default'] = namespace; // firebase.apps is a read-only getter.

  Object.defineProperty(namespace, 'apps', {
    get: getApps
  });
  /**
   * Called by App.delete() - but before any services associated with the App
   * are deleted.
   */

  function removeApp(name) {
    delete apps[name];
  }
  /**
   * Get the App object for a given name (or DEFAULT).
   */


  function app(name) {
    name = name || DEFAULT_ENTRY_NAME;

    if (!util.contains(apps, name)) {
      throw ERROR_FACTORY.create("no-app"
      /* NO_APP */
      , {
        appName: name
      });
    }

    return apps[name];
  } // @ts-ignore


  app['App'] = firebaseAppImpl;

  function initializeApp(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }

    if (_typeof(rawConfig) !== 'object' || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = {
        name: name_1
      };
    }

    var config = rawConfig;

    if (config.name === undefined) {
      config.name = DEFAULT_ENTRY_NAME;
    }

    var name = config.name;

    if (typeof name !== 'string' || !name) {
      throw ERROR_FACTORY.create("bad-app-name"
      /* BAD_APP_NAME */
      , {
        appName: String(name)
      });
    }

    if (util.contains(apps, name)) {
      throw ERROR_FACTORY.create("duplicate-app"
      /* DUPLICATE_APP */
      , {
        appName: name
      });
    }

    var app = new firebaseAppImpl(options, config, namespace);
    apps[name] = app;
    return app;
  }
  /*
   * Return an array of all the non-deleted FirebaseApps.
   */


  function getApps() {
    // Make a copy so caller cannot mutate the apps list.
    return Object.keys(apps).map(function (name) {
      return apps[name];
    });
  }

  function registerComponent(component) {
    var e_1, _a;

    var componentName = component.name;

    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC"
      /* PUBLIC */
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentName] : null;
    }

    components.set(componentName, component); // create service namespace for public components

    if (component.type === "PUBLIC"
    /* PUBLIC */
    ) {
        // The Service namespace is an accessor function ...
        var serviceNamespace = function serviceNamespace(appArg) {
          if (appArg === void 0) {
            appArg = app();
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          if (typeof appArg[componentName] !== 'function') {
            // Invalid argument.
            // This happens in the following case: firebase.storage('gs:/')
            throw ERROR_FACTORY.create("invalid-app-argument"
            /* INVALID_APP_ARGUMENT */
            , {
              appName: componentName
            });
          } // Forward service instance lookup to the FirebaseApp.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          return appArg[componentName]();
        }; // ... and a container for service-level properties.


        if (component.serviceProps !== undefined) {
          util.deepExtend(serviceNamespace, component.serviceProps);
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any


        namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
        // option added to the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var serviceFxn = this._getService.bind(this, componentName);

          return serviceFxn.apply(this, component.multipleInstances ? args : []);
        };
      }

    try {
      // add the component to existing app instances
      for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var appName = _c.value;

        apps[appName]._addComponent(component);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return component.type === "PUBLIC"
    /* PUBLIC */
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace[componentName] : null;
  }

  function registerVersion(libraryKeyOrName, version, variant) {
    var _a; // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.


    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

    if (variant) {
      library += "-" + variant;
    }

    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);

    if (libraryMismatch || versionMismatch) {
      var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

      if (libraryMismatch) {
        warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
      }

      if (libraryMismatch && versionMismatch) {
        warning.push('and');
      }

      if (versionMismatch) {
        warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
      }

      logger.warn(warning.join(' '));
      return;
    }

    registerComponent(new component.Component(library + "-version", function () {
      return {
        library: library,
        version: version
      };
    }, "VERSION"
    /* VERSION */
    ));
  }

  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
      throw ERROR_FACTORY.create("invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
      , {
        appName: name
      });
    }

    logger$1.setUserLogHandler(logCallback, options);
  } // Map the requested service to a registered service name
  // (used to map auth to serverAuth service when needed).


  function useAsService(app, name) {
    if (name === 'serverAuth') {
      return null;
    }

    var useService = name;
    return useService;
  }

  return namespace;
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */


function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), {
    createFirebaseNamespace: createFirebaseNamespace,
    extendNamespace: extendNamespace,
    createSubscribe: util.createSubscribe,
    ErrorFactory: util.ErrorFactory,
    deepExtend: util.deepExtend
  });
  /**
   * Patch the top-level firebase namespace with additional properties.
   *
   * firebase.INTERNAL.extendNamespace()
   */

  function extendNamespace(props) {
    util.deepExtend(namespace, props);
  }

  return namespace;
}

var firebase = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PlatformLoggerService =
/** @class */
function () {
  function PlatformLoggerService(container) {
    this.container = container;
  } // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.


  PlatformLoggerService.prototype.getPlatformInfoString = function () {
    var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
    // version components.

    return providers.map(function (provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function (logString) {
      return logString;
    }).join(' ');
  };

  return PlatformLoggerService;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */


function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
  /* VERSION */
  ;
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerCoreComponents(firebase, variant) {
  firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"
  /* PRIVATE */
  )); // Register `app` package.

  firebase.registerVersion(name$1, version, variant); // Register platform SDK identifier (no version).

  firebase.registerVersion('fire-js', '');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any


if (util.isBrowser() && self.firebase !== undefined) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

  var sdkVersion = self.firebase.SDK_VERSION;

  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}

var initializeApp = firebase.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any

firebase.initializeApp = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  } // Environment check before initializing app
  // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
  // in @firebase/logger


  if (util.isNode()) {
    logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
  }

  return initializeApp.apply(undefined, args);
};

var firebase$1 = firebase;
registerCoreComponents(firebase$1);
exports["default"] = firebase$1;
exports.firebase = firebase$1;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return _assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};


function __rest(s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var tslib = __webpack_require__(36);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */


var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws an error if the provided assertion is falsy
 */

var assert = function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


var assertionError = function assertionError(message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var stringToByteArray = function stringToByteArray(str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


var byteArrayToString = function byteArrayToString(bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
      c = 0;

  while (pos < bytes.length) {
    var c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];

    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function encodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function decodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];

    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }

      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */

var base64Encode = function base64Encode(str) {
  var utf8Bytes = stringToByteArray(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


var base64Decode = function base64Decode(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Deferred =
/** @class */
function () {
  function Deferred() {
    var _this = this;

    this.reject = function () {};

    this.resolve = function () {};

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  Deferred.prototype.wrapCallback = function (callback) {
    var _this = this;

    return function (error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }

      if (typeof callback === 'function') {
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        _this.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1


        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };

  return Deferred;
}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/


function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */


function isBrowser() {
  return (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self.self === self;
}

function isBrowserExtension() {
  var runtime = (typeof chrome === "undefined" ? "undefined" : _typeof(chrome)) === 'object' ? chrome.runtime : (typeof browser === "undefined" ? "undefined" : _typeof(browser)) === 'object' ? browser.runtime : undefined;
  return _typeof(runtime) === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */


function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */


function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */


function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

var FirebaseError =
/** @class */
function (_super) {
  tslib.__extends(FirebaseError, _super);

  function FirebaseError(code, message) {
    var _this = _super.call(this, message) || this;

    _this.code = code;
    _this.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }

    return _this;
  }

  return FirebaseError;
}(Error);

var ErrorFactory =
/** @class */
function () {
  function ErrorFactory(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  ErrorFactory.prototype.create = function (code) {
    var data = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }

    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage); // Keys with an underscore at the end of their name are not included in
    // error.data for some reason.
    // TODO: Replace with Object.entries when lib is updated to es2017.

    for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
      var key = _b[_a];

      if (key.slice(-1) !== '_') {
        if (key in error) {
          console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
        }

        error[key] = customData[key];
      }
    }

    return error;
  };

  return ErrorFactory;
}();

function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? value.toString() : "<" + key + "?>";
  });
}

var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var decode = function decode(token) {
  var header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isValidTimestamp = function isValidTimestamp(token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
      validUntil = 0;

  if (_typeof(claims) === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }

    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }

  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var issuedAtTime = function issuedAtTime(token) {
  var claims = decode(token).claims;

  if (_typeof(claims) === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }

  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isValidFormat = function isValidFormat(token) {
  var decoded = decode(token),
      claims = decoded.claims;
  return !!claims && _typeof(claims) === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isAdmin = function isAdmin(token) {
  var claims = decode(token).claims;
  return _typeof(claims) === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  var res = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  var params = [];

  var _loop_1 = function _loop_1(key, value) {
    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
    var _b = _a[_i],
        key = _b[0],
        value = _b[1];

    _loop_1(key, value);
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */


function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var key = token.split('=');
      obj[key[0]] = key[1];
    }
  });
  return obj;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


var Sha1 =
/** @class */
function () {
  function Sha1() {
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  Sha1.prototype.reset = function () {
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  };
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */


  Sha1.prototype.compress_ = function (buf, offset) {
    if (!offset) {
      offset = 0;
    }

    var W = this.W_; // get 16 big endian words

    if (typeof buf === 'string') {
      for (var i = 0; i < 16; i++) {
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (var i = 0; i < 16; i++) {
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    } // expand to 80 words


    for (var i = 16; i < 80; i++) {
      var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 0xffffffff;
    }

    var a = this.chain_[0];
    var b = this.chain_[1];
    var c = this.chain_[2];
    var d = this.chain_[3];
    var e = this.chain_[4];
    var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

    for (var i = 0; i < 80; i++) {
      if (i < 40) {
        if (i < 20) {
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else {
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else {
        if (i < 60) {
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else {
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }

      var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = t;
    }

    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  };

  Sha1.prototype.update = function (bytes, length) {
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) {
      return;
    }

    if (length === undefined) {
      length = bytes.length;
    }

    var lengthMinusBlock = length - this.blockSize;
    var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

    var buf = this.buf_;
    var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

    while (n < length) {
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }

      if (typeof bytes === 'string') {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      }
    }

    this.inbuf_ = inbuf;
    this.total_ += length;
  };
  /** @override */


  Sha1.prototype.digest = function () {
    var digest = [];
    var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    } // Add # bits.


    for (var i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256; // Don't use bit-shifting here!
    }

    this.compress_(this.buf_);
    var n = 0;

    for (var i = 0; i < 5; i++) {
      for (var j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }

    return digest;
  };

  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */


function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */


var ObserverProxy =
/** @class */
function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this = this;

    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0; // Micro-task scheduling by calling task.then().

    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.

    this.task.then(function () {
      executor(_this);
    })["catch"](function (e) {
      _this.error(e);
    });
  }

  ObserverProxy.prototype.next = function (value) {
    this.forEachObserver(function (observer) {
      observer.next(value);
    });
  };

  ObserverProxy.prototype.error = function (error) {
    this.forEachObserver(function (observer) {
      observer.error(error);
    });
    this.close(error);
  };

  ObserverProxy.prototype.complete = function () {
    this.forEachObserver(function (observer) {
      observer.complete();
    });
    this.close();
  };
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */


  ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
    var _this = this;

    var observer;

    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    } // Assemble an Observer object when passed as callback functions.


    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error,
        complete: complete
      };
    }

    if (observer.next === undefined) {
      observer.next = noop;
    }

    if (observer.error === undefined) {
      observer.error = noop;
    }

    if (observer.complete === undefined) {
      observer.complete = noop;
    }

    var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.

    if (this.finalized) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {// nothing
        }

        return;
      });
    }

    this.observers.push(observer);
    return unsub;
  }; // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.


  ObserverProxy.prototype.unsubscribeOne = function (i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }

    delete this.observers[i];
    this.observerCount -= 1;

    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  };

  ObserverProxy.prototype.forEachObserver = function (fn) {
    if (this.finalized) {
      // Already closed by previous event....just eat the additional values.
      return;
    } // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.


    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }; // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.


  ObserverProxy.prototype.sendOne = function (i, fn) {
    var _this = this; // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      if (_this.observers !== undefined && _this.observers[i] !== undefined) {
        try {
          fn(_this.observers[i]);
        } catch (e) {
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  };

  ObserverProxy.prototype.close = function (err) {
    var _this = this;

    if (this.finalized) {
      return;
    }

    this.finalized = true;

    if (err !== undefined) {
      this.finalError = err;
    } // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      _this.observers = undefined;
      _this.onNoObservers = undefined;
    });
  };

  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */


function async(fn, onError) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    })["catch"](function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */


function implementsAnyMethods(obj, methods) {
  if (_typeof(obj) !== 'object' || obj === null) {
    return false;
  }

  for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
    var method = methods_1[_i];

    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }

  return false;
}

function noop() {} // do nothing

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */


var validateArgCount = function validateArgCount(fnName, minCount, maxCount, argCount) {
  var argError;

  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }

  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */


function errorPrefix(fnName, argumentNumber, optional) {
  var argName = '';

  switch (argumentNumber) {
    case 1:
      argName = optional ? 'first' : 'First';
      break;

    case 2:
      argName = optional ? 'second' : 'Second';
      break;

    case 3:
      argName = optional ? 'third' : 'Third';
      break;

    case 4:
      argName = optional ? 'fourth' : 'Fourth';
      break;

    default:
      throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
  }

  var error = fnName + ' failed: ';
  error += argName + ' argument ';
  return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */


function validateNamespace(fnName, argumentNumber, namespace, optional) {
  if (optional && !namespace) {
    return;
  }

  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
  }
}

function validateCallback(fnName, argumentNumber, callback, optional) {
  if (optional && !callback) {
    return;
  }

  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
  }
}

function validateContextObject(fnName, argumentNumber, context, optional) {
  if (optional && !context) {
    return;
  }

  if (_typeof(context) !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
  }
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


var stringToByteArray$1 = function stringToByteArray$1(str) {
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


var stringLength = function stringLength(str) {
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var tslib = __webpack_require__(36);

var util = __webpack_require__(37);
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */


var Component =
/** @class */
function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */

    this.serviceProps = {};
    this.instantiationMode = "LAZY"
    /* LAZY */
    ;
  }

  Component.prototype.setInstantiationMode = function (mode) {
    this.instantiationMode = mode;
    return this;
  };

  Component.prototype.setMultipleInstances = function (multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };

  Component.prototype.setServiceProps = function (props) {
    this.serviceProps = props;
    return this;
  };

  return Component;
}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */

var Provider =
/** @class */
function () {
  function Provider(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */


  Provider.prototype.get = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    } // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new util.Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred); // If the service instance is available, resolve the promise with it immediately

      try {
        var instance = this.getOrInitializeService(normalizedIdentifier);

        if (instance) {
          deferred.resolve(instance);
        }
      } catch (e) {// when the instance factory throws an exception during get(), it should not cause
        // a fatal error. We just return the unresolved promise in this case.
      }
    }

    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };

  Provider.prototype.getImmediate = function (options) {
    var _a = tslib.__assign({
      identifier: DEFAULT_ENTRY_NAME,
      optional: false
    }, options),
        identifier = _a.identifier,
        optional = _a.optional; // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    try {
      var instance = this.getOrInitializeService(normalizedIdentifier);

      if (!instance) {
        if (optional) {
          return null;
        }

        throw Error("Service " + this.name + " is not available");
      }

      return instance;
    } catch (e) {
      if (optional) {
        return null;
      } else {
        throw e;
      }
    }
  };

  Provider.prototype.getComponent = function () {
    return this.component;
  };

  Provider.prototype.setComponent = function (component) {
    var e_1, _a;

    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }

    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }

    this.component = component; // if the service is eager, initialize the default instance

    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService(DEFAULT_ENTRY_NAME);
      } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
      }
    }

    try {
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = tslib.__read(_c.value, 2),
            instanceIdentifier = _d[0],
            instanceDeferred = _d[1];

        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

        try {
          // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
          var instance = this.getOrInitializeService(normalizedIdentifier);
          instanceDeferred.resolve(instance);
        } catch (e) {// when the instance factory throws an exception, it should not cause
          // a fatal error. We just leave the promise unresolved.
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Provider.prototype.clearInstance = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    this.instancesDeferred["delete"](identifier);
    this.instances["delete"](identifier);
  }; // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?


  Provider.prototype["delete"] = function () {
    return tslib.__awaiter(this, void 0, void 0, function () {
      var services;
      return tslib.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4
            /*yield*/
            , Promise.all(services.filter(function (service) {
              return 'INTERNAL' in service;
            }) // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service.INTERNAL["delete"]();
            }))];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Provider.prototype.isComponentSet = function () {
    return this.component != null;
  };

  Provider.prototype.getOrInitializeService = function (identifier) {
    var instance = this.instances.get(identifier);

    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
      this.instances.set(identifier, instance);
    }

    return instance || null;
  };

  Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier; // assume multiple instances are supported before the component is provided.
    }
  };

  return Provider;
}(); // undefined should be passed to the service factory for the default instance


function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}

function isComponentEager(component) {
  return component.instantiationMode === "EAGER"
  /* EAGER */
  ;
}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */


var ComponentContainer =
/** @class */
function () {
  function ComponentContainer(name) {
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */


  ComponentContainer.prototype.addComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }

    provider.setComponent(component);
  };

  ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      // delete the existing provider from the container, so we can register the new component
      this.providers["delete"](component.name);
    }

    this.addComponent(component);
  };
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */


  ComponentContainer.prototype.getProvider = function (name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    } // create a Provider for a service that hasn't registered with Firebase


    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  };

  ComponentContainer.prototype.getProviders = function () {
    return Array.from(this.providers.values());
  };

  return ComponentContainer;
}();

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLogLevel", function() { return setLogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserLogHandler", function() { return setUserLogHandler; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;
/**
 * A container for all of the Logger instances
 */


var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function defaultLogHandler(instance, logType) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger =
/** @class */
function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function get() {
      return this._logLevel;
    },
    set: function set(val) {
      if (!(val in LogLevel)) {
        throw new TypeError('Invalid value assigned to `logLevel`');
      }

      this._logLevel = val;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function get() {
      return this._logHandler;
    },
    set: function set(val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(val) {
      this._userLogHandler = val;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */

  Logger.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };

  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };

  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };

  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };

  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };

  return Logger;
}();

function setLogLevel(level) {
  var newLevel = typeof level === 'string' ? levelStringToEnum[level] : level;
  instances.forEach(function (inst) {
    inst.logLevel = newLevel;
  });
}

function setUserLogHandler(logCallback, options) {
  var _loop_1 = function _loop_1(instance) {
    var customLogLevel = null;

    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }

    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');

        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };

  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];

    _loop_1(instance);
  }
}



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


(function () {
  /*
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  */
  var k,
      aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  };

  function ba(a) {
    a = ["object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global, a];

    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }

    return globalThis;
  }

  var ca = ba(this);

  function da(a, b) {
    if (b) {
      var c = ca;
      a = a.split(".");

      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }

      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && aa(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      });
    }
  }

  function ea(a) {
    var b = 0;
    return function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      };
    };
  }

  function fa(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: ea(a)
    };
  }

  da("Promise", function (a) {
    function b(g) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h = this.f();

      try {
        g(h.resolve, h.reject);
      } catch (m) {
        h.reject(m);
      }
    }

    function c() {
      this.a = null;
    }

    function d(g) {
      return g instanceof b ? g : new b(function (h) {
        h(g);
      });
    }

    if (a) return a;

    c.prototype.b = function (g) {
      if (null == this.a) {
        this.a = [];
        var h = this;
        this.c(function () {
          h.g();
        });
      }

      this.a.push(g);
    };

    var e = ca.setTimeout;

    c.prototype.c = function (g) {
      e(g, 0);
    };

    c.prototype.g = function () {
      for (; this.a && this.a.length;) {
        var g = this.a;
        this.a = [];

        for (var h = 0; h < g.length; ++h) {
          var m = g[h];
          g[h] = null;

          try {
            m();
          } catch (p) {
            this.f(p);
          }
        }
      }

      this.a = null;
    };

    c.prototype.f = function (g) {
      this.c(function () {
        throw g;
      });
    };

    b.prototype.f = function () {
      function g(p) {
        return function (v) {
          m || (m = !0, p.call(h, v));
        };
      }

      var h = this,
          m = !1;
      return {
        resolve: g(this.m),
        reject: g(this.g)
      };
    };

    b.prototype.m = function (g) {
      if (g === this) this.g(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof b) this.s(g);else {
        a: switch (_typeof(g)) {
          case "object":
            var h = null != g;
            break a;

          case "function":
            h = !0;
            break a;

          default:
            h = !1;
        }

        h ? this.u(g) : this.h(g);
      }
    };

    b.prototype.u = function (g) {
      var h = void 0;

      try {
        h = g.then;
      } catch (m) {
        this.g(m);
        return;
      }

      "function" == typeof h ? this.w(h, g) : this.h(g);
    };

    b.prototype.g = function (g) {
      this.i(2, g);
    };

    b.prototype.h = function (g) {
      this.i(1, g);
    };

    b.prototype.i = function (g, h) {
      if (0 != this.b) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
      this.b = g;
      this.c = h;
      this.l();
    };

    b.prototype.l = function () {
      if (null != this.a) {
        for (var g = 0; g < this.a.length; ++g) {
          f.b(this.a[g]);
        }

        this.a = null;
      }
    };

    var f = new c();

    b.prototype.s = function (g) {
      var h = this.f();
      g.Oa(h.resolve, h.reject);
    };

    b.prototype.w = function (g, h) {
      var m = this.f();

      try {
        g.call(h, m.resolve, m.reject);
      } catch (p) {
        m.reject(p);
      }
    };

    b.prototype.then = function (g, h) {
      function m(A, Q) {
        return "function" == typeof A ? function (xa) {
          try {
            p(A(xa));
          } catch (ud) {
            v(ud);
          }
        } : Q;
      }

      var p,
          v,
          C = new b(function (A, Q) {
        p = A;
        v = Q;
      });
      this.Oa(m(g, p), m(h, v));
      return C;
    };

    b.prototype["catch"] = function (g) {
      return this.then(void 0, g);
    };

    b.prototype.Oa = function (g, h) {
      function m() {
        switch (p.b) {
          case 1:
            g(p.c);
            break;

          case 2:
            h(p.c);
            break;

          default:
            throw Error("Unexpected state: " + p.b);
        }
      }

      var p = this;
      null == this.a ? f.b(m) : this.a.push(m);
    };

    b.resolve = d;

    b.reject = function (g) {
      return new b(function (h, m) {
        m(g);
      });
    };

    b.race = function (g) {
      return new b(function (h, m) {
        for (var p = fa(g), v = p.next(); !v.done; v = p.next()) {
          d(v.value).Oa(h, m);
        }
      });
    };

    b.all = function (g) {
      var h = fa(g),
          m = h.next();
      return m.done ? d([]) : new b(function (p, v) {
        function C(xa) {
          return function (ud) {
            A[xa] = ud;
            Q--;
            0 == Q && p(A);
          };
        }

        var A = [],
            Q = 0;

        do {
          A.push(void 0), Q++, d(m.value).Oa(C(A.length - 1), v), m = h.next();
        } while (!m.done);
      });
    };

    return b;
  });
  var ha = ha || {},
      l = this || self,
      ia = /^[\w+/_-]+[=]{0,2}$/,
      ja = null;

  function ka() {}

  function la(a) {
    var b = _typeof(a);

    if ("object" == b) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  }

  function ma(a) {
    var b = la(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  }

  function n(a) {
    return "function" == la(a);
  }

  function q(a) {
    var b = _typeof(a);

    return "object" == b && null != a || "function" == b;
  }

  function na(a) {
    return Object.prototype.hasOwnProperty.call(a, oa) && a[oa] || (a[oa] = ++pa);
  }

  var oa = "closure_uid_" + (1E9 * Math.random() >>> 0),
      pa = 0;

  function qa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }

  function ra(a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  }

  function r(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = qa : r = ra;
    return r.apply(null, arguments);
  }

  function sa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }

  var ta = Date.now || function () {
    return +new Date();
  };

  function t(a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.Za = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }

  ;
  /*
  Copyright 2017 Google Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  function u(a, b, c) {
    this.code = ua + a;
    this.message = b || va[a] || "";
    this.a = c || null;
  }

  t(u, Error);

  u.prototype.v = function () {
    var a = {
      code: this.code,
      message: this.message
    };
    this.a && (a.serverResponse = this.a);
    return a;
  };

  u.prototype.toJSON = function () {
    return this.v();
  };

  function wa(a) {
    var b = a && a.code;
    return b ? new u(b.substring(ua.length), a.message, a.serverResponse) : null;
  }

  var ua = "auth/",
      va = {
    "admin-restricted-operation": "This operation is restricted to administrators only.",
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
    "cordova-not-ready": "Cordova framework is not ready.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "invalid-provider-id": "The specified provider ID is invalid.",
    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
    "missing-continue-uri": "A continue URL must be provided in the request.",
    "missing-iframe-start": "An internal error has occurred.",
    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
    "missing-multi-factor-info": "No second factor identifier is provided.",
    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    "quota-exceeded": "The project's quota for this operation has been exceeded.",
    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
    "rejected-credential": "The request contains malformed or mismatching credentials.",
    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
    "unverified-email": "The operation requires a verified email.",
    "user-cancelled": "The user did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };
  var ya = {
    hd: {
      Ra: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
      Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
      Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
      id: "b"
    },
    pd: {
      Ra: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
      Xa: "https://securetoken.googleapis.com/v1/token",
      Ua: "https://identitytoolkit.googleapis.com/v2/",
      id: "p"
    },
    rd: {
      Ra: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
      Xa: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
      Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
      id: "s"
    },
    sd: {
      Ra: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
      Xa: "https://test-securetoken.sandbox.googleapis.com/v1/token",
      Ua: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
      id: "t"
    }
  };

  function za(a) {
    for (var b in ya) {
      if (ya[b].id === a) return a = ya[b], {
        firebaseEndpoint: a.Ra,
        secureTokenEndpoint: a.Xa,
        identityPlatformEndpoint: a.Ua
      };
    }

    return null;
  }

  var Aa;
  Aa = za("__EID__") ? "__EID__" : void 0;

  function Ba(a) {
    if (!a) return !1;

    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }

  ;

  function w(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, w);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }

  t(w, Error);
  w.prototype.name = "CustomError";

  function Ca(a, b) {
    a = a.split("%s");

    for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
      c += a[e] + (e < b.length ? b[e] : "%s");
    }

    w.call(this, c + a[d]);
  }

  t(Ca, w);
  Ca.prototype.name = "AssertionError";

  function Da(a, b) {
    throw new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }

  ;

  function Ea(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }

  Ea.prototype.get = function () {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else a = this.c();

    return a;
  };

  function Fa(a, b) {
    a.f(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b);
  }

  ;

  function Ga() {
    this.b = this.a = null;
  }

  var Ia = new Ea(function () {
    return new Ha();
  }, function (a) {
    a.reset();
  });

  Ga.prototype.add = function (a, b) {
    var c = Ia.get();
    c.set(a, b);
    this.b ? this.b.next = c : this.a = c;
    this.b = c;
  };

  function Ja() {
    var a = Ka,
        b = null;
    a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
    return b;
  }

  function Ha() {
    this.next = this.b = this.a = null;
  }

  Ha.prototype.set = function (a, b) {
    this.a = a;
    this.b = b;
    this.next = null;
  };

  Ha.prototype.reset = function () {
    this.next = this.b = this.a = null;
  };

  var La = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

    for (var c = 0; c < a.length; c++) {
      if (c in a && a[c] === b) return c;
    }

    return -1;
  },
      x = Array.prototype.forEach ? function (a, b, c) {
    Array.prototype.forEach.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) {
      f in e && b.call(c, e[f], f, a);
    }
  };

  function Ma(a, b) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
      d in c && b.call(void 0, c[d], d, a);
    }
  }

  var Na = Array.prototype.filter ? function (a, b) {
    return Array.prototype.filter.call(a, b, void 0);
  } : function (a, b) {
    for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) {
      if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    }

    return d;
  },
      Oa = Array.prototype.map ? function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  } : function (a, b) {
    for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) {
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    }

    return d;
  },
      Pa = Array.prototype.some ? function (a, b) {
    return Array.prototype.some.call(a, b, void 0);
  } : function (a, b) {
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    }

    return !1;
  };

  function Qa(a) {
    a: {
      var b = Ra;

      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) {
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      }

      b = -1;
    }

    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }

  function Sa(a, b) {
    return 0 <= La(a, b);
  }

  function Ta(a, b) {
    b = La(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }

  function Ua(a, b) {
    var c = 0;
    Ma(a, function (d, e) {
      b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++;
    });
  }

  function Va(a) {
    return Array.prototype.concat.apply([], arguments);
  }

  function Wa(a) {
    var b = a.length;

    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) {
        c[d] = a[d];
      }

      return c;
    }

    return [];
  }

  ;
  var Xa = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  },
      Ya = /&/g,
      Za = /</g,
      $a = />/g,
      ab = /"/g,
      bb = /'/g,
      cb = /\x00/g,
      db = /[\x00&<>"']/;

  function y(a, b) {
    return -1 != a.indexOf(b);
  }

  function eb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  ;
  var fb;

  a: {
    var gb = l.navigator;

    if (gb) {
      var hb = gb.userAgent;

      if (hb) {
        fb = hb;
        break a;
      }
    }

    fb = "";
  }

  function z(a) {
    return y(fb, a);
  }

  ;

  function ib(a, b) {
    for (var c in a) {
      b.call(void 0, a[c], c, a);
    }
  }

  function jb(a) {
    for (var b in a) {
      return !1;
    }

    return !0;
  }

  function kb(a) {
    var b = {},
        c;

    for (c in a) {
      b[c] = a[c];
    }

    return b;
  }

  var lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function B(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];

      for (c in d) {
        a[c] = d[c];
      }

      for (var f = 0; f < lb.length; f++) {
        c = lb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }
  }

  ;

  function mb(a, b) {
    a: {
      try {
        var c = a && a.ownerDocument,
            d = c && (c.defaultView || c.parentWindow);
        d = d || l;

        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g) {}

      e = null;
    }

    if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
      if (q(a)) try {
        var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
      } catch (g) {
        f = "<object could not be stringified>";
      } else f = void 0 === a ? "undefined" : null === a ? "null" : _typeof(a);
      Da("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
    }
  }

  ;

  function nb(a, b) {
    this.a = a === ob && b || "";
    this.b = pb;
  }

  nb.prototype.ra = !0;

  nb.prototype.qa = function () {
    return this.a;
  };

  nb.prototype.toString = function () {
    return "Const{" + this.a + "}";
  };

  function qb(a) {
    if (a instanceof nb && a.constructor === nb && a.b === pb) return a.a;
    Da("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  }

  var pb = {},
      ob = {},
      rb = new nb(ob, "");

  function sb(a, b) {
    this.a = a === tb && b || "";
    this.b = ub;
  }

  sb.prototype.ra = !0;

  sb.prototype.qa = function () {
    return this.a.toString();
  };

  sb.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.a + "}";
  };

  function vb(a) {
    if (a instanceof sb && a.constructor === sb && a.b === ub) return a.a;
    Da("expected object of type TrustedResourceUrl, got '" + a + "' of type " + la(a));
    return "type_error:TrustedResourceUrl";
  }

  function wb(a, b) {
    var c = qb(a);
    if (!xb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(yb, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
      d = b[e];
      return d instanceof nb ? qb(d) : encodeURIComponent(String(d));
    });
    return new sb(tb, a);
  }

  var yb = /%{(\w+)}/g,
      xb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
      ub = {},
      tb = {};

  function zb(a, b) {
    this.a = a === Ab && b || "";
    this.b = Bb;
  }

  zb.prototype.ra = !0;

  zb.prototype.qa = function () {
    return this.a.toString();
  };

  zb.prototype.toString = function () {
    return "SafeUrl{" + this.a + "}";
  };

  function Cb(a) {
    if (a instanceof zb && a.constructor === zb && a.b === Bb) return a.a;
    Da("expected object of type SafeUrl, got '" + a + "' of type " + la(a));
    return "type_error:SafeUrl";
  }

  var Db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function Eb(a) {
    if (a instanceof zb) return a;
    a = "object" == _typeof(a) && a.ra ? a.qa() : String(a);
    Db.test(a) || (a = "about:invalid#zClosurez");
    return new zb(Ab, a);
  }

  var Bb = {},
      Ab = {};

  function Fb() {
    this.a = "";
    this.b = Gb;
  }

  Fb.prototype.ra = !0;

  Fb.prototype.qa = function () {
    return this.a.toString();
  };

  Fb.prototype.toString = function () {
    return "SafeHtml{" + this.a + "}";
  };

  function Hb(a) {
    if (a instanceof Fb && a.constructor === Fb && a.b === Gb) return a.a;
    Da("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
    return "type_error:SafeHtml";
  }

  var Gb = {};

  function Ib(a) {
    var b = new Fb();
    b.a = a;
    return b;
  }

  Ib("<!DOCTYPE html>");
  var Jb = Ib("");
  Ib("<br>");

  function Kb(a) {
    var b = new sb(tb, qb(rb));
    mb(a, "HTMLIFrameElement");
    a.src = vb(b).toString();
  }

  function Lb(a, b) {
    mb(a, "HTMLScriptElement");
    a.src = vb(b);
    if (null === ja) b: {
      b = l.document;

      if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ia.test(b)) {
        ja = b;
        break b;
      }

      ja = "";
    }
    b = ja;
    b && a.setAttribute("nonce", b);
  }

  ;

  function Mb(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
      d += c.shift() + e.shift();
    }

    return d + c.join("%s");
  }

  function Nb(a) {
    db.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Za, "&lt;")), -1 != a.indexOf(">") && (a = a.replace($a, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(ab, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(bb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(cb, "&#0;")));
    return a;
  }

  ;

  function Ob(a) {
    Ob[" "](a);
    return a;
  }

  Ob[" "] = ka;

  function Pb(a, b) {
    var c = Qb;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  }

  ;
  var Rb = z("Opera"),
      Sb = z("Trident") || z("MSIE"),
      Tb = z("Edge"),
      Ub = Tb || Sb,
      Vb = z("Gecko") && !(y(fb.toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
      Wb = y(fb.toLowerCase(), "webkit") && !z("Edge");

  function Xb() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }

  var Yb;

  a: {
    var Zb = "",
        $b = function () {
      var a = fb;
      if (Vb) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (Tb) return /Edge\/([\d\.]+)/.exec(a);
      if (Sb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (Wb) return /WebKit\/(\S+)/.exec(a);
      if (Rb) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();

    $b && (Zb = $b ? $b[1] : "");

    if (Sb) {
      var ac = Xb();

      if (null != ac && ac > parseFloat(Zb)) {
        Yb = String(ac);
        break a;
      }
    }

    Yb = Zb;
  }

  var Qb = {};

  function bc(a) {
    return Pb(a, function () {
      for (var b = 0, c = Xa(String(Yb)).split("."), d = Xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
            h = d[f] || "";

        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b = eb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || eb(0 == g[2].length, 0 == h[2].length) || eb(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }

      return 0 <= b;
    });
  }

  var cc;
  cc = l.document && Sb ? Xb() : void 0;

  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {}

  var dc = !Sb || 9 <= Number(cc);

  function ec(a) {
    var b = document;
    return "string" === typeof a ? b.getElementById(a) : a;
  }

  function fc(a, b) {
    ib(b, function (c, d) {
      c && "object" == _typeof(c) && c.ra && (c = c.qa());
      "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : gc.hasOwnProperty(d) ? a.setAttribute(gc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
    });
  }

  var gc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  function hc(a, b, c) {
    var d = arguments,
        e = document,
        f = String(d[0]),
        g = d[1];

    if (!dc && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', Nb(g.name), '"');

      if (g.type) {
        f.push(' type="', Nb(g.type), '"');
        var h = {};
        B(h, g);
        delete h.type;
        g = h;
      }

      f.push(">");
      f = f.join("");
    }

    f = ic(e, f);
    g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : fc(f, g));
    2 < d.length && jc(e, f, d);
    return f;
  }

  function jc(a, b, c) {
    function d(g) {
      g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g);
    }

    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !ma(f) || q(f) && 0 < f.nodeType ? d(f) : x(kc(f) ? Wa(f) : f, d);
    }
  }

  function ic(a, b) {
    b = String(b);
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
    return a.createElement(b);
  }

  function kc(a) {
    if (a && "number" == typeof a.length) {
      if (q(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (n(a)) return "function" == typeof a.item;
    }

    return !1;
  }

  ;

  function lc(a) {
    l.setTimeout(function () {
      throw a;
    }, 0);
  }

  var mc;

  function nc() {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function a() {
      var e = ic(document, "IFRAME");
      e.style.display = "none";
      Kb(e);
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(Hb(Jb));
      e.close();
      var g = "callImmediate" + Math.random(),
          h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = r(function (m) {
        if (("*" == h || m.origin == h) && m.data == g) this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function postMessage() {
          f.postMessage(g, h);
        }
      };
    });

    if ("undefined" !== typeof a && !z("Trident") && !z("MSIE")) {
      var b = new a(),
          c = {},
          d = c;

      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.Db;
          c.Db = null;
          e();
        }
      };

      return function (e) {
        d.next = {
          Db: e
        };
        d = d.next;
        b.port2.postMessage(0);
      };
    }

    return function (e) {
      l.setTimeout(e, 0);
    };
  }

  ;

  function oc(a, b) {
    pc || qc();
    rc || (pc(), rc = !0);
    Ka.add(a, b);
  }

  var pc;

  function qc() {
    if (l.Promise && l.Promise.resolve) {
      var a = l.Promise.resolve(void 0);

      pc = function pc() {
        a.then(sc);
      };
    } else pc = function pc() {
      var b = sc;
      !n(l.setImmediate) || l.Window && l.Window.prototype && !z("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (mc || (mc = nc()), mc(b)) : l.setImmediate(b);
    };
  }

  var rc = !1,
      Ka = new Ga();

  function sc() {
    for (var a; a = Ja();) {
      try {
        a.a.call(a.b);
      } catch (b) {
        lc(b);
      }

      Fa(Ia, a);
    }

    rc = !1;
  }

  ;

  function D(a, b) {
    this.a = tc;
    this.i = void 0;
    this.f = this.b = this.c = null;
    this.g = this.h = !1;
    if (a != ka) try {
      var c = this;
      a.call(b, function (d) {
        uc(c, vc, d);
      }, function (d) {
        if (!(d instanceof wc)) try {
          if (d instanceof Error) throw d;
          throw Error("Promise rejected.");
        } catch (e) {}
        uc(c, xc, d);
      });
    } catch (d) {
      uc(this, xc, d);
    }
  }

  var tc = 0,
      vc = 2,
      xc = 3;

  function yc() {
    this.next = this.f = this.b = this.g = this.a = null;
    this.c = !1;
  }

  yc.prototype.reset = function () {
    this.f = this.b = this.g = this.a = null;
    this.c = !1;
  };

  var zc = new Ea(function () {
    return new yc();
  }, function (a) {
    a.reset();
  });

  function Ac(a, b, c) {
    var d = zc.get();
    d.g = a;
    d.b = b;
    d.f = c;
    return d;
  }

  function E(a) {
    if (a instanceof D) return a;
    var b = new D(ka);
    uc(b, vc, a);
    return b;
  }

  function F(a) {
    return new D(function (b, c) {
      c(a);
    });
  }

  function Bc(a, b, c) {
    Cc(a, b, c, null) || oc(sa(b, a));
  }

  function Dc(a) {
    return new D(function (b, c) {
      var d = a.length,
          e = [];
      if (d) for (var f = function f(p, v) {
        d--;
        e[p] = v;
        0 == d && b(e);
      }, g = function g(p) {
        c(p);
      }, h = 0, m; h < a.length; h++) {
        m = a[h], Bc(m, sa(f, h), g);
      } else b(e);
    });
  }

  function Ec(a) {
    return new D(function (b) {
      var c = a.length,
          d = [];
      if (c) for (var e = function e(h, m, p) {
        c--;
        d[h] = m ? {
          Mb: !0,
          value: p
        } : {
          Mb: !1,
          reason: p
        };
        0 == c && b(d);
      }, f = 0, g; f < a.length; f++) {
        g = a[f], Bc(g, sa(e, f, !0), sa(e, f, !1));
      } else b(d);
    });
  }

  D.prototype.then = function (a, b, c) {
    return Fc(this, n(a) ? a : null, n(b) ? b : null, c);
  };

  D.prototype.$goog_Thenable = !0;
  k = D.prototype;

  k.ma = function (a, b) {
    a = Ac(a, a, b);
    a.c = !0;
    Gc(this, a);
    return this;
  };

  k.o = function (a, b) {
    return Fc(this, null, a, b);
  };

  k.cancel = function (a) {
    if (this.a == tc) {
      var b = new wc(a);
      oc(function () {
        Hc(this, b);
      }, this);
    }
  };

  function Hc(a, b) {
    if (a.a == tc) if (a.c) {
      var c = a.c;

      if (c.b) {
        for (var d = 0, e = null, f = null, g = c.b; g && (g.c || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) {
          e || (f = g);
        }

        e && (c.a == tc && 1 == d ? Hc(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : Ic(c), Jc(c, e, xc, b)));
      }

      a.c = null;
    } else uc(a, xc, b);
  }

  function Gc(a, b) {
    a.b || a.a != vc && a.a != xc || Kc(a);
    a.f ? a.f.next = b : a.b = b;
    a.f = b;
  }

  function Fc(a, b, c, d) {
    var e = Ac(null, null, null);
    e.a = new D(function (f, g) {
      e.g = b ? function (h) {
        try {
          var m = b.call(d, h);
          f(m);
        } catch (p) {
          g(p);
        }
      } : f;
      e.b = c ? function (h) {
        try {
          var m = c.call(d, h);
          void 0 === m && h instanceof wc ? g(h) : f(m);
        } catch (p) {
          g(p);
        }
      } : g;
    });
    e.a.c = a;
    Gc(a, e);
    return e.a;
  }

  k.Yc = function (a) {
    this.a = tc;
    uc(this, vc, a);
  };

  k.Zc = function (a) {
    this.a = tc;
    uc(this, xc, a);
  };

  function uc(a, b, c) {
    a.a == tc && (a === c && (b = xc, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Cc(c, a.Yc, a.Zc, a) || (a.i = c, a.a = b, a.c = null, Kc(a), b != xc || c instanceof wc || Lc(a, c)));
  }

  function Cc(a, b, c, d) {
    if (a instanceof D) return Gc(a, Ac(b || ka, c || null, d)), !0;
    if (Ba(a)) return a.then(b, c, d), !0;
    if (q(a)) try {
      var e = a.then;
      if (n(e)) return Mc(a, e, b, c, d), !0;
    } catch (f) {
      return c.call(d, f), !0;
    }
    return !1;
  }

  function Mc(a, b, c, d, e) {
    function f(m) {
      h || (h = !0, d.call(e, m));
    }

    function g(m) {
      h || (h = !0, c.call(e, m));
    }

    var h = !1;

    try {
      b.call(a, g, f);
    } catch (m) {
      f(m);
    }
  }

  function Kc(a) {
    a.h || (a.h = !0, oc(a.ec, a));
  }

  function Ic(a) {
    var b = null;
    a.b && (b = a.b, a.b = b.next, b.next = null);
    a.b || (a.f = null);
    return b;
  }

  k.ec = function () {
    for (var a; a = Ic(this);) {
      Jc(this, a, this.a, this.i);
    }

    this.h = !1;
  };

  function Jc(a, b, c, d) {
    if (c == xc && b.b && !b.c) for (; a && a.g; a = a.c) {
      a.g = !1;
    }
    if (b.a) b.a.c = null, Nc(b, c, d);else try {
      b.c ? b.g.call(b.f) : Nc(b, c, d);
    } catch (e) {
      Oc.call(null, e);
    }
    Fa(zc, b);
  }

  function Nc(a, b, c) {
    b == vc ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
  }

  function Lc(a, b) {
    a.g = !0;
    oc(function () {
      a.g && Oc.call(null, b);
    });
  }

  var Oc = lc;

  function wc(a) {
    w.call(this, a);
  }

  t(wc, w);
  wc.prototype.name = "cancel";

  function Pc() {
    0 != Qc && (Rc[na(this)] = this);
    this.wa = this.wa;
    this.na = this.na;
  }

  var Qc = 0,
      Rc = {};
  Pc.prototype.wa = !1;

  function Sc(a) {
    if (!a.wa && (a.wa = !0, a.Ba(), 0 != Qc)) {
      var b = na(a);
      if (0 != Qc && a.na && 0 < a.na.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
      delete Rc[b];
    }
  }

  Pc.prototype.Ba = function () {
    if (this.na) for (; this.na.length;) {
      this.na.shift()();
    }
  };

  var Tc = Object.freeze || function (a) {
    return a;
  };

  var Uc = !Sb || 9 <= Number(cc),
      Vc = Sb && !bc("9"),
      Wc = function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
        b = Object.defineProperty({}, "passive", {
      get: function get() {
        a = !0;
      }
    });

    try {
      l.addEventListener("test", ka, b), l.removeEventListener("test", ka, b);
    } catch (c) {}

    return a;
  }();

  function Xc(a, b) {
    this.type = a;
    this.b = this.target = b;
    this.defaultPrevented = !1;
  }

  Xc.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };

  function Yc(a, b) {
    Xc.call(this, a ? a.type : "");
    this.relatedTarget = this.b = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;

    if (a) {
      var c = this.type = a.type,
          d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.b = b;

      if (b = a.relatedTarget) {
        if (Vb) {
          a: {
            try {
              Ob(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}

            e = !1;
          }

          e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Zc[a.pointerType] || "";
      this.a = a;
      a.defaultPrevented && this.preventDefault();
    }
  }

  t(Yc, Xc);
  var Zc = Tc({
    2: "touch",
    3: "pen",
    4: "mouse"
  });

  Yc.prototype.preventDefault = function () {
    Yc.Za.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Vc) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (b) {}
  };

  Yc.prototype.f = function () {
    return this.a;
  };

  var $c = "closure_listenable_" + (1E6 * Math.random() | 0),
      ad = 0;

  function bd(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Ta = e;
    this.key = ++ad;
    this.ua = this.Na = !1;
  }

  function cd(a) {
    a.ua = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Ta = null;
  }

  ;

  function dd(a) {
    this.src = a;
    this.a = {};
    this.b = 0;
  }

  dd.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = ed(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.Na = !1)) : (b = new bd(b, this.src, f, !!d, e), b.Na = c, a.push(b));
    return b;
  };

  function fd(a, b) {
    var c = b.type;
    c in a.a && Ta(a.a[c], b) && (cd(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }

  function ed(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.ua && f.listener == b && f.capture == !!c && f.Ta == d) return e;
    }

    return -1;
  }

  ;
  var gd = "closure_lm_" + (1E6 * Math.random() | 0),
      hd = {},
      id = 0;

  function jd(a, b, c, d, e) {
    if (d && d.once) kd(a, b, c, d, e);else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
      jd(a, b[f], c, d, e);
    } else c = ld(c), a && a[$c] ? md(a, b, c, q(d) ? !!d.capture : !!d, e) : nd(a, b, c, !1, d, e);
  }

  function nd(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = q(e) ? !!e.capture : !!e,
        h = od(a);
    h || (a[gd] = h = new dd(a));
    c = h.add(b, c, d, g, f);

    if (!c.proxy) {
      d = pd();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Wc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(qd(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      id++;
    }
  }

  function pd() {
    var a = rd,
        b = Uc ? function (c) {
      return a.call(b.src, b.listener, c);
    } : function (c) {
      c = a.call(b.src, b.listener, c);
      if (!c) return c;
    };
    return b;
  }

  function kd(a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
      kd(a, b[f], c, d, e);
    } else c = ld(c), a && a[$c] ? sd(a, b, c, q(d) ? !!d.capture : !!d, e) : nd(a, b, c, !0, d, e);
  }

  function td(a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) {
      td(a, b[f], c, d, e);
    } else (d = q(d) ? !!d.capture : !!d, c = ld(c), a && a[$c]) ? (a = a.u, b = String(b).toString(), b in a.a && (f = a.a[b], c = ed(f, c, d, e), -1 < c && (cd(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = od(a)) && (b = a.a[b.toString()], a = -1, b && (a = ed(b, c, d, e)), (c = -1 < a ? b[a] : null) && vd(c));
  }

  function vd(a) {
    if ("number" !== typeof a && a && !a.ua) {
      var b = a.src;
      if (b && b[$c]) fd(b.u, a);else {
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(qd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        id--;
        (c = od(b)) ? (fd(c, a), 0 == c.b && (c.src = null, b[gd] = null)) : cd(a);
      }
    }
  }

  function qd(a) {
    return a in hd ? hd[a] : hd[a] = "on" + a;
  }

  function wd(a, b, c, d) {
    var e = !0;
    if (a = od(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
      var f = b[a];
      f && f.capture == c && !f.ua && (f = xd(f, d), e = e && !1 !== f);
    }
    return e;
  }

  function xd(a, b) {
    var c = a.listener,
        d = a.Ta || a.src;
    a.Na && vd(a);
    return c.call(d, b);
  }

  function rd(a, b) {
    if (a.ua) return !0;

    if (!Uc) {
      if (!b) a: {
        b = ["window", "event"];

        for (var c = l, d = 0; d < b.length; d++) {
          if (c = c[b[d]], null == c) {
            b = null;
            break a;
          }
        }

        b = c;
      }
      d = b;
      b = new Yc(d, this);
      c = !0;

      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode) try {
            d.keyCode = -1;
            break a;
          } catch (g) {
            e = !0;
          }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }

        d = [];

        for (e = b.b; e; e = e.parentNode) {
          d.push(e);
        }

        a = a.type;

        for (e = d.length - 1; 0 <= e; e--) {
          b.b = d[e];
          var f = wd(d[e], a, !0, b);
          c = c && f;
        }

        for (e = 0; e < d.length; e++) {
          b.b = d[e], f = wd(d[e], a, !1, b), c = c && f;
        }
      }

      return c;
    }

    return xd(a, new Yc(b, this));
  }

  function od(a) {
    a = a[gd];
    return a instanceof dd ? a : null;
  }

  var yd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function ld(a) {
    if (n(a)) return a;
    a[yd] || (a[yd] = function (b) {
      return a.handleEvent(b);
    });
    return a[yd];
  }

  ;

  function G() {
    Pc.call(this);
    this.u = new dd(this);
    this.Yb = this;
    this.eb = null;
  }

  t(G, Pc);
  G.prototype[$c] = !0;

  G.prototype.addEventListener = function (a, b, c, d) {
    jd(this, a, b, c, d);
  };

  G.prototype.removeEventListener = function (a, b, c, d) {
    td(this, a, b, c, d);
  };

  G.prototype.dispatchEvent = function (a) {
    var b,
        c = this.eb;
    if (c) for (b = []; c; c = c.eb) {
      b.push(c);
    }
    c = this.Yb;
    var d = a.type || a;
    if ("string" === typeof a) a = new Xc(a, c);else if (a instanceof Xc) a.target = a.target || c;else {
      var e = a;
      a = new Xc(d, c);
      B(a, e);
    }
    e = !0;
    if (b) for (var f = b.length - 1; 0 <= f; f--) {
      var g = a.b = b[f];
      e = zd(g, d, !0, a) && e;
    }
    g = a.b = c;
    e = zd(g, d, !0, a) && e;
    e = zd(g, d, !1, a) && e;
    if (b) for (f = 0; f < b.length; f++) {
      g = a.b = b[f], e = zd(g, d, !1, a) && e;
    }
    return e;
  };

  G.prototype.Ba = function () {
    G.Za.Ba.call(this);

    if (this.u) {
      var a = this.u,
          b = 0,
          c;

      for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++) {
          ++b, cd(d[e]);
        }

        delete a.a[c];
        a.b--;
      }
    }

    this.eb = null;
  };

  function md(a, b, c, d, e) {
    a.u.add(String(b), c, !1, d, e);
  }

  function sd(a, b, c, d, e) {
    a.u.add(String(b), c, !0, d, e);
  }

  function zd(a, b, c, d) {
    b = a.u.a[String(b)];
    if (!b) return !0;
    b = b.concat();

    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];

      if (g && !g.ua && g.capture == c) {
        var h = g.listener,
            m = g.Ta || g.src;
        g.Na && fd(a.u, g);
        e = !1 !== h.call(m, d) && e;
      }
    }

    return e && !d.defaultPrevented;
  }

  ;

  function Ad(a, b, c) {
    if (n(a)) c && (a = r(a, c));else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  }

  function Bd(a) {
    var b = null;
    return new D(function (c, d) {
      b = Ad(function () {
        c(void 0);
      }, a);
      -1 == b && d(Error("Failed to schedule timer."));
    }).o(function (c) {
      l.clearTimeout(b);
      throw c;
    });
  }

  ;

  function Cd(a) {
    if (a.V && "function" == typeof a.V) return a.V();
    if ("string" === typeof a) return a.split("");

    if (ma(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) {
        b.push(a[d]);
      }

      return b;
    }

    b = [];
    c = 0;

    for (d in a) {
      b[c++] = a[d];
    }

    return b;
  }

  function Dd(a) {
    if (a.X && "function" == typeof a.X) return a.X();

    if (!a.V || "function" != typeof a.V) {
      if (ma(a) || "string" === typeof a) {
        var b = [];
        a = a.length;

        for (var c = 0; c < a; c++) {
          b.push(c);
        }

        return b;
      }

      b = [];
      c = 0;

      for (var d in a) {
        b[c++] = d;
      }

      return b;
    }
  }

  function Ed(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ma(a) || "string" === typeof a) x(a, b, void 0);else for (var c = Dd(a), d = Cd(a), e = d.length, f = 0; f < e; f++) {
      b.call(void 0, d[f], c && c[f], a);
    }
  }

  ;

  function Fd(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;

    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");

      for (var d = 0; d < c; d += 2) {
        this.set(arguments[d], arguments[d + 1]);
      }
    } else if (a) if (a instanceof Fd) for (c = a.X(), d = 0; d < c.length; d++) {
      this.set(c[d], a.get(c[d]));
    } else for (d in a) {
      this.set(d, a[d]);
    }
  }

  k = Fd.prototype;

  k.V = function () {
    Gd(this);

    for (var a = [], b = 0; b < this.a.length; b++) {
      a.push(this.b[this.a[b]]);
    }

    return a;
  };

  k.X = function () {
    Gd(this);
    return this.a.concat();
  };

  k.clear = function () {
    this.b = {};
    this.c = this.a.length = 0;
  };

  function Gd(a) {
    if (a.c != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        Hd(a.b, d) && (a.a[c++] = d);
        b++;
      }

      a.a.length = c;
    }

    if (a.c != a.a.length) {
      var e = {};

      for (c = b = 0; b < a.a.length;) {
        d = a.a[b], Hd(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      }

      a.a.length = c;
    }
  }

  k.get = function (a, b) {
    return Hd(this.b, a) ? this.b[a] : b;
  };

  k.set = function (a, b) {
    Hd(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
  };

  k.forEach = function (a, b) {
    for (var c = this.X(), d = 0; d < c.length; d++) {
      var e = c[d],
          f = this.get(e);
      a.call(b, f, e, this);
    }
  };

  function Hd(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  ;
  var Id = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

  function Jd(a, b) {
    if (a) {
      a = a.split("&");

      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
            e = null;

        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];

        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }

  ;

  function Kd(a, b) {
    this.b = this.i = this.f = "";
    this.l = null;
    this.g = this.c = "";
    this.h = !1;
    var c;
    a instanceof Kd ? (this.h = void 0 !== b ? b : a.h, Ld(this, a.f), this.i = a.i, this.b = a.b, Md(this, a.l), this.c = a.c, Nd(this, Od(a.a)), this.g = a.g) : a && (c = String(a).match(Id)) ? (this.h = !!b, Ld(this, c[1] || "", !0), this.i = Pd(c[2] || ""), this.b = Pd(c[3] || "", !0), Md(this, c[4]), this.c = Pd(c[5] || "", !0), Nd(this, c[6] || "", !0), this.g = Pd(c[7] || "")) : (this.h = !!b, this.a = new Qd(null, this.h));
  }

  Kd.prototype.toString = function () {
    var a = [],
        b = this.f;
    b && a.push(Rd(b, Sd, !0), ":");
    var c = this.b;
    if (c || "file" == b) a.push("//"), (b = this.i) && a.push(Rd(b, Sd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
    if (c = this.c) this.b && "/" != c.charAt(0) && a.push("/"), a.push(Rd(c, "/" == c.charAt(0) ? Td : Ud, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", Rd(c, Vd));
    return a.join("");
  };

  Kd.prototype.resolve = function (a) {
    var b = new Kd(this),
        c = !!a.f;
    c ? Ld(b, a.f) : c = !!a.i;
    c ? b.i = a.i : c = !!a.b;
    c ? b.b = a.b : c = null != a.l;
    var d = a.c;
    if (c) Md(b, a.l);else if (c = !!a.c) {
      if ("/" != d.charAt(0)) if (this.b && !this.c) d = "/" + d;else {
        var e = b.c.lastIndexOf("/");
        -1 != e && (d = b.c.substr(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (y(e, "./") || y(e, "/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");

        for (var f = [], g = 0; g < e.length;) {
          var h = e[g++];
          "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0);
        }

        d = f.join("/");
      } else d = e;
    }
    c ? b.c = d : c = "" !== a.a.toString();
    c ? Nd(b, Od(a.a)) : c = !!a.g;
    c && (b.g = a.g);
    return b;
  };

  function Ld(a, b, c) {
    a.f = c ? Pd(b, !0) : b;
    a.f && (a.f = a.f.replace(/:$/, ""));
  }

  function Md(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.l = b;
    } else a.l = null;
  }

  function Nd(a, b, c) {
    b instanceof Qd ? (a.a = b, Wd(a.a, a.h)) : (c || (b = Rd(b, Xd)), a.a = new Qd(b, a.h));
  }

  function H(a, b, c) {
    a.a.set(b, c);
  }

  function Yd(a, b) {
    return a.a.get(b);
  }

  function Zd(a) {
    return a instanceof Kd ? new Kd(a) : new Kd(a, void 0);
  }

  function $d(a, b) {
    var c = new Kd(null, void 0);
    Ld(c, "https");
    a && (c.b = a);
    b && (c.c = b);
    return c;
  }

  function Pd(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }

  function Rd(a, b, c) {
    return "string" === typeof a ? (a = encodeURI(a).replace(b, ae), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }

  function ae(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }

  var Sd = /[#\/\?@]/g,
      Ud = /[#\?:]/g,
      Td = /[#\?]/g,
      Xd = /[#\?@]/g,
      Vd = /#/g;

  function Qd(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b;
  }

  function be(a) {
    a.a || (a.a = new Fd(), a.b = 0, a.c && Jd(a.c, function (b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }

  function ce(a) {
    var b = Dd(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new Qd(null, void 0);
    a = Cd(a);

    for (var d = 0; d < b.length; d++) {
      var e = b[d],
          f = a[d];
      Array.isArray(f) ? de(c, e, f) : c.add(e, f);
    }

    return c;
  }

  k = Qd.prototype;

  k.add = function (a, b) {
    be(this);
    this.c = null;
    a = ee(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b += 1;
    return this;
  };

  function fe(a, b) {
    be(a);
    b = ee(a, b);
    Hd(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Hd(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Gd(a)));
  }

  k.clear = function () {
    this.a = this.c = null;
    this.b = 0;
  };

  function ge(a, b) {
    be(a);
    b = ee(a, b);
    return Hd(a.a.b, b);
  }

  k.forEach = function (a, b) {
    be(this);
    this.a.forEach(function (c, d) {
      x(c, function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };

  k.X = function () {
    be(this);

    for (var a = this.a.V(), b = this.a.X(), c = [], d = 0; d < b.length; d++) {
      for (var e = a[d], f = 0; f < e.length; f++) {
        c.push(b[d]);
      }
    }

    return c;
  };

  k.V = function (a) {
    be(this);
    var b = [];
    if ("string" === typeof a) ge(this, a) && (b = Va(b, this.a.get(ee(this, a))));else {
      a = this.a.V();

      for (var c = 0; c < a.length; c++) {
        b = Va(b, a[c]);
      }
    }
    return b;
  };

  k.set = function (a, b) {
    be(this);
    this.c = null;
    a = ee(this, a);
    ge(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this;
  };

  k.get = function (a, b) {
    if (!a) return b;
    a = this.V(a);
    return 0 < a.length ? String(a[0]) : b;
  };

  function de(a, b, c) {
    fe(a, b);
    0 < c.length && (a.c = null, a.a.set(ee(a, b), Wa(c)), a.b += c.length);
  }

  k.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";

    for (var a = [], b = this.a.X(), c = 0; c < b.length; c++) {
      var d = b[c],
          e = encodeURIComponent(String(d));
      d = this.V(d);

      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }

    return this.c = a.join("&");
  };

  function Od(a) {
    var b = new Qd();
    b.c = a.c;
    a.a && (b.a = new Fd(a.a), b.b = a.b);
    return b;
  }

  function ee(a, b) {
    b = String(b);
    a.f && (b = b.toLowerCase());
    return b;
  }

  function Wd(a, b) {
    b && !a.f && (be(a), a.c = null, a.a.forEach(function (c, d) {
      var e = d.toLowerCase();
      d != e && (fe(this, d), de(this, e, c));
    }, a));
    a.f = b;
  }

  ;

  function he(a) {
    var b = [];
    ie(new je(), a, b);
    return b.join("");
  }

  function je() {}

  function ie(a, b, c) {
    if (null == b) c.push("null");else {
      if ("object" == _typeof(b)) {
        if (Array.isArray(b)) {
          var d = b;
          b = d.length;
          c.push("[");

          for (var e = "", f = 0; f < b; f++) {
            c.push(e), ie(a, d[f], c), e = ",";
          }

          c.push("]");
          return;
        }

        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
          c.push("{");
          e = "";

          for (d in b) {
            Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), ke(d, c), c.push(":"), ie(a, f, c), e = ","));
          }

          c.push("}");
          return;
        }
      }

      switch (_typeof(b)) {
        case "string":
          ke(b, c);
          break;

        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;

        case "boolean":
          c.push(String(b));
          break;

        case "function":
          c.push("null");
          break;

        default:
          throw Error("Unknown type: " + _typeof(b));
      }
    }
  }

  var le = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
      me = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

  function ke(a, b) {
    b.push('"', a.replace(me, function (c) {
      var d = le[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), le[c] = d);
      return d;
    }), '"');
  }

  ;

  function ne() {
    var a = I();
    return Sb && !!cc && 11 == cc || /Edge\/\d+/.test(a);
  }

  function oe() {
    return l.window && l.window.location.href || self && self.location && self.location.href || "";
  }

  function pe(a, b) {
    b = b || l.window;
    var c = "about:blank";
    a && (c = Cb(Eb(a)));
    b.location.href = c;
  }

  function qe(a, b) {
    var c = [],
        d;

    for (d in a) {
      d in b ? _typeof(a[d]) != _typeof(b[d]) ? c.push(d) : "object" == _typeof(a[d]) && null != a[d] && null != b[d] ? 0 < qe(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
    }

    for (d in b) {
      d in a || c.push(d);
    }

    return c;
  }

  function re() {
    var a = I();
    a = se(a) != te ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
    return a && 30 > a ? !1 : !Sb || !cc || 9 < cc;
  }

  function ue(a) {
    a = (a || I()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
  }

  function ve(a) {
    a = a || l.window;

    try {
      a.close();
    } catch (b) {}
  }

  function we(a, b, c) {
    var d = Math.floor(1E9 * Math.random()).toString();
    b = b || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2;
    b = {
      width: b,
      height: c,
      top: 0 < e ? e : 0,
      left: 0 < f ? f : 0,
      location: !0,
      resizable: !0,
      statusbar: !0,
      toolbar: !1
    };
    c = I().toLowerCase();
    d && (b.target = d, y(c, "crios/") && (b.target = "_blank"));
    se(I()) == xe && (a = a || "http://localhost", b.scrollbars = !0);
    c = a || "";
    (a = b) || (a = {});
    d = window;
    b = c instanceof zb ? c : Eb("undefined" != typeof c.href ? c.href : String(c));
    c = a.target || c.target;
    e = [];

    for (g in a) {
      switch (g) {
        case "width":
        case "height":
        case "top":
        case "left":
          e.push(g + "=" + a[g]);
          break;

        case "target":
        case "noopener":
        case "noreferrer":
          break;

        default:
          e.push(g + "=" + (a[g] ? 1 : 0));
      }
    }

    var g = e.join(",");
    if ((z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c) g = ic(document, "A"), mb(g, "HTMLAnchorElement"), b instanceof zb || b instanceof zb || (b = "object" == _typeof(b) && b.ra ? b.qa() : String(b), Db.test(b) || (b = "about:invalid#zClosurez"), b = new zb(Ab, b)), g.href = Cb(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, d, 1), g.dispatchEvent(a), g = {};else if (a.noreferrer) {
      if (g = d.open("", c, g), a = Cb(b), g && (Ub && y(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = Ib('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Nb(a) + '">'), d = g.document)) d.write(Hb(a)), d.close();
    } else (g = d.open(Cb(b), c, g)) && a.noopener && (g.opener = null);
    if (g) try {
      g.focus();
    } catch (h) {}
    return g;
  }

  function ye(a) {
    return new D(function (b) {
      function c() {
        Bd(2E3).then(function () {
          if (!a || a.closed) b();else return c();
        });
      }

      return c();
    });
  }

  var ze = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      Ae = /^[^@]+@[^@]+$/;

  function Be() {
    var a = null;
    return new D(function (b) {
      "complete" == l.document.readyState ? b() : (a = function a() {
        b();
      }, kd(window, "load", a));
    }).o(function (b) {
      td(window, "load", a);
      throw b;
    });
  }

  function Ce() {
    return De(void 0) ? Be().then(function () {
      return new D(function (a, b) {
        var c = l.document,
            d = setTimeout(function () {
          b(Error("Cordova framework is not ready."));
        }, 1E3);
        c.addEventListener("deviceready", function () {
          clearTimeout(d);
          a();
        }, !1);
      });
    }) : F(Error("Cordova must run in an Android or iOS file scheme."));
  }

  function De(a) {
    a = a || I();
    return !("file:" !== Ee() && "ionic:" !== Ee() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
  }

  function Fe() {
    var a = l.window;

    try {
      return !(!a || a == a.top);
    } catch (b) {
      return !1;
    }
  }

  function Ge() {
    return "undefined" !== typeof l.WorkerGlobalScope && "function" === typeof l.importScripts;
  }

  function He() {
    return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("node") ? "Node" : Ge() ? "Worker" : "Browser";
  }

  function Ie() {
    var a = He();
    return "ReactNative" === a || "Node" === a;
  }

  function Je() {
    for (var a = 50, b = []; 0 < a;) {
      b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    }

    return b.join("");
  }

  var xe = "Firefox",
      te = "Chrome";

  function se(a) {
    var b = a.toLowerCase();
    if (y(b, "opera/") || y(b, "opr/") || y(b, "opios/")) return "Opera";
    if (y(b, "iemobile")) return "IEMobile";
    if (y(b, "msie") || y(b, "trident/")) return "IE";
    if (y(b, "edge/")) return "Edge";
    if (y(b, "firefox/")) return xe;
    if (y(b, "silk/")) return "Silk";
    if (y(b, "blackberry")) return "Blackberry";
    if (y(b, "webos")) return "Webos";
    if (!y(b, "safari/") || y(b, "chrome/") || y(b, "crios/") || y(b, "android")) {
      if (!y(b, "chrome/") && !y(b, "crios/") || y(b, "edge/")) {
        if (y(b, "android")) return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
      } else return te;
    } else return "Safari";
    return "Other";
  }

  var Ke = {
    jd: "FirebaseCore-web",
    ld: "FirebaseUI-web"
  };

  function Le(a, b) {
    b = b || [];
    var c = [],
        d = {},
        e;

    for (e in Ke) {
      d[Ke[e]] = !0;
    }

    for (e = 0; e < b.length; e++) {
      "undefined" !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));
    }

    c.sort();
    b = c;
    b.length || (b = ["FirebaseCore-web"]);
    c = He();
    "Browser" === c ? (d = I(), c = se(d)) : "Worker" === c && (d = I(), c = se(d) + "-" + c);
    return c + "/JsCore/" + a + "/" + b.join(",");
  }

  function I() {
    return l.navigator && l.navigator.userAgent || "";
  }

  function J(a, b) {
    a = a.split(".");
    b = b || l;

    for (var c = 0; c < a.length && "object" == _typeof(b) && null != b; c++) {
      b = b[a[c]];
    }

    c != a.length && (b = void 0);
    return b;
  }

  function Me() {
    try {
      var a = l.localStorage,
          b = Ne();
      if (a) return a.setItem(b, "1"), a.removeItem(b), ne() ? !!l.indexedDB : !0;
    } catch (c) {
      return Ge() && !!l.indexedDB;
    }

    return !1;
  }

  function Oe() {
    return (Pe() || "chrome-extension:" === Ee() || De()) && !Ie() && Me() && !Ge();
  }

  function Pe() {
    return "http:" === Ee() || "https:" === Ee();
  }

  function Ee() {
    return l.location && l.location.protocol || null;
  }

  function Qe(a) {
    a = a || I();
    return ue(a) || se(a) == xe ? !1 : !0;
  }

  function Re(a) {
    return "undefined" === typeof a ? null : he(a);
  }

  function Se(a) {
    var b = {},
        c;

    for (c in a) {
      a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
    }

    return b;
  }

  function Te(a) {
    if (null !== a) return JSON.parse(a);
  }

  function Ne(a) {
    return a ? a : Math.floor(1E9 * Math.random()).toString();
  }

  function Ue(a) {
    a = a || I();
    return "Safari" == se(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
  }

  function Ve() {
    var a = l.___jsl;
    if (a && a.H) for (var b in a.H) {
      if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
        a.CP[c] = null;
      }
    }
  }

  function We(a, b) {
    if (a > b) throw Error("Short delay should be less than long delay!");
    this.a = a;
    this.c = b;
    a = I();
    b = He();
    this.b = ue(a) || "ReactNative" === b;
  }

  We.prototype.get = function () {
    var a = l.navigator;
    return (a && "boolean" === typeof a.onLine && (Pe() || "chrome-extension:" === Ee() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5E3, this.a);
  };

  function Xe() {
    var a = l.document;
    return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
  }

  function Ye() {
    var a = l.document,
        _b = null;
    return Xe() || !a ? E() : new D(function (c) {
      _b = function b() {
        Xe() && (a.removeEventListener("visibilitychange", _b, !1), c());
      };

      a.addEventListener("visibilitychange", _b, !1);
    }).o(function (c) {
      a.removeEventListener("visibilitychange", _b, !1);
      throw c;
    });
  }

  function Ze(a) {
    try {
      var b = new Date(parseInt(a, 10));
      if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString();
    } catch (c) {}

    return null;
  }

  function $e() {
    return !(!J("fireauth.oauthhelper", l) && !J("fireauth.iframe", l));
  }

  function af() {
    var a = l.navigator;
    return a && a.serviceWorker && a.serviceWorker.controller || null;
  }

  function bf() {
    var a = l.navigator;
    return a && a.serviceWorker ? E().then(function () {
      return a.serviceWorker.ready;
    }).then(function (b) {
      return b.active || null;
    }).o(function () {
      return null;
    }) : E(null);
  }

  ;
  var cf = {};

  function df(a) {
    cf[a] || (cf[a] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a));
  }

  ;
  var ef;

  try {
    var ff = {};
    Object.defineProperty(ff, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 1
    });
    Object.defineProperty(ff, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 2
    });
    ef = 2 == ff.abcd;
  } catch (a) {
    ef = !1;
  }

  function K(a, b, c) {
    ef ? Object.defineProperty(a, b, {
      configurable: !0,
      enumerable: !0,
      value: c
    }) : a[b] = c;
  }

  function L(a, b) {
    if (b) for (var c in b) {
      b.hasOwnProperty(c) && K(a, c, b[c]);
    }
  }

  function gf(a) {
    var b = {};
    L(b, a);
    return b;
  }

  function hf(a) {
    var b = {},
        c;

    for (c in a) {
      a.hasOwnProperty(c) && (b[c] = a[c]);
    }

    return b;
  }

  function jf(a, b) {
    if (!b || !b.length) return !0;
    if (!a) return !1;

    for (var c = 0; c < b.length; c++) {
      var d = a[b[c]];
      if (void 0 === d || null === d || "" === d) return !1;
    }

    return !0;
  }

  function kf(a) {
    var b = a;

    if ("object" == _typeof(a) && null != a) {
      b = "length" in a ? [] : {};

      for (var c in a) {
        K(b, c, kf(a[c]));
      }
    }

    return b;
  }

  ;
  /*
  Copyright 2019 Google Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  function lf(a) {
    var b = a && (a[mf] ? "phone" : null);

    if (b && a && a[nf]) {
      K(this, "uid", a[nf]);
      K(this, "displayName", a[of] || null);
      var c = null;
      a[pf] && (c = new Date(a[pf]).toUTCString());
      K(this, "enrollmentTime", c);
      K(this, "factorId", b);
    } else throw new u("internal-error", "Internal assert: invalid MultiFactorInfo object");
  }

  lf.prototype.v = function () {
    return {
      uid: this.uid,
      displayName: this.displayName,
      factorId: this.factorId,
      enrollmentTime: this.enrollmentTime
    };
  };

  function qf(a) {
    try {
      var b = new rf(a);
    } catch (c) {
      b = null;
    }

    return b;
  }

  var of = "displayName",
      pf = "enrolledAt",
      nf = "mfaEnrollmentId",
      mf = "phoneInfo";

  function rf(a) {
    lf.call(this, a);
    K(this, "phoneNumber", a[mf]);
  }

  t(rf, lf);

  rf.prototype.v = function () {
    var a = rf.Za.v.call(this);
    a.phoneNumber = this.phoneNumber;
    return a;
  };

  function sf(a) {
    var b = {},
        c = a[tf],
        d = a[uf],
        e = a[vf];
    a = qf(a[wf]);
    if (!e || e != xf && e != yf && !c || e == yf && !d || e == zf && !a) throw Error("Invalid checkActionCode response!");
    e == yf ? (b[Af] = c || null, b[Bf] = c || null, b[Cf] = d) : (b[Af] = d || null, b[Bf] = d || null, b[Cf] = c || null);
    b[Df] = a || null;
    K(this, Ef, e);
    K(this, Ff, kf(b));
  }

  var zf = "REVERT_SECOND_FACTOR_ADDITION",
      xf = "EMAIL_SIGNIN",
      yf = "VERIFY_AND_CHANGE_EMAIL",
      tf = "email",
      wf = "mfaInfo",
      uf = "newEmail",
      vf = "requestType",
      Cf = "email",
      Af = "fromEmail",
      Df = "multiFactorInfo",
      Bf = "previousEmail",
      Ff = "data",
      Ef = "operation";

  function Gf(a) {
    a = Zd(a);
    var b = Yd(a, Hf) || null,
        c = Yd(a, If) || null,
        d = Yd(a, Jf) || null;
    d = d ? Kf[d] || null : null;
    if (!b || !c || !d) throw new u("argument-error", Hf + ", " + If + "and " + Jf + " are required in a valid action code URL.");
    L(this, {
      apiKey: b,
      operation: d,
      code: c,
      continueUrl: Yd(a, Lf) || null,
      languageCode: Yd(a, Mf) || null,
      tenantId: Yd(a, Nf) || null
    });
  }

  var Hf = "apiKey",
      If = "oobCode",
      Lf = "continueUrl",
      Mf = "languageCode",
      Jf = "mode",
      Nf = "tenantId",
      Kf = {
    recoverEmail: "RECOVER_EMAIL",
    resetPassword: "PASSWORD_RESET",
    revertSecondFactorAddition: zf,
    signIn: xf,
    verifyAndChangeEmail: yf,
    verifyEmail: "VERIFY_EMAIL"
  };

  function Of(a) {
    try {
      return new Gf(a);
    } catch (b) {
      return null;
    }
  }

  ;

  function Pf(a) {
    var b = a[Qf];
    if ("undefined" === typeof b) throw new u("missing-continue-uri");
    if ("string" !== typeof b || "string" === typeof b && !b.length) throw new u("invalid-continue-uri");
    this.h = b;
    this.b = this.a = null;
    this.g = !1;
    var c = a[Rf];

    if (c && "object" === _typeof(c)) {
      b = c[Sf];
      var d = c[Tf];
      c = c[Uf];

      if ("string" === typeof b && b.length) {
        this.a = b;
        if ("undefined" !== typeof d && "boolean" !== typeof d) throw new u("argument-error", Tf + " property must be a boolean when specified.");
        this.g = !!d;
        if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length)) throw new u("argument-error", Uf + " property must be a non empty string when specified.");
        this.b = c || null;
      } else {
        if ("undefined" !== typeof b) throw new u("argument-error", Sf + " property must be a non empty string when specified.");
        if ("undefined" !== typeof d || "undefined" !== typeof c) throw new u("missing-android-pkg-name");
      }
    } else if ("undefined" !== typeof c) throw new u("argument-error", Rf + " property must be a non null object when specified.");

    this.f = null;
    if ((b = a[Vf]) && "object" === _typeof(b)) {
      if (b = b[Wf], "string" === typeof b && b.length) this.f = b;else {
        if ("undefined" !== typeof b) throw new u("argument-error", Wf + " property must be a non empty string when specified.");
      }
    } else if ("undefined" !== typeof b) throw new u("argument-error", Vf + " property must be a non null object when specified.");
    b = a[Xf];
    if ("undefined" !== typeof b && "boolean" !== typeof b) throw new u("argument-error", Xf + " property must be a boolean when specified.");
    this.c = !!b;
    a = a[Yf];
    if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length)) throw new u("argument-error", Yf + " property must be a non empty string when specified.");
    this.i = a || null;
  }

  var Rf = "android",
      Yf = "dynamicLinkDomain",
      Xf = "handleCodeInApp",
      Vf = "iOS",
      Qf = "url",
      Tf = "installApp",
      Uf = "minimumVersion",
      Sf = "packageName",
      Wf = "bundleId";

  function Zf(a) {
    var b = {};
    b.continueUrl = a.h;
    b.canHandleCodeInApp = a.c;
    if (b.androidPackageName = a.a) b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
    b.iOSBundleId = a.f;
    b.dynamicLinkDomain = a.i;

    for (var c in b) {
      null === b[c] && delete b[c];
    }

    return b;
  }

  ;

  function $f(a) {
    return Oa(a, function (b) {
      b = b.toString(16);
      return 1 < b.length ? b : "0" + b;
    }).join("");
  }

  ;
  var ag = null;

  function bg(a) {
    var b = "";
    cg(a, function (c) {
      b += String.fromCharCode(c);
    });
    return b;
  }

  function cg(a, b) {
    function c(m) {
      for (; d < a.length;) {
        var p = a.charAt(d++),
            v = ag[p];
        if (null != v) return v;
        if (!/^[\s\xa0]*$/.test(p)) throw Error("Unknown base64 encoding at char: " + p);
      }

      return m;
    }

    dg();

    for (var d = 0;;) {
      var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
      if (64 === h && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
    }
  }

  function dg() {
    if (!ag) {
      ag = {};

      for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
        for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === ag[f] && (ag[f] = e);
        }
      }
    }
  }

  ;

  function eg(a) {
    var b = fg(a);
    if (!(b && b.sub && b.iss && b.aud && b.exp)) throw Error("Invalid JWT");
    this.g = a;
    this.c = b.exp;
    this.h = b.sub;
    ta();
    this.a = b.provider_id || b.firebase && b.firebase.sign_in_provider || null;
    this.f = b.firebase && b.firebase.tenant || null;
    this.b = !!b.is_anonymous || "anonymous" == this.a;
  }

  eg.prototype.S = function () {
    return this.f;
  };

  eg.prototype.i = function () {
    return this.b;
  };

  eg.prototype.toString = function () {
    return this.g;
  };

  function gg(a) {
    try {
      return new eg(a);
    } catch (b) {
      return null;
    }
  }

  function fg(a) {
    if (!a) return null;
    a = a.split(".");
    if (3 != a.length) return null;
    a = a[1];

    for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) {
      a += ".";
    }

    try {
      return JSON.parse(bg(a));
    } catch (d) {}

    return null;
  }

  ;
  var hg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
      ig = ["client_id", "response_type", "scope", "redirect_uri", "state"],
      jg = {
    kd: {
      Ha: "locale",
      ta: 700,
      sa: 600,
      ea: "facebook.com",
      Va: ig
    },
    md: {
      Ha: null,
      ta: 500,
      sa: 750,
      ea: "github.com",
      Va: ig
    },
    nd: {
      Ha: "hl",
      ta: 515,
      sa: 680,
      ea: "google.com",
      Va: ig
    },
    td: {
      Ha: "lang",
      ta: 485,
      sa: 705,
      ea: "twitter.com",
      Va: hg
    },
    gd: {
      Ha: "locale",
      ta: 640,
      sa: 600,
      ea: "apple.com",
      Va: []
    }
  };

  function kg(a) {
    for (var b in jg) {
      if (jg[b].ea == a) return jg[b];
    }

    return null;
  }

  ;

  function lg(a) {
    var b = {};
    b["facebook.com"] = mg;
    b["google.com"] = ng;
    b["github.com"] = og;
    b["twitter.com"] = pg;
    var c = a && a[qg];

    try {
      if (c) return b[c] ? new b[c](a) : new rg(a);
      if ("undefined" !== typeof a[sg]) return new tg(a);
    } catch (d) {}

    return null;
  }

  var sg = "idToken",
      qg = "providerId";

  function tg(a) {
    var b = a[qg];

    if (!b && a[sg]) {
      var c = gg(a[sg]);
      c && c.a && (b = c.a);
    }

    if (!b) throw Error("Invalid additional user info!");
    if ("anonymous" == b || "custom" == b) b = null;
    c = !1;
    "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
    K(this, "providerId", b);
    K(this, "isNewUser", c);
  }

  function rg(a) {
    tg.call(this, a);
    a = Te(a.rawUserInfo || "{}");
    K(this, "profile", kf(a || {}));
  }

  t(rg, tg);

  function mg(a) {
    rg.call(this, a);
    if ("facebook.com" != this.providerId) throw Error("Invalid provider ID!");
  }

  t(mg, rg);

  function og(a) {
    rg.call(this, a);
    if ("github.com" != this.providerId) throw Error("Invalid provider ID!");
    K(this, "username", this.profile && this.profile.login || null);
  }

  t(og, rg);

  function ng(a) {
    rg.call(this, a);
    if ("google.com" != this.providerId) throw Error("Invalid provider ID!");
  }

  t(ng, rg);

  function pg(a) {
    rg.call(this, a);
    if ("twitter.com" != this.providerId) throw Error("Invalid provider ID!");
    K(this, "username", a.screenName || null);
  }

  t(pg, rg);

  function ug(a) {
    var b = Zd(a),
        c = Yd(b, "link"),
        d = Yd(Zd(c), "link");
    b = Yd(b, "deep_link_id");
    return Yd(Zd(b), "link") || b || d || c || a;
  }

  ;

  function vg(a, b) {
    if (!a && !b) throw new u("internal-error", "Internal assert: no raw session string available");
    if (a && b) throw new u("internal-error", "Internal assert: unable to determine the session type");
    this.a = a || null;
    this.b = b || null;
    this.type = this.a ? wg : xg;
  }

  var wg = "enroll",
      xg = "signin";

  vg.prototype.Fa = function () {
    return this.a ? E(this.a) : E(this.b);
  };

  vg.prototype.v = function () {
    return this.type == wg ? {
      multiFactorSession: {
        idToken: this.a
      }
    } : {
      multiFactorSession: {
        pendingCredential: this.b
      }
    };
  };

  function yg() {}

  yg.prototype.ia = function () {};

  yg.prototype.b = function () {};

  yg.prototype.c = function () {};

  yg.prototype.v = function () {};

  function zg(a, b) {
    return a.then(function (c) {
      if (c[Ag]) {
        var d = gg(c[Ag]);
        if (!d || b != d.h) throw new u("user-mismatch");
        return c;
      }

      throw new u("user-mismatch");
    }).o(function (c) {
      throw c && c.code && c.code == ua + "user-not-found" ? new u("user-mismatch") : c;
    });
  }

  function Bg(a, b) {
    if (b) this.a = b;else throw new u("internal-error", "failed to construct a credential");
    K(this, "providerId", a);
    K(this, "signInMethod", a);
  }

  Bg.prototype.ia = function (a) {
    return Cg(a, Dg(this));
  };

  Bg.prototype.b = function (a, b) {
    var c = Dg(this);
    c.idToken = b;
    return Eg(a, c);
  };

  Bg.prototype.c = function (a, b) {
    return zg(Fg(a, Dg(this)), b);
  };

  function Dg(a) {
    return {
      pendingToken: a.a,
      requestUri: "http://localhost"
    };
  }

  Bg.prototype.v = function () {
    return {
      providerId: this.providerId,
      signInMethod: this.signInMethod,
      pendingToken: this.a
    };
  };

  function Gg(a) {
    if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken) try {
      return new Bg(a.providerId, a.pendingToken);
    } catch (b) {}
    return null;
  }

  function Hg(a, b, c) {
    this.a = null;
    if (b.idToken || b.accessToken) b.idToken && K(this, "idToken", b.idToken), b.accessToken && K(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && K(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);else if (b.oauthToken && b.oauthTokenSecret) K(this, "accessToken", b.oauthToken), K(this, "secret", b.oauthTokenSecret);else throw new u("internal-error", "failed to construct a credential");
    K(this, "providerId", a);
    K(this, "signInMethod", c);
  }

  Hg.prototype.ia = function (a) {
    return Cg(a, Ig(this));
  };

  Hg.prototype.b = function (a, b) {
    var c = Ig(this);
    c.idToken = b;
    return Eg(a, c);
  };

  Hg.prototype.c = function (a, b) {
    var c = Ig(this);
    return zg(Fg(a, c), b);
  };

  function Ig(a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.providerId;
    a.nonce && !a.a && (b.nonce = a.nonce);
    b = {
      postBody: ce(b).toString(),
      requestUri: "http://localhost"
    };
    a.a && (delete b.postBody, b.pendingToken = a.a);
    return b;
  }

  Hg.prototype.v = function () {
    var a = {
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    this.nonce && (a.nonce = this.nonce);
    this.a && (a.pendingToken = this.a);
    return a;
  };

  function Jg(a) {
    if (a && a.providerId && a.signInMethod) {
      var b = {
        idToken: a.oauthIdToken,
        accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
        oauthTokenSecret: a.oauthTokenSecret,
        oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
        nonce: a.nonce,
        pendingToken: a.pendingToken
      };

      try {
        return new Hg(a.providerId, b, a.signInMethod);
      } catch (c) {}
    }

    return null;
  }

  function Kg(a, b) {
    this.Oc = b || [];
    L(this, {
      providerId: a,
      isOAuthProvider: !0
    });
    this.Fb = {};
    this.lb = (kg(a) || {}).Ha || null;
    this.kb = null;
  }

  Kg.prototype.Ia = function (a) {
    this.Fb = kb(a);
    return this;
  };

  function Lg(a) {
    if ("string" !== typeof a || 0 != a.indexOf("saml.")) throw new u("argument-error", 'SAML provider IDs must be prefixed with "saml."');
    Kg.call(this, a, []);
  }

  t(Lg, Kg);

  function M(a) {
    Kg.call(this, a, ig);
    this.a = [];
  }

  t(M, Kg);

  M.prototype.Aa = function (a) {
    Sa(this.a, a) || this.a.push(a);
    return this;
  };

  M.prototype.Nb = function () {
    return Wa(this.a);
  };

  M.prototype.credential = function (a, b) {
    var c;
    q(a) ? c = {
      idToken: a.idToken || null,
      accessToken: a.accessToken || null,
      nonce: a.rawNonce || null
    } : c = {
      idToken: a || null,
      accessToken: b || null
    };
    if (!c.idToken && !c.accessToken) throw new u("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new Hg(this.providerId, c, this.providerId);
  };

  function Mg() {
    M.call(this, "facebook.com");
  }

  t(Mg, M);
  K(Mg, "PROVIDER_ID", "facebook.com");
  K(Mg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");

  function Ng(a) {
    if (!a) throw new u("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b = a;
    q(a) && (b = a.accessToken);
    return new Mg().credential({
      accessToken: b
    });
  }

  function Og() {
    M.call(this, "github.com");
  }

  t(Og, M);
  K(Og, "PROVIDER_ID", "github.com");
  K(Og, "GITHUB_SIGN_IN_METHOD", "github.com");

  function Pg(a) {
    if (!a) throw new u("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b = a;
    q(a) && (b = a.accessToken);
    return new Og().credential({
      accessToken: b
    });
  }

  function Qg() {
    M.call(this, "google.com");
    this.Aa("profile");
  }

  t(Qg, M);
  K(Qg, "PROVIDER_ID", "google.com");
  K(Qg, "GOOGLE_SIGN_IN_METHOD", "google.com");

  function Rg(a, b) {
    var c = a;
    q(a) && (c = a.idToken, b = a.accessToken);
    return new Qg().credential({
      idToken: c,
      accessToken: b
    });
  }

  function Sg() {
    Kg.call(this, "twitter.com", hg);
  }

  t(Sg, Kg);
  K(Sg, "PROVIDER_ID", "twitter.com");
  K(Sg, "TWITTER_SIGN_IN_METHOD", "twitter.com");

  function Tg(a, b) {
    var c = a;
    q(c) || (c = {
      oauthToken: a,
      oauthTokenSecret: b
    });
    if (!c.oauthToken || !c.oauthTokenSecret) throw new u("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
    return new Hg("twitter.com", c, "twitter.com");
  }

  function Ug(a, b, c) {
    this.a = a;
    this.f = b;
    K(this, "providerId", "password");
    K(this, "signInMethod", c === Vg.EMAIL_LINK_SIGN_IN_METHOD ? Vg.EMAIL_LINK_SIGN_IN_METHOD : Vg.EMAIL_PASSWORD_SIGN_IN_METHOD);
  }

  Ug.prototype.ia = function (a) {
    return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? N(a, Wg, {
      email: this.a,
      oobCode: this.f
    }) : N(a, Xg, {
      email: this.a,
      password: this.f
    });
  };

  Ug.prototype.b = function (a, b) {
    return this.signInMethod == Vg.EMAIL_LINK_SIGN_IN_METHOD ? N(a, Yg, {
      idToken: b,
      email: this.a,
      oobCode: this.f
    }) : N(a, Zg, {
      idToken: b,
      email: this.a,
      password: this.f
    });
  };

  Ug.prototype.c = function (a, b) {
    return zg(this.ia(a), b);
  };

  Ug.prototype.v = function () {
    return {
      email: this.a,
      password: this.f,
      signInMethod: this.signInMethod
    };
  };

  function $g(a) {
    return a && a.email && a.password ? new Ug(a.email, a.password, a.signInMethod) : null;
  }

  function Vg() {
    L(this, {
      providerId: "password",
      isOAuthProvider: !1
    });
  }

  function ah(a, b) {
    b = bh(b);
    if (!b) throw new u("argument-error", "Invalid email link!");
    return new Ug(a, b.code, Vg.EMAIL_LINK_SIGN_IN_METHOD);
  }

  function bh(a) {
    a = ug(a);
    return (a = Of(a)) && a.operation === xf ? a : null;
  }

  L(Vg, {
    PROVIDER_ID: "password"
  });
  L(Vg, {
    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
  });
  L(Vg, {
    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
  });

  function ch(a) {
    if (!(a.bb && a.ab || a.Ja && a.da)) throw new u("internal-error");
    this.a = a;
    K(this, "providerId", "phone");
    this.ea = "phone";
    K(this, "signInMethod", "phone");
  }

  ch.prototype.ia = function (a) {
    return a.cb(dh(this));
  };

  ch.prototype.b = function (a, b) {
    var c = dh(this);
    c.idToken = b;
    return N(a, eh, c);
  };

  ch.prototype.c = function (a, b) {
    var c = dh(this);
    c.operation = "REAUTH";
    a = N(a, fh, c);
    return zg(a, b);
  };

  ch.prototype.v = function () {
    var a = {
      providerId: "phone"
    };
    this.a.bb && (a.verificationId = this.a.bb);
    this.a.ab && (a.verificationCode = this.a.ab);
    this.a.Ja && (a.temporaryProof = this.a.Ja);
    this.a.da && (a.phoneNumber = this.a.da);
    return a;
  };

  function gh(a) {
    if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
      var b = {};
      x(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function (c) {
        a[c] && (b[c] = a[c]);
      });
      return new ch(b);
    }

    return null;
  }

  function dh(a) {
    return a.a.Ja && a.a.da ? {
      temporaryProof: a.a.Ja,
      phoneNumber: a.a.da
    } : {
      sessionInfo: a.a.bb,
      code: a.a.ab
    };
  }

  function hh(a) {
    try {
      this.a = a || _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
    } catch (b) {
      throw new u("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
    }

    L(this, {
      providerId: "phone",
      isOAuthProvider: !1
    });
  }

  hh.prototype.cb = function (a, b) {
    var c = this.a.b;
    return E(b.verify()).then(function (d) {
      if ("string" !== typeof d) throw new u("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");

      switch (b.type) {
        case "recaptcha":
          var e = q(a) ? a.session : null,
              f = q(a) ? a.phoneNumber : a,
              g;
          e && e.type == wg ? g = e.Fa().then(function (h) {
            return ih(c, {
              idToken: h,
              phoneEnrollmentInfo: {
                phoneNumber: f,
                recaptchaToken: d
              }
            });
          }) : e && e.type == xg ? g = e.Fa().then(function (h) {
            return jh(c, {
              mfaPendingCredential: h,
              mfaEnrollmentId: a.multiFactorHint && a.multiFactorHint.uid || a.multiFactorUid,
              phoneSignInInfo: {
                recaptchaToken: d
              }
            });
          }) : g = kh(c, {
            phoneNumber: f,
            recaptchaToken: d
          });
          return g.then(function (h) {
            "function" === typeof b.reset && b.reset();
            return h;
          }, function (h) {
            "function" === typeof b.reset && b.reset();
            throw h;
          });

        default:
          throw new u("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
      }
    });
  };

  function lh(a, b) {
    if (!a) throw new u("missing-verification-id");
    if (!b) throw new u("missing-verification-code");
    return new ch({
      bb: a,
      ab: b
    });
  }

  L(hh, {
    PROVIDER_ID: "phone"
  });
  L(hh, {
    PHONE_SIGN_IN_METHOD: "phone"
  });

  function mh(a) {
    if (a.temporaryProof && a.phoneNumber) return new ch({
      Ja: a.temporaryProof,
      da: a.phoneNumber
    });
    var b = a && a.providerId;
    if (!b || "password" === b) return null;
    var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret,
        e = a && a.nonce,
        f = a && a.oauthIdToken,
        g = a && a.pendingToken;

    try {
      switch (b) {
        case "google.com":
          return Rg(f, c);

        case "facebook.com":
          return Ng(c);

        case "github.com":
          return Pg(c);

        case "twitter.com":
          return Tg(c, d);

        default:
          return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new Bg(b, g) : new Hg(b, {
            pendingToken: g,
            idToken: a.oauthIdToken,
            accessToken: a.oauthAccessToken
          }, b) : new M(b).credential({
            idToken: f,
            accessToken: c,
            rawNonce: e
          }) : null;
      }
    } catch (h) {
      return null;
    }
  }

  function nh(a) {
    if (!a.isOAuthProvider) throw new u("invalid-oauth-provider");
  }

  ;

  function oh(a, b, c, d, e, f, g) {
    this.c = a;
    this.b = b || null;
    this.g = c || null;
    this.f = d || null;
    this.i = f || null;
    this.h = g || null;
    this.a = e || null;

    if (this.g || this.a) {
      if (this.g && this.a) throw new u("invalid-auth-event");
      if (this.g && !this.f) throw new u("invalid-auth-event");
    } else throw new u("invalid-auth-event");
  }

  oh.prototype.getUid = function () {
    var a = [];
    a.push(this.c);
    this.b && a.push(this.b);
    this.f && a.push(this.f);
    this.h && a.push(this.h);
    return a.join("-");
  };

  oh.prototype.S = function () {
    return this.h;
  };

  oh.prototype.v = function () {
    return {
      type: this.c,
      eventId: this.b,
      urlResponse: this.g,
      sessionId: this.f,
      postBody: this.i,
      tenantId: this.h,
      error: this.a && this.a.v()
    };
  };

  function ph(a) {
    a = a || {};
    return a.type ? new oh(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && wa(a.error), a.postBody, a.tenantId) : null;
  }

  ;
  /*
  Copyright 2018 Google Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  function qh() {
    this.b = null;
    this.a = [];
  }

  var rh = null;

  function sh(a) {
    var b = rh;
    b.a.push(a);
    b.b || (b.b = function (c) {
      for (var d = 0; d < b.a.length; d++) {
        b.a[d](c);
      }
    }, a = J("universalLinks.subscribe", l), "function" === typeof a && a(null, b.b));
  }

  ;

  function th(a) {
    var b = "unauthorized-domain",
        c = void 0,
        d = Zd(a);
    a = d.b;
    d = d.f;
    "chrome-extension" == d ? c = Mb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Mb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
    u.call(this, b, c);
  }

  t(th, u);

  function uh(a, b, c) {
    u.call(this, a, c);
    a = b || {};
    a.Gb && K(this, "email", a.Gb);
    a.da && K(this, "phoneNumber", a.da);
    a.credential && K(this, "credential", a.credential);
    a.Wb && K(this, "tenantId", a.Wb);
  }

  t(uh, u);

  uh.prototype.v = function () {
    var a = {
      code: this.code,
      message: this.message
    };
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    this.tenantId && (a.tenantId = this.tenantId);
    var b = this.credential && this.credential.v();
    b && B(a, b);
    return a;
  };

  uh.prototype.toJSON = function () {
    return this.v();
  };

  function vh(a) {
    if (a.code) {
      var b = a.code || "";
      0 == b.indexOf(ua) && (b = b.substring(ua.length));
      var c = {
        credential: mh(a),
        Wb: a.tenantId
      };
      if (a.email) c.Gb = a.email;else if (a.phoneNumber) c.da = a.phoneNumber;else if (!c.credential) return new u(b, a.message || void 0);
      return new uh(b, c, a.message);
    }

    return null;
  }

  ;

  function wh() {}

  wh.prototype.c = null;

  function xh(a) {
    return a.c || (a.c = a.b());
  }

  ;
  var yh;

  function zh() {}

  t(zh, wh);

  zh.prototype.a = function () {
    var a = Ah(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };

  zh.prototype.b = function () {
    var a = {};
    Ah(this) && (a[0] = !0, a[1] = !0);
    return a;
  };

  function Ah(a) {
    if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];

        try {
          return new ActiveXObject(d), a.f = d;
        } catch (e) {}
      }

      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }

    return a.f;
  }

  yh = new zh();

  function Bh() {}

  t(Bh, wh);

  Bh.prototype.a = function () {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a) return a;
    if ("undefined" != typeof XDomainRequest) return new Ch();
    throw Error("Unsupported browser");
  };

  Bh.prototype.b = function () {
    return {};
  };

  function Ch() {
    this.a = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseType = this.responseText = this.response = "";
    this.status = -1;
    this.statusText = "";
    this.a.onload = r(this.oc, this);
    this.a.onerror = r(this.Pb, this);
    this.a.onprogress = r(this.pc, this);
    this.a.ontimeout = r(this.tc, this);
  }

  k = Ch.prototype;

  k.open = function (a, b, c) {
    if (null != c && !c) throw Error("Only async requests are supported.");
    this.a.open(a, b);
  };

  k.send = function (a) {
    if (a) {
      if ("string" == typeof a) this.a.send(a);else throw Error("Only string data is supported");
    } else this.a.send();
  };

  k.abort = function () {
    this.a.abort();
  };

  k.setRequestHeader = function () {};

  k.getResponseHeader = function (a) {
    return "content-type" == a.toLowerCase() ? this.a.contentType : "";
  };

  k.oc = function () {
    this.status = 200;
    this.response = this.responseText = this.a.responseText;
    Dh(this, 4);
  };

  k.Pb = function () {
    this.status = 500;
    this.response = this.responseText = "";
    Dh(this, 4);
  };

  k.tc = function () {
    this.Pb();
  };

  k.pc = function () {
    this.status = 200;
    Dh(this, 1);
  };

  function Dh(a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange();
  }

  k.getAllResponseHeaders = function () {
    return "content-type: " + this.a.contentType;
  };

  function Eh(a, b, c) {
    this.reset(a, b, c, void 0, void 0);
  }

  Eh.prototype.a = null;
  var Fh = 0;

  Eh.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || Fh++;
    d || ta();
    delete this.a;
  };

  function Gh(a) {
    this.f = a;
    this.b = this.c = this.a = null;
  }

  function Hh(a, b) {
    this.name = a;
    this.value = b;
  }

  Hh.prototype.toString = function () {
    return this.name;
  };

  var Ih = new Hh("SEVERE", 1E3),
      Jh = new Hh("WARNING", 900),
      Kh = new Hh("CONFIG", 700),
      Lh = new Hh("FINE", 500);

  function Mh(a) {
    if (a.c) return a.c;
    if (a.a) return Mh(a.a);
    Da("Root logger has no level set.");
    return null;
  }

  Gh.prototype.log = function (a, b, c) {
    if (a.value >= Mh(this).value) for (n(b) && (b = b()), a = new Eh(a, String(b), this.f), c && (a.a = c), c = this; c;) {
      c = c.a;
    }
  };

  var Nh = {},
      Oh = null;

  function Ph(a) {
    Oh || (Oh = new Gh(""), Nh[""] = Oh, Oh.c = Kh);
    var b;

    if (!(b = Nh[a])) {
      b = new Gh(a);
      var c = a.lastIndexOf("."),
          d = a.substr(c + 1);
      c = Ph(a.substr(0, c));
      c.b || (c.b = {});
      c.b[d] = b;
      b.a = c;
      Nh[a] = b;
    }

    return b;
  }

  ;

  function Qh(a, b) {
    a && a.log(Lh, b, void 0);
  }

  ;

  function Rh(a) {
    this.f = a;
  }

  t(Rh, wh);

  Rh.prototype.a = function () {
    return new Sh(this.f);
  };

  Rh.prototype.b = function (a) {
    return function () {
      return a;
    };
  }({});

  function Sh(a) {
    G.call(this);
    this.s = a;
    this.readyState = Th;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.i = new Headers();
    this.b = null;
    this.m = "GET";
    this.g = "";
    this.a = !1;
    this.h = Ph("goog.net.FetchXmlHttp");
    this.l = this.c = this.f = null;
  }

  t(Sh, G);
  var Th = 0;
  k = Sh.prototype;

  k.open = function (a, b) {
    if (this.readyState != Th) throw this.abort(), Error("Error reopening a connection");
    this.m = a;
    this.g = b;
    this.readyState = 1;
    Uh(this);
  };

  k.send = function (a) {
    if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
    this.a = !0;
    var b = {
      headers: this.i,
      method: this.m,
      credentials: void 0,
      cache: void 0
    };
    a && (b.body = a);
    this.s.fetch(new Request(this.g, b)).then(this.sc.bind(this), this.Sa.bind(this));
  };

  k.abort = function () {
    this.response = this.responseText = "";
    this.i = new Headers();
    this.status = 0;
    this.c && this.c.cancel("Request was aborted.");
    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, Vh(this, !1));
    this.readyState = Th;
  };

  k.sc = function (a) {
    this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, Uh(this)), this.a && (this.readyState = 3, Uh(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this)) : "undefined" !== typeof l.ReadableStream && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder(), Wh(this)) : a.text().then(this.rc.bind(this), this.Sa.bind(this)))));
  };

  function Wh(a) {
    a.c.read().then(a.nc.bind(a))["catch"](a.Sa.bind(a));
  }

  k.nc = function (a) {
    if (this.a) {
      var b = this.l.decode(a.value ? a.value : new Uint8Array(0), {
        stream: !a.done
      });
      b && (this.response = this.responseText += b);
      a.done ? Vh(this, !0) : Uh(this);
      3 == this.readyState && Wh(this);
    }
  };

  k.rc = function (a) {
    this.a && (this.response = this.responseText = a, Vh(this, !0));
  };

  k.qc = function (a) {
    this.a && (this.response = a, Vh(this, !0));
  };

  k.Sa = function (a) {
    var b = this.h;
    b && b.log(Jh, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a));
    this.a && Vh(this, !0);
  };

  function Vh(a, b) {
    b && a.f && (a.status = a.f.status, a.statusText = a.f.statusText);
    a.readyState = 4;
    a.f = null;
    a.c = null;
    a.l = null;
    Uh(a);
  }

  k.setRequestHeader = function (a, b) {
    this.i.append(a, b);
  };

  k.getResponseHeader = function (a) {
    return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(Jh, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "");
  };

  k.getAllResponseHeaders = function () {
    if (!this.b) {
      var a = this.h;
      a && a.log(Jh, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0);
      return "";
    }

    a = [];

    for (var b = this.b.entries(), c = b.next(); !c.done;) {
      c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
    }

    return a.join("\r\n");
  };

  function Uh(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }

  ;

  function Xh(a) {
    G.call(this);
    this.headers = new Fd();
    this.D = a || null;
    this.c = !1;
    this.B = this.a = null;
    this.h = this.P = this.l = "";
    this.f = this.O = this.i = this.N = !1;
    this.g = 0;
    this.s = null;
    this.m = Yh;
    this.w = this.R = !1;
  }

  t(Xh, G);
  var Yh = "";
  Xh.prototype.b = Ph("goog.net.XhrIo");
  var Zh = /^https?$/i,
      $h = ["POST", "PUT"];

  function ai(a, b, c, d, e) {
    if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
    c = c ? c.toUpperCase() : "GET";
    a.l = b;
    a.h = "";
    a.P = c;
    a.N = !1;
    a.c = !0;
    a.a = a.D ? a.D.a() : yh.a();
    a.B = a.D ? xh(a.D) : xh(yh);
    a.a.onreadystatechange = r(a.Sb, a);

    try {
      Qh(a.b, bi(a, "Opening Xhr")), a.O = !0, a.a.open(c, String(b), !0), a.O = !1;
    } catch (g) {
      Qh(a.b, bi(a, "Error opening Xhr: " + g.message));
      ci(a, g);
      return;
    }

    b = d || "";
    var f = new Fd(a.headers);
    e && Ed(e, function (g, h) {
      f.set(h, g);
    });
    e = Qa(f.X());
    d = l.FormData && b instanceof l.FormData;
    !Sa($h, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function (g, h) {
      this.a.setRequestHeader(h, g);
    }, a);
    a.m && (a.a.responseType = a.m);
    "withCredentials" in a.a && a.a.withCredentials !== a.R && (a.a.withCredentials = a.R);

    try {
      di(a), 0 < a.g && (a.w = ei(a.a), Qh(a.b, bi(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.w)), a.w ? (a.a.timeout = a.g, a.a.ontimeout = r(a.Ka, a)) : a.s = Ad(a.Ka, a.g, a)), Qh(a.b, bi(a, "Sending request")), a.i = !0, a.a.send(b), a.i = !1;
    } catch (g) {
      Qh(a.b, bi(a, "Send error: " + g.message)), ci(a, g);
    }
  }

  function ei(a) {
    return Sb && bc(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  }

  function Ra(a) {
    return "content-type" == a.toLowerCase();
  }

  k = Xh.prototype;

  k.Ka = function () {
    "undefined" != typeof ha && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", Qh(this.b, bi(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
  };

  function ci(a, b) {
    a.c = !1;
    a.a && (a.f = !0, a.a.abort(), a.f = !1);
    a.h = b;
    fi(a);
    gi(a);
  }

  function fi(a) {
    a.N || (a.N = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }

  k.abort = function () {
    this.a && this.c && (Qh(this.b, bi(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), gi(this));
  };

  k.Ba = function () {
    this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), gi(this, !0));
    Xh.Za.Ba.call(this);
  };

  k.Sb = function () {
    this.wa || (this.O || this.i || this.f ? hi(this) : this.Hc());
  };

  k.Hc = function () {
    hi(this);
  };

  function hi(a) {
    if (a.c && "undefined" != typeof ha) if (a.B[1] && 4 == ii(a) && 2 == ji(a)) Qh(a.b, bi(a, "Local request error detected and ignored"));else if (a.i && 4 == ii(a)) Ad(a.Sb, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == ii(a)) {
      Qh(a.b, bi(a, "Request complete"));
      a.c = !1;

      try {
        var b = ji(a);

        a: switch (b) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var c = !0;
            break a;

          default:
            c = !1;
        }

        var d;

        if (!(d = c)) {
          var e;

          if (e = 0 === b) {
            var f = String(a.l).match(Id)[1] || null;

            if (!f && l.self && l.self.location) {
              var g = l.self.location.protocol;
              f = g.substr(0, g.length - 1);
            }

            e = !Zh.test(f ? f.toLowerCase() : "");
          }

          d = e;
        }

        if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
          try {
            var h = 2 < ii(a) ? a.a.statusText : "";
          } catch (m) {
            Qh(a.b, "Can not get status: " + m.message), h = "";
          }

          a.h = h + " [" + ji(a) + "]";
          fi(a);
        }
      } finally {
        gi(a);
      }
    }
  }

  function gi(a, b) {
    if (a.a) {
      di(a);
      var c = a.a,
          d = a.B[0] ? ka : null;
      a.a = null;
      a.B = null;
      b || a.dispatchEvent("ready");

      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.b) && a.log(Ih, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  }

  function di(a) {
    a.a && a.w && (a.a.ontimeout = null);
    a.s && (l.clearTimeout(a.s), a.s = null);
  }

  function ii(a) {
    return a.a ? a.a.readyState : 0;
  }

  function ji(a) {
    try {
      return 2 < ii(a) ? a.a.status : -1;
    } catch (b) {
      return -1;
    }
  }

  function ki(a) {
    try {
      return a.a ? a.a.responseText : "";
    } catch (b) {
      return Qh(a.b, "Can not get responseText: " + b.message), "";
    }
  }

  k.getResponse = function () {
    try {
      if (!this.a) return null;
      if ("response" in this.a) return this.a.response;

      switch (this.m) {
        case Yh:
        case "text":
          return this.a.responseText;

        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer;
      }

      var a = this.b;
      a && a.log(Ih, "Response type " + this.m + " is not supported on this browser", void 0);
      return null;
    } catch (b) {
      return Qh(this.b, "Can not get response: " + b.message), null;
    }
  };

  function bi(a, b) {
    return b + " [" + a.P + " " + a.l + " " + ji(a) + "]";
  }

  ;
  /*
  Portions of this code are from MochiKit, received by
  The Closure Authors under the MIT license. All other code is Copyright
  2005-2009 The Closure Authors. All Rights Reserved.
  */

  function li(a) {
    var b = mi;
    this.g = [];
    this.w = b;
    this.s = a || null;
    this.f = this.a = !1;
    this.c = void 0;
    this.u = this.B = this.i = !1;
    this.h = 0;
    this.b = null;
    this.l = 0;
  }

  li.prototype.cancel = function (a) {
    if (this.a) this.c instanceof li && this.c.cancel();else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel());
      }

      this.w ? this.w.call(this.s, this) : this.u = !0;
      this.a || (a = new ni(this), oi(this), pi(this, !1, a));
    }
  };

  li.prototype.m = function (a, b) {
    this.i = !1;
    pi(this, a, b);
  };

  function pi(a, b, c) {
    a.a = !0;
    a.c = c;
    a.f = !b;
    qi(a);
  }

  function oi(a) {
    if (a.a) {
      if (!a.u) throw new ri(a);
      a.u = !1;
    }
  }

  function si(a, b) {
    ti(a, null, b, void 0);
  }

  function ti(a, b, c, d) {
    a.g.push([b, c, d]);
    a.a && qi(a);
  }

  li.prototype.then = function (a, b, c) {
    var d,
        e,
        f = new D(function (g, h) {
      d = g;
      e = h;
    });
    ti(this, d, function (g) {
      g instanceof ni ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };

  li.prototype.$goog_Thenable = !0;

  function ui(a) {
    return Pa(a.g, function (b) {
      return n(b[1]);
    });
  }

  function qi(a) {
    if (a.h && a.a && ui(a)) {
      var b = a.h,
          c = vi[b];
      c && (l.clearTimeout(c.a), delete vi[b]);
      a.h = 0;
    }

    a.b && (a.b.l--, delete a.b);
    b = a.c;

    for (var d = c = !1; a.g.length && !a.i;) {
      var e = a.g.shift(),
          f = e[0],
          g = e[1];
      e = e[2];
      if (f = a.f ? g : f) try {
        var h = f.call(e || a.s, b);
        void 0 !== h && (a.f = a.f && (h == b || h instanceof Error), a.c = b = h);
        if (Ba(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.i = !0;
      } catch (m) {
        b = m, a.f = !0, ui(a) || (c = !0);
      }
    }

    a.c = b;
    d && (h = r(a.m, a, !0), d = r(a.m, a, !1), b instanceof li ? (ti(b, h, d), b.B = !0) : b.then(h, d));
    c && (b = new wi(b), vi[b.a] = b, a.h = b.a);
  }

  function ri() {
    w.call(this);
  }

  t(ri, w);
  ri.prototype.message = "Deferred has already fired";
  ri.prototype.name = "AlreadyCalledError";

  function ni() {
    w.call(this);
  }

  t(ni, w);
  ni.prototype.message = "Deferred was canceled";
  ni.prototype.name = "CanceledError";

  function wi(a) {
    this.a = l.setTimeout(r(this.c, this), 0);
    this.b = a;
  }

  wi.prototype.c = function () {
    delete vi[this.a];
    throw this.b;
  };

  var vi = {};

  function xi(a) {
    var b = {},
        c = b.document || document,
        d = vb(a).toString(),
        e = ic(document, "SCRIPT"),
        f = {
      Tb: e,
      Ka: void 0
    },
        g = new li(f),
        h = null,
        m = null != b.timeout ? b.timeout : 5E3;
    0 < m && (h = window.setTimeout(function () {
      yi(e, !0);
      var p = new zi(Ai, "Timeout reached for loading script " + d);
      oi(g);
      pi(g, !1, p);
    }, m), f.Ka = h);

    e.onload = e.onreadystatechange = function () {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (yi(e, b.ud || !1, h), oi(g), pi(g, !0, null));
    };

    e.onerror = function () {
      yi(e, !0, h);
      var p = new zi(Bi, "Error while loading script " + d);
      oi(g);
      pi(g, !1, p);
    };

    f = b.attributes || {};
    B(f, {
      type: "text/javascript",
      charset: "UTF-8"
    });
    fc(e, f);
    Lb(e, a);
    Ci(c).appendChild(e);
    return g;
  }

  function Ci(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
  }

  function mi() {
    if (this && this.Tb) {
      var a = this.Tb;
      a && "SCRIPT" == a.tagName && yi(a, !0, this.Ka);
    }
  }

  function yi(a, b, c) {
    null != c && l.clearTimeout(c);
    a.onload = ka;
    a.onerror = ka;
    a.onreadystatechange = ka;
    b && window.setTimeout(function () {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  }

  var Bi = 0,
      Ai = 1;

  function zi(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    w.call(this, c);
    this.code = a;
  }

  t(zi, w);

  function Di(a) {
    this.f = a;
  }

  t(Di, wh);

  Di.prototype.a = function () {
    return new this.f();
  };

  Di.prototype.b = function () {
    return {};
  };

  function Ei(a, b, c) {
    this.c = a;
    a = b || {};
    this.u = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.m = a.secureTokenTimeout || Fi;
    this.g = kb(a.secureTokenHeaders || Gi);
    this.h = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.l = a.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/";
    this.i = a.firebaseTimeout || Hi;
    this.a = kb(a.firebaseHeaders || Ii);
    c && (this.a["X-Client-Version"] = c, this.g["X-Client-Version"] = c);
    c = "Node" == He();
    c = l.XMLHttpRequest || c && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.XMLHttpRequest;
    if (!c && !Ge()) throw new u("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.f = void 0;
    Ge() ? this.f = new Rh(self) : Ie() ? this.f = new Di(c) : this.f = new Bh();
    this.b = null;
  }

  var Ji,
      Ag = "idToken",
      Fi = new We(3E4, 6E4),
      Gi = {
    "Content-Type": "application/x-www-form-urlencoded"
  },
      Hi = new We(3E4, 6E4),
      Ii = {
    "Content-Type": "application/json"
  };

  function Ki(a, b) {
    b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
  }

  function Li(a, b) {
    b ? (a.a["X-Client-Version"] = b, a.g["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.g["X-Client-Version"]);
  }

  Ei.prototype.S = function () {
    return this.b;
  };

  function Mi(a, b, c, d, e, f, g) {
    re() || Ge() ? a = r(a.w, a) : (Ji || (Ji = new D(function (h, m) {
      Ni(h, m);
    })), a = r(a.s, a));
    a(b, c, d, e, f, g);
  }

  Ei.prototype.w = function (a, b, c, d, e, f) {
    if (Ge() && ("undefined" === typeof l.fetch || "undefined" === typeof l.Headers || "undefined" === typeof l.Request)) throw new u("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
    var g = new Xh(this.f);

    if (f) {
      g.g = Math.max(0, f);
      var h = setTimeout(function () {
        g.dispatchEvent("timeout");
      }, f);
    }

    md(g, "complete", function () {
      h && clearTimeout(h);
      var m = null;

      try {
        m = JSON.parse(ki(this)) || null;
      } catch (p) {
        m = null;
      }

      b && b(m);
    });
    sd(g, "ready", function () {
      h && clearTimeout(h);
      Sc(this);
    });
    sd(g, "timeout", function () {
      h && clearTimeout(h);
      Sc(this);
      b && b(null);
    });
    ai(g, a, c, d, e);
  };

  var Oi = new nb(ob, "https://apis.google.com/js/client.js?onload=%{onload}"),
      Pi = "__fcb" + Math.floor(1E6 * Math.random()).toString();

  function Ni(a, b) {
    if (((window.gapi || {}).client || {}).request) a();else {
      l[Pi] = function () {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      };

      var c = wb(Oi, {
        onload: Pi
      });
      si(xi(c), function () {
        b(Error("CORS_UNSUPPORTED"));
      });
    }
  }

  Ei.prototype.s = function (a, b, c, d, e) {
    var f = this;
    Ji.then(function () {
      window.gapi.client.setApiKey(f.c);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: "none",
        callback: function callback(h) {
          window.gapi.auth.setToken(g);
          b && b(h);
        }
      });
    }).o(function (g) {
      b && b({
        error: {
          message: g && g.message || "CORS_UNSUPPORTED"
        }
      });
    });
  };

  function Qi(a, b) {
    return new D(function (c, d) {
      "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? Mi(a, a.u + "?key=" + encodeURIComponent(a.c), function (e) {
        e ? e.error ? d(Ri(e)) : e.access_token && e.refresh_token ? c(e) : d(new u("internal-error")) : d(new u("network-request-failed"));
      }, "POST", ce(b).toString(), a.g, a.m.get()) : d(new u("internal-error"));
    });
  }

  function Si(a, b, c, d, e, f, g) {
    var h = Zd(b + c);
    H(h, "key", a.c);
    g && H(h, "cb", ta().toString());
    var m = "GET" == d;
    if (m) for (var p in e) {
      e.hasOwnProperty(p) && H(h, p, e[p]);
    }
    return new D(function (v, C) {
      Mi(a, h.toString(), function (A) {
        A ? A.error ? C(Ri(A, f || {})) : v(A) : C(new u("network-request-failed"));
      }, d, m ? void 0 : he(Se(e)), a.a, a.i.get());
    });
  }

  function Ti(a) {
    a = a.email;
    if ("string" !== typeof a || !Ae.test(a)) throw new u("invalid-email");
  }

  function Ui(a) {
    "email" in a && Ti(a);
  }

  function Vi(a, b) {
    return N(a, Wi, {
      identifier: b,
      continueUri: Pe() ? oe() : "http://localhost"
    }).then(function (c) {
      return c.signinMethods || [];
    });
  }

  function Xi(a) {
    return N(a, Yi, {}).then(function (b) {
      return b.authorizedDomains || [];
    });
  }

  function O(a) {
    if (!a[Ag]) {
      if (a.mfaPendingCredential) throw new u("multi-factor-auth-required", null, kb(a));
      throw new u("internal-error");
    }
  }

  function Zi(a) {
    if (a.phoneNumber || a.temporaryProof) {
      if (!a.phoneNumber || !a.temporaryProof) throw new u("internal-error");
    } else {
      if (!a.sessionInfo) throw new u("missing-verification-id");
      if (!a.code) throw new u("missing-verification-code");
    }
  }

  Ei.prototype.vb = function () {
    return N(this, $i, {});
  };

  Ei.prototype.xb = function (a, b) {
    return N(this, aj, {
      idToken: a,
      email: b
    });
  };

  Ei.prototype.yb = function (a, b) {
    return N(this, Zg, {
      idToken: a,
      password: b
    });
  };

  var bj = {
    displayName: "DISPLAY_NAME",
    photoUrl: "PHOTO_URL"
  };
  k = Ei.prototype;

  k.zb = function (a, b) {
    var c = {
      idToken: a
    },
        d = [];
    ib(bj, function (e, f) {
      var g = b[f];
      null === g ? d.push(e) : f in b && (c[f] = g);
    });
    d.length && (c.deleteAttribute = d);
    return N(this, aj, c);
  };

  k.rb = function (a, b) {
    a = {
      requestType: "PASSWORD_RESET",
      email: a
    };
    B(a, b);
    return N(this, cj, a);
  };

  k.sb = function (a, b) {
    a = {
      requestType: "EMAIL_SIGNIN",
      email: a
    };
    B(a, b);
    return N(this, dj, a);
  };

  k.qb = function (a, b) {
    a = {
      requestType: "VERIFY_EMAIL",
      idToken: a
    };
    B(a, b);
    return N(this, ej, a);
  };

  k.Ab = function (a, b, c) {
    a = {
      requestType: "VERIFY_AND_CHANGE_EMAIL",
      idToken: a,
      newEmail: b
    };
    B(a, c);
    return N(this, fj, a);
  };

  function kh(a, b) {
    return N(a, gj, b);
  }

  k.cb = function (a) {
    return N(this, hj, a);
  };

  function ih(a, b) {
    return N(a, ij, b).then(function (c) {
      return c.phoneSessionInfo.sessionInfo;
    });
  }

  function jj(a) {
    if (!a.phoneVerificationInfo) throw new u("internal-error");
    if (!a.phoneVerificationInfo.sessionInfo) throw new u("missing-verification-id");
    if (!a.phoneVerificationInfo.code) throw new u("missing-verification-code");
  }

  function jh(a, b) {
    return N(a, kj, b).then(function (c) {
      return c.phoneResponseInfo.sessionInfo;
    });
  }

  function lj(a, b, c) {
    return N(a, mj, {
      idToken: b,
      deleteProvider: c
    });
  }

  function nj(a) {
    if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken) throw new u("internal-error");
  }

  function oj(a, b) {
    b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Qd(a.postBody), ge(a, "nonce") && (b.nonce = a.get("nonce"))));
    return b;
  }

  function pj(a) {
    var b = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = vh(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = vh(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = vh(a)) : a.errorMessage && (b = qj(a.errorMessage));
    if (b) throw b;
    O(a);
  }

  function Cg(a, b) {
    b.returnIdpCredential = !0;
    return N(a, rj, b);
  }

  function Eg(a, b) {
    b.returnIdpCredential = !0;
    return N(a, sj, b);
  }

  function Fg(a, b) {
    b.returnIdpCredential = !0;
    b.autoCreate = !1;
    return N(a, tj, b);
  }

  function uj(a) {
    if (!a.oobCode) throw new u("invalid-action-code");
  }

  k.jb = function (a, b) {
    return N(this, vj, {
      oobCode: a,
      newPassword: b
    });
  };

  k.Pa = function (a) {
    return N(this, wj, {
      oobCode: a
    });
  };

  k.fb = function (a) {
    return N(this, xj, {
      oobCode: a
    });
  };

  var xj = {
    endpoint: "setAccountInfo",
    A: uj,
    Y: "email",
    C: !0
  },
      wj = {
    endpoint: "resetPassword",
    A: uj,
    G: function G(a) {
      var b = a.requestType;
      if (!b || !a.email && "EMAIL_SIGNIN" != b && "VERIFY_AND_CHANGE_EMAIL" != b) throw new u("internal-error");
    },
    C: !0
  },
      yj = {
    endpoint: "signupNewUser",
    A: function A(a) {
      Ti(a);
      if (!a.password) throw new u("weak-password");
    },
    G: O,
    U: !0,
    C: !0
  },
      Wi = {
    endpoint: "createAuthUri",
    C: !0
  },
      zj = {
    endpoint: "deleteAccount",
    M: ["idToken"]
  },
      mj = {
    endpoint: "setAccountInfo",
    M: ["idToken", "deleteProvider"],
    A: function A(a) {
      if ("array" != la(a.deleteProvider)) throw new u("internal-error");
    }
  },
      Wg = {
    endpoint: "emailLinkSignin",
    M: ["email", "oobCode"],
    A: Ti,
    G: O,
    U: !0,
    C: !0
  },
      Yg = {
    endpoint: "emailLinkSignin",
    M: ["idToken", "email", "oobCode"],
    A: Ti,
    G: O,
    U: !0
  },
      Aj = {
    endpoint: "accounts/mfaEnrollment:finalize",
    M: ["idToken", "phoneVerificationInfo"],
    A: jj,
    G: O,
    C: !0,
    La: !0
  },
      Bj = {
    endpoint: "accounts/mfaSignIn:finalize",
    M: ["mfaPendingCredential", "phoneVerificationInfo"],
    A: jj,
    G: O,
    C: !0,
    La: !0
  },
      Cj = {
    endpoint: "getAccountInfo"
  },
      dj = {
    endpoint: "getOobConfirmationCode",
    M: ["requestType"],
    A: function A(a) {
      if ("EMAIL_SIGNIN" != a.requestType) throw new u("internal-error");
      Ti(a);
    },
    Y: "email",
    C: !0
  },
      ej = {
    endpoint: "getOobConfirmationCode",
    M: ["idToken", "requestType"],
    A: function A(a) {
      if ("VERIFY_EMAIL" != a.requestType) throw new u("internal-error");
    },
    Y: "email",
    C: !0
  },
      fj = {
    endpoint: "getOobConfirmationCode",
    M: ["idToken", "newEmail", "requestType"],
    A: function A(a) {
      if ("VERIFY_AND_CHANGE_EMAIL" != a.requestType) throw new u("internal-error");
    },
    Y: "email",
    C: !0
  },
      cj = {
    endpoint: "getOobConfirmationCode",
    M: ["requestType"],
    A: function A(a) {
      if ("PASSWORD_RESET" != a.requestType) throw new u("internal-error");
      Ti(a);
    },
    Y: "email",
    C: !0
  },
      Yi = {
    hb: !0,
    endpoint: "getProjectConfig",
    Rb: "GET"
  },
      Dj = {
    hb: !0,
    endpoint: "getRecaptchaParam",
    Rb: "GET",
    G: function G(a) {
      if (!a.recaptchaSiteKey) throw new u("internal-error");
    }
  },
      vj = {
    endpoint: "resetPassword",
    A: uj,
    Y: "email",
    C: !0
  },
      gj = {
    endpoint: "sendVerificationCode",
    M: ["phoneNumber", "recaptchaToken"],
    Y: "sessionInfo",
    C: !0
  },
      aj = {
    endpoint: "setAccountInfo",
    M: ["idToken"],
    A: Ui,
    U: !0
  },
      Zg = {
    endpoint: "setAccountInfo",
    M: ["idToken"],
    A: function A(a) {
      Ui(a);
      if (!a.password) throw new u("weak-password");
    },
    G: O,
    U: !0
  },
      $i = {
    endpoint: "signupNewUser",
    G: O,
    U: !0,
    C: !0
  },
      ij = {
    endpoint: "accounts/mfaEnrollment:start",
    M: ["idToken", "phoneEnrollmentInfo"],
    A: function A(a) {
      if (!a.phoneEnrollmentInfo) throw new u("internal-error");
      if (!a.phoneEnrollmentInfo.phoneNumber) throw new u("missing-phone-number");
      if (!a.phoneEnrollmentInfo.recaptchaToken) throw new u("missing-app-credential");
    },
    G: function G(a) {
      if (!a.phoneSessionInfo || !a.phoneSessionInfo.sessionInfo) throw new u("internal-error");
    },
    C: !0,
    La: !0
  },
      kj = {
    endpoint: "accounts/mfaSignIn:start",
    M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
    A: function A(a) {
      if (!a.phoneSignInInfo || !a.phoneSignInInfo.recaptchaToken) throw new u("missing-app-credential");
    },
    G: function G(a) {
      if (!a.phoneResponseInfo || !a.phoneResponseInfo.sessionInfo) throw new u("internal-error");
    },
    C: !0,
    La: !0
  },
      rj = {
    endpoint: "verifyAssertion",
    A: nj,
    Wa: oj,
    G: pj,
    U: !0,
    C: !0
  },
      tj = {
    endpoint: "verifyAssertion",
    A: nj,
    Wa: oj,
    G: function G(a) {
      if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new u("user-not-found");
      if (a.errorMessage) throw qj(a.errorMessage);
      O(a);
    },
    U: !0,
    C: !0
  },
      sj = {
    endpoint: "verifyAssertion",
    A: function A(a) {
      nj(a);
      if (!a.idToken) throw new u("internal-error");
    },
    Wa: oj,
    G: pj,
    U: !0
  },
      Ej = {
    endpoint: "verifyCustomToken",
    A: function A(a) {
      if (!a.token) throw new u("invalid-custom-token");
    },
    G: O,
    U: !0,
    C: !0
  },
      Xg = {
    endpoint: "verifyPassword",
    A: function A(a) {
      Ti(a);
      if (!a.password) throw new u("wrong-password");
    },
    G: O,
    U: !0,
    C: !0
  },
      hj = {
    endpoint: "verifyPhoneNumber",
    A: Zi,
    G: O,
    C: !0
  },
      eh = {
    endpoint: "verifyPhoneNumber",
    A: function A(a) {
      if (!a.idToken) throw new u("internal-error");
      Zi(a);
    },
    G: function G(a) {
      if (a.temporaryProof) throw a.code = "credential-already-in-use", vh(a);
      O(a);
    }
  },
      fh = {
    Eb: {
      USER_NOT_FOUND: "user-not-found"
    },
    endpoint: "verifyPhoneNumber",
    A: Zi,
    G: O,
    C: !0
  },
      Fj = {
    endpoint: "accounts/mfaEnrollment:withdraw",
    M: ["idToken", "mfaEnrollmentId"],
    G: function G(a) {
      if (!!a[Ag] ^ !!a.refreshToken) throw new u("internal-error");
    },
    C: !0,
    La: !0
  };

  function N(a, b, c) {
    if (!jf(c, b.M)) return F(new u("internal-error"));
    var d = !!b.La,
        e = b.Rb || "POST",
        f;
    return E(c).then(b.A).then(function () {
      b.U && (c.returnSecureToken = !0);
      b.C && a.b && "undefined" === typeof c.tenantId && (c.tenantId = a.b);
      return d ? Si(a, a.l, b.endpoint, e, c, b.Eb, b.hb || !1) : Si(a, a.h, b.endpoint, e, c, b.Eb, b.hb || !1);
    }).then(function (g) {
      f = g;
      return b.Wa ? b.Wa(c, f) : f;
    }).then(b.G).then(function () {
      if (!b.Y) return f;
      if (!(b.Y in f)) throw new u("internal-error");
      return f[b.Y];
    });
  }

  function qj(a) {
    return Ri({
      error: {
        errors: [{
          message: a
        }],
        code: 400,
        message: a
      }
    });
  }

  function Ri(a, b) {
    var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = {
      keyInvalid: "invalid-api-key",
      ipRefererBlocked: "app-not-authorized"
    };
    if (c = d[c] ? new u(d[c]) : null) return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
      INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
      INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
      INVALID_SENDER: "invalid-sender",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      INVALID_PROVIDER_ID: "invalid-provider-id",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
      INVALID_APP_ID: "invalid-app-id",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled",
      CAPTCHA_CHECK_FAILED: "captcha-check-failed",
      INVALID_APP_CREDENTIAL: "invalid-app-credential",
      INVALID_CODE: "invalid-verification-code",
      INVALID_PHONE_NUMBER: "invalid-phone-number",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_APP_CREDENTIAL: "missing-app-credential",
      MISSING_CODE: "missing-verification-code",
      MISSING_PHONE_NUMBER: "missing-phone-number",
      MISSING_SESSION_INFO: "missing-verification-id",
      QUOTA_EXCEEDED: "quota-exceeded",
      SESSION_EXPIRED: "code-expired",
      REJECTED_CREDENTIAL: "rejected-credential",
      INVALID_CONTINUE_URI: "invalid-continue-uri",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      INVALID_CERT_HASH: "invalid-cert-hash",
      UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
      INVALID_TENANT_ID: "invalid-tenant-id",
      TENANT_ID_MISMATCH: "tenant-id-mismatch",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
      UNVERIFIED_EMAIL: "unverified-email"
    };
    B(d, b || {});
    b = (b = c.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < b.length ? b[1] : void 0;

    for (var e in d) {
      if (0 === c.indexOf(e)) return new u(d[e], b);
    }

    !b && a && (b = Re(a));
    return new u("internal-error", b);
  }

  ;

  function Gj(a) {
    this.b = a;
    this.a = null;
    this.nb = Hj(this);
  }

  function Hj(a) {
    return Ij().then(function () {
      return new D(function (b, c) {
        J("gapi.iframes.getContext")().open({
          where: document.body,
          url: a.b,
          messageHandlersFilter: J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
          attributes: {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            }
          },
          dontclear: !0
        }, function (d) {
          function e() {
            clearTimeout(f);
            b();
          }

          a.a = d;
          a.a.restyle({
            setHideOnLeave: !1
          });
          var f = setTimeout(function () {
            c(Error("Network Error"));
          }, Jj.get());
          d.ping(e).then(e, function () {
            c(Error("Network Error"));
          });
        });
      });
    });
  }

  function Kj(a, b) {
    return a.nb.then(function () {
      return new D(function (c) {
        a.a.send(b.type, b, c, J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  }

  function Lj(a, b) {
    a.nb.then(function () {
      a.a.register("authEvent", b, J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  }

  var Mj = new nb(ob, "https://apis.google.com/js/api.js?onload=%{onload}"),
      Nj = new We(3E4, 6E4),
      Jj = new We(5E3, 15E3),
      Oj = null;

  function Ij() {
    return Oj ? Oj : Oj = new D(function (a, b) {
      function c() {
        Ve();
        J("gapi.load")("gapi.iframes", {
          callback: a,
          ontimeout: function ontimeout() {
            Ve();
            b(Error("Network Error"));
          },
          timeout: Nj.get()
        });
      }

      if (J("gapi.iframes.Iframe")) a();else if (J("gapi.load")) c();else {
        var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();

        l[d] = function () {
          J("gapi.load") ? c() : b(Error("Network Error"));
        };

        d = wb(Mj, {
          onload: d
        });
        E(xi(d)).o(function () {
          b(Error("Network Error"));
        });
      }
    }).o(function (a) {
      Oj = null;
      throw a;
    });
  }

  ;

  function Pj(a, b, c) {
    this.i = a;
    this.g = b;
    this.h = c;
    this.f = null;
    this.a = $d(this.i, "/__/auth/iframe");
    H(this.a, "apiKey", this.g);
    H(this.a, "appName", this.h);
    this.b = null;
    this.c = [];
  }

  Pj.prototype.toString = function () {
    this.f ? H(this.a, "v", this.f) : fe(this.a.a, "v");
    this.b ? H(this.a, "eid", this.b) : fe(this.a.a, "eid");
    this.c.length ? H(this.a, "fw", this.c.join(",")) : fe(this.a.a, "fw");
    return this.a.toString();
  };

  function Qj(a, b, c, d, e) {
    this.s = a;
    this.m = b;
    this.c = c;
    this.u = d;
    this.i = this.g = this.l = null;
    this.a = e;
    this.h = this.f = null;
  }

  Qj.prototype.ub = function (a) {
    this.h = a;
    return this;
  };

  Qj.prototype.toString = function () {
    var a = $d(this.s, "/__/auth/handler");
    H(a, "apiKey", this.m);
    H(a, "appName", this.c);
    H(a, "authType", this.u);

    if (this.a.isOAuthProvider) {
      var b = this.a;

      try {
        var c = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(this.c).auth().ja();
      } catch (h) {
        c = null;
      }

      b.kb = c;
      H(a, "providerId", this.a.providerId);
      b = this.a;
      c = Se(b.Fb);

      for (var d in c) {
        c[d] = c[d].toString();
      }

      d = b.Oc;
      c = kb(c);

      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in c && delete c[f];
      }

      b.lb && b.kb && !c[b.lb] && (c[b.lb] = b.kb);
      jb(c) || H(a, "customParameters", Re(c));
    }

    "function" === typeof this.a.Nb && (b = this.a.Nb(), b.length && H(a, "scopes", b.join(",")));
    this.l ? H(a, "redirectUrl", this.l) : fe(a.a, "redirectUrl");
    this.g ? H(a, "eventId", this.g) : fe(a.a, "eventId");
    this.i ? H(a, "v", this.i) : fe(a.a, "v");
    if (this.b) for (var g in this.b) {
      this.b.hasOwnProperty(g) && !Yd(a, g) && H(a, g, this.b[g]);
    }
    this.h ? H(a, "tid", this.h) : fe(a.a, "tid");
    this.f ? H(a, "eid", this.f) : fe(a.a, "eid");
    g = Rj(this.c);
    g.length && H(a, "fw", g.join(","));
    return a.toString();
  };

  function Rj(a) {
    try {
      return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a).auth().Ea();
    } catch (b) {
      return [];
    }
  }

  function Sj(a, b, c, d, e) {
    this.u = a;
    this.f = b;
    this.b = c;
    this.c = d || null;
    this.h = e || null;
    this.m = this.s = this.w = null;
    this.g = [];
    this.l = this.a = null;
  }

  function Tj(a) {
    var b = oe();
    return Xi(a).then(function (c) {
      a: {
        var d = Zd(b),
            e = d.f;
        d = d.b;

        for (var f = 0; f < c.length; f++) {
          var g = c[f];
          var h = d;
          var m = e;
          0 == g.indexOf("chrome-extension://") ? h = Zd(g).b == h && "chrome-extension" == m : "http" != m && "https" != m ? h = !1 : ze.test(g) ? h = h == g : (g = g.split(".").join("\\."), h = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(h));

          if (h) {
            c = !0;
            break a;
          }
        }

        c = !1;
      }

      if (!c) throw new th(oe());
    });
  }

  function Uj(a) {
    if (a.l) return a.l;
    a.l = Be().then(function () {
      if (!a.s) {
        var b = a.c,
            c = a.h,
            d = Rj(a.b),
            e = new Pj(a.u, a.f, a.b);
        e.f = b;
        e.b = c;
        e.c = Wa(d || []);
        a.s = e.toString();
      }

      a.i = new Gj(a.s);
      Vj(a);
    });
    return a.l;
  }

  k = Sj.prototype;

  k.Lb = function (a, b, c) {
    var d = new u("popup-closed-by-user"),
        e = new u("web-storage-unsupported"),
        f = this,
        g = !1;
    return this.ka().then(function () {
      Wj(f).then(function (h) {
        h || (a && ve(a), b(e), g = !0);
      });
    }).o(function () {}).then(function () {
      if (!g) return ye(a);
    }).then(function () {
      if (!g) return Bd(c).then(function () {
        b(d);
      });
    });
  };

  k.Ub = function () {
    var a = I();
    return !Qe(a) && !Ue(a);
  };

  k.Qb = function () {
    return !1;
  };

  k.Jb = function (a, b, c, d, e, f, g, h) {
    if (!a) return F(new u("popup-blocked"));
    if (g && !Qe()) return this.ka().o(function (p) {
      ve(a);
      e(p);
    }), d(), E();
    this.a || (this.a = Tj(Xj(this)));
    var m = this;
    return this.a.then(function () {
      var p = m.ka().o(function (v) {
        ve(a);
        e(v);
        throw v;
      });
      d();
      return p;
    }).then(function () {
      nh(c);

      if (!g) {
        var p = Yj(m.u, m.f, m.b, b, c, null, f, m.c, void 0, m.h, h);
        pe(p, a);
      }
    }).o(function (p) {
      "auth/network-request-failed" == p.code && (m.a = null);
      throw p;
    });
  };

  function Xj(a) {
    a.m || (a.w = a.c ? Le(a.c, Rj(a.b)) : null, a.m = new Ei(a.f, za(a.h), a.w));
    return a.m;
  }

  k.Kb = function (a, b, c, d) {
    this.a || (this.a = Tj(Xj(this)));
    var e = this;
    return this.a.then(function () {
      nh(b);
      var f = Yj(e.u, e.f, e.b, a, b, oe(), c, e.c, void 0, e.h, d);
      pe(f);
    }).o(function (f) {
      "auth/network-request-failed" == f.code && (e.a = null);
      throw f;
    });
  };

  k.ka = function () {
    var a = this;
    return Uj(this).then(function () {
      return a.i.nb;
    }).o(function () {
      a.a = null;
      throw new u("network-request-failed");
    });
  };

  k.Xb = function () {
    return !0;
  };

  function Yj(a, b, c, d, e, f, g, h, m, p, v) {
    a = new Qj(a, b, c, d, e);
    a.l = f;
    a.g = g;
    a.i = h;
    a.b = kb(m || null);
    a.f = p;
    return a.ub(v).toString();
  }

  function Vj(a) {
    if (!a.i) throw Error("IfcHandler must be initialized!");
    Lj(a.i, function (b) {
      var c = {};

      if (b && b.authEvent) {
        var d = !1;
        b = ph(b.authEvent);

        for (c = 0; c < a.g.length; c++) {
          d = a.g[c](b) || d;
        }

        c = {};
        c.status = d ? "ACK" : "ERROR";
        return E(c);
      }

      c.status = "ERROR";
      return E(c);
    });
  }

  function Wj(a) {
    var b = {
      type: "webStorageSupport"
    };
    return Uj(a).then(function () {
      return Kj(a.i, b);
    }).then(function (c) {
      if (c && c.length && "undefined" !== typeof c[0].webStorageSupport) return c[0].webStorageSupport;
      throw Error();
    });
  }

  k.Ca = function (a) {
    this.g.push(a);
  };

  k.Qa = function (a) {
    Ua(this.g, function (b) {
      return b == a;
    });
  };

  function Zj(a) {
    this.a = a || _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative.AsyncStorage;
    if (!this.a) throw new u("internal-error", "The React Native compatibility library was not found.");
    this.type = "asyncStorage";
  }

  k = Zj.prototype;

  k.get = function (a) {
    return E(this.a.getItem(a)).then(function (b) {
      return b && Te(b);
    });
  };

  k.set = function (a, b) {
    return E(this.a.setItem(a, Re(b)));
  };

  k.T = function (a) {
    return E(this.a.removeItem(a));
  };

  k.ba = function () {};

  k.ha = function () {};

  function ak(a) {
    this.b = a;
    this.a = {};
    this.f = r(this.c, this);
  }

  var bk = [];

  function ck() {
    var a = Ge() ? self : null;
    x(bk, function (c) {
      c.b == a && (b = c);
    });

    if (!b) {
      var b = new ak(a);
      bk.push(b);
    }

    return b;
  }

  ak.prototype.c = function (a) {
    var b = a.data.eventType,
        c = a.data.eventId,
        d = this.a[b];

    if (d && 0 < d.length) {
      a.ports[0].postMessage({
        status: "ack",
        eventId: c,
        eventType: b,
        response: null
      });
      var e = [];
      x(d, function (f) {
        e.push(E().then(function () {
          return f(a.origin, a.data.data);
        }));
      });
      Ec(e).then(function (f) {
        var g = [];
        x(f, function (h) {
          g.push({
            fulfilled: h.Mb,
            value: h.value,
            reason: h.reason ? h.reason.message : void 0
          });
        });
        x(g, function (h) {
          for (var m in h) {
            "undefined" === typeof h[m] && delete h[m];
          }
        });
        a.ports[0].postMessage({
          status: "done",
          eventId: c,
          eventType: b,
          response: g
        });
      });
    }
  };

  function dk(a, b, c) {
    jb(a.a) && a.b.addEventListener("message", a.f);
    "undefined" === typeof a.a[b] && (a.a[b] = []);
    a.a[b].push(c);
  }

  ;

  function ek(a) {
    this.a = a;
  }

  ek.prototype.postMessage = function (a, b) {
    this.a.postMessage(a, b);
  };

  function fk(a) {
    this.c = a;
    this.b = !1;
    this.a = [];
  }

  function gk(a, b, c, d) {
    var e,
        f = c || {},
        g,
        h,
        m,
        p = null;
    if (a.b) return F(Error("connection_unavailable"));
    var v = d ? 800 : 50,
        C = "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
    return new D(function (A, Q) {
      C ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), C.port1.start(), h = setTimeout(function () {
        Q(Error("unsupported_event"));
      }, v), g = function g(xa) {
        xa.data.eventId === e && ("ack" === xa.data.status ? (clearTimeout(h), m = setTimeout(function () {
          Q(Error("timeout"));
        }, 3E3)) : "done" === xa.data.status ? (clearTimeout(m), "undefined" !== typeof xa.data.response ? A(xa.data.response) : Q(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(m), Q(Error("invalid_response"))));
      }, p = {
        messageChannel: C,
        onMessage: g
      }, a.a.push(p), C.port1.addEventListener("message", g), a.c.postMessage({
        eventType: b,
        eventId: e,
        data: f
      }, [C.port2])) : Q(Error("connection_unavailable"));
    }).then(function (A) {
      hk(a, p);
      return A;
    }).o(function (A) {
      hk(a, p);
      throw A;
    });
  }

  function hk(a, b) {
    if (b) {
      var c = b.messageChannel,
          d = b.onMessage;
      c && (c.port1.removeEventListener("message", d), c.port1.close());
      Ua(a.a, function (e) {
        return e == b;
      });
    }
  }

  fk.prototype.close = function () {
    for (; 0 < this.a.length;) {
      hk(this, this.a[0]);
    }

    this.b = !0;
  };

  function ik() {
    if (!jk()) throw new u("web-storage-unsupported");
    this.c = {};
    this.a = [];
    this.b = 0;
    this.u = l.indexedDB;
    this.type = "indexedDB";
    this.g = this.l = this.f = this.i = null;
    this.s = !1;
    this.h = null;
    var a = this;
    Ge() && self ? (this.l = ck(), dk(this.l, "keyChanged", function (b, c) {
      return kk(a).then(function (d) {
        0 < d.length && x(a.a, function (e) {
          e(d);
        });
        return {
          keyProcessed: Sa(d, c.key)
        };
      });
    }), dk(this.l, "ping", function () {
      return E(["keyChanged"]);
    })) : bf().then(function (b) {
      if (a.h = b) a.g = new fk(new ek(b)), gk(a.g, "ping", null, !0).then(function (c) {
        c[0].fulfilled && Sa(c[0].value, "keyChanged") && (a.s = !0);
      }).o(function () {});
    });
  }

  var lk;

  function mk(a) {
    return new D(function (b, c) {
      var d = a.u.deleteDatabase("firebaseLocalStorageDb");

      d.onsuccess = function () {
        b();
      };

      d.onerror = function (e) {
        c(Error(e.target.error));
      };
    });
  }

  function nk(a) {
    return new D(function (b, c) {
      var d = a.u.open("firebaseLocalStorageDb", 1);

      d.onerror = function (e) {
        try {
          e.preventDefault();
        } catch (f) {}

        c(Error(e.target.error));
      };

      d.onupgradeneeded = function (e) {
        e = e.target.result;

        try {
          e.createObjectStore("firebaseLocalStorage", {
            keyPath: "fbase_key"
          });
        } catch (f) {
          c(f);
        }
      };

      d.onsuccess = function (e) {
        e = e.target.result;
        e.objectStoreNames.contains("firebaseLocalStorage") ? b(e) : mk(a).then(function () {
          return nk(a);
        }).then(function (f) {
          b(f);
        }).o(function (f) {
          c(f);
        });
      };
    });
  }

  function ok(a) {
    a.m || (a.m = nk(a));
    return a.m;
  }

  function jk() {
    try {
      return !!l.indexedDB;
    } catch (a) {
      return !1;
    }
  }

  function pk(a) {
    return a.objectStore("firebaseLocalStorage");
  }

  function qk(a, b) {
    return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly");
  }

  function rk(a) {
    return new D(function (b, c) {
      a.onsuccess = function (d) {
        d && d.target ? b(d.target.result) : b();
      };

      a.onerror = function (d) {
        c(d.target.error);
      };
    });
  }

  k = ik.prototype;

  k.set = function (a, b) {
    var c = !1,
        d,
        e = this;
    return ok(this).then(function (f) {
      d = f;
      f = pk(qk(d, !0));
      return rk(f.get(a));
    }).then(function (f) {
      var g = pk(qk(d, !0));
      if (f) return f.value = b, rk(g.put(f));
      e.b++;
      c = !0;
      f = {};
      f.fbase_key = a;
      f.value = b;
      return rk(g.add(f));
    }).then(function () {
      e.c[a] = b;
      return sk(e, a);
    }).ma(function () {
      c && e.b--;
    });
  };

  function sk(a, b) {
    return a.g && a.h && af() === a.h ? gk(a.g, "keyChanged", {
      key: b
    }, a.s).then(function () {}).o(function () {}) : E();
  }

  k.get = function (a) {
    return ok(this).then(function (b) {
      return rk(pk(qk(b, !1)).get(a));
    }).then(function (b) {
      return b && b.value;
    });
  };

  k.T = function (a) {
    var b = !1,
        c = this;
    return ok(this).then(function (d) {
      b = !0;
      c.b++;
      return rk(pk(qk(d, !0))["delete"](a));
    }).then(function () {
      delete c.c[a];
      return sk(c, a);
    }).ma(function () {
      b && c.b--;
    });
  };

  function kk(a) {
    return ok(a).then(function (b) {
      var c = pk(qk(b, !1));
      return c.getAll ? rk(c.getAll()) : new D(function (d, e) {
        var f = [],
            g = c.openCursor();

        g.onsuccess = function (h) {
          (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
        };

        g.onerror = function (h) {
          e(h.target.error);
        };
      });
    }).then(function (b) {
      var c = {},
          d = [];

      if (0 == a.b) {
        for (d = 0; d < b.length; d++) {
          c[b[d].fbase_key] = b[d].value;
        }

        d = qe(a.c, c);
        a.c = c;
      }

      return d;
    });
  }

  k.ba = function (a) {
    0 == this.a.length && tk(this);
    this.a.push(a);
  };

  k.ha = function (a) {
    Ua(this.a, function (b) {
      return b == a;
    });
    0 == this.a.length && uk(this);
  };

  function tk(a) {
    function b() {
      a.f = setTimeout(function () {
        a.i = kk(a).then(function (c) {
          0 < c.length && x(a.a, function (d) {
            d(c);
          });
        }).then(function () {
          b();
        }).o(function (c) {
          "STOP_EVENT" != c.message && b();
        });
      }, 800);
    }

    uk(a);
    b();
  }

  function uk(a) {
    a.i && a.i.cancel("STOP_EVENT");
    a.f && (clearTimeout(a.f), a.f = null);
  }

  ;

  function vk(a) {
    var b = this,
        c = null;
    this.a = [];
    this.type = "indexedDB";
    this.c = a;
    this.b = E().then(function () {
      if (jk()) {
        var d = Ne(),
            e = "__sak" + d;
        lk || (lk = new ik());
        c = lk;
        return c.set(e, d).then(function () {
          return c.get(e);
        }).then(function (f) {
          if (f !== d) throw Error("indexedDB not supported!");
          return c.T(e);
        }).then(function () {
          return c;
        }).o(function () {
          return b.c;
        });
      }

      return b.c;
    }).then(function (d) {
      b.type = d.type;
      d.ba(function (e) {
        x(b.a, function (f) {
          f(e);
        });
      });
      return d;
    });
  }

  k = vk.prototype;

  k.get = function (a) {
    return this.b.then(function (b) {
      return b.get(a);
    });
  };

  k.set = function (a, b) {
    return this.b.then(function (c) {
      return c.set(a, b);
    });
  };

  k.T = function (a) {
    return this.b.then(function (b) {
      return b.T(a);
    });
  };

  k.ba = function (a) {
    this.a.push(a);
  };

  k.ha = function (a) {
    Ua(this.a, function (b) {
      return b == a;
    });
  };

  function wk() {
    this.a = {};
    this.type = "inMemory";
  }

  k = wk.prototype;

  k.get = function (a) {
    return E(this.a[a]);
  };

  k.set = function (a, b) {
    this.a[a] = b;
    return E();
  };

  k.T = function (a) {
    delete this.a[a];
    return E();
  };

  k.ba = function () {};

  k.ha = function () {};

  function xk() {
    if (!yk()) {
      if ("Node" == He()) throw new u("internal-error", "The LocalStorage compatibility library was not found.");
      throw new u("web-storage-unsupported");
    }

    this.a = zk() || _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;
    this.type = "localStorage";
  }

  function zk() {
    try {
      var a = l.localStorage,
          b = Ne();
      a && (a.setItem(b, "1"), a.removeItem(b));
      return a;
    } catch (c) {
      return null;
    }
  }

  function yk() {
    var a = "Node" == He();
    a = zk() || a && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  }

  k = xk.prototype;

  k.get = function (a) {
    var b = this;
    return E().then(function () {
      var c = b.a.getItem(a);
      return Te(c);
    });
  };

  k.set = function (a, b) {
    var c = this;
    return E().then(function () {
      var d = Re(b);
      null === d ? c.T(a) : c.a.setItem(a, d);
    });
  };

  k.T = function (a) {
    var b = this;
    return E().then(function () {
      b.a.removeItem(a);
    });
  };

  k.ba = function (a) {
    l.window && jd(l.window, "storage", a);
  };

  k.ha = function (a) {
    l.window && td(l.window, "storage", a);
  };

  function Ak() {
    this.type = "nullStorage";
  }

  k = Ak.prototype;

  k.get = function () {
    return E(null);
  };

  k.set = function () {
    return E();
  };

  k.T = function () {
    return E();
  };

  k.ba = function () {};

  k.ha = function () {};

  function Bk() {
    if (!Ck()) {
      if ("Node" == He()) throw new u("internal-error", "The SessionStorage compatibility library was not found.");
      throw new u("web-storage-unsupported");
    }

    this.a = Dk() || _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;
    this.type = "sessionStorage";
  }

  function Dk() {
    try {
      var a = l.sessionStorage,
          b = Ne();
      a && (a.setItem(b, "1"), a.removeItem(b));
      return a;
    } catch (c) {
      return null;
    }
  }

  function Ck() {
    var a = "Node" == He();
    a = Dk() || a && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  }

  k = Bk.prototype;

  k.get = function (a) {
    var b = this;
    return E().then(function () {
      var c = b.a.getItem(a);
      return Te(c);
    });
  };

  k.set = function (a, b) {
    var c = this;
    return E().then(function () {
      var d = Re(b);
      null === d ? c.T(a) : c.a.setItem(a, d);
    });
  };

  k.T = function (a) {
    var b = this;
    return E().then(function () {
      b.a.removeItem(a);
    });
  };

  k.ba = function () {};

  k.ha = function () {};

  function Ek() {
    var a = {};
    a.Browser = Fk;
    a.Node = Gk;
    a.ReactNative = Hk;
    a.Worker = Ik;
    this.a = a[He()];
  }

  var Jk,
      Fk = {
    F: xk,
    $a: Bk
  },
      Gk = {
    F: xk,
    $a: Bk
  },
      Hk = {
    F: Zj,
    $a: Ak
  },
      Ik = {
    F: xk,
    $a: Ak
  };
  /*
  Copyright 2017 Google LLC
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var Kk = {
    od: "local",
    NONE: "none",
    qd: "session"
  };

  function Lk(a) {
    var b = new u("invalid-persistence-type"),
        c = new u("unsupported-persistence-type");

    a: {
      for (d in Kk) {
        if (Kk[d] == a) {
          var d = !0;
          break a;
        }
      }

      d = !1;
    }

    if (!d || "string" !== typeof a) throw b;

    switch (He()) {
      case "ReactNative":
        if ("session" === a) throw c;
        break;

      case "Node":
        if ("none" !== a) throw c;
        break;

      case "Worker":
        if ("session" === a || !jk() && "none" !== a) throw c;
        break;

      default:
        if (!Me() && "none" !== a) throw c;
    }
  }

  function Mk() {
    var a = !Ue(I()) && Fe() ? !0 : !1,
        b = Qe(),
        c = Me();
    this.m = a;
    this.h = b;
    this.l = c;
    this.a = {};
    Jk || (Jk = new Ek());
    a = Jk;

    try {
      this.g = !ne() && $e() || !l.indexedDB ? new a.a.F() : new vk(Ge() ? new wk() : new a.a.F());
    } catch (d) {
      this.g = new wk(), this.h = !0;
    }

    try {
      this.i = new a.a.$a();
    } catch (d) {
      this.i = new wk();
    }

    this.u = new wk();
    this.f = r(this.Vb, this);
    this.b = {};
  }

  var Nk;

  function Ok() {
    Nk || (Nk = new Mk());
    return Nk;
  }

  function Pk(a, b) {
    switch (b) {
      case "session":
        return a.i;

      case "none":
        return a.u;

      default:
        return a.g;
    }
  }

  function Qk(a, b) {
    return "firebase:" + a.name + (b ? ":" + b : "");
  }

  function Rk(a, b, c) {
    var d = Qk(b, c),
        e = Pk(a, b.F);
    return a.get(b, c).then(function (f) {
      var g = null;

      try {
        g = Te(l.localStorage.getItem(d));
      } catch (h) {}

      if (g && !f) return l.localStorage.removeItem(d), a.set(b, g, c);
      g && f && "localStorage" != e.type && l.localStorage.removeItem(d);
    });
  }

  k = Mk.prototype;

  k.get = function (a, b) {
    return Pk(this, a.F).get(Qk(a, b));
  };

  function Sk(a, b, c) {
    c = Qk(b, c);
    "local" == b.F && (a.b[c] = null);
    return Pk(a, b.F).T(c);
  }

  k.set = function (a, b, c) {
    var d = Qk(a, c),
        e = this,
        f = Pk(this, a.F);
    return f.set(d, b).then(function () {
      return f.get(d);
    }).then(function (g) {
      "local" == a.F && (e.b[d] = g);
    });
  };

  k.addListener = function (a, b, c) {
    a = Qk(a, b);
    this.l && (this.b[a] = l.localStorage.getItem(a));
    jb(this.a) && (Pk(this, "local").ba(this.f), this.h || (ne() || !$e()) && l.indexedDB || !this.l || Tk(this));
    this.a[a] || (this.a[a] = []);
    this.a[a].push(c);
  };

  k.removeListener = function (a, b, c) {
    a = Qk(a, b);
    this.a[a] && (Ua(this.a[a], function (d) {
      return d == c;
    }), 0 == this.a[a].length && delete this.a[a]);
    jb(this.a) && (Pk(this, "local").ha(this.f), Uk(this));
  };

  function Tk(a) {
    Uk(a);
    a.c = setInterval(function () {
      for (var b in a.a) {
        var c = l.localStorage.getItem(b),
            d = a.b[b];
        c != d && (a.b[b] = c, c = new Yc({
          type: "storage",
          key: b,
          target: window,
          oldValue: d,
          newValue: c,
          a: !0
        }), a.Vb(c));
      }
    }, 1E3);
  }

  function Uk(a) {
    a.c && (clearInterval(a.c), a.c = null);
  }

  k.Vb = function (a) {
    if (a && a.f) {
      var b = a.a.key;
      if (null == b) for (var c in this.a) {
        var d = this.b[c];
        "undefined" === typeof d && (d = null);
        var e = l.localStorage.getItem(c);
        e !== d && (this.b[c] = e, this.ib(c));
      } else if (0 == b.indexOf("firebase:") && this.a[b]) {
        "undefined" !== typeof a.a.a ? Pk(this, "local").ha(this.f) : Uk(this);
        if (this.m) if (c = l.localStorage.getItem(b), d = a.a.newValue, d !== c) null !== d ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);else if (this.b[b] === d && "undefined" === typeof a.a.a) return;
        var f = this;

        c = function c() {
          if ("undefined" !== typeof a.a.a || f.b[b] !== l.localStorage.getItem(b)) f.b[b] = l.localStorage.getItem(b), f.ib(b);
        };

        Sb && cc && 10 == cc && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
      }
    } else x(a, r(this.ib, this));
  };

  k.ib = function (a) {
    this.a[a] && x(this.a[a], function (b) {
      b();
    });
  };

  function Vk(a) {
    this.a = a;
    this.b = Ok();
  }

  var Wk = {
    name: "authEvent",
    F: "local"
  };

  function Xk(a) {
    return a.b.get(Wk, a.a).then(function (b) {
      return ph(b);
    });
  }

  ;

  function Yk() {
    this.a = Ok();
  }

  ;

  function Zk() {
    this.b = -1;
  }

  ;

  function $k(a, b) {
    this.b = al;
    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
    this.g = this.c = 0;
    this.a = [];
    this.i = a;
    this.h = b;
    this.l = l.Int32Array ? new Int32Array(64) : Array(64);
    void 0 === bl && (l.Int32Array ? bl = new Int32Array(cl) : bl = cl);
    this.reset();
  }

  var bl;
  t($k, Zk);

  for (var al = 64, dl = al - 1, el = [], fl = 0; fl < dl; fl++) {
    el[fl] = 0;
  }

  var gl = Va(128, el);

  $k.prototype.reset = function () {
    this.g = this.c = 0;
    this.a = l.Int32Array ? new Int32Array(this.h) : Wa(this.h);
  };

  function hl(a) {
    for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length;) {
      c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
    }

    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
          g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b] = f + g | 0;
    }

    d = a.a[0] | 0;
    e = a.a[1] | 0;
    var h = a.a[2] | 0,
        m = a.a[3] | 0,
        p = a.a[4] | 0,
        v = a.a[5] | 0,
        C = a.a[6] | 0;
    f = a.a[7] | 0;

    for (b = 0; 64 > b; b++) {
      var A = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
      g = p & v ^ ~p & C;
      f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0;
      g = g + (bl[b] | 0) | 0;
      g = f + (g + (c[b] | 0) | 0) | 0;
      f = C;
      C = v;
      v = p;
      p = m + g | 0;
      m = h;
      h = e;
      e = d;
      d = g + A | 0;
    }

    a.a[0] = a.a[0] + d | 0;
    a.a[1] = a.a[1] + e | 0;
    a.a[2] = a.a[2] + h | 0;
    a.a[3] = a.a[3] + m | 0;
    a.a[4] = a.a[4] + p | 0;
    a.a[5] = a.a[5] + v | 0;
    a.a[6] = a.a[6] + C | 0;
    a.a[7] = a.a[7] + f | 0;
  }

  function il(a, b, c) {
    void 0 === c && (c = b.length);
    var d = 0,
        e = a.c;
    if ("string" === typeof b) for (; d < c;) {
      a.f[e++] = b.charCodeAt(d++), e == a.b && (hl(a), e = 0);
    } else if (ma(b)) for (; d < c;) {
      var f = b[d++];
      if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0))) throw Error("message must be a byte array");
      a.f[e++] = f;
      e == a.b && (hl(a), e = 0);
    } else throw Error("message must be string or array");
    a.c = e;
    a.g += c;
  }

  var cl = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

  function jl() {
    $k.call(this, 8, kl);
  }

  t(jl, $k);
  var kl = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

  function ll(a, b, c, d, e) {
    this.u = a;
    this.i = b;
    this.l = c;
    this.m = d || null;
    this.s = e || null;
    this.h = b + ":" + c;
    this.w = new Yk();
    this.g = new Vk(this.h);
    this.f = null;
    this.b = [];
    this.a = this.c = null;
  }

  function ml(a) {
    return new u("invalid-cordova-configuration", a);
  }

  k = ll.prototype;

  k.ka = function () {
    return this.Ga ? this.Ga : this.Ga = Ce().then(function () {
      if ("function" !== typeof J("universalLinks.subscribe", l)) throw ml("cordova-universal-links-plugin-fix is not installed");
      if ("undefined" === typeof J("BuildInfo.packageName", l)) throw ml("cordova-plugin-buildinfo is not installed");
      if ("function" !== typeof J("cordova.plugins.browsertab.openUrl", l)) throw ml("cordova-plugin-browsertab is not installed");
      if ("function" !== typeof J("cordova.InAppBrowser.open", l)) throw ml("cordova-plugin-inappbrowser is not installed");
    }, function () {
      throw new u("cordova-not-ready");
    });
  };

  function nl() {
    for (var a = 20, b = []; 0 < a;) {
      b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
    }

    return b.join("");
  }

  function ol(a) {
    var b = new jl();
    il(b, a);
    a = [];
    var c = 8 * b.g;
    56 > b.c ? il(b, gl, 56 - b.c) : il(b, gl, b.b - (b.c - 56));

    for (var d = 63; 56 <= d; d--) {
      b.f[d] = c & 255, c /= 256;
    }

    hl(b);

    for (d = c = 0; d < b.i; d++) {
      for (var e = 24; 0 <= e; e -= 8) {
        a[c++] = b.a[d] >> e & 255;
      }
    }

    return $f(a);
  }

  k.Lb = function (a, b) {
    b(new u("operation-not-supported-in-this-environment"));
    return E();
  };

  k.Jb = function () {
    return F(new u("operation-not-supported-in-this-environment"));
  };

  k.Xb = function () {
    return !1;
  };

  k.Ub = function () {
    return !0;
  };

  k.Qb = function () {
    return !0;
  };

  k.Kb = function (a, b, c, d) {
    if (this.c) return F(new u("redirect-operation-pending"));
    var e = this,
        f = l.document,
        g = null,
        h = null,
        m = null,
        p = null;
    return this.c = E().then(function () {
      nh(b);
      return pl(e);
    }).then(function () {
      return ql(e, a, b, c, d);
    }).then(function () {
      return new D(function (v, C) {
        h = function h() {
          var A = J("cordova.plugins.browsertab.close", l);
          v();
          "function" === typeof A && A();
          e.a && "function" === typeof e.a.close && (e.a.close(), e.a = null);
          return !1;
        };

        e.Ca(h);

        m = function m() {
          g || (g = Bd(2E3).then(function () {
            C(new u("redirect-cancelled-by-user"));
          }));
        };

        p = function p() {
          Xe() && m();
        };

        f.addEventListener("resume", m, !1);
        I().toLowerCase().match(/android/) || f.addEventListener("visibilitychange", p, !1);
      }).o(function (v) {
        return rl(e).then(function () {
          throw v;
        });
      });
    }).ma(function () {
      m && f.removeEventListener("resume", m, !1);
      p && f.removeEventListener("visibilitychange", p, !1);
      g && g.cancel();
      h && e.Qa(h);
      e.c = null;
    });
  };

  function ql(a, b, c, d, e) {
    var f = nl(),
        g = new oh(b, d, null, f, new u("no-auth-event"), null, e),
        h = J("BuildInfo.packageName", l);
    if ("string" !== typeof h) throw new u("invalid-cordova-configuration");
    var m = J("BuildInfo.displayName", l),
        p = {};
    if (I().toLowerCase().match(/iphone|ipad|ipod/)) p.ibi = h;else if (I().toLowerCase().match(/android/)) p.apn = h;else return F(new u("operation-not-supported-in-this-environment"));
    m && (p.appDisplayName = m);
    f = ol(f);
    p.sessionId = f;
    var v = Yj(a.u, a.i, a.l, b, c, null, d, a.m, p, a.s, e);
    return a.ka().then(function () {
      var C = a.h;
      return a.w.a.set(Wk, g.v(), C);
    }).then(function () {
      var C = J("cordova.plugins.browsertab.isAvailable", l);
      if ("function" !== typeof C) throw new u("invalid-cordova-configuration");
      var A = null;
      C(function (Q) {
        if (Q) {
          A = J("cordova.plugins.browsertab.openUrl", l);
          if ("function" !== typeof A) throw new u("invalid-cordova-configuration");
          A(v);
        } else {
          A = J("cordova.InAppBrowser.open", l);
          if ("function" !== typeof A) throw new u("invalid-cordova-configuration");
          Q = I();
          a.a = A(v, Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
        }
      });
    });
  }

  function sl(a, b) {
    for (var c = 0; c < a.b.length; c++) {
      try {
        a.b[c](b);
      } catch (d) {}
    }
  }

  function pl(a) {
    a.f || (a.f = a.ka().then(function () {
      return new D(function (b) {
        function c(d) {
          b(d);
          a.Qa(c);
          return !1;
        }

        a.Ca(c);
        tl(a);
      });
    }));
    return a.f;
  }

  function rl(a) {
    var b = null;
    return Xk(a.g).then(function (c) {
      b = c;
      c = a.g;
      return Sk(c.b, Wk, c.a);
    }).then(function () {
      return b;
    });
  }

  function tl(a) {
    function b(g) {
      d = !0;
      e && e.cancel();
      rl(a).then(function (h) {
        var m = c;

        if (h && g && g.url) {
          var p = null;
          m = ug(g.url);
          -1 != m.indexOf("/__/auth/callback") && (p = Zd(m), p = Te(Yd(p, "firebaseError") || null), p = (p = "object" === _typeof(p) ? wa(p) : null) ? new oh(h.c, h.b, null, null, p, null, h.S()) : new oh(h.c, h.b, m, h.f, null, null, h.S()));
          m = p || c;
        }

        sl(a, m);
      });
    }

    var c = new oh("unknown", null, null, null, new u("no-auth-event")),
        d = !1,
        e = Bd(500).then(function () {
      return rl(a).then(function () {
        d || sl(a, c);
      });
    }),
        f = l.handleOpenURL;

    l.handleOpenURL = function (g) {
      0 == g.toLowerCase().indexOf(J("BuildInfo.packageName", l).toLowerCase() + "://") && b({
        url: g
      });
      if ("function" === typeof f) try {
        f(g);
      } catch (h) {
        console.error(h);
      }
    };

    rh || (rh = new qh());
    sh(b);
  }

  k.Ca = function (a) {
    this.b.push(a);
    pl(this).o(function (b) {
      "auth/invalid-cordova-configuration" === b.code && (b = new oh("unknown", null, null, null, new u("no-auth-event")), a(b));
    });
  };

  k.Qa = function (a) {
    Ua(this.b, function (b) {
      return b == a;
    });
  };

  function ul(a) {
    this.a = a;
    this.b = Ok();
  }

  var vl = {
    name: "pendingRedirect",
    F: "session"
  };

  function wl(a) {
    return a.b.set(vl, "pending", a.a);
  }

  function xl(a) {
    return Sk(a.b, vl, a.a);
  }

  function yl(a) {
    return a.b.get(vl, a.a).then(function (b) {
      return "pending" == b;
    });
  }

  ;

  function zl(a, b, c) {
    this.i = {};
    this.w = 0;
    this.D = a;
    this.u = b;
    this.m = c;
    this.h = [];
    this.f = !1;
    this.l = r(this.s, this);
    this.b = new Al();
    this.B = new Bl();
    this.g = new ul(this.u + ":" + this.m);
    this.c = {};
    this.c.unknown = this.b;
    this.c.signInViaRedirect = this.b;
    this.c.linkViaRedirect = this.b;
    this.c.reauthViaRedirect = this.b;
    this.c.signInViaPopup = this.B;
    this.c.linkViaPopup = this.B;
    this.c.reauthViaPopup = this.B;
    this.a = Cl(this.D, this.u, this.m, Aa);
  }

  function Cl(a, b, c, d) {
    var e = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION || null;
    return De() ? new ll(a, b, c, e, d) : new Sj(a, b, c, e, d);
  }

  zl.prototype.reset = function () {
    this.f = !1;
    this.a.Qa(this.l);
    this.a = Cl(this.D, this.u, this.m);
    this.i = {};
  };

  function Dl(a) {
    a.f || (a.f = !0, a.a.Ca(a.l));
    var b = a.a;
    return a.a.ka().o(function (c) {
      a.a == b && a.reset();
      throw c;
    });
  }

  function El(a) {
    a.a.Ub() && Dl(a).o(function (b) {
      var c = new oh("unknown", null, null, null, new u("operation-not-supported-in-this-environment"));
      Fl(b) && a.s(c);
    });
    a.a.Qb() || Gl(a.b);
  }

  function Hl(a, b) {
    Sa(a.h, b) || a.h.push(b);
    a.f || yl(a.g).then(function (c) {
      c ? xl(a.g).then(function () {
        Dl(a).o(function (d) {
          var e = new oh("unknown", null, null, null, new u("operation-not-supported-in-this-environment"));
          Fl(d) && a.s(e);
        });
      }) : El(a);
    }).o(function () {
      El(a);
    });
  }

  function Il(a, b) {
    Ua(a.h, function (c) {
      return c == b;
    });
  }

  zl.prototype.s = function (a) {
    if (!a) throw new u("invalid-auth-event");
    6E5 <= ta() - this.w && (this.i = {}, this.w = 0);
    if (a && a.getUid() && this.i.hasOwnProperty(a.getUid())) return !1;

    for (var b = !1, c = 0; c < this.h.length; c++) {
      var d = this.h[c];

      if (d.Cb(a.c, a.b)) {
        if (b = this.c[a.c]) b.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = !0, this.w = ta());
        b = !0;
        break;
      }
    }

    Gl(this.b);
    return b;
  };

  var Jl = new We(2E3, 1E4),
      Kl = new We(3E4, 6E4);

  zl.prototype.pa = function () {
    return this.b.pa();
  };

  function Ll(a, b, c, d, e, f, g) {
    return a.a.Jb(b, c, d, function () {
      a.f || (a.f = !0, a.a.Ca(a.l));
    }, function () {
      a.reset();
    }, e, f, g);
  }

  function Fl(a) {
    return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
  }

  function Ml(a, b, c, d, e) {
    var f;
    return wl(a.g).then(function () {
      return a.a.Kb(b, c, d, e).o(function (g) {
        if (Fl(g)) throw new u("operation-not-supported-in-this-environment");
        f = g;
        return xl(a.g).then(function () {
          throw f;
        });
      }).then(function () {
        return a.a.Xb() ? new D(function () {}) : xl(a.g).then(function () {
          return a.pa();
        }).then(function () {}).o(function () {});
      });
    });
  }

  function Nl(a, b, c, d, e) {
    return a.a.Lb(d, function (f) {
      b.la(c, null, f, e);
    }, Jl.get());
  }

  var Ol = {};

  function Pl(a, b, c) {
    var d = b + ":" + c;
    Ol[d] || (Ol[d] = new zl(a, b, c));
    return Ol[d];
  }

  function Al() {
    this.b = null;
    this.f = [];
    this.c = [];
    this.a = null;
    this.i = this.g = !1;
  }

  Al.prototype.reset = function () {
    this.b = null;
    this.a && (this.a.cancel(), this.a = null);
  };

  Al.prototype.h = function (a, b) {
    if (a) {
      this.reset();
      this.g = !0;
      var c = a.c,
          d = a.b,
          e = a.a && "auth/web-storage-unsupported" == a.a.code,
          f = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
      this.i = !(!e && !f);
      "unknown" != c || e || f ? a.a ? (Ql(this, !0, null, a.a), E()) : b.Da(c, d) ? Rl(this, a, b) : F(new u("invalid-auth-event")) : (Ql(this, !1, null, null), E());
    } else F(new u("invalid-auth-event"));
  };

  function Gl(a) {
    a.g || (a.g = !0, Ql(a, !1, null, null));
  }

  function Sl(a) {
    a.g && !a.i && Ql(a, !1, null, null);
  }

  function Rl(a, b, c) {
    c = c.Da(b.c, b.b);
    var d = b.g,
        e = b.f,
        f = b.i,
        g = b.S(),
        h = !!b.c.match(/Redirect$/);
    c(d, e, g, f).then(function (m) {
      Ql(a, h, m, null);
    }).o(function (m) {
      Ql(a, h, null, m);
    });
  }

  function Tl(a, b) {
    a.b = function () {
      return F(b);
    };

    if (a.c.length) for (var c = 0; c < a.c.length; c++) {
      a.c[c](b);
    }
  }

  function Ul(a, b) {
    a.b = function () {
      return E(b);
    };

    if (a.f.length) for (var c = 0; c < a.f.length; c++) {
      a.f[c](b);
    }
  }

  function Ql(a, b, c, d) {
    b ? d ? Tl(a, d) : Ul(a, c) : Ul(a, {
      user: null
    });
    a.f = [];
    a.c = [];
  }

  Al.prototype.pa = function () {
    var a = this;
    return new D(function (b, c) {
      a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), Vl(a));
    });
  };

  function Vl(a) {
    var b = new u("timeout");
    a.a && a.a.cancel();
    a.a = Bd(Kl.get()).then(function () {
      a.b || (a.g = !0, Ql(a, !0, null, b));
    });
  }

  function Bl() {}

  Bl.prototype.h = function (a, b) {
    if (a) {
      var c = a.c,
          d = a.b;
      a.a ? (b.la(a.c, null, a.a, a.b), E()) : b.Da(c, d) ? Wl(a, b) : F(new u("invalid-auth-event"));
    } else F(new u("invalid-auth-event"));
  };

  function Wl(a, b) {
    var c = a.b,
        d = a.c;
    b.Da(d, c)(a.g, a.f, a.S(), a.i).then(function (e) {
      b.la(d, e, null, c);
    }).o(function (e) {
      b.la(d, null, e, c);
    });
  }

  ;

  function Xl() {
    this.Bb = !1;
    Object.defineProperty(this, "appVerificationDisabled", {
      get: function get() {
        return this.Bb;
      },
      set: function set(a) {
        this.Bb = a;
      },
      enumerable: !1
    });
  }

  ;

  function Yl(a, b) {
    this.a = b;
    K(this, "verificationId", a);
  }

  Yl.prototype.confirm = function (a) {
    a = lh(this.verificationId, a);
    return this.a(a);
  };

  function Zl(a, b, c, d) {
    return new hh(a).cb(b, c).then(function (e) {
      return new Yl(e, d);
    });
  }

  ;

  function $l(a) {
    var b = fg(a);
    if (!(b && b.exp && b.auth_time && b.iat)) throw new u("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
    L(this, {
      token: a,
      expirationTime: Ze(1E3 * b.exp),
      authTime: Ze(1E3 * b.auth_time),
      issuedAtTime: Ze(1E3 * b.iat),
      signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
      signInSecondFactor: b.firebase && b.firebase.sign_in_second_factor ? b.firebase.sign_in_second_factor : null,
      claims: b
    });
  }

  ;

  function am(a, b, c) {
    var d = b && b[bm];
    if (!d) throw new u("argument-error", "Internal assert: Invalid MultiFactorResolver");
    this.a = a;
    this.f = kb(b);
    this.g = c;
    this.c = new vg(null, d);
    this.b = [];
    var e = this;
    x(b[cm] || [], function (f) {
      (f = qf(f)) && e.b.push(f);
    });
    K(this, "auth", this.a);
    K(this, "session", this.c);
    K(this, "hints", this.b);
  }

  var cm = "mfaInfo",
      bm = "mfaPendingCredential";

  am.prototype.Pc = function (a) {
    var b = this;
    return a.ob(this.a.b, this.c).then(function (c) {
      var d = kb(b.f);
      delete d[cm];
      delete d[bm];
      B(d, c);
      return b.g(d);
    });
  };

  function dm(a, b, c, d) {
    u.call(this, "multi-factor-auth-required", d, b);
    this.b = new am(a, b, c);
    K(this, "resolver", this.b);
  }

  t(dm, u);

  function em(a, b, c) {
    if (a && q(a.serverResponse) && "auth/multi-factor-auth-required" === a.code) try {
      return new dm(b, a.serverResponse, c, a.message);
    } catch (d) {}
    return null;
  }

  ;

  function fm() {}

  fm.prototype.ob = function (a, b, c) {
    return b.type == wg ? gm(this, a, b, c) : hm(this, a, b);
  };

  function gm(a, b, c, d) {
    return c.Fa().then(function (e) {
      e = {
        idToken: e
      };
      "undefined" !== typeof d && (e.displayName = d);
      B(e, {
        phoneVerificationInfo: dh(a.a)
      });
      return N(b, Aj, e);
    });
  }

  function hm(a, b, c) {
    return c.Fa().then(function (d) {
      d = {
        mfaPendingCredential: d
      };
      B(d, {
        phoneVerificationInfo: dh(a.a)
      });
      return N(b, Bj, d);
    });
  }

  function im(a) {
    K(this, "factorId", a.ea);
    this.a = a;
  }

  t(im, fm);

  function jm(a) {
    im.call(this, a);
    if (this.a.ea != hh.PROVIDER_ID) throw new u("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
  }

  t(jm, im);

  function km(a, b) {
    Xc.call(this, a);

    for (var c in b) {
      this[c] = b[c];
    }
  }

  t(km, Xc);

  function lm(a, b) {
    this.a = a;
    this.b = [];
    this.c = r(this.wc, this);
    jd(this.a, "userReloaded", this.c);
    var c = [];
    b && b.multiFactor && b.multiFactor.enrolledFactors && x(b.multiFactor.enrolledFactors, function (d) {
      var e = null,
          f = {};

      if (d) {
        d.uid && (f[nf] = d.uid);
        d.displayName && (f[of] = d.displayName);
        d.enrollmentTime && (f[pf] = new Date(d.enrollmentTime).toISOString());
        d.phoneNumber && (f[mf] = d.phoneNumber);

        try {
          e = new rf(f);
        } catch (g) {}

        d = e;
      } else d = null;

      d && c.push(d);
    });
    mm(this, c);
  }

  function nm(a) {
    var b = [];
    x(a.mfaInfo || [], function (c) {
      (c = qf(c)) && b.push(c);
    });
    return b;
  }

  k = lm.prototype;

  k.wc = function (a) {
    mm(this, nm(a.ed));
  };

  function mm(a, b) {
    a.b = b;
    K(a, "enrolledFactors", b);
  }

  k.Ob = function () {
    return this.a.I().then(function (a) {
      return new vg(a, null);
    });
  };

  k.dc = function (a, b) {
    var c = this,
        d = this.a.a;
    return this.Ob().then(function (e) {
      return a.ob(d, e, b);
    }).then(function (e) {
      om(c.a, e);
      return c.a.reload();
    });
  };

  k.$c = function (a) {
    var b = this,
        c = "string" === typeof a ? a : a.uid,
        d = this.a.a;
    return this.a.I().then(function (e) {
      return N(d, Fj, {
        idToken: e,
        mfaEnrollmentId: c
      });
    }).then(function (e) {
      var f = Na(b.b, function (g) {
        return g.uid != c;
      });
      mm(b, f);
      om(b.a, e);
      return b.a.reload().o(function (g) {
        if ("auth/user-token-expired" != g.code) throw g;
      });
    });
  };

  k.v = function () {
    return {
      multiFactor: {
        enrolledFactors: Oa(this.b, function (a) {
          return a.v();
        })
      }
    };
  };

  function pm(a, b, c) {
    this.h = a;
    this.i = b;
    this.g = c;
    this.c = 3E4;
    this.f = 96E4;
    this.b = null;
    this.a = this.c;
    if (this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
  }

  pm.prototype.start = function () {
    this.a = this.c;
    qm(this, !0);
  };

  function rm(a, b) {
    if (b) return a.a = a.c, a.g();
    b = a.a;
    a.a *= 2;
    a.a > a.f && (a.a = a.f);
    return b;
  }

  function qm(a, b) {
    a.stop();
    a.b = Bd(rm(a, b)).then(function () {
      return Ye();
    }).then(function () {
      return a.h();
    }).then(function () {
      qm(a, !0);
    }).o(function (c) {
      a.i(c) && qm(a, !1);
    });
  }

  pm.prototype.stop = function () {
    this.b && (this.b.cancel(), this.b = null);
  };

  function sm(a) {
    this.c = a;
    this.b = this.a = null;
  }

  sm.prototype.v = function () {
    return {
      apiKey: this.c.c,
      refreshToken: this.a,
      accessToken: this.b && this.b.toString(),
      expirationTime: tm(this)
    };
  };

  function tm(a) {
    return a.b && 1E3 * a.b.c || 0;
  }

  function um(a, b) {
    var c = b.refreshToken;
    a.b = gg(b[Ag] || "");
    a.a = c;
  }

  function vm(a, b) {
    a.b = b.b;
    a.a = b.a;
  }

  function wm(a, b) {
    return Qi(a.c, b).then(function (c) {
      a.b = gg(c.access_token);
      a.a = c.refresh_token;
      return {
        accessToken: a.b.toString(),
        refreshToken: a.a
      };
    }).o(function (c) {
      "auth/user-token-expired" == c.code && (a.a = null);
      throw c;
    });
  }

  sm.prototype.getToken = function (a) {
    a = !!a;
    return this.b && !this.a ? F(new u("user-token-expired")) : a || !this.b || ta() > tm(this) - 3E4 ? this.a ? wm(this, {
      grant_type: "refresh_token",
      refresh_token: this.a
    }) : E(null) : E({
      accessToken: this.b.toString(),
      refreshToken: this.a
    });
  };

  function xm(a, b) {
    this.a = a || null;
    this.b = b || null;
    L(this, {
      lastSignInTime: Ze(b || null),
      creationTime: Ze(a || null)
    });
  }

  function ym(a) {
    return new xm(a.a, a.b);
  }

  xm.prototype.v = function () {
    return {
      lastLoginAt: this.b,
      createdAt: this.a
    };
  };

  function zm(a, b, c, d, e, f) {
    L(this, {
      uid: a,
      displayName: d || null,
      photoURL: e || null,
      email: c || null,
      phoneNumber: f || null,
      providerId: b
    });
  }

  function P(a, b, c) {
    this.N = [];
    this.l = a.apiKey;
    this.m = a.appName;
    this.s = a.authDomain || null;
    a = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION ? Le(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION) : null;
    this.a = new Ei(this.l, za(Aa), a);
    this.b = new sm(this.a);
    Am(this, b[Ag]);
    um(this.b, b);
    K(this, "refreshToken", this.b.a);
    Bm(this, c || {});
    G.call(this);
    this.P = !1;
    this.s && Oe() && (this.i = Pl(this.s, this.l, this.m));
    this.R = [];
    this.h = null;
    this.B = Cm(this);
    this.Z = r(this.Ma, this);
    var d = this;
    this.oa = null;

    this.za = function (e) {
      d.va(e.g);
    };

    this.aa = null;
    this.W = [];

    this.ya = function (e) {
      Dm(d, e.c);
    };

    this.$ = null;
    this.O = new lm(this, c);
    K(this, "multiFactor", this.O);
  }

  t(P, G);

  P.prototype.va = function (a) {
    this.oa = a;
    Ki(this.a, a);
  };

  P.prototype.ja = function () {
    return this.oa;
  };

  function Em(a, b) {
    a.aa && td(a.aa, "languageCodeChanged", a.za);
    (a.aa = b) && jd(b, "languageCodeChanged", a.za);
  }

  function Dm(a, b) {
    a.W = b;
    Li(a.a, _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION ? Le(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION, a.W) : null);
  }

  P.prototype.Ea = function () {
    return Wa(this.W);
  };

  function Fm(a, b) {
    a.$ && td(a.$, "frameworkChanged", a.ya);
    (a.$ = b) && jd(b, "frameworkChanged", a.ya);
  }

  P.prototype.Ma = function () {
    this.B.b && (this.B.stop(), this.B.start());
  };

  function Gm(a) {
    try {
      return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a.m).auth();
    } catch (b) {
      throw new u("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.m + "'!");
    }
  }

  function Cm(a) {
    return new pm(function () {
      return a.I(!0);
    }, function (b) {
      return b && "auth/network-request-failed" == b.code ? !0 : !1;
    }, function () {
      var b = tm(a.b) - ta() - 3E5;
      return 0 < b ? b : 0;
    });
  }

  function Hm(a) {
    a.D || a.B.b || (a.B.start(), td(a, "tokenChanged", a.Z), jd(a, "tokenChanged", a.Z));
  }

  function Im(a) {
    td(a, "tokenChanged", a.Z);
    a.B.stop();
  }

  function Am(a, b) {
    a.xa = b;
    K(a, "_lat", b);
  }

  function Jm(a, b) {
    Ua(a.R, function (c) {
      return c == b;
    });
  }

  function Km(a) {
    for (var b = [], c = 0; c < a.R.length; c++) {
      b.push(a.R[c](a));
    }

    return Ec(b).then(function () {
      return a;
    });
  }

  function Lm(a) {
    a.i && !a.P && (a.P = !0, Hl(a.i, a));
  }

  function Bm(a, b) {
    L(a, {
      uid: b.uid,
      displayName: b.displayName || null,
      photoURL: b.photoURL || null,
      email: b.email || null,
      emailVerified: b.emailVerified || !1,
      phoneNumber: b.phoneNumber || null,
      isAnonymous: b.isAnonymous || !1,
      tenantId: b.tenantId || null,
      metadata: new xm(b.createdAt, b.lastLoginAt),
      providerData: []
    });
    a.a.b = a.tenantId;
  }

  K(P.prototype, "providerId", "firebase");

  function Mm() {}

  function Nm(a) {
    return E().then(function () {
      if (a.D) throw new u("app-deleted");
    });
  }

  function Om(a) {
    return Oa(a.providerData, function (b) {
      return b.providerId;
    });
  }

  function Pm(a, b) {
    b && (Qm(a, b.providerId), a.providerData.push(b));
  }

  function Qm(a, b) {
    Ua(a.providerData, function (c) {
      return c.providerId == b;
    });
  }

  function Rm(a, b, c) {
    ("uid" != b || c) && a.hasOwnProperty(b) && K(a, b, c);
  }

  function Sm(a, b) {
    a != b && (L(a, {
      uid: b.uid,
      displayName: b.displayName,
      photoURL: b.photoURL,
      email: b.email,
      emailVerified: b.emailVerified,
      phoneNumber: b.phoneNumber,
      isAnonymous: b.isAnonymous,
      tenantId: b.tenantId,
      providerData: []
    }), b.metadata ? K(a, "metadata", ym(b.metadata)) : K(a, "metadata", new xm()), x(b.providerData, function (c) {
      Pm(a, c);
    }), vm(a.b, b.b), K(a, "refreshToken", a.b.a), mm(a.O, b.O.b));
  }

  k = P.prototype;

  k.reload = function () {
    var a = this;
    return R(this, Nm(this).then(function () {
      return Tm(a).then(function () {
        return Km(a);
      }).then(Mm);
    }));
  };

  function Tm(a) {
    return a.I().then(function (b) {
      var c = a.isAnonymous;
      return Um(a, b).then(function () {
        c || Rm(a, "isAnonymous", !1);
        return b;
      });
    });
  }

  k.mc = function (a) {
    return this.I(a).then(function (b) {
      return new $l(b);
    });
  };

  k.I = function (a) {
    var b = this;
    return R(this, Nm(this).then(function () {
      return b.b.getToken(a);
    }).then(function (c) {
      if (!c) throw new u("internal-error");
      c.accessToken != b.xa && (Am(b, c.accessToken), b.dispatchEvent(new km("tokenChanged")));
      Rm(b, "refreshToken", c.refreshToken);
      return c.accessToken;
    }));
  };

  function om(a, b) {
    b[Ag] && a.xa != b[Ag] && (um(a.b, b), a.dispatchEvent(new km("tokenChanged")), Am(a, b[Ag]), Rm(a, "refreshToken", a.b.a));
  }

  function Um(a, b) {
    return N(a.a, Cj, {
      idToken: b
    }).then(r(a.Ic, a));
  }

  k.Ic = function (a) {
    a = a.users;
    if (!a || !a.length) throw new u("internal-error");
    a = a[0];
    Bm(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified,
      phoneNumber: a.phoneNumber,
      lastLoginAt: a.lastLoginAt,
      createdAt: a.createdAt,
      tenantId: a.tenantId
    });

    for (var b = Vm(a), c = 0; c < b.length; c++) {
      Pm(this, b[c]);
    }

    Rm(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    this.dispatchEvent(new km("userReloaded", {
      ed: a
    }));
  };

  function Vm(a) {
    return (a = a.providerUserInfo) && a.length ? Oa(a, function (b) {
      return new zm(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber);
    }) : [];
  }

  k.Jc = function (a) {
    df("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
    return this.pb(a);
  };

  k.pb = function (a) {
    var b = this,
        c = null;
    return R(this, a.c(this.a, this.uid).then(function (d) {
      om(b, d);
      c = Wm(b, d, "reauthenticate");
      b.h = null;
      return b.reload();
    }).then(function () {
      return c;
    }), !0);
  };

  function Xm(a, b) {
    return Tm(a).then(function () {
      if (Sa(Om(a), b)) return Km(a).then(function () {
        throw new u("provider-already-linked");
      });
    });
  }

  k.Ac = function (a) {
    df("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
    return this.mb(a);
  };

  k.mb = function (a) {
    var b = this,
        c = null;
    return R(this, Xm(this, a.providerId).then(function () {
      return b.I();
    }).then(function (d) {
      return a.b(b.a, d);
    }).then(function (d) {
      c = Wm(b, d, "link");
      return Ym(b, d);
    }).then(function () {
      return c;
    }));
  };

  k.Bc = function (a, b) {
    var c = this;
    return R(this, Xm(this, "phone").then(function () {
      return Zl(Gm(c), a, b, r(c.mb, c));
    }));
  };

  k.Kc = function (a, b) {
    var c = this;
    return R(this, E().then(function () {
      return Zl(Gm(c), a, b, r(c.pb, c));
    }), !0);
  };

  function Wm(a, b, c) {
    var d = mh(b);
    b = lg(b);
    return gf({
      user: a,
      credential: d,
      additionalUserInfo: b,
      operationType: c
    });
  }

  function Ym(a, b) {
    om(a, b);
    return a.reload().then(function () {
      return a;
    });
  }

  k.xb = function (a) {
    var b = this;
    return R(this, this.I().then(function (c) {
      return b.a.xb(c, a);
    }).then(function (c) {
      om(b, c);
      return b.reload();
    }));
  };

  k.cd = function (a) {
    var b = this;
    return R(this, this.I().then(function (c) {
      return a.b(b.a, c);
    }).then(function (c) {
      om(b, c);
      return b.reload();
    }));
  };

  k.yb = function (a) {
    var b = this;
    return R(this, this.I().then(function (c) {
      return b.a.yb(c, a);
    }).then(function (c) {
      om(b, c);
      return b.reload();
    }));
  };

  k.zb = function (a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return Nm(this);
    var b = this;
    return R(this, this.I().then(function (c) {
      return b.a.zb(c, {
        displayName: a.displayName,
        photoUrl: a.photoURL
      });
    }).then(function (c) {
      om(b, c);
      Rm(b, "displayName", c.displayName || null);
      Rm(b, "photoURL", c.photoUrl || null);
      x(b.providerData, function (d) {
        "password" === d.providerId && (K(d, "displayName", b.displayName), K(d, "photoURL", b.photoURL));
      });
      return Km(b);
    }).then(Mm));
  };

  k.ad = function (a) {
    var b = this;
    return R(this, Tm(this).then(function (c) {
      return Sa(Om(b), a) ? lj(b.a, c, [a]).then(function (d) {
        var e = {};
        x(d.providerUserInfo || [], function (f) {
          e[f.providerId] = !0;
        });
        x(Om(b), function (f) {
          e[f] || Qm(b, f);
        });
        e[hh.PROVIDER_ID] || K(b, "phoneNumber", null);
        return Km(b);
      }) : Km(b).then(function () {
        throw new u("no-such-provider");
      });
    }));
  };

  k["delete"] = function () {
    var a = this;
    return R(this, this.I().then(function (b) {
      return N(a.a, zj, {
        idToken: b
      });
    }).then(function () {
      a.dispatchEvent(new km("userDeleted"));
    })).then(function () {
      for (var b = 0; b < a.N.length; b++) {
        a.N[b].cancel("app-deleted");
      }

      Em(a, null);
      Fm(a, null);
      a.N = [];
      a.D = !0;
      Im(a);
      K(a, "refreshToken", null);
      a.i && Il(a.i, a);
    });
  };

  k.Cb = function (a, b) {
    return "linkViaPopup" == a && (this.g || null) == b && this.f || "reauthViaPopup" == a && (this.g || null) == b && this.f || "linkViaRedirect" == a && (this.fa || null) == b || "reauthViaRedirect" == a && (this.fa || null) == b ? !0 : !1;
  };

  k.la = function (a, b, c, d) {
    "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.g || null) || (c && this.w ? this.w(c) : b && !c && this.f && this.f(b), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w);
  };

  k.Da = function (a, b) {
    return "linkViaPopup" == a && b == (this.g || null) ? r(this.Hb, this) : "reauthViaPopup" == a && b == (this.g || null) ? r(this.Ib, this) : "linkViaRedirect" == a && (this.fa || null) == b ? r(this.Hb, this) : "reauthViaRedirect" == a && (this.fa || null) == b ? r(this.Ib, this) : null;
  };

  k.Cc = function (a) {
    var b = this;
    return Zm(this, "linkViaPopup", a, function () {
      return Xm(b, a.providerId).then(function () {
        return Km(b);
      });
    }, !1);
  };

  k.Lc = function (a) {
    return Zm(this, "reauthViaPopup", a, function () {
      return E();
    }, !0);
  };

  function Zm(a, b, c, d, e) {
    if (!Oe()) return F(new u("operation-not-supported-in-this-environment"));
    if (a.h && !e) return F(a.h);
    var f = kg(c.providerId),
        g = Ne(a.uid + ":::"),
        h = null;
    (!Qe() || Fe()) && a.s && c.isOAuthProvider && (h = Yj(a.s, a.l, a.m, b, c, null, g, _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION || null, null, null, a.tenantId));
    var m = we(h, f && f.ta, f && f.sa);
    d = d().then(function () {
      $m(a);
      if (!e) return a.I().then(function () {});
    }).then(function () {
      return Ll(a.i, m, b, c, g, !!h, a.tenantId);
    }).then(function () {
      return new D(function (p, v) {
        a.la(b, null, new u("cancelled-popup-request"), a.g || null);
        a.f = p;
        a.w = v;
        a.g = g;
        a.c = Nl(a.i, a, b, m, g);
      });
    }).then(function (p) {
      m && ve(m);
      return p ? gf(p) : null;
    }).o(function (p) {
      m && ve(m);
      throw p;
    });
    return R(a, d, e);
  }

  k.Dc = function (a) {
    var b = this;
    return an(this, "linkViaRedirect", a, function () {
      return Xm(b, a.providerId);
    }, !1);
  };

  k.Mc = function (a) {
    return an(this, "reauthViaRedirect", a, function () {
      return E();
    }, !0);
  };

  function an(a, b, c, d, e) {
    if (!Oe()) return F(new u("operation-not-supported-in-this-environment"));
    if (a.h && !e) return F(a.h);
    var f = null,
        g = Ne(a.uid + ":::");
    d = d().then(function () {
      $m(a);
      if (!e) return a.I().then(function () {});
    }).then(function () {
      a.fa = g;
      return Km(a);
    }).then(function (h) {
      a.ga && (h = a.ga, h = h.b.set(bn, a.v(), h.a));
      return h;
    }).then(function () {
      return Ml(a.i, b, c, g, a.tenantId);
    }).o(function (h) {
      f = h;
      if (a.ga) return cn(a.ga);
      throw f;
    }).then(function () {
      if (f) throw f;
    });
    return R(a, d, e);
  }

  function $m(a) {
    if (!a.i || !a.P) {
      if (a.i && !a.P) throw new u("internal-error");
      throw new u("auth-domain-config-required");
    }
  }

  k.Hb = function (a, b, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null;
    c = this.I().then(function (g) {
      return Eg(e.a, {
        requestUri: a,
        postBody: d,
        sessionId: b,
        idToken: g
      });
    }).then(function (g) {
      f = Wm(e, g, "link");
      return Ym(e, g);
    }).then(function () {
      return f;
    });
    return R(this, c);
  };

  k.Ib = function (a, b, c, d) {
    var e = this;
    this.c && (this.c.cancel(), this.c = null);
    var f = null,
        g = E().then(function () {
      return zg(Fg(e.a, {
        requestUri: a,
        sessionId: b,
        postBody: d,
        tenantId: c
      }), e.uid);
    }).then(function (h) {
      f = Wm(e, h, "reauthenticate");
      om(e, h);
      e.h = null;
      return e.reload();
    }).then(function () {
      return f;
    });
    return R(this, g, !0);
  };

  k.qb = function (a) {
    var b = this,
        c = null;
    return R(this, this.I().then(function (d) {
      c = d;
      return "undefined" === typeof a || jb(a) ? {} : Zf(new Pf(a));
    }).then(function (d) {
      return b.a.qb(c, d);
    }).then(function (d) {
      if (b.email != d) return b.reload();
    }).then(function () {}));
  };

  k.Ab = function (a, b) {
    var c = this,
        d = null;
    return R(this, this.I().then(function (e) {
      d = e;
      return "undefined" === typeof b || jb(b) ? {} : Zf(new Pf(b));
    }).then(function (e) {
      return c.a.Ab(d, a, e);
    }).then(function (e) {
      if (c.email != e) return c.reload();
    }).then(function () {}));
  };

  function R(a, b, c) {
    var d = dn(a, b, c);
    a.N.push(d);
    d.ma(function () {
      Ta(a.N, d);
    });
    return d.o(function (e) {
      var f = null;
      e && "auth/multi-factor-auth-required" === e.code && (f = em(e.v(), Gm(a), r(a.hc, a)));
      throw f || e;
    });
  }

  k.hc = function (a) {
    var b = null,
        c = this;
    a = zg(E(a), c.uid).then(function (d) {
      b = Wm(c, d, "reauthenticate");
      om(c, d);
      c.h = null;
      return c.reload();
    }).then(function () {
      return b;
    });
    return R(this, a, !0);
  };

  function dn(a, b, c) {
    return a.h && !c ? (b.cancel(), F(a.h)) : b.o(function (d) {
      !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.h || a.dispatchEvent(new km("userInvalidated")), a.h = d);
      throw d;
    });
  }

  k.toJSON = function () {
    return this.v();
  };

  k.v = function () {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      phoneNumber: this.phoneNumber,
      isAnonymous: this.isAnonymous,
      tenantId: this.tenantId,
      providerData: [],
      apiKey: this.l,
      appName: this.m,
      authDomain: this.s,
      stsTokenManager: this.b.v(),
      redirectEventId: this.fa || null
    };
    this.metadata && B(a, this.metadata.v());
    x(this.providerData, function (b) {
      a.providerData.push(hf(b));
    });
    B(a, this.O.v());
    return a;
  };

  function en(a) {
    if (!a.apiKey) return null;
    var b = {
      apiKey: a.apiKey,
      authDomain: a.authDomain,
      appName: a.appName
    },
        c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken) c[Ag] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null;else return null;
    var d = new P(b, c, a);
    a.providerData && x(a.providerData, function (e) {
      e && Pm(d, gf(e));
    });
    a.redirectEventId && (d.fa = a.redirectEventId);
    return d;
  }

  function fn(a, b, c, d) {
    var e = new P(a, b);
    c && (e.ga = c);
    d && Dm(e, d);
    return e.reload().then(function () {
      return e;
    });
  }

  function gn(a, b, c, d) {
    var e = a.b,
        f = {};
    f[Ag] = e.b && e.b.toString();
    f.refreshToken = e.a;
    b = new P(b || {
      apiKey: a.l,
      authDomain: a.s,
      appName: a.m
    }, f);
    c && (b.ga = c);
    d && Dm(b, d);
    Sm(b, a);
    return b;
  }

  ;

  function hn(a) {
    this.a = a;
    this.b = Ok();
  }

  var bn = {
    name: "redirectUser",
    F: "session"
  };

  function cn(a) {
    return Sk(a.b, bn, a.a);
  }

  function jn(a, b) {
    return a.b.get(bn, a.a).then(function (c) {
      c && b && (c.authDomain = b);
      return en(c || {});
    });
  }

  ;

  function kn(a) {
    this.a = a;
    this.b = Ok();
    this.c = null;
    this.f = ln(this);
    this.b.addListener(mn("local"), this.a, r(this.g, this));
  }

  kn.prototype.g = function () {
    var a = this,
        b = mn("local");
    nn(this, function () {
      return E().then(function () {
        return a.c && "local" != a.c.F ? a.b.get(b, a.a) : null;
      }).then(function (c) {
        if (c) return on(a, "local").then(function () {
          a.c = b;
        });
      });
    });
  };

  function on(a, b) {
    var c = [],
        d;

    for (d in Kk) {
      Kk[d] !== b && c.push(Sk(a.b, mn(Kk[d]), a.a));
    }

    c.push(Sk(a.b, pn, a.a));
    return Dc(c);
  }

  function ln(a) {
    var b = mn("local"),
        c = mn("session"),
        d = mn("none");
    return Rk(a.b, b, a.a).then(function () {
      return a.b.get(c, a.a);
    }).then(function (e) {
      return e ? c : a.b.get(d, a.a).then(function (f) {
        return f ? d : a.b.get(b, a.a).then(function (g) {
          return g ? b : a.b.get(pn, a.a).then(function (h) {
            return h ? mn(h) : b;
          });
        });
      });
    }).then(function (e) {
      a.c = e;
      return on(a, e.F);
    }).o(function () {
      a.c || (a.c = b);
    });
  }

  var pn = {
    name: "persistence",
    F: "session"
  };

  function mn(a) {
    return {
      name: "authUser",
      F: a
    };
  }

  kn.prototype.tb = function (a) {
    var b = null,
        c = this;
    Lk(a);
    return nn(this, function () {
      return a != c.c.F ? c.b.get(c.c, c.a).then(function (d) {
        b = d;
        return on(c, a);
      }).then(function () {
        c.c = mn(a);
        if (b) return c.b.set(c.c, b, c.a);
      }) : E();
    });
  };

  function qn(a) {
    return nn(a, function () {
      return a.b.set(pn, a.c.F, a.a);
    });
  }

  function rn(a, b) {
    return nn(a, function () {
      return a.b.set(a.c, b.v(), a.a);
    });
  }

  function sn(a) {
    return nn(a, function () {
      return Sk(a.b, a.c, a.a);
    });
  }

  function tn(a, b) {
    return nn(a, function () {
      return a.b.get(a.c, a.a).then(function (c) {
        c && b && (c.authDomain = b);
        return en(c || {});
      });
    });
  }

  function nn(a, b) {
    a.f = a.f.then(b, b);
    return a.f;
  }

  ;

  function un(a) {
    this.l = !1;
    K(this, "settings", new Xl());
    K(this, "app", a);
    if (S(this).options && S(this).options.apiKey) a = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION ? Le(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION) : null, this.b = new Ei(S(this).options && S(this).options.apiKey, za(Aa), a);else throw new u("invalid-api-key");
    this.P = [];
    this.m = [];
    this.O = [];
    this.$b = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(r(this.xc, this));
    this.W = void 0;
    this.ac = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(r(this.yc, this));
    vn(this, null);
    this.i = new kn(S(this).options.apiKey + ":" + S(this).name);
    this.B = new hn(S(this).options.apiKey + ":" + S(this).name);
    this.Z = T(this, wn(this));
    this.h = T(this, xn(this));
    this.aa = !1;
    this.oa = r(this.Xc, this);
    this.Ma = r(this.ca, this);
    this.xa = r(this.jc, this);
    this.ya = r(this.uc, this);
    this.za = r(this.vc, this);
    this.a = null;
    yn(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = r(this["delete"], this);
    this.INTERNAL.logFramework = r(this.Ec, this);
    this.s = 0;
    G.call(this);
    zn(this);
    this.N = [];
  }

  t(un, G);

  function An(a) {
    Xc.call(this, "languageCodeChanged");
    this.g = a;
  }

  t(An, Xc);

  function Bn(a) {
    Xc.call(this, "frameworkChanged");
    this.c = a;
  }

  t(Bn, Xc);
  k = un.prototype;

  k.tb = function (a) {
    a = this.i.tb(a);
    return T(this, a);
  };

  k.va = function (a) {
    this.$ === a || this.l || (this.$ = a, Ki(this.b, this.$), this.dispatchEvent(new An(this.ja())));
  };

  k.ja = function () {
    return this.$;
  };

  k.dd = function () {
    var a = l.navigator;
    this.va(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
  };

  k.Ec = function (a) {
    this.N.push(a);
    Li(this.b, _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION ? Le(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION, this.N) : null);
    this.dispatchEvent(new Bn(this.N));
  };

  k.Ea = function () {
    return Wa(this.N);
  };

  k.ub = function (a) {
    this.R === a || this.l || (this.R = a, this.b.b = this.R);
  };

  k.S = function () {
    return this.R;
  };

  function zn(a) {
    Object.defineProperty(a, "lc", {
      get: function get() {
        return this.ja();
      },
      set: function set(b) {
        this.va(b);
      },
      enumerable: !1
    });
    a.$ = null;
    Object.defineProperty(a, "ti", {
      get: function get() {
        return this.S();
      },
      set: function set(b) {
        this.ub(b);
      },
      enumerable: !1
    });
    a.R = null;
  }

  k.toJSON = function () {
    return {
      apiKey: S(this).options.apiKey,
      authDomain: S(this).options.authDomain,
      appName: S(this).name,
      currentUser: U(this) && U(this).v()
    };
  };

  function Cn(a) {
    return a.Zb || F(new u("auth-domain-config-required"));
  }

  function yn(a) {
    var b = S(a).options.authDomain,
        c = S(a).options.apiKey;
    b && Oe() && (a.Zb = a.Z.then(function () {
      if (!a.l) {
        a.a = Pl(b, c, S(a).name);
        Hl(a.a, a);
        U(a) && Lm(U(a));

        if (a.D) {
          Lm(a.D);
          var d = a.D;
          d.va(a.ja());
          Em(d, a);
          d = a.D;
          Dm(d, a.N);
          Fm(d, a);
          a.D = null;
        }

        return a.a;
      }
    }));
  }

  k.Cb = function (a, b) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return !0;

      case "signInViaPopup":
        return this.g == b && !!this.f;

      default:
        return !1;
    }
  };

  k.la = function (a, b, c, d) {
    "signInViaPopup" == a && this.g == d && (c && this.w ? this.w(c) : b && !c && this.f && this.f(b), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w);
  };

  k.Da = function (a, b) {
    return "signInViaRedirect" == a || "signInViaPopup" == a && this.g == b && this.f ? r(this.gc, this) : null;
  };

  k.gc = function (a, b, c, d) {
    var e = this,
        f = {
      requestUri: a,
      postBody: d,
      sessionId: b,
      tenantId: c
    };
    this.c && (this.c.cancel(), this.c = null);
    return e.Z.then(function () {
      return Dn(e, Cg(e.b, f));
    });
  };

  k.Vc = function (a) {
    if (!Oe()) return F(new u("operation-not-supported-in-this-environment"));
    var b = this,
        c = kg(a.providerId),
        d = Ne(),
        e = null;
    (!Qe() || Fe()) && S(this).options.authDomain && a.isOAuthProvider && (e = Yj(S(this).options.authDomain, S(this).options.apiKey, S(this).name, "signInViaPopup", a, null, d, _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION || null, null, null, this.S()));
    var f = we(e, c && c.ta, c && c.sa);
    c = Cn(this).then(function (g) {
      return Ll(g, f, "signInViaPopup", a, d, !!e, b.S());
    }).then(function () {
      return new D(function (g, h) {
        b.la("signInViaPopup", null, new u("cancelled-popup-request"), b.g);
        b.f = g;
        b.w = h;
        b.g = d;
        b.c = Nl(b.a, b, "signInViaPopup", f, d);
      });
    }).then(function (g) {
      f && ve(f);
      return g ? gf(g) : null;
    }).o(function (g) {
      f && ve(f);
      throw g;
    });
    return T(this, c);
  };

  k.Wc = function (a) {
    if (!Oe()) return F(new u("operation-not-supported-in-this-environment"));
    var b = this,
        c = Cn(this).then(function () {
      return qn(b.i);
    }).then(function () {
      return Ml(b.a, "signInViaRedirect", a, void 0, b.S());
    });
    return T(this, c);
  };

  function En(a) {
    if (!Oe()) return F(new u("operation-not-supported-in-this-environment"));
    var b = Cn(a).then(function () {
      return a.a.pa();
    }).then(function (c) {
      return c ? gf(c) : null;
    });
    return T(a, b);
  }

  k.pa = function () {
    var a = this;
    return En(this).then(function (b) {
      a.a && Sl(a.a.b);
      return b;
    }).o(function (b) {
      a.a && Sl(a.a.b);
      throw b;
    });
  };

  k.bd = function (a) {
    if (!a) return F(new u("null-user"));
    if (this.R != a.tenantId) return F(new u("tenant-id-mismatch"));
    var b = this,
        c = {};
    c.apiKey = S(this).options.apiKey;
    c.authDomain = S(this).options.authDomain;
    c.appName = S(this).name;
    var d = gn(a, c, b.B, b.Ea());
    return T(this, this.h.then(function () {
      if (S(b).options.apiKey != a.l) return d.reload();
    }).then(function () {
      if (U(b) && a.uid == U(b).uid) return Sm(U(b), a), b.ca(a);
      vn(b, d);
      Lm(d);
      return b.ca(d);
    }).then(function () {
      Fn(b);
    }));
  };

  function Gn(a, b) {
    var c = {};
    c.apiKey = S(a).options.apiKey;
    c.authDomain = S(a).options.authDomain;
    c.appName = S(a).name;
    return a.Z.then(function () {
      return fn(c, b, a.B, a.Ea());
    }).then(function (d) {
      if (U(a) && d.uid == U(a).uid) return Sm(U(a), d), a.ca(d);
      vn(a, d);
      Lm(d);
      return a.ca(d);
    }).then(function () {
      Fn(a);
    });
  }

  function vn(a, b) {
    U(a) && (Jm(U(a), a.Ma), td(U(a), "tokenChanged", a.xa), td(U(a), "userDeleted", a.ya), td(U(a), "userInvalidated", a.za), Im(U(a)));
    b && (b.R.push(a.Ma), jd(b, "tokenChanged", a.xa), jd(b, "userDeleted", a.ya), jd(b, "userInvalidated", a.za), 0 < a.s && Hm(b));
    K(a, "currentUser", b);
    b && (b.va(a.ja()), Em(b, a), Dm(b, a.N), Fm(b, a));
  }

  k.wb = function () {
    var a = this,
        b = this.h.then(function () {
      a.a && Sl(a.a.b);
      if (!U(a)) return E();
      vn(a, null);
      return sn(a.i).then(function () {
        Fn(a);
      });
    });
    return T(this, b);
  };

  function Hn(a) {
    var b = jn(a.B, S(a).options.authDomain).then(function (c) {
      if (a.D = c) c.ga = a.B;
      return cn(a.B);
    });
    return T(a, b);
  }

  function wn(a) {
    var b = S(a).options.authDomain,
        c = Hn(a).then(function () {
      return tn(a.i, b);
    }).then(function (d) {
      return d ? (d.ga = a.B, a.D && (a.D.fa || null) == (d.fa || null) ? d : d.reload().then(function () {
        return rn(a.i, d).then(function () {
          return d;
        });
      }).o(function (e) {
        return "auth/network-request-failed" == e.code ? d : sn(a.i);
      })) : null;
    }).then(function (d) {
      vn(a, d || null);
    });
    return T(a, c);
  }

  function xn(a) {
    return a.Z.then(function () {
      return En(a);
    }).o(function () {}).then(function () {
      if (!a.l) return a.oa();
    }).o(function () {}).then(function () {
      if (!a.l) {
        a.aa = !0;
        var b = a.i;
        b.b.addListener(mn("local"), b.a, a.oa);
      }
    });
  }

  k.Xc = function () {
    var a = this;
    return tn(this.i, S(this).options.authDomain).then(function (b) {
      if (!a.l) {
        var c;

        if (c = U(a) && b) {
          c = U(a).uid;
          var d = b.uid;
          c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
        }

        if (c) return Sm(U(a), b), U(a).I();
        if (U(a) || b) vn(a, b), b && (Lm(b), b.ga = a.B), a.a && Hl(a.a, a), Fn(a);
      }
    });
  };

  k.ca = function (a) {
    return rn(this.i, a);
  };

  k.jc = function () {
    Fn(this);
    this.ca(U(this));
  };

  k.uc = function () {
    this.wb();
  };

  k.vc = function () {
    this.wb();
  };

  function Dn(a, b) {
    var c = null,
        d = null;
    return T(a, b.then(function (e) {
      c = mh(e);
      d = lg(e);
      return Gn(a, e);
    }, function (e) {
      var f = null;
      e && "auth/multi-factor-auth-required" === e.code && (f = em(e.v(), a, r(a.ic, a)));
      throw f || e;
    }).then(function () {
      return gf({
        user: U(a),
        credential: c,
        additionalUserInfo: d,
        operationType: "signIn"
      });
    }));
  }

  k.ic = function (a) {
    var b = this;
    return this.h.then(function () {
      return Dn(b, E(a));
    });
  };

  k.xc = function (a) {
    var b = this;
    this.addAuthTokenListener(function () {
      a.next(U(b));
    });
  };

  k.yc = function (a) {
    var b = this;
    In(this, function () {
      a.next(U(b));
    });
  };

  k.Gc = function (a, b, c) {
    var d = this;
    this.aa && Promise.resolve().then(function () {
      n(a) ? a(U(d)) : n(a.next) && a.next(U(d));
    });
    return this.$b(a, b, c);
  };

  k.Fc = function (a, b, c) {
    var d = this;
    this.aa && Promise.resolve().then(function () {
      d.W = d.getUid();
      n(a) ? a(U(d)) : n(a.next) && a.next(U(d));
    });
    return this.ac(a, b, c);
  };

  k.kc = function (a) {
    var b = this,
        c = this.h.then(function () {
      return U(b) ? U(b).I(a).then(function (d) {
        return {
          accessToken: d
        };
      }) : null;
    });
    return T(this, c);
  };

  k.Rc = function (a) {
    var b = this;
    return this.h.then(function () {
      return Dn(b, N(b.b, Ej, {
        token: a
      }));
    }).then(function (c) {
      var d = c.user;
      Rm(d, "isAnonymous", !1);
      b.ca(d);
      return c;
    });
  };

  k.Sc = function (a, b) {
    var c = this;
    return this.h.then(function () {
      return Dn(c, N(c.b, Xg, {
        email: a,
        password: b
      }));
    });
  };

  k.cc = function (a, b) {
    var c = this;
    return this.h.then(function () {
      return Dn(c, N(c.b, yj, {
        email: a,
        password: b
      }));
    });
  };

  k.Ya = function (a) {
    var b = this;
    return this.h.then(function () {
      return Dn(b, a.ia(b.b));
    });
  };

  k.Qc = function (a) {
    df("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
    return this.Ya(a);
  };

  k.vb = function () {
    var a = this;
    return this.h.then(function () {
      var b = U(a);

      if (b && b.isAnonymous) {
        var c = gf({
          providerId: null,
          isNewUser: !1
        });
        return gf({
          user: b,
          credential: null,
          additionalUserInfo: c,
          operationType: "signIn"
        });
      }

      return Dn(a, a.b.vb()).then(function (d) {
        var e = d.user;
        Rm(e, "isAnonymous", !0);
        a.ca(e);
        return d;
      });
    });
  };

  function S(a) {
    return a.app;
  }

  function U(a) {
    return a.currentUser;
  }

  k.getUid = function () {
    return U(this) && U(this).uid || null;
  };

  function Jn(a) {
    return U(a) && U(a)._lat || null;
  }

  function Fn(a) {
    if (a.aa) {
      for (var b = 0; b < a.m.length; b++) {
        if (a.m[b]) a.m[b](Jn(a));
      }

      if (a.W !== a.getUid() && a.O.length) for (a.W = a.getUid(), b = 0; b < a.O.length; b++) {
        if (a.O[b]) a.O[b](Jn(a));
      }
    }
  }

  k.bc = function (a) {
    this.addAuthTokenListener(a);
    this.s++;
    0 < this.s && U(this) && Hm(U(this));
  };

  k.Nc = function (a) {
    var b = this;
    x(this.m, function (c) {
      c == a && b.s--;
    });
    0 > this.s && (this.s = 0);
    0 == this.s && U(this) && Im(U(this));
    this.removeAuthTokenListener(a);
  };

  k.addAuthTokenListener = function (a) {
    var b = this;
    this.m.push(a);
    T(this, this.h.then(function () {
      b.l || Sa(b.m, a) && a(Jn(b));
    }));
  };

  k.removeAuthTokenListener = function (a) {
    Ua(this.m, function (b) {
      return b == a;
    });
  };

  function In(a, b) {
    a.O.push(b);
    T(a, a.h.then(function () {
      !a.l && Sa(a.O, b) && a.W !== a.getUid() && (a.W = a.getUid(), b(Jn(a)));
    }));
  }

  k["delete"] = function () {
    this.l = !0;

    for (var a = 0; a < this.P.length; a++) {
      this.P[a].cancel("app-deleted");
    }

    this.P = [];
    this.i && (a = this.i, a.b.removeListener(mn("local"), a.a, this.oa));
    this.a && (Il(this.a, this), Sl(this.a.b));
    return Promise.resolve();
  };

  function T(a, b) {
    a.P.push(b);
    b.ma(function () {
      Ta(a.P, b);
    });
    return b;
  }

  k.fc = function (a) {
    return T(this, Vi(this.b, a));
  };

  k.zc = function (a) {
    return !!bh(a);
  };

  k.sb = function (a, b) {
    var c = this;
    return T(this, E().then(function () {
      var d = new Pf(b);
      if (!d.c) throw new u("argument-error", Xf + " must be true when sending sign in link to email");
      return Zf(d);
    }).then(function (d) {
      return c.b.sb(a, d);
    }).then(function () {}));
  };

  k.fd = function (a) {
    return this.Pa(a).then(function (b) {
      return b.data.email;
    });
  };

  k.jb = function (a, b) {
    return T(this, this.b.jb(a, b).then(function () {}));
  };

  k.Pa = function (a) {
    return T(this, this.b.Pa(a).then(function (b) {
      return new sf(b);
    }));
  };

  k.fb = function (a) {
    return T(this, this.b.fb(a).then(function () {}));
  };

  k.rb = function (a, b) {
    var c = this;
    return T(this, E().then(function () {
      return "undefined" === typeof b || jb(b) ? {} : Zf(new Pf(b));
    }).then(function (d) {
      return c.b.rb(a, d);
    }).then(function () {}));
  };

  k.Uc = function (a, b) {
    return T(this, Zl(this, a, b, r(this.Ya, this)));
  };

  k.Tc = function (a, b) {
    var c = this;
    return T(this, E().then(function () {
      var d = b || oe(),
          e = ah(a, d);
      d = bh(d);
      if (!d) throw new u("argument-error", "Invalid email link!");
      if (d.tenantId !== c.S()) throw new u("tenant-id-mismatch");
      return c.Ya(e);
    }));
  };

  function Kn() {}

  Kn.prototype.render = function () {};

  Kn.prototype.reset = function () {};

  Kn.prototype.getResponse = function () {};

  Kn.prototype.execute = function () {};

  function Ln() {
    this.a = {};
    this.b = 1E12;
  }

  var Mn = null;

  Ln.prototype.render = function (a, b) {
    this.a[this.b.toString()] = new Nn(a, b);
    return this.b++;
  };

  Ln.prototype.reset = function (a) {
    var b = On(this, a);
    a = Pn(a);
    b && a && (b["delete"](), delete this.a[a]);
  };

  Ln.prototype.getResponse = function (a) {
    return (a = On(this, a)) ? a.getResponse() : null;
  };

  Ln.prototype.execute = function (a) {
    (a = On(this, a)) && a.execute();
  };

  function On(a, b) {
    return (b = Pn(b)) ? a.a[b] || null : null;
  }

  function Pn(a) {
    return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null;
  }

  function Nn(a, b) {
    this.g = !1;
    this.c = b;
    this.a = this.b = null;
    this.h = "invisible" !== this.c.size;
    this.f = ec(a);
    var c = this;

    this.i = function () {
      c.execute();
    };

    this.h ? this.execute() : jd(this.f, "click", this.i);
  }

  Nn.prototype.getResponse = function () {
    Qn(this);
    return this.b;
  };

  Nn.prototype.execute = function () {
    Qn(this);
    var a = this;
    this.a || (this.a = setTimeout(function () {
      a.b = Je();
      var b = a.c.callback,
          c = a.c["expired-callback"];
      if (b) try {
        b(a.b);
      } catch (d) {}
      a.a = setTimeout(function () {
        a.a = null;
        a.b = null;
        if (c) try {
          c();
        } catch (d) {}
        a.h && a.execute();
      }, 6E4);
    }, 500));
  };

  Nn.prototype["delete"] = function () {
    Qn(this);
    this.g = !0;
    clearTimeout(this.a);
    this.a = null;
    td(this.f, "click", this.i);
  };

  function Qn(a) {
    if (a.g) throw Error("reCAPTCHA mock was already deleted!");
  }

  ;

  function Rn() {}

  K(Rn, "FACTOR_ID", "phone");

  function Sn() {}

  Sn.prototype.g = function () {
    Mn || (Mn = new Ln());
    return E(Mn);
  };

  Sn.prototype.c = function () {};

  var Tn = null;

  function Un() {
    this.b = l.grecaptcha ? Infinity : 0;
    this.f = null;
    this.a = "__rcb" + Math.floor(1E6 * Math.random()).toString();
  }

  var Vn = new nb(ob, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
      Wn = new We(3E4, 6E4);

  Un.prototype.g = function (a) {
    var b = this;
    return new D(function (c, d) {
      var e = setTimeout(function () {
        d(new u("network-request-failed"));
      }, Wn.get());

      if (!l.grecaptcha || a !== b.f && !b.b) {
        l[b.a] = function () {
          if (l.grecaptcha) {
            b.f = a;
            var g = l.grecaptcha.render;

            l.grecaptcha.render = function (h, m) {
              h = g(h, m);
              b.b++;
              return h;
            };

            clearTimeout(e);
            c(l.grecaptcha);
          } else clearTimeout(e), d(new u("internal-error"));

          delete l[b.a];
        };

        var f = wb(Vn, {
          onload: b.a,
          hl: a || ""
        });
        E(xi(f)).o(function () {
          clearTimeout(e);
          d(new u("internal-error", "Unable to load external reCAPTCHA dependencies!"));
        });
      } else clearTimeout(e), c(l.grecaptcha);
    });
  };

  Un.prototype.c = function () {
    this.b--;
  };

  var Xn = null;

  function Yn(a, b, c, d, e, f, g) {
    K(this, "type", "recaptcha");
    this.c = this.f = null;
    this.D = !1;
    this.u = b;
    this.g = null;
    g ? (Tn || (Tn = new Sn()), g = Tn) : (Xn || (Xn = new Un()), g = Xn);
    this.m = g;
    this.a = c || {
      theme: "light",
      type: "image"
    };
    this.h = [];
    if (this.a[Zn]) throw new u("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
    this.i = "invisible" === this.a[$n];
    if (!l.document) throw new u("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
    if (!ec(b) || !this.i && ec(b).hasChildNodes()) throw new u("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
    this.s = new Ei(a, f || null, e || null);

    this.w = d || function () {
      return null;
    };

    var h = this;
    this.l = [];
    var m = this.a[ao];

    this.a[ao] = function (v) {
      bo(h, v);
      if ("function" === typeof m) m(v);else if ("string" === typeof m) {
        var C = J(m, l);
        "function" === typeof C && C(v);
      }
    };

    var p = this.a[co];

    this.a[co] = function () {
      bo(h, null);
      if ("function" === typeof p) p();else if ("string" === typeof p) {
        var v = J(p, l);
        "function" === typeof v && v();
      }
    };
  }

  var ao = "callback",
      co = "expired-callback",
      Zn = "sitekey",
      $n = "size";

  function bo(a, b) {
    for (var c = 0; c < a.l.length; c++) {
      try {
        a.l[c](b);
      } catch (d) {}
    }
  }

  function eo(a, b) {
    Ua(a.l, function (c) {
      return c == b;
    });
  }

  function fo(a, b) {
    a.h.push(b);
    b.ma(function () {
      Ta(a.h, b);
    });
    return b;
  }

  k = Yn.prototype;

  k.Ga = function () {
    var a = this;
    return this.f ? this.f : this.f = fo(this, E().then(function () {
      if (Pe() && !Ge()) return Be();
      throw new u("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
    }).then(function () {
      return a.m.g(a.w());
    }).then(function (b) {
      a.g = b;
      return N(a.s, Dj, {});
    }).then(function (b) {
      a.a[Zn] = b.recaptchaSiteKey;
    }).o(function (b) {
      a.f = null;
      throw b;
    }));
  };

  k.render = function () {
    go(this);
    var a = this;
    return fo(this, this.Ga().then(function () {
      if (null === a.c) {
        var b = a.u;

        if (!a.i) {
          var c = ec(b);
          b = hc("DIV");
          c.appendChild(b);
        }

        a.c = a.g.render(b, a.a);
      }

      return a.c;
    }));
  };

  k.verify = function () {
    go(this);
    var a = this;
    return fo(this, this.render().then(function (b) {
      return new D(function (c) {
        var d = a.g.getResponse(b);
        if (d) c(d);else {
          var e = function e(f) {
            f && (eo(a, e), c(f));
          };

          a.l.push(e);
          a.i && a.g.execute(a.c);
        }
      });
    }));
  };

  k.reset = function () {
    go(this);
    null !== this.c && this.g.reset(this.c);
  };

  function go(a) {
    if (a.D) throw new u("internal-error", "RecaptchaVerifier instance has been destroyed.");
  }

  k.clear = function () {
    go(this);
    this.D = !0;
    this.m.c();

    for (var a = 0; a < this.h.length; a++) {
      this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");
    }

    if (!this.i) {
      a = ec(this.u);

      for (var b; b = a.firstChild;) {
        a.removeChild(b);
      }
    }
  };

  function ho(a, b, c) {
    var d = !1;

    try {
      this.b = c || _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app();
    } catch (g) {
      throw new u("argument-error", "No firebase.app.App instance is currently initialized.");
    }

    if (this.b.options && this.b.options.apiKey) c = this.b.options.apiKey;else throw new u("invalid-api-key");
    var e = this,
        f = null;

    try {
      f = this.b.auth().Ea();
    } catch (g) {}

    try {
      d = this.b.auth().settings.appVerificationDisabledForTesting;
    } catch (g) {}

    f = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION ? Le(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION, f) : null;
    Yn.call(this, c, a, b, function () {
      try {
        var g = e.b.auth().ja();
      } catch (h) {
        g = null;
      }

      return g;
    }, f, za(Aa), d);
  }

  t(ho, Yn);

  function io(a, b, c, d) {
    a: {
      c = Array.prototype.slice.call(c);
      var e = 0;

      for (var f = !1, g = 0; g < b.length; g++) {
        if (b[g].optional) f = !0;else {
          if (f) throw new u("internal-error", "Argument validator encountered a required argument after an optional argument.");
          e++;
        }
      }

      f = b.length;
      if (c.length < e || f < c.length) d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";else {
        for (e = 0; e < c.length; e++) {
          if (f = b[e].optional && void 0 === c[e], !b[e].K(c[e]) && !f) {
            b = b[e];
            if (0 > e || e >= jo.length) throw new u("internal-error", "Argument validator received an unsupported number of arguments.");
            c = jo[e];
            d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.J + ".";
            break a;
          }
        }

        d = null;
      }
    }

    if (d) throw new u("argument-error", a + " failed: " + d);
  }

  var jo = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

  function V(a, b) {
    return {
      name: a || "",
      J: "a valid string",
      optional: !!b,
      K: function K(c) {
        return "string" === typeof c;
      }
    };
  }

  function ko(a, b) {
    return {
      name: a || "",
      J: "a boolean",
      optional: !!b,
      K: function K(c) {
        return "boolean" === typeof c;
      }
    };
  }

  function W(a, b) {
    return {
      name: a || "",
      J: "a valid object",
      optional: !!b,
      K: q
    };
  }

  function lo(a, b) {
    return {
      name: a || "",
      J: "a function",
      optional: !!b,
      K: n
    };
  }

  function mo(a, b) {
    return {
      name: a || "",
      J: "null",
      optional: !!b,
      K: function K(c) {
        return null === c;
      }
    };
  }

  function no() {
    return {
      name: "",
      J: "an HTML element",
      optional: !1,
      K: function K(a) {
        return !!(a && a instanceof Element);
      }
    };
  }

  function oo() {
    return {
      name: "auth",
      J: "an instance of Firebase Auth",
      optional: !0,
      K: function K(a) {
        return !!(a && a instanceof un);
      }
    };
  }

  function po() {
    return {
      name: "app",
      J: "an instance of Firebase App",
      optional: !0,
      K: function K(a) {
        return !!(a && a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app.App);
      }
    };
  }

  function qo(a) {
    return {
      name: a ? a + "Credential" : "credential",
      J: a ? "a valid " + a + " credential" : "a valid credential",
      optional: !1,
      K: function K(b) {
        if (!b) return !1;
        var c = !a || b.providerId === a;
        return !(!b.ia || !c);
      }
    };
  }

  function ro() {
    return {
      name: "multiFactorAssertion",
      J: "a valid multiFactorAssertion",
      optional: !1,
      K: function K(a) {
        return a ? !!a.ob : !1;
      }
    };
  }

  function so() {
    return {
      name: "authProvider",
      J: "a valid Auth provider",
      optional: !1,
      K: function K(a) {
        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
      }
    };
  }

  function to(a, b) {
    return q(a) && "string" === typeof a.type && a.type === b && n(a.Fa);
  }

  function uo(a) {
    return q(a) && "string" === typeof a.uid;
  }

  function vo() {
    return {
      name: "applicationVerifier",
      J: "an implementation of firebase.auth.ApplicationVerifier",
      optional: !1,
      K: function K(a) {
        return !(!a || "string" !== typeof a.type || !n(a.verify));
      }
    };
  }

  function X(a, b, c, d) {
    return {
      name: c || "",
      J: a.J + " or " + b.J,
      optional: !!d,
      K: function K(e) {
        return a.K(e) || b.K(e);
      }
    };
  }

  ;

  function Y(a, b) {
    for (var c in b) {
      var d = b[c].name;
      a[d] = wo(d, a[c], b[c].j);
    }
  }

  function xo(a, b) {
    for (var c in b) {
      var d = b[c].name;
      d !== c && Object.defineProperty(a, d, {
        get: sa(function (e) {
          return this[e];
        }, c),
        set: sa(function (e, f, g, h) {
          io(e, [g], [h], !0);
          this[f] = h;
        }, d, c, b[c].gb),
        enumerable: !0
      });
    }
  }

  function Z(a, b, c, d) {
    a[b] = wo(b, c, d);
  }

  function wo(a, b, c) {
    function d() {
      var g = Array.prototype.slice.call(arguments);
      io(e, c, g);
      return b.apply(this, g);
    }

    if (!c) return b;
    var e = yo(a),
        f;

    for (f in b) {
      d[f] = b[f];
    }

    for (f in b.prototype) {
      d.prototype[f] = b.prototype[f];
    }

    return d;
  }

  function yo(a) {
    a = a.split(".");
    return a[a.length - 1];
  }

  ;
  Y(un.prototype, {
    fb: {
      name: "applyActionCode",
      j: [V("code")]
    },
    Pa: {
      name: "checkActionCode",
      j: [V("code")]
    },
    jb: {
      name: "confirmPasswordReset",
      j: [V("code"), V("newPassword")]
    },
    cc: {
      name: "createUserWithEmailAndPassword",
      j: [V("email"), V("password")]
    },
    fc: {
      name: "fetchSignInMethodsForEmail",
      j: [V("email")]
    },
    pa: {
      name: "getRedirectResult",
      j: []
    },
    zc: {
      name: "isSignInWithEmailLink",
      j: [V("emailLink")]
    },
    Fc: {
      name: "onAuthStateChanged",
      j: [X(W(), lo(), "nextOrObserver"), lo("opt_error", !0), lo("opt_completed", !0)]
    },
    Gc: {
      name: "onIdTokenChanged",
      j: [X(W(), lo(), "nextOrObserver"), lo("opt_error", !0), lo("opt_completed", !0)]
    },
    rb: {
      name: "sendPasswordResetEmail",
      j: [V("email"), X(W("opt_actionCodeSettings", !0), mo(null, !0), "opt_actionCodeSettings", !0)]
    },
    sb: {
      name: "sendSignInLinkToEmail",
      j: [V("email"), W("actionCodeSettings")]
    },
    tb: {
      name: "setPersistence",
      j: [V("persistence")]
    },
    Qc: {
      name: "signInAndRetrieveDataWithCredential",
      j: [qo()]
    },
    vb: {
      name: "signInAnonymously",
      j: []
    },
    Ya: {
      name: "signInWithCredential",
      j: [qo()]
    },
    Rc: {
      name: "signInWithCustomToken",
      j: [V("token")]
    },
    Sc: {
      name: "signInWithEmailAndPassword",
      j: [V("email"), V("password")]
    },
    Tc: {
      name: "signInWithEmailLink",
      j: [V("email"), V("emailLink", !0)]
    },
    Uc: {
      name: "signInWithPhoneNumber",
      j: [V("phoneNumber"), vo()]
    },
    Vc: {
      name: "signInWithPopup",
      j: [so()]
    },
    Wc: {
      name: "signInWithRedirect",
      j: [so()]
    },
    bd: {
      name: "updateCurrentUser",
      j: [X(function (a) {
        return {
          name: "user",
          J: "an instance of Firebase User",
          optional: !!a,
          K: function K(b) {
            return !!(b && b instanceof P);
          }
        };
      }(), mo(), "user")]
    },
    wb: {
      name: "signOut",
      j: []
    },
    toJSON: {
      name: "toJSON",
      j: [V(null, !0)]
    },
    dd: {
      name: "useDeviceLanguage",
      j: []
    },
    fd: {
      name: "verifyPasswordResetCode",
      j: [V("code")]
    }
  });
  xo(un.prototype, {
    lc: {
      name: "languageCode",
      gb: X(V(), mo(), "languageCode")
    },
    ti: {
      name: "tenantId",
      gb: X(V(), mo(), "tenantId")
    }
  });
  un.Persistence = Kk;
  un.Persistence.LOCAL = "local";
  un.Persistence.SESSION = "session";
  un.Persistence.NONE = "none";
  Y(P.prototype, {
    "delete": {
      name: "delete",
      j: []
    },
    mc: {
      name: "getIdTokenResult",
      j: [ko("opt_forceRefresh", !0)]
    },
    I: {
      name: "getIdToken",
      j: [ko("opt_forceRefresh", !0)]
    },
    Ac: {
      name: "linkAndRetrieveDataWithCredential",
      j: [qo()]
    },
    mb: {
      name: "linkWithCredential",
      j: [qo()]
    },
    Bc: {
      name: "linkWithPhoneNumber",
      j: [V("phoneNumber"), vo()]
    },
    Cc: {
      name: "linkWithPopup",
      j: [so()]
    },
    Dc: {
      name: "linkWithRedirect",
      j: [so()]
    },
    Jc: {
      name: "reauthenticateAndRetrieveDataWithCredential",
      j: [qo()]
    },
    pb: {
      name: "reauthenticateWithCredential",
      j: [qo()]
    },
    Kc: {
      name: "reauthenticateWithPhoneNumber",
      j: [V("phoneNumber"), vo()]
    },
    Lc: {
      name: "reauthenticateWithPopup",
      j: [so()]
    },
    Mc: {
      name: "reauthenticateWithRedirect",
      j: [so()]
    },
    reload: {
      name: "reload",
      j: []
    },
    qb: {
      name: "sendEmailVerification",
      j: [X(W("opt_actionCodeSettings", !0), mo(null, !0), "opt_actionCodeSettings", !0)]
    },
    toJSON: {
      name: "toJSON",
      j: [V(null, !0)]
    },
    ad: {
      name: "unlink",
      j: [V("provider")]
    },
    xb: {
      name: "updateEmail",
      j: [V("email")]
    },
    yb: {
      name: "updatePassword",
      j: [V("password")]
    },
    cd: {
      name: "updatePhoneNumber",
      j: [qo("phone")]
    },
    zb: {
      name: "updateProfile",
      j: [W("profile")]
    },
    Ab: {
      name: "verifyBeforeUpdateEmail",
      j: [V("email"), X(W("opt_actionCodeSettings", !0), mo(null, !0), "opt_actionCodeSettings", !0)]
    }
  });
  Y(Ln.prototype, {
    execute: {
      name: "execute"
    },
    render: {
      name: "render"
    },
    reset: {
      name: "reset"
    },
    getResponse: {
      name: "getResponse"
    }
  });
  Y(Kn.prototype, {
    execute: {
      name: "execute"
    },
    render: {
      name: "render"
    },
    reset: {
      name: "reset"
    },
    getResponse: {
      name: "getResponse"
    }
  });
  Y(D.prototype, {
    ma: {
      name: "finally"
    },
    o: {
      name: "catch"
    },
    then: {
      name: "then"
    }
  });
  xo(Xl.prototype, {
    appVerificationDisabled: {
      name: "appVerificationDisabledForTesting",
      gb: ko("appVerificationDisabledForTesting")
    }
  });
  Y(Yl.prototype, {
    confirm: {
      name: "confirm",
      j: [V("verificationCode")]
    }
  });
  Z(yg, "fromJSON", function (a) {
    a = "string" === typeof a ? JSON.parse(a) : a;

    for (var b, c = [Jg, $g, gh, Gg], d = 0; d < c.length; d++) {
      if (b = c[d](a)) return b;
    }

    return null;
  }, [X(V(), W(), "json")]);
  Z(Vg, "credential", function (a, b) {
    return new Ug(a, b);
  }, [V("email"), V("password")]);
  Y(Ug.prototype, {
    v: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(Mg.prototype, {
    Aa: {
      name: "addScope",
      j: [V("scope")]
    },
    Ia: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(Mg, "credential", Ng, [X(V(), W(), "token")]);
  Z(Vg, "credentialWithLink", ah, [V("email"), V("emailLink")]);
  Y(Og.prototype, {
    Aa: {
      name: "addScope",
      j: [V("scope")]
    },
    Ia: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(Og, "credential", Pg, [X(V(), W(), "token")]);
  Y(Qg.prototype, {
    Aa: {
      name: "addScope",
      j: [V("scope")]
    },
    Ia: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(Qg, "credential", Rg, [X(V(), X(W(), mo()), "idToken"), X(V(), mo(), "accessToken", !0)]);
  Y(Sg.prototype, {
    Ia: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(Sg, "credential", Tg, [X(V(), W(), "token"), V("secret", !0)]);
  Y(M.prototype, {
    Aa: {
      name: "addScope",
      j: [V("scope")]
    },
    credential: {
      name: "credential",
      j: [X(V(), X(W(), mo()), "optionsOrIdToken"), X(V(), mo(), "accessToken", !0)]
    },
    Ia: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Y(Hg.prototype, {
    v: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(Bg.prototype, {
    v: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Z(hh, "credential", lh, [V("verificationId"), V("verificationCode")]);
  Y(hh.prototype, {
    cb: {
      name: "verifyPhoneNumber",
      j: [X(V(), function (a, b) {
        return {
          name: a || "phoneInfoOptions",
          J: "valid phone info options",
          optional: !!b,
          K: function K(c) {
            return c ? c.session && c.phoneNumber ? to(c.session, wg) && "string" === typeof c.phoneNumber : c.session && c.multiFactorHint ? to(c.session, xg) && uo(c.multiFactorHint) : c.session && c.multiFactorUid ? to(c.session, xg) && "string" === typeof c.multiFactorUid : c.phoneNumber ? "string" === typeof c.phoneNumber : !1 : !1;
          }
        };
      }(), "phoneInfoOptions"), vo()]
    }
  });
  Y(ch.prototype, {
    v: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(u.prototype, {
    toJSON: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(uh.prototype, {
    toJSON: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(th.prototype, {
    toJSON: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(dm.prototype, {
    toJSON: {
      name: "toJSON",
      j: [V(null, !0)]
    }
  });
  Y(am.prototype, {
    Pc: {
      name: "resolveSignIn",
      j: [ro()]
    }
  });
  Y(lm.prototype, {
    Ob: {
      name: "getSession",
      j: []
    },
    dc: {
      name: "enroll",
      j: [ro(), V("displayName", !0)]
    },
    $c: {
      name: "unenroll",
      j: [X({
        name: "multiFactorInfo",
        J: "a valid multiFactorInfo",
        optional: !1,
        K: uo
      }, V(), "multiFactorInfoIdentifier")]
    }
  });
  Y(ho.prototype, {
    clear: {
      name: "clear",
      j: []
    },
    render: {
      name: "render",
      j: []
    },
    verify: {
      name: "verify",
      j: []
    }
  });
  Z(Gf, "parseLink", Of, [V("link")]);
  Z(Rn, "assertion", function (a) {
    return new jm(a);
  }, [qo("phone")]);

  (function () {
    if ("undefined" !== typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL && _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent) {
      var a = {
        ActionCodeInfo: {
          Operation: {
            EMAIL_SIGNIN: xf,
            PASSWORD_RESET: "PASSWORD_RESET",
            RECOVER_EMAIL: "RECOVER_EMAIL",
            REVERT_SECOND_FACTOR_ADDITION: zf,
            VERIFY_AND_CHANGE_EMAIL: yf,
            VERIFY_EMAIL: "VERIFY_EMAIL"
          }
        },
        Auth: un,
        AuthCredential: yg,
        Error: u
      };
      Z(a, "EmailAuthProvider", Vg, []);
      Z(a, "FacebookAuthProvider", Mg, []);
      Z(a, "GithubAuthProvider", Og, []);
      Z(a, "GoogleAuthProvider", Qg, []);
      Z(a, "TwitterAuthProvider", Sg, []);
      Z(a, "OAuthProvider", M, [V("providerId")]);
      Z(a, "SAMLAuthProvider", Lg, [V("providerId")]);
      Z(a, "PhoneAuthProvider", hh, [oo()]);
      Z(a, "RecaptchaVerifier", ho, [X(V(), no(), "recaptchaContainer"), W("recaptchaParameters", !0), po()]);
      Z(a, "ActionCodeURL", Gf, []);
      Z(a, "PhoneMultiFactorGenerator", Rn, []);
      _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent({
        name: "auth",
        instanceFactory: function instanceFactory(b) {
          b = b.getProvider("app").getImmediate();
          return new un(b);
        },
        multipleInstances: !1,
        serviceProps: a,
        instantiationMode: "LAZY",
        type: "PUBLIC"
      });
      _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerComponent({
        name: "auth-internal",
        instanceFactory: function instanceFactory(b) {
          b = b.getProvider("auth").getImmediate();
          return {
            getUid: r(b.getUid, b),
            getToken: r(b.kc, b),
            addAuthTokenListener: r(b.bc, b),
            removeAuthTokenListener: r(b.Nc, b)
          };
        },
        multipleInstances: !1,
        instantiationMode: "LAZY",
        type: "PRIVATE"
      });
      _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.registerVersion("@firebase/auth", "0.14.5");
      _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.extendNamespace({
        User: P
      });
    } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)))

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);


var firebaseConfig = {
  apiKey: 'AIzaSyBqEwkKJD7SWmg_fuQXw08C_X-nJZysy7A',
  authDomain: 'trip-interest.firebaseapp.com',
  databaseURL: 'https://trip-interest.firebaseio.com',
  projectId: 'trip-interest',
  storageBucket: 'trip-interest.appspot.com',
  messagingSenderId: '909777707055',
  appId: '1:909777707055:web:cc220d9f29db019f6766da',
  measurementId: 'G-EW8KJ6DG9G'
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);

var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"]();

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



window.userId = null;

function checkAuth() {
  var username = document.getElementById('username'); // const userId = document.getElementById('userId');

  var loginBtn = document.getElementById('login-btn');
  var logoutBtn = document.getElementById('logout-btn');
  var favLink = document.getElementById('fav-link');
  _modules_firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].onAuthStateChanged(function (user) {
    if (user) {
      var displayName = user.displayName;
      window.userId = user.uid;
      username.innerText = "Welcome ".concat(displayName);
      username.style.display = 'block';
      logoutBtn.style.display = 'block';
      loginBtn.style.display = 'none';
      favLink.setAttribute('href', "/favourites/".concat(user.uid));
    } else {
      window.userId = null;
      username.style.display = 'none';
      logoutBtn.style.display = 'none';
      loginBtn.style.display = 'block';
      favLink.setAttribute('href', '/favourites'); // Redirect to login page unless user is on login page or homepage

      if (window.location.pathname !== '/login' && window.location.pathname !== '/') {
        window.location.replace('/login');
      }
    }
  });
}

checkAuth();
window.logout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _modules_firebase__WEBPACK_IMPORTED_MODULE_0__["auth"].signOut();

        case 3:
          window.userId = null;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 6]]);
}));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(53);

var _global = _interopRequireDefault(__webpack_require__(341));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(54);

__webpack_require__(311);

__webpack_require__(313);

__webpack_require__(316);

__webpack_require__(319);

__webpack_require__(321);

__webpack_require__(323);

__webpack_require__(325);

__webpack_require__(327);

__webpack_require__(329);

__webpack_require__(332);

__webpack_require__(334);

__webpack_require__(336);

__webpack_require__(340);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);

__webpack_require__(105);

__webpack_require__(106);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(110);

__webpack_require__(112);

__webpack_require__(113);

__webpack_require__(114);

__webpack_require__(115);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

__webpack_require__(119);

__webpack_require__(120);

__webpack_require__(122);

__webpack_require__(124);

__webpack_require__(126);

__webpack_require__(128);

__webpack_require__(131);

__webpack_require__(132);

__webpack_require__(133);

__webpack_require__(137);

__webpack_require__(139);

__webpack_require__(141);

__webpack_require__(144);

__webpack_require__(145);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(149);

__webpack_require__(150);

__webpack_require__(151);

__webpack_require__(152);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

__webpack_require__(161);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(165);

__webpack_require__(167);

__webpack_require__(168);

__webpack_require__(169);

__webpack_require__(170);

__webpack_require__(171);

__webpack_require__(172);

__webpack_require__(173);

__webpack_require__(174);

__webpack_require__(175);

__webpack_require__(176);

__webpack_require__(177);

__webpack_require__(178);

__webpack_require__(179);

__webpack_require__(184);

__webpack_require__(185);

__webpack_require__(189);

__webpack_require__(190);

__webpack_require__(191);

__webpack_require__(192);

__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(196);

__webpack_require__(197);

__webpack_require__(198);

__webpack_require__(199);

__webpack_require__(200);

__webpack_require__(201);

__webpack_require__(202);

__webpack_require__(203);

__webpack_require__(204);

__webpack_require__(205);

__webpack_require__(206);

__webpack_require__(207);

__webpack_require__(208);

__webpack_require__(210);

__webpack_require__(211);

__webpack_require__(213);

__webpack_require__(214);

__webpack_require__(220);

__webpack_require__(221);

__webpack_require__(223);

__webpack_require__(224);

__webpack_require__(225);

__webpack_require__(229);

__webpack_require__(230);

__webpack_require__(231);

__webpack_require__(232);

__webpack_require__(233);

__webpack_require__(235);

__webpack_require__(236);

__webpack_require__(237);

__webpack_require__(238);

__webpack_require__(241);

__webpack_require__(243);

__webpack_require__(244);

__webpack_require__(245);

__webpack_require__(247);

__webpack_require__(249);

__webpack_require__(251);

__webpack_require__(253);

__webpack_require__(254);

__webpack_require__(255);

__webpack_require__(259);

__webpack_require__(260);

__webpack_require__(261);

__webpack_require__(263);

__webpack_require__(273);

__webpack_require__(277);

__webpack_require__(278);

__webpack_require__(280);

__webpack_require__(281);

__webpack_require__(285);

__webpack_require__(286);

__webpack_require__(288);

__webpack_require__(289);

__webpack_require__(290);

__webpack_require__(291);

__webpack_require__(292);

__webpack_require__(293);

__webpack_require__(294);

__webpack_require__(295);

__webpack_require__(296);

__webpack_require__(297);

__webpack_require__(298);

__webpack_require__(299);

__webpack_require__(300);

__webpack_require__(301);

__webpack_require__(302);

__webpack_require__(303);

__webpack_require__(304);

__webpack_require__(305);

__webpack_require__(306);

__webpack_require__(308);

__webpack_require__(309);

__webpack_require__(310);

module.exports = __webpack_require__(61);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(56);

var has = __webpack_require__(57);

var DESCRIPTORS = __webpack_require__(58);

var $export = __webpack_require__(60);

var redefine = __webpack_require__(70);

var META = __webpack_require__(77).KEY;

var $fails = __webpack_require__(59);

var shared = __webpack_require__(73);

var setToStringTag = __webpack_require__(78);

var uid = __webpack_require__(71);

var wks = __webpack_require__(79);

var wksExt = __webpack_require__(80);

var wksDefine = __webpack_require__(81);

var enumKeys = __webpack_require__(82);

var isArray = __webpack_require__(97);

var anObject = __webpack_require__(64);

var isObject = __webpack_require__(65);

var toObject = __webpack_require__(98);

var toIObject = __webpack_require__(85);

var toPrimitive = __webpack_require__(68);

var createDesc = __webpack_require__(69);

var _create = __webpack_require__(99);

var gOPNExt = __webpack_require__(102);

var $GOPD = __webpack_require__(104);

var $GOPS = __webpack_require__(95);

var $DP = __webpack_require__(63);

var $keys = __webpack_require__(83);

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(103).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(96).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(74)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(62)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 57 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(59)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var core = __webpack_require__(61);

var hide = __webpack_require__(62);

var redefine = __webpack_require__(70);

var ctx = __webpack_require__(75);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(63);

var createDesc = __webpack_require__(69);

module.exports = __webpack_require__(58) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(64);

var IE8_DOM_DEFINE = __webpack_require__(66);

var toPrimitive = __webpack_require__(68);

var dP = Object.defineProperty;
exports.f = __webpack_require__(58) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(58) && !__webpack_require__(59)(function () {
  return Object.defineProperty(__webpack_require__(67)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65);

var document = __webpack_require__(56).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(65); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var hide = __webpack_require__(62);

var has = __webpack_require__(57);

var SRC = __webpack_require__(71)('src');

var $toString = __webpack_require__(72);

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(61).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 71 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73)('native-function-to-string', Function.toString);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(61);

var global = __webpack_require__(56);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(74) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(76);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(71)('meta');

var isObject = __webpack_require__(65);

var has = __webpack_require__(57);

var setDesc = __webpack_require__(63).f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(59)(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(63).f;

var has = __webpack_require__(57);

var TAG = __webpack_require__(79)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(73)('wks');

var uid = __webpack_require__(71);

var _Symbol = __webpack_require__(56).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(79);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var core = __webpack_require__(61);

var LIBRARY = __webpack_require__(74);

var wksExt = __webpack_require__(80);

var defineProperty = __webpack_require__(63).f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(83);

var gOPS = __webpack_require__(95);

var pIE = __webpack_require__(96);

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(84);

var enumBugKeys = __webpack_require__(94);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(57);

var toIObject = __webpack_require__(85);

var arrayIndexOf = __webpack_require__(89)(false);

var IE_PROTO = __webpack_require__(93)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(86);

var defined = __webpack_require__(88);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(87); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(85);

var toLength = __webpack_require__(90);

var toAbsoluteIndex = __webpack_require__(92);

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(91);

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(91);

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(73)('keys');

var uid = __webpack_require__(71);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 95 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(87);

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(88);

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(64);

var dPs = __webpack_require__(100);

var enumBugKeys = __webpack_require__(94);

var IE_PROTO = __webpack_require__(93)('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(67)('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(101).appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(63);

var anObject = __webpack_require__(64);

var getKeys = __webpack_require__(83);

module.exports = __webpack_require__(58) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(56).document;

module.exports = document && document.documentElement;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(85);

var gOPN = __webpack_require__(103).f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(84);

var hiddenKeys = __webpack_require__(94).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(96);

var createDesc = __webpack_require__(69);

var toIObject = __webpack_require__(85);

var toPrimitive = __webpack_require__(68);

var has = __webpack_require__(57);

var IE8_DOM_DEFINE = __webpack_require__(66);

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(58) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(99)
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(58), 'Object', {
  defineProperty: __webpack_require__(63).f
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !__webpack_require__(58), 'Object', {
  defineProperties: __webpack_require__(100)
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(85);

var $getOwnPropertyDescriptor = __webpack_require__(104).f;

__webpack_require__(109)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(60);

var core = __webpack_require__(61);

var fails = __webpack_require__(59);

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(98);

var $getPrototypeOf = __webpack_require__(111);

__webpack_require__(109)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(57);

var toObject = __webpack_require__(98);

var IE_PROTO = __webpack_require__(93)('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(98);

var $keys = __webpack_require__(83);

__webpack_require__(109)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(109)('getOwnPropertyNames', function () {
  return __webpack_require__(102).f;
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(65);

var meta = __webpack_require__(77).onFreeze;

__webpack_require__(109)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(65);

var meta = __webpack_require__(77).onFreeze;

__webpack_require__(109)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(65);

var meta = __webpack_require__(77).onFreeze;

__webpack_require__(109)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(65);

__webpack_require__(109)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(65);

__webpack_require__(109)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(65);

__webpack_require__(109)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(60);

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(121)
});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(58);

var getKeys = __webpack_require__(83);

var gOPS = __webpack_require__(95);

var pIE = __webpack_require__(96);

var toObject = __webpack_require__(98);

var IObject = __webpack_require__(86);

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(59)(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(60);

$export($export.S, 'Object', {
  is: __webpack_require__(123)
});

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(60);

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(125).set
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(65);

var anObject = __webpack_require__(64);

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(75)(Function.call, __webpack_require__(104).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(127);

var test = {};
test[__webpack_require__(79)('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(70)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(87);

var TAG = __webpack_require__(79)('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(60);

$export($export.P, 'Function', {
  bind: __webpack_require__(129)
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(76);

var isObject = __webpack_require__(65);

var invoke = __webpack_require__(130);

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };

  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(63).f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(58) && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(65);

var getPrototypeOf = __webpack_require__(111);

var HAS_INSTANCE = __webpack_require__(79)('hasInstance');

var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(63).f(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }

    return false;
  }
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var $parseInt = __webpack_require__(134); // 18.2.5 parseInt(string, radix)


$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(56).parseInt;

var $trim = __webpack_require__(135).trim;

var ws = __webpack_require__(136);

var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var defined = __webpack_require__(88);

var fails = __webpack_require__(59);

var spaces = __webpack_require__(136);

var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var $parseFloat = __webpack_require__(138); // 18.2.4 parseFloat(string)


$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(56).parseFloat;

var $trim = __webpack_require__(135).trim;

module.exports = 1 / $parseFloat(__webpack_require__(136) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(56);

var has = __webpack_require__(57);

var cof = __webpack_require__(87);

var inheritIfRequired = __webpack_require__(140);

var toPrimitive = __webpack_require__(68);

var fails = __webpack_require__(59);

var gOPN = __webpack_require__(103).f;

var gOPD = __webpack_require__(104).f;

var dP = __webpack_require__(63).f;

var $trim = __webpack_require__(135).trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(__webpack_require__(99)(proto)) == NUMBER;
var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = __webpack_require__(58) ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }

  $Number.prototype = proto;
  proto.constructor = $Number;

  __webpack_require__(70)(global, NUMBER, $Number);
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65);

var setPrototypeOf = __webpack_require__(125).set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var toInteger = __webpack_require__(91);

var aNumberValue = __webpack_require__(142);

var repeat = __webpack_require__(143);

var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;

  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function divide(n) {
  var i = 6;
  var c = 0;

  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};

var numToString = function numToString() {
  var i = 6;
  var s = '';

  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }

  return s;
};

var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function log(x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(59)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);

    if (x < 0) {
      s = '-';
      x = -x;
    }

    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(0, z);
        j = f;

        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }

        multiply(pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }

        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }

    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }

    return m;
  }
});

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(87);

module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(91);

var defined = __webpack_require__(88);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }

  return res;
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $fails = __webpack_require__(59);

var aNumberValue = __webpack_require__(142);

var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(60);

$export($export.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(60);

var _isFinite = __webpack_require__(56).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(60);

$export($export.S, 'Number', {
  isInteger: __webpack_require__(148)
});

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(65);

var floor = Math.floor;

module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(60);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(60);

var isInteger = __webpack_require__(148);

var abs = Math.abs;
$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(60);

$export($export.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(60);

$export($export.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var $parseFloat = __webpack_require__(138); // 20.1.2.12 Number.parseFloat(string)


$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var $parseInt = __webpack_require__(134); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(60);

var log1p = __webpack_require__(156);

var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),
/* 156 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(60);

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(60);

var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(60);

var sign = __webpack_require__(160);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),
/* 160 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(60);

var exp = Math.exp;
$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(60);

var $expm1 = __webpack_require__(164);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

/***/ }),
/* 164 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  fround: __webpack_require__(166)
});

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(160);

var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(60);

var abs = Math.abs;
$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(60);

var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

$export($export.S + $export.F * __webpack_require__(59)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  log1p: __webpack_require__(156)
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  sign: __webpack_require__(160)
});

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(60);

var expm1 = __webpack_require__(164);

var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

$export($export.S + $export.F * __webpack_require__(59)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(60);

var expm1 = __webpack_require__(164);

var exp = Math.exp;
$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(60);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var toAbsoluteIndex = __webpack_require__(92);

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;

    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }

    return res.join('');
  }
});

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var toIObject = __webpack_require__(85);

var toLength = __webpack_require__(90);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;

    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }

    return res.join('');
  }
});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.1.3.25 String.prototype.trim()

__webpack_require__(135)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(180)(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(181)(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(91);

var defined = __webpack_require__(88); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(74);

var $export = __webpack_require__(60);

var redefine = __webpack_require__(70);

var hide = __webpack_require__(62);

var Iterators = __webpack_require__(182);

var $iterCreate = __webpack_require__(183);

var setToStringTag = __webpack_require__(78);

var getPrototypeOf = __webpack_require__(111);

var ITERATOR = __webpack_require__(79)('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(99);

var descriptor = __webpack_require__(69);

var setToStringTag = __webpack_require__(78);

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(62)(IteratorPrototype, __webpack_require__(79)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $at = __webpack_require__(180)(false);

$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(60);

var toLength = __webpack_require__(90);

var context = __webpack_require__(186);

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * __webpack_require__(188)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(187);

var defined = __webpack_require__(88);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(65);

var cof = __webpack_require__(87);

var MATCH = __webpack_require__(79)('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(79)('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(60);

var context = __webpack_require__(186);

var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(188)(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(143)
});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(60);

var toLength = __webpack_require__(90);

var context = __webpack_require__(186);

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * __webpack_require__(188)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.2 String.prototype.anchor(name)

__webpack_require__(193)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var fails = __webpack_require__(59);

var defined = __webpack_require__(88);

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.3 String.prototype.big()

__webpack_require__(193)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.4 String.prototype.blink()

__webpack_require__(193)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.5 String.prototype.bold()

__webpack_require__(193)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.6 String.prototype.fixed()

__webpack_require__(193)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.7 String.prototype.fontcolor(color)

__webpack_require__(193)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.8 String.prototype.fontsize(size)

__webpack_require__(193)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.9 String.prototype.italics()

__webpack_require__(193)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.10 String.prototype.link(url)

__webpack_require__(193)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.11 String.prototype.small()

__webpack_require__(193)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.12 String.prototype.strike()

__webpack_require__(193)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.13 String.prototype.sub()

__webpack_require__(193)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.14 String.prototype.sup()

__webpack_require__(193)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(60);

$export($export.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var toObject = __webpack_require__(98);

var toPrimitive = __webpack_require__(68);

$export($export.P + $export.F * __webpack_require__(59)(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function toISOString() {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(60);

var toISOString = __webpack_require__(209); // PhantomJS / old WebKit has a broken implementations


$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = __webpack_require__(59);

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(70)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(79)('toPrimitive');

var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) __webpack_require__(62)(proto, TO_PRIMITIVE, __webpack_require__(212));

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(64);

var toPrimitive = __webpack_require__(68);

var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(60);

$export($export.S, 'Array', {
  isArray: __webpack_require__(97)
});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(75);

var $export = __webpack_require__(60);

var toObject = __webpack_require__(98);

var call = __webpack_require__(215);

var isArrayIter = __webpack_require__(216);

var toLength = __webpack_require__(90);

var createProperty = __webpack_require__(217);

var getIterFn = __webpack_require__(218);

$export($export.S + $export.F * !__webpack_require__(219)(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(64);

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(182);

var ITERATOR = __webpack_require__(79)('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(63);

var createDesc = __webpack_require__(69);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(127);

var ITERATOR = __webpack_require__(79)('iterator');

var Iterators = __webpack_require__(182);

module.exports = __webpack_require__(61).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(79)('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var createProperty = __webpack_require__(217); // WebKit Array.of isn't generic


$export($export.S + $export.F * __webpack_require__(59)(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }

    result.length = aLen;
    return result;
  }
});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.13 Array.prototype.join(separator)

var $export = __webpack_require__(60);

var toIObject = __webpack_require__(85);

var arrayJoin = [].join; // fallback for not array-like strings

$export($export.P + $export.F * (__webpack_require__(86) != Object || !__webpack_require__(222)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(59);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var html = __webpack_require__(101);

var cof = __webpack_require__(87);

var toAbsoluteIndex = __webpack_require__(92);

var toLength = __webpack_require__(90);

var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

$export($export.P + $export.F * __webpack_require__(59)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;

    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }

    return cloned;
  }
});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var aFunction = __webpack_require__(76);

var toObject = __webpack_require__(98);

var fails = __webpack_require__(59);

var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null); // Old WebKit
}) || !__webpack_require__(222)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $forEach = __webpack_require__(226)(0);

var STRICT = __webpack_require__(222)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(75);

var IObject = __webpack_require__(86);

var toObject = __webpack_require__(98);

var toLength = __webpack_require__(90);

var asc = __webpack_require__(227);

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(228);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65);

var isArray = __webpack_require__(97);

var SPECIES = __webpack_require__(79)('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $map = __webpack_require__(226)(1);

$export($export.P + $export.F * !__webpack_require__(222)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $filter = __webpack_require__(226)(2);

$export($export.P + $export.F * !__webpack_require__(222)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $some = __webpack_require__(226)(3);

$export($export.P + $export.F * !__webpack_require__(222)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $every = __webpack_require__(226)(4);

$export($export.P + $export.F * !__webpack_require__(222)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $reduce = __webpack_require__(234);

$export($export.P + $export.F * !__webpack_require__(222)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(76);

var toObject = __webpack_require__(98);

var IObject = __webpack_require__(86);

var toLength = __webpack_require__(90);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }

    index += i;

    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }

  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }

  return memo;
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $reduce = __webpack_require__(234);

$export($export.P + $export.F * !__webpack_require__(222)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $indexOf = __webpack_require__(89)(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(222)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var toIObject = __webpack_require__(85);

var toInteger = __webpack_require__(91);

var toLength = __webpack_require__(90);

var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(222)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }

    return -1;
  }
});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(60);

$export($export.P, 'Array', {
  copyWithin: __webpack_require__(239)
});

__webpack_require__(240)('copyWithin');

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(98);

var toAbsoluteIndex = __webpack_require__(92);

var toLength = __webpack_require__(90);

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(79)('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(62)(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(60);

$export($export.P, 'Array', {
  fill: __webpack_require__(242)
});

__webpack_require__(240)('fill');

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(98);

var toAbsoluteIndex = __webpack_require__(92);

var toLength = __webpack_require__(90);

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(60);

var $find = __webpack_require__(226)(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(240)(KEY);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = __webpack_require__(60);

var $find = __webpack_require__(226)(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(240)(KEY);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(246)('Array');

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(56);

var dP = __webpack_require__(63);

var DESCRIPTORS = __webpack_require__(58);

var SPECIES = __webpack_require__(79)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(240);

var step = __webpack_require__(248);

var Iterators = __webpack_require__(182);

var toIObject = __webpack_require__(85); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(181)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 248 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var inheritIfRequired = __webpack_require__(140);

var dP = __webpack_require__(63).f;

var gOPN = __webpack_require__(103).f;

var isRegExp = __webpack_require__(187);

var $flags = __webpack_require__(250);

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(58) && (!CORRECT_NEW || __webpack_require__(59)(function () {
  re2[__webpack_require__(79)('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }

  proto.constructor = $RegExp;
  $RegExp.prototype = proto;

  __webpack_require__(70)(global, 'RegExp', $RegExp);
}

__webpack_require__(246)('RegExp');

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(64);

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpExec = __webpack_require__(252);

__webpack_require__(60)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(250);

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(254);

var anObject = __webpack_require__(64);

var $flags = __webpack_require__(250);

var DESCRIPTORS = __webpack_require__(58);

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(70)(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(59)(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(58) && /./g.flags != 'g') __webpack_require__(63).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(250)
});

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(64);

var toLength = __webpack_require__(90);

var advanceStringIndex = __webpack_require__(256);

var regExpExec = __webpack_require__(257); // @@match logic


__webpack_require__(258)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var at = __webpack_require__(180)(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var classof = __webpack_require__(127);

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(251);

var redefine = __webpack_require__(70);

var hide = __webpack_require__(62);

var fails = __webpack_require__(59);

var defined = __webpack_require__(88);

var wks = __webpack_require__(79);

var regexpExec = __webpack_require__(252);

var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(64);

var toObject = __webpack_require__(98);

var toLength = __webpack_require__(90);

var toInteger = __webpack_require__(91);

var advanceStringIndex = __webpack_require__(256);

var regExpExec = __webpack_require__(257);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


__webpack_require__(258)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(64);

var sameValue = __webpack_require__(123);

var regExpExec = __webpack_require__(257); // @@search logic


__webpack_require__(258)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(187);

var anObject = __webpack_require__(64);

var speciesConstructor = __webpack_require__(262);

var advanceStringIndex = __webpack_require__(256);

var toLength = __webpack_require__(90);

var callRegExpExec = __webpack_require__(257);

var regexpExec = __webpack_require__(252);

var fails = __webpack_require__(59);

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

__webpack_require__(258)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(64);

var aFunction = __webpack_require__(76);

var SPECIES = __webpack_require__(79)('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(74);

var global = __webpack_require__(56);

var ctx = __webpack_require__(75);

var classof = __webpack_require__(127);

var $export = __webpack_require__(60);

var isObject = __webpack_require__(65);

var aFunction = __webpack_require__(76);

var anInstance = __webpack_require__(264);

var forOf = __webpack_require__(265);

var speciesConstructor = __webpack_require__(262);

var task = __webpack_require__(266).set;

var microtask = __webpack_require__(267)();

var newPromiseCapabilityModule = __webpack_require__(268);

var perform = __webpack_require__(269);

var userAgent = __webpack_require__(270);

var promiseResolve = __webpack_require__(271);

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(79)('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(272)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

__webpack_require__(78)($Promise, PROMISE);

__webpack_require__(246)(PROMISE);

Wrapper = __webpack_require__(61)[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(219)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(75);

var call = __webpack_require__(215);

var isArrayIter = __webpack_require__(216);

var anObject = __webpack_require__(64);

var toLength = __webpack_require__(90);

var getIterFn = __webpack_require__(218);

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(75);

var invoke = __webpack_require__(130);

var html = __webpack_require__(101);

var cel = __webpack_require__(67);

var global = __webpack_require__(56);

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run() {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(87)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var macrotask = __webpack_require__(266).set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(87)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(76);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(64);

var isObject = __webpack_require__(65);

var newPromiseCapability = __webpack_require__(268);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(70);

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(274);

var validate = __webpack_require__(275);

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(276)(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(63).f;

var create = __webpack_require__(99);

var redefineAll = __webpack_require__(272);

var ctx = __webpack_require__(75);

var anInstance = __webpack_require__(264);

var forOf = __webpack_require__(265);

var $iterDefine = __webpack_require__(181);

var step = __webpack_require__(248);

var setSpecies = __webpack_require__(246);

var DESCRIPTORS = __webpack_require__(58);

var fastKey = __webpack_require__(77).fastKey;

var validate = __webpack_require__(275);

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(65);

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(56);

var $export = __webpack_require__(60);

var redefine = __webpack_require__(70);

var redefineAll = __webpack_require__(272);

var meta = __webpack_require__(77);

var forOf = __webpack_require__(265);

var anInstance = __webpack_require__(264);

var isObject = __webpack_require__(65);

var fails = __webpack_require__(59);

var $iterDetect = __webpack_require__(219);

var setToStringTag = __webpack_require__(78);

var inheritIfRequired = __webpack_require__(140);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(274);

var validate = __webpack_require__(275);

var SET = 'Set'; // 23.2 Set Objects

module.exports = __webpack_require__(276)(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(56);

var each = __webpack_require__(226)(0);

var redefine = __webpack_require__(70);

var meta = __webpack_require__(77);

var assign = __webpack_require__(121);

var weak = __webpack_require__(279);

var isObject = __webpack_require__(65);

var validate = __webpack_require__(275);

var NATIVE_WEAK_MAP = __webpack_require__(275);

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
}; // 23.3 WeakMap Objects

var $WeakMap = module.exports = __webpack_require__(276)(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();

        var result = this._f[key](a, b);

        return key == 'set' ? this : result; // store all the rest on native weakmap
      }

      return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefineAll = __webpack_require__(272);

var getWeak = __webpack_require__(77).getWeak;

var anObject = __webpack_require__(64);

var isObject = __webpack_require__(65);

var anInstance = __webpack_require__(264);

var forOf = __webpack_require__(265);

var createArrayMethod = __webpack_require__(226);

var $has = __webpack_require__(57);

var validate = __webpack_require__(275);

var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};

var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = id++; // collection id

      that._l = undefined; // leak store for uncaught frozen objects

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var weak = __webpack_require__(279);

var validate = __webpack_require__(275);

var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

__webpack_require__(276)(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(60);

var $typed = __webpack_require__(282);

var buffer = __webpack_require__(283);

var anObject = __webpack_require__(64);

var toAbsoluteIndex = __webpack_require__(92);

var toLength = __webpack_require__(90);

var isObject = __webpack_require__(65);

var ArrayBuffer = __webpack_require__(56).ArrayBuffer;

var speciesConstructor = __webpack_require__(262);

var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
  ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});
$export($export.P + $export.U + $export.F * __webpack_require__(59)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;

    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }

    return result;
  }
});

__webpack_require__(246)(ARRAY_BUFFER);

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(56);

var hide = __webpack_require__(62);

var uid = __webpack_require__(71);

var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(56);

var DESCRIPTORS = __webpack_require__(58);

var LIBRARY = __webpack_require__(74);

var $typed = __webpack_require__(282);

var hide = __webpack_require__(62);

var redefineAll = __webpack_require__(272);

var fails = __webpack_require__(59);

var anInstance = __webpack_require__(264);

var toInteger = __webpack_require__(91);

var toLength = __webpack_require__(90);

var toIndex = __webpack_require__(284);

var gOPN = __webpack_require__(103).f;

var dP = __webpack_require__(63).f;

var arrayFill = __webpack_require__(242);

var setToStringTag = __webpack_require__(78);

var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value); // eslint-disable-next-line no-self-compare

  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);

    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
    ;
  }

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
    ;
  }

  buffer[--i] |= s * 128;
  return buffer;
}

function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;

  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}

function packI8(it) {
  return [it & 0xff];
}

function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}

function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}

function packF64(it) {
  return packIEEE754(it, 52, 8);
}

function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, {
    get: function get() {
      return this[internal];
    }
  });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}

function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);

  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new

    new $ArrayBuffer(1.5); // eslint-disable-line no-new

    new $ArrayBuffer(NaN); // eslint-disable-line no-new

    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };

    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }

    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  } // iOS Safari 7.x bug


  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(91);

var toLength = __webpack_require__(90);

module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

$export($export.G + $export.W + $export.F * !__webpack_require__(282).ABV, {
  DataView: __webpack_require__(283).DataView
});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (__webpack_require__(58)) {
  var LIBRARY = __webpack_require__(74);

  var global = __webpack_require__(56);

  var fails = __webpack_require__(59);

  var $export = __webpack_require__(60);

  var $typed = __webpack_require__(282);

  var $buffer = __webpack_require__(283);

  var ctx = __webpack_require__(75);

  var anInstance = __webpack_require__(264);

  var propertyDesc = __webpack_require__(69);

  var hide = __webpack_require__(62);

  var redefineAll = __webpack_require__(272);

  var toInteger = __webpack_require__(91);

  var toLength = __webpack_require__(90);

  var toIndex = __webpack_require__(284);

  var toAbsoluteIndex = __webpack_require__(92);

  var toPrimitive = __webpack_require__(68);

  var has = __webpack_require__(57);

  var classof = __webpack_require__(127);

  var isObject = __webpack_require__(65);

  var toObject = __webpack_require__(98);

  var isArrayIter = __webpack_require__(216);

  var create = __webpack_require__(99);

  var getPrototypeOf = __webpack_require__(111);

  var gOPN = __webpack_require__(103).f;

  var getIterFn = __webpack_require__(218);

  var uid = __webpack_require__(71);

  var wks = __webpack_require__(79);

  var createArrayMethod = __webpack_require__(226);

  var createArrayIncludes = __webpack_require__(89);

  var speciesConstructor = __webpack_require__(262);

  var ArrayIterators = __webpack_require__(247);

  var Iterators = __webpack_require__(182);

  var $iterDetect = __webpack_require__(219);

  var setSpecies = __webpack_require__(246);

  var arrayFill = __webpack_require__(242);

  var arrayCopyWithin = __webpack_require__(239);

  var $DP = __webpack_require__(63);

  var $GOPD = __webpack_require__(104);

  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }

    return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;

    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }

      O = values;
    }

    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;

      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }

      return that;
    },
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);

    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
  };

  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };

  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }

    return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {
      /* noop */
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  }); // eslint-disable-next-line max-statements

  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };

    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };

    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;

        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }

        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });

        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new

      new TypedArray(null); // eslint-disable-line no-new

      new TypedArray(1.5); // eslint-disable-line no-new

      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645

        if (!isObject(data)) return new Base(toIndex(data));

        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }

        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }

    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;
    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export($export.P, NAME, proto);
    setSpecies(NAME);
    $export($export.P + $export.F * FORCED_SET, NAME, {
      set: $set
    });
    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {
  /* empty */
};

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(287)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(60);

var aFunction = __webpack_require__(76);

var anObject = __webpack_require__(64);

var rApply = (__webpack_require__(56).Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export($export.S + $export.F * !__webpack_require__(59)(function () {
  rApply(function () {
    /* empty */
  });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(60);

var create = __webpack_require__(99);

var aFunction = __webpack_require__(76);

var anObject = __webpack_require__(64);

var isObject = __webpack_require__(65);

var fails = __webpack_require__(59);

var bind = __webpack_require__(129);

var rConstruct = (__webpack_require__(56).Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(63);

var $export = __webpack_require__(60);

var anObject = __webpack_require__(64);

var toPrimitive = __webpack_require__(68); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


$export($export.S + $export.F * __webpack_require__(59)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);

    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(60);

var gOPD = __webpack_require__(104).f;

var anObject = __webpack_require__(64);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 26.1.5 Reflect.enumerate(target)

var $export = __webpack_require__(60);

var anObject = __webpack_require__(64);

var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target

  this._i = 0; // next index

  var keys = this._k = []; // keys

  var key;

  for (key in iterated) {
    keys.push(key);
  }
};

__webpack_require__(183)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;

  do {
    if (that._i >= keys.length) return {
      value: undefined,
      done: true
    };
  } while (!((key = keys[that._i++]) in that._t));

  return {
    value: key,
    done: false
  };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(104);

var getPrototypeOf = __webpack_require__(111);

var has = __webpack_require__(57);

var $export = __webpack_require__(60);

var isObject = __webpack_require__(65);

var anObject = __webpack_require__(64);

function get(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {
  get: get
});

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(104);

var $export = __webpack_require__(60);

var anObject = __webpack_require__(64);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(60);

var getProto = __webpack_require__(111);

var anObject = __webpack_require__(64);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(60);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(60);

var anObject = __webpack_require__(64);

var $isExtensible = Object.isExtensible;
$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(60);

$export($export.S, 'Reflect', {
  ownKeys: __webpack_require__(307)
});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(103);

var gOPS = __webpack_require__(95);

var anObject = __webpack_require__(64);

var Reflect = __webpack_require__(56).Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(60);

var anObject = __webpack_require__(64);

var $preventExtensions = Object.preventExtensions;
$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);

    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(63);

var gOPD = __webpack_require__(104);

var getPrototypeOf = __webpack_require__(111);

var has = __webpack_require__(57);

var $export = __webpack_require__(60);

var createDesc = __webpack_require__(69);

var anObject = __webpack_require__(64);

var isObject = __webpack_require__(65);

function set(target, propertyKey, V
/* , receiver */
) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;

  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }

    ownDesc = createDesc(0);
  }

  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;

    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));

    return true;
  }

  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {
  set: set
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(60);

var setProto = __webpack_require__(125);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);

    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(312);

module.exports = __webpack_require__(61).Array.includes;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(60);

var $includes = __webpack_require__(89)(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(240)('includes');

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(314);

module.exports = __webpack_require__(61).Array.flatMap;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

var $export = __webpack_require__(60);

var flattenIntoArray = __webpack_require__(315);

var toObject = __webpack_require__(98);

var toLength = __webpack_require__(90);

var aFunction = __webpack_require__(76);

var arraySpeciesCreate = __webpack_require__(227);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(240)('flatMap');

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var isArray = __webpack_require__(97);

var isObject = __webpack_require__(65);

var toLength = __webpack_require__(90);

var ctx = __webpack_require__(75);

var IS_CONCAT_SPREADABLE = __webpack_require__(79)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;

      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
}

module.exports = flattenIntoArray;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(317);

module.exports = __webpack_require__(61).String.padStart;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(60);

var $pad = __webpack_require__(318);

var userAgent = __webpack_require__(270); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(90);

var repeat = __webpack_require__(143);

var defined = __webpack_require__(88);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(320);

module.exports = __webpack_require__(61).String.padEnd;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(60);

var $pad = __webpack_require__(318);

var userAgent = __webpack_require__(270); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(322);

module.exports = __webpack_require__(61).String.trimLeft;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(135)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(324);

module.exports = __webpack_require__(61).String.trimRight;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

__webpack_require__(135)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(326);

module.exports = __webpack_require__(80).f('asyncIterator');

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81)('asyncIterator');

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(328);

module.exports = __webpack_require__(61).Object.getOwnPropertyDescriptors;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(60);

var ownKeys = __webpack_require__(307);

var toIObject = __webpack_require__(85);

var gOPD = __webpack_require__(104);

var createProperty = __webpack_require__(217);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(330);

module.exports = __webpack_require__(61).Object.values;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(60);

var $values = __webpack_require__(331)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(58);

var getKeys = __webpack_require__(83);

var toIObject = __webpack_require__(85);

var isEnum = __webpack_require__(96).f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(333);

module.exports = __webpack_require__(61).Object.entries;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(60);

var $entries = __webpack_require__(331)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(263);

__webpack_require__(335);

module.exports = __webpack_require__(61).Promise['finally'];

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(60);

var core = __webpack_require__(61);

var global = __webpack_require__(56);

var speciesConstructor = __webpack_require__(262);

var promiseResolve = __webpack_require__(271);

$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(337);

__webpack_require__(338);

__webpack_require__(339);

module.exports = __webpack_require__(61);

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(56);

var $export = __webpack_require__(60);

var userAgent = __webpack_require__(270);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(60);

var $task = __webpack_require__(266);

$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(247);

var getKeys = __webpack_require__(83);

var redefine = __webpack_require__(70);

var global = __webpack_require__(56);

var hide = __webpack_require__(62);

var Iterators = __webpack_require__(182);

var wks = __webpack_require__(79);

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)(module)))

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(342);

module.exports = __webpack_require__(345).global;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(343);

$export($export.G, {
  global: __webpack_require__(344)
});

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(344);

var core = __webpack_require__(345);

var ctx = __webpack_require__(346);

var hide = __webpack_require__(348);

var has = __webpack_require__(358);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 344 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 345 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(347);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(349);

var createDesc = __webpack_require__(357);

module.exports = __webpack_require__(353) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(350);

var IE8_DOM_DEFINE = __webpack_require__(352);

var toPrimitive = __webpack_require__(356);

var dP = Object.defineProperty;
exports.f = __webpack_require__(353) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(351);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 351 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(353) && !__webpack_require__(354)(function () {
  return Object.defineProperty(__webpack_require__(355)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(354)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 354 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(351);

var document = __webpack_require__(344).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(351); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 358 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ })
/******/ ]));
//# sourceMappingURL=Auth.bundle.js.map