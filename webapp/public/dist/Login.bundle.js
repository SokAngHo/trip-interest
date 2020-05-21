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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ (Array(31).concat([
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
var firebaseui = __webpack_require__(32);


/* Reference:
Firebase, "firebase/firebaseui-web", GitHub, 2020. [Online].
Available: https://github.com/firebase/firebaseui-web.
*/

function initLoginUI() {
  var uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [_modules_firebase__WEBPACK_IMPORTED_MODULE_0__["firebase"].auth.GoogleAuthProvider.PROVIDER_ID]
  };
  var ui = new firebaseui.auth.AuthUI(_modules_firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]);
  ui.start('#firebaseui-auth-container', uiConfig);
}

initLoginUI();

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_design_lite_src_mdlComponentHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var material_design_lite_src_mdlComponentHandler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_mdlComponentHandler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_design_lite_src_button_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var material_design_lite_src_button_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_button_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_design_lite_src_progress_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var material_design_lite_src_progress_progress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_progress_progress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_design_lite_src_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var material_design_lite_src_spinner_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_spinner_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_design_lite_src_textfield_textfield__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var material_design_lite_src_textfield_textfield__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_design_lite_src_textfield_textfield__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









(function () {
  (function () {
    var l,
        aa = "function" == typeof Object.create ? Object.create : function (a) {
      function b() {}

      b.prototype = a;
      return new b();
    },
        ba;
    if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;else {
      var ca;

      a: {
        var da = {
          zb: !0
        },
            ea = {};

        try {
          ea.__proto__ = da;
          ca = ea.zb;
          break a;
        } catch (a) {}

        ca = !1;
      }

      ba = ca ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      } : null;
    }
    var fa = ba;

    function n(a, b) {
      a.prototype = aa(b.prototype);
      a.prototype.constructor = a;
      if (fa) fa(a, b);else for (var c in b) {
        if ("prototype" != c) if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else a[c] = b[c];
      }
      a.M = b.prototype;
    }

    var ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      a != Array.prototype && a != Object.prototype && (a[b] = c.value);
    },
        ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ka(a, b) {
      if (b) {
        var c = ia;
        a = a.split(".");

        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e];
        }

        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ha(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    }

    function la(a) {
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

    ka("Object.is", function (a) {
      return a ? a : function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
      };
    });
    ka("Array.prototype.includes", function (a) {
      return a ? a : function (b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;

        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
          var f = d[c];
          if (f === b || Object.is(f, b)) return !0;
        }

        return !1;
      };
    });

    function ma(a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: la(a)
      };
    }

    ka("Promise", function (a) {
      function b(g) {
        this.f = 0;
        this.h = void 0;
        this.a = [];
        var h = this.j();

        try {
          g(h.resolve, h.reject);
        } catch (k) {
          h.reject(k);
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

      c.prototype.f = function (g) {
        if (null == this.a) {
          this.a = [];
          var h = this;
          this.h(function () {
            h.s();
          });
        }

        this.a.push(g);
      };

      var e = ia.setTimeout;

      c.prototype.h = function (g) {
        e(g, 0);
      };

      c.prototype.s = function () {
        for (; this.a && this.a.length;) {
          var g = this.a;
          this.a = [];

          for (var h = 0; h < g.length; ++h) {
            var k = g[h];
            g[h] = null;

            try {
              k();
            } catch (m) {
              this.j(m);
            }
          }
        }

        this.a = null;
      };

      c.prototype.j = function (g) {
        this.h(function () {
          throw g;
        });
      };

      b.prototype.j = function () {
        function g(m) {
          return function (q) {
            k || (k = !0, m.call(h, q));
          };
        }

        var h = this,
            k = !1;
        return {
          resolve: g(this.L),
          reject: g(this.s)
        };
      };

      b.prototype.L = function (g) {
        if (g === this) this.s(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof b) this.N(g);else {
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

          h ? this.I(g) : this.i(g);
        }
      };

      b.prototype.I = function (g) {
        var h = void 0;

        try {
          h = g.then;
        } catch (k) {
          this.s(k);
          return;
        }

        "function" == typeof h ? this.O(h, g) : this.i(g);
      };

      b.prototype.s = function (g) {
        this.w(2, g);
      };

      b.prototype.i = function (g) {
        this.w(1, g);
      };

      b.prototype.w = function (g, h) {
        if (0 != this.f) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.f);
        this.f = g;
        this.h = h;
        this.C();
      };

      b.prototype.C = function () {
        if (null != this.a) {
          for (var g = 0; g < this.a.length; ++g) {
            f.f(this.a[g]);
          }

          this.a = null;
        }
      };

      var f = new c();

      b.prototype.N = function (g) {
        var h = this.j();
        g.Ia(h.resolve, h.reject);
      };

      b.prototype.O = function (g, h) {
        var k = this.j();

        try {
          g.call(h, k.resolve, k.reject);
        } catch (m) {
          k.reject(m);
        }
      };

      b.prototype.then = function (g, h) {
        function k(S, Ha) {
          return "function" == typeof S ? function (Pa) {
            try {
              m(S(Pa));
            } catch (ja) {
              q(ja);
            }
          } : Ha;
        }

        var m,
            q,
            E = new b(function (S, Ha) {
          m = S;
          q = Ha;
        });
        this.Ia(k(g, m), k(h, q));
        return E;
      };

      b.prototype["catch"] = function (g) {
        return this.then(void 0, g);
      };

      b.prototype.Ia = function (g, h) {
        function k() {
          switch (m.f) {
            case 1:
              g(m.h);
              break;

            case 2:
              h(m.h);
              break;

            default:
              throw Error("Unexpected state: " + m.f);
          }
        }

        var m = this;
        null == this.a ? f.f(k) : this.a.push(k);
      };

      b.resolve = d;

      b.reject = function (g) {
        return new b(function (h, k) {
          k(g);
        });
      };

      b.race = function (g) {
        return new b(function (h, k) {
          for (var m = ma(g), q = m.next(); !q.done; q = m.next()) {
            d(q.value).Ia(h, k);
          }
        });
      };

      b.all = function (g) {
        var h = ma(g),
            k = h.next();
        return k.done ? d([]) : new b(function (m, q) {
          function E(Pa) {
            return function (ja) {
              S[Pa] = ja;
              Ha--;
              0 == Ha && m(S);
            };
          }

          var S = [],
              Ha = 0;

          do {
            S.push(void 0), Ha++, d(k.value).Ia(E(S.length - 1), q), k = h.next();
          } while (!k.done);
        });
      };

      return b;
    });
    var p = this;

    function na(a) {
      return void 0 !== a;
    }

    function r(a) {
      return "string" == typeof a;
    }

    var oa = /^[\w+/_-]+[=]{0,2}$/,
        pa = null;

    function qa() {}

    function ra(a) {
      a.V = void 0;

      a.Ya = function () {
        return a.V ? a.V : a.V = new a();
      };
    }

    function sa(a) {
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

    function ta(a) {
      return "array" == sa(a);
    }

    function ua(a) {
      var b = sa(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    }

    function va(a) {
      return "function" == sa(a);
    }

    function wa(a) {
      var b = _typeof(a);

      return "object" == b && null != a || "function" == b;
    }

    var xa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ya = 0;

    function za(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }

    function Aa(a, b, c) {
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

    function t(a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t = za : t = Aa;
      return t.apply(null, arguments);
    }

    function Ba(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }

    function u(a, b) {
      for (var c in b) {
        a[c] = b[c];
      }
    }

    var Ca = Date.now || function () {
      return +new Date();
    };

    function v(a, b) {
      a = a.split(".");
      var c = p;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);

      for (var d; a.length && (d = a.shift());) {
        !a.length && na(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {};
      }
    }

    function w(a, b) {
      function c() {}

      c.prototype = b.prototype;
      a.M = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;

      a.uc = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) {
          g[h - 2] = arguments[h];
        }

        return b.prototype[e].apply(d, g);
      };
    }

    function Da(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, Da);else {
        var b = Error().stack;
        b && (this.stack = b);
      }
      a && (this.message = String(a));
    }

    w(Da, Error);
    Da.prototype.name = "CustomError";
    var Ea;

    function Fa(a, b) {
      a = a.split("%s");

      for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
        c += a[e] + (e < b.length ? b[e] : "%s");
      }

      Da.call(this, c + a[d]);
    }

    w(Fa, Da);
    Fa.prototype.name = "AssertionError";

    function Ga(a, b) {
      throw new Fa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }

    var Ia = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, 0) : -1;

      for (var c = 0; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }

      return -1;
    },
        Ja = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    };

    function Ka(a, b) {
      for (var c = r(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    }

    var La = Array.prototype.filter ? function (a, b) {
      return Array.prototype.filter.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = [], e = 0, f = r(a) ? a.split("") : a, g = 0; g < c; g++) {
        if (g in f) {
          var h = f[g];
          b.call(void 0, h, g, a) && (d[e++] = h);
        }
      }

      return d;
    },
        Ma = Array.prototype.map ? function (a, b) {
      return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = Array(c), e = r(a) ? a.split("") : a, f = 0; f < c; f++) {
        f in e && (d[f] = b.call(void 0, e[f], f, a));
      }

      return d;
    },
        Na = Array.prototype.some ? function (a, b) {
      return Array.prototype.some.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++) {
        if (e in d && b.call(void 0, d[e], e, a)) return !0;
      }

      return !1;
    };

    function Oa(a, b, c) {
      for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return f;
      }

      return -1;
    }

    function Qa(a, b) {
      return 0 <= Ia(a, b);
    }

    function Ra(a, b) {
      b = Ia(a, b);
      var c;
      (c = 0 <= b) && Sa(a, b);
      return c;
    }

    function Sa(a, b) {
      return 1 == Array.prototype.splice.call(a, b, 1).length;
    }

    function Ta(a, b) {
      b = Oa(a, b, void 0);
      0 <= b && Sa(a, b);
    }

    function Ua(a, b) {
      var c = 0;
      Ka(a, function (d, e) {
        b.call(void 0, d, e, a) && Sa(a, e) && c++;
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

    function Xa(a, b, c, d) {
      return Array.prototype.splice.apply(a, Ya(arguments, 1));
    }

    function Ya(a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    }

    var Za = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
        $a = /&/g,
        ab = /</g,
        bb = />/g,
        cb = /"/g,
        db = /'/g,
        eb = /\x00/g,
        fb = /[\x00&<>"']/;

    function gb(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    function hb(a) {
      fb.test(a) && (-1 != a.indexOf("&") && (a = a.replace($a, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ab, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(bb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(cb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(db, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(eb, "&#0;")));
      return a;
    }

    function ib(a, b, c) {
      for (var d in a) {
        b.call(c, a[d], d, a);
      }
    }

    function jb(a) {
      var b = {},
          c;

      for (c in a) {
        b[c] = a[c];
      }

      return b;
    }

    var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function lb(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];

        for (c in d) {
          a[c] = d[c];
        }

        for (var f = 0; f < kb.length; f++) {
          c = kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    }

    var mb = "StopIteration" in p ? p.StopIteration : {
      message: "StopIteration",
      stack: ""
    };

    function nb() {}

    nb.prototype.next = function () {
      throw mb;
    };

    nb.prototype.ha = function () {
      return this;
    };

    function ob(a) {
      if (a instanceof nb) return a;
      if ("function" == typeof a.ha) return a.ha(!1);

      if (ua(a)) {
        var b = 0,
            c = new nb();

        c.next = function () {
          for (;;) {
            if (b >= a.length) throw mb;
            if (b in a) return a[b++];
            b++;
          }
        };

        return c;
      }

      throw Error("Not implemented");
    }

    function pb(a, b) {
      if (ua(a)) try {
        Ja(a, b, void 0);
      } catch (c) {
        if (c !== mb) throw c;
      } else {
        a = ob(a);

        try {
          for (;;) {
            b.call(void 0, a.next(), void 0, a);
          }
        } catch (c$0) {
          if (c$0 !== mb) throw c$0;
        }
      }
    }

    function qb(a) {
      if (ua(a)) return Wa(a);
      a = ob(a);
      var b = [];
      pb(a, function (c) {
        b.push(c);
      });
      return b;
    }

    function rb(a, b) {
      this.f = {};
      this.a = [];
      this.j = this.h = 0;
      var c = arguments.length;

      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");

        for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else if (a) if (a instanceof rb) for (c = a.ja(), d = 0; d < c.length; d++) {
        this.set(c[d], a.get(c[d]));
      } else for (d in a) {
        this.set(d, a[d]);
      }
    }

    l = rb.prototype;

    l.la = function () {
      sb(this);

      for (var a = [], b = 0; b < this.a.length; b++) {
        a.push(this.f[this.a[b]]);
      }

      return a;
    };

    l.ja = function () {
      sb(this);
      return this.a.concat();
    };

    l.clear = function () {
      this.f = {};
      this.j = this.h = this.a.length = 0;
    };

    function sb(a) {
      if (a.h != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
          var d = a.a[b];
          tb(a.f, d) && (a.a[c++] = d);
          b++;
        }

        a.a.length = c;
      }

      if (a.h != a.a.length) {
        var e = {};

        for (c = b = 0; b < a.a.length;) {
          d = a.a[b], tb(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        }

        a.a.length = c;
      }
    }

    l.get = function (a, b) {
      return tb(this.f, a) ? this.f[a] : b;
    };

    l.set = function (a, b) {
      tb(this.f, a) || (this.h++, this.a.push(a), this.j++);
      this.f[a] = b;
    };

    l.forEach = function (a, b) {
      for (var c = this.ja(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this);
      }
    };

    l.ha = function (a) {
      sb(this);
      var b = 0,
          c = this.j,
          d = this,
          e = new nb();

      e.next = function () {
        if (c != d.j) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw mb;
        var f = d.a[b++];
        return a ? f : d.f[f];
      };

      return e;
    };

    function tb(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    var ub = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function vb(a, b) {
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

    function wb(a, b, c, d) {
      for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var f = a.charCodeAt(b - 1);
        if (38 == f || 63 == f) if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
        b += e + 1;
      }

      return -1;
    }

    var xb = /#|$/;

    function yb(a, b) {
      var c = a.search(xb),
          d = wb(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "));
    }

    var zb = /[?&]($|#)/;

    function Ab(a, b) {
      this.h = this.w = this.j = "";
      this.C = null;
      this.s = this.f = "";
      this.i = !1;
      var c;
      a instanceof Ab ? (this.i = na(b) ? b : a.i, Bb(this, a.j), this.w = a.w, this.h = a.h, Cb(this, a.C), this.f = a.f, Db(this, Eb(a.a)), this.s = a.s) : a && (c = String(a).match(ub)) ? (this.i = !!b, Bb(this, c[1] || "", !0), this.w = Fb(c[2] || ""), this.h = Fb(c[3] || "", !0), Cb(this, c[4]), this.f = Fb(c[5] || "", !0), Db(this, c[6] || "", !0), this.s = Fb(c[7] || "")) : (this.i = !!b, this.a = new Gb(null, this.i));
    }

    Ab.prototype.toString = function () {
      var a = [],
          b = this.j;
      b && a.push(Hb(b, Ib, !0), ":");
      var c = this.h;
      if (c || "file" == b) a.push("//"), (b = this.w) && a.push(Hb(b, Ib, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.C, null != c && a.push(":", String(c));
      if (c = this.f) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Hb(c, "/" == c.charAt(0) ? Jb : Kb, !0));
      (c = this.a.toString()) && a.push("?", c);
      (c = this.s) && a.push("#", Hb(c, Lb));
      return a.join("");
    };

    Ab.prototype.resolve = function (a) {
      var b = new Ab(this),
          c = !!a.j;
      c ? Bb(b, a.j) : c = !!a.w;
      c ? b.w = a.w : c = !!a.h;
      c ? b.h = a.h : c = null != a.C;
      var d = a.f;
      if (c) Cb(b, a.C);else if (c = !!a.f) {
        if ("/" != d.charAt(0)) if (this.h && !this.f) d = "/" + d;else {
          var e = b.f.lastIndexOf("/");
          -1 != e && (d = b.f.substr(0, e + 1) + d);
        }
        e = d;
        if (".." == e || "." == e) d = "";else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
          d = 0 == e.lastIndexOf("/", 0);
          e = e.split("/");

          for (var f = [], g = 0; g < e.length;) {
            var h = e[g++];
            "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0);
          }

          d = f.join("/");
        } else d = e;
      }
      c ? b.f = d : c = "" !== a.a.toString();
      c ? Db(b, Eb(a.a)) : c = !!a.s;
      c && (b.s = a.s);
      return b;
    };

    function Bb(a, b, c) {
      a.j = c ? Fb(b, !0) : b;
      a.j && (a.j = a.j.replace(/:$/, ""));
    }

    function Cb(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.C = b;
      } else a.C = null;
    }

    function Db(a, b, c) {
      b instanceof Gb ? (a.a = b, Mb(a.a, a.i)) : (c || (b = Hb(b, Nb)), a.a = new Gb(b, a.i));
    }

    function Ob(a) {
      return a instanceof Ab ? new Ab(a) : new Ab(a, void 0);
    }

    function Pb(a, b) {
      a instanceof Ab || (a = Ob(a));
      b instanceof Ab || (b = Ob(b));
      return a.resolve(b);
    }

    function Fb(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }

    function Hb(a, b, c) {
      return r(a) ? (a = encodeURI(a).replace(b, Qb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }

    function Qb(a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }

    var Ib = /[#\/\?@]/g,
        Kb = /[#\?:]/g,
        Jb = /[#\?]/g,
        Nb = /[#\?@]/g,
        Lb = /#/g;

    function Gb(a, b) {
      this.f = this.a = null;
      this.h = a || null;
      this.j = !!b;
    }

    function Rb(a) {
      a.a || (a.a = new rb(), a.f = 0, a.h && vb(a.h, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    }

    l = Gb.prototype;

    l.add = function (a, b) {
      Rb(this);
      this.h = null;
      a = Sb(this, a);
      var c = this.a.get(a);
      c || this.a.set(a, c = []);
      c.push(b);
      this.f += 1;
      return this;
    };

    function Tb(a, b) {
      Rb(a);
      b = Sb(a, b);
      tb(a.a.f, b) && (a.h = null, a.f -= a.a.get(b).length, a = a.a, tb(a.f, b) && (delete a.f[b], a.h--, a.j++, a.a.length > 2 * a.h && sb(a)));
    }

    l.clear = function () {
      this.a = this.h = null;
      this.f = 0;
    };

    function Ub(a, b) {
      Rb(a);
      b = Sb(a, b);
      return tb(a.a.f, b);
    }

    l.forEach = function (a, b) {
      Rb(this);
      this.a.forEach(function (c, d) {
        Ja(c, function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };

    l.ja = function () {
      Rb(this);

      for (var a = this.a.la(), b = this.a.ja(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }

      return c;
    };

    l.la = function (a) {
      Rb(this);
      var b = [];
      if (r(a)) Ub(this, a) && (b = Va(b, this.a.get(Sb(this, a))));else {
        a = this.a.la();

        for (var c = 0; c < a.length; c++) {
          b = Va(b, a[c]);
        }
      }
      return b;
    };

    l.set = function (a, b) {
      Rb(this);
      this.h = null;
      a = Sb(this, a);
      Ub(this, a) && (this.f -= this.a.get(a).length);
      this.a.set(a, [b]);
      this.f += 1;
      return this;
    };

    l.get = function (a, b) {
      if (!a) return b;
      a = this.la(a);
      return 0 < a.length ? String(a[0]) : b;
    };

    l.toString = function () {
      if (this.h) return this.h;
      if (!this.a) return "";

      for (var a = [], b = this.a.ja(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));
        d = this.la(d);

        for (var f = 0; f < d.length; f++) {
          var g = e;
          "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
          a.push(g);
        }
      }

      return this.h = a.join("&");
    };

    function Eb(a) {
      var b = new Gb();
      b.h = a.h;
      a.a && (b.a = new rb(a.a), b.f = a.f);
      return b;
    }

    function Sb(a, b) {
      b = String(b);
      a.j && (b = b.toLowerCase());
      return b;
    }

    function Mb(a, b) {
      b && !a.j && (Rb(a), a.h = null, a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (Tb(this, d), Tb(this, e), 0 < c.length && (this.h = null, this.a.set(Sb(this, e), Wa(c)), this.f += c.length));
      }, a));
      a.j = b;
    }

    function Vb(a) {
      this.a = Ob(a);
    }

    function Wb(a, b) {
      b ? a.a.a.set(x.Ta, b) : Tb(a.a.a, x.Ta);
    }

    function Xb(a, b) {
      null !== b ? a.a.a.set(x.Ra, b ? "1" : "0") : Tb(a.a.a, x.Ra);
    }

    function Yb(a) {
      return a.a.a.get(x.Qa) || null;
    }

    function Zb(a, b) {
      b ? a.a.a.set(x.PROVIDER_ID, b) : Tb(a.a.a, x.PROVIDER_ID);
    }

    Vb.prototype.toString = function () {
      return this.a.toString();
    };

    var x = {
      Qa: "ui_auid",
      kc: "apiKey",
      Ra: "ui_sd",
      wb: "mode",
      ab: "oobCode",
      PROVIDER_ID: "ui_pid",
      Ta: "ui_sid",
      xb: "tenantId"
    };
    var $b;

    a: {
      var ac = p.navigator;

      if (ac) {
        var bc = ac.userAgent;

        if (bc) {
          $b = bc;
          break a;
        }
      }

      $b = "";
    }

    function y(a) {
      return -1 != $b.indexOf(a);
    }

    function cc() {
      return (y("Chrome") || y("CriOS")) && !y("Edge");
    }

    function dc(a) {
      dc[" "](a);
      return a;
    }

    dc[" "] = qa;

    function ec(a, b) {
      var c = fc;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    }

    var gc = y("Opera"),
        z = y("Trident") || y("MSIE"),
        hc = y("Edge"),
        ic = hc || z,
        jc = y("Gecko") && !(-1 != $b.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        kc = -1 != $b.toLowerCase().indexOf("webkit") && !y("Edge"),
        lc = kc && y("Mobile"),
        mc = y("Macintosh");

    function nc() {
      var a = p.document;
      return a ? a.documentMode : void 0;
    }

    var oc;

    a: {
      var pc = "",
          qc = function () {
        var a = $b;
        if (jc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (hc) return /Edge\/([\d\.]+)/.exec(a);
        if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (kc) return /WebKit\/(\S+)/.exec(a);
        if (gc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();

      qc && (pc = qc ? qc[1] : "");

      if (z) {
        var rc = nc();

        if (null != rc && rc > parseFloat(pc)) {
          oc = String(rc);
          break a;
        }
      }

      oc = pc;
    }

    var fc = {};

    function sc(a) {
      return ec(a, function () {
        for (var b = 0, c = Za(String(oc)).split("."), d = Za(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              h = d[f] || "";

          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == g[0].length && 0 == h[0].length) break;
            b = gb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || gb(0 == g[2].length, 0 == h[2].length) || gb(g[2], h[2]);
            g = g[3];
            h = h[3];
          } while (0 == b);
        }

        return 0 <= b;
      });
    }

    var tc;
    var uc = p.document;
    tc = uc && z ? nc() || ("CSS1Compat" == uc.compatMode ? parseInt(oc, 10) : 5) : void 0;

    function vc(a, b) {
      this.a = a === wc && b || "";
      this.f = xc;
    }

    vc.prototype.ma = !0;

    vc.prototype.ka = function () {
      return this.a;
    };

    vc.prototype.toString = function () {
      return "Const{" + this.a + "}";
    };

    function yc(a) {
      if (a instanceof vc && a.constructor === vc && a.f === xc) return a.a;
      Ga("expected object of type Const, got '" + a + "'");
      return "type_error:Const";
    }

    var xc = {},
        wc = {};

    function zc() {
      this.a = "";
      this.h = Ac;
    }

    zc.prototype.ma = !0;

    zc.prototype.ka = function () {
      return this.a.toString();
    };

    zc.prototype.f = function () {
      return 1;
    };

    zc.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.a + "}";
    };

    function Bc(a) {
      if (a instanceof zc && a.constructor === zc && a.h === Ac) return a.a;
      Ga("expected object of type TrustedResourceUrl, got '" + a + "' of type " + sa(a));
      return "type_error:TrustedResourceUrl";
    }

    var Ac = {};

    function Cc(a) {
      var b = new zc();
      b.a = a;
      return b;
    }

    function Dc() {
      this.a = "";
      this.h = Ec;
    }

    Dc.prototype.ma = !0;

    Dc.prototype.ka = function () {
      return this.a.toString();
    };

    Dc.prototype.f = function () {
      return 1;
    };

    Dc.prototype.toString = function () {
      return "SafeUrl{" + this.a + "}";
    };

    function Fc(a) {
      return Gc(a).toString();
    }

    function Gc(a) {
      if (a instanceof Dc && a.constructor === Dc && a.h === Ec) return a.a;
      Ga("expected object of type SafeUrl, got '" + a + "' of type " + sa(a));
      return "type_error:SafeUrl";
    }

    var Hc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Ic(a) {
      if (a instanceof Dc) return a;
      a = "object" == _typeof(a) && a.ma ? a.ka() : String(a);
      Hc.test(a) || (a = "about:invalid#zClosurez");
      return Jc(a);
    }

    var Ec = {};

    function Jc(a) {
      var b = new Dc();
      b.a = a;
      return b;
    }

    Jc("about:blank");

    function Kc() {
      this.a = "";
      this.f = Lc;
    }

    Kc.prototype.ma = !0;
    var Lc = {};

    Kc.prototype.ka = function () {
      return this.a;
    };

    Kc.prototype.toString = function () {
      return "SafeStyle{" + this.a + "}";
    };

    function Mc() {
      this.a = "";
      this.j = Nc;
      this.h = null;
    }

    Mc.prototype.f = function () {
      return this.h;
    };

    Mc.prototype.ma = !0;

    Mc.prototype.ka = function () {
      return this.a.toString();
    };

    Mc.prototype.toString = function () {
      return "SafeHtml{" + this.a + "}";
    };

    function Oc(a) {
      if (a instanceof Mc && a.constructor === Mc && a.j === Nc) return a.a;
      Ga("expected object of type SafeHtml, got '" + a + "' of type " + sa(a));
      return "type_error:SafeHtml";
    }

    var Nc = {};

    function Pc(a, b) {
      var c = new Mc();
      c.a = a;
      c.h = b;
      return c;
    }

    Pc("<!DOCTYPE html>", 0);
    var Qc = Pc("", 0);
    Pc("<br>", 0);

    var Rc = function (a) {
      var b = !1,
          c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    }(function () {
      if ("undefined" === typeof document) return !1;
      var a = document.createElement("div"),
          b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      if (!a.firstChild) return !1;
      b = a.firstChild.firstChild;
      a.innerHTML = Oc(Qc);
      return !b.parentElement;
    });

    function Sc(a, b) {
      a.src = Bc(b);
      if (null === pa) b: {
        b = p.document;

        if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && oa.test(b)) {
          pa = b;
          break b;
        }

        pa = "";
      }
      b = pa;
      b && a.setAttribute("nonce", b);
    }

    function Tc(a, b) {
      this.a = na(a) ? a : 0;
      this.f = na(b) ? b : 0;
    }

    Tc.prototype.toString = function () {
      return "(" + this.a + ", " + this.f + ")";
    };

    Tc.prototype.ceil = function () {
      this.a = Math.ceil(this.a);
      this.f = Math.ceil(this.f);
      return this;
    };

    Tc.prototype.floor = function () {
      this.a = Math.floor(this.a);
      this.f = Math.floor(this.f);
      return this;
    };

    Tc.prototype.round = function () {
      this.a = Math.round(this.a);
      this.f = Math.round(this.f);
      return this;
    };

    function Uc(a, b) {
      this.width = a;
      this.height = b;
    }

    l = Uc.prototype;

    l.toString = function () {
      return "(" + this.width + " x " + this.height + ")";
    };

    l.aspectRatio = function () {
      return this.width / this.height;
    };

    l.ceil = function () {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };

    l.floor = function () {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };

    l.round = function () {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };

    function Vc(a) {
      return a ? new Wc(Xc(a)) : Ea || (Ea = new Wc());
    }

    function Yc(a, b) {
      var c = b || document;
      return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Zc(document, a, b);
    }

    function $c(a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];else {
        c = document;
        var d = b || c;
        a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Zc(c, a, b)[0] || null;
      }
      return a || null;
    }

    function Zc(a, b, c) {
      var d;
      a = c || a;
      if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");

      if (b && a.getElementsByClassName) {
        var e = a.getElementsByClassName(b);
        return e;
      }

      e = a.getElementsByTagName("*");

      if (b) {
        var f = {};

        for (c = d = 0; a = e[c]; c++) {
          var g = a.className;
          "function" == typeof g.split && Qa(g.split(/\s+/), b) && (f[d++] = a);
        }

        f.length = d;
        return f;
      }

      return e;
    }

    function ad(a, b) {
      ib(b, function (c, d) {
        c && "object" == _typeof(c) && c.ma && (c = c.ka());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : bd.hasOwnProperty(d) ? a.setAttribute(bd[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
      });
    }

    var bd = {
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

    function cd(a) {
      return a.scrollingElement ? a.scrollingElement : kc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    }

    function dd(a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    }

    function Xc(a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    }

    function ed(a, b) {
      if ("textContent" in a) a.textContent = b;else if (3 == a.nodeType) a.data = String(b);else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }

        a.firstChild.data = String(b);
      } else {
        for (var c; c = a.firstChild;) {
          a.removeChild(c);
        }

        a.appendChild(Xc(a).createTextNode(String(b)));
      }
    }

    function fd(a, b) {
      return b ? gd(a, function (c) {
        return !b || r(c.className) && Qa(c.className.split(/\s+/), b);
      }) : null;
    }

    function gd(a, b) {
      for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }

      return null;
    }

    function Wc(a) {
      this.a = a || p.document || document;
    }

    Wc.prototype.R = function () {
      return r(void 0) ? this.a.getElementById(void 0) : void 0;
    };

    var hd = {
      Ec: !0
    },
        id = {
      Gc: !0
    },
        jd = {
      Dc: !0
    },
        kd = {
      Fc: !0
    };

    function ld() {
      throw Error("Do not instantiate directly");
    }

    ld.prototype.va = null;

    ld.prototype.toString = function () {
      return this.content;
    };

    function md(a, b, c, d) {
      a = a(b || nd, void 0, c);
      d = (d || Vc()).a.createElement("DIV");
      a = od(a);
      a.match(pd);
      a = Pc(a, null);
      if (Rc()) for (; d.lastChild;) {
        d.removeChild(d.lastChild);
      }
      d.innerHTML = Oc(a);
      1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
      return d;
    }

    function od(a) {
      if (!wa(a)) return hb(String(a));

      if (a instanceof ld) {
        if (a.fa === hd) return a.content;
        if (a.fa === kd) return hb(a.content);
      }

      Ga("Soy template output is unsafe for use as HTML: " + a);
      return "zSoyz";
    }

    var pd = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,
        nd = {};

    function qd(a) {
      if (null != a) switch (a.va) {
        case 1:
          return 1;

        case -1:
          return -1;

        case 0:
          return 0;
      }
      return null;
    }

    function rd() {
      ld.call(this);
    }

    w(rd, ld);
    rd.prototype.fa = hd;

    function A(a) {
      return null != a && a.fa === hd ? a : a instanceof Mc ? B(Oc(a).toString(), a.f()) : B(hb(String(String(a))), qd(a));
    }

    function sd() {
      ld.call(this);
    }

    w(sd, ld);
    sd.prototype.fa = id;
    sd.prototype.va = 1;

    function ud(a, b) {
      this.content = String(a);
      this.va = null != b ? b : null;
    }

    w(ud, ld);
    ud.prototype.fa = kd;

    function C(a) {
      return new ud(a, void 0);
    }

    var B = function (a) {
      function b(c) {
        this.content = c;
      }

      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.va = d);
        return c;
      };
    }(rd),
        vd = function (a) {
      function b(c) {
        this.content = c;
      }

      b.prototype = a.prototype;
      return function (c) {
        return new b(String(c));
      };
    }(sd);

    function wd(a) {
      function b() {}

      var c = {
        label: D("New password")
      };
      b.prototype = a;
      a = new b();

      for (var d in c) {
        a[d] = c[d];
      }

      return a;
    }

    function D(a) {
      return (a = String(a)) ? new ud(a, void 0) : "";
    }

    var xd = function (a) {
      function b(c) {
        this.content = c;
      }

      b.prototype = a.prototype;
      return function (c, d) {
        c = String(c);
        if (!c) return "";
        c = new b(c);
        void 0 !== d && (c.va = d);
        return c;
      };
    }(rd);

    function yd(a) {
      return null != a && a.fa === hd ? String(String(a.content).replace(zd, "").replace(Ad, "&lt;")).replace(Bd, Cd) : hb(String(a));
    }

    function Dd(a) {
      null != a && a.fa === id ? a = String(a).replace(Ed, Fd) : a instanceof Dc ? a = String(Fc(a)).replace(Ed, Fd) : (a = String(a), Gd.test(a) ? a = a.replace(Ed, Fd) : (Ga("Bad value `%s` for |filterNormalizeUri", [a]), a = "#zSoyz"));
      return a;
    }

    function Hd(a) {
      null != a && a.fa === jd ? a = a.content : null == a ? a = "" : a instanceof Kc ? a instanceof Kc && a.constructor === Kc && a.f === Lc ? a = a.a : (Ga("expected object of type SafeStyle, got '" + a + "' of type " + sa(a)), a = "type_error:SafeStyle") : (a = String(a), Id.test(a) || (Ga("Bad value `%s` for |filterCssValue", [a]), a = "zSoyz"));
      return a;
    }

    var Jd = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\x0B": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\x85": "&#133;",
      "\xA0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;"
    };

    function Cd(a) {
      return Jd[a];
    }

    var Kd = {
      "\x00": "%00",
      "\x01": "%01",
      "\x02": "%02",
      "\x03": "%03",
      "\x04": "%04",
      "\x05": "%05",
      "\x06": "%06",
      "\x07": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\x0B": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\x0E": "%0E",
      "\x0F": "%0F",
      "\x10": "%10",
      "\x11": "%11",
      "\x12": "%12",
      "\x13": "%13",
      "\x14": "%14",
      "\x15": "%15",
      "\x16": "%16",
      "\x17": "%17",
      "\x18": "%18",
      "\x19": "%19",
      "\x1A": "%1A",
      "\x1B": "%1B",
      "\x1C": "%1C",
      "\x1D": "%1D",
      "\x1E": "%1E",
      "\x1F": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\x7F": "%7F",
      "\x85": "%C2%85",
      "\xA0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uFF01": "%EF%BC%81",
      "\uFF03": "%EF%BC%83",
      "\uFF04": "%EF%BC%84",
      "\uFF06": "%EF%BC%86",
      "\uFF07": "%EF%BC%87",
      "\uFF08": "%EF%BC%88",
      "\uFF09": "%EF%BC%89",
      "\uFF0A": "%EF%BC%8A",
      "\uFF0B": "%EF%BC%8B",
      "\uFF0C": "%EF%BC%8C",
      "\uFF0F": "%EF%BC%8F",
      "\uFF1A": "%EF%BC%9A",
      "\uFF1B": "%EF%BC%9B",
      "\uFF1D": "%EF%BC%9D",
      "\uFF1F": "%EF%BC%9F",
      "\uFF20": "%EF%BC%A0",
      "\uFF3B": "%EF%BC%BB",
      "\uFF3D": "%EF%BC%BD"
    };

    function Fd(a) {
      return Kd[a];
    }

    var Bd = /[\x00\x22\x27\x3c\x3e]/g,
        Ed = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Id = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
        Gd = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        zd = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Ad = /</g;

    function Ld() {
      return C("Enter a valid phone number");
    }

    function Md() {
      return C("Unable to send password reset code to specified email");
    }

    function Nd() {
      return C("Something went wrong. Please try again.");
    }

    function Od() {
      return C("This email already exists without any means of sign-in. Please reset the password to recover.");
    }

    function Pd(a) {
      a = a || {};
      var b = "";

      switch (a.code) {
        case "invalid-argument":
          b += "Client specified an invalid argument.";
          break;

        case "invalid-configuration":
          b += "Client specified an invalid project configuration.";
          break;

        case "failed-precondition":
          b += "Request can not be executed in the current system state.";
          break;

        case "out-of-range":
          b += "Client specified an invalid range.";
          break;

        case "unauthenticated":
          b += "Request not authenticated due to missing, invalid, or expired OAuth token.";
          break;

        case "permission-denied":
          b += "Client does not have sufficient permission.";
          break;

        case "not-found":
          b += "Specified resource is not found.";
          break;

        case "aborted":
          b += "Concurrency conflict, such as read-modify-write conflict.";
          break;

        case "already-exists":
          b += "The resource that a client tried to create already exists.";
          break;

        case "resource-exhausted":
          b += "Either out of resource quota or reaching rate limiting.";
          break;

        case "cancelled":
          b += "Request cancelled by the client.";
          break;

        case "data-loss":
          b += "Unrecoverable data loss or data corruption.";
          break;

        case "unknown":
          b += "Unknown server error.";
          break;

        case "internal":
          b += "Internal server error.";
          break;

        case "not-implemented":
          b += "API method not implemented by the server.";
          break;

        case "unavailable":
          b += "Service unavailable.";
          break;

        case "deadline-exceeded":
          b += "Request deadline exceeded.";
          break;

        case "auth/user-disabled":
          b += "The user account has been disabled by an administrator.";
          break;

        case "auth/timeout":
          b += "The operation has timed out.";
          break;

        case "auth/too-many-requests":
          b += "We have blocked all requests from this device due to unusual activity. Try again later.";
          break;

        case "auth/quota-exceeded":
          b += "The quota for this operation has been exceeded. Try again later.";
          break;

        case "auth/network-request-failed":
          b += "A network error has occurred. Try again later.";
          break;

        case "restart-process":
          b += "An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";
          break;

        case "no-matching-tenant-for-email":
          b += "No sign-in provider is available for the given email, please try with a different email.";
      }

      return C(b);
    }

    function Qd() {
      return C("Please login again to perform this operation");
    }

    function Rd(a, b, c) {
      var d = Error.call(this);
      this.message = d.message;
      "stack" in d && (this.stack = d.stack);
      this.code = Sd + a;

      if (!(a = b)) {
        a = "";

        switch (this.code) {
          case "firebaseui/merge-conflict":
            a += "The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";
            break;

          default:
            a += Nd();
        }

        a = C(a).toString();
      }

      this.message = a || "";
      this.credential = c || null;
    }

    n(Rd, Error);

    Rd.prototype.aa = function () {
      return {
        code: this.code,
        message: this.message
      };
    };

    Rd.prototype.toJSON = function () {
      return this.aa();
    };

    var Sd = "firebaseui/";

    function Td() {
      0 != Ud && (Vd[this[xa] || (this[xa] = ++ya)] = this);
      this.O = this.O;
      this.C = this.C;
    }

    var Ud = 0,
        Vd = {};
    Td.prototype.O = !1;

    Td.prototype.o = function () {
      if (!this.O && (this.O = !0, this.m(), 0 != Ud)) {
        var a = this[xa] || (this[xa] = ++ya);
        if (0 != Ud && this.C && 0 < this.C.length) throw Error(this + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
        delete Vd[a];
      }
    };

    function Wd(a, b) {
      a.O ? na(void 0) ? b.call(void 0) : b() : (a.C || (a.C = []), a.C.push(na(void 0) ? t(b, void 0) : b));
    }

    Td.prototype.m = function () {
      if (this.C) for (; this.C.length;) {
        this.C.shift()();
      }
    };

    function Xd(a) {
      a && "function" == typeof a.o && a.o();
    }

    var Yd = Object.freeze || function (a) {
      return a;
    };

    var Zd = !z || 9 <= Number(tc),
        $d = z && !sc("9"),
        ae = function () {
      if (!p.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
          b = Object.defineProperty({}, "passive", {
        get: function get() {
          a = !0;
        }
      });

      try {
        p.addEventListener("test", qa, b), p.removeEventListener("test", qa, b);
      } catch (c) {}

      return a;
    }();

    function be(a, b) {
      this.type = a;
      this.f = this.target = b;
      this.h = !1;
      this.sb = !0;
    }

    be.prototype.stopPropagation = function () {
      this.h = !0;
    };

    be.prototype.preventDefault = function () {
      this.sb = !1;
    };

    function ce(a, b) {
      be.call(this, a ? a.type : "");
      this.relatedTarget = this.f = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.j = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.a = null;

      if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.f = b;

        if (b = a.relatedTarget) {
          if (jc) {
            a: {
              try {
                dc(b.nodeName);
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
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.j = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = r(a.pointerType) ? a.pointerType : de[a.pointerType] || "";
        this.a = a;
        a.defaultPrevented && this.preventDefault();
      }
    }

    w(ce, be);
    var de = Yd({
      2: "touch",
      3: "pen",
      4: "mouse"
    });

    ce.prototype.stopPropagation = function () {
      ce.M.stopPropagation.call(this);
      this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0;
    };

    ce.prototype.preventDefault = function () {
      ce.M.preventDefault.call(this);
      var a = this.a;
      if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, $d) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };

    var ee = "closure_listenable_" + (1E6 * Math.random() | 0),
        fe = 0;

    function ge(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.La = e;
      this.key = ++fe;
      this.sa = this.Ha = !1;
    }

    function he(a) {
      a.sa = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.La = null;
    }

    function ie(a) {
      this.src = a;
      this.a = {};
      this.f = 0;
    }

    ie.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.a[f];
      a || (a = this.a[f] = [], this.f++);
      var g = je(a, b, d, e);
      -1 < g ? (b = a[g], c || (b.Ha = !1)) : (b = new ge(b, this.src, f, !!d, e), b.Ha = c, a.push(b));
      return b;
    };

    function ke(a, b) {
      var c = b.type;
      c in a.a && Ra(a.a[c], b) && (he(b), 0 == a.a[c].length && (delete a.a[c], a.f--));
    }

    function je(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.sa && f.listener == b && f.capture == !!c && f.La == d) return e;
      }

      return -1;
    }

    var le = "closure_lm_" + (1E6 * Math.random() | 0),
        me = {},
        ne = 0;

    function oe(a, b, c, d, e) {
      if (d && d.once) return pe(a, b, c, d, e);

      if (ta(b)) {
        for (var f = 0; f < b.length; f++) {
          oe(a, b[f], c, d, e);
        }

        return null;
      }

      c = qe(c);
      return a && a[ee] ? a.I.add(String(b), c, !1, wa(d) ? !!d.capture : !!d, e) : re(a, b, c, !1, d, e);
    }

    function re(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = wa(e) ? !!e.capture : !!e,
          h = se(a);
      h || (a[le] = h = new ie(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = te();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) ae || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(ue(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      ne++;
      return c;
    }

    function te() {
      var a = ve,
          b = Zd ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c;
      };
      return b;
    }

    function pe(a, b, c, d, e) {
      if (ta(b)) {
        for (var f = 0; f < b.length; f++) {
          pe(a, b[f], c, d, e);
        }

        return null;
      }

      c = qe(c);
      return a && a[ee] ? a.I.add(String(b), c, !0, wa(d) ? !!d.capture : !!d, e) : re(a, b, c, !0, d, e);
    }

    function we(a, b, c, d, e) {
      if (ta(b)) for (var f = 0; f < b.length; f++) {
        we(a, b[f], c, d, e);
      } else (d = wa(d) ? !!d.capture : !!d, c = qe(c), a && a[ee]) ? (a = a.I, b = String(b).toString(), b in a.a && (f = a.a[b], c = je(f, c, d, e), -1 < c && (he(f[c]), Sa(f, c), 0 == f.length && (delete a.a[b], a.f--)))) : a && (a = se(a)) && (b = a.a[b.toString()], a = -1, b && (a = je(b, c, d, e)), (c = -1 < a ? b[a] : null) && xe(c));
    }

    function xe(a) {
      if ("number" != typeof a && a && !a.sa) {
        var b = a.src;
        if (b && b[ee]) ke(b.I, a);else {
          var c = a.type,
              d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ue(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          ne--;
          (c = se(b)) ? (ke(c, a), 0 == c.f && (c.src = null, b[le] = null)) : he(a);
        }
      }
    }

    function ue(a) {
      return a in me ? me[a] : me[a] = "on" + a;
    }

    function ye(a, b, c, d) {
      var e = !0;
      if (a = se(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.capture == c && !f.sa && (f = ze(f, d), e = e && !1 !== f);
      }
      return e;
    }

    function ze(a, b) {
      var c = a.listener,
          d = a.La || a.src;
      a.Ha && xe(a);
      return c.call(d, b);
    }

    function ve(a, b) {
      if (a.sa) return !0;

      if (!Zd) {
        if (!b) a: {
          b = ["window", "event"];

          for (var c = p, d = 0; d < b.length; d++) {
            if (c = c[b[d]], null == c) {
              b = null;
              break a;
            }
          }

          b = c;
        }
        d = b;
        b = new ce(d, this);
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

          for (e = b.f; e; e = e.parentNode) {
            d.push(e);
          }

          a = a.type;

          for (e = d.length - 1; !b.h && 0 <= e; e--) {
            b.f = d[e];
            var f = ye(d[e], a, !0, b);
            c = c && f;
          }

          for (e = 0; !b.h && e < d.length; e++) {
            b.f = d[e], f = ye(d[e], a, !1, b), c = c && f;
          }
        }

        return c;
      }

      return ze(a, new ce(b, this));
    }

    function se(a) {
      a = a[le];
      return a instanceof ie ? a : null;
    }

    var Ae = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function qe(a) {
      if (va(a)) return a;
      a[Ae] || (a[Ae] = function (b) {
        return a.handleEvent(b);
      });
      return a[Ae];
    }

    function F() {
      Td.call(this);
      this.I = new ie(this);
      this.yb = this;
      this.Fa = null;
    }

    w(F, Td);
    F.prototype[ee] = !0;

    F.prototype.$a = function (a) {
      this.Fa = a;
    };

    F.prototype.removeEventListener = function (a, b, c, d) {
      we(this, a, b, c, d);
    };

    function Be(a, b) {
      var c,
          d = a.Fa;
      if (d) for (c = []; d; d = d.Fa) {
        c.push(d);
      }
      a = a.yb;
      d = b.type || b;
      if (r(b)) b = new be(b, a);else if (b instanceof be) b.target = b.target || a;else {
        var e = b;
        b = new be(d, a);
        lb(b, e);
      }
      e = !0;
      if (c) for (var f = c.length - 1; !b.h && 0 <= f; f--) {
        var g = b.f = c[f];
        e = Ce(g, d, !0, b) && e;
      }
      b.h || (g = b.f = a, e = Ce(g, d, !0, b) && e, b.h || (e = Ce(g, d, !1, b) && e));
      if (c) for (f = 0; !b.h && f < c.length; f++) {
        g = b.f = c[f], e = Ce(g, d, !1, b) && e;
      }
      return e;
    }

    F.prototype.m = function () {
      F.M.m.call(this);

      if (this.I) {
        var a = this.I,
            b = 0,
            c;

        for (c in a.a) {
          for (var d = a.a[c], e = 0; e < d.length; e++) {
            ++b, he(d[e]);
          }

          delete a.a[c];
          a.f--;
        }
      }

      this.Fa = null;
    };

    function Ce(a, b, c, d) {
      b = a.I.a[String(b)];
      if (!b) return !0;
      b = b.concat();

      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];

        if (g && !g.sa && g.capture == c) {
          var h = g.listener,
              k = g.La || g.src;
          g.Ha && ke(a.I, g);
          e = !1 !== h.call(k, d) && e;
        }
      }

      return e && 0 != d.sb;
    }

    var De = {},
        Ee = 0;

    function Fe(a, b) {
      if (!a) throw Error("Event target element must be provided!");
      a = Ge(a);
      if (De[a] && De[a].length) for (var c = 0; c < De[a].length; c++) {
        Be(De[a][c], b);
      }
    }

    function He(a) {
      var b = Ge(a.R());
      De[b] && De[b].length && (Ta(De[b], function (c) {
        return c == a;
      }), De[b].length || delete De[b]);
    }

    function Ge(a) {
      "undefined" === typeof a.a && (a.a = Ee, Ee++);
      return a.a;
    }

    function Ie(a) {
      if (!a) throw Error("Event target element must be provided!");
      F.call(this);
      this.a = a;
    }

    n(Ie, F);

    Ie.prototype.R = function () {
      return this.a;
    };

    Ie.prototype.register = function () {
      var a = Ge(this.R());
      De[a] ? Qa(De[a], this) || De[a].push(this) : De[a] = [this];
    };

    function Je(a) {
      if (!a) return !1;

      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    }

    function Ke(a, b) {
      this.h = a;
      this.j = b;
      this.f = 0;
      this.a = null;
    }

    Ke.prototype.get = function () {
      if (0 < this.f) {
        this.f--;
        var a = this.a;
        this.a = a.next;
        a.next = null;
      } else a = this.h();

      return a;
    };

    function Le(a, b) {
      a.j(b);
      100 > a.f && (a.f++, b.next = a.a, a.a = b);
    }

    function Me() {
      this.f = this.a = null;
    }

    var Oe = new Ke(function () {
      return new Ne();
    }, function (a) {
      a.reset();
    });

    Me.prototype.add = function (a, b) {
      var c = Oe.get();
      c.set(a, b);
      this.f ? this.f.next = c : this.a = c;
      this.f = c;
    };

    function Pe() {
      var a = Qe,
          b = null;
      a.a && (b = a.a, a.a = a.a.next, a.a || (a.f = null), b.next = null);
      return b;
    }

    function Ne() {
      this.next = this.f = this.a = null;
    }

    Ne.prototype.set = function (a, b) {
      this.a = a;
      this.f = b;
      this.next = null;
    };

    Ne.prototype.reset = function () {
      this.next = this.f = this.a = null;
    };

    function Re(a) {
      p.setTimeout(function () {
        throw a;
      }, 0);
    }

    var Se;

    function Te() {
      var a = p.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function a() {
        var e = document.createElement("IFRAME");
        e.style.display = "none";
        e.src = "";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.write("");
        e.close();
        var g = "callImmediate" + Math.random(),
            h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = t(function (k) {
          if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function postMessage() {
            f.postMessage(g, h);
          }
        };
      });

      if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
        var b = new a(),
            c = {},
            d = c;

        b.port1.onmessage = function () {
          if (na(c.next)) {
            c = c.next;
            var e = c.hb;
            c.hb = null;
            e();
          }
        };

        return function (e) {
          d.next = {
            hb: e
          };
          d = d.next;
          b.port2.postMessage(0);
        };
      }

      return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (e) {
        var f = document.createElement("SCRIPT");

        f.onreadystatechange = function () {
          f.onreadystatechange = null;
          f.parentNode.removeChild(f);
          f = null;
          e();
          e = null;
        };

        document.documentElement.appendChild(f);
      } : function (e) {
        p.setTimeout(e, 0);
      };
    }

    function Ue(a, b) {
      Ve || We();
      Xe || (Ve(), Xe = !0);
      Qe.add(a, b);
    }

    var Ve;

    function We() {
      if (p.Promise && p.Promise.resolve) {
        var a = p.Promise.resolve(void 0);

        Ve = function Ve() {
          a.then(Ye);
        };
      } else Ve = function Ve() {
        var b = Ye;
        !va(p.setImmediate) || p.Window && p.Window.prototype && !y("Edge") && p.Window.prototype.setImmediate == p.setImmediate ? (Se || (Se = Te()), Se(b)) : p.setImmediate(b);
      };
    }

    var Xe = !1,
        Qe = new Me();

    function Ye() {
      for (var a; a = Pe();) {
        try {
          a.a.call(a.f);
        } catch (b) {
          Re(b);
        }

        Le(Oe, a);
      }

      Xe = !1;
    }

    function Ze(a) {
      this.a = $e;
      this.w = void 0;
      this.j = this.f = this.h = null;
      this.s = this.i = !1;
      if (a != qa) try {
        var b = this;
        a.call(void 0, function (c) {
          af(b, bf, c);
        }, function (c) {
          if (!(c instanceof cf)) try {
            if (c instanceof Error) throw c;
            throw Error("Promise rejected.");
          } catch (d) {}
          af(b, df, c);
        });
      } catch (c) {
        af(this, df, c);
      }
    }

    var $e = 0,
        bf = 2,
        df = 3;

    function ef() {
      this.next = this.context = this.f = this.j = this.a = null;
      this.h = !1;
    }

    ef.prototype.reset = function () {
      this.context = this.f = this.j = this.a = null;
      this.h = !1;
    };

    var ff = new Ke(function () {
      return new ef();
    }, function (a) {
      a.reset();
    });

    function gf(a, b, c) {
      var d = ff.get();
      d.j = a;
      d.f = b;
      d.context = c;
      return d;
    }

    function G(a) {
      if (a instanceof Ze) return a;
      var b = new Ze(qa);
      af(b, bf, a);
      return b;
    }

    function hf(a) {
      return new Ze(function (b, c) {
        c(a);
      });
    }

    Ze.prototype.then = function (a, b, c) {
      return jf(this, va(a) ? a : null, va(b) ? b : null, c);
    };

    Ze.prototype.$goog_Thenable = !0;
    l = Ze.prototype;

    l.ec = function (a, b) {
      a = gf(a, a, b);
      a.h = !0;
      kf(this, a);
      return this;
    };

    l.ta = function (a, b) {
      return jf(this, null, a, b);
    };

    l.cancel = function (a) {
      this.a == $e && Ue(function () {
        var b = new cf(a);
        lf(this, b);
      }, this);
    };

    function lf(a, b) {
      if (a.a == $e) if (a.h) {
        var c = a.h;

        if (c.f) {
          for (var d = 0, e = null, f = null, g = c.f; g && (g.h || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }

          e && (c.a == $e && 1 == d ? lf(c, b) : (f ? (d = f, d.next == c.j && (c.j = d), d.next = d.next.next) : mf(c), nf(c, e, df, b)));
        }

        a.h = null;
      } else af(a, df, b);
    }

    function kf(a, b) {
      a.f || a.a != bf && a.a != df || of(a);
      a.j ? a.j.next = b : a.f = b;
      a.j = b;
    }

    function jf(a, b, c, d) {
      var e = gf(null, null, null);
      e.a = new Ze(function (f, g) {
        e.j = b ? function (h) {
          try {
            var k = b.call(d, h);
            f(k);
          } catch (m) {
            g(m);
          }
        } : f;
        e.f = c ? function (h) {
          try {
            var k = c.call(d, h);
            !na(k) && h instanceof cf ? g(h) : f(k);
          } catch (m) {
            g(m);
          }
        } : g;
      });
      e.a.h = a;
      kf(a, e);
      return e.a;
    }

    l.gc = function (a) {
      this.a = $e;
      af(this, bf, a);
    };

    l.hc = function (a) {
      this.a = $e;
      af(this, df, a);
    };

    function af(a, b, c) {
      if (a.a == $e) {
        a === c && (b = df, c = new TypeError("Promise cannot resolve to itself"));
        a.a = 1;

        a: {
          var d = c,
              e = a.gc,
              f = a.hc;

          if (d instanceof Ze) {
            kf(d, gf(e || qa, f || null, a));
            var g = !0;
          } else if (Je(d)) d.then(e, f, a), g = !0;else {
            if (wa(d)) try {
              var h = d.then;

              if (va(h)) {
                pf(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (k) {
              f.call(a, k);
              g = !0;
              break a;
            }
            g = !1;
          }
        }

        g || (a.w = c, a.a = b, a.h = null, of(a), b != df || c instanceof cf || qf(a, c));
      }
    }

    function pf(a, b, c, d, e) {
      function f(k) {
        h || (h = !0, d.call(e, k));
      }

      function g(k) {
        h || (h = !0, c.call(e, k));
      }

      var h = !1;

      try {
        b.call(a, g, f);
      } catch (k) {
        f(k);
      }
    }

    function of(a) {
      a.i || (a.i = !0, Ue(a.Gb, a));
    }

    function mf(a) {
      var b = null;
      a.f && (b = a.f, a.f = b.next, b.next = null);
      a.f || (a.j = null);
      return b;
    }

    l.Gb = function () {
      for (var a; a = mf(this);) {
        nf(this, a, this.a, this.w);
      }

      this.i = !1;
    };

    function nf(a, b, c, d) {
      if (c == df && b.f && !b.h) for (; a && a.s; a = a.h) {
        a.s = !1;
      }
      if (b.a) b.a.h = null, rf(b, c, d);else try {
        b.h ? b.j.call(b.context) : rf(b, c, d);
      } catch (e) {
        sf.call(null, e);
      }
      Le(ff, b);
    }

    function rf(a, b, c) {
      b == bf ? a.j.call(a.context, c) : a.f && a.f.call(a.context, c);
    }

    function qf(a, b) {
      a.s = !0;
      Ue(function () {
        a.s && sf.call(null, b);
      });
    }

    var sf = Re;

    function cf(a) {
      Da.call(this, a);
    }

    w(cf, Da);
    cf.prototype.name = "cancel";

    function tf(a, b, c) {
      b || (b = {});
      c = c || window;
      var d = a instanceof Dc ? a : Ic("undefined" != typeof a.href ? a.href : String(a));
      a = b.target || a.target;
      var e = [];

      for (f in b) {
        switch (f) {
          case "width":
          case "height":
          case "top":
          case "left":
            e.push(f + "=" + b[f]);
            break;

          case "target":
          case "noopener":
          case "noreferrer":
            break;

          default:
            e.push(f + "=" + (b[f] ? 1 : 0));
        }
      }

      var f = e.join(",");
      (y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && c.navigator && c.navigator.standalone && a && "_self" != a ? (f = c.document.createElement("A"), d instanceof Dc || d instanceof Dc || (d = "object" == _typeof(d) && d.ma ? d.ka() : String(d), Hc.test(d) || (d = "about:invalid#zClosurez"), d = Jc(d)), f.href = Gc(d), f.setAttribute("target", a), b.noreferrer && f.setAttribute("rel", "noreferrer"), b = document.createEvent("MouseEvent"), b.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(b), c = {}) : b.noreferrer ? (c = c.open("", a, f), b = Fc(d), c && (ic && -1 != b.indexOf(";") && (b = "'" + b.replace(/'/g, "%27") + "'"), c.opener = null, b = Pc('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + hb(b) + '">', null), c.document.write(Oc(b)), c.document.close())) : (c = c.open(Fc(d), a, f)) && b.noopener && (c.opener = null);
      return c;
    }

    function uf(a) {
      window.location.assign(Fc(Ic(a)));
    }

    function vf() {
      try {
        return !!(window.opener && window.opener.location && window.opener.location.assign && window.opener.location.hostname === window.location.hostname && window.opener.location.protocol === window.location.protocol);
      } catch (a$1) {}

      return !1;
    }

    function wf(a) {
      tf(a, {
        target: window.cordova && window.cordova.InAppBrowser ? "_system" : "_blank"
      }, void 0);
    }

    function xf(a, b) {
      a = wa(a) && 1 == a.nodeType ? a : document.querySelector(String(a));
      if (null == a) throw Error(b || "Cannot find element.");
      return a;
    }

    function yf() {
      return window.location.href;
    }

    function zf() {
      var a = null;
      return new Ze(function (b) {
        "complete" == p.document.readyState ? b() : (a = function a() {
          b();
        }, pe(window, "load", a));
      }).ta(function (b) {
        we(window, "load", a);
        throw b;
      });
    }

    function Af() {
      for (var a = 32, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }

      return b.join("");
    }

    function Bf(a, b, c) {
      c = void 0 === c ? {} : c;
      return Object.keys(a).filter(function (d) {
        return b.includes(d);
      }).reduce(function (d, e) {
        d[e] = a[e];
        return d;
      }, c);
    }

    function Cf(a) {
      var b = Df;
      this.s = [];
      this.O = b;
      this.N = a || null;
      this.j = this.a = !1;
      this.h = void 0;
      this.I = this.l = this.w = !1;
      this.i = 0;
      this.f = null;
      this.C = 0;
    }

    Cf.prototype.cancel = function (a) {
      if (this.a) this.h instanceof Cf && this.h.cancel();else {
        if (this.f) {
          var b = this.f;
          delete this.f;
          a ? b.cancel(a) : (b.C--, 0 >= b.C && b.cancel());
        }

        this.O ? this.O.call(this.N, this) : this.I = !0;
        this.a || (a = new Ef(this), Ff(this), Gf(this, !1, a));
      }
    };

    Cf.prototype.L = function (a, b) {
      this.w = !1;
      Gf(this, a, b);
    };

    function Gf(a, b, c) {
      a.a = !0;
      a.h = c;
      a.j = !b;
      Hf(a);
    }

    function Ff(a) {
      if (a.a) {
        if (!a.I) throw new If(a);
        a.I = !1;
      }
    }

    function Jf(a, b, c) {
      a.s.push([b, c, void 0]);
      a.a && Hf(a);
    }

    Cf.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new Ze(function (g, h) {
        d = g;
        e = h;
      });
      Jf(this, d, function (g) {
        g instanceof Ef ? f.cancel() : e(g);
      });
      return f.then(a, b, c);
    };

    Cf.prototype.$goog_Thenable = !0;

    function Kf(a) {
      return Na(a.s, function (b) {
        return va(b[1]);
      });
    }

    function Hf(a) {
      if (a.i && a.a && Kf(a)) {
        var b = a.i,
            c = Lf[b];
        c && (p.clearTimeout(c.a), delete Lf[b]);
        a.i = 0;
      }

      a.f && (a.f.C--, delete a.f);
      b = a.h;

      for (var d = c = !1; a.s.length && !a.w;) {
        var e = a.s.shift(),
            f = e[0],
            g = e[1];
        e = e[2];
        if (f = a.j ? g : f) try {
          var h = f.call(e || a.N, b);
          na(h) && (a.j = a.j && (h == b || h instanceof Error), a.h = b = h);
          if (Je(b) || "function" === typeof p.Promise && b instanceof p.Promise) d = !0, a.w = !0;
        } catch (k) {
          b = k, a.j = !0, Kf(a) || (c = !0);
        }
      }

      a.h = b;
      d && (h = t(a.L, a, !0), d = t(a.L, a, !1), b instanceof Cf ? (Jf(b, h, d), b.l = !0) : b.then(h, d));
      c && (b = new Mf(b), Lf[b.a] = b, a.i = b.a);
    }

    function If() {
      Da.call(this);
    }

    w(If, Da);
    If.prototype.message = "Deferred has already fired";
    If.prototype.name = "AlreadyCalledError";

    function Ef() {
      Da.call(this);
    }

    w(Ef, Da);
    Ef.prototype.message = "Deferred was canceled";
    Ef.prototype.name = "CanceledError";

    function Mf(a) {
      this.a = p.setTimeout(t(this.h, this), 0);
      this.f = a;
    }

    Mf.prototype.h = function () {
      delete Lf[this.a];
      throw this.f;
    };

    var Lf = {};

    function Nf(a) {
      var b = {},
          c = b.document || document,
          d = Bc(a).toString(),
          e = document.createElement("SCRIPT"),
          f = {
        tb: e,
        ub: void 0
      },
          g = new Cf(f),
          h = null,
          k = null != b.timeout ? b.timeout : 5E3;
      0 < k && (h = window.setTimeout(function () {
        Of(e, !0);
        var m = new Pf(Qf, "Timeout reached for loading script " + d);
        Ff(g);
        Gf(g, !1, m);
      }, k), f.ub = h);

      e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Of(e, b.wc || !1, h), Ff(g), Gf(g, !0, null));
      };

      e.onerror = function () {
        Of(e, !0, h);
        var m = new Pf(Rf, "Error while loading script " + d);
        Ff(g);
        Gf(g, !1, m);
      };

      f = b.attributes || {};
      lb(f, {
        type: "text/javascript",
        charset: "UTF-8"
      });
      ad(e, f);
      Sc(e, a);
      Sf(c).appendChild(e);
      return g;
    }

    function Sf(a) {
      var b = (a || document).getElementsByTagName("HEAD");
      return b && 0 != b.length ? b[0] : a.documentElement;
    }

    function Df() {
      if (this && this.tb) {
        var a = this.tb;
        a && "SCRIPT" == a.tagName && Of(a, !0, this.ub);
      }
    }

    function Of(a, b, c) {
      null != c && p.clearTimeout(c);
      a.onload = qa;
      a.onerror = qa;
      a.onreadystatechange = qa;
      b && window.setTimeout(function () {
        dd(a);
      }, 0);
    }

    var Rf = 0,
        Qf = 1;

    function Pf(a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      Da.call(this, c);
      this.code = a;
    }

    w(Pf, Da);

    function Tf(a) {
      this.a = a || p.googleyolo;
      this.f = null;
      this.h = !1;
    }

    Tf.prototype.cancel = function () {
      this.a && this.h && (this.f = this.a.cancelLastOperation()["catch"](function () {}));
    };

    function Uf(a, b, c) {
      if (a.a && b) {
        var d = function d() {
          a.h = !0;
          var e = Promise.resolve(null);
          c || (e = a.a.retrieve(b)["catch"](function (f) {
            if (f.type === Vf || f.type === Wf) throw f;
            return null;
          }));
          return e.then(function (f) {
            return f ? f : a.a.hint(b);
          })["catch"](function (f) {
            if (f.type === Vf) a.f = Promise.resolve();else if (f.type === Wf) return a.cancel(), Uf(a, b, c);
            return null;
          });
        };

        return a.f ? a.f.then(d) : d();
      }

      if (b) return d = Xf.Ya().load().then(function () {
        a.a = p.googleyolo;
        return Uf(a, b, c);
      }).ta(function () {
        return null;
      }), Promise.resolve(d);
      if ("undefined" !== typeof Promise) return Promise.resolve(null);
      throw Error("One-Tap sign in not supported in the current browser!");
    }

    ra(Tf);
    var Yf = new vc(wc, "https://smartlock.google.com/client"),
        Wf = "illegalConcurrentRequest",
        Vf = "userCanceled";

    function Xf() {
      this.a = null;
    }

    Xf.prototype.load = function () {
      var a = this;
      if (this.a) return this.a;
      var b = Cc(yc(Yf));
      return p.googleyolo ? G() : this.a = zf().then(function () {
        if (!p.googleyolo) return new Ze(function (c, d) {
          var e = setTimeout(function () {
            a.a = null;
            d(Error("Network error!"));
          }, 1E4);

          p.onGoogleYoloLoad = function () {
            clearTimeout(e);
            c();
          };

          G(Nf(b)).ta(function (f) {
            clearTimeout(e);
            a.a = null;
            d(f);
          });
        });
      });
    };

    ra(Xf);

    function Zf(a, b) {
      this.a = a;

      this.f = b || function (c) {
        throw c;
      };
    }

    Zf.prototype.confirm = function (a) {
      return G(this.a.confirm(a)).ta(this.f);
    };

    function $f(a, b, c) {
      this.reset(a, b, c, void 0, void 0);
    }

    $f.prototype.a = null;
    var ag = 0;

    $f.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || ag++;
      this.h = d || Ca();
      this.j = a;
      this.s = b;
      this.f = c;
      delete this.a;
    };

    function bg(a) {
      this.s = a;
      this.a = this.h = this.j = this.f = null;
    }

    function cg(a, b) {
      this.name = a;
      this.value = b;
    }

    cg.prototype.toString = function () {
      return this.name;
    };

    var dg = new cg("SEVERE", 1E3),
        eg = new cg("WARNING", 900),
        fg = new cg("CONFIG", 700);

    function gg(a) {
      if (a.j) return a.j;
      if (a.f) return gg(a.f);
      Ga("Root logger has no level set.");
      return null;
    }

    bg.prototype.log = function (a, b, c) {
      if (a.value >= gg(this).value) for (va(b) && (b = b()), a = new $f(a, String(b), this.s), c && (a.a = c), c = this; c;) {
        var d = c,
            e = a;
        if (d.a) for (var f = 0; b = d.a[f]; f++) {
          b(e);
        }
        c = c.f;
      }
    };

    var hg = {},
        ig = null;

    function jg() {
      ig || (ig = new bg(""), hg[""] = ig, ig.j = fg);
    }

    function kg(a) {
      jg();
      var b;

      if (!(b = hg[a])) {
        b = new bg(a);
        var c = a.lastIndexOf("."),
            d = a.substr(c + 1);
        c = kg(a.substr(0, c));
        c.h || (c.h = {});
        c.h[d] = b;
        b.f = c;
        hg[a] = b;
      }

      return b;
    }

    function lg() {
      this.a = Ca();
    }

    var mg = null;

    lg.prototype.set = function (a) {
      this.a = a;
    };

    lg.prototype.reset = function () {
      this.set(Ca());
    };

    lg.prototype.get = function () {
      return this.a;
    };

    function ng(a) {
      this.j = a || "";
      mg || (mg = new lg());
      this.s = mg;
    }

    ng.prototype.a = !0;
    ng.prototype.f = !0;
    ng.prototype.h = !1;

    function og(a) {
      return 10 > a ? "0" + a : String(a);
    }

    function pg(a, b) {
      a = (a.h - b) / 1E3;
      b = a.toFixed(3);
      var c = 0;
      if (1 > a) c = 2;else for (; 100 > a;) {
        c++, a *= 10;
      }

      for (; 0 < c--;) {
        b = " " + b;
      }

      return b;
    }

    function qg(a) {
      ng.call(this, a);
    }

    w(qg, ng);

    function rg(a, b) {
      var c = [];
      c.push(a.j, " ");

      if (a.f) {
        var d = new Date(b.h);
        c.push("[", og(d.getFullYear() - 2E3) + og(d.getMonth() + 1) + og(d.getDate()) + " " + og(d.getHours()) + ":" + og(d.getMinutes()) + ":" + og(d.getSeconds()) + "." + og(Math.floor(d.getMilliseconds() / 10)), "] ");
      }

      c.push("[", pg(b, a.s.get()), "s] ");
      c.push("[", b.f, "] ");
      c.push(b.s);
      a.h && (b = b.a) && c.push("\n", b instanceof Error ? b.message : b.toString());
      a.a && c.push("\n");
      return c.join("");
    }

    function sg() {
      this.s = t(this.h, this);
      this.a = new qg();
      this.a.f = !1;
      this.a.h = !1;
      this.f = this.a.a = !1;
      this.j = {};
    }

    sg.prototype.h = function (a) {
      function b(f) {
        if (f) {
          if (f.value >= dg.value) return "error";
          if (f.value >= eg.value) return "warn";
          if (f.value >= fg.value) return "log";
        }

        return "debug";
      }

      if (!this.j[a.f]) {
        var c = rg(this.a, a),
            d = tg;

        if (d) {
          var e = b(a.j);
          ug(d, e, c, a.a);
        }
      }
    };

    var tg = p.console;

    function ug(a, b, c, d) {
      if (a[b]) a[b](c, d || "");else a.log(c, d || "");
    }

    function vg(a, b) {
      var c = wg;
      c && c.log(dg, a, b);
    }

    var wg;
    wg = kg("firebaseui");
    var xg = new sg();

    if (1 != xg.f) {
      var yg;
      jg();
      yg = ig;
      var zg = xg.s;
      yg.a || (yg.a = []);
      yg.a.push(zg);
      xg.f = !0;
    }

    function Ag(a) {
      var b = wg;
      b && b.log(eg, a, void 0);
    }

    function Bg(a, b, c, d) {
      this.a = a;
      this.h = b || null;
      this.j = c || null;
      this.f = d || null;
    }

    Bg.prototype.aa = function () {
      return {
        email: this.a,
        displayName: this.h,
        photoUrl: this.j,
        providerId: this.f
      };
    };

    function Cg(a) {
      return a.email ? new Bg(a.email, a.displayName, a.photoUrl, a.providerId) : null;
    }

    function Dg() {
      this.a = ("undefined" == typeof document ? null : document) || {
        cookie: ""
      };
    }

    l = Dg.prototype;

    l.set = function (a, b, c, d, e, f) {
      if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
      if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
      na(c) || (c = -1);
      e = e ? ";domain=" + e : "";
      d = d ? ";path=" + d : "";
      f = f ? ";secure" : "";
      c = 0 > c ? "" : 0 == c ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Ca() + 1E3 * c).toUTCString();
      this.a.cookie = a + "=" + b + e + d + c + f;
    };

    l.get = function (a, b) {
      for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = Za(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return "";
      }

      return b;
    };

    l.ja = function () {
      return Eg(this).keys;
    };

    l.la = function () {
      return Eg(this).values;
    };

    l.clear = function () {
      for (var a = Eg(this).keys, b = a.length - 1; 0 <= b; b--) {
        var c = a[b];
        this.get(c);
        this.set(c, "", 0, void 0, void 0);
      }
    };

    function Eg(a) {
      a = (a.a.cookie || "").split(";");

      for (var b = [], c = [], d, e, f = 0; f < a.length; f++) {
        e = Za(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
      }

      return {
        keys: b,
        values: c
      };
    }

    var Fg = new Dg();

    function Gg() {}

    function Hg(a, b, c, d) {
      this.h = "undefined" !== typeof a && null !== a ? a : -1;
      this.f = b || null;
      this.a = c || null;
      this.j = !!d;
    }

    n(Hg, Gg);

    Hg.prototype.set = function (a, b) {
      Fg.set(a, b, this.h, this.f, this.a, this.j);
    };

    Hg.prototype.get = function (a) {
      return Fg.get(a) || null;
    };

    Hg.prototype.ra = function (a) {
      var b = this.f,
          c = this.a;
      Fg.get(a);
      Fg.set(a, "", 0, b, c);
    };

    function Ig(a, b) {
      this.f = a;
      this.a = b || null;
    }

    Ig.prototype.aa = function () {
      return {
        email: this.f,
        credential: this.a && this.a.toJSON()
      };
    };

    function Jg(a) {
      if (a && a.email) {
        var b = a.credential && firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].AuthCredential.fromJSON(a.credential);
        return new Ig(a.email, b);
      }

      return null;
    }

    function Kg(a) {
      this.a = a || null;
    }

    Kg.prototype.aa = function () {
      return {
        tenantId: this.a
      };
    };

    function Lg(a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }

      return b;
    }

    function Ng(a) {
      return Ma(a, function (b) {
        b = b.toString(16);
        return 1 < b.length ? b : "0" + b;
      }).join("");
    }

    function Og(a) {
      this.i = a;
      this.f = this.i.length / 4;
      this.j = this.f + 6;
      this.h = [[], [], [], []];
      this.s = [[], [], [], []];
      this.a = Array(Pg * (this.j + 1));

      for (a = 0; a < this.f; a++) {
        this.a[a] = [this.i[4 * a], this.i[4 * a + 1], this.i[4 * a + 2], this.i[4 * a + 3]];
      }

      var b = Array(4);

      for (a = this.f; a < Pg * (this.j + 1); a++) {
        b[0] = this.a[a - 1][0];
        b[1] = this.a[a - 1][1];
        b[2] = this.a[a - 1][2];
        b[3] = this.a[a - 1][3];

        if (0 == a % this.f) {
          var c = b,
              d = c[0];
          c[0] = c[1];
          c[1] = c[2];
          c[2] = c[3];
          c[3] = d;
          Qg(b);
          b[0] ^= Rg[a / this.f][0];
          b[1] ^= Rg[a / this.f][1];
          b[2] ^= Rg[a / this.f][2];
          b[3] ^= Rg[a / this.f][3];
        } else 6 < this.f && 4 == a % this.f && Qg(b);

        this.a[a] = Array(4);
        this.a[a][0] = this.a[a - this.f][0] ^ b[0];
        this.a[a][1] = this.a[a - this.f][1] ^ b[1];
        this.a[a][2] = this.a[a - this.f][2] ^ b[2];
        this.a[a][3] = this.a[a - this.f][3] ^ b[3];
      }
    }

    Og.prototype.w = 16;
    var Pg = Og.prototype.w / 4;

    function Sg(a, b) {
      for (var c, d = 0; d < Pg; d++) {
        for (var e = 0; 4 > e; e++) {
          c = 4 * e + d, c = b[c], a.h[d][e] = c;
        }
      }
    }

    function Tg(a) {
      for (var b = [], c = 0; c < Pg; c++) {
        for (var d = 0; 4 > d; d++) {
          b[4 * d + c] = a.h[c][d];
        }
      }

      return b;
    }

    function Ug(a, b) {
      for (var c = 0; 4 > c; c++) {
        for (var d = 0; 4 > d; d++) {
          a.h[c][d] ^= a.a[4 * b + d][c];
        }
      }
    }

    function Vg(a, b) {
      for (var c = 0; 4 > c; c++) {
        for (var d = 0; 4 > d; d++) {
          a.h[c][d] = b[a.h[c][d]];
        }
      }
    }

    function Wg(a) {
      for (var b = 1; 4 > b; b++) {
        for (var c = 0; 4 > c; c++) {
          a.s[b][c] = a.h[b][c];
        }
      }

      for (b = 1; 4 > b; b++) {
        for (c = 0; 4 > c; c++) {
          a.h[b][c] = a.s[b][(c + b) % Pg];
        }
      }
    }

    function Xg(a) {
      for (var b = 1; 4 > b; b++) {
        for (var c = 0; 4 > c; c++) {
          a.s[b][(c + b) % Pg] = a.h[b][c];
        }
      }

      for (b = 1; 4 > b; b++) {
        for (c = 0; 4 > c; c++) {
          a.h[b][c] = a.s[b][c];
        }
      }
    }

    function Qg(a) {
      a[0] = Yg[a[0]];
      a[1] = Yg[a[1]];
      a[2] = Yg[a[2]];
      a[3] = Yg[a[3]];
    }

    var Yg = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
        Zg = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
        Rg = [[0, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [4, 0, 0, 0], [8, 0, 0, 0], [16, 0, 0, 0], [32, 0, 0, 0], [64, 0, 0, 0], [128, 0, 0, 0], [27, 0, 0, 0], [54, 0, 0, 0]],
        $g = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39, 37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229],
        ah = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123, 126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230, 239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26],
        bh = [0, 9, 18, 27, 36, 45, 54, 63, 72, 65, 90, 83, 108, 101, 126, 119, 144, 153, 130, 139, 180, 189, 166, 175, 216, 209, 202, 195, 252, 245, 238, 231, 59, 50, 41, 32, 31, 22, 13, 4, 115, 122, 97, 104, 87, 94, 69, 76, 171, 162, 185, 176, 143, 134, 157, 148, 227, 234, 241, 248, 199, 206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253, 194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 40, 51, 58, 221, 212, 207, 198, 249, 240, 235, 226, 149, 156, 135, 142, 177, 184, 163, 170, 236, 229, 254, 247, 200, 193, 218, 211, 164, 173, 182, 191, 128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 47, 16, 25, 2, 11, 215, 222, 197, 204, 243, 250, 225, 232, 159, 150, 141, 132, 187, 178, 169, 160, 71, 78, 85, 92, 99, 106, 113, 120, 15, 6, 29, 20, 43, 34, 57, 48, 154, 147, 136, 129, 190, 183, 172, 165, 210, 219, 192, 201, 246, 255, 228, 237, 10, 3, 24, 17, 46, 39, 60, 53, 66, 75, 80, 89, 102, 111, 116, 125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 107, 98, 93, 84, 79, 70],
        ch = [0, 11, 22, 29, 44, 39, 58, 49, 88, 83, 78, 69, 116, 127, 98, 105, 176, 187, 166, 173, 156, 151, 138, 129, 232, 227, 254, 245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 40, 53, 62, 15, 4, 25, 18, 203, 192, 221, 214, 231, 236, 241, 250, 147, 152, 133, 142, 191, 180, 169, 162, 246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77, 80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 188, 213, 222, 195, 200, 249, 242, 239, 228, 61, 54, 43, 32, 17, 26, 7, 12, 101, 110, 115, 120, 73, 66, 95, 84, 247, 252, 225, 234, 219, 208, 205, 198, 175, 164, 185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 46, 140, 135, 154, 145, 160, 171, 182, 189, 212, 223, 194, 201, 248, 243, 238, 229, 60, 55, 42, 33, 16, 27, 6, 13, 100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 45, 38, 59, 48, 89, 82, 79, 68, 117, 126, 99, 104, 177, 186, 167, 172, 157, 150, 139, 128, 233, 226, 255, 244, 197, 206, 211, 216, 122, 113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251, 146, 153, 132, 143, 190, 181, 168, 163],
        dh = [0, 13, 26, 23, 52, 57, 46, 35, 104, 101, 114, 127, 92, 81, 70, 75, 208, 221, 202, 199, 228, 233, 254, 243, 184, 181, 162, 175, 140, 129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 45, 32, 109, 96, 119, 122, 89, 84, 67, 78, 5, 8, 31, 18, 49, 60, 43, 38, 189, 176, 167, 170, 137, 132, 147, 158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164, 169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215, 192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 41, 98, 111, 120, 117, 86, 91, 76, 65, 97, 108, 123, 118, 85, 88, 79, 66, 9, 4, 19, 30, 61, 48, 39, 42, 177, 188, 171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 44, 12, 1, 22, 27, 56, 53, 34, 47, 100, 105, 126, 115, 80, 93, 74, 71, 220, 209, 198, 203, 232, 229, 242, 255, 180, 185, 174, 163, 128, 141, 154, 151],
        eh = [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84, 90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 41, 3, 13, 31, 17, 75, 69, 87, 89, 115, 125, 111, 97, 173, 163, 177, 191, 149, 155, 137, 135, 221, 211, 193, 207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 47, 5, 11, 25, 23, 118, 120, 106, 100, 78, 64, 82, 92, 6, 8, 26, 20, 62, 48, 34, 44, 150, 152, 138, 132, 174, 160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121, 119, 101, 107, 49, 63, 45, 35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205, 195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 46, 32, 236, 226, 240, 254, 212, 218, 200, 198, 156, 146, 128, 142, 164, 170, 184, 182, 12, 2, 16, 30, 52, 58, 40, 38, 124, 114, 96, 110, 68, 74, 88, 86, 55, 57, 43, 37, 15, 1, 19, 29, 71, 73, 91, 85, 127, 113, 99, 109, 215, 217, 203, 197, 239, 225, 243, 253, 167, 169, 187, 181, 159, 145, 131, 141];

    function fh(a, b) {
      a = new Og(gh(a));
      b = Lg(b);

      for (var c = Xa(b, 0, 16), d = "", e; c.length;) {
        e = 16 - c.length;

        for (var f = 0; f < e; f++) {
          c.push(0);
        }

        e = a;
        Sg(e, c);
        Ug(e, 0);

        for (c = 1; c < e.j; ++c) {
          Vg(e, Yg);
          Wg(e);
          f = e.h;

          for (var g = e.s[0], h = 0; 4 > h; h++) {
            g[0] = f[0][h], g[1] = f[1][h], g[2] = f[2][h], g[3] = f[3][h], f[0][h] = $g[g[0]] ^ ah[g[1]] ^ g[2] ^ g[3], f[1][h] = g[0] ^ $g[g[1]] ^ ah[g[2]] ^ g[3], f[2][h] = g[0] ^ g[1] ^ $g[g[2]] ^ ah[g[3]], f[3][h] = ah[g[0]] ^ g[1] ^ g[2] ^ $g[g[3]];
          }

          Ug(e, c);
        }

        Vg(e, Yg);
        Wg(e);
        Ug(e, e.j);
        d += Ng(Tg(e));
        c = Xa(b, 0, 16);
      }

      return d;
    }

    function hh(a, b) {
      a = new Og(gh(a));

      for (var c = [], d = 0; d < b.length; d += 2) {
        c.push(parseInt(b.substring(d, d + 2), 16));
      }

      var e = Xa(c, 0, 16);

      for (b = ""; e.length;) {
        d = a;
        Sg(d, e);
        Ug(d, d.j);

        for (e = 1; e < d.j; ++e) {
          Xg(d);
          Vg(d, Zg);
          Ug(d, d.j - e);

          for (var f = d.h, g = d.s[0], h = 0; 4 > h; h++) {
            g[0] = f[0][h], g[1] = f[1][h], g[2] = f[2][h], g[3] = f[3][h], f[0][h] = eh[g[0]] ^ ch[g[1]] ^ dh[g[2]] ^ bh[g[3]], f[1][h] = bh[g[0]] ^ eh[g[1]] ^ ch[g[2]] ^ dh[g[3]], f[2][h] = dh[g[0]] ^ bh[g[1]] ^ eh[g[2]] ^ ch[g[3]], f[3][h] = ch[g[0]] ^ dh[g[1]] ^ bh[g[2]] ^ eh[g[3]];
          }
        }

        Xg(d);
        Vg(d, Zg);
        Ug(d, 0);
        d = Tg(d);
        if (8192 >= d.length) d = String.fromCharCode.apply(null, d);else {
          e = "";

          for (f = 0; f < d.length; f += 8192) {
            e += String.fromCharCode.apply(null, Ya(d, f, f + 8192));
          }

          d = e;
        }
        b += d;
        e = Xa(c, 0, 16);
      }

      return b.replace(/(\x00)+$/, "");
    }

    function gh(a) {
      a = Lg(a.substring(0, 32));

      for (var b = 32 - a.length, c = 0; c < b; c++) {
        a.push(0);
      }

      return a;
    }

    function ih(a) {
      var b = [];
      jh(new kh(), a, b);
      return b.join("");
    }

    function kh() {}

    function jh(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == _typeof(b)) {
          if (ta(b)) {
            var d = b;
            b = d.length;
            c.push("[");

            for (var e = "", f = 0; f < b; f++) {
              c.push(e), jh(a, d[f], c), e = ",";
            }

            c.push("]");
            return;
          }

          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            e = "";

            for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), lh(d, c), c.push(":"), jh(a, f, c), e = ","));
            }

            c.push("}");
            return;
          }
        }

        switch (_typeof(b)) {
          case "string":
            lh(b, c);
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

    var mh = {
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
        nh = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function lh(a, b) {
      b.push('"', a.replace(nh, function (c) {
        var d = mh[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), mh[c] = d);
        return d;
      }), '"');
    }

    function oh(a) {
      this.a = a;
    }

    oh.prototype.set = function (a, b) {
      na(b) ? this.a.set(a, ih(b)) : this.a.ra(a);
    };

    oh.prototype.get = function (a) {
      try {
        var b = this.a.get(a);
      } catch (c) {
        return;
      }

      if (null !== b) try {
        return JSON.parse(b);
      } catch (c$2) {
        throw "Storage: Invalid value was encountered";
      }
    };

    function ph() {}

    w(ph, Gg);

    ph.prototype.clear = function () {
      var a = qb(this.ha(!0)),
          b = this;
      Ja(a, function (c) {
        b.ra(c);
      });
    };

    function qh(a) {
      this.a = a;
    }

    w(qh, ph);

    function rh(a) {
      if (!a.a) return !1;

      try {
        return a.a.setItem("__sak", "1"), a.a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    }

    l = qh.prototype;

    l.set = function (a, b) {
      try {
        this.a.setItem(a, b);
      } catch (c) {
        if (0 == this.a.length) throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";
      }
    };

    l.get = function (a) {
      a = this.a.getItem(a);
      if (!r(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
      return a;
    };

    l.ra = function (a) {
      this.a.removeItem(a);
    };

    l.ha = function (a) {
      var b = 0,
          c = this.a,
          d = new nb();

      d.next = function () {
        if (b >= c.length) throw mb;
        var e = c.key(b++);
        if (a) return e;
        e = c.getItem(e);
        if (!r(e)) throw "Storage mechanism: Invalid value was encountered";
        return e;
      };

      return d;
    };

    l.clear = function () {
      this.a.clear();
    };

    l.key = function (a) {
      return this.a.key(a);
    };

    function sh() {
      var a = null;

      try {
        a = window.localStorage || null;
      } catch (b) {}

      this.a = a;
    }

    w(sh, qh);

    function th() {
      var a = null;

      try {
        a = window.sessionStorage || null;
      } catch (b) {}

      this.a = a;
    }

    w(th, qh);

    function uh(a, b) {
      this.f = a;
      this.a = b + "::";
    }

    w(uh, ph);

    uh.prototype.set = function (a, b) {
      this.f.set(this.a + a, b);
    };

    uh.prototype.get = function (a) {
      return this.f.get(this.a + a);
    };

    uh.prototype.ra = function (a) {
      this.f.ra(this.a + a);
    };

    uh.prototype.ha = function (a) {
      var b = this.f.ha(!0),
          c = this,
          d = new nb();

      d.next = function () {
        for (var e = b.next(); e.substr(0, c.a.length) != c.a;) {
          e = b.next();
        }

        return a ? e.substr(c.a.length) : c.f.get(e);
      };

      return d;
    };

    var vh,
        wh = new sh();
    vh = rh(wh) ? new uh(wh, "firebaseui") : null;
    var xh = new oh(vh),
        yh,
        zh = new th();
    yh = rh(zh) ? new uh(zh, "firebaseui") : null;
    var Ah = new oh(yh),
        Bh = {
      name: "pendingEmailCredential",
      storage: Ah
    },
        Ch = {
      name: "redirectStatus",
      storage: Ah
    },
        Dh = {
      name: "redirectUrl",
      storage: Ah
    },
        Eh = {
      name: "rememberAccount",
      storage: Ah
    },
        Fh = {
      name: "rememberedAccounts",
      storage: xh
    },
        Gh = {
      name: "emailForSignIn",
      storage: new oh(new Hg(3600, "/"))
    },
        Hh = {
      name: "pendingEncryptedCredential",
      storage: new oh(new Hg(3600, "/"))
    };

    function Ih(a, b) {
      return a.storage.get(b ? a.name + ":" + b : a.name);
    }

    function Jh(a, b) {
      a.storage.a.ra(b ? a.name + ":" + b : a.name);
    }

    function Kh(a, b, c) {
      a.storage.set(c ? a.name + ":" + c : a.name, b);
    }

    function Lh(a) {
      return Ih(Dh, a) || null;
    }

    function Mh(a, b) {
      Kh(Dh, a, b);
    }

    function Nh(a, b) {
      Kh(Eh, a, b);
    }

    function Oh(a) {
      a = Ih(Fh, a) || [];
      a = Ma(a, function (b) {
        return Cg(b);
      });
      return La(a, function (b) {
        return null != b;
      });
    }

    function Ph(a, b) {
      var c = Oh(b),
          d = Oa(c, function (e) {
        return e.a == a.a && (e.f || null) == (a.f || null);
      });
      -1 < d && Sa(c, d);
      c.unshift(a);
      Kh(Fh, Ma(c, function (e) {
        return e.aa();
      }), b);
    }

    function Qh(a) {
      a = Ih(Bh, a) || null;
      return Jg(a);
    }

    function Rh(a) {
      Jh(Bh, a);
    }

    function Sh(a, b) {
      Kh(Bh, a.aa(), b);
    }

    function Th(a) {
      return (a = Ih(Ch, a) || null) && "undefined" !== typeof a.tenantId ? new Kg(a.tenantId) : null;
    }

    function Uh(a, b) {
      Kh(Ch, a.aa(), b);
    }

    function Vh(a, b) {
      b = Ih(Gh, b);
      var c = null;
      if (b) try {
        var d = hh(a, b),
            e = JSON.parse(d);
        c = e && e.email || null;
      } catch (f) {}
      return c;
    }

    function Wh(a, b) {
      b = Ih(Hh, b);
      var c = null;
      if (b) try {
        var d = hh(a, b);
        c = JSON.parse(d);
      } catch (e) {}
      return Jg(c || null);
    }

    function Xh(a, b, c) {
      Kh(Hh, fh(a, JSON.stringify(b.aa())), c);
    }

    function Yh() {
      this.V = {};
    }

    function H(a, b, c) {
      if (b.toLowerCase() in a.V) throw Error("Configuration " + b + " has already been defined.");
      a.V[b.toLowerCase()] = c;
    }

    function Zh(a, b, c) {
      if (!(b.toLowerCase() in a.V)) throw Error("Configuration " + b + " is not defined.");
      a.V[b.toLowerCase()] = c;
    }

    Yh.prototype.get = function (a) {
      if (!(a.toLowerCase() in this.V)) throw Error("Configuration " + a + " is not defined.");
      return this.V[a.toLowerCase()];
    };

    function $h(a, b) {
      a = a.get(b);
      if (!a) throw Error("Configuration " + b + " is required.");
      return a;
    }

    function ai() {
      this.f = void 0;
      this.a = {};
    }

    l = ai.prototype;

    l.set = function (a, b) {
      bi(this, a, b, !1);
    };

    l.add = function (a, b) {
      bi(this, a, b, !0);
    };

    function bi(a, b, c, d) {
      for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.a[f] || (a.a[f] = new ai());
        a = a.a[f];
      }

      if (d && void 0 !== a.f) throw Error('The collection already contains the key "' + b + '"');
      a.f = c;
    }

    l.get = function (a) {
      a: {
        for (var b = this, c = 0; c < a.length; c++) {
          if (b = b.a[a.charAt(c)], !b) {
            a = void 0;
            break a;
          }
        }

        a = b;
      }

      return a ? a.f : void 0;
    };

    l.la = function () {
      var a = [];
      ci(this, a);
      return a;
    };

    function ci(a, b) {
      void 0 !== a.f && b.push(a.f);

      for (var c in a.a) {
        ci(a.a[c], b);
      }
    }

    l.ja = function () {
      var a = [];
      di(this, "", a);
      return a;
    };

    function di(a, b, c) {
      void 0 !== a.f && c.push(b);

      for (var d in a.a) {
        di(a.a[d], b + d, c);
      }
    }

    l.clear = function () {
      this.a = {};
      this.f = void 0;
    };

    function ei(a) {
      this.a = a;
      this.f = new ai();

      for (a = 0; a < this.a.length; a++) {
        var b = this.f.get("+" + this.a[a].b);
        b ? b.push(this.a[a]) : this.f.add("+" + this.a[a].b, [this.a[a]]);
      }
    }

    function fi(a, b) {
      a = a.f;
      var c = {},
          d = 0;
      void 0 !== a.f && (c[d] = a.f);

      for (; d < b.length; d++) {
        var e = b.charAt(d);
        if (!(e in a.a)) break;
        a = a.a[e];
        void 0 !== a.f && (c[d] = a.f);
      }

      for (var f in c) {
        if (c.hasOwnProperty(f)) return c[f];
      }

      return [];
    }

    function gi(a) {
      for (var b = 0; b < hi.length; b++) {
        if (hi[b].c === a) return hi[b];
      }

      return null;
    }

    function ii(a) {
      a = a.toUpperCase();

      for (var b = [], c = 0; c < hi.length; c++) {
        hi[c].g === a && b.push(hi[c]);
      }

      return b;
    }

    function ji(a) {
      if (0 < a.length && "+" == a.charAt(0)) {
        a = a.substring(1);

        for (var b = [], c = 0; c < hi.length; c++) {
          hi[c].b == a && b.push(hi[c]);
        }

        a = b;
      } else a = ii(a);

      return a;
    }

    function ki(a) {
      a.sort(function (b, c) {
        return b.name.localeCompare(c.name, "en");
      });
    }

    var hi = [{
      name: "Afghanistan",
      c: "93-AF-0",
      b: "93",
      g: "AF"
    }, {
      name: "\xC5land Islands",
      c: "358-AX-0",
      b: "358",
      g: "AX"
    }, {
      name: "Albania",
      c: "355-AL-0",
      b: "355",
      g: "AL"
    }, {
      name: "Algeria",
      c: "213-DZ-0",
      b: "213",
      g: "DZ"
    }, {
      name: "American Samoa",
      c: "1-AS-0",
      b: "1",
      g: "AS"
    }, {
      name: "Andorra",
      c: "376-AD-0",
      b: "376",
      g: "AD"
    }, {
      name: "Angola",
      c: "244-AO-0",
      b: "244",
      g: "AO"
    }, {
      name: "Anguilla",
      c: "1-AI-0",
      b: "1",
      g: "AI"
    }, {
      name: "Antigua and Barbuda",
      c: "1-AG-0",
      b: "1",
      g: "AG"
    }, {
      name: "Argentina",
      c: "54-AR-0",
      b: "54",
      g: "AR"
    }, {
      name: "Armenia",
      c: "374-AM-0",
      b: "374",
      g: "AM"
    }, {
      name: "Aruba",
      c: "297-AW-0",
      b: "297",
      g: "AW"
    }, {
      name: "Ascension Island",
      c: "247-AC-0",
      b: "247",
      g: "AC"
    }, {
      name: "Australia",
      c: "61-AU-0",
      b: "61",
      g: "AU"
    }, {
      name: "Austria",
      c: "43-AT-0",
      b: "43",
      g: "AT"
    }, {
      name: "Azerbaijan",
      c: "994-AZ-0",
      b: "994",
      g: "AZ"
    }, {
      name: "Bahamas",
      c: "1-BS-0",
      b: "1",
      g: "BS"
    }, {
      name: "Bahrain",
      c: "973-BH-0",
      b: "973",
      g: "BH"
    }, {
      name: "Bangladesh",
      c: "880-BD-0",
      b: "880",
      g: "BD"
    }, {
      name: "Barbados",
      c: "1-BB-0",
      b: "1",
      g: "BB"
    }, {
      name: "Belarus",
      c: "375-BY-0",
      b: "375",
      g: "BY"
    }, {
      name: "Belgium",
      c: "32-BE-0",
      b: "32",
      g: "BE"
    }, {
      name: "Belize",
      c: "501-BZ-0",
      b: "501",
      g: "BZ"
    }, {
      name: "Benin",
      c: "229-BJ-0",
      b: "229",
      g: "BJ"
    }, {
      name: "Bermuda",
      c: "1-BM-0",
      b: "1",
      g: "BM"
    }, {
      name: "Bhutan",
      c: "975-BT-0",
      b: "975",
      g: "BT"
    }, {
      name: "Bolivia",
      c: "591-BO-0",
      b: "591",
      g: "BO"
    }, {
      name: "Bosnia and Herzegovina",
      c: "387-BA-0",
      b: "387",
      g: "BA"
    }, {
      name: "Botswana",
      c: "267-BW-0",
      b: "267",
      g: "BW"
    }, {
      name: "Brazil",
      c: "55-BR-0",
      b: "55",
      g: "BR"
    }, {
      name: "British Indian Ocean Territory",
      c: "246-IO-0",
      b: "246",
      g: "IO"
    }, {
      name: "British Virgin Islands",
      c: "1-VG-0",
      b: "1",
      g: "VG"
    }, {
      name: "Brunei",
      c: "673-BN-0",
      b: "673",
      g: "BN"
    }, {
      name: "Bulgaria",
      c: "359-BG-0",
      b: "359",
      g: "BG"
    }, {
      name: "Burkina Faso",
      c: "226-BF-0",
      b: "226",
      g: "BF"
    }, {
      name: "Burundi",
      c: "257-BI-0",
      b: "257",
      g: "BI"
    }, {
      name: "Cambodia",
      c: "855-KH-0",
      b: "855",
      g: "KH"
    }, {
      name: "Cameroon",
      c: "237-CM-0",
      b: "237",
      g: "CM"
    }, {
      name: "Canada",
      c: "1-CA-0",
      b: "1",
      g: "CA"
    }, {
      name: "Cape Verde",
      c: "238-CV-0",
      b: "238",
      g: "CV"
    }, {
      name: "Caribbean Netherlands",
      c: "599-BQ-0",
      b: "599",
      g: "BQ"
    }, {
      name: "Cayman Islands",
      c: "1-KY-0",
      b: "1",
      g: "KY"
    }, {
      name: "Central African Republic",
      c: "236-CF-0",
      b: "236",
      g: "CF"
    }, {
      name: "Chad",
      c: "235-TD-0",
      b: "235",
      g: "TD"
    }, {
      name: "Chile",
      c: "56-CL-0",
      b: "56",
      g: "CL"
    }, {
      name: "China",
      c: "86-CN-0",
      b: "86",
      g: "CN"
    }, {
      name: "Christmas Island",
      c: "61-CX-0",
      b: "61",
      g: "CX"
    }, {
      name: "Cocos [Keeling] Islands",
      c: "61-CC-0",
      b: "61",
      g: "CC"
    }, {
      name: "Colombia",
      c: "57-CO-0",
      b: "57",
      g: "CO"
    }, {
      name: "Comoros",
      c: "269-KM-0",
      b: "269",
      g: "KM"
    }, {
      name: "Democratic Republic Congo",
      c: "243-CD-0",
      b: "243",
      g: "CD"
    }, {
      name: "Republic of Congo",
      c: "242-CG-0",
      b: "242",
      g: "CG"
    }, {
      name: "Cook Islands",
      c: "682-CK-0",
      b: "682",
      g: "CK"
    }, {
      name: "Costa Rica",
      c: "506-CR-0",
      b: "506",
      g: "CR"
    }, {
      name: "C\xF4te d'Ivoire",
      c: "225-CI-0",
      b: "225",
      g: "CI"
    }, {
      name: "Croatia",
      c: "385-HR-0",
      b: "385",
      g: "HR"
    }, {
      name: "Cuba",
      c: "53-CU-0",
      b: "53",
      g: "CU"
    }, {
      name: "Cura\xE7ao",
      c: "599-CW-0",
      b: "599",
      g: "CW"
    }, {
      name: "Cyprus",
      c: "357-CY-0",
      b: "357",
      g: "CY"
    }, {
      name: "Czech Republic",
      c: "420-CZ-0",
      b: "420",
      g: "CZ"
    }, {
      name: "Denmark",
      c: "45-DK-0",
      b: "45",
      g: "DK"
    }, {
      name: "Djibouti",
      c: "253-DJ-0",
      b: "253",
      g: "DJ"
    }, {
      name: "Dominica",
      c: "1-DM-0",
      b: "1",
      g: "DM"
    }, {
      name: "Dominican Republic",
      c: "1-DO-0",
      b: "1",
      g: "DO"
    }, {
      name: "East Timor",
      c: "670-TL-0",
      b: "670",
      g: "TL"
    }, {
      name: "Ecuador",
      c: "593-EC-0",
      b: "593",
      g: "EC"
    }, {
      name: "Egypt",
      c: "20-EG-0",
      b: "20",
      g: "EG"
    }, {
      name: "El Salvador",
      c: "503-SV-0",
      b: "503",
      g: "SV"
    }, {
      name: "Equatorial Guinea",
      c: "240-GQ-0",
      b: "240",
      g: "GQ"
    }, {
      name: "Eritrea",
      c: "291-ER-0",
      b: "291",
      g: "ER"
    }, {
      name: "Estonia",
      c: "372-EE-0",
      b: "372",
      g: "EE"
    }, {
      name: "Ethiopia",
      c: "251-ET-0",
      b: "251",
      g: "ET"
    }, {
      name: "Falkland Islands [Islas Malvinas]",
      c: "500-FK-0",
      b: "500",
      g: "FK"
    }, {
      name: "Faroe Islands",
      c: "298-FO-0",
      b: "298",
      g: "FO"
    }, {
      name: "Fiji",
      c: "679-FJ-0",
      b: "679",
      g: "FJ"
    }, {
      name: "Finland",
      c: "358-FI-0",
      b: "358",
      g: "FI"
    }, {
      name: "France",
      c: "33-FR-0",
      b: "33",
      g: "FR"
    }, {
      name: "French Guiana",
      c: "594-GF-0",
      b: "594",
      g: "GF"
    }, {
      name: "French Polynesia",
      c: "689-PF-0",
      b: "689",
      g: "PF"
    }, {
      name: "Gabon",
      c: "241-GA-0",
      b: "241",
      g: "GA"
    }, {
      name: "Gambia",
      c: "220-GM-0",
      b: "220",
      g: "GM"
    }, {
      name: "Georgia",
      c: "995-GE-0",
      b: "995",
      g: "GE"
    }, {
      name: "Germany",
      c: "49-DE-0",
      b: "49",
      g: "DE"
    }, {
      name: "Ghana",
      c: "233-GH-0",
      b: "233",
      g: "GH"
    }, {
      name: "Gibraltar",
      c: "350-GI-0",
      b: "350",
      g: "GI"
    }, {
      name: "Greece",
      c: "30-GR-0",
      b: "30",
      g: "GR"
    }, {
      name: "Greenland",
      c: "299-GL-0",
      b: "299",
      g: "GL"
    }, {
      name: "Grenada",
      c: "1-GD-0",
      b: "1",
      g: "GD"
    }, {
      name: "Guadeloupe",
      c: "590-GP-0",
      b: "590",
      g: "GP"
    }, {
      name: "Guam",
      c: "1-GU-0",
      b: "1",
      g: "GU"
    }, {
      name: "Guatemala",
      c: "502-GT-0",
      b: "502",
      g: "GT"
    }, {
      name: "Guernsey",
      c: "44-GG-0",
      b: "44",
      g: "GG"
    }, {
      name: "Guinea Conakry",
      c: "224-GN-0",
      b: "224",
      g: "GN"
    }, {
      name: "Guinea-Bissau",
      c: "245-GW-0",
      b: "245",
      g: "GW"
    }, {
      name: "Guyana",
      c: "592-GY-0",
      b: "592",
      g: "GY"
    }, {
      name: "Haiti",
      c: "509-HT-0",
      b: "509",
      g: "HT"
    }, {
      name: "Heard Island and McDonald Islands",
      c: "672-HM-0",
      b: "672",
      g: "HM"
    }, {
      name: "Honduras",
      c: "504-HN-0",
      b: "504",
      g: "HN"
    }, {
      name: "Hong Kong",
      c: "852-HK-0",
      b: "852",
      g: "HK"
    }, {
      name: "Hungary",
      c: "36-HU-0",
      b: "36",
      g: "HU"
    }, {
      name: "Iceland",
      c: "354-IS-0",
      b: "354",
      g: "IS"
    }, {
      name: "India",
      c: "91-IN-0",
      b: "91",
      g: "IN"
    }, {
      name: "Indonesia",
      c: "62-ID-0",
      b: "62",
      g: "ID"
    }, {
      name: "Iran",
      c: "98-IR-0",
      b: "98",
      g: "IR"
    }, {
      name: "Iraq",
      c: "964-IQ-0",
      b: "964",
      g: "IQ"
    }, {
      name: "Ireland",
      c: "353-IE-0",
      b: "353",
      g: "IE"
    }, {
      name: "Isle of Man",
      c: "44-IM-0",
      b: "44",
      g: "IM"
    }, {
      name: "Israel",
      c: "972-IL-0",
      b: "972",
      g: "IL"
    }, {
      name: "Italy",
      c: "39-IT-0",
      b: "39",
      g: "IT"
    }, {
      name: "Jamaica",
      c: "1-JM-0",
      b: "1",
      g: "JM"
    }, {
      name: "Japan",
      c: "81-JP-0",
      b: "81",
      g: "JP"
    }, {
      name: "Jersey",
      c: "44-JE-0",
      b: "44",
      g: "JE"
    }, {
      name: "Jordan",
      c: "962-JO-0",
      b: "962",
      g: "JO"
    }, {
      name: "Kazakhstan",
      c: "7-KZ-0",
      b: "7",
      g: "KZ"
    }, {
      name: "Kenya",
      c: "254-KE-0",
      b: "254",
      g: "KE"
    }, {
      name: "Kiribati",
      c: "686-KI-0",
      b: "686",
      g: "KI"
    }, {
      name: "Kosovo",
      c: "377-XK-0",
      b: "377",
      g: "XK"
    }, {
      name: "Kosovo",
      c: "381-XK-0",
      b: "381",
      g: "XK"
    }, {
      name: "Kosovo",
      c: "386-XK-0",
      b: "386",
      g: "XK"
    }, {
      name: "Kuwait",
      c: "965-KW-0",
      b: "965",
      g: "KW"
    }, {
      name: "Kyrgyzstan",
      c: "996-KG-0",
      b: "996",
      g: "KG"
    }, {
      name: "Laos",
      c: "856-LA-0",
      b: "856",
      g: "LA"
    }, {
      name: "Latvia",
      c: "371-LV-0",
      b: "371",
      g: "LV"
    }, {
      name: "Lebanon",
      c: "961-LB-0",
      b: "961",
      g: "LB"
    }, {
      name: "Lesotho",
      c: "266-LS-0",
      b: "266",
      g: "LS"
    }, {
      name: "Liberia",
      c: "231-LR-0",
      b: "231",
      g: "LR"
    }, {
      name: "Libya",
      c: "218-LY-0",
      b: "218",
      g: "LY"
    }, {
      name: "Liechtenstein",
      c: "423-LI-0",
      b: "423",
      g: "LI"
    }, {
      name: "Lithuania",
      c: "370-LT-0",
      b: "370",
      g: "LT"
    }, {
      name: "Luxembourg",
      c: "352-LU-0",
      b: "352",
      g: "LU"
    }, {
      name: "Macau",
      c: "853-MO-0",
      b: "853",
      g: "MO"
    }, {
      name: "Macedonia",
      c: "389-MK-0",
      b: "389",
      g: "MK"
    }, {
      name: "Madagascar",
      c: "261-MG-0",
      b: "261",
      g: "MG"
    }, {
      name: "Malawi",
      c: "265-MW-0",
      b: "265",
      g: "MW"
    }, {
      name: "Malaysia",
      c: "60-MY-0",
      b: "60",
      g: "MY"
    }, {
      name: "Maldives",
      c: "960-MV-0",
      b: "960",
      g: "MV"
    }, {
      name: "Mali",
      c: "223-ML-0",
      b: "223",
      g: "ML"
    }, {
      name: "Malta",
      c: "356-MT-0",
      b: "356",
      g: "MT"
    }, {
      name: "Marshall Islands",
      c: "692-MH-0",
      b: "692",
      g: "MH"
    }, {
      name: "Martinique",
      c: "596-MQ-0",
      b: "596",
      g: "MQ"
    }, {
      name: "Mauritania",
      c: "222-MR-0",
      b: "222",
      g: "MR"
    }, {
      name: "Mauritius",
      c: "230-MU-0",
      b: "230",
      g: "MU"
    }, {
      name: "Mayotte",
      c: "262-YT-0",
      b: "262",
      g: "YT"
    }, {
      name: "Mexico",
      c: "52-MX-0",
      b: "52",
      g: "MX"
    }, {
      name: "Micronesia",
      c: "691-FM-0",
      b: "691",
      g: "FM"
    }, {
      name: "Moldova",
      c: "373-MD-0",
      b: "373",
      g: "MD"
    }, {
      name: "Monaco",
      c: "377-MC-0",
      b: "377",
      g: "MC"
    }, {
      name: "Mongolia",
      c: "976-MN-0",
      b: "976",
      g: "MN"
    }, {
      name: "Montenegro",
      c: "382-ME-0",
      b: "382",
      g: "ME"
    }, {
      name: "Montserrat",
      c: "1-MS-0",
      b: "1",
      g: "MS"
    }, {
      name: "Morocco",
      c: "212-MA-0",
      b: "212",
      g: "MA"
    }, {
      name: "Mozambique",
      c: "258-MZ-0",
      b: "258",
      g: "MZ"
    }, {
      name: "Myanmar [Burma]",
      c: "95-MM-0",
      b: "95",
      g: "MM"
    }, {
      name: "Namibia",
      c: "264-NA-0",
      b: "264",
      g: "NA"
    }, {
      name: "Nauru",
      c: "674-NR-0",
      b: "674",
      g: "NR"
    }, {
      name: "Nepal",
      c: "977-NP-0",
      b: "977",
      g: "NP"
    }, {
      name: "Netherlands",
      c: "31-NL-0",
      b: "31",
      g: "NL"
    }, {
      name: "New Caledonia",
      c: "687-NC-0",
      b: "687",
      g: "NC"
    }, {
      name: "New Zealand",
      c: "64-NZ-0",
      b: "64",
      g: "NZ"
    }, {
      name: "Nicaragua",
      c: "505-NI-0",
      b: "505",
      g: "NI"
    }, {
      name: "Niger",
      c: "227-NE-0",
      b: "227",
      g: "NE"
    }, {
      name: "Nigeria",
      c: "234-NG-0",
      b: "234",
      g: "NG"
    }, {
      name: "Niue",
      c: "683-NU-0",
      b: "683",
      g: "NU"
    }, {
      name: "Norfolk Island",
      c: "672-NF-0",
      b: "672",
      g: "NF"
    }, {
      name: "North Korea",
      c: "850-KP-0",
      b: "850",
      g: "KP"
    }, {
      name: "Northern Mariana Islands",
      c: "1-MP-0",
      b: "1",
      g: "MP"
    }, {
      name: "Norway",
      c: "47-NO-0",
      b: "47",
      g: "NO"
    }, {
      name: "Oman",
      c: "968-OM-0",
      b: "968",
      g: "OM"
    }, {
      name: "Pakistan",
      c: "92-PK-0",
      b: "92",
      g: "PK"
    }, {
      name: "Palau",
      c: "680-PW-0",
      b: "680",
      g: "PW"
    }, {
      name: "Palestinian Territories",
      c: "970-PS-0",
      b: "970",
      g: "PS"
    }, {
      name: "Panama",
      c: "507-PA-0",
      b: "507",
      g: "PA"
    }, {
      name: "Papua New Guinea",
      c: "675-PG-0",
      b: "675",
      g: "PG"
    }, {
      name: "Paraguay",
      c: "595-PY-0",
      b: "595",
      g: "PY"
    }, {
      name: "Peru",
      c: "51-PE-0",
      b: "51",
      g: "PE"
    }, {
      name: "Philippines",
      c: "63-PH-0",
      b: "63",
      g: "PH"
    }, {
      name: "Poland",
      c: "48-PL-0",
      b: "48",
      g: "PL"
    }, {
      name: "Portugal",
      c: "351-PT-0",
      b: "351",
      g: "PT"
    }, {
      name: "Puerto Rico",
      c: "1-PR-0",
      b: "1",
      g: "PR"
    }, {
      name: "Qatar",
      c: "974-QA-0",
      b: "974",
      g: "QA"
    }, {
      name: "R\xE9union",
      c: "262-RE-0",
      b: "262",
      g: "RE"
    }, {
      name: "Romania",
      c: "40-RO-0",
      b: "40",
      g: "RO"
    }, {
      name: "Russia",
      c: "7-RU-0",
      b: "7",
      g: "RU"
    }, {
      name: "Rwanda",
      c: "250-RW-0",
      b: "250",
      g: "RW"
    }, {
      name: "Saint Barth\xE9lemy",
      c: "590-BL-0",
      b: "590",
      g: "BL"
    }, {
      name: "Saint Helena",
      c: "290-SH-0",
      b: "290",
      g: "SH"
    }, {
      name: "St. Kitts",
      c: "1-KN-0",
      b: "1",
      g: "KN"
    }, {
      name: "St. Lucia",
      c: "1-LC-0",
      b: "1",
      g: "LC"
    }, {
      name: "Saint Martin",
      c: "590-MF-0",
      b: "590",
      g: "MF"
    }, {
      name: "Saint Pierre and Miquelon",
      c: "508-PM-0",
      b: "508",
      g: "PM"
    }, {
      name: "St. Vincent",
      c: "1-VC-0",
      b: "1",
      g: "VC"
    }, {
      name: "Samoa",
      c: "685-WS-0",
      b: "685",
      g: "WS"
    }, {
      name: "San Marino",
      c: "378-SM-0",
      b: "378",
      g: "SM"
    }, {
      name: "S\xE3o Tom\xE9 and Pr\xEDncipe",
      c: "239-ST-0",
      b: "239",
      g: "ST"
    }, {
      name: "Saudi Arabia",
      c: "966-SA-0",
      b: "966",
      g: "SA"
    }, {
      name: "Senegal",
      c: "221-SN-0",
      b: "221",
      g: "SN"
    }, {
      name: "Serbia",
      c: "381-RS-0",
      b: "381",
      g: "RS"
    }, {
      name: "Seychelles",
      c: "248-SC-0",
      b: "248",
      g: "SC"
    }, {
      name: "Sierra Leone",
      c: "232-SL-0",
      b: "232",
      g: "SL"
    }, {
      name: "Singapore",
      c: "65-SG-0",
      b: "65",
      g: "SG"
    }, {
      name: "Sint Maarten",
      c: "1-SX-0",
      b: "1",
      g: "SX"
    }, {
      name: "Slovakia",
      c: "421-SK-0",
      b: "421",
      g: "SK"
    }, {
      name: "Slovenia",
      c: "386-SI-0",
      b: "386",
      g: "SI"
    }, {
      name: "Solomon Islands",
      c: "677-SB-0",
      b: "677",
      g: "SB"
    }, {
      name: "Somalia",
      c: "252-SO-0",
      b: "252",
      g: "SO"
    }, {
      name: "South Africa",
      c: "27-ZA-0",
      b: "27",
      g: "ZA"
    }, {
      name: "South Georgia and the South Sandwich Islands",
      c: "500-GS-0",
      b: "500",
      g: "GS"
    }, {
      name: "South Korea",
      c: "82-KR-0",
      b: "82",
      g: "KR"
    }, {
      name: "South Sudan",
      c: "211-SS-0",
      b: "211",
      g: "SS"
    }, {
      name: "Spain",
      c: "34-ES-0",
      b: "34",
      g: "ES"
    }, {
      name: "Sri Lanka",
      c: "94-LK-0",
      b: "94",
      g: "LK"
    }, {
      name: "Sudan",
      c: "249-SD-0",
      b: "249",
      g: "SD"
    }, {
      name: "Suriname",
      c: "597-SR-0",
      b: "597",
      g: "SR"
    }, {
      name: "Svalbard and Jan Mayen",
      c: "47-SJ-0",
      b: "47",
      g: "SJ"
    }, {
      name: "Swaziland",
      c: "268-SZ-0",
      b: "268",
      g: "SZ"
    }, {
      name: "Sweden",
      c: "46-SE-0",
      b: "46",
      g: "SE"
    }, {
      name: "Switzerland",
      c: "41-CH-0",
      b: "41",
      g: "CH"
    }, {
      name: "Syria",
      c: "963-SY-0",
      b: "963",
      g: "SY"
    }, {
      name: "Taiwan",
      c: "886-TW-0",
      b: "886",
      g: "TW"
    }, {
      name: "Tajikistan",
      c: "992-TJ-0",
      b: "992",
      g: "TJ"
    }, {
      name: "Tanzania",
      c: "255-TZ-0",
      b: "255",
      g: "TZ"
    }, {
      name: "Thailand",
      c: "66-TH-0",
      b: "66",
      g: "TH"
    }, {
      name: "Togo",
      c: "228-TG-0",
      b: "228",
      g: "TG"
    }, {
      name: "Tokelau",
      c: "690-TK-0",
      b: "690",
      g: "TK"
    }, {
      name: "Tonga",
      c: "676-TO-0",
      b: "676",
      g: "TO"
    }, {
      name: "Trinidad/Tobago",
      c: "1-TT-0",
      b: "1",
      g: "TT"
    }, {
      name: "Tunisia",
      c: "216-TN-0",
      b: "216",
      g: "TN"
    }, {
      name: "Turkey",
      c: "90-TR-0",
      b: "90",
      g: "TR"
    }, {
      name: "Turkmenistan",
      c: "993-TM-0",
      b: "993",
      g: "TM"
    }, {
      name: "Turks and Caicos Islands",
      c: "1-TC-0",
      b: "1",
      g: "TC"
    }, {
      name: "Tuvalu",
      c: "688-TV-0",
      b: "688",
      g: "TV"
    }, {
      name: "U.S. Virgin Islands",
      c: "1-VI-0",
      b: "1",
      g: "VI"
    }, {
      name: "Uganda",
      c: "256-UG-0",
      b: "256",
      g: "UG"
    }, {
      name: "Ukraine",
      c: "380-UA-0",
      b: "380",
      g: "UA"
    }, {
      name: "United Arab Emirates",
      c: "971-AE-0",
      b: "971",
      g: "AE"
    }, {
      name: "United Kingdom",
      c: "44-GB-0",
      b: "44",
      g: "GB"
    }, {
      name: "United States",
      c: "1-US-0",
      b: "1",
      g: "US"
    }, {
      name: "Uruguay",
      c: "598-UY-0",
      b: "598",
      g: "UY"
    }, {
      name: "Uzbekistan",
      c: "998-UZ-0",
      b: "998",
      g: "UZ"
    }, {
      name: "Vanuatu",
      c: "678-VU-0",
      b: "678",
      g: "VU"
    }, {
      name: "Vatican City",
      c: "379-VA-0",
      b: "379",
      g: "VA"
    }, {
      name: "Venezuela",
      c: "58-VE-0",
      b: "58",
      g: "VE"
    }, {
      name: "Vietnam",
      c: "84-VN-0",
      b: "84",
      g: "VN"
    }, {
      name: "Wallis and Futuna",
      c: "681-WF-0",
      b: "681",
      g: "WF"
    }, {
      name: "Western Sahara",
      c: "212-EH-0",
      b: "212",
      g: "EH"
    }, {
      name: "Yemen",
      c: "967-YE-0",
      b: "967",
      g: "YE"
    }, {
      name: "Zambia",
      c: "260-ZM-0",
      b: "260",
      g: "ZM"
    }, {
      name: "Zimbabwe",
      c: "263-ZW-0",
      b: "263",
      g: "ZW"
    }];
    ki(hi);
    var li = new ei(hi);

    function mi(a, b) {
      this.a = a;
      this.za = b;
    }

    function ni(a) {
      a = Za(a);
      var b = fi(li, a);
      return 0 < b.length ? new mi("1" == b[0].b ? "1-US-0" : b[0].c, Za(a.substr(b[0].b.length + 1))) : null;
    }

    function oi(a) {
      var b = gi(a.a);
      if (!b) throw Error("Country ID " + a.a + " not found.");
      return "+" + b.b + a.za;
    }

    function pi(a, b) {
      for (var c = 0; c < a.length; c++) {
        if (!Qa(qi, a[c]) && (null !== ri && a[c] in ri || Qa(b, a[c]))) return a[c];
      }

      return null;
    }

    var qi = ["emailLink", "password", "phone"],
        ri = {
      "facebook.com": "FacebookAuthProvider",
      "github.com": "GithubAuthProvider",
      "google.com": "GoogleAuthProvider",
      password: "EmailAuthProvider",
      "twitter.com": "TwitterAuthProvider",
      phone: "PhoneAuthProvider"
    };

    function si() {
      this.a = new Yh();
      H(this.a, "acUiConfig");
      H(this.a, "autoUpgradeAnonymousUsers");
      H(this.a, "callbacks");
      H(this.a, "credentialHelper", ti);
      H(this.a, "immediateFederatedRedirect", !1);
      H(this.a, "popupMode", !1);
      H(this.a, "privacyPolicyUrl");
      H(this.a, "queryParameterForSignInSuccessUrl", "signInSuccessUrl");
      H(this.a, "queryParameterForWidgetMode", "mode");
      H(this.a, "signInFlow");
      H(this.a, "signInOptions");
      H(this.a, "signInSuccessUrl");
      H(this.a, "siteName");
      H(this.a, "tosUrl");
      H(this.a, "widgetUrl");
    }

    function ui(a) {
      return a.a.get("acUiConfig") || null;
    }

    function vi(a) {
      var b = a.a.get("widgetUrl") || yf();
      return wi(a, b);
    }

    function wi(a, b) {
      a = xi(a);

      for (var c = b.search(xb), d = 0, e, f = []; 0 <= (e = wb(b, d, a, c));) {
        f.push(b.substring(d, e)), d = Math.min(b.indexOf("&", e) + 1 || c, c);
      }

      f.push(b.substr(d));
      b = f.join("").replace(zb, "$1");
      c = "=" + encodeURIComponent("select");
      (a += c) ? (c = b.indexOf("#"), 0 > c && (c = b.length), d = b.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = b.substring(d + 1, c), b = [b.substr(0, d), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
      return a;
    }

    function yi(a) {
      var b = !!a.a.get("autoUpgradeAnonymousUsers");
      b && !zi(a) && vg('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.', void 0);
      return b;
    }

    function Ai(a) {
      a = a.a.get("signInOptions") || [];

      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        d = wa(d) ? d : {
          provider: d
        };
        d.provider && b.push(d);
      }

      return b;
    }

    function Bi(a, b) {
      a = Ai(a);

      for (var c = 0; c < a.length; c++) {
        if (a[c].provider === b) return a[c];
      }

      return null;
    }

    function Ci(a) {
      return Ma(Ai(a), function (b) {
        return b.provider;
      });
    }

    function Di(a, b) {
      a = Ei(a);

      for (var c = 0; c < a.length; c++) {
        if (a[c].providerId === b) return a[c];
      }

      return null;
    }

    function Ei(a) {
      return Ma(Ai(a), function (b) {
        return ri[b.provider] || Qa(Fi, b.provider) ? {
          providerId: b.provider
        } : {
          providerId: b.provider,
          rb: b.providerName || null,
          Ga: b.buttonColor || null,
          Na: b.iconUrl ? Fc(Ic(b.iconUrl)) : null,
          Nb: b.loginHintKey || null
        };
      });
    }

    function Gi(a) {
      var b = [],
          c = [];
      Ja(Ai(a), function (e) {
        e.authMethod && (b.push(e.authMethod), e.clientId && c.push({
          uri: e.authMethod,
          clientId: e.clientId
        }));
      });
      var d = null;
      Hi(a) === Ii && b.length && (d = {
        supportedIdTokenProviders: c,
        supportedAuthMethods: b
      });
      return d;
    }

    function Ji(a, b) {
      var c = null;
      Ja(Ai(a), function (d) {
        d.authMethod === b && (c = d.provider);
      });
      return c;
    }

    function Ki(a) {
      var b = null;
      Ja(Ai(a), function (d) {
        d.provider == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID && wa(d.recaptchaParameters) && !ta(d.recaptchaParameters) && (b = jb(d.recaptchaParameters));
      });

      if (b) {
        var c = [];
        Ja(Li, function (d) {
          "undefined" !== typeof b[d] && (c.push(d), delete b[d]);
        });
        c.length && Ag('The following provided "recaptchaParameters" keys are not allowed: ' + c.join(", "));
      }

      return b;
    }

    function Mi(a, b) {
      a = (a = Bi(a, b)) && a.scopes;
      return ta(a) ? a : [];
    }

    function Ni(a, b) {
      a = (a = Bi(a, b)) && a.customParameters;
      return wa(a) ? (a = jb(a), b === firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID && delete a.login_hint, b === firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GithubAuthProvider.PROVIDER_ID && delete a.login, a) : null;
    }

    function Oi(a) {
      a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID);
      var b = null;
      a && "string" === typeof a.loginHint && (b = ni(a.loginHint));
      return a && a.defaultNationalNumber || b && b.za || null;
    }

    function Pi(a) {
      var b = (a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID)) && a.defaultCountry || null;
      b = b && ii(b);
      var c = null;
      a && "string" === typeof a.loginHint && (c = ni(a.loginHint));
      return b && b[0] || c && gi(c.a) || null;
    }

    function Qi(a) {
      a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID);
      if (!a) return null;
      var b = a.whitelistedCountries,
          c = a.blacklistedCountries;
      if ("undefined" !== typeof b && (!ta(b) || 0 == b.length)) throw Error("WhitelistedCountries must be a non-empty array.");
      if ("undefined" !== typeof c && !ta(c)) throw Error("BlacklistedCountries must be an array.");
      if (b && c) throw Error("Both whitelistedCountries and blacklistedCountries are provided.");
      if (!b && !c) return hi;
      a = [];

      if (b) {
        c = {};

        for (var d = 0; d < b.length; d++) {
          var e = ji(b[d]);

          for (var f = 0; f < e.length; f++) {
            c[e[f].c] = e[f];
          }
        }

        for (var g in c) {
          c.hasOwnProperty(g) && a.push(c[g]);
        }
      } else {
        g = {};

        for (b = 0; b < c.length; b++) {
          for (e = ji(c[b]), d = 0; d < e.length; d++) {
            g[e[d].c] = e[d];
          }
        }

        for (e = 0; e < hi.length; e++) {
          null !== g && hi[e].c in g || a.push(hi[e]);
        }
      }

      return a;
    }

    function xi(a) {
      return $h(a.a, "queryParameterForWidgetMode");
    }

    function I(a) {
      var b = a.a.get("tosUrl") || null;
      a = a.a.get("privacyPolicyUrl") || null;
      b && !a && Ag("Privacy Policy URL is missing, the link will not be displayed.");

      if (b && a) {
        if (va(b)) return b;
        if ("string" === typeof b) return function () {
          wf(b);
        };
      }

      return null;
    }

    function Ri(a) {
      var b = a.a.get("tosUrl") || null,
          c = a.a.get("privacyPolicyUrl") || null;
      c && !b && Ag("Term of Service URL is missing, the link will not be displayed.");

      if (b && c) {
        if (va(c)) return c;
        if ("string" === typeof c) return function () {
          wf(c);
        };
      }

      return null;
    }

    function Si(a) {
      return (a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID)) && "undefined" !== typeof a.requireDisplayName ? !!a.requireDisplayName : !0;
    }

    function Ti(a) {
      a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID);
      return !(!a || a.signInMethod !== firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD);
    }

    function Ui(a) {
      a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID);
      return !(!a || !a.forceSameDevice);
    }

    function Vi(a) {
      if (Ti(a)) {
        var b = {
          url: yf(),
          handleCodeInApp: !0
        };
        (a = Bi(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID)) && "function" === typeof a.emailLinkSignIn && lb(b, a.emailLinkSignIn());
        b.url = Pb(yf(), b.url).toString();
        return b;
      }

      return null;
    }

    function Wi(a) {
      var b = !!a.a.get("immediateFederatedRedirect"),
          c = Ci(a);
      a = Xi(a);
      return b && 1 == c.length && !Qa(qi, c[0]) && a == Yi;
    }

    function Xi(a) {
      a = a.a.get("signInFlow");

      for (var b in Zi) {
        if (Zi[b] == a) return Zi[b];
      }

      return Yi;
    }

    function $i(a) {
      return aj(a).uiShown || null;
    }

    function bj(a) {
      return aj(a).signInSuccess || null;
    }

    function cj(a) {
      return aj(a).signInSuccessWithAuthResult || null;
    }

    function zi(a) {
      return aj(a).signInFailure || null;
    }

    function aj(a) {
      return a.a.get("callbacks") || {};
    }

    function Hi(a) {
      if ("http:" !== (window.location && window.location.protocol) && "https:" !== (window.location && window.location.protocol)) return dj;
      a = a.a.get("credentialHelper");

      for (var b in ej) {
        if (ej[b] == a) return ej[b];
      }

      return ti;
    }

    var ti = "accountchooser.com",
        Ii = "googleyolo",
        dj = "none",
        ej = {
      jc: ti,
      mc: Ii,
      NONE: dj
    },
        Yi = "redirect",
        Zi = {
      pc: "popup",
      qc: Yi
    },
        fj = {
      lc: "callback",
      RECOVER_EMAIL: "recoverEmail",
      rc: "resetPassword",
      REVERT_SECOND_FACTOR_ADDITION: "revertSecondFactorAddition",
      sc: "select",
      tc: "signIn",
      VERIFY_AND_CHANGE_EMAIL: "verifyAndChangeEmail",
      VERIFY_EMAIL: "verifyEmail"
    },
        Fi = ["anonymous"],
        Li = ["sitekey", "tabindex", "callback", "expired-callback"];
    var gj,
        hj,
        ij,
        jj,
        J = {};

    function K(a, b, c, d) {
      J[a].apply(null, Array.prototype.slice.call(arguments, 1));
    }

    var kj = null;

    function lj(a) {
      return !(!a || -32E3 != a.code || "Service unavailable" != a.message);
    }

    function mj(a, b, c, d) {
      kj || (a = {
        callbacks: {
          empty: a,
          select: function select(e, f) {
            e && e.account && b ? b(Cg(e.account)) : c && c(!lj(f));
          },
          store: a,
          update: a
        },
        language: "en",
        providers: void 0,
        ui: d
      }, "undefined" != typeof accountchooser && accountchooser.Api && accountchooser.Api.init ? kj = accountchooser.Api.init(a) : (kj = new nj(a), oj()));
    }

    function pj(a, b, c) {
      function d() {
        var e = Pb(window.location.href, c).toString();
        kj.select(Ma(b || [], function (f) {
          return f.aa();
        }), {
          clientCallbackUrl: e
        });
      }

      b && b.length ? d() : kj.checkEmpty(function (e, f) {
        e || f ? a(!lj(f)) : d();
      });
    }

    function nj(a) {
      this.a = a;
      this.a.callbacks = this.a.callbacks || {};
    }

    function oj() {
      var a = kj;
      va(a.a.callbacks.empty) && a.a.callbacks.empty();
    }

    l = nj.prototype;

    l.store = function () {
      va(this.a.callbacks.store) && this.a.callbacks.store(void 0, qj);
    };

    l.select = function () {
      va(this.a.callbacks.select) && this.a.callbacks.select(void 0, qj);
    };

    l.update = function () {
      va(this.a.callbacks.update) && this.a.callbacks.update(void 0, qj);
    };

    l.checkDisabled = function (a) {
      a(!0);
    };

    l.checkEmpty = function (a) {
      a(void 0, qj);
    };

    l.checkAccountExist = function (a, b) {
      b(void 0, qj);
    };

    l.checkShouldUpdate = function (a, b) {
      b(void 0, qj);
    };

    var qj = {
      code: -32E3,
      message: "Service unavailable",
      data: "Service is unavailable."
    };
    var rj = /MSIE ([\d.]+).*Windows NT ([\d.]+)/,
        sj = /Firefox\/([\d.]+)/,
        tj = /Opera[ \/]([\d.]+)(.*Version\/([\d.]+))?/,
        uj = /Chrome\/([\d.]+)/,
        vj = /((Windows NT ([\d.]+))|(Mac OS X ([\d_]+))).*Version\/([\d.]+).*Safari/,
        wj = /Mac OS X;.*(?!(Version)).*Safari/,
        xj = /Android ([\d.]+).*Safari/,
        yj = /OS ([\d_]+) like Mac OS X.*Mobile.*Safari/,
        zj = /Konqueror\/([\d.]+)/,
        Aj = /MSIE ([\d.]+).*Windows Phone OS ([\d.]+)/;

    function Bj(a, b) {
      a = a.split(b || ".");
      this.a = [];

      for (b = 0; b < a.length; b++) {
        this.a.push(parseInt(a[b], 10));
      }
    }

    function Cj(a, b) {
      b instanceof Bj || (b = new Bj(String(b)));

      for (var c = Math.max(a.a.length, b.a.length), d = 0; d < c; d++) {
        var e = a.a[d],
            f = b.a[d];
        if (void 0 !== e && void 0 !== f && e !== f) return e - f;
        if (void 0 === e) return -1;
        if (void 0 === f) return 1;
      }

      return 0;
    }

    function Dj(a, b) {
      return 0 <= Cj(a, b);
    }

    function Ej() {
      var a = window.navigator && window.navigator.userAgent;

      if (a) {
        var b;

        if (b = a.match(tj)) {
          var c = new Bj(b[3] || b[1]);
          return 0 <= a.indexOf("Opera Mini") ? !1 : 0 <= a.indexOf("Opera Mobi") ? 0 <= a.indexOf("Android") && Dj(c, "10.1") : Dj(c, "8.0");
        }

        if (b = a.match(sj)) return Dj(new Bj(b[1]), "2.0");
        if (b = a.match(uj)) return Dj(new Bj(b[1]), "6.0");
        if (b = a.match(vj)) return c = new Bj(b[6]), a = b[3] && new Bj(b[3]), b = b[5] && new Bj(b[5], "_"), (!(!a || !Dj(a, "6.0")) || !(!b || !Dj(b, "10.5.6"))) && Dj(c, "3.0");
        if (b = a.match(xj)) return Dj(new Bj(b[1]), "3.0");
        if (b = a.match(yj)) return Dj(new Bj(b[1], "_"), "4.0");
        if (b = a.match(zj)) return Dj(new Bj(b[1]), "4.7");
        if (b = a.match(Aj)) return c = new Bj(b[1]), a = new Bj(b[2]), Dj(c, "7.0") && Dj(a, "7.0");
        if (b = a.match(rj)) return c = new Bj(b[1]), a = new Bj(b[2]), Dj(c, "7.0") && Dj(a, "6.0");
        if (a.match(wj)) return !1;
      }

      return !0;
    }

    function Fj(a) {
      if (a.classList) return a.classList;
      a = a.className;
      return r(a) && a.match(/\S+/g) || [];
    }

    function Gj(a, b) {
      return a.classList ? a.classList.contains(b) : Qa(Fj(a), b);
    }

    function Hj(a, b) {
      a.classList ? a.classList.add(b) : Gj(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
    }

    function Ij(a, b) {
      a.classList ? a.classList.remove(b) : Gj(a, b) && (a.className = La(Fj(a), function (c) {
        return c != b;
      }).join(" "));
    }

    function Jj(a) {
      var b = a.type;

      switch (r(b) && b.toLowerCase()) {
        case "checkbox":
        case "radio":
          return a.checked ? a.value : null;

        case "select-one":
          return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;

        case "select-multiple":
          b = [];

          for (var c, d = 0; c = a.options[d]; d++) {
            c.selected && b.push(c.value);
          }

          return b.length ? b : null;

        default:
          return null != a.value ? a.value : null;
      }
    }

    function Kj(a, b) {
      var c = a.type;

      switch (r(c) && c.toLowerCase()) {
        case "checkbox":
        case "radio":
          a.checked = b;
          break;

        case "select-one":
          a.selectedIndex = -1;
          if (r(b)) for (var d = 0; c = a.options[d]; d++) {
            if (c.value == b) {
              c.selected = !0;
              break;
            }
          }
          break;

        case "select-multiple":
          r(b) && (b = [b]);

          for (d = 0; c = a.options[d]; d++) {
            if (c.selected = !1, b) for (var e, f = 0; e = b[f]; f++) {
              c.value == e && (c.selected = !0);
            }
          }

          break;

        default:
          a.value = null != b ? b : "";
      }
    }

    function Lj(a) {
      if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
      if (Mj(a.keyCode)) return !0;

      switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
          return !1;

        case 0:
          return !jc;

        default:
          return 166 > a.keyCode || 183 < a.keyCode;
      }
    }

    function Nj(a, b, c, d, e, f) {
      if (kc && !sc("525")) return !0;
      if (mc && e) return Mj(a);
      if (e && !d) return !1;

      if (!jc) {
        "number" == typeof b && (b = Oj(b));
        var g = 17 == b || 18 == b || mc && 91 == b;
        if ((!c || mc) && g || mc && 16 == b && (d || f)) return !1;
      }

      if ((kc || hc) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
      if (z && d && b == a) return !1;

      switch (a) {
        case 13:
          return jc ? f || e ? !1 : !(c && d) : !0;

        case 27:
          return !(kc || hc || jc);
      }

      return jc && (d || e || f) ? !1 : Mj(a);
    }

    function Mj(a) {
      if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (kc || hc) && 0 == a) return !0;

      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
          return !0;

        case 173:
          return jc;

        default:
          return !1;
      }
    }

    function Oj(a) {
      if (jc) a = Pj(a);else if (mc && kc) switch (a) {
        case 93:
          a = 91;
      }
      return a;
    }

    function Pj(a) {
      switch (a) {
        case 61:
          return 187;

        case 59:
          return 186;

        case 173:
          return 189;

        case 224:
          return 91;

        case 0:
          return 224;

        default:
          return a;
      }
    }

    function Qj(a) {
      F.call(this);
      this.a = a;
      oe(a, "keydown", this.f, !1, this);
      oe(a, "click", this.h, !1, this);
    }

    w(Qj, F);

    Qj.prototype.f = function (a) {
      (13 == a.keyCode || kc && 3 == a.keyCode) && Rj(this, a);
    };

    Qj.prototype.h = function (a) {
      Rj(this, a);
    };

    function Rj(a, b) {
      var c = new Sj(b);

      if (Be(a, c)) {
        c = new Tj(b);

        try {
          Be(a, c);
        } finally {
          b.stopPropagation();
        }
      }
    }

    Qj.prototype.m = function () {
      Qj.M.m.call(this);
      we(this.a, "keydown", this.f, !1, this);
      we(this.a, "click", this.h, !1, this);
      delete this.a;
    };

    function Tj(a) {
      ce.call(this, a.a);
      this.type = "action";
    }

    w(Tj, ce);

    function Sj(a) {
      ce.call(this, a.a);
      this.type = "beforeaction";
    }

    w(Sj, ce);

    function Uj(a) {
      F.call(this);
      this.a = a;
      a = z ? "focusout" : "blur";
      this.f = oe(this.a, z ? "focusin" : "focus", this, !z);
      this.h = oe(this.a, a, this, !z);
    }

    w(Uj, F);

    Uj.prototype.handleEvent = function (a) {
      var b = new ce(a.a);
      b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
      Be(this, b);
    };

    Uj.prototype.m = function () {
      Uj.M.m.call(this);
      xe(this.f);
      xe(this.h);
      delete this.a;
    };

    function Vj(a, b) {
      F.call(this);
      this.f = a || 1;
      this.a = b || p;
      this.h = t(this.fc, this);
      this.j = Ca();
    }

    w(Vj, F);
    l = Vj.prototype;
    l.Ka = !1;
    l.$ = null;

    l.fc = function () {
      if (this.Ka) {
        var a = Ca() - this.j;
        0 < a && a < .8 * this.f ? this.$ = this.a.setTimeout(this.h, this.f - a) : (this.$ && (this.a.clearTimeout(this.$), this.$ = null), Be(this, "tick"), this.Ka && (Wj(this), this.start()));
      }
    };

    l.start = function () {
      this.Ka = !0;
      this.$ || (this.$ = this.a.setTimeout(this.h, this.f), this.j = Ca());
    };

    function Wj(a) {
      a.Ka = !1;
      a.$ && (a.a.clearTimeout(a.$), a.$ = null);
    }

    l.m = function () {
      Vj.M.m.call(this);
      Wj(this);
      delete this.a;
    };

    function Xj(a, b) {
      if (va(a)) b && (a = t(a, b));else if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(0) ? -1 : p.setTimeout(a, 0);
    }

    function Yj(a) {
      Td.call(this);
      this.f = a;
      this.a = {};
    }

    w(Yj, Td);
    var Zj = [];

    function ak(a, b, c, d) {
      ta(c) || (c && (Zj[0] = c.toString()), c = Zj);

      for (var e = 0; e < c.length; e++) {
        var f = oe(b, c[e], d || a.handleEvent, !1, a.f || a);
        if (!f) break;
        a.a[f.key] = f;
      }
    }

    function bk(a) {
      ib(a.a, function (b, c) {
        this.a.hasOwnProperty(c) && xe(b);
      }, a);
      a.a = {};
    }

    Yj.prototype.m = function () {
      Yj.M.m.call(this);
      bk(this);
    };

    Yj.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };

    function ck(a) {
      F.call(this);
      this.a = null;
      this.f = a;
      a = z || hc || kc && !sc("531") && "TEXTAREA" == a.tagName;
      this.h = new Yj(this);
      ak(this.h, this.f, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this);
    }

    w(ck, F);

    ck.prototype.handleEvent = function (a) {
      if ("input" == a.type) z && sc(10) && 0 == a.keyCode && 0 == a.j || (dk(this), Be(this, ek(a)));else if ("keydown" != a.type || Lj(a)) {
        var b = "keydown" == a.type ? this.f.value : null;
        z && 229 == a.keyCode && (b = null);
        var c = ek(a);
        dk(this);
        this.a = Xj(function () {
          this.a = null;
          this.f.value != b && Be(this, c);
        }, this);
      }
    };

    function dk(a) {
      null != a.a && (p.clearTimeout(a.a), a.a = null);
    }

    function ek(a) {
      a = new ce(a.a);
      a.type = "input";
      return a;
    }

    ck.prototype.m = function () {
      ck.M.m.call(this);
      this.h.o();
      dk(this);
      delete this.f;
    };

    function fk(a, b) {
      F.call(this);
      a && (this.Pa && gk(this), this.qa = a, this.Oa = oe(this.qa, "keypress", this, b), this.Za = oe(this.qa, "keydown", this.Ib, b, this), this.Pa = oe(this.qa, "keyup", this.Jb, b, this));
    }

    w(fk, F);
    l = fk.prototype;
    l.qa = null;
    l.Oa = null;
    l.Za = null;
    l.Pa = null;
    l.T = -1;
    l.W = -1;
    l.Va = !1;
    var hk = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
        ik = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
        jk = !kc || sc("525"),
        kk = mc && jc;
    l = fk.prototype;

    l.Ib = function (a) {
      if (kc || hc) if (17 == this.T && !a.ctrlKey || 18 == this.T && !a.altKey || mc && 91 == this.T && !a.metaKey) this.W = this.T = -1;
      -1 == this.T && (a.ctrlKey && 17 != a.keyCode ? this.T = 17 : a.altKey && 18 != a.keyCode ? this.T = 18 : a.metaKey && 91 != a.keyCode && (this.T = 91));
      jk && !Nj(a.keyCode, this.T, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.W = Oj(a.keyCode), kk && (this.Va = a.altKey));
    };

    l.Jb = function (a) {
      this.W = this.T = -1;
      this.Va = a.altKey;
    };

    l.handleEvent = function (a) {
      var b = a.a,
          c = b.altKey;

      if (z && "keypress" == a.type) {
        var d = this.W;
        var e = 13 != d && 27 != d ? b.keyCode : 0;
      } else (kc || hc) && "keypress" == a.type ? (d = this.W, e = 0 <= b.charCode && 63232 > b.charCode && Mj(d) ? b.charCode : 0) : gc && !kc ? (d = this.W, e = Mj(d) ? b.keyCode : 0) : ("keypress" == a.type ? (kk && (c = this.Va), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.W, e = b.charCode) : (d = b.keyCode || this.W, e = b.charCode || 0)) : (d = b.keyCode || this.W, e = b.charCode || 0), mc && 63 == e && 224 == d && (d = 191));

      var f = d = Oj(d);
      d ? 63232 <= d && d in hk ? f = hk[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in ik && (f = ik[b.keyIdentifier]);
      jc && jk && "keypress" == a.type && !Nj(f, this.T, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.T, this.T = f, b = new lk(f, e, a, b), b.altKey = c, Be(this, b));
    };

    l.R = function () {
      return this.qa;
    };

    function gk(a) {
      a.Oa && (xe(a.Oa), xe(a.Za), xe(a.Pa), a.Oa = null, a.Za = null, a.Pa = null);
      a.qa = null;
      a.T = -1;
      a.W = -1;
    }

    l.m = function () {
      fk.M.m.call(this);
      gk(this);
    };

    function lk(a, b, c, d) {
      ce.call(this, d);
      this.type = "key";
      this.keyCode = a;
      this.j = b;
      this.repeat = c;
    }

    w(lk, ce);

    function mk(a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    }

    mk.prototype.toString = function () {
      return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)";
    };

    mk.prototype.ceil = function () {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this;
    };

    mk.prototype.floor = function () {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this;
    };

    mk.prototype.round = function () {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this;
    };

    function nk(a, b) {
      var c = Xc(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    }

    function ok(a) {
      try {
        var b = a.getBoundingClientRect();
      } catch (c) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
      }

      z && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
      return b;
    }

    function pk(a, b) {
      b = b || cd(document);
      var c = b || cd(document);
      var d = qk(a),
          e = qk(c);

      if (!z || 9 <= Number(tc)) {
        g = nk(c, "borderLeftWidth");
        var f = nk(c, "borderRightWidth");
        h = nk(c, "borderTopWidth");
        k = nk(c, "borderBottomWidth");
        f = new mk(parseFloat(h), parseFloat(f), parseFloat(k), parseFloat(g));
      } else {
        var g = rk(c, "borderLeft");
        f = rk(c, "borderRight");
        var h = rk(c, "borderTop"),
            k = rk(c, "borderBottom");
        f = new mk(h, f, k, g);
      }

      c == cd(document) ? (g = d.a - c.scrollLeft, d = d.f - c.scrollTop, !z || 10 <= Number(tc) || (g += f.left, d += f.top)) : (g = d.a - e.a - f.left, d = d.f - e.f - f.top);
      e = a.offsetWidth;
      f = a.offsetHeight;
      h = kc && !e && !f;
      na(e) && !h || !a.getBoundingClientRect ? a = new Uc(e, f) : (a = ok(a), a = new Uc(a.right - a.left, a.bottom - a.top));
      e = c.clientHeight - a.height;
      f = c.scrollLeft;
      h = c.scrollTop;
      f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
      h += Math.min(d, Math.max(d - e, 0));
      c = new Tc(f, h);
      b.scrollLeft = c.a;
      b.scrollTop = c.f;
    }

    function qk(a) {
      var b = Xc(a),
          c = new Tc(0, 0);
      var d = b ? Xc(b) : document;
      d = !z || 9 <= Number(tc) || "CSS1Compat" == Vc(d).a.compatMode ? d.documentElement : d.body;
      if (a == d) return c;
      a = ok(a);
      d = Vc(b).a;
      b = cd(d);
      d = d.parentWindow || d.defaultView;
      b = z && sc("10") && d.pageYOffset != b.scrollTop ? new Tc(b.scrollLeft, b.scrollTop) : new Tc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
      c.a = a.left + b.a;
      c.f = a.top + b.f;
      return c;
    }

    var sk = {
      thin: 2,
      medium: 4,
      thick: 6
    };

    function rk(a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      if (c in sk) a = sk[c];else if (/^\d+px?$/.test(c)) a = parseInt(c, 10);else {
        b = a.style.left;
        var d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = b;
        a.runtimeStyle.left = d;
        a = +c;
      }
      return a;
    }

    function tk() {}

    ra(tk);
    tk.prototype.a = 0;

    function uk(a) {
      F.call(this);
      this.s = a || Vc();
      this.eb = null;
      this.na = !1;
      this.f = null;
      this.L = void 0;
      this.oa = this.Ca = this.X = null;
    }

    w(uk, F);
    l = uk.prototype;
    l.Kb = tk.Ya();

    l.R = function () {
      return this.f;
    };

    function L(a, b) {
      return a.f ? $c(b, a.f || a.s.a) : null;
    }

    function vk(a) {
      a.L || (a.L = new Yj(a));
      return a.L;
    }

    l.$a = function (a) {
      if (this.X && this.X != a) throw Error("Method not supported");
      uk.M.$a.call(this, a);
    };

    l.lb = function () {
      this.f = this.s.a.createElement("DIV");
    };

    l.render = function (a) {
      if (this.na) throw Error("Component already rendered");
      this.f || this.lb();
      a ? a.insertBefore(this.f, null) : this.s.a.body.appendChild(this.f);
      this.X && !this.X.na || this.v();
    };

    l.v = function () {
      this.na = !0;
      wk(this, function (a) {
        !a.na && a.R() && a.v();
      });
    };

    l.ya = function () {
      wk(this, function (a) {
        a.na && a.ya();
      });
      this.L && bk(this.L);
      this.na = !1;
    };

    l.m = function () {
      this.na && this.ya();
      this.L && (this.L.o(), delete this.L);
      wk(this, function (a) {
        a.o();
      });
      this.f && dd(this.f);
      this.X = this.f = this.oa = this.Ca = null;
      uk.M.m.call(this);
    };

    function wk(a, b) {
      a.Ca && Ja(a.Ca, b, void 0);
    }

    l.removeChild = function (a, b) {
      if (a) {
        var c = r(a) ? a : a.eb || (a.eb = ":" + (a.Kb.a++).toString(36));
        this.oa && c ? (a = this.oa, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;

        if (c && a) {
          var d = this.oa;
          c in d && delete d[c];
          Ra(this.Ca, a);
          b && (a.ya(), a.f && dd(a.f));
          b = a;
          if (null == b) throw Error("Unable to set parent component");
          b.X = null;
          uk.M.$a.call(b, null);
        }
      }

      if (!a) throw Error("Child is not in parent component");
      return a;
    };

    function M(a, b) {
      var c = fd(a, "firebaseui-textfield");
      b ? (Ij(a, "firebaseui-input-invalid"), Hj(a, "firebaseui-input"), c && Ij(c, "firebaseui-textfield-invalid")) : (Ij(a, "firebaseui-input"), Hj(a, "firebaseui-input-invalid"), c && Hj(c, "firebaseui-textfield-invalid"));
    }

    function xk(a, b, c) {
      b = new ck(b);
      Wd(a, Ba(Xd, b));
      ak(vk(a), b, "input", c);
    }

    function yk(a, b, c) {
      b = new fk(b);
      Wd(a, Ba(Xd, b));
      ak(vk(a), b, "key", function (d) {
        13 == d.keyCode && (d.stopPropagation(), d.preventDefault(), c(d));
      });
    }

    function zk(a, b, c) {
      b = new Uj(b);
      Wd(a, Ba(Xd, b));
      ak(vk(a), b, "focusin", c);
    }

    function Ak(a, b, c) {
      b = new Uj(b);
      Wd(a, Ba(Xd, b));
      ak(vk(a), b, "focusout", c);
    }

    function N(a, b, c) {
      b = new Qj(b);
      Wd(a, Ba(Xd, b));
      ak(vk(a), b, "action", function (d) {
        d.stopPropagation();
        d.preventDefault();
        c(d);
      });
    }

    function Bk(a) {
      Hj(a, "firebaseui-hidden");
    }

    function Ck(a, b) {
      b && ed(a, b);
      Ij(a, "firebaseui-hidden");
    }

    function Dk(a) {
      return !Gj(a, "firebaseui-hidden") && "none" != a.style.display;
    }

    function Ek(a) {
      a = a || {};
      var b = a.email,
          c = a.disabled,
          d = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';
      d = a.vc ? d + "Enter new email address" : d + "Email";
      d += '</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="' + yd(null != b ? b : "") + '"' + (c ? "disabled" : "") + '></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>';
      return B(d);
    }

    function Fk(a) {
      a = a || {};
      a = a.label;
      var b = '<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';
      b = a ? b + A(a) : b + "Next";
      return B(b + "</button>");
    }

    function Gk() {
      var a = "" + Fk({
        label: D("Sign In")
      });
      return B(a);
    }

    function Hk() {
      var a = "" + Fk({
        label: D("Save")
      });
      return B(a);
    }

    function Ik() {
      var a = "" + Fk({
        label: D("Continue")
      });
      return B(a);
    }

    function Jk(a) {
      a = a || {};
      a = a.label;
      var b = '<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';
      b = a ? b + A(a) : b + "Choose password";
      return B(b + '</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>');
    }

    function Kk() {
      var a = {};
      var b = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';
      b = a.current ? b + "Current password" : b + "Password";
      return B(b + '</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>');
    }

    function Lk() {
      return B('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>');
    }

    function Mk(a) {
      a = a || {};
      a = a.label;
      var b = '<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';
      b = a ? b + A(a) : b + "Cancel";
      return B(b + "</button>");
    }

    function Nk(a) {
      var b = "";
      a.G && a.F && (b += '<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>');
      return B(b);
    }

    function Ok(a) {
      var b = "";
      a.G && a.F && (b += '<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>');
      return B(b);
    }

    function Pk(a) {
      a = '<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">' + A(a.message) + '&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>';
      return B(a);
    }

    Pk.A = "firebaseui.auth.soy2.element.infoBar";

    function Qk(a) {
      var b = a.content;
      a = a.Bb;
      return B('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog' + (a ? " " + yd(a) : "") + '">' + A(b) + "</dialog>");
    }

    function Rk(a) {
      var b = a.message;
      return B(Qk({
        content: xd('<div class="firebaseui-dialog-icon-wrapper"><div class="' + yd(a.Ma) + ' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">' + A(b) + "</div>")
      }));
    }

    Rk.A = "firebaseui.auth.soy2.element.progressDialog";

    function Sk(a) {
      var b = '<div class="firebaseui-list-box-actions">';
      a = a.items;

      for (var c = a.length, d = 0; d < c; d++) {
        var e = a[d];
        b += '<button type="button" data-listboxid="' + yd(e.id) + '" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">' + (e.Ma ? '<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon ' + yd(e.Ma) + '"></div></div>' : "") + '<div class="firebaseui-list-box-label-wrapper">' + A(e.label) + "</div></button>";
      }

      b = "" + Qk({
        Bb: D("firebaseui-list-box-dialog"),
        content: xd(b + "</div>")
      });
      return B(b);
    }

    Sk.A = "firebaseui.auth.soy2.element.listBoxDialog";

    function Tk(a) {
      a = a || {};
      return B(a.vb ? '<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>' : '<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>');
    }

    Tk.A = "firebaseui.auth.soy2.element.busyIndicator";

    function Uk(a, b) {
      a = a || {};
      a = a.ga;
      return C(a.rb ? a.rb : b.ib[a.providerId] ? "" + b.ib[a.providerId] : 0 == ("" + a.providerId).indexOf("saml.") ? ("" + a.providerId).substring(5) : 0 == ("" + a.providerId).indexOf("oidc.") ? ("" + a.providerId).substring(5) : "" + a.providerId);
    }

    function Vk(a) {
      Wk(a, "upgradeElement");
    }

    function Xk(a) {
      Wk(a, "downgradeElements");
    }

    var Yk = ["mdl-js-textfield", "mdl-js-progress", "mdl-js-spinner", "mdl-js-button"];

    function Wk(a, b) {
      a && window.componentHandler && window.componentHandler[b] && Ja(Yk, function (c) {
        if (Gj(a, c)) window.componentHandler[b](a);
        Ja(Yc(c, a), function (d) {
          window.componentHandler[b](d);
        });
      });
    }

    function Zk(a, b, c) {
      $k.call(this);
      document.body.appendChild(a);
      a.showModal || window.dialogPolyfill.registerDialog(a);
      a.showModal();
      Vk(a);
      b && N(this, a, function (f) {
        var g = a.getBoundingClientRect();
        (f.clientX < g.left || g.left + g.width < f.clientX || f.clientY < g.top || g.top + g.height < f.clientY) && $k.call(this);
      });

      if (!c) {
        var d = this.R().parentElement || this.R().parentNode;

        if (d) {
          var e = this;

          this.da = function () {
            if (a.open) {
              var f = a.getBoundingClientRect().height,
                  g = d.getBoundingClientRect().height,
                  h = d.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
                  k = d.getBoundingClientRect().left - document.body.getBoundingClientRect().left,
                  m = a.getBoundingClientRect().width,
                  q = d.getBoundingClientRect().width;
              a.style.top = (h + (g - f) / 2).toString() + "px";
              f = k + (q - m) / 2;
              a.style.left = f.toString() + "px";
              a.style.right = (document.body.getBoundingClientRect().width - f - m).toString() + "px";
            } else window.removeEventListener("resize", e.da);
          };

          this.da();
          window.addEventListener("resize", this.da, !1);
        }
      }
    }

    function $k() {
      var a = al.call(this);
      a && (Xk(a), a.open && a.close(), dd(a), this.da && window.removeEventListener("resize", this.da));
    }

    function al() {
      return $c("firebaseui-id-dialog");
    }

    function bl() {
      dd(cl.call(this));
    }

    function cl() {
      return L(this, "firebaseui-id-info-bar");
    }

    function dl() {
      return L(this, "firebaseui-id-dismiss-info-bar");
    }

    var el = {
      xa: {
        "google.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
        "github.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg",
        "facebook.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg",
        "twitter.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",
        password: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",
        phone: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",
        anonymous: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png",
        "microsoft.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg",
        "yahoo.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg",
        "apple.com": "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",
        saml: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",
        oidc: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"
      },
      wa: {
        "google.com": "#ffffff",
        "github.com": "#333333",
        "facebook.com": "#3b5998",
        "twitter.com": "#55acee",
        password: "#db4437",
        phone: "#02bd7e",
        anonymous: "#f4b400",
        "microsoft.com": "#2F2F2F",
        "yahoo.com": "#720E9E",
        "apple.com": "#000000",
        saml: "#007bff",
        oidc: "#007bff"
      },
      ib: {
        "google.com": "Google",
        "github.com": "GitHub",
        "facebook.com": "Facebook",
        "twitter.com": "Twitter",
        password: "Password",
        phone: "Phone",
        anonymous: "Guest",
        "microsoft.com": "Microsoft",
        "yahoo.com": "Yahoo",
        "apple.com": "Apple"
      }
    };

    function fl(a, b, c) {
      be.call(this, a, b);

      for (var d in c) {
        this[d] = c[d];
      }
    }

    w(fl, be);

    function O(a, b, c, d, e) {
      uk.call(this, c);
      this.gb = a;
      this.fb = b;
      this.Da = !1;
      this.Ea = d || null;
      this.w = this.ca = null;
      this.Y = jb(el);
      lb(this.Y, e || {});
    }

    w(O, uk);
    l = O.prototype;

    l.lb = function () {
      var a = md(this.gb, this.fb, this.Y, this.s);
      Vk(a);
      this.f = a;
    };

    l.v = function () {
      O.M.v.call(this);
      Fe(P(this), new fl("pageEnter", P(this), {
        pageId: this.Ea
      }));

      if (this.cb() && this.Y.G) {
        var a = this.Y.G;
        N(this, this.cb(), function () {
          a();
        });
      }

      if (this.bb() && this.Y.F) {
        var b = this.Y.F;
        N(this, this.bb(), function () {
          b();
        });
      }
    };

    l.ya = function () {
      Fe(P(this), new fl("pageExit", P(this), {
        pageId: this.Ea
      }));
      O.M.ya.call(this);
    };

    l.m = function () {
      window.clearTimeout(this.ca);
      this.fb = this.gb = this.ca = null;
      this.Da = !1;
      this.w = null;
      Xk(this.R());
      O.M.m.call(this);
    };

    function gl(a) {
      a.Da = !0;
      var b = Gj(a.R(), "firebaseui-use-spinner");
      a.ca = window.setTimeout(function () {
        a.R() && null === a.w && (a.w = md(Tk, {
          vb: b
        }, null, a.s), a.R().appendChild(a.w), Vk(a.w));
      }, 500);
    }

    l.K = function (a, b, c, d) {
      function e() {
        if (f.O) return null;
        f.Da = !1;
        window.clearTimeout(f.ca);
        f.ca = null;
        f.w && (Xk(f.w), dd(f.w), f.w = null);
      }

      var f = this;
      if (f.Da) return null;
      gl(f);
      return a.apply(null, b).then(c, d).then(e, e);
    };

    function P(a) {
      return a.R().parentElement || a.R().parentNode;
    }

    function hl(a, b, c) {
      yk(a, b, function () {
        c.focus();
      });
    }

    function il(a, b, c) {
      yk(a, b, function () {
        c();
      });
    }

    u(O.prototype, {
      a: function a(_a) {
        bl.call(this);
        var b = md(Pk, {
          message: _a
        }, null, this.s);
        this.R().appendChild(b);
        N(this, dl.call(this), function () {
          dd(b);
        });
      },
      xc: bl,
      zc: cl,
      yc: dl,
      Z: function Z(a, b) {
        a = md(Rk, {
          Ma: a,
          message: b
        }, null, this.s);
        Zk.call(this, a);
      },
      h: $k,
      Db: al,
      Bc: function Bc() {
        return L(this, "firebaseui-tos");
      },
      cb: function cb() {
        return L(this, "firebaseui-tos-link");
      },
      bb: function bb() {
        return L(this, "firebaseui-pp-link");
      },
      Cc: function Cc() {
        return L(this, "firebaseui-tos-list");
      }
    });

    function jl(a, b, c) {
      a = a || {};
      b = a.Wa;
      var d = a.ia;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + Ek(a) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (b ? Mk(null) : "") + Fk(null) + '</div></div><div class="firebaseui-card-footer">' + (d ? Ok(c) : Nk(c)) + "</div></form></div>";
      return B(a);
    }

    jl.A = "firebaseui.auth.soy2.page.signIn";

    function kl(a, b, c) {
      a = a || {};
      b = a.ia;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">' + Ek(a) + Kk() + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + Lk() + '</div><div class="firebaseui-form-actions">' + Gk() + '</div></div><div class="firebaseui-card-footer">' + (b ? Ok(c) : Nk(c)) + "</div></form></div>";
      return B(a);
    }

    kl.A = "firebaseui.auth.soy2.page.passwordSignIn";

    function ll(a, b, c) {
      a = a || {};
      var d = a.Sb;
      b = a.Ua;
      var e = a.ia,
          f = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">' + Ek(a);
      d ? (a = a || {}, a = a.name, a = '<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="' + yd(null != a ? a : "") + '"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>', a = B(a)) : a = "";
      c = f + a + Jk(null) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (b ? Mk(null) : "") + Hk() + '</div></div><div class="firebaseui-card-footer">' + (e ? Ok(c) : Nk(c)) + "</div></form></div>";
      return B(c);
    }

    ll.A = "firebaseui.auth.soy2.page.passwordSignUp";

    function ml(a, b, c) {
      a = a || {};
      b = a.Ua;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>' + Ek(a) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (b ? Mk(null) : "") + Fk({
        label: D("Send")
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(a);
    }

    ml.A = "firebaseui.auth.soy2.page.passwordRecovery";

    function nl(a, b, c) {
      b = a.H;
      var d = "";
      a = "Follow the instructions sent to <strong>" + (A(a.email) + "</strong> to recover your password");
      d += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions">';
      b && (d += '<div class="firebaseui-form-actions">' + Fk({
        label: D("Done")
      }) + "</div>");
      d += '</div><div class="firebaseui-card-footer">' + Nk(c) + "</div></div>";
      return B(d);
    }

    nl.A = "firebaseui.auth.soy2.page.passwordRecoveryEmailSent";

    function ol(a, b, c) {
      return B('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">' + Tk(null, null, c) + "</div></div>");
    }

    ol.A = "firebaseui.auth.soy2.page.callback";

    function pl(a, b, c) {
      return B('<div class="firebaseui-container firebaseui-id-page-spinner">' + Tk({
        vb: !0
      }, null, c) + "</div>");
    }

    pl.A = "firebaseui.auth.soy2.page.spinner";

    function ql() {
      return B('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>');
    }

    ql.A = "firebaseui.auth.soy2.page.blank";

    function rl(a, b, c) {
      b = "";
      a = "A sign-in email with additional instructions was sent to <strong>" + (A(a.email) + "</strong>. Check your email to complete sign-in.");
      var d = B('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>');
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + d + '</div><div class="firebaseui-form-actions">' + Mk({
        label: D("Back")
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    rl.A = "firebaseui.auth.soy2.page.emailLinkSignInSent";

    function sl(a, b, c) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + B('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>') + '</div><div class="firebaseui-form-actions">' + Mk({
        label: D("Back")
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(a);
    }

    sl.A = "firebaseui.auth.soy2.page.emailNotReceived";

    function tl(a, b, c) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">' + Ek(a) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Mk(null) + Fk(null) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(a);
    }

    tl.A = "firebaseui.auth.soy2.page.emailLinkSignInConfirmation";

    function ul() {
      var a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Mk({
        label: D("Dismiss")
      }) + "</div></div></div>";
      return B(a);
    }

    ul.A = "firebaseui.auth.soy2.page.differentDeviceError";

    function vl() {
      var a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Mk({
        label: D("Dismiss")
      }) + "</div></div></div>";
      return B(a);
    }

    vl.A = "firebaseui.auth.soy2.page.anonymousUserMismatch";

    function wl(a, b, c) {
      b = "";
      a = "You\u2019ve already used <strong>" + (A(a.email) + "</strong> to sign in. Enter your password for that account.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">' + a + "</p>" + Kk() + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">' + Lk() + '</div><div class="firebaseui-form-actions">' + Gk() + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    wl.A = "firebaseui.auth.soy2.page.passwordLinking";

    function xl(a, b, c) {
      var d = a.email;
      b = "";
      a = "" + Uk(a, c);
      a = D(a);
      d = "You\u2019ve already used <strong>" + (A(d) + ("</strong>. You can connect your <strong>" + (A(a) + ("</strong> account with <strong>" + (A(d) + "</strong> by signing in with email link below.")))));
      a = "For this flow to successfully connect your " + (A(a) + " account with this email, you have to open the link on the same device or browser.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">' + d + '<p class="firebaseui-text firebaseui-text-justify">' + a + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Gk() + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    xl.A = "firebaseui.auth.soy2.page.emailLinkSignInLinking";

    function yl(a, b, c) {
      b = "";
      var d = "" + Uk(a, c);
      d = D(d);
      a = "You originally intended to connect <strong>" + (A(d) + "</strong> to your email account but have opened the link on a different device where you are not signed in.");
      d = "If you still want to connect your <strong>" + (A(d) + "</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">' + a + '</p><p class="firebaseui-text firebaseui-text-justify">' + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Ik() + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    yl.A = "firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice";

    function zl(a, b, c) {
      var d = a.email;
      b = "";
      a = "" + Uk(a, c);
      a = D(a);
      d = "You\u2019ve already used <strong>" + (A(d) + ("</strong>. Sign in with " + (A(a) + " to continue.")));
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">' + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Fk({
        label: D("Sign in with " + a)
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    zl.A = "firebaseui.auth.soy2.page.federatedLinking";

    function Al(a, b, c) {
      b = "";
      a = "To continue sign in with <strong>" + (A(a.email) + "</strong> on this device, you have to recover the password.");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Mk(null) + Fk({
        label: D("Recover password")
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    Al.A = "firebaseui.auth.soy2.page.unsupportedProvider";

    function Bl(a) {
      var b = "",
          c = '<p class="firebaseui-text">for <strong>' + (A(a.email) + "</strong></p>");
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">' + c + Jk(wd(a)) + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Hk() + "</div></div></form></div>";
      return B(b);
    }

    Bl.A = "firebaseui.auth.soy2.page.passwordReset";

    function Cl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Cl.A = "firebaseui.auth.soy2.page.passwordResetSuccess";

    function Dl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Dl.A = "firebaseui.auth.soy2.page.passwordResetFailure";

    function El(a) {
      var b = a.H,
          c = "";
      a = "Your sign-in email address has been changed back to <strong>" + (A(a.email) + "</strong>.");
      c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + "</p><p class=\"firebaseui-text\">If you didn\u2019t ask to change your sign-in email, it\u2019s possible someone is trying to access your account and you should <a class=\"firebaseui-link firebaseui-id-reset-password-link\" href=\"javascript:void(0)\">change your password right away</a>.</p></div><div class=\"firebaseui-card-actions\">" + (b ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></form></div>";
      return B(c);
    }

    El.A = "firebaseui.auth.soy2.page.emailChangeRevokeSuccess";

    function Fl(a) {
      a = a || {};
      a = "<div class=\"mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure\"><div class=\"firebaseui-card-header\"><h1 class=\"firebaseui-title\">Unable to update your email address</h1></div><div class=\"firebaseui-card-content\"><p class=\"firebaseui-text\">There was a problem changing your sign-in email back.</p><p class=\"firebaseui-text\">If you try again and still can\u2019t reset your email, try asking your administrator for help.</p></div><div class=\"firebaseui-card-actions\">" + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Fl.A = "firebaseui.auth.soy2.page.emailChangeRevokeFailure";

    function Gl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Gl.A = "firebaseui.auth.soy2.page.emailVerificationSuccess";

    function Hl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Hl.A = "firebaseui.auth.soy2.page.emailVerificationFailure";

    function Il(a) {
      var b = a.H,
          c = "";
      a = "You can now sign in with your new email <strong>" + (A(a.email) + "</strong>.");
      c += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + '</p></div><div class="firebaseui-card-actions">' + (b ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(c);
    }

    Il.A = "firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess";

    function Jl(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Jl.A = "firebaseui.auth.soy2.page.verifyAndChangeEmailFailure";

    function Kl(a) {
      var b = a.factorId,
          c = a.phoneNumber;
      a = a.H;
      var d = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';

      switch (b) {
        case "phone":
          b = "The <strong>" + (A(b) + (" " + (A(c) + "</strong> was removed as a second authentication step.")));
          d += b;
          break;

        default:
          d += "The device or app was removed as a second authentication step.";
      }

      d += '</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">' + (a ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></form></div>";
      return B(d);
    }

    Kl.A = "firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess";

    function Ll(a) {
      a = a || {};
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">' + (a.H ? '<div class="firebaseui-form-actions">' + Ik() + "</div>" : "") + "</div></div>";
      return B(a);
    }

    Ll.A = "firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure";

    function Ml(a) {
      var b = a.Ab;
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + A(a.errorMessage) + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">';
      b && (a += Fk({
        label: D("Retry")
      }));
      return B(a + "</div></div></div>");
    }

    Ml.A = "firebaseui.auth.soy2.page.recoverableError";

    function Nl(a) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + A(a.errorMessage) + "</p></div></div>";
      return B(a);
    }

    Nl.A = "firebaseui.auth.soy2.page.unrecoverableError";

    function Ol(a, b, c) {
      var d = a.Pb;
      b = "";
      a = "Continue with " + (A(a.ic) + "?");
      d = "You originally wanted to sign in with " + A(d);
      b += '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">' + a + '</h2><p class="firebaseui-text">' + d + '</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Mk(null) + Fk({
        label: D("Continue")
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form></div>";
      return B(b);
    }

    Ol.A = "firebaseui.auth.soy2.page.emailMismatch";

    function Pl(a, b, c) {
      var d = '<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';
      a = a.Rb;
      b = a.length;

      for (var e = 0; e < b; e++) {
        var f = {
          ga: a[e]
        };
        var g = c;
        f = f || {};
        var h = f.ga,
            k = f;
        k = k || {};
        var m = "";

        switch (k.ga.providerId) {
          case "google.com":
            m += "firebaseui-idp-google";
            break;

          case "github.com":
            m += "firebaseui-idp-github";
            break;

          case "facebook.com":
            m += "firebaseui-idp-facebook";
            break;

          case "twitter.com":
            m += "firebaseui-idp-twitter";
            break;

          case "phone":
            m += "firebaseui-idp-phone";
            break;

          case "anonymous":
            m += "firebaseui-idp-anonymous";
            break;

          case "password":
            m += "firebaseui-idp-password";
            break;

          default:
            m += "firebaseui-idp-generic";
        }

        k = '<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised ' + yd(C(m)) + ' firebaseui-id-idp-button" data-provider-id="' + yd(h.providerId) + '" style="background-color:';
        m = (m = f) || {};
        m = m.ga;
        k = k + yd(Hd(C(m.Ga ? m.Ga : g.wa[m.providerId] ? "" + g.wa[m.providerId] : 0 == m.providerId.indexOf("saml.") ? "" + g.wa.saml : 0 == m.providerId.indexOf("oidc.") ? "" + g.wa.oidc : "" + g.wa.password))) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';
        var q = f;
        m = g;
        q = q || {};
        q = q.ga;
        m = vd(q.Na ? Dd(q.Na) : m.xa[q.providerId] ? Dd(m.xa[q.providerId]) : 0 == q.providerId.indexOf("saml.") ? Dd(m.xa.saml) : 0 == q.providerId.indexOf("oidc.") ? Dd(m.xa.oidc) : Dd(m.xa.password));
        k = k + yd(Dd(m)) + '"></span>';
        "password" == h.providerId ? k += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with email</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Email</span>' : "phone" == h.providerId ? k += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with phone</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Phone</span>' : "anonymous" == h.providerId ? k += '<span class="firebaseui-idp-text firebaseui-idp-text-long">Continue as guest</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Guest</span>' : (h = "Sign in with " + A(Uk(f, g)), k += '<span class="firebaseui-idp-text firebaseui-idp-text-long">' + h + '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' + A(Uk(f, g)) + "</span>");
        f = B(k + "</button>");
        d += '<li class="firebaseui-list-item">' + f + "</li>";
      }

      d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + Ok(c) + "</div></div>";
      return B(d);
    }

    Pl.A = "firebaseui.auth.soy2.page.providerSignIn";

    function Ql(a, b, c) {
      a = a || {};
      var d = a.Fb,
          e = a.Wa;
      b = a.ia;
      a = a || {};
      a = a.za;
      a = '<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="' + yd(null != a ? a : "") + '"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>';
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + B(a);
      var f;
      d ? f = B('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>') : f = "";
      f = a + f + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + (e ? Mk(null) : "") + Fk({
        label: D("Verify")
      }) + '</div></div><div class="firebaseui-card-footer">';
      b ? (b = '<p class="firebaseui-tos firebaseui-phone-tos">', b = c.G && c.F ? b + 'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.' : b + "By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.", c = B(b + "</p>")) : c = B('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>') + Nk(c);
      return B(f + c + "</div></form></div>");
    }

    Ql.A = "firebaseui.auth.soy2.page.phoneSignInStart";

    function Rl(a, b, c) {
      a = a || {};
      b = a.phoneNumber;
      var d = "";
      a = 'Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;' + (A(b) + "</a>");
      A(b);
      b = d;
      d = B('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>');
      c = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">' + a + "</p>" + d + '</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Mk(null) + Fk({
        label: D("Continue")
      }) + '</div></div><div class="firebaseui-card-footer">' + Nk(c) + "</div></form>";
      a = B('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>');
      return B(b + (c + a + "</div>"));
    }

    Rl.A = "firebaseui.auth.soy2.page.phoneSignInFinish";

    function Sl() {
      return B('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>');
    }

    Sl.A = "firebaseui.auth.soy2.page.signOut";

    function Tl(a, b, c) {
      var d = '<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';
      a = a.dc;
      b = a.length;

      for (var e = 0; e < b; e++) {
        var f = a[e];
        var g = "",
            h = "Sign in to " + A(f.displayName),
            k = A(f.displayName),
            m = f.tenantId ? f.tenantId : "top-level-project";
        m = D(m);
        g += '<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-' + yd(m) + ' firebaseui-id-tenant-selection-button"' + (f.tenantId ? 'data-tenant-id="' + yd(f.tenantId) + '"' : "") + 'style="background-color:' + yd(Hd(f.Ga)) + '"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="' + yd(Dd(f.Na)) + '"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">' + h + '</span><span class="firebaseui-idp-text firebaseui-idp-text-short">' + k + "</span></button>";
        f = B(g);
        d += '<li class="firebaseui-list-item">' + f + "</li>";
      }

      d += '</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">' + Ok(c) + "</div></div>";
      return B(d);
    }

    Tl.A = "firebaseui.auth.soy2.page.selectTenant";

    function Ul(a, b, c) {
      a = '<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">' + Ek(null) + '</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">' + Fk(null) + '</div></div><div class="firebaseui-card-footer">' + Ok(c) + "</div></form></div>";
      return B(a);
    }

    Ul.A = "firebaseui.auth.soy2.page.providerMatchByEmail";

    function Vl() {
      return L(this, "firebaseui-id-submit");
    }

    function Wl() {
      return L(this, "firebaseui-id-secondary-link");
    }

    function Xl(a, b) {
      N(this, Vl.call(this), function (d) {
        a(d);
      });
      var c = Wl.call(this);
      c && b && N(this, c, function (d) {
        b(d);
      });
    }

    function Yl() {
      return L(this, "firebaseui-id-password");
    }

    function Zl() {
      return L(this, "firebaseui-id-password-error");
    }

    function $l() {
      var a = Yl.call(this),
          b = Zl.call(this);
      xk(this, a, function () {
        Dk(b) && (M(a, !0), Bk(b));
      });
    }

    function am() {
      var a = Yl.call(this);
      var b = Zl.call(this);
      Jj(a) ? (M(a, !0), Bk(b), b = !0) : (M(a, !1), Ck(b, C("Enter your password").toString()), b = !1);
      return b ? Jj(a) : null;
    }

    function bm(a, b, c, d, e, f) {
      O.call(this, wl, {
        email: a
      }, f, "passwordLinking", {
        G: d,
        F: e
      });
      this.B = b;
      this.J = c;
    }

    n(bm, O);

    bm.prototype.v = function () {
      this.S();
      this.P(this.B, this.J);
      il(this, this.i(), this.B);
      this.i().focus();
      O.prototype.v.call(this);
    };

    bm.prototype.m = function () {
      this.B = null;
      O.prototype.m.call(this);
    };

    bm.prototype.j = function () {
      return Jj(L(this, "firebaseui-id-email"));
    };

    u(bm.prototype, {
      i: Yl,
      D: Zl,
      S: $l,
      u: am,
      ea: Vl,
      ba: Wl,
      P: Xl
    });
    var cm = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function dm() {
      return L(this, "firebaseui-id-email");
    }

    function em() {
      return L(this, "firebaseui-id-email-error");
    }

    function fm(a) {
      var b = dm.call(this),
          c = em.call(this);
      xk(this, b, function () {
        Dk(c) && (M(b, !0), Bk(c));
      });
      a && yk(this, b, function () {
        a();
      });
    }

    function gm() {
      return Za(Jj(dm.call(this)) || "");
    }

    function hm() {
      var a = dm.call(this);
      var b = em.call(this);
      var c = Jj(a) || "";
      c ? cm.test(c) ? (M(a, !0), Bk(b), b = !0) : (M(a, !1), Ck(b, C("That email address isn't correct").toString()), b = !1) : (M(a, !1), Ck(b, C("Enter your email address to continue").toString()), b = !1);
      return b ? Za(Jj(a)) : null;
    }

    function im(a, b, c, d, e, f, g) {
      O.call(this, kl, {
        email: c,
        ia: !!f
      }, g, "passwordSignIn", {
        G: d,
        F: e
      });
      this.B = a;
      this.J = b;
    }

    n(im, O);

    im.prototype.v = function () {
      this.S();
      this.ea();
      this.ba(this.B, this.J);
      hl(this, this.l(), this.i());
      il(this, this.i(), this.B);
      Jj(this.l()) ? this.i().focus() : this.l().focus();
      O.prototype.v.call(this);
    };

    im.prototype.m = function () {
      this.J = this.B = null;
      O.prototype.m.call(this);
    };

    u(im.prototype, {
      l: dm,
      U: em,
      S: fm,
      P: gm,
      j: hm,
      i: Yl,
      D: Zl,
      ea: $l,
      u: am,
      ua: Vl,
      pa: Wl,
      ba: Xl
    });

    function Q(a, b, c, d, e, f) {
      O.call(this, a, b, d, e || "notice", f);
      this.i = c || null;
    }

    w(Q, O);

    Q.prototype.v = function () {
      this.i && (this.u(this.i), this.l().focus());
      Q.M.v.call(this);
    };

    Q.prototype.m = function () {
      this.i = null;
      Q.M.m.call(this);
    };

    u(Q.prototype, {
      l: Vl,
      B: Wl,
      u: Xl
    });

    function jm(a, b, c, d, e) {
      Q.call(this, nl, {
        email: a,
        H: !!b
      }, b, e, "passwordRecoveryEmailSent", {
        G: c,
        F: d
      });
    }

    w(jm, Q);

    function km(a, b) {
      Q.call(this, Gl, {
        H: !!a
      }, a, b, "emailVerificationSuccess");
    }

    w(km, Q);

    function lm(a, b) {
      Q.call(this, Hl, {
        H: !!a
      }, a, b, "emailVerificationFailure");
    }

    w(lm, Q);

    function mm(a, b, c) {
      Q.call(this, Il, {
        email: a,
        H: !!b
      }, b, c, "verifyAndChangeEmailSuccess");
    }

    w(mm, Q);

    function nm(a, b) {
      Q.call(this, Jl, {
        H: !!a
      }, a, b, "verifyAndChangeEmailFailure");
    }

    w(nm, Q);

    function om(a, b) {
      Q.call(this, Ll, {
        H: !!a
      }, a, b, "revertSecondFactorAdditionFailure");
    }

    w(om, Q);

    function pm(a) {
      Q.call(this, Sl, void 0, void 0, a, "signOut");
    }

    w(pm, Q);

    function qm(a, b) {
      Q.call(this, Cl, {
        H: !!a
      }, a, b, "passwordResetSuccess");
    }

    w(qm, Q);

    function rm(a, b) {
      Q.call(this, Dl, {
        H: !!a
      }, a, b, "passwordResetFailure");
    }

    w(rm, Q);

    function sm(a, b) {
      Q.call(this, Fl, {
        H: !!a
      }, a, b, "emailChangeRevokeFailure");
    }

    w(sm, Q);

    function tm(a, b, c) {
      Q.call(this, Ml, {
        errorMessage: a,
        Ab: !!b
      }, b, c, "recoverableError");
    }

    w(tm, Q);

    function um(a, b) {
      Q.call(this, Nl, {
        errorMessage: a
      }, void 0, b, "unrecoverableError");
    }

    w(um, Q);
    var vm = !1,
        wm = null;

    function xm(a, b) {
      vm = !!b;
      wm || ("undefined" == typeof accountchooser && Ej() ? (b = Cc(yc(new vc(wc, "//www.gstatic.com/accountchooser/client.js"))), wm = G(Nf(b)).ta(function () {})) : wm = G());
      wm.then(a, a);
    }

    function ym(a, b) {
      a = R(a);
      (a = aj(a).accountChooserInvoked || null) ? a(b) : b();
    }

    function zm(a, b, c) {
      a = R(a);
      (a = aj(a).accountChooserResult || null) ? a(b, c) : c();
    }

    function Am(a, b, c, d, e) {
      d ? (K("callback", a, b), vm && c()) : ym(a, function () {
        Uh(new Kg(a.a.tenantId || null), T(a));
        pj(function (f) {
          Jh(Ch, T(a));
          zm(a, f ? "empty" : "unavailable", function () {
            K("signIn", a, b);
            (f || vm) && c();
          });
        }, Oh(T(a)), e);
      });
    }

    function Bm(a, b, c, d) {
      function e(f) {
        f = U(f);
        V(b, c, void 0, f);
        d();
      }

      zm(b, "accountSelected", function () {
        Nh(!1, T(b));
        var f = Cm(b);
        W(b, X(b).fetchSignInMethodsForEmail(a.a).then(function (g) {
          Dm(b, c, g, a.a, a.h || void 0, void 0, f);
          d();
        }, e));
      });
    }

    function Em(a, b, c, d) {
      zm(b, a ? "addAccount" : "unavailable", function () {
        K("signIn", b, c);
        (a || vm) && d();
      });
    }

    function Fm(a, b, c, d) {
      function e() {
        var f = a();
        f && (f = $i(R(f))) && f();
      }

      mj(function () {
        var f = a();
        f && Am(f, b, e, c, d);
      }, function (f) {
        var g = a();
        g && Bm(f, g, b, e);
      }, function (f) {
        var g = a();
        g && Em(f, g, b, e);
      }, a() && ui(R(a())));
    }

    function Gm(a, b, c, d) {
      function e(g) {
        if (!g.name || "cancel" != g.name) {
          a: {
            var h = g.message;

            try {
              var k = ((JSON.parse(h).error || {}).message || "").toLowerCase().match(/invalid.+(access|id)_token/);

              if (k && k.length) {
                var m = !0;
                break a;
              }
            } catch (q) {}

            m = !1;
          }

          if (m) g = P(b), b.o(), V(a, g, void 0, C("Your sign-in session has expired. Please try again.").toString());else {
            m = g && g.message || "";

            if (g.code) {
              if ("auth/email-already-in-use" == g.code || "auth/credential-already-in-use" == g.code) return;
              m = U(g);
            }

            b.a(m);
          }
        }
      }

      Hm(a);
      if (d) return Im(a, c), G();
      if (!c.credential) throw Error("No credential found!");
      d = X(a).currentUser || c.user;
      if (!d) throw Error("User not logged in.");
      d = new Bg(d.email, d.displayName, d.photoURL, "password" == c.credential.providerId ? null : c.credential.providerId);
      null != Ih(Eh, T(a)) && !Ih(Eh, T(a)) || Ph(d, T(a));
      Jh(Eh, T(a));

      try {
        var f = Jm(a, c);
      } catch (g) {
        return vg(g.code || g.message, g), b.a(g.code || g.message), G();
      }

      c = f.then(function (g) {
        Im(a, g);
      }, e).then(void 0, e);
      W(a, f);
      return G(c);
    }

    function Im(a, b) {
      if (!b.user) throw Error("No user found");
      var c = cj(R(a));
      bj(R(a)) && c && Ag("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked.");

      if (c) {
        c = cj(R(a));
        var d = Lh(T(a)) || void 0;
        Jh(Dh, T(a));
        var e = !1;

        if (vf()) {
          if (!c || c(b, d)) e = !0, window.opener.location.assign(Fc(Ic(Km(a, d))));
          c || window.close();
        } else if (!c || c(b, d)) e = !0, uf(Km(a, d));

        e || a.reset();
      } else {
        c = b.user;
        b = b.credential;
        d = bj(R(a));
        e = Lh(T(a)) || void 0;
        Jh(Dh, T(a));
        var f = !1;

        if (vf()) {
          if (!d || d(c, b, e)) f = !0, window.opener.location.assign(Fc(Ic(Km(a, e))));
          d || window.close();
        } else if (!d || d(c, b, e)) f = !0, uf(Km(a, e));

        f || a.reset();
      }
    }

    function Km(a, b) {
      a = b || R(a).a.get("signInSuccessUrl");
      if (!a) throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");
      return a;
    }

    function U(a) {
      var b = {
        code: a.code
      };
      b = b || {};
      var c = "";

      switch (b.code) {
        case "auth/email-already-in-use":
          c += "The email address is already used by another account";
          break;

        case "auth/requires-recent-login":
          c += Qd();
          break;

        case "auth/too-many-requests":
          c += "You have entered an incorrect password too many times. Please try again in a few minutes.";
          break;

        case "auth/user-cancelled":
          c += "Please authorize the required permissions to sign in to the application";
          break;

        case "auth/user-not-found":
          c += "That email address doesn't match an existing account";
          break;

        case "auth/user-token-expired":
          c += Qd();
          break;

        case "auth/weak-password":
          c += "Strong passwords have at least 6 characters and a mix of letters and numbers";
          break;

        case "auth/wrong-password":
          c += "The email and password you entered don't match";
          break;

        case "auth/network-request-failed":
          c += "A network error has occurred";
          break;

        case "auth/invalid-phone-number":
          c += Ld();
          break;

        case "auth/invalid-verification-code":
          c += C("Wrong code. Try again.");
          break;

        case "auth/code-expired":
          c += "This code is no longer valid";
          break;

        case "auth/expired-action-code":
          c += "This code has expired.";
          break;

        case "auth/invalid-action-code":
          c += "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.";
      }

      if (b = C(c).toString()) return b;

      try {
        return JSON.parse(a.message), vg("Internal error: " + a.message, void 0), Nd().toString();
      } catch (d) {
        return a.message;
      }
    }

    function Lm(a, b, c) {
      var d = ri[b] && firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"][ri[b]] ? new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"][ri[b]]() : 0 == b.indexOf("saml.") ? new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].SAMLAuthProvider(b) : new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].OAuthProvider(b);
      if (!d) throw Error("Invalid Firebase Auth provider!");
      var e = Mi(R(a), b);
      if (d.addScope) for (var f = 0; f < e.length; f++) {
        d.addScope(e[f]);
      }
      e = Ni(R(a), b) || {};
      c && (b == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID ? a = "login_hint" : b == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GithubAuthProvider.PROVIDER_ID ? a = "login" : a = (a = Di(R(a), b)) && a.Nb, a && (e[a] = c));
      d.setCustomParameters && d.setCustomParameters(e);
      return d;
    }

    function Mm(a, b, c, d) {
      function e() {
        Uh(new Kg(a.a.tenantId || null), T(a));
        W(a, b.K(t(a.cc, a), [k], function () {
          if ("file:" === (window.location && window.location.protocol)) return W(a, Nm(a).then(function (m) {
            b.o();
            Jh(Ch, T(a));
            K("callback", a, h, G(m));
          }, f));
        }, g));
      }

      function f(m) {
        Jh(Ch, T(a));
        if (!m.name || "cancel" != m.name) switch (m.code) {
          case "auth/popup-blocked":
            e();
            break;

          case "auth/popup-closed-by-user":
          case "auth/cancelled-popup-request":
            break;

          case "auth/credential-already-in-use":
            break;

          case "auth/network-request-failed":
          case "auth/too-many-requests":
          case "auth/user-cancelled":
            b.a(U(m));
            break;

          default:
            b.o(), K("callback", a, h, hf(m));
        }
      }

      function g(m) {
        Jh(Ch, T(a));
        m.name && "cancel" == m.name || (vg("signInWithRedirect: " + m.code, void 0), m = U(m), "blank" == b.Ea && Wi(R(a)) ? (b.o(), K("providerSignIn", a, h, m)) : b.a(m));
      }

      var h = P(b),
          k = Lm(a, c, d);
      Xi(R(a)) == Yi ? e() : W(a, Om(a, k).then(function (m) {
        b.o();
        K("callback", a, h, G(m));
      }, f));
    }

    function Pm(a, b) {
      W(a, b.K(t(a.Zb, a), [], function (c) {
        b.o();
        return Gm(a, b, c, !0);
      }, function (c) {
        c.name && "cancel" == c.name || (vg("ContinueAsGuest: " + c.code, void 0), c = U(c), b.a(c));
      }));
    }

    function Qm(a, b, c) {
      function d(f) {
        var g = !1;
        f = b.K(t(a.$b, a), [f], function (h) {
          var k = P(b);
          b.o();
          K("callback", a, k, G(h));
          g = !0;
        }, function (h) {
          if (!h.name || "cancel" != h.name) if (!h || "auth/credential-already-in-use" != h.code) if (h && "auth/email-already-in-use" == h.code && h.email && h.credential) {
            var k = P(b);
            b.o();
            K("callback", a, k, hf(h));
          } else h = U(h), b.a(h);
        });
        W(a, f);
        return f.then(function () {
          return g;
        }, function () {
          return !1;
        });
      }

      var e = Ji(R(a), c && c.authMethod || null);
      if (c && c.idToken && e === firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID) return Mi(R(a), firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID).length ? (Mm(a, b, e, c.id), c = G(!0)) : c = d(firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.credential(c.idToken)), c;
      c && b.a(C("The selected credential for the authentication provider is not supported!").toString());
      return G(!1);
    }

    function Rm(a, b) {
      var c = b.j(),
          d = b.u();
      if (c) {
        if (d) {
          var e = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(c, d);
          W(a, b.K(t(a.ac, a), [c, d], function (f) {
            return Gm(a, b, {
              user: f.user,
              credential: e,
              operationType: f.operationType,
              additionalUserInfo: f.additionalUserInfo
            });
          }, function (f) {
            if (!f.name || "cancel" != f.name) switch (f.code) {
              case "auth/email-already-in-use":
                break;

              case "auth/email-exists":
                M(b.l(), !1);
                Ck(b.U(), U(f));
                break;

              case "auth/too-many-requests":
              case "auth/wrong-password":
                M(b.i(), !1);
                Ck(b.D(), U(f));
                break;

              default:
                vg("verifyPassword: " + f.message, void 0), b.a(U(f));
            }
          }));
        } else b.i().focus();
      } else b.l().focus();
    }

    function Cm(a) {
      a = Ci(R(a));
      return 1 == a.length && a[0] == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID;
    }

    function Sm(a) {
      a = Ci(R(a));
      return 1 == a.length && a[0] == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID;
    }

    function V(a, b, c, d) {
      Cm(a) ? d ? K("signIn", a, b, c, d) : Tm(a, b, c) : a && Sm(a) && !d ? K("phoneSignInStart", a, b) : a && Wi(R(a)) && !d ? K("federatedRedirect", a, b, c) : K("providerSignIn", a, b, d, c);
    }

    function Um(a, b, c, d) {
      var e = P(b);
      W(a, b.K(t(X(a).fetchSignInMethodsForEmail, X(a)), [c], function (f) {
        Nh(Hi(R(a)) == ti, T(a));
        b.o();
        Dm(a, e, f, c, void 0, d);
      }, function (f) {
        f = U(f);
        b.a(f);
      }));
    }

    function Dm(a, b, c, d, e, f, g) {
      c.length || Ti(R(a)) ? !c.length && Ti(R(a)) ? K("sendEmailLinkForSignIn", a, b, d, function () {
        K("signIn", a, b);
      }) : Qa(c, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? K("passwordSignIn", a, b, d, g) : 1 == c.length && c[0] === firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? K("sendEmailLinkForSignIn", a, b, d, function () {
        K("signIn", a, b);
      }) : (c = pi(c, Ci(R(a)))) ? (Sh(new Ig(d), T(a)), K("federatedSignIn", a, b, d, c, f)) : K("unsupportedProvider", a, b, d) : K("passwordSignUp", a, b, d, e, void 0, g);
    }

    function Vm(a, b, c, d, e, f) {
      var g = P(b);
      W(a, b.K(t(a.Hb, a), [c, f], function () {
        b.o();
        K("emailLinkSignInSent", a, g, c, d, f);
      }, e));
    }

    function Tm(a, b, c) {
      Hi(R(a)) == ti ? xm(function () {
        kj ? ym(a, function () {
          Uh(new Kg(a.a.tenantId || null), T(a));
          pj(function (d) {
            Jh(Ch, T(a));
            zm(a, d ? "empty" : "unavailable", function () {
              c ? K("prefilledEmailSignIn", a, b, c) : K("signIn", a, b);
            });
          }, Oh(T(a)), vi(R(a)));
        }) : (Y(a), Fm(Wm, b, !1, vi(R(a))));
      }, !1) : (vm = !1, ym(a, function () {
        zm(a, "unavailable", function () {
          c ? K("prefilledEmailSignIn", a, b, c) : K("signIn", a, b);
        });
      }));
    }

    function Xm(a) {
      var b = yf();
      a = xi(R(a));
      b = yb(b, a) || "";

      for (var c in fj) {
        if (fj[c].toLowerCase() == b.toLowerCase()) return fj[c];
      }

      return "callback";
    }

    function Ym(a) {
      var b = yf();
      a = $h(R(a).a, "queryParameterForSignInSuccessUrl");
      return (b = yb(b, a)) ? Fc(Ic(b)) : null;
    }

    function Zm() {
      return yb(yf(), "oobCode");
    }

    function $m() {
      var a = yb(yf(), "continueUrl");
      return a ? function () {
        uf(a);
      } : null;
    }

    function an(a, b) {
      var c = xf(b, "Could not find the FirebaseUI widget element on the page.");
      b = Ym(a);

      switch (Xm(a)) {
        case "callback":
          b && Mh(b, T(a));
          a.ob() ? K("callback", a, c) : V(a, c, bn(a));
          break;

        case "resetPassword":
          K("passwordReset", a, c, Zm(), $m());
          break;

        case "recoverEmail":
          K("emailChangeRevocation", a, c, Zm());
          break;

        case "revertSecondFactorAddition":
          K("revertSecondFactorAddition", a, c, Zm());
          break;

        case "verifyEmail":
          K("emailVerification", a, c, Zm(), $m());
          break;

        case "verifyAndChangeEmail":
          K("verifyAndChangeEmail", a, c, Zm(), $m());
          break;

        case "signIn":
          K("emailLinkSignInCallback", a, c, yf());
          cn();
          break;

        case "select":
          if (b && Mh(b, T(a)), kj) {
            V(a, c);
            break;
          } else {
            xm(function () {
              Y(a);
              Fm(Wm, c, !0);
            }, !0);
            return;
          }

        default:
          throw Error("Unhandled widget operation.");
      }

      (b = $i(R(a))) && b();
    }

    function dn(a, b) {
      O.call(this, vl, void 0, b, "anonymousUserMismatch");
      this.i = a;
    }

    n(dn, O);

    dn.prototype.v = function () {
      var a = this;
      N(this, this.l(), function () {
        a.i();
      });
      this.l().focus();
      O.prototype.v.call(this);
    };

    dn.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(dn.prototype, {
      l: Wl
    });

    J.anonymousUserMismatch = function (a, b) {
      var c = new dn(function () {
        c.o();
        V(a, b);
      });
      c.render(b);
      Z(a, c);
    };

    function en(a) {
      O.call(this, ol, void 0, a, "callback");
    }

    n(en, O);

    en.prototype.K = function (a, b, c, d) {
      return a.apply(null, b).then(c, d);
    };

    function fn(a, b, c) {
      if (c.user) {
        var d = {
          user: c.user,
          credential: c.credential,
          operationType: c.operationType,
          additionalUserInfo: c.additionalUserInfo
        },
            e = Qh(T(a)),
            f = e && e.f;
        if (f && !gn(c.user, f)) hn(a, b, d);else {
          var g = e && e.a;
          g ? W(a, c.user.linkWithCredential(g).then(function (h) {
            d = {
              user: h.user,
              credential: g,
              operationType: h.operationType,
              additionalUserInfo: h.additionalUserInfo
            };
            jn(a, b, d);
          }, function (h) {
            kn(a, b, h);
          })) : jn(a, b, d);
        }
      } else c = P(b), b.o(), Rh(T(a)), V(a, c);
    }

    function jn(a, b, c) {
      Rh(T(a));
      Gm(a, b, c);
    }

    function kn(a, b, c) {
      var d = P(b);
      Rh(T(a));
      c = U(c);
      b.o();
      V(a, d, void 0, c);
    }

    function ln(a, b, c, d) {
      var e = P(b);
      W(a, X(a).fetchSignInMethodsForEmail(c).then(function (f) {
        b.o();
        f.length ? Qa(f, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) ? K("passwordLinking", a, e, c) : 1 == f.length && f[0] === firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD ? K("emailLinkSignInLinking", a, e, c) : (f = pi(f, Ci(R(a)))) ? K("federatedLinking", a, e, c, f, d) : (Rh(T(a)), K("unsupportedProvider", a, e, c)) : (Rh(T(a)), K("passwordRecovery", a, e, c, !1, Od().toString()));
      }, function (f) {
        kn(a, b, f);
      }));
    }

    function hn(a, b, c) {
      var d = P(b);
      W(a, mn(a).then(function () {
        b.o();
        K("emailMismatch", a, d, c);
      }, function (e) {
        e.name && "cancel" == e.name || (e = U(e.code), b.a(e));
      }));
    }

    function gn(a, b) {
      if (b == a.email) return !0;
      if (a.providerData) for (var c = 0; c < a.providerData.length; c++) {
        if (b == a.providerData[c].email) return !0;
      }
      return !1;
    }

    J.callback = function (a, b, c) {
      var d = new en();
      d.render(b);
      Z(a, d);
      b = c || Nm(a);
      W(a, b.then(function (e) {
        fn(a, d, e);
      }, function (e) {
        if (e && ("auth/account-exists-with-different-credential" == e.code || "auth/email-already-in-use" == e.code) && e.email && e.credential) Sh(new Ig(e.email, e.credential), T(a)), ln(a, d, e.email);else if (e && "auth/user-cancelled" == e.code) {
          var f = Qh(T(a)),
              g = U(e);
          f && f.a ? ln(a, d, f.f, g) : f ? Um(a, d, f.f, g) : kn(a, d, e);
        } else e && "auth/credential-already-in-use" == e.code || (e && "auth/operation-not-supported-in-this-environment" == e.code && Cm(a) ? fn(a, d, {
          user: null,
          credential: null
        }) : kn(a, d, e));
      }));
    };

    function nn(a, b) {
      O.call(this, ul, void 0, b, "differentDeviceError");
      this.i = a;
    }

    n(nn, O);

    nn.prototype.v = function () {
      var a = this;
      N(this, this.l(), function () {
        a.i();
      });
      this.l().focus();
      O.prototype.v.call(this);
    };

    nn.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(nn.prototype, {
      l: Wl
    });

    J.differentDeviceError = function (a, b) {
      var c = new nn(function () {
        c.o();
        V(a, b);
      });
      c.render(b);
      Z(a, c);
    };

    function on(a, b, c, d) {
      O.call(this, El, {
        email: a,
        H: !!c
      }, d, "emailChangeRevoke");
      this.l = b;
      this.i = c || null;
    }

    n(on, O);

    on.prototype.v = function () {
      var a = this;
      N(this, L(this, "firebaseui-id-reset-password-link"), function () {
        a.l();
      });
      this.i && (this.B(this.i), this.u().focus());
      O.prototype.v.call(this);
    };

    on.prototype.m = function () {
      this.l = this.i = null;
      O.prototype.m.call(this);
    };

    u(on.prototype, {
      u: Vl,
      D: Wl,
      B: Xl
    });

    function pn() {
      return L(this, "firebaseui-id-new-password");
    }

    function qn() {
      return L(this, "firebaseui-id-password-toggle");
    }

    function rn() {
      this.Sa = !this.Sa;
      var a = qn.call(this),
          b = pn.call(this);
      this.Sa ? (b.type = "text", Hj(a, "firebaseui-input-toggle-off"), Ij(a, "firebaseui-input-toggle-on")) : (b.type = "password", Hj(a, "firebaseui-input-toggle-on"), Ij(a, "firebaseui-input-toggle-off"));
      b.focus();
    }

    function sn() {
      return L(this, "firebaseui-id-new-password-error");
    }

    function tn() {
      this.Sa = !1;
      var a = pn.call(this);
      a.type = "password";
      var b = sn.call(this);
      xk(this, a, function () {
        Dk(b) && (M(a, !0), Bk(b));
      });
      var c = qn.call(this);
      Hj(c, "firebaseui-input-toggle-on");
      Ij(c, "firebaseui-input-toggle-off");
      zk(this, a, function () {
        Hj(c, "firebaseui-input-toggle-focus");
        Ij(c, "firebaseui-input-toggle-blur");
      });
      Ak(this, a, function () {
        Hj(c, "firebaseui-input-toggle-blur");
        Ij(c, "firebaseui-input-toggle-focus");
      });
      N(this, c, t(rn, this));
    }

    function un() {
      var a = pn.call(this);
      var b = sn.call(this);
      Jj(a) ? (M(a, !0), Bk(b), b = !0) : (M(a, !1), Ck(b, C("Enter your password").toString()), b = !1);
      return b ? Jj(a) : null;
    }

    function vn(a, b, c) {
      O.call(this, Bl, {
        email: a
      }, c, "passwordReset");
      this.l = b;
    }

    n(vn, O);

    vn.prototype.v = function () {
      this.J();
      this.D(this.l);
      il(this, this.i(), this.l);
      this.i().focus();
      O.prototype.v.call(this);
    };

    vn.prototype.m = function () {
      this.l = null;
      O.prototype.m.call(this);
    };

    u(vn.prototype, {
      i: pn,
      B: sn,
      P: qn,
      J: tn,
      u: un,
      U: Vl,
      S: Wl,
      D: Xl
    });

    function wn(a, b, c, d, e) {
      O.call(this, Kl, {
        factorId: a,
        phoneNumber: c || null,
        H: !!d
      }, e, "revertSecondFactorAdditionSuccess");
      this.l = b;
      this.i = d || null;
    }

    n(wn, O);

    wn.prototype.v = function () {
      var a = this;
      N(this, L(this, "firebaseui-id-reset-password-link"), function () {
        a.l();
      });
      this.i && (this.B(this.i), this.u().focus());
      O.prototype.v.call(this);
    };

    wn.prototype.m = function () {
      this.l = this.i = null;
      O.prototype.m.call(this);
    };

    u(wn.prototype, {
      u: Vl,
      D: Wl,
      B: Xl
    });

    function xn(a, b, c, d, e) {
      var f = c.u();
      f && W(a, c.K(t(X(a).confirmPasswordReset, X(a)), [d, f], function () {
        c.o();
        var g = new qm(e);
        g.render(b);
        Z(a, g);
      }, function (g) {
        yn(a, b, c, g);
      }));
    }

    function yn(a, b, c, d) {
      "auth/weak-password" == (d && d.code) ? (a = U(d), M(c.i(), !1), Ck(c.B(), a), c.i().focus()) : (c && c.o(), c = new rm(), c.render(b), Z(a, c));
    }

    function zn(a, b, c) {
      var d = new on(c, function () {
        W(a, d.K(t(X(a).sendPasswordResetEmail, X(a)), [c], function () {
          d.o();
          d = new jm(c, void 0, I(R(a)), Ri(R(a)));
          d.render(b);
          Z(a, d);
        }, function () {
          d.a(Md().toString());
        }));
      });
      d.render(b);
      Z(a, d);
    }

    function An(a, b, c, d) {
      var e = new wn(d.factorId, function () {
        e.K(t(X(a).sendPasswordResetEmail, X(a)), [c], function () {
          e.o();
          e = new jm(c, void 0, I(R(a)), Ri(R(a)));
          e.render(b);
          Z(a, e);
        }, function () {
          e.a(Md().toString());
        });
      }, d.phoneNumber);
      e.render(b);
      Z(a, e);
    }

    J.passwordReset = function (a, b, c, d) {
      W(a, X(a).verifyPasswordResetCode(c).then(function (e) {
        var f = new vn(e, function () {
          xn(a, b, f, c, d);
        });
        f.render(b);
        Z(a, f);
      }, function () {
        yn(a, b);
      }));
    };

    J.emailChangeRevocation = function (a, b, c) {
      var d = null;
      W(a, X(a).checkActionCode(c).then(function (e) {
        d = e.data.email;
        return X(a).applyActionCode(c);
      }).then(function () {
        zn(a, b, d);
      }, function () {
        var e = new sm();
        e.render(b);
        Z(a, e);
      }));
    };

    J.emailVerification = function (a, b, c, d) {
      W(a, X(a).applyActionCode(c).then(function () {
        var e = new km(d);
        e.render(b);
        Z(a, e);
      }, function () {
        var e = new lm();
        e.render(b);
        Z(a, e);
      }));
    };

    J.revertSecondFactorAddition = function (a, b, c) {
      var d = null,
          e = null;
      W(a, X(a).checkActionCode(c).then(function (f) {
        d = f.data.email;
        e = f.data.multiFactorInfo;
        return X(a).applyActionCode(c);
      }).then(function () {
        An(a, b, d, e);
      }, function () {
        var f = new om();
        f.render(b);
        Z(a, f);
      }));
    };

    J.verifyAndChangeEmail = function (a, b, c, d) {
      var e = null;
      W(a, X(a).checkActionCode(c).then(function (f) {
        e = f.data.email;
        return X(a).applyActionCode(c);
      }).then(function () {
        var f = new mm(e, d);
        f.render(b);
        Z(a, f);
      }, function () {
        var f = new nm();
        f.render(b);
        Z(a, f);
      }));
    };

    function Bn(a, b) {
      try {
        var c = "number" == typeof a.selectionStart;
      } catch (d) {
        c = !1;
      }

      c ? (a.selectionStart = b, a.selectionEnd = b) : z && !sc("9") && ("textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length), a = a.createTextRange(), a.collapse(!0), a.move("character", b), a.select());
    }

    function Cn(a, b, c, d, e, f) {
      O.call(this, tl, {
        email: c
      }, f, "emailLinkSignInConfirmation", {
        G: d,
        F: e
      });
      this.l = a;
      this.u = b;
    }

    n(Cn, O);

    Cn.prototype.v = function () {
      this.B(this.l);
      this.D(this.l, this.u);
      this.i().focus();
      Bn(this.i(), (this.i().value || "").length);
      O.prototype.v.call(this);
    };

    Cn.prototype.m = function () {
      this.u = this.l = null;
      O.prototype.m.call(this);
    };

    u(Cn.prototype, {
      i: dm,
      P: em,
      B: fm,
      J: gm,
      j: hm,
      U: Vl,
      S: Wl,
      D: Xl
    });

    J.emailLinkConfirmation = function (a, b, c, d, e, f) {
      var g = new Cn(function () {
        var h = g.j();
        h ? (g.o(), d(a, b, h, c)) : g.i().focus();
      }, function () {
        g.o();
        V(a, b, e || void 0);
      }, e || void 0, I(R(a)), Ri(R(a)));
      g.render(b);
      Z(a, g);
      f && g.a(f);
    };

    function Dn(a, b, c, d, e) {
      O.call(this, yl, {
        ga: a
      }, e, "emailLinkSignInLinkingDifferentDevice", {
        G: c,
        F: d
      });
      this.i = b;
    }

    n(Dn, O);

    Dn.prototype.v = function () {
      this.u(this.i);
      this.l().focus();
      O.prototype.v.call(this);
    };

    Dn.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(Dn.prototype, {
      l: Vl,
      u: Xl
    });

    J.emailLinkNewDeviceLinking = function (a, b, c, d) {
      var e = new Vb(c);
      c = e.a.a.get(x.PROVIDER_ID) || null;
      Zb(e, null);

      if (c) {
        var f = new Dn(Di(R(a), c), function () {
          f.o();
          d(a, b, e.toString());
        }, I(R(a)), Ri(R(a)));
        f.render(b);
        Z(a, f);
      } else V(a, b);
    };

    function En(a) {
      O.call(this, ql, void 0, a, "blank");
    }

    n(En, O);

    function Fn(a, b, c, d, e) {
      var f = new En(),
          g = new Vb(c),
          h = g.a.a.get(x.ab) || "",
          k = g.a.a.get(x.Ta) || "",
          m = "1" === g.a.a.get(x.Ra),
          q = Yb(g),
          E = g.a.a.get(x.PROVIDER_ID) || null;
      g = g.a.a.get(x.xb) || null;
      Gn(a, g);
      var S = !Ih(Gh, T(a)),
          Ha = d || Vh(k, T(a)),
          Pa = (d = Wh(k, T(a))) && d.a;
      E && Pa && Pa.providerId !== E && (Pa = null);
      f.render(b);
      Z(a, f);
      W(a, f.K(function () {
        var ja = G(null);
        ja = q && S || S && m ? hf(Error("anonymous-user-not-found")) : Hn(a, c).then(function (Mg) {
          if (E && !Pa) throw Error("pending-credential-not-found");
          return Mg;
        });
        var td = null;
        return ja.then(function (Mg) {
          td = Mg;
          return e ? null : X(a).checkActionCode(h);
        }).then(function () {
          return td;
        });
      }, [], function (ja) {
        Ha ? In(a, f, Ha, c, Pa, ja) : m ? (f.o(), K("differentDeviceError", a, b)) : (f.o(), K("emailLinkConfirmation", a, b, c, Jn));
      }, function (ja) {
        var td = void 0;
        if (!ja || !ja.name || "cancel" != ja.name) switch (f.o(), ja && ja.message) {
          case "anonymous-user-not-found":
            K("differentDeviceError", a, b);
            break;

          case "anonymous-user-mismatch":
            K("anonymousUserMismatch", a, b);
            break;

          case "pending-credential-not-found":
            K("emailLinkNewDeviceLinking", a, b, c, Kn);
            break;

          default:
            ja && (td = U(ja)), V(a, b, void 0, td);
        }
      }));
    }

    function Jn(a, b, c, d) {
      Fn(a, b, d, c, !0);
    }

    function Kn(a, b, c) {
      Fn(a, b, c);
    }

    function In(a, b, c, d, e, f) {
      var g = P(b);
      b.Z("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", C("Signing in...").toString());
      var h = null;
      e = (f ? Ln(a, f, c, d, e) : Mn(a, c, d, e)).then(function (k) {
        Jh(Hh, T(a));
        Jh(Gh, T(a));
        b.h();
        b.Z("firebaseui-icon-done", C("Signed in!").toString());
        h = setTimeout(function () {
          b.h();
          Gm(a, b, k, !0);
        }, 1E3);
        W(a, function () {
          b && (b.h(), b.o());
          clearTimeout(h);
        });
      }, function (k) {
        b.h();
        b.o();

        if (!k.name || "cancel" != k.name) {
          var m = U(k);
          "auth/email-already-in-use" == k.code || "auth/credential-already-in-use" == k.code ? (Jh(Hh, T(a)), Jh(Gh, T(a))) : "auth/invalid-email" == k.code ? (m = C("The email provided does not match the current sign-in session.").toString(), K("emailLinkConfirmation", a, g, d, Jn, null, m)) : V(a, g, c, m);
        }
      });
      W(a, e);
    }

    J.emailLinkSignInCallback = Fn;

    function Nn(a, b, c, d, e, f) {
      O.call(this, xl, {
        email: a,
        ga: b
      }, f, "emailLinkSignInLinking", {
        G: d,
        F: e
      });
      this.i = c;
    }

    n(Nn, O);

    Nn.prototype.v = function () {
      this.u(this.i);
      this.l().focus();
      O.prototype.v.call(this);
    };

    Nn.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(Nn.prototype, {
      l: Vl,
      u: Xl
    });

    function On(a, b, c, d) {
      var e = P(b);
      Vm(a, b, c, function () {
        V(a, e, c);
      }, function (f) {
        if (!f.name || "cancel" != f.name) {
          var g = U(f);
          f && "auth/network-request-failed" == f.code ? b.a(g) : (b.o(), V(a, e, c, g));
        }
      }, d);
    }

    J.emailLinkSignInLinking = function (a, b, c) {
      var d = Qh(T(a));
      Rh(T(a));

      if (d) {
        var e = d.a.providerId,
            f = new Nn(c, Di(R(a), e), function () {
          On(a, f, c, d);
        }, I(R(a)), Ri(R(a)));
        f.render(b);
        Z(a, f);
      } else V(a, b);
    };

    function Pn(a, b, c, d, e, f) {
      O.call(this, rl, {
        email: a
      }, f, "emailLinkSignInSent", {
        G: d,
        F: e
      });
      this.u = b;
      this.i = c;
    }

    n(Pn, O);

    Pn.prototype.v = function () {
      var a = this;
      N(this, this.l(), function () {
        a.i();
      });
      N(this, L(this, "firebaseui-id-trouble-getting-email-link"), function () {
        a.u();
      });
      this.l().focus();
      O.prototype.v.call(this);
    };

    Pn.prototype.m = function () {
      this.i = this.u = null;
      O.prototype.m.call(this);
    };

    u(Pn.prototype, {
      l: Wl
    });

    J.emailLinkSignInSent = function (a, b, c, d, e) {
      var f = new Pn(c, function () {
        f.o();
        K("emailNotReceived", a, b, c, d, e);
      }, function () {
        f.o();
        d();
      }, I(R(a)), Ri(R(a)));
      f.render(b);
      Z(a, f);
    };

    function Qn(a, b, c, d, e, f, g) {
      O.call(this, Ol, {
        ic: a,
        Pb: b
      }, g, "emailMismatch", {
        G: e,
        F: f
      });
      this.l = c;
      this.i = d;
    }

    n(Qn, O);

    Qn.prototype.v = function () {
      this.B(this.l, this.i);
      this.u().focus();
      O.prototype.v.call(this);
    };

    Qn.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(Qn.prototype, {
      u: Vl,
      D: Wl,
      B: Xl
    });

    J.emailMismatch = function (a, b, c) {
      var d = Qh(T(a));

      if (d) {
        var e = new Qn(c.user.email, d.f, function () {
          var f = e;
          Rh(T(a));
          Gm(a, f, c);
        }, function () {
          var f = c.credential.providerId,
              g = P(e);
          e.o();
          d.a ? K("federatedLinking", a, g, d.f, f) : K("federatedSignIn", a, g, d.f, f);
        }, I(R(a)), Ri(R(a)));
        e.render(b);
        Z(a, e);
      } else V(a, b);
    };

    function Rn(a, b, c, d, e) {
      O.call(this, sl, void 0, e, "emailNotReceived", {
        G: c,
        F: d
      });
      this.l = a;
      this.i = b;
    }

    n(Rn, O);

    Rn.prototype.v = function () {
      var a = this;
      N(this, this.u(), function () {
        a.i();
      });
      N(this, this.Ba(), function () {
        a.l();
      });
      this.u().focus();
      O.prototype.v.call(this);
    };

    Rn.prototype.Ba = function () {
      return L(this, "firebaseui-id-resend-email-link");
    };

    Rn.prototype.m = function () {
      this.i = this.l = null;
      O.prototype.m.call(this);
    };

    u(Rn.prototype, {
      u: Wl
    });

    J.emailNotReceived = function (a, b, c, d, e) {
      var f = new Rn(function () {
        Vm(a, f, c, d, function (g) {
          g = U(g);
          f.a(g);
        }, e);
      }, function () {
        f.o();
        V(a, b, c);
      }, I(R(a)), Ri(R(a)));
      f.render(b);
      Z(a, f);
    };

    function Sn(a, b, c, d, e, f) {
      O.call(this, zl, {
        email: a,
        ga: b
      }, f, "federatedLinking", {
        G: d,
        F: e
      });
      this.i = c;
    }

    n(Sn, O);

    Sn.prototype.v = function () {
      this.u(this.i);
      this.l().focus();
      O.prototype.v.call(this);
    };

    Sn.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(Sn.prototype, {
      l: Vl,
      u: Xl
    });

    J.federatedLinking = function (a, b, c, d, e) {
      var f = Qh(T(a));

      if (f && f.a) {
        var g = new Sn(c, Di(R(a), d), function () {
          Mm(a, g, d, c);
        }, I(R(a)), Ri(R(a)));
        g.render(b);
        Z(a, g);
        e && g.a(e);
      } else V(a, b);
    };

    J.federatedRedirect = function (a, b, c) {
      var d = new En();
      d.render(b);
      Z(a, d);
      b = Ci(R(a))[0];
      Mm(a, d, b, c);
    };

    J.federatedSignIn = function (a, b, c, d, e) {
      var f = new Sn(c, Di(R(a), d), function () {
        Mm(a, f, d, c);
      }, I(R(a)), Ri(R(a)));
      f.render(b);
      Z(a, f);
      e && f.a(e);
    };

    function Tn(a, b, c, d) {
      var e = b.u();
      e ? W(a, b.K(t(a.Wb, a), [c, e], function (f) {
        f = f.user.linkWithCredential(d).then(function (g) {
          return Gm(a, b, {
            user: g.user,
            credential: d,
            operationType: g.operationType,
            additionalUserInfo: g.additionalUserInfo
          });
        });
        W(a, f);
        return f;
      }, function (f) {
        if (!f.name || "cancel" != f.name) switch (f.code) {
          case "auth/wrong-password":
            M(b.i(), !1);
            Ck(b.D(), U(f));
            break;

          case "auth/too-many-requests":
            b.a(U(f));
            break;

          default:
            vg("signInWithEmailAndPassword: " + f.message, void 0), b.a(U(f));
        }
      })) : b.i().focus();
    }

    J.passwordLinking = function (a, b, c) {
      var d = Qh(T(a));
      Rh(T(a));
      var e = d && d.a;

      if (e) {
        var f = new bm(c, function () {
          Tn(a, f, c, e);
        }, function () {
          f.o();
          K("passwordRecovery", a, b, c);
        }, I(R(a)), Ri(R(a)));
        f.render(b);
        Z(a, f);
      } else V(a, b);
    };

    function Un(a, b, c, d, e, f) {
      O.call(this, ml, {
        email: c,
        Ua: !!b
      }, f, "passwordRecovery", {
        G: d,
        F: e
      });
      this.l = a;
      this.u = b;
    }

    n(Un, O);

    Un.prototype.v = function () {
      this.D();
      this.J(this.l, this.u);
      Jj(this.i()) || this.i().focus();
      il(this, this.i(), this.l);
      O.prototype.v.call(this);
    };

    Un.prototype.m = function () {
      this.u = this.l = null;
      O.prototype.m.call(this);
    };

    u(Un.prototype, {
      i: dm,
      B: em,
      D: fm,
      P: gm,
      j: hm,
      U: Vl,
      S: Wl,
      J: Xl
    });

    function Vn(a, b) {
      var c = b.j();

      if (c) {
        var d = P(b);
        W(a, b.K(t(X(a).sendPasswordResetEmail, X(a)), [c], function () {
          b.o();
          var e = new jm(c, function () {
            e.o();
            V(a, d);
          }, I(R(a)), Ri(R(a)));
          e.render(d);
          Z(a, e);
        }, function (e) {
          M(b.i(), !1);
          Ck(b.B(), U(e));
        }));
      } else b.i().focus();
    }

    J.passwordRecovery = function (a, b, c, d, e) {
      var f = new Un(function () {
        Vn(a, f);
      }, d ? void 0 : function () {
        f.o();
        V(a, b);
      }, c, I(R(a)), Ri(R(a)));
      f.render(b);
      Z(a, f);
      e && f.a(e);
    };

    J.passwordSignIn = function (a, b, c, d) {
      var e = new im(function () {
        Rm(a, e);
      }, function () {
        var f = e.P();
        e.o();
        K("passwordRecovery", a, b, f);
      }, c, I(R(a)), Ri(R(a)), d);
      e.render(b);
      Z(a, e);
    };

    function Wn() {
      return L(this, "firebaseui-id-name");
    }

    function Xn() {
      return L(this, "firebaseui-id-name-error");
    }

    function Yn(a, b, c, d, e, f, g, h, k) {
      O.call(this, ll, {
        email: d,
        Sb: a,
        name: e,
        Ua: !!c,
        ia: !!h
      }, k, "passwordSignUp", {
        G: f,
        F: g
      });
      this.B = b;
      this.J = c;
      this.D = a;
    }

    n(Yn, O);

    Yn.prototype.v = function () {
      this.ea();
      this.D && this.Ja();
      this.ua();
      this.pa(this.B, this.J);
      this.D ? (hl(this, this.i(), this.u()), hl(this, this.u(), this.l())) : hl(this, this.i(), this.l());
      this.B && il(this, this.l(), this.B);
      Jj(this.i()) ? this.D && !Jj(this.u()) ? this.u().focus() : this.l().focus() : this.i().focus();
      O.prototype.v.call(this);
    };

    Yn.prototype.m = function () {
      this.J = this.B = null;
      O.prototype.m.call(this);
    };

    u(Yn.prototype, {
      i: dm,
      U: em,
      ea: fm,
      kb: gm,
      j: hm,
      u: Wn,
      Ac: Xn,
      Ja: function Ja() {
        var a = Wn.call(this),
            b = Xn.call(this);
        xk(this, a, function () {
          Dk(b) && (M(a, !0), Bk(b));
        });
      },
      P: function P() {
        var a = Wn.call(this);
        var b = Xn.call(this);
        var c = Jj(a);
        c = !/^[\s\xa0]*$/.test(null == c ? "" : String(c));
        M(a, c);
        c ? (Bk(b), b = !0) : (Ck(b, C("Enter your account name").toString()), b = !1);
        return b ? Za(Jj(a)) : null;
      },
      l: pn,
      ba: sn,
      mb: qn,
      ua: tn,
      S: un,
      Mb: Vl,
      Lb: Wl,
      pa: Xl
    });

    function Zn(a, b) {
      var c = Si(R(a)),
          d = b.j(),
          e = null;
      c && (e = b.P());
      var f = b.S();

      if (d) {
        if (c) if (e) e = hb(e);else {
          b.u().focus();
          return;
        }

        if (f) {
          var g = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(d, f);
          W(a, b.K(t(a.Xb, a), [d, f], function (h) {
            var k = {
              user: h.user,
              credential: g,
              operationType: h.operationType,
              additionalUserInfo: h.additionalUserInfo
            };
            return c ? (h = h.user.updateProfile({
              displayName: e
            }).then(function () {
              return Gm(a, b, k);
            }), W(a, h), h) : Gm(a, b, k);
          }, function (h) {
            if (!h.name || "cancel" != h.name) {
              var k = U(h);

              switch (h.code) {
                case "auth/email-already-in-use":
                  return $n(a, b, d, h);

                case "auth/too-many-requests":
                  k = C("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();

                case "auth/operation-not-allowed":
                case "auth/weak-password":
                  M(b.l(), !1);
                  Ck(b.ba(), k);
                  break;

                default:
                  h = "setAccountInfo: " + ih(h), vg(h, void 0), b.a(k);
              }
            }
          }));
        } else b.l().focus();
      } else b.i().focus();
    }

    function $n(a, b, c, d) {
      function e() {
        var g = U(d);
        M(b.i(), !1);
        Ck(b.U(), g);
        b.i().focus();
      }

      var f = X(a).fetchSignInMethodsForEmail(c).then(function (g) {
        g.length ? e() : (g = P(b), b.o(), K("passwordRecovery", a, g, c, !1, Od().toString()));
      }, function () {
        e();
      });
      W(a, f);
      return f;
    }

    J.passwordSignUp = function (a, b, c, d, e, f) {
      function g() {
        h.o();
        V(a, b);
      }

      var h = new Yn(Si(R(a)), function () {
        Zn(a, h);
      }, e ? void 0 : g, c, d, I(R(a)), Ri(R(a)), f);
      h.render(b);
      Z(a, h);
    };

    function ao() {
      return L(this, "firebaseui-id-phone-confirmation-code");
    }

    function bo() {
      return L(this, "firebaseui-id-phone-confirmation-code-error");
    }

    function co() {
      return L(this, "firebaseui-id-resend-countdown");
    }

    function eo(a, b, c, d, e, f, g, h, k) {
      O.call(this, Rl, {
        phoneNumber: e
      }, k, "phoneSignInFinish", {
        G: g,
        F: h
      });
      this.kb = f;
      this.i = new Vj(1E3);
      this.D = f;
      this.S = a;
      this.l = b;
      this.J = c;
      this.P = d;
    }

    n(eo, O);

    eo.prototype.v = function () {
      var a = this;
      this.U(this.kb);
      oe(this.i, "tick", this.B, !1, this);
      this.i.start();
      N(this, L(this, "firebaseui-id-change-phone-number-link"), function () {
        a.S();
      });
      N(this, this.Ba(), function () {
        a.P();
      });
      this.Ja(this.l);
      this.ea(this.l, this.J);
      this.u().focus();
      O.prototype.v.call(this);
    };

    eo.prototype.m = function () {
      this.P = this.J = this.l = this.S = null;
      Wj(this.i);
      we(this.i, "tick", this.B);
      this.i = null;
      O.prototype.m.call(this);
    };

    eo.prototype.B = function () {
      --this.D;
      0 < this.D ? this.U(this.D) : (Wj(this.i), we(this.i, "tick", this.B), this.ua(), this.mb());
    };

    u(eo.prototype, {
      u: ao,
      pa: bo,
      Ja: function Ja(a) {
        var b = ao.call(this),
            c = bo.call(this);
        xk(this, b, function () {
          Dk(c) && (M(b, !0), Bk(c));
        });
        a && yk(this, b, function () {
          a();
        });
      },
      ba: function ba() {
        var a = Za(Jj(ao.call(this)) || "");
        return /^\d{6}$/.test(a) ? a : null;
      },
      Eb: co,
      U: function U(a) {
        ed(co.call(this), C("Resend code in " + ((9 < a ? "0:" : "0:0") + a)).toString());
      },
      ua: function ua() {
        Bk(this.Eb());
      },
      Ba: function Ba() {
        return L(this, "firebaseui-id-resend-link");
      },
      mb: function mb() {
        Ck(this.Ba());
      },
      Mb: Vl,
      Lb: Wl,
      ea: Xl
    });

    function fo(a, b, c, d) {
      function e(g) {
        b.u().focus();
        M(b.u(), !1);
        Ck(b.pa(), g);
      }

      var f = b.ba();
      f ? (b.Z("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", C("Verifying...").toString()), W(a, b.K(t(d.confirm, d), [f], function (g) {
        b.h();
        b.Z("firebaseui-icon-done", C("Verified!").toString());
        var h = setTimeout(function () {
          b.h();
          b.o();
          var k = {
            user: go(a).currentUser,
            credential: null,
            operationType: g.operationType,
            additionalUserInfo: g.additionalUserInfo
          };
          Gm(a, b, k, !0);
        }, 1E3);
        W(a, function () {
          b && b.h();
          clearTimeout(h);
        });
      }, function (g) {
        if (g.name && "cancel" == g.name) b.h();else {
          var h = U(g);

          switch (g.code) {
            case "auth/credential-already-in-use":
              b.h();
              break;

            case "auth/code-expired":
              g = P(b);
              b.h();
              b.o();
              K("phoneSignInStart", a, g, c, h);
              break;

            case "auth/missing-verification-code":
            case "auth/invalid-verification-code":
              b.h();
              e(h);
              break;

            default:
              b.h(), b.a(h);
          }
        }
      }))) : e(C("Wrong code. Try again.").toString());
    }

    J.phoneSignInFinish = function (a, b, c, d, e, f) {
      var g = new eo(function () {
        g.o();
        K("phoneSignInStart", a, b, c);
      }, function () {
        fo(a, g, c, e);
      }, function () {
        g.o();
        V(a, b);
      }, function () {
        g.o();
        K("phoneSignInStart", a, b, c);
      }, oi(c), d, I(R(a)), Ri(R(a)));
      g.render(b);
      Z(a, g);
      f && g.a(f);
    };

    var ho = !z && !(y("Safari") && !(cc() || y("Coast") || y("Opera") || y("Edge") || y("Firefox") || y("FxiOS") || y("Silk") || y("Android")));

    function io(a, b) {
      if (/-[a-z]/.test(b)) return null;

      if (ho && a.dataset) {
        if (!(!y("Android") || cc() || y("Firefox") || y("FxiOS") || y("Opera") || y("Silk") || b in a.dataset)) return null;
        a = a.dataset[b];
        return void 0 === a ? null : a;
      }

      return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase());
    }

    function jo(a, b, c) {
      var d = this;
      a = md(Sk, {
        items: a
      }, null, this.s);
      Zk.call(this, a, !0, !0);
      c && (c = ko(a, c)) && (c.focus(), pk(c, a));
      N(this, a, function (e) {
        if (e = (e = fd(e.target, "firebaseui-id-list-box-dialog-button")) && io(e, "listboxid")) $k.call(d), b(e);
      });
    }

    function ko(a, b) {
      a = (a || document).getElementsByTagName("BUTTON");

      for (var c = 0; c < a.length; c++) {
        if (io(a[c], "listboxid") === b) return a[c];
      }

      return null;
    }

    function lo() {
      return L(this, "firebaseui-id-phone-number");
    }

    function mo() {
      return L(this, "firebaseui-id-country-selector");
    }

    function no() {
      return L(this, "firebaseui-id-phone-number-error");
    }

    function oo(a, b) {
      var c = a.a,
          d = po("1-US-0", c),
          e = null;
      b && po(b, c) ? e = b : d ? e = "1-US-0" : e = 0 < c.length ? c[0].c : null;
      if (!e) throw Error("No available default country");
      qo.call(this, e, a);
    }

    function po(a, b) {
      a = gi(a);
      return !(!a || !Qa(b, a));
    }

    function ro(a) {
      return Ma(a, function (b) {
        return {
          id: b.c,
          Ma: "firebaseui-flag " + so(b),
          label: b.name + " " + ("\u200E+" + b.b)
        };
      });
    }

    function so(a) {
      return "firebaseui-flag-" + a.g;
    }

    function to(a) {
      var b = this;
      jo.call(this, ro(a.a), function (c) {
        qo.call(b, c, a, !0);
        b.N().focus();
      }, this.Aa);
    }

    function qo(a, b, c) {
      var d = gi(a);
      d && (c && (c = Za(Jj(lo.call(this)) || ""), b = fi(b, c), b.length && b[0].b != d.b && (c = "+" + d.b + c.substr(b[0].b.length + 1), Kj(lo.call(this), c))), b = gi(this.Aa), this.Aa = a, a = L(this, "firebaseui-id-country-selector-flag"), b && Ij(a, so(b)), Hj(a, so(d)), ed(L(this, "firebaseui-id-country-selector-code"), "\u200E+" + d.b));
    }

    function uo(a, b, c, d, e, f, g, h, k, m) {
      O.call(this, Ql, {
        Fb: b,
        za: k || null,
        Wa: !!c,
        ia: !!f
      }, m, "phoneSignInStart", {
        G: d,
        F: e
      });
      this.J = h || null;
      this.P = b;
      this.l = a;
      this.B = c || null;
      this.pa = g || null;
    }

    n(uo, O);

    uo.prototype.v = function () {
      this.ea(this.pa, this.J);
      this.S(this.l, this.B || void 0);
      this.P || hl(this, this.N(), this.i());
      il(this, this.i(), this.l);
      this.N().focus();
      Bn(this.N(), (this.N().value || "").length);
      O.prototype.v.call(this);
    };

    uo.prototype.m = function () {
      this.B = this.l = null;
      O.prototype.m.call(this);
    };

    u(uo.prototype, {
      Db: al,
      N: lo,
      D: no,
      ea: function ea(a, b, c) {
        var d = this,
            e = lo.call(this),
            f = mo.call(this),
            g = no.call(this),
            h = a || li,
            k = h.a;
        if (0 == k.length) throw Error("No available countries provided.");
        oo.call(d, h, b);
        N(this, f, function () {
          to.call(d, h);
        });
        xk(this, e, function () {
          Dk(g) && (M(e, !0), Bk(g));
          var m = Za(Jj(e) || ""),
              q = gi(this.Aa),
              E = fi(h, m);
          m = po("1-US-0", k);
          E.length && E[0].b != q.b && (q = E[0], qo.call(d, "1" == q.b && m ? "1-US-0" : q.c, h));
        });
        c && yk(this, e, function () {
          c();
        });
      },
      U: function U(a) {
        var b = Za(Jj(lo.call(this)) || "");
        a = a || li;
        var c = a.a,
            d = fi(li, b);
        if (d.length && !Qa(c, d[0])) throw Kj(lo.call(this)), lo.call(this).focus(), Ck(no.call(this), C("The country code provided is not supported.").toString()), Error("The country code provided is not supported.");
        c = gi(this.Aa);
        d.length && d[0].b != c.b && qo.call(this, d[0].c, a);
        d.length && (b = b.substr(d[0].b.length + 1));
        return b ? new mi(this.Aa, b) : null;
      },
      Ja: mo,
      ba: function ba() {
        return L(this, "firebaseui-recaptcha-container");
      },
      u: function u() {
        return L(this, "firebaseui-id-recaptcha-error");
      },
      i: Vl,
      ua: Wl,
      S: Xl
    });

    function vo(a, b, c, d) {
      try {
        var e = b.U(ij);
      } catch (f) {
        return;
      }

      e ? gj ? (b.Z("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon", C("Verifying...").toString()), W(a, b.K(t(a.bc, a), [oi(e), c], function (f) {
        var g = P(b);
        b.Z("firebaseui-icon-done", C("Code sent!").toString());
        var h = setTimeout(function () {
          b.h();
          b.o();
          K("phoneSignInFinish", a, g, e, 15, f);
        }, 1E3);
        W(a, function () {
          b && b.h();
          clearTimeout(h);
        });
      }, function (f) {
        b.h();

        if (!f.name || "cancel" != f.name) {
          grecaptcha.reset(jj);
          gj = null;
          var g = f && f.message || "";
          if (f.code) switch (f.code) {
            case "auth/too-many-requests":
              g = C("This phone number has been used too many times").toString();
              break;

            case "auth/invalid-phone-number":
            case "auth/missing-phone-number":
              b.N().focus();
              Ck(b.D(), Ld().toString());
              return;

            default:
              g = U(f);
          }
          b.a(g);
        }
      }))) : hj ? Ck(b.u(), C("Solve the reCAPTCHA").toString()) : !hj && d && b.i().click() : (b.N().focus(), Ck(b.D(), Ld().toString()));
    }

    J.phoneSignInStart = function (a, b, c, d) {
      var e = Ki(R(a)) || {};
      gj = null;
      hj = !(e && "invisible" === e.size);
      var f = Sm(a),
          g = Pi(R(a)),
          h = f ? Oi(R(a)) : null;
      g = c && c.a || g && g.c || null;
      c = c && c.za || h;
      (h = Qi(R(a))) && ki(h);
      ij = h ? new ei(Qi(R(a))) : li;
      var k = new uo(function (q) {
        vo(a, k, m, !(!q || !q.keyCode));
      }, hj, f ? null : function () {
        m.clear();
        k.o();
        V(a, b);
      }, I(R(a)), Ri(R(a)), f, ij, g, c);
      k.render(b);
      Z(a, k);
      d && k.a(d);

      e.callback = function (q) {
        k.u() && Bk(k.u());
        gj = q;
        hj || vo(a, k, m);
      };

      e["expired-callback"] = function () {
        gj = null;
      };

      var m = new firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].RecaptchaVerifier(hj ? k.ba() : k.i(), e, go(a).app);
      W(a, k.K(t(m.render, m), [], function (q) {
        jj = q;
      }, function (q) {
        q.name && "cancel" == q.name || (q = U(q), k.o(), V(a, b, void 0, q));
      }));
    };

    J.prefilledEmailSignIn = function (a, b, c) {
      var d = new En();
      d.render(b);
      Z(a, d);
      W(a, d.K(t(X(a).fetchSignInMethodsForEmail, X(a)), [c], function (e) {
        d.o();
        var f = !(!Cm(a) || !bn(a));
        Dm(a, b, e, c, void 0, void 0, f);
      }, function (e) {
        e = U(e);
        d.o();
        K("signIn", a, b, c, e);
      }));
    };

    function wo(a, b, c, d, e) {
      O.call(this, Pl, {
        Rb: b
      }, e, "providerSignIn", {
        G: c,
        F: d
      });
      this.i = a;
    }

    n(wo, O);

    wo.prototype.v = function () {
      this.l(this.i);
      O.prototype.v.call(this);
    };

    wo.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(wo.prototype, {
      l: function l(a) {
        function b(g) {
          a(g);
        }

        for (var c = this.f ? Yc("firebaseui-id-idp-button", this.f || this.s.a) : [], d = 0; d < c.length; d++) {
          var e = c[d],
              f = io(e, "providerId");
          N(this, e, Ba(b, f));
        }
      }
    });

    J.providerSignIn = function (a, b, c, d) {
      var e = new wo(function (f) {
        f == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.PROVIDER_ID ? (e.o(), Tm(a, b, d)) : f == firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].PhoneAuthProvider.PROVIDER_ID ? (e.o(), K("phoneSignInStart", a, b)) : "anonymous" == f ? Pm(a, e) : Mm(a, e, f, d);
        Y(a);
        a.l.cancel();
      }, Ei(R(a)), I(R(a)), Ri(R(a)));
      e.render(b);
      Z(a, e);
      c && e.a(c);
      xo(a);
    };

    J.sendEmailLinkForSignIn = function (a, b, c, d) {
      var e = new en();
      e.render(b);
      Z(a, e);
      Vm(a, e, c, d, function (f) {
        e.o();
        f = U(f);
        K("signIn", a, b, c, f);
      });
    };

    function yo(a, b, c, d, e, f, g) {
      O.call(this, jl, {
        email: c,
        Wa: !!b,
        ia: !!f
      }, g, "signIn", {
        G: d,
        F: e
      });
      this.i = a;
      this.u = b;
    }

    n(yo, O);

    yo.prototype.v = function () {
      this.B(this.i);
      this.D(this.i, this.u || void 0);
      this.l().focus();
      Bn(this.l(), (this.l().value || "").length);
      O.prototype.v.call(this);
    };

    yo.prototype.m = function () {
      this.u = this.i = null;
      O.prototype.m.call(this);
    };

    u(yo.prototype, {
      l: dm,
      P: em,
      B: fm,
      J: gm,
      j: hm,
      U: Vl,
      S: Wl,
      D: Xl
    });

    J.signIn = function (a, b, c, d) {
      var e = Cm(a),
          f = e && Hi(R(a)) != ti,
          g = new yo(function () {
        var h = g,
            k = h.j() || "";
        k && Um(a, h, k);
      }, f ? null : function () {
        g.o();
        V(a, b, c);
      }, c, I(R(a)), Ri(R(a)), e);
      g.render(b);
      Z(a, g);
      d && g.a(d);
    };

    function zo(a, b, c, d, e, f) {
      O.call(this, Al, {
        email: a
      }, f, "unsupportedProvider", {
        G: d,
        F: e
      });
      this.l = b;
      this.i = c;
    }

    n(zo, O);

    zo.prototype.v = function () {
      this.B(this.l, this.i);
      this.u().focus();
      O.prototype.v.call(this);
    };

    zo.prototype.m = function () {
      this.i = this.l = null;
      O.prototype.m.call(this);
    };

    u(zo.prototype, {
      u: Vl,
      D: Wl,
      B: Xl
    });

    J.unsupportedProvider = function (a, b, c) {
      var d = new zo(c, function () {
        d.o();
        K("passwordRecovery", a, b, c);
      }, function () {
        d.o();
        V(a, b, c);
      }, I(R(a)), Ri(R(a)));
      d.render(b);
      Z(a, d);
    };

    function Ao(a, b) {
      this.Z = !1;
      var c = Bo(b);
      if (Co[c]) throw Error('An AuthUI instance already exists for the key "' + c + '"');
      Co[c] = this;
      this.f = a;
      this.u = null;
      this.X = !1;
      Do(this.f);
      this.a = firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
        apiKey: a.app.options.apiKey,
        authDomain: a.app.options.authDomain
      }, a.app.name + "-firebaseui-temp").auth();
      Do(this.a);
      this.a.setPersistence && this.a.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].Auth.Persistence.SESSION);
      this.oa = b;
      this.ca = new si();
      this.h = this.O = this.i = this.I = this.N = null;
      this.s = [];
      this.Y = !1;
      this.l = Tf.Ya();
      this.j = this.C = null;
      this.da = this.w = !1;
    }

    function Do(a) {
      a && a.INTERNAL && a.INTERNAL.logFramework && a.INTERNAL.logFramework("FirebaseUI-web");
    }

    var Co = {};

    function Bo(a) {
      return a || "[DEFAULT]";
    }

    function Nm(a) {
      Y(a);
      a.i || (a.i = Eo(a, function (b) {
        return b && !Qh(T(a)) ? G(go(a).getRedirectResult().then(function (c) {
          return c;
        }, function (c) {
          if (c && "auth/email-already-in-use" == c.code && c.email && c.credential) throw c;
          return Fo(a, c);
        })) : G(X(a).getRedirectResult().then(function (c) {
          return yi(R(a)) && !c.user && a.j && !a.j.isAnonymous ? go(a).getRedirectResult() : c;
        }));
      }));
      return a.i;
    }

    function Z(a, b) {
      Y(a);
      a.h = b;
    }

    var Go = null;

    function Wm() {
      return Go;
    }

    function X(a) {
      Y(a);
      return a.a;
    }

    function go(a) {
      Y(a);
      return a.f;
    }

    function T(a) {
      Y(a);
      return a.oa;
    }

    function bn(a) {
      Y(a);
      return a.N ? a.N.emailHint : void 0;
    }

    l = Ao.prototype;

    l.ob = function () {
      Y(this);
      return !!Th(T(this)) || Ho(yf());
    };

    function Ho(a) {
      a = new Vb(a);
      return "signIn" === (a.a.a.get(x.wb) || null) && !!a.a.a.get(x.ab);
    }

    l.start = function (a, b) {
      Io(this, a, b);
    };

    function Io(a, b, c, d) {
      Y(a);
      "undefined" !== typeof a.f.languageCode && (a.u = a.f.languageCode);
      var e = "en".replace(/_/g, "-");
      a.f.languageCode = e;
      a.a.languageCode = e;
      a.X = !0;
      "undefined" !== typeof a.f.tenantId && (a.a.tenantId = a.f.tenantId);
      a.jb(c);
      a.N = d || null;
      var f = p.document;
      a.C ? a.C.then(function () {
        "complete" == f.readyState ? Jo(a, b) : pe(window, "load", function () {
          Jo(a, b);
        });
      }) : "complete" == f.readyState ? Jo(a, b) : pe(window, "load", function () {
        Jo(a, b);
      });
    }

    function Jo(a, b) {
      var c = xf(b, "Could not find the FirebaseUI widget element on the page.");
      c.setAttribute("lang", "en".replace(/_/g, "-"));

      if (Go) {
        var d = Go;
        Y(d);
        Qh(T(d)) && Ag("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset.");
        Go.reset();
      }

      Go = a;
      a.O = c;
      Ko(a, c);
      rh(new sh()) && rh(new th()) ? an(a, b) : (b = xf(b, "Could not find the FirebaseUI widget element on the page."), c = new um(C("The browser you are using does not support Web Storage. Please try again in a different browser.").toString()), c.render(b), Z(a, c));
      b = a.h && "blank" == a.h.Ea && Wi(R(a));
      Th(T(a)) && !b && (b = Th(T(a)), Gn(a, b.a), Jh(Ch, T(a)));
    }

    function Eo(a, b) {
      if (a.w) return b(Lo(a));
      W(a, function () {
        a.w = !1;
      });

      if (yi(R(a))) {
        var c = new Ze(function (d) {
          W(a, a.f.onAuthStateChanged(function (e) {
            a.j = e;
            a.w || (a.w = !0, d(b(Lo(a))));
          }));
        });
        W(a, c);
        return c;
      }

      a.w = !0;
      return b(null);
    }

    function Lo(a) {
      Y(a);
      return yi(R(a)) && a.j && a.j.isAnonymous ? a.j : null;
    }

    function W(a, b) {
      Y(a);

      if (b) {
        a.s.push(b);

        var c = function c() {
          Ua(a.s, function (d) {
            return d == b;
          });
        };

        "function" != typeof b && b.then(c, c);
      }
    }

    l.disableAutoSignIn = function () {
      Y(this);
      this.Y = !0;
    };

    function Mo(a) {
      Y(a);
      var b;
      (b = a.Y) || (a = R(a), a = Ni(a, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.PROVIDER_ID), b = !(!a || "select_account" !== a.prompt));
      return b;
    }

    function Hm(a) {
      "undefined" !== typeof a.f.languageCode && a.X && (a.X = !1, a.f.languageCode = a.u);
    }

    function Gn(a, b) {
      a.f.tenantId = b;
      a.a.tenantId = b;
    }

    l.reset = function () {
      Y(this);
      var a = this;
      this.O && this.O.removeAttribute("lang");
      this.I && He(this.I);
      Hm(this);
      this.N = null;
      cn();
      Jh(Ch, T(this));
      Y(this);
      this.l.cancel();
      this.i = G({
        user: null,
        credential: null
      });
      Go == this && (Go = null);
      this.O = null;

      for (var b = 0; b < this.s.length; b++) {
        if ("function" == typeof this.s[b]) this.s[b]();else this.s[b].cancel && this.s[b].cancel();
      }

      this.s = [];
      Rh(T(this));
      this.h && (this.h.o(), this.h = null);
      this.L = null;
      this.a && (this.C = mn(this).then(function () {
        a.C = null;
      }, function () {
        a.C = null;
      }));
    };

    function Ko(a, b) {
      a.L = null;
      a.I = new Ie(b);
      a.I.register();
      oe(a.I, "pageEnter", function (c) {
        c = c && c.pageId;

        if (a.L != c) {
          var d = R(a);
          (d = aj(d).uiChanged || null) && d(a.L, c);
          a.L = c;
        }
      });
    }

    l.jb = function (a) {
      Y(this);
      var b = this.ca,
          c;

      for (c in a) {
        try {
          Zh(b.a, c, a[c]);
        } catch (d) {
          vg('Invalid config: "' + c + '"', void 0);
        }
      }

      lc && Zh(b.a, "popupMode", !1);
      Qi(b);
      !this.da && bj(R(this)) && (Ag("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."), this.da = !0);
    };

    function R(a) {
      Y(a);
      return a.ca;
    }

    l.Vb = function () {
      Y(this);
      var a = R(this),
          b = $h(a.a, "widgetUrl");
      var c = wi(a, b);
      R(this).a.get("popupMode") ? (a = (window.screen.availHeight - 600) / 2, b = (window.screen.availWidth - 500) / 2, c = c || "about:blank", a = {
        width: 500,
        height: 600,
        top: 0 < a ? a : 0,
        left: 0 < b ? b : 0,
        location: !0,
        resizable: !0,
        statusbar: !0,
        toolbar: !1
      }, a.target = a.target || c.target || "google_popup", a.width = a.width || 690, a.height = a.height || 500, (a = tf(c, a)) && a.focus()) : uf(c);
    };

    function Y(a) {
      if (a.Z) throw Error("AuthUI instance is deleted!");
    }

    l.Xa = function () {
      var a = this;
      Y(this);
      return this.a.app["delete"]().then(function () {
        var b = Bo(T(a));
        delete Co[b];
        a.reset();
        a.Z = !0;
      });
    };

    function xo(a) {
      Y(a);

      try {
        Uf(a.l, Gi(R(a)), Mo(a)).then(function (b) {
          return a.h ? Qm(a, a.h, b) : !1;
        });
      } catch (b) {}
    }

    l.Hb = function (a, b) {
      Y(this);
      var c = this,
          d = Af();
      if (!Ti(R(this))) return hf(Error("Email link sign-in should be enabled to trigger email sending."));
      var e = Vi(R(this)),
          f = new Vb(e.url);
      Wb(f, d);
      b && b.a && (Xh(d, b, T(this)), Zb(f, b.a.providerId));
      Xb(f, Ui(R(this)));
      return Eo(this, function (g) {
        g && ((g = g.uid) ? f.a.a.set(x.Qa, g) : Tb(f.a.a, x.Qa));
        e.url = f.toString();
        return X(c).sendSignInLinkToEmail(a, e);
      }).then(function () {
        var g = T(c),
            h = {};
        h.email = a;
        Kh(Gh, fh(d, JSON.stringify(h)), g);
      }, function (g) {
        Jh(Hh, T(c));
        Jh(Gh, T(c));
        throw g;
      });
    };

    function Hn(a, b) {
      var c = Yb(new Vb(b));
      if (!c) return G(null);
      b = new Ze(function (d, e) {
        var f = go(a).onAuthStateChanged(function (g) {
          f();
          g && g.isAnonymous && g.uid === c ? d(g) : g && g.isAnonymous && g.uid !== c ? e(Error("anonymous-user-mismatch")) : e(Error("anonymous-user-not-found"));
        });
        W(a, f);
      });
      W(a, b);
      return b;
    }

    function Ln(a, b, c, d, e) {
      Y(a);
      var f = e || null,
          g = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credentialWithLink(c, d);
      c = f ? X(a).signInWithEmailLink(c, d).then(function (h) {
        return h.user.linkWithCredential(f);
      }).then(function () {
        return mn(a);
      }).then(function () {
        return Fo(a, {
          code: "auth/email-already-in-use"
        }, f);
      }) : X(a).fetchSignInMethodsForEmail(c).then(function (h) {
        return h.length ? Fo(a, {
          code: "auth/email-already-in-use"
        }, g) : b.linkWithCredential(g);
      });
      W(a, c);
      return c;
    }

    function Mn(a, b, c, d) {
      Y(a);
      var e = d || null,
          f;
      b = X(a).signInWithEmailLink(b, c).then(function (g) {
        f = {
          user: g.user,
          credential: null,
          operationType: g.operationType,
          additionalUserInfo: g.additionalUserInfo
        };
        if (e) return g.user.linkWithCredential(e).then(function (h) {
          f = {
            user: h.user,
            credential: e,
            operationType: f.operationType,
            additionalUserInfo: h.additionalUserInfo
          };
        });
      }).then(function () {
        mn(a);
      }).then(function () {
        return go(a).updateCurrentUser(f.user);
      }).then(function () {
        f.user = go(a).currentUser;
        return f;
      });
      W(a, b);
      return b;
    }

    function cn() {
      var a = yf();

      if (Ho(a)) {
        a = new Vb(a);

        for (var b in x) {
          x.hasOwnProperty(b) && Tb(a.a.a, x[b]);
        }

        b = {
          state: "signIn",
          mode: "emailLink",
          operation: "clear"
        };
        var c = p.document.title;
        p.history && p.history.replaceState && p.history.replaceState(b, c, a.toString());
      }
    }

    l.ac = function (a, b) {
      Y(this);
      var c = this;
      return X(this).signInWithEmailAndPassword(a, b).then(function (d) {
        return Eo(c, function (e) {
          return e ? mn(c).then(function () {
            return Fo(c, {
              code: "auth/email-already-in-use"
            }, firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(a, b));
          }) : d;
        });
      });
    };

    l.Xb = function (a, b) {
      Y(this);
      var c = this;
      return Eo(this, function (d) {
        if (d) {
          var e = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].EmailAuthProvider.credential(a, b);
          return d.linkWithCredential(e);
        }

        return X(c).createUserWithEmailAndPassword(a, b);
      });
    };

    l.$b = function (a) {
      Y(this);
      var b = this;
      return Eo(this, function (c) {
        return c ? c.linkWithCredential(a).then(function (d) {
          return d;
        }, function (d) {
          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
          return Fo(b, d, a);
        }) : X(b).signInWithCredential(a);
      });
    };

    function Om(a, b) {
      Y(a);
      return Eo(a, function (c) {
        return c && !Qh(T(a)) ? c.linkWithPopup(b).then(function (d) {
          return d;
        }, function (d) {
          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
          return Fo(a, d);
        }) : X(a).signInWithPopup(b);
      });
    }

    l.cc = function (a) {
      Y(this);
      var b = this,
          c = this.i;
      this.i = null;
      return Eo(this, function (d) {
        return d && !Qh(T(b)) ? d.linkWithRedirect(a) : X(b).signInWithRedirect(a);
      }).then(function () {}, function (d) {
        b.i = c;
        throw d;
      });
    };

    l.bc = function (a, b) {
      Y(this);
      var c = this;
      return Eo(this, function (d) {
        return d ? d.linkWithPhoneNumber(a, b).then(function (e) {
          return new Zf(e, function (f) {
            if ("auth/credential-already-in-use" == f.code) return Fo(c, f);
            throw f;
          });
        }) : go(c).signInWithPhoneNumber(a, b).then(function (e) {
          return new Zf(e);
        });
      });
    };

    l.Zb = function () {
      Y(this);
      return go(this).signInAnonymously();
    };

    function Jm(a, b) {
      Y(a);
      return Eo(a, function (c) {
        if (a.j && !a.j.isAnonymous && yi(R(a)) && !X(a).currentUser) return mn(a).then(function () {
          "password" == b.credential.providerId && (b.credential = null);
          return b;
        });
        if (c) return mn(a).then(function () {
          return c.linkWithCredential(b.credential);
        }).then(function (d) {
          b.user = d.user;
          b.credential = d.credential;
          b.operationType = d.operationType;
          b.additionalUserInfo = d.additionalUserInfo;
          return b;
        }, function (d) {
          if (d && "auth/email-already-in-use" == d.code && d.email && d.credential) throw d;
          return Fo(a, d, b.credential);
        });
        if (!b.user) throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');
        return mn(a).then(function () {
          return go(a).updateCurrentUser(b.user);
        }).then(function () {
          b.user = go(a).currentUser;
          b.operationType = "signIn";
          b.credential && b.credential.providerId && "password" == b.credential.providerId && (b.credential = null);
          return b;
        });
      });
    }

    l.Wb = function (a, b) {
      Y(this);
      return X(this).signInWithEmailAndPassword(a, b);
    };

    function mn(a) {
      Y(a);
      return X(a).signOut();
    }

    function Fo(a, b, c) {
      Y(a);

      if (b && b.code && ("auth/email-already-in-use" == b.code || "auth/credential-already-in-use" == b.code)) {
        var d = zi(R(a));
        return G().then(function () {
          return d(new Rd("anonymous-upgrade-merge-conflict", null, c || b.credential));
        }).then(function () {
          a.h && (a.h.o(), a.h = null);
          throw b;
        });
      }

      return hf(b);
    }

    function No(a, b, c, d) {
      O.call(this, Ul, void 0, d, "providerMatchByEmail", {
        G: b,
        F: c
      });
      this.i = a;
    }

    n(No, O);

    No.prototype.v = function () {
      this.u(this.i);
      this.B(this.i);
      this.l().focus();
      Bn(this.l(), (this.l().value || "").length);
      O.prototype.v.call(this);
    };

    No.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    u(No.prototype, {
      l: dm,
      J: em,
      u: fm,
      D: gm,
      j: hm,
      P: Vl,
      B: Xl
    });

    function Oo(a, b, c, d, e) {
      O.call(this, Tl, {
        dc: b
      }, e, "selectTenant", {
        G: c,
        F: d
      });
      this.i = a;
    }

    n(Oo, O);

    Oo.prototype.v = function () {
      Po(this, this.i);
      O.prototype.v.call(this);
    };

    Oo.prototype.m = function () {
      this.i = null;
      O.prototype.m.call(this);
    };

    function Po(a, b) {
      function c(h) {
        b(h);
      }

      for (var d = a.f ? Yc("firebaseui-id-tenant-selection-button", a.f || a.s.a) : [], e = 0; e < d.length; e++) {
        var f = d[e],
            g = io(f, "tenantId");
        N(a, f, Ba(c, g));
      }
    }

    function Qo(a) {
      O.call(this, pl, void 0, a, "spinner");
    }

    n(Qo, O);

    function Ro(a) {
      this.a = new Yh();
      H(this.a, "authDomain");
      H(this.a, "displayMode", So);
      H(this.a, "tenants");
      H(this.a, "callbacks");
      H(this.a, "tosUrl");
      H(this.a, "privacyPolicyUrl");

      for (var b in a) {
        if (a.hasOwnProperty(b)) try {
          Zh(this.a, b, a[b]);
        } catch (c) {
          vg('Invalid config: "' + b + '"', void 0);
        }
      }
    }

    function To(a) {
      a = a.a.get("displayMode");

      for (var b in Uo) {
        if (Uo[b] === a) return Uo[b];
      }

      return So;
    }

    function Vo(a) {
      return a.a.get("callbacks") || {};
    }

    function Wo(a) {
      var b = a.a.get("tosUrl") || null;
      a = a.a.get("privacyPolicyUrl") || null;
      b && !a && Ag("Privacy Policy URL is missing, the link will not be displayed.");

      if (b && a) {
        if ("function" === typeof b) return b;
        if ("string" === typeof b) return function () {
          wf(b);
        };
      }

      return null;
    }

    function Xo(a) {
      var b = a.a.get("tosUrl") || null,
          c = a.a.get("privacyPolicyUrl") || null;
      c && !b && Ag("Terms of Service URL is missing, the link will not be displayed.");

      if (b && c) {
        if ("function" === typeof c) return c;
        if ("string" === typeof c) return function () {
          wf(c);
        };
      }

      return null;
    }

    function Yo(a, b) {
      a = a.a.get("tenants");
      if (!a || !a.hasOwnProperty(b) && !a.hasOwnProperty(Zo)) throw Error("Invalid tenant configuration!");
    }

    function $o(a, b, c) {
      a = a.a.get("tenants");
      if (!a) throw Error("Invalid tenant configuration!");
      var d = [];
      a = a[b] || a[Zo];
      if (!a) return vg("Invalid tenant configuration: " + (b + " is not configured!"), void 0), d;
      b = a.signInOptions;
      if (!b) throw Error("Invalid tenant configuration: signInOptions are invalid!");
      b.forEach(function (e) {
        if ("string" === typeof e) d.push(e);else if ("string" === typeof e.provider) {
          var f = e.hd;
          f && c ? (f instanceof RegExp ? f : new RegExp("@" + f.replace(".", "\\.") + "$")).test(c) && d.push(e.provider) : d.push(e.provider);
        } else e = "Invalid tenant configuration: signInOption " + (JSON.stringify(e) + " is invalid!"), vg(e, void 0);
      });
      return d;
    }

    function ap(a, b, c) {
      a = bp(a, b);
      (b = a.signInOptions) && c && (b = b.filter(function (d) {
        return "string" === typeof d ? c.includes(d) : c.includes(d.provider);
      }), a.signInOptions = b);
      return a;
    }

    function bp(a, b) {
      var c = cp;
      var d = void 0 === d ? {} : d;
      Yo(a, b);
      a = a.a.get("tenants");
      return Bf(a[b] || a[Zo], c, d);
    }

    var cp = ["immediateFederatedRedirect", "privacyPolicyUrl", "signInFlow", "signInOptions", "tosUrl"],
        So = "optionFirst",
        Uo = {
      oc: So,
      nc: "identifierFirst"
    },
        Zo = "*";

    function dp(a, b) {
      var c = this;
      this.s = xf(a);
      this.a = {};
      Object.keys(b).forEach(function (d) {
        c.a[d] = new Ro(b[d]);
      });
      this.pb = this.f = this.w = this.h = this.i = this.j = null;
      Object.defineProperty(this, "languageCode", {
        get: function get() {
          return this.pb;
        },
        set: function set(d) {
          this.pb = d || null;
        },
        enumerable: !1
      });
    }

    l = dp.prototype;

    l.Tb = function (a, b) {
      var c = this;
      ep(this);
      var d = a.apiKey;
      return new Ze(function (e, f) {
        if (c.a.hasOwnProperty(d)) {
          var g = Vo(c.a[d]).selectTenantUiHidden || null;

          if (To(c.a[d]) === So) {
            var h = [];
            b.forEach(function (q) {
              q = q || "_";
              var E = c.a[d].a.get("tenants");
              if (!E) throw Error("Invalid tenant configuration!");
              (E = E[q] || E[Zo]) ? q = {
                tenantId: "_" !== q ? q : null,
                displayName: E.displayName,
                Na: E.iconUrl,
                Ga: E.buttonColor
              } : (vg("Invalid tenant configuration: " + (q + " is not configured!"), void 0), q = null);
              q && h.push(q);
            });

            var k = function k(q) {
              q = {
                tenantId: q,
                providerIds: $o(c.a[d], q || "_")
              };
              e(q);
            };

            if (1 === h.length) {
              k(h[0].tenantId);
              return;
            }

            c.f = new Oo(function (q) {
              ep(c);
              g && g();
              k(q);
            }, h, Wo(c.a[d]), Xo(c.a[d]));
          } else c.f = new No(function () {
            var q = c.f.j();

            if (q) {
              for (var E = 0; E < b.length; E++) {
                var S = $o(c.a[d], b[E] || "_", q);

                if (0 !== S.length) {
                  q = {
                    tenantId: b[E],
                    providerIds: S,
                    email: q
                  };
                  ep(c);
                  g && g();
                  e(q);
                  return;
                }
              }

              c.f.a(Pd({
                code: "no-matching-tenant-for-email"
              }).toString());
            }
          }, Wo(c.a[d]), Xo(c.a[d]));

          c.f.render(c.s);
          (f = Vo(c.a[d]).selectTenantUiShown || null) && f();
        } else {
          var m = Error("Invalid project configuration: API key is invalid!");
          m.code = "invalid-configuration";
          c.qb(m);
          f(m);
        }
      });
    };

    l.Ob = function (a, b) {
      if (!this.a.hasOwnProperty(a)) throw Error("Invalid project configuration: API key is invalid!");
      var c = b || void 0;
      Yo(this.a[a], b || "_");

      try {
        this.i = firebase_app__WEBPACK_IMPORTED_MODULE_0__["app"](c).auth();
      } catch (e) {
        var d = this.a[a].a.get("authDomain");
        if (!d) throw Error("Invalid project configuration: authDomain is required!");
        a = firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"]({
          apiKey: a,
          authDomain: d
        }, c);
        a.auth().tenantId = b;
        this.i = a.auth();
      }

      return this.i;
    };

    l.Yb = function (a, b) {
      var c = this;
      return new Ze(function (d, e) {
        function f(E, S) {
          c.j = new Ao(a);
          Io(c.j, c.s, E, S);
        }

        var g = a.app.options.apiKey;
        c.a.hasOwnProperty(g) || e(Error("Invalid project configuration: API key is invalid!"));
        var h = ap(c.a[g], a.tenantId || "_", b && b.providerIds);
        ep(c);
        e = {
          signInSuccessWithAuthResult: function signInSuccessWithAuthResult(E) {
            d(E);
            return !1;
          }
        };
        var k = Vo(c.a[g]).signInUiShown || null,
            m = !1;

        e.uiChanged = function (E, S) {
          null === E && "callback" === S ? ((E = $c("firebaseui-id-page-callback", c.s)) && Bk(E), c.h = new Qo(), c.h.render(c.s)) : m || null === E && "spinner" === S || "blank" === S || (c.h && (c.h.o(), c.h = null), m = !0, k && k(a.tenantId));
        };

        h.callbacks = e;
        h.credentialHelper = "none";
        var q;
        b && b.email && (q = {
          emailHint: b.email
        });
        c.j ? c.j.Xa().then(function () {
          f(h, q);
        }) : f(h, q);
      });
    };

    l.reset = function () {
      var a = this;
      return G().then(function () {
        a.j && a.j.Xa();
      }).then(function () {
        a.j = null;
        ep(a);
      });
    };

    l.Ub = function () {
      var a = this;
      this.h || this.w || (this.w = window.setTimeout(function () {
        ep(a);
        a.h = new Qo();
        a.f = a.h;
        a.h.render(a.s);
        a.w = null;
      }, 500));
    };

    l.nb = function () {
      window.clearTimeout(this.w);
      this.w = null;
      this.h && (this.h.o(), this.h = null);
    };

    l.Cb = function () {
      ep(this);
      this.f = new pm();
      this.f.render(this.s);
      return G();
    };

    function ep(a) {
      a.j && a.j.reset();
      a.nb();
      a.f && a.f.o();
    }

    l.qb = function (a) {
      var b = this,
          c = Pd({
        code: a.code
      }).toString() || a.message;
      ep(this);
      var d;
      a.retry && va(a.retry) && (d = function d() {
        b.reset();
        a.retry();
      });
      this.f = new tm(c, d);
      this.f.render(this.s);
    };

    l.Qb = function (a) {
      var b = this;
      return G().then(function () {
        var c = b.i && b.i.app.options.apiKey;
        if (!b.a.hasOwnProperty(c)) throw Error("Invalid project configuration: API key is invalid!");
        Yo(b.a[c], a.tenantId || "_");
        if (!b.i.currentUser || b.i.currentUser.uid !== a.uid) throw Error("The user being processed does not match the signed in user!");
        return (c = Vo(b.a[c]).beforeSignInSuccess || null) ? c(a) : a;
      }).then(function (c) {
        if (c.uid !== a.uid) throw Error("User with mismatching UID returned.");
        return c;
      });
    };

    v("firebaseui.auth.FirebaseUiHandler", dp);
    v("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant", dp.prototype.Tb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.getAuth", dp.prototype.Ob);
    v("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn", dp.prototype.Yb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.reset", dp.prototype.reset);
    v("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar", dp.prototype.Ub);
    v("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar", dp.prototype.nb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut", dp.prototype.Cb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.handleError", dp.prototype.qb);
    v("firebaseui.auth.FirebaseUiHandler.prototype.processUser", dp.prototype.Qb);
    v("firebaseui.auth.AuthUI", Ao);
    v("firebaseui.auth.AuthUI.getInstance", function (a) {
      a = Bo(a);
      return Co[a] ? Co[a] : null;
    });
    v("firebaseui.auth.AuthUI.prototype.disableAutoSignIn", Ao.prototype.disableAutoSignIn);
    v("firebaseui.auth.AuthUI.prototype.start", Ao.prototype.start);
    v("firebaseui.auth.AuthUI.prototype.setConfig", Ao.prototype.jb);
    v("firebaseui.auth.AuthUI.prototype.signIn", Ao.prototype.Vb);
    v("firebaseui.auth.AuthUI.prototype.reset", Ao.prototype.reset);
    v("firebaseui.auth.AuthUI.prototype.delete", Ao.prototype.Xa);
    v("firebaseui.auth.AuthUI.prototype.isPendingRedirect", Ao.prototype.ob);
    v("firebaseui.auth.AuthUIError", Rd);
    v("firebaseui.auth.AuthUIError.prototype.toJSON", Rd.prototype.toJSON);
    v("firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM", ti);
    v("firebaseui.auth.CredentialHelper.GOOGLE_YOLO", Ii);
    v("firebaseui.auth.CredentialHelper.NONE", dj);
    v("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID", "anonymous");
    Ze.prototype["catch"] = Ze.prototype.ta;
    Ze.prototype["finally"] = Ze.prototype.ec;
  }).apply(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : window);
}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : window);

if (typeof window !== 'undefined') {
  window.dialogPolyfill = dialog_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a;
}

var auth = firebaseui.auth;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)))

/***/ }),
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  // nb. This is for IE10 and lower _only_.
  var supportCustomEvent = window.CustomEvent;

  if (!supportCustomEvent || _typeof(supportCustomEvent) === 'object') {
    supportCustomEvent = function CustomEvent(event, x) {
      x = x || {};
      var ev = document.createEvent('CustomEvent');
      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
      return ev;
    };

    supportCustomEvent.prototype = window.Event.prototype;
  }
  /**
   * @param {Element} el to check for stacking context
   * @return {boolean} whether this el or its parents creates a stacking context
   */


  function createsStackingContext(el) {
    while (el && el !== document.body) {
      var s = window.getComputedStyle(el);

      var invalid = function invalid(k, ok) {
        return !(s[k] === undefined || s[k] === ok);
      };

      if (s.opacity < 1 || invalid('zIndex', 'auto') || invalid('transform', 'none') || invalid('mixBlendMode', 'normal') || invalid('filter', 'none') || invalid('perspective', 'none') || s['isolation'] === 'isolate' || s.position === 'fixed' || s.webkitOverflowScrolling === 'touch') {
        return true;
      }

      el = el.parentElement;
    }

    return false;
  }
  /**
   * Finds the nearest <dialog> from the passed element.
   *
   * @param {Element} el to search from
   * @return {HTMLDialogElement} dialog found
   */


  function findNearestDialog(el) {
    while (el) {
      if (el.localName === 'dialog') {
        return (
          /** @type {HTMLDialogElement} */
          el
        );
      }

      el = el.parentElement;
    }

    return null;
  }
  /**
   * Blur the specified element, as long as it's not the HTML body element.
   * This works around an IE9/10 bug - blurring the body causes Windows to
   * blur the whole application.
   *
   * @param {Element} el to blur
   */


  function safeBlur(el) {
    if (el && el.blur && el !== document.body) {
      el.blur();
    }
  }
  /**
   * @param {!NodeList} nodeList to search
   * @param {Node} node to find
   * @return {boolean} whether node is inside nodeList
   */


  function inNodeList(nodeList, node) {
    for (var i = 0; i < nodeList.length; ++i) {
      if (nodeList[i] === node) {
        return true;
      }
    }

    return false;
  }
  /**
   * @param {HTMLFormElement} el to check
   * @return {boolean} whether this form has method="dialog"
   */


  function isFormMethodDialog(el) {
    if (!el || !el.hasAttribute('method')) {
      return false;
    }

    return el.getAttribute('method').toLowerCase() === 'dialog';
  }
  /**
   * @param {!HTMLDialogElement} dialog to upgrade
   * @constructor
   */


  function dialogPolyfillInfo(dialog) {
    this.dialog_ = dialog;
    this.replacedStyleTop_ = false;
    this.openAsModal_ = false; // Set a11y role. Browsers that support dialog implicitly know this already.

    if (!dialog.hasAttribute('role')) {
      dialog.setAttribute('role', 'dialog');
    }

    dialog.show = this.show.bind(this);
    dialog.showModal = this.showModal.bind(this);
    dialog.close = this.close.bind(this);

    if (!('returnValue' in dialog)) {
      dialog.returnValue = '';
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(this.maybeHideModal.bind(this));
      mo.observe(dialog, {
        attributes: true,
        attributeFilter: ['open']
      });
    } else {
      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
      // seem to fire even if the element was removed as part of a parent removal. Use the removed
      // events to force downgrade (useful if removed/immediately added).
      var removed = false;

      var cb = function () {
        removed ? this.downgradeModal() : this.maybeHideModal();
        removed = false;
      }.bind(this);

      var timeout;

      var delayModel = function delayModel(ev) {
        if (ev.target !== dialog) {
          return;
        } // not for a child element


        var cand = 'DOMNodeRemoved';
        removed |= ev.type.substr(0, cand.length) === cand;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(cb, 0);
      };

      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function (name) {
        dialog.addEventListener(name, delayModel);
      });
    } // Note that the DOM is observed inside DialogManager while any dialog
    // is being displayed as a modal, to catch modal removal from the DOM.


    Object.defineProperty(dialog, 'open', {
      set: this.setOpen.bind(this),
      get: dialog.hasAttribute.bind(dialog, 'open')
    });
    this.backdrop_ = document.createElement('div');
    this.backdrop_.className = 'backdrop';
    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));
  }

  dialogPolyfillInfo.prototype = {
    get dialog() {
      return this.dialog_;
    },

    /**
     * Maybe remove this dialog from the modal top layer. This is called when
     * a modal dialog may no longer be tenable, e.g., when the dialog is no
     * longer open or is no longer part of the DOM.
     */
    maybeHideModal: function maybeHideModal() {
      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) {
        return;
      }

      this.downgradeModal();
    },

    /**
     * Remove this dialog from the modal top layer, leaving it as a non-modal.
     */
    downgradeModal: function downgradeModal() {
      if (!this.openAsModal_) {
        return;
      }

      this.openAsModal_ = false;
      this.dialog_.style.zIndex = ''; // This won't match the native <dialog> exactly because if the user set top on a centered
      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
      // possible to polyfill this perfectly.

      if (this.replacedStyleTop_) {
        this.dialog_.style.top = '';
        this.replacedStyleTop_ = false;
      } // Clear the backdrop and remove from the manager.


      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
      dialogPolyfill.dm.removeDialog(this);
    },

    /**
     * @param {boolean} value whether to open or close this dialog
     */
    setOpen: function setOpen(value) {
      if (value) {
        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
      } else {
        this.dialog_.removeAttribute('open');
        this.maybeHideModal(); // nb. redundant with MutationObserver
      }
    },

    /**
     * Handles clicks on the fake .backdrop element, redirecting them as if
     * they were on the dialog itself.
     *
     * @param {!Event} e to redirect
     */
    backdropClick_: function backdropClick_(e) {
      if (!this.dialog_.hasAttribute('tabindex')) {
        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
        // would not be needed - clicks would move the implicit cursor there.
        var fake = document.createElement('div');
        this.dialog_.insertBefore(fake, this.dialog_.firstChild);
        fake.tabIndex = -1;
        fake.focus();
        this.dialog_.removeChild(fake);
      } else {
        this.dialog_.focus();
      }

      var redirectedEvent = document.createEvent('MouseEvents');
      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
      this.dialog_.dispatchEvent(redirectedEvent);
      e.stopPropagation();
    },

    /**
     * Focuses on the first focusable element within the dialog. This will always blur the current
     * focus, even if nothing within the dialog is found.
     */
    focus_: function focus_() {
      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');

      if (!target && this.dialog_.tabIndex >= 0) {
        target = this.dialog_;
      }

      if (!target) {
        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
        // alternative involves stepping through and trying to focus everything.
        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
        var query = opts.map(function (el) {
          return el + ':not([disabled])';
        }); // TODO(samthor): tabindex values that are not numeric are not focusable.

        query.push('[tabindex]:not([disabled]):not([tabindex=""])'); // tabindex != "", not disabled

        target = this.dialog_.querySelector(query.join(', '));
      }

      safeBlur(document.activeElement);
      target && target.focus();
    },

    /**
     * Sets the zIndex for the backdrop and dialog.
     *
     * @param {number} dialogZ
     * @param {number} backdropZ
     */
    updateZIndex: function updateZIndex(dialogZ, backdropZ) {
      if (dialogZ < backdropZ) {
        throw new Error('dialogZ should never be < backdropZ');
      }

      this.dialog_.style.zIndex = dialogZ;
      this.backdrop_.style.zIndex = backdropZ;
    },

    /**
     * Shows the dialog. If the dialog is already open, this does nothing.
     */
    show: function show() {
      if (!this.dialog_.open) {
        this.setOpen(true);
        this.focus_();
      }
    },

    /**
     * Show this dialog modally.
     */
    showModal: function showModal() {
      if (this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
      }

      if (!document.body.contains(this.dialog_)) {
        throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
      }

      if (!dialogPolyfill.dm.pushDialog(this)) {
        throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
      }

      if (createsStackingContext(this.dialog_.parentElement)) {
        console.warn('A dialog is being shown inside a stacking context. ' + 'This may cause it to be unusable. For more information, see this link: ' + 'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
      }

      this.setOpen(true);
      this.openAsModal_ = true; // Optionally center vertically, relative to the current viewport.

      if (dialogPolyfill.needsCentering(this.dialog_)) {
        dialogPolyfill.reposition(this.dialog_);
        this.replacedStyleTop_ = true;
      } else {
        this.replacedStyleTop_ = false;
      } // Insert backdrop.


      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling); // Focus on whatever inside the dialog.

      this.focus_();
    },

    /**
     * Closes this HTMLDialogElement. This is optional vs clearing the open
     * attribute, however this fires a 'close' event.
     *
     * @param {string=} opt_returnValue to use as the returnValue
     */
    close: function close(opt_returnValue) {
      if (!this.dialog_.hasAttribute('open')) {
        throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
      }

      this.setOpen(false); // Leave returnValue untouched in case it was set directly on the element

      if (opt_returnValue !== undefined) {
        this.dialog_.returnValue = opt_returnValue;
      } // Triggering "close" event for any attached listeners on the <dialog>.


      var closeEvent = new supportCustomEvent('close', {
        bubbles: false,
        cancelable: false
      });
      this.dialog_.dispatchEvent(closeEvent);
    }
  };
  var dialogPolyfill = {};

  dialogPolyfill.reposition = function (element) {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
    element.style.top = Math.max(scrollTop, topValue) + 'px';
  };

  dialogPolyfill.isInlinePositionSetByStylesheet = function (element) {
    for (var i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var cssRules = null; // Some browsers throw on cssRules.

      try {
        cssRules = styleSheet.cssRules;
      } catch (e) {}

      if (!cssRules) {
        continue;
      }

      for (var j = 0; j < cssRules.length; ++j) {
        var rule = cssRules[j];
        var selectedNodes = null; // Ignore errors on invalid selector texts.

        try {
          selectedNodes = document.querySelectorAll(rule.selectorText);
        } catch (e) {}

        if (!selectedNodes || !inNodeList(selectedNodes, element)) {
          continue;
        }

        var cssTop = rule.style.getPropertyValue('top');
        var cssBottom = rule.style.getPropertyValue('bottom');

        if (cssTop && cssTop !== 'auto' || cssBottom && cssBottom !== 'auto') {
          return true;
        }
      }
    }

    return false;
  };

  dialogPolyfill.needsCentering = function (dialog) {
    var computedStyle = window.getComputedStyle(dialog);

    if (computedStyle.position !== 'absolute') {
      return false;
    } // We must determine whether the top/bottom specified value is non-auto.  In
    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
    // Firefox returns the used value. So we do this crazy thing instead: check
    // the inline style and then go through CSS rules.


    if (dialog.style.top !== 'auto' && dialog.style.top !== '' || dialog.style.bottom !== 'auto' && dialog.style.bottom !== '') {
      return false;
    }

    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
  };
  /**
   * @param {!Element} element to force upgrade
   */


  dialogPolyfill.forceRegisterDialog = function (element) {
    if (window.HTMLDialogElement || element.showModal) {
      console.warn('This browser already supports <dialog>, the polyfill ' + 'may not work correctly', element);
    }

    if (element.localName !== 'dialog') {
      throw new Error('Failed to register dialog: The element is not a dialog.');
    }

    new dialogPolyfillInfo(
    /** @type {!HTMLDialogElement} */
    element);
  };
  /**
   * @param {!Element} element to upgrade, if necessary
   */


  dialogPolyfill.registerDialog = function (element) {
    if (!element.showModal) {
      dialogPolyfill.forceRegisterDialog(element);
    }
  };
  /**
   * @constructor
   */


  dialogPolyfill.DialogManager = function () {
    /** @type {!Array<!dialogPolyfillInfo>} */
    this.pendingDialogStack = [];
    var checkDOM = this.checkDOM_.bind(this); // The overlay is used to simulate how a modal dialog blocks the document.
    // The blocking dialog is positioned on top of the overlay, and the rest of
    // the dialogs on the pending dialog stack are positioned below it. In the
    // actual implementation, the modal dialog stacking is controlled by the
    // top layer, where z-index has no effect.

    this.overlay = document.createElement('div');
    this.overlay.className = '_dialog_overlay';
    this.overlay.addEventListener('click', function (e) {
      this.forwardTab_ = undefined;
      e.stopPropagation();
      checkDOM([]); // sanity-check DOM
    }.bind(this));
    this.handleKey_ = this.handleKey_.bind(this);
    this.handleFocus_ = this.handleFocus_.bind(this);
    this.zIndexLow_ = 100000;
    this.zIndexHigh_ = 100000 + 150;
    this.forwardTab_ = undefined;

    if ('MutationObserver' in window) {
      this.mo_ = new MutationObserver(function (records) {
        var removed = [];
        records.forEach(function (rec) {
          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
            if (!(c instanceof Element)) {
              continue;
            } else if (c.localName === 'dialog') {
              removed.push(c);
            }

            removed = removed.concat(c.querySelectorAll('dialog'));
          }
        });
        removed.length && checkDOM(removed);
      });
    }
  };
  /**
   * Called on the first modal dialog being shown. Adds the overlay and related
   * handlers.
   */


  dialogPolyfill.DialogManager.prototype.blockDocument = function () {
    document.documentElement.addEventListener('focus', this.handleFocus_, true);
    document.addEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.observe(document, {
      childList: true,
      subtree: true
    });
  };
  /**
   * Called on the first modal dialog being removed, i.e., when no more modal
   * dialogs are visible.
   */


  dialogPolyfill.DialogManager.prototype.unblockDocument = function () {
    document.documentElement.removeEventListener('focus', this.handleFocus_, true);
    document.removeEventListener('keydown', this.handleKey_);
    this.mo_ && this.mo_.disconnect();
  };
  /**
   * Updates the stacking of all known dialogs.
   */


  dialogPolyfill.DialogManager.prototype.updateStacking = function () {
    var zIndex = this.zIndexHigh_;

    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      dpi.updateZIndex(--zIndex, --zIndex);

      if (i === 0) {
        this.overlay.style.zIndex = --zIndex;
      }
    } // Make the overlay a sibling of the dialog itself.


    var last = this.pendingDialogStack[0];

    if (last) {
      var p = last.dialog.parentNode || document.body;
      p.appendChild(this.overlay);
    } else if (this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  };
  /**
   * @param {Element} candidate to check if contained or is the top-most modal dialog
   * @return {boolean} whether candidate is contained in top dialog
   */


  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function (candidate) {
    while (candidate = findNearestDialog(candidate)) {
      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
        if (dpi.dialog === candidate) {
          return i === 0; // only valid if top-most
        }
      }

      candidate = candidate.parentElement;
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleFocus_ = function (event) {
    if (this.containedByTopDialog_(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    safeBlur(
    /** @type {Element} */
    event.target);

    if (this.forwardTab_ === undefined) {
      return;
    } // move focus only from a tab key


    var dpi = this.pendingDialogStack[0];
    var dialog = dpi.dialog;
    var position = dialog.compareDocumentPosition(event.target);

    if (position & Node.DOCUMENT_POSITION_PRECEDING) {
      if (this.forwardTab_) {
        // forward
        dpi.focus_();
      } else {
        // backwards
        document.documentElement.focus();
      }
    } else {// TODO: Focus after the dialog, is ignored.
    }

    return false;
  };

  dialogPolyfill.DialogManager.prototype.handleKey_ = function (event) {
    this.forwardTab_ = undefined;

    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
      var cancelEvent = new supportCustomEvent('cancel', {
        bubbles: false,
        cancelable: true
      });
      var dpi = this.pendingDialogStack[0];

      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {
        dpi.dialog.close();
      }
    } else if (event.keyCode === 9) {
      this.forwardTab_ = !event.shiftKey;
    }
  };
  /**
   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
   * removed and immediately readded don't stay modal, they become normal.
   *
   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
   */


  dialogPolyfill.DialogManager.prototype.checkDOM_ = function (removed) {
    // This operates on a clone because it may cause it to change. Each change also calls
    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
    // at a time?!
    var clone = this.pendingDialogStack.slice();
    clone.forEach(function (dpi) {
      if (removed.indexOf(dpi.dialog) !== -1) {
        dpi.downgradeModal();
      } else {
        dpi.maybeHideModal();
      }
    });
  };
  /**
   * @param {!dialogPolyfillInfo} dpi
   * @return {boolean} whether the dialog was allowed
   */


  dialogPolyfill.DialogManager.prototype.pushDialog = function (dpi) {
    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;

    if (this.pendingDialogStack.length >= allowed) {
      return false;
    }

    if (this.pendingDialogStack.unshift(dpi) === 1) {
      this.blockDocument();
    }

    this.updateStacking();
    return true;
  };
  /**
   * @param {!dialogPolyfillInfo} dpi
   */


  dialogPolyfill.DialogManager.prototype.removeDialog = function (dpi) {
    var index = this.pendingDialogStack.indexOf(dpi);

    if (index === -1) {
      return;
    }

    this.pendingDialogStack.splice(index, 1);

    if (this.pendingDialogStack.length === 0) {
      this.unblockDocument();
    }

    this.updateStacking();
  };

  dialogPolyfill.dm = new dialogPolyfill.DialogManager();
  dialogPolyfill.formSubmitter = null;
  dialogPolyfill.useValue = null;
  /**
   * Installs global handlers, such as click listers and native method overrides. These are needed
   * even if a no dialog is registered, as they deal with <form method="dialog">.
   */

  if (window.HTMLDialogElement === undefined) {
    /**
     * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
     * one that returns the correct value.
     */
    var testForm = document.createElement('form');
    testForm.setAttribute('method', 'dialog');

    if (testForm.method !== 'dialog') {
      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');

      if (methodDescriptor) {
        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
        // and don't bother to update the element.
        var realGet = methodDescriptor.get;

        methodDescriptor.get = function () {
          if (isFormMethodDialog(this)) {
            return 'dialog';
          }

          return realGet.call(this);
        };

        var realSet = methodDescriptor.set;

        methodDescriptor.set = function (v) {
          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
            return this.setAttribute('method', v);
          }

          return realSet.call(this, v);
        };

        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
      }
    }
    /**
     * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
     * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
     * document.activeElement.
     */


    document.addEventListener('click', function (ev) {
      dialogPolyfill.formSubmitter = null;
      dialogPolyfill.useValue = null;

      if (ev.defaultPrevented) {
        return;
      } // e.g. a submit which prevents default submission


      var target =
      /** @type {Element} */
      ev.target;

      if (!target || !isFormMethodDialog(target.form)) {
        return;
      }

      var valid = target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1;

      if (!valid) {
        if (!(target.localName === 'input' && target.type === 'image')) {
          return;
        } // this is a <input type="image">, which can submit forms


        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;
      }

      var dialog = findNearestDialog(target);

      if (!dialog) {
        return;
      }

      dialogPolyfill.formSubmitter = target;
    }, false);
    /**
     * Replace the native HTMLFormElement.submit() method, as it won't fire the
     * submit event and give us a chance to respond.
     */

    var nativeFormSubmit = HTMLFormElement.prototype.submit;

    var replacementFormSubmit = function replacementFormSubmit() {
      if (!isFormMethodDialog(this)) {
        return nativeFormSubmit.call(this);
      }

      var dialog = findNearestDialog(this);
      dialog && dialog.close();
    };

    HTMLFormElement.prototype.submit = replacementFormSubmit;
    /**
     * Global form 'dialog' method handler. Closes a dialog correctly on submit
     * and possibly sets its return value.
     */

    document.addEventListener('submit', function (ev) {
      var form =
      /** @type {HTMLFormElement} */
      ev.target;

      if (!isFormMethodDialog(form)) {
        return;
      }

      ev.preventDefault();
      var dialog = findNearestDialog(form);

      if (!dialog) {
        return;
      } // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that
      // the submitter is correct before using its value as .returnValue.


      var s = dialogPolyfill.formSubmitter;

      if (s && s.form === form) {
        dialog.close(dialogPolyfill.useValue || s.value);
      } else {
        dialog.close();
      }

      dialogPolyfill.formSubmitter = null;
    }, true);
  }

  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;
  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;

  if ( true && 'amd' in __webpack_require__(44)) {
    // AMD support
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dialogPolyfill;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (( false ? undefined : _typeof(module)) === 'object' && _typeof(module['exports']) === 'object') {
    // CommonJS support
    module['exports'] = dialogPolyfill;
  } else {
    // all others
    window['dialogPolyfill'] = dialogPolyfill;
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)(module)))

/***/ }),
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
/* 44 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/**
 * A component handler interface using the revealing module design pattern.
 * More details on this design pattern here:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 *
 * @author Jason Mayes.
 */

/* exported componentHandler */
// Pre-defining the componentHandler interface, for closure documentation and
// static verification.
var componentHandler = {
  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   *
   * @param {string=} optJsClass the programatic name of the element class we
   * need to create a new instance of.
   * @param {string=} optCssClass the name of the CSS class elements of this
   * type will have.
   */
  upgradeDom: function upgradeDom(optJsClass, optCssClass) {},

  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */
  upgradeElement: function upgradeElement(element, optJsClass) {},

  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */
  upgradeElements: function upgradeElements(elements) {},

  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */
  upgradeAllRegistered: function upgradeAllRegistered() {},

  /**
   * Allows user to be alerted to any upgrades that are performed for a given
   * component type
   *
   * @param {string} jsClass The class name of the MDL component we wish
   * to hook into for any upgrades performed.
   * @param {function(!HTMLElement)} callback The function to call upon an
   * upgrade. This function should expect 1 parameter - the HTMLElement which
   * got upgraded.
   */
  registerUpgradedCallback: function registerUpgradedCallback(jsClass, callback) {},

  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config the registration configuration
   */
  register: function register(config) {},

  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */
  downgradeElements: function downgradeElements(nodes) {}
};

componentHandler = function () {
  'use strict';
  /** @type {!Array<componentHandler.ComponentConfig>} */

  var registeredComponents_ = [];
  /** @type {!Array<componentHandler.Component>} */

  var createdComponents_ = [];
  var componentConfigProperty_ = 'mdlComponentConfigInternal_';
  /**
   * Searches registered components for a class we are interested in using.
   * Optionally replaces a match with passed object if specified.
   *
   * @param {string} name The name of a class we want to use.
   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
   * @return {!Object|boolean}
   * @private
   */

  function findRegisteredClass_(name, optReplace) {
    for (var i = 0; i < registeredComponents_.length; i++) {
      if (registeredComponents_[i].className === name) {
        if (typeof optReplace !== 'undefined') {
          registeredComponents_[i] = optReplace;
        }

        return registeredComponents_[i];
      }
    }

    return false;
  }
  /**
   * Returns an array of the classNames of the upgraded classes on the element.
   *
   * @param {!Element} element The element to fetch data from.
   * @return {!Array<string>}
   * @private
   */


  function getUpgradedListOfElement_(element) {
    var dataUpgraded = element.getAttribute('data-upgraded'); // Use `['']` as default value to conform the `,name,name...` style.

    return dataUpgraded === null ? [''] : dataUpgraded.split(',');
  }
  /**
   * Returns true if the given element has already been upgraded for the given
   * class.
   *
   * @param {!Element} element The element we want to check.
   * @param {string} jsClass The class to check for.
   * @returns {boolean}
   * @private
   */


  function isElementUpgraded_(element, jsClass) {
    var upgradedList = getUpgradedListOfElement_(element);
    return upgradedList.indexOf(jsClass) !== -1;
  }
  /**
   * Create an event object.
   *
   * @param {string} eventType The type name of the event.
   * @param {boolean} bubbles Whether the event should bubble up the DOM.
   * @param {boolean} cancelable Whether the event can be canceled.
   * @returns {!Event}
   */


  function createEvent_(eventType, bubbles, cancelable) {
    if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
      return new CustomEvent(eventType, {
        bubbles: bubbles,
        cancelable: cancelable
      });
    } else {
      var ev = document.createEvent('Events');
      ev.initEvent(eventType, bubbles, cancelable);
      return ev;
    }
  }
  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   *
   * @param {string=} optJsClass the programatic name of the element class we
   * need to create a new instance of.
   * @param {string=} optCssClass the name of the CSS class elements of this
   * type will have.
   */


  function upgradeDomInternal(optJsClass, optCssClass) {
    if (typeof optJsClass === 'undefined' && typeof optCssClass === 'undefined') {
      for (var i = 0; i < registeredComponents_.length; i++) {
        upgradeDomInternal(registeredComponents_[i].className, registeredComponents_[i].cssClass);
      }
    } else {
      var jsClass =
      /** @type {string} */
      optJsClass;

      if (typeof optCssClass === 'undefined') {
        var registeredClass = findRegisteredClass_(jsClass);

        if (registeredClass) {
          optCssClass = registeredClass.cssClass;
        }
      }

      var elements = document.querySelectorAll('.' + optCssClass);

      for (var n = 0; n < elements.length; n++) {
        upgradeElementInternal(elements[n], jsClass);
      }
    }
  }
  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */


  function upgradeElementInternal(element, optJsClass) {
    // Verify argument type.
    if (!(_typeof(element) === 'object' && element instanceof Element)) {
      throw new Error('Invalid argument provided to upgrade MDL element.');
    } // Allow upgrade to be canceled by canceling emitted event.


    var upgradingEv = createEvent_('mdl-componentupgrading', true, true);
    element.dispatchEvent(upgradingEv);

    if (upgradingEv.defaultPrevented) {
      return;
    }

    var upgradedList = getUpgradedListOfElement_(element);
    var classesToUpgrade = []; // If jsClass is not provided scan the registered components to find the
    // ones matching the element's CSS classList.

    if (!optJsClass) {
      var classList = element.classList;
      registeredComponents_.forEach(function (component) {
        // Match CSS & Not to be upgraded & Not upgraded.
        if (classList.contains(component.cssClass) && classesToUpgrade.indexOf(component) === -1 && !isElementUpgraded_(element, component.className)) {
          classesToUpgrade.push(component);
        }
      });
    } else if (!isElementUpgraded_(element, optJsClass)) {
      classesToUpgrade.push(findRegisteredClass_(optJsClass));
    } // Upgrade the element for each classes.


    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
      registeredClass = classesToUpgrade[i];

      if (registeredClass) {
        // Mark element as upgraded.
        upgradedList.push(registeredClass.className);
        element.setAttribute('data-upgraded', upgradedList.join(','));
        var instance = new registeredClass.classConstructor(element);
        instance[componentConfigProperty_] = registeredClass;
        createdComponents_.push(instance); // Call any callbacks the user has registered with this component type.

        for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
          registeredClass.callbacks[j](element);
        }

        if (registeredClass.widget) {
          // Assign per element instance for control over API
          element[registeredClass.className] = instance;
        }
      } else {
        throw new Error('Unable to find a registered component for the given class.');
      }

      var upgradedEv = createEvent_('mdl-componentupgraded', true, false);
      element.dispatchEvent(upgradedEv);
    }
  }
  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */


  function upgradeElementsInternal(elements) {
    if (!Array.isArray(elements)) {
      if (elements instanceof Element) {
        elements = [elements];
      } else {
        elements = Array.prototype.slice.call(elements);
      }
    }

    for (var i = 0, n = elements.length, element; i < n; i++) {
      element = elements[i];

      if (element instanceof HTMLElement) {
        upgradeElementInternal(element);

        if (element.children.length > 0) {
          upgradeElementsInternal(element.children);
        }
      }
    }
  }
  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config
   */


  function registerInternal(config) {
    // In order to support both Closure-compiled and uncompiled code accessing
    // this method, we need to allow for both the dot and array syntax for
    // property access. You'll therefore see the `foo.bar || foo['bar']`
    // pattern repeated across this method.
    var widgetMissing = typeof config.widget === 'undefined' && typeof config['widget'] === 'undefined';
    var widget = true;

    if (!widgetMissing) {
      widget = config.widget || config['widget'];
    }

    var newConfig =
    /** @type {componentHandler.ComponentConfig} */
    {
      classConstructor: config.constructor || config['constructor'],
      className: config.classAsString || config['classAsString'],
      cssClass: config.cssClass || config['cssClass'],
      widget: widget,
      callbacks: []
    };
    registeredComponents_.forEach(function (item) {
      if (item.cssClass === newConfig.cssClass) {
        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
      }

      if (item.className === newConfig.className) {
        throw new Error('The provided className has already been registered');
      }
    });

    if (config.constructor.prototype.hasOwnProperty(componentConfigProperty_)) {
      throw new Error('MDL component classes must not have ' + componentConfigProperty_ + ' defined as a property.');
    }

    var found = findRegisteredClass_(config.classAsString, newConfig);

    if (!found) {
      registeredComponents_.push(newConfig);
    }
  }
  /**
   * Allows user to be alerted to any upgrades that are performed for a given
   * component type
   *
   * @param {string} jsClass The class name of the MDL component we wish
   * to hook into for any upgrades performed.
   * @param {function(!HTMLElement)} callback The function to call upon an
   * upgrade. This function should expect 1 parameter - the HTMLElement which
   * got upgraded.
   */


  function registerUpgradedCallbackInternal(jsClass, callback) {
    var regClass = findRegisteredClass_(jsClass);

    if (regClass) {
      regClass.callbacks.push(callback);
    }
  }
  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */


  function upgradeAllRegisteredInternal() {
    for (var n = 0; n < registeredComponents_.length; n++) {
      upgradeDomInternal(registeredComponents_[n].className);
    }
  }
  /**
   * Check the component for the downgrade method.
   * Execute if found.
   * Remove component from createdComponents list.
   *
   * @param {?componentHandler.Component} component
   */


  function deconstructComponentInternal(component) {
    if (component) {
      var componentIndex = createdComponents_.indexOf(component);
      createdComponents_.splice(componentIndex, 1);
      var upgrades = component.element_.getAttribute('data-upgraded').split(',');
      var componentPlace = upgrades.indexOf(component[componentConfigProperty_].classAsString);
      upgrades.splice(componentPlace, 1);
      component.element_.setAttribute('data-upgraded', upgrades.join(','));
      var ev = createEvent_('mdl-componentdowngraded', true, false);
      component.element_.dispatchEvent(ev);
    }
  }
  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */


  function downgradeNodesInternal(nodes) {
    /**
     * Auxiliary function to downgrade a single node.
     * @param  {!Node} node the node to be downgraded
     */
    var downgradeNode = function downgradeNode(node) {
      createdComponents_.filter(function (item) {
        return item.element_ === node;
      }).forEach(deconstructComponentInternal);
    };

    if (nodes instanceof Array || nodes instanceof NodeList) {
      for (var n = 0; n < nodes.length; n++) {
        downgradeNode(nodes[n]);
      }
    } else if (nodes instanceof Node) {
      downgradeNode(nodes);
    } else {
      throw new Error('Invalid argument provided to downgrade MDL nodes.');
    }
  } // Now return the functions that should be made public with their publicly
  // facing names...


  return {
    upgradeDom: upgradeDomInternal,
    upgradeElement: upgradeElementInternal,
    upgradeElements: upgradeElementsInternal,
    upgradeAllRegistered: upgradeAllRegisteredInternal,
    registerUpgradedCallback: registerUpgradedCallbackInternal,
    register: registerInternal,
    downgradeElements: downgradeNodesInternal
  };
}();
/**
 * Describes the type of a registered component type managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   constructor: Function,
 *   classAsString: string,
 *   cssClass: string,
 *   widget: (string|boolean|undefined)
 * }}
 */


componentHandler.ComponentConfigPublic; // jshint ignore:line

/**
 * Describes the type of a registered component type managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   constructor: !Function,
 *   className: string,
 *   cssClass: string,
 *   widget: (string|boolean),
 *   callbacks: !Array<function(!HTMLElement)>
 * }}
 */

componentHandler.ComponentConfig; // jshint ignore:line

/**
 * Created component (i.e., upgraded element) type as managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   element_: !HTMLElement,
 *   className: string,
 *   classAsString: string,
 *   cssClass: string,
 *   widget: string
 * }}
 */

componentHandler.Component; // jshint ignore:line
// Export all symbols, for the benefit of Closure compiler.
// No effect on uncompiled code.

componentHandler['upgradeDom'] = componentHandler.upgradeDom;
componentHandler['upgradeElement'] = componentHandler.upgradeElement;
componentHandler['upgradeElements'] = componentHandler.upgradeElements;
componentHandler['upgradeAllRegistered'] = componentHandler.upgradeAllRegistered;
componentHandler['registerUpgradedCallback'] = componentHandler.registerUpgradedCallback;
componentHandler['register'] = componentHandler.register;
componentHandler['downgradeElements'] = componentHandler.downgradeElements;
window.componentHandler = componentHandler;
window['componentHandler'] = componentHandler;
window.addEventListener('load', function () {
  'use strict';
  /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
   * components requiring JavaScript.
   */

  if ('classList' in document.createElement('div') && 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
    document.documentElement.classList.add('mdl-js');
    componentHandler.upgradeAllRegistered();
  } else {
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.upgradeElement = function () {};
    /**
     * Dummy function to avoid JS errors.
     */


    componentHandler.register = function () {};
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
(function () {
  'use strict';
  /**
   * Class constructor for Button MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @param {HTMLElement} element The element that will be upgraded.
   */

  var MaterialButton = function MaterialButton(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialButton'] = MaterialButton;
  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */

  MaterialButton.prototype.Constant_ = {// None for now.
  };
  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */

  MaterialButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
  };
  /**
   * Handle blur of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */

  MaterialButton.prototype.blurHandler_ = function (event) {
    if (event) {
      this.element_.blur();
    }
  }; // Public methods.

  /**
   * Disable button.
   *
   * @public
   */


  MaterialButton.prototype.disable = function () {
    this.element_.disabled = true;
  };

  MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;
  /**
   * Enable button.
   *
   * @public
   */

  MaterialButton.prototype.enable = function () {
    this.element_.disabled = false;
  };

  MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;
  /**
   * Initialize element.
   */

  MaterialButton.prototype.init = function () {
    if (this.element_) {
      if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
        var rippleContainer = document.createElement('span');
        rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
        this.rippleElement_ = document.createElement('span');
        this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
        rippleContainer.appendChild(this.rippleElement_);
        this.boundRippleBlurHandler = this.blurHandler_.bind(this);
        this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
        this.element_.appendChild(rippleContainer);
      }

      this.boundButtonBlurHandler = this.blurHandler_.bind(this);
      this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
      this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialButton,
    classAsString: 'MaterialButton',
    cssClass: 'mdl-js-button',
    widget: true
  });
})();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
(function () {
  'use strict';
  /**
   * Class constructor for Progress MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */

  var MaterialProgress = function MaterialProgress(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialProgress'] = MaterialProgress;
  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */

  MaterialProgress.prototype.Constant_ = {};
  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */

  MaterialProgress.prototype.CssClasses_ = {
    INDETERMINATE_CLASS: 'mdl-progress__indeterminate'
  };
  /**
   * Set the current progress of the progressbar.
   *
   * @param {number} p Percentage of the progress (0-100)
   * @public
   */

  MaterialProgress.prototype.setProgress = function (p) {
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
      return;
    }

    this.progressbar_.style.width = p + '%';
  };

  MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;
  /**
   * Set the current progress of the buffer.
   *
   * @param {number} p Percentage of the buffer (0-100)
   * @public
   */

  MaterialProgress.prototype.setBuffer = function (p) {
    this.bufferbar_.style.width = p + '%';
    this.auxbar_.style.width = 100 - p + '%';
  };

  MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;
  /**
   * Initialize element.
   */

  MaterialProgress.prototype.init = function () {
    if (this.element_) {
      var el = document.createElement('div');
      el.className = 'progressbar bar bar1';
      this.element_.appendChild(el);
      this.progressbar_ = el;
      el = document.createElement('div');
      el.className = 'bufferbar bar bar2';
      this.element_.appendChild(el);
      this.bufferbar_ = el;
      el = document.createElement('div');
      el.className = 'auxbar bar bar3';
      this.element_.appendChild(el);
      this.auxbar_ = el;
      this.progressbar_.style.width = '0%';
      this.bufferbar_.style.width = '100%';
      this.auxbar_.style.width = '0%';
      this.element_.classList.add('is-upgraded');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialProgress,
    classAsString: 'MaterialProgress',
    cssClass: 'mdl-js-progress',
    widget: true
  });
})();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
(function () {
  'use strict';
  /**
   * Class constructor for Spinner MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @param {HTMLElement} element The element that will be upgraded.
   * @constructor
   */

  var MaterialSpinner = function MaterialSpinner(element) {
    this.element_ = element; // Initialize instance.

    this.init();
  };

  window['MaterialSpinner'] = MaterialSpinner;
  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */

  MaterialSpinner.prototype.Constant_ = {
    MDL_SPINNER_LAYER_COUNT: 4
  };
  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */

  MaterialSpinner.prototype.CssClasses_ = {
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
    MDL_SPINNER_LEFT: 'mdl-spinner__left',
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'
  };
  /**
   * Auxiliary method to create a spinner layer.
   *
   * @param {number} index Index of the layer to be created.
   * @public
   */

  MaterialSpinner.prototype.createLayer = function (index) {
    var layer = document.createElement('div');
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
    var leftClipper = document.createElement('div');
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
    var gapPatch = document.createElement('div');
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
    var rightClipper = document.createElement('div');
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
    var circleOwners = [leftClipper, gapPatch, rightClipper];

    for (var i = 0; i < circleOwners.length; i++) {
      var circle = document.createElement('div');
      circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
      circleOwners[i].appendChild(circle);
    }

    layer.appendChild(leftClipper);
    layer.appendChild(gapPatch);
    layer.appendChild(rightClipper);
    this.element_.appendChild(layer);
  };

  MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;
  /**
   * Stops the spinner animation.
   * Public method for users who need to stop the spinner for any reason.
   *
   * @public
   */

  MaterialSpinner.prototype.stop = function () {
    this.element_.classList.remove('is-active');
  };

  MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;
  /**
   * Starts the spinner animation.
   * Public method for users who need to manually start the spinner for any reason
   * (instead of just adding the 'is-active' class to their markup).
   *
   * @public
   */

  MaterialSpinner.prototype.start = function () {
    this.element_.classList.add('is-active');
  };

  MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;
  /**
   * Initialize element.
   */

  MaterialSpinner.prototype.init = function () {
    if (this.element_) {
      for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
        this.createLayer(i);
      }

      this.element_.classList.add('is-upgraded');
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialSpinner,
    classAsString: 'MaterialSpinner',
    cssClass: 'mdl-js-spinner',
    widget: true
  });
})();

/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
(function () {
  'use strict';
  /**
   * Class constructor for Textfield MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */

  var MaterialTextfield = function MaterialTextfield(element) {
    this.element_ = element;
    this.maxRows = this.Constant_.NO_MAX_ROWS; // Initialize instance.

    this.init();
  };

  window['MaterialTextfield'] = MaterialTextfield;
  /**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */

  MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1,
    MAX_ROWS_ATTRIBUTE: 'maxrows'
  };
  /**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */

  MaterialTextfield.prototype.CssClasses_ = {
    LABEL: 'mdl-textfield__label',
    INPUT: 'mdl-textfield__input',
    IS_DIRTY: 'is-dirty',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_INVALID: 'is-invalid',
    IS_UPGRADED: 'is-upgraded',
    HAS_PLACEHOLDER: 'has-placeholder'
  };
  /**
   * Handle input being entered.
   *
   * @param {Event} event The event that fired.
   * @private
   */

  MaterialTextfield.prototype.onKeyDown_ = function (event) {
    var currentRowCount = event.target.value.split('\n').length;

    if (event.keyCode === 13) {
      if (currentRowCount >= this.maxRows) {
        event.preventDefault();
      }
    }
  };
  /**
   * Handle focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */


  MaterialTextfield.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
  };
  /**
   * Handle lost focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */


  MaterialTextfield.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
  };
  /**
   * Handle reset event from out side.
   *
   * @param {Event} event The event that fired.
   * @private
   */


  MaterialTextfield.prototype.onReset_ = function (event) {
    this.updateClasses_();
  };
  /**
   * Handle class updates.
   *
   * @private
   */


  MaterialTextfield.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkValidity();
    this.checkDirty();
    this.checkFocus();
  }; // Public methods.

  /**
   * Check the disabled state and update field accordingly.
   *
   * @public
   */


  MaterialTextfield.prototype.checkDisabled = function () {
    if (this.input_.disabled) {
      this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
  };

  MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;
  /**
  * Check the focus state and update field accordingly.
  *
  * @public
  */

  MaterialTextfield.prototype.checkFocus = function () {
    if (Boolean(this.element_.querySelector(':focus'))) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
    }
  };

  MaterialTextfield.prototype['checkFocus'] = MaterialTextfield.prototype.checkFocus;
  /**
   * Check the validity state and update field accordingly.
   *
   * @public
   */

  MaterialTextfield.prototype.checkValidity = function () {
    if (this.input_.validity) {
      if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
      } else {
        this.element_.classList.add(this.CssClasses_.IS_INVALID);
      }
    }
  };

  MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;
  /**
   * Check the dirty state and update field accordingly.
   *
   * @public
   */

  MaterialTextfield.prototype.checkDirty = function () {
    if (this.input_.value && this.input_.value.length > 0) {
      this.element_.classList.add(this.CssClasses_.IS_DIRTY);
    } else {
      this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
    }
  };

  MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;
  /**
   * Disable text field.
   *
   * @public
   */

  MaterialTextfield.prototype.disable = function () {
    this.input_.disabled = true;
    this.updateClasses_();
  };

  MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;
  /**
   * Enable text field.
   *
   * @public
   */

  MaterialTextfield.prototype.enable = function () {
    this.input_.disabled = false;
    this.updateClasses_();
  };

  MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;
  /**
   * Update text field value.
   *
   * @param {string} value The value to which to set the control (optional).
   * @public
   */

  MaterialTextfield.prototype.change = function (value) {
    this.input_.value = value || '';
    this.updateClasses_();
  };

  MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;
  /**
   * Initialize element.
   */

  MaterialTextfield.prototype.init = function () {
    if (this.element_) {
      this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
      this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);

      if (this.input_) {
        if (this.input_.hasAttribute(
        /** @type {string} */
        this.Constant_.MAX_ROWS_ATTRIBUTE)) {
          this.maxRows = parseInt(this.input_.getAttribute(
          /** @type {string} */
          this.Constant_.MAX_ROWS_ATTRIBUTE), 10);

          if (isNaN(this.maxRows)) {
            this.maxRows = this.Constant_.NO_MAX_ROWS;
          }
        }

        if (this.input_.hasAttribute('placeholder')) {
          this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER);
        }

        this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
        this.boundFocusHandler = this.onFocus_.bind(this);
        this.boundBlurHandler = this.onBlur_.bind(this);
        this.boundResetHandler = this.onReset_.bind(this);
        this.input_.addEventListener('input', this.boundUpdateClassesHandler);
        this.input_.addEventListener('focus', this.boundFocusHandler);
        this.input_.addEventListener('blur', this.boundBlurHandler);
        this.input_.addEventListener('reset', this.boundResetHandler);

        if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
          // TODO: This should handle pasting multi line text.
          // Currently doesn't.
          this.boundKeyDownHandler = this.onKeyDown_.bind(this);
          this.input_.addEventListener('keydown', this.boundKeyDownHandler);
        }

        var invalid = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);

        if (invalid) {
          this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }

        if (this.input_.hasAttribute('autofocus')) {
          this.element_.focus();
          this.checkFocus();
        }
      }
    }
  }; // The component registers itself. It can assume componentHandler is available
  // in the global scope.


  componentHandler.register({
    constructor: MaterialTextfield,
    classAsString: 'MaterialTextfield',
    cssClass: 'mdl-js-textfield',
    widget: true
  });
})();

/***/ }),
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

/***/ })
/******/ ]));
//# sourceMappingURL=Login.bundle.js.map