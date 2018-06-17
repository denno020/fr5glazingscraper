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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class CeilingHeight
 */
var CeilingHeight = function () {
  function CeilingHeight(lineData) {
    _classCallCheck(this, CeilingHeight);

    this.zoneId = '';
    this.height = '';

    var regex = new RegExp(CeilingHeight.Regex);
    var data = regex.exec(lineData);

    this.zoneId = data[1].trim();
    this.height = data[3].trim();
  }

  _createClass(CeilingHeight, [{
    key: 'getZoneId',
    value: function getZoneId() {
      return this.zoneId;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        zoneId: this.getZoneId(),
        height: this.getHeight()
      };
    }
  }], [{
    key: 'Build',
    value: function Build(data) {
      return new CeilingHeight(data);
    }
  }]);

  return CeilingHeight;
}();

CeilingHeight.Regex = '^ 3(.{3})700(.{6})(.{6})(.{6})(.{6})';
exports.default = CeilingHeight;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Break the Horizontal Shading Scheme data into its various parts
 */
var HorizontalShadingScheme = function () {

  /**
   * Constants that map the various bits of data to the section of regex
   */
  function HorizontalShadingScheme(lineData) {
    _classCallCheck(this, HorizontalShadingScheme);

    this.id = '';
    this.eaveProjection = '';
    this.eaveOffset = '';
    this.pergolaProjection = '';
    this.pergolaOffset = '';
    this.projection = '';

    var regex = new RegExp(HorizontalShadingScheme.Regex);
    var data = regex.exec(lineData);

    this.id = data[HorizontalShadingScheme.CONST__ID].trim();
    this.eaveProjection = data[HorizontalShadingScheme.CONST__EAVE_PROJECTION].trim();
    this.eaveOffset = data[HorizontalShadingScheme.CONST__EAVE_OFFSET].trim();
    this.pergolaProjection = data[HorizontalShadingScheme.CONST__PERGOLA_PROJECTION].trim();
    this.pergolaOffset = data[HorizontalShadingScheme.CONST__PERGOLA_OFFSET].trim();
    this.projection = this.getProjection();
  }

  /**
   * Determine the highest projection value and return
   *
   * @returns {string}
   */


  _createClass(HorizontalShadingScheme, [{
    key: 'getProjection',
    value: function getProjection() {
      return parseFloat(this.getEaveProjection()) > parseFloat(this.getPergolaProjection()) ? this.getEaveProjection() : this.getPergolaProjection();
    }
  }, {
    key: 'getId',
    value: function getId() {
      return this.id;
    }
  }, {
    key: 'getEaveOffset',
    value: function getEaveOffset() {
      return this.eaveOffset;
    }
  }, {
    key: 'getEaveProjection',
    value: function getEaveProjection() {
      return this.eaveProjection;
    }
  }, {
    key: 'getPergolaOffset',
    value: function getPergolaOffset() {
      return this.pergolaOffset;
    }
  }, {
    key: 'getPergolaProjection',
    value: function getPergolaProjection() {
      return this.pergolaProjection;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        id: this.getId(),
        projection: this.getProjection(),
        offset: {
          eave: this.getEaveOffset(),
          pergola: this.getPergolaOffset()
        }
      };
    }
  }], [{
    key: 'Build',
    value: function Build(data) {
      return new HorizontalShadingScheme(data);
    }
  }]);

  return HorizontalShadingScheme;
}();

HorizontalShadingScheme.CONST__ID = 1;
HorizontalShadingScheme.CONST__EAVE_PROJECTION = 2;
HorizontalShadingScheme.CONST__EAVE_OFFSET = 3;
HorizontalShadingScheme.CONST__PERGOLA_PROJECTION = 6;
HorizontalShadingScheme.CONST__PERGOLA_OFFSET = 7;
HorizontalShadingScheme.Regex = '^ 1 20(.{3})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})$';
exports.default = HorizontalShadingScheme;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Break a Window construction data line into its various parts
 */
var WindowConstruction = function () {
  function WindowConstruction(lineData) {
    _classCallCheck(this, WindowConstruction);

    this.id = '';
    this.name = '';

    var regex = new RegExp(WindowConstruction.Regex);
    var data = regex.exec(lineData);

    this.id = data[1].trim();
    this.name = data[2].trim();
  }

  _createClass(WindowConstruction, [{
    key: 'toObject',
    value: function toObject() {
      return {
        id: this.id,
        name: this.name
      };
    }
  }], [{
    key: 'Build',
    value: function Build(data) {
      return new WindowConstruction(data);
    }
  }]);

  return WindowConstruction;
}();

WindowConstruction.CONST__ID = 3;
WindowConstruction.CONST__NAME = '';
WindowConstruction.Regex = '^ \\d(.{3})[ \\d]*([a-zA-Z][a-zA-Z\\-\\d]{9}[ a-zA-Z][a-zA-Z]?)';
exports.default = WindowConstruction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class ZoneDetail
 */
var ZoneDetail = function () {
  function ZoneDetail(lineData) {
    _classCallCheck(this, ZoneDetail);

    this.id = '';
    this.name = '';

    var regex = new RegExp(ZoneDetail.Regex);
    var data = regex.exec(lineData);

    this.id = data[1].trim();
    this.name = data[2].trim();
  }

  _createClass(ZoneDetail, [{
    key: 'getId',
    value: function getId() {
      return this.id;
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        id: this.getId(),
        name: this.getName()
      };
    }
  }], [{
    key: 'Build',
    value: function Build(data) {
      return new ZoneDetail(data);
    }
  }]);

  return ZoneDetail;
}();

ZoneDetail.Regex = '^C Z00?(\\d{1,3}) => (.*)$';
exports.default = ZoneDetail;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class to parse window information inside a zone section
 */
var ZoneWindow = function () {
  // This value isn't used, just here to it can hold an empty cell in the output CSV
  function ZoneWindow(lineData) {
    _classCallCheck(this, ZoneWindow);

    this.zoneId = '';
    this.windowId = '';
    this.height = '';
    this.width = '';
    this.azimuth = '';
    this.headHeight = '';
    this.horizShading1Id = '';
    this.horizShading2Id = '';

    var regex = new RegExp(ZoneWindow.Regex);
    var data = regex.exec(lineData);

    this.zoneId = data[ZoneWindow.CONST__ZONE_ID].trim();
    this.windowId = data[ZoneWindow.CONST__WINDOW_ID].trim();
    this.height = data[ZoneWindow.CONST__HEIGHT].trim();
    this.width = data[ZoneWindow.CONST__WIDTH].trim();
    this.azimuth = data[ZoneWindow.CONST__AZIMUTH].trim();
    this.horizShading1Id = data[ZoneWindow.CONST__HORZ_SHADING_1].trim();
    this.horizShading2Id = data[ZoneWindow.CONST__HORZ_SHADING_2].trim();
  }

  _createClass(ZoneWindow, [{
    key: 'getZoneId',
    value: function getZoneId() {
      return this.zoneId;
    }
  }, {
    key: 'getWindowId',
    value: function getWindowId() {
      return this.windowId;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: 'getAzimuth',
    value: function getAzimuth() {
      return this.azimuth;
    }
  }, {
    key: 'getHeadHeight',
    value: function getHeadHeight() {
      return this.headHeight;
    }
  }, {
    key: 'getHorizShading1Id',
    value: function getHorizShading1Id() {
      return this.horizShading1Id;
    }
  }, {
    key: 'getHorizShading2Id',
    value: function getHorizShading2Id() {
      return this.horizShading2Id;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        zoneId: this.getZoneId(),
        windowId: this.getWindowId(),
        height: this.getHeight(),
        width: this.getWidth(),
        azimuth: this.getAzimuth(),
        headHeight: this.getHeadHeight(),
        horizShading1Id: this.getHorizShading1Id(),
        horizShading2Id: this.getHorizShading2Id()
      };
    }
  }], [{
    key: 'Build',
    value: function Build(data) {
      return new ZoneWindow(data);
    }
  }]);

  return ZoneWindow;
}();

ZoneWindow.CONST__ZONE_ID = 1;
ZoneWindow.CONST__WINDOW_ID = 2;
ZoneWindow.CONST__HEIGHT = 6;
ZoneWindow.CONST__WIDTH = 7;
ZoneWindow.CONST__AZIMUTH = 8;
ZoneWindow.CONST__HORZ_SHADING_1 = 9;
ZoneWindow.CONST__HORZ_SHADING_2 = 10;
ZoneWindow.Regex = '^ 3(.{3})(( (10)|(  [0-9])))(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})(.{6})';
exports.default = ZoneWindow;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class Orientation
 */
var Orientation = function () {
  function Orientation() {
    _classCallCheck(this, Orientation);
  }

  _createClass(Orientation, null, [{
    key: 'Get',


    /**
     * Get string representation of azimuth
     *
     * @param {string} azimuth   Azimuth value being changed to orientation
     * @param {string} reference Reference azimuth for North
     *
     * @returns {string|boolean}
     */
    value: function Get(azimuth, reference) {
      var azimuthInt = parseInt(azimuth, 10);

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__N_E)) {
        return 'NE';
      }

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__E)) {
        return 'E';
      }

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__S_E)) {
        return 'SE';
      }

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__S)) {
        return 'S';
      }

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__S_W)) {
        return 'SW';
      }

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__W)) {
        return 'W';
      }

      if (Orientation.Is(azimuthInt, reference, Orientation.CONST__N_W)) {
        return 'NW';
      }

      return 'N';
    }
  }, {
    key: 'Is',
    value: function Is(azimuth, reference, limits) {
      var vector = {
        upper: Orientation.Normalize(parseInt(reference, 10) + limits.upper),
        lower: Orientation.Normalize(parseInt(reference, 10) + limits.lower)
      };

      if (azimuth > vector.lower && azimuth < vector.upper) {
        return true;
      }

      return false;
    }

    /**
     * Normalize a value to be within the 0-360 range
     *
     * @param {int} number
     *
     * @returns {int}
     */

  }, {
    key: 'Normalize',
    value: function Normalize(number) {
      if (number < 0) {
        return 360 - Math.abs(number);
      }

      if (number > 360) {
        return number - 360;
      }

      return number;
    }
  }]);

  return Orientation;
}();

Orientation.CONST__N = { lower: 22, upper: 338 };
Orientation.CONST__N_E = { lower: 23, upper: 67 };
Orientation.CONST__E = { lower: 68, upper: 112 };
Orientation.CONST__S_E = { lower: 113, upper: 187 };
Orientation.CONST__S = { lower: 188, upper: 202 };
Orientation.CONST__S_W = { lower: 203, upper: 247 };
Orientation.CONST__W = { lower: 248, upper: 292 };
Orientation.CONST__N_W = { lower: 293, upper: 337 };
exports.default = Orientation;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CeilingHeight = __webpack_require__(0);

var _CeilingHeight2 = _interopRequireDefault(_CeilingHeight);

var _HorizontalShadingScheme = __webpack_require__(1);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _LooksLike = __webpack_require__(7);

var _LooksLike2 = _interopRequireDefault(_LooksLike);

var _WindowConstruction = __webpack_require__(2);

var _WindowConstruction2 = _interopRequireDefault(_WindowConstruction);

var _ZoneWindow = __webpack_require__(4);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _ZoneDetail = __webpack_require__(3);

var _ZoneDetail2 = _interopRequireDefault(_ZoneDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class ScratchFileLine
 */
var ScratchFileLine = function () {
  function ScratchFileLine() {
    _classCallCheck(this, ScratchFileLine);
  }

  _createClass(ScratchFileLine, null, [{
    key: 'Build',


    /**
     * Build a data line into the appropriate class object
     *
     * @param {string} data The data to be parsed
     *
     * @return {Object|boolean}
     */
    value: function Build(data) {
      if (_LooksLike2.default.ShadingScheme(data)) {
        return _HorizontalShadingScheme2.default.Build(data);
      }

      if (_LooksLike2.default.CeilingHeight(data)) {
        return _CeilingHeight2.default.Build(data);
      }

      if (_LooksLike2.default.WindowConstruction(data)) {
        return _WindowConstruction2.default.Build(data);
      }

      if (_LooksLike2.default.ZoneWindow(data)) {
        return _ZoneWindow2.default.Build(data);
      }

      if (_LooksLike2.default.ZoneDetail(data)) {
        return _ZoneDetail2.default.Build(data);
      }

      return false;
    }
  }]);

  return ScratchFileLine;
}();

exports.default = ScratchFileLine;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HorizontalShadingScheme = __webpack_require__(1);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _WindowConstruction2 = __webpack_require__(2);

var _WindowConstruction3 = _interopRequireDefault(_WindowConstruction2);

var _ZoneWindow2 = __webpack_require__(4);

var _ZoneWindow3 = _interopRequireDefault(_ZoneWindow2);

var _CeilingHeight2 = __webpack_require__(0);

var _CeilingHeight3 = _interopRequireDefault(_CeilingHeight2);

var _ZoneDetail2 = __webpack_require__(3);

var _ZoneDetail3 = _interopRequireDefault(_ZoneDetail2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class to compare a data string and indicate what type of data it looks like
 */
var LooksLike = function () {
  function LooksLike() {
    _classCallCheck(this, LooksLike);
  }

  _createClass(LooksLike, null, [{
    key: 'ShadingScheme',


    /**
     * Test if the data line looks like a horizontal shading scheme
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */
    value: function ShadingScheme(lineData) {
      return LooksLike.Test(lineData, _HorizontalShadingScheme2.default.Regex);
    }

    /**
     * Test if the data line looks like a window construction
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */

  }, {
    key: 'WindowConstruction',
    value: function WindowConstruction(lineData) {
      return LooksLike.Test(lineData, _WindowConstruction3.default.Regex);
    }

    /**
     * Test if the data line looks like a zone window
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */

  }, {
    key: 'ZoneWindow',
    value: function ZoneWindow(lineData) {
      return LooksLike.Test(lineData, _ZoneWindow3.default.Regex);
    }

    /**
     * Test if the data line looks like a ceiling height line
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */

  }, {
    key: 'CeilingHeight',
    value: function CeilingHeight(lineData) {
      return LooksLike.Test(lineData, _CeilingHeight3.default.Regex);
    }

    /**
     * Test if the data line looks like a zone detail line
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */

  }, {
    key: 'ZoneDetail',
    value: function ZoneDetail(lineData) {
      return LooksLike.Test(lineData, _ZoneDetail3.default.Regex);
    }

    /**
     * Run the regex test against the data
     *
     * @param {string} data  The data to test
     * @param {string} regex The regex pattern to test with
     *
     * @returns {boolean}
     */

  }, {
    key: 'Test',
    value: function Test(data, regex) {
      var regexp = new RegExp(regex);
      return regexp.test(data);
    }

    /**
     * Determine what the data line looks like
     *
     * @param {string} data The data line to test
     *
     * @returns {string|boolean}
     */

  }, {
    key: 'ReverseLookup',
    value: function ReverseLookup(data) {
      if (LooksLike.ShadingScheme(data)) {
        return 'HorizontalShadingScheme';
      }

      if (LooksLike.CeilingHeight(data)) {
        return 'CeilingHeight';
      }

      if (LooksLike.WindowConstruction(data)) {
        return 'WindowConstruction';
      }

      if (LooksLike.ZoneWindow(data)) {
        return 'ZoneWindow';
      }

      if (LooksLike.ZoneDetail(data)) {
        return 'ZoneDetail';
      }

      return false;
    }
  }]);

  return LooksLike;
}();

exports.default = LooksLike;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A class to handle parsing an entire scratch file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _ScratchFileLine = __webpack_require__(6);

var _ScratchFileLine2 = _interopRequireDefault(_ScratchFileLine);

var _LooksLike = __webpack_require__(7);

var _LooksLike2 = _interopRequireDefault(_LooksLike);

var _WindowConstruction = __webpack_require__(2);

var _WindowConstruction2 = _interopRequireDefault(_WindowConstruction);

var _ZoneWindow = __webpack_require__(4);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _HorizontalShadingScheme = __webpack_require__(1);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _CeilingHeight = __webpack_require__(0);

var _CeilingHeight2 = _interopRequireDefault(_CeilingHeight);

var _ZoneDetail = __webpack_require__(3);

var _ZoneDetail2 = _interopRequireDefault(_ZoneDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parser = function () {

  /**
   * Constructor
   *
   * @param {array} file A scratchfile array
   */
  function Parser(file) {
    _classCallCheck(this, Parser);

    this.windowConstructions = [];
    this.zoneWindows = [];
    this.zoneDetails = [];
    this.shadingSchemes = [];
    this.ceilingHeights = [];

    this.file = file;
  }

  _createClass(Parser, [{
    key: 'process',
    value: function process() {
      var dataLines = this.getDataLines();

      // Filter the arrays to only include the related data, then build the data line into the appropriate class
      this.windowConstructions = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'WindowConstruction';
      }).map(function (window) {
        return _WindowConstruction2.default.Build(window);
      });

      this.zoneWindows = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'ZoneWindow';
      }).map(function (zoneWindow) {
        return _ZoneWindow2.default.Build(zoneWindow);
      });

      this.shadingSchemes = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'HorizontalShadingScheme';
      }).map(function (shading) {
        return _HorizontalShadingScheme2.default.Build(shading);
      });

      this.ceilingHeights = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'CeilingHeight';
      }).map(function (ceilingHeight) {
        return _CeilingHeight2.default.Build(ceilingHeight);
      });

      this.zoneDetails = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'ZoneDetail';
      }).map(function (zoneDetail) {
        return _ZoneDetail2.default.Build(zoneDetail);
      });
    }

    /**
     * Get the lines of data that match a type we're interested in
     *
     * @returns {array}
     */

  }, {
    key: 'getDataLines',
    value: function getDataLines() {
      return this.file.filter(function (line) {
        return _ScratchFileLine2.default.Build(line) !== false;
      });
    }
  }, {
    key: 'getWindowConstructions',
    value: function getWindowConstructions() {
      return this.windowConstructions;
    }
  }, {
    key: 'getZoneWindows',
    value: function getZoneWindows() {
      return this.zoneWindows;
    }
  }, {
    key: 'getShading',
    value: function getShading() {
      return this.shadingSchemes;
    }
  }, {
    key: 'getCeilingHeights',
    value: function getCeilingHeights() {
      return this.ceilingHeights;
    }
  }, {
    key: 'getZoneDetails',
    value: function getZoneDetails() {
      return this.zoneDetails;
    }

    /**
     * Return all data in an object that can be deconstructed
     *
     * @returns {Object}
     */

  }, {
    key: 'getAllData',
    value: function getAllData() {
      return {
        windowConstructions: this.getWindowConstructions(),
        zoneWindows: this.getZoneWindows(),
        shading: this.getShading(),
        ceilingHeights: this.getCeilingHeights(),
        zoneDetails: this.getZoneDetails()
      };
    }
  }]);

  return Parser;
}();

exports.default = Parser;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Orientation = __webpack_require__(5);

var _Orientation2 = _interopRequireDefault(_Orientation);

var _utils = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class ResultsBuilder
 *
 * This class will take various arrays of data lines, build them into their appropriate classes,
 * link them through various ID's, and then create multiple output lines
 */

var ResultsBuilder = function () {
  function ResultsBuilder() {
    _classCallCheck(this, ResultsBuilder);
  }

  _createClass(ResultsBuilder, null, [{
    key: 'Compile',


    /**
     * Compile the various arrays into a single array
     *
     * @param windowConstructions
     * @param zoneWindows
     * @param shading
     * @param ceilingHeights
     * @param zoneDetails
     *
     * @returns {array}
     *
     * @constructor
     */
    value: function Compile(_ref) {
      var windowConstructions = _ref.windowConstructions,
          zoneWindows = _ref.zoneWindows,
          shading = _ref.shading,
          ceilingHeights = _ref.ceilingHeights,
          zoneDetails = _ref.zoneDetails;

      return zoneDetails.map(function (zone) {
        // Filter the zone windows for only windows in this zone, and then map the window construction, shading and ceiling height details
        var windows = zoneWindows.filter(function (window) {
          return window.zoneId === zone.id;
        }).map(function (zoneWindow) {
          var construction = windowConstructions.filter(function (cons) {
            return cons.id === zoneWindow.getWindowId();
          })[0];
          var shadingScheme = shading.filter(function (shade) {
            return shade.getId() === zoneWindow.getHorizShading1Id() || shade.getId() === zoneWindow.getHorizShading2Id();
          });
          var ceilingHeight = ceilingHeights.filter(function (ceiling) {
            return ceiling.getZoneId() === zone.getId();
          })[0];

          return _extends({}, zoneWindow, {
            construction: construction,
            shading: shadingScheme,
            ceilingHeight: ceilingHeight
          });
        });

        return {
          id: zone.getId(),
          name: zone.getName(),
          windows: windows
        };
      });
    }

    /**
     * Build the zones array into a flatt array ready for conversion to CSV
     *
     * @param {array}  zones     The zones array created in ResultsBuilder.Compile()
     * @param {string} reference Reference North azimuth
     *
     * @returns {array}
     */

  }, {
    key: 'Build',
    value: function Build(zones, reference) {
      var csv = zones.map(function (zone) {
        var windowCsv = zone.windows.map(function (window) {
          var projection = '';
          var eaveOffset = '';
          var pergolaOffset = '';
          if (window.shading.length > 0) {
            projection = window.shading[0].projection;
            eaveOffset = window.shading[0].eaveOffset;
            pergolaOffset = window.shading[0].pergolaOffset;
          }

          return [zone.name, _Orientation2.default.Get(window.azimuth, reference), window.height, window.width, projection, window.headHeight, window.construction.name, window.ceilingHeight.height, eaveOffset, pergolaOffset];
        });

        // An empty windowCsv needs to be returned inside an array itself, in order to work with the flatten function
        return windowCsv.length > 0 ? windowCsv : [windowCsv];
      });

      return (0, _utils.flatten)(csv);
    }
  }]);

  return ResultsBuilder;
}();

exports.default = ResultsBuilder;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var worker = new Worker('js/worker.js');

var createPreview = function createPreview(results) {
  var template = document.getElementById('results-preview-template');
  var instance = document.importNode(template.content, true);

  var tableBody = instance.querySelector('tbody');

  results.forEach(function (result) {
    var tableRow = document.createElement('tr');
    result.forEach(function (res) {
      var tableCell = document.createElement('td');
      tableCell.innerText = res;
      tableRow.appendChild(tableCell);
    });

    tableBody.appendChild(tableRow);
  });

  document.querySelector('.results-preview').appendChild(instance);
};

/**
 * Create the download file, and download it to the users browser
 *
 * @param {array} results
 *
 * @returns {null}
 */
var createDownload = function createDownload(results) {
  var csvContent = 'data:text/csv;charset=utf-8,';
  results.forEach(function (rowArray) {
    if (rowArray.length > 0) {
      var row = rowArray.join(',');
      csvContent += row + '\n';
    }
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'glazing.csv');
  link.hidden = true;
  link.innerHTML = 'Click Here to download';
  document.body.appendChild(link); // Required for FF

  link.click();
};

document.querySelector('#process').addEventListener('click', function () {
  var fileSelector = document.querySelector('#fileToUpload');

  if (document.querySelector('#north-reference').value === '') {
    alert('Please enter a reference north azimuth');
    return false;
  }

  if (fileSelector.files.length === 0) {
    alert('Please select a scratch file');
    return false;
  }

  var file = fileSelector.files[0];
  var reference = document.querySelector('#north-reference').value;

  worker.postMessage({ file: file, reference: reference });

  worker.onmessage = function (_ref) {
    var data = _ref.data;

    createPreview(data.results);

    document.querySelector('#save').addEventListener('click', function () {
      createDownload(data.results);
    });
  };
});

// Clear preview results when the scratch file changes
document.querySelector('#fileToUpload').onchange = function () {
  document.querySelector('.results-preview').innerHTML = '';
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Flatten array 1 level
 *
 * @param {array} arr Arrya to flatten
 *
 * @returns {array}
 */
var flatten = exports.flatten = function flatten(arr) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, _toConsumableArray(arr));
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(10);
__webpack_require__(5);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(6);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJmMDZiZTBiNjc4YzY5ZmE4MDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NlaWxpbmdIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0hvcml6b250YWxTaGFkaW5nU2NoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XaW5kb3dDb25zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1pvbmVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1pvbmVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09yaWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JhdGNoRmlsZUxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL0xvb2tzTGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGFyc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9SZXN1bHRzQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNlaWxpbmdIZWlnaHQiLCJsaW5lRGF0YSIsInpvbmVJZCIsImhlaWdodCIsInJlZ2V4IiwiUmVnRXhwIiwiUmVnZXgiLCJkYXRhIiwiZXhlYyIsInRyaW0iLCJnZXRab25lSWQiLCJnZXRIZWlnaHQiLCJIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSIsImlkIiwiZWF2ZVByb2plY3Rpb24iLCJlYXZlT2Zmc2V0IiwicGVyZ29sYVByb2plY3Rpb24iLCJwZXJnb2xhT2Zmc2V0IiwicHJvamVjdGlvbiIsIkNPTlNUX19JRCIsIkNPTlNUX19FQVZFX1BST0pFQ1RJT04iLCJDT05TVF9fRUFWRV9PRkZTRVQiLCJDT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OIiwiQ09OU1RfX1BFUkdPTEFfT0ZGU0VUIiwiZ2V0UHJvamVjdGlvbiIsInBhcnNlRmxvYXQiLCJnZXRFYXZlUHJvamVjdGlvbiIsImdldFBlcmdvbGFQcm9qZWN0aW9uIiwiZ2V0SWQiLCJvZmZzZXQiLCJlYXZlIiwiZ2V0RWF2ZU9mZnNldCIsInBlcmdvbGEiLCJnZXRQZXJnb2xhT2Zmc2V0IiwiV2luZG93Q29uc3RydWN0aW9uIiwibmFtZSIsIkNPTlNUX19OQU1FIiwiWm9uZURldGFpbCIsImdldE5hbWUiLCJab25lV2luZG93Iiwid2luZG93SWQiLCJ3aWR0aCIsImF6aW11dGgiLCJoZWFkSGVpZ2h0IiwiaG9yaXpTaGFkaW5nMUlkIiwiaG9yaXpTaGFkaW5nMklkIiwiQ09OU1RfX1pPTkVfSUQiLCJDT05TVF9fV0lORE9XX0lEIiwiQ09OU1RfX0hFSUdIVCIsIkNPTlNUX19XSURUSCIsIkNPTlNUX19BWklNVVRIIiwiQ09OU1RfX0hPUlpfU0hBRElOR18xIiwiQ09OU1RfX0hPUlpfU0hBRElOR18yIiwiZ2V0V2luZG93SWQiLCJnZXRXaWR0aCIsImdldEF6aW11dGgiLCJnZXRIZWFkSGVpZ2h0IiwiZ2V0SG9yaXpTaGFkaW5nMUlkIiwiZ2V0SG9yaXpTaGFkaW5nMklkIiwiT3JpZW50YXRpb24iLCJyZWZlcmVuY2UiLCJhemltdXRoSW50IiwicGFyc2VJbnQiLCJJcyIsIkNPTlNUX19OX0UiLCJDT05TVF9fRSIsIkNPTlNUX19TX0UiLCJDT05TVF9fUyIsIkNPTlNUX19TX1ciLCJDT05TVF9fVyIsIkNPTlNUX19OX1ciLCJsaW1pdHMiLCJ2ZWN0b3IiLCJ1cHBlciIsIk5vcm1hbGl6ZSIsImxvd2VyIiwibnVtYmVyIiwiTWF0aCIsImFicyIsIkNPTlNUX19OIiwiU2NyYXRjaEZpbGVMaW5lIiwiTG9va3NMaWtlIiwiU2hhZGluZ1NjaGVtZSIsIkJ1aWxkIiwiVGVzdCIsInJlZ2V4cCIsInRlc3QiLCJQYXJzZXIiLCJmaWxlIiwid2luZG93Q29uc3RydWN0aW9ucyIsInpvbmVXaW5kb3dzIiwiem9uZURldGFpbHMiLCJzaGFkaW5nU2NoZW1lcyIsImNlaWxpbmdIZWlnaHRzIiwiZGF0YUxpbmVzIiwiZ2V0RGF0YUxpbmVzIiwiZmlsdGVyIiwiUmV2ZXJzZUxvb2t1cCIsImxpbmUiLCJtYXAiLCJ3aW5kb3ciLCJ6b25lV2luZG93Iiwic2hhZGluZyIsImNlaWxpbmdIZWlnaHQiLCJ6b25lRGV0YWlsIiwiZ2V0V2luZG93Q29uc3RydWN0aW9ucyIsImdldFpvbmVXaW5kb3dzIiwiZ2V0U2hhZGluZyIsImdldENlaWxpbmdIZWlnaHRzIiwiZ2V0Wm9uZURldGFpbHMiLCJSZXN1bHRzQnVpbGRlciIsInpvbmUiLCJ3aW5kb3dzIiwiY29uc3RydWN0aW9uIiwiY29ucyIsInNoYWRpbmdTY2hlbWUiLCJzaGFkZSIsImNlaWxpbmciLCJ6b25lcyIsImNzdiIsIndpbmRvd0NzdiIsImxlbmd0aCIsIkdldCIsIndvcmtlciIsIldvcmtlciIsImNyZWF0ZVByZXZpZXciLCJyZXN1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zdGFuY2UiLCJpbXBvcnROb2RlIiwiY29udGVudCIsInRhYmxlQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwicmVzdWx0IiwidGFibGVSb3ciLCJjcmVhdGVFbGVtZW50IiwicmVzIiwidGFibGVDZWxsIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVEb3dubG9hZCIsImNzdkNvbnRlbnQiLCJyb3dBcnJheSIsInJvdyIsImpvaW4iLCJlbmNvZGVkVXJpIiwiZW5jb2RlVVJJIiwibGluayIsInNldEF0dHJpYnV0ZSIsImhpZGRlbiIsImlubmVySFRNTCIsImJvZHkiLCJjbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlU2VsZWN0b3IiLCJ2YWx1ZSIsImFsZXJ0IiwiZmlsZXMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsIm9uY2hhbmdlIiwiZmxhdHRlbiIsInByb3RvdHlwZSIsImNvbmNhdCIsImFyciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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ZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MmYwNmJlMGI2NzhjNjlmYTgwNCIsIi8qKlxuICogQ2xhc3MgQ2VpbGluZ0hlaWdodFxuICovXG5jbGFzcyBDZWlsaW5nSGVpZ2h0IHtcblxuICBzdGF0aWMgUmVnZXggPSAnXiAzKC57M30pNzAwKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pJztcblxuICB6b25lSWQgPSAnJztcbiAgaGVpZ2h0ID0gJyc7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoQ2VpbGluZ0hlaWdodC5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy56b25lSWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLmhlaWdodCA9IGRhdGFbM10udHJpbSgpO1xuICB9XG5cbiAgZ2V0Wm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVJZDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgem9uZUlkOiB0aGlzLmdldFpvbmVJZCgpLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBDZWlsaW5nSGVpZ2h0KGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VpbGluZ0hlaWdodDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9DZWlsaW5nSGVpZ2h0LmpzIiwiLyoqXG4gKiBCcmVhayB0aGUgSG9yaXpvbnRhbCBTaGFkaW5nIFNjaGVtZSBkYXRhIGludG8gaXRzIHZhcmlvdXMgcGFydHNcbiAqL1xuY2xhc3MgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUge1xuXG4gIC8qKlxuICAgKiBDb25zdGFudHMgdGhhdCBtYXAgdGhlIHZhcmlvdXMgYml0cyBvZiBkYXRhIHRvIHRoZSBzZWN0aW9uIG9mIHJlZ2V4XG4gICAqL1xuICBzdGF0aWMgQ09OU1RfX0lEID0gMTtcbiAgc3RhdGljIENPTlNUX19FQVZFX1BST0pFQ1RJT04gPSAyO1xuICBzdGF0aWMgQ09OU1RfX0VBVkVfT0ZGU0VUID0gMztcbiAgc3RhdGljIENPTlNUX19QRVJHT0xBX1BST0pFQ1RJT04gPSA2O1xuICBzdGF0aWMgQ09OU1RfX1BFUkdPTEFfT0ZGU0VUID0gNztcblxuICBzdGF0aWMgUmVnZXggPSAnXiAxIDIwKC57M30pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pJCc7XG5cbiAgaWQgPSAnJztcbiAgZWF2ZVByb2plY3Rpb24gPSAnJztcbiAgZWF2ZU9mZnNldCA9ICcnO1xuICBwZXJnb2xhUHJvamVjdGlvbiA9ICcnO1xuICBwZXJnb2xhT2Zmc2V0ID0gJyc7XG4gIHByb2plY3Rpb24gPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy5pZCA9IGRhdGFbSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQ09OU1RfX0lEXS50cmltKCk7XG4gICAgdGhpcy5lYXZlUHJvamVjdGlvbiA9IGRhdGFbSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQ09OU1RfX0VBVkVfUFJPSkVDVElPTl0udHJpbSgpO1xuICAgIHRoaXMuZWF2ZU9mZnNldCA9IGRhdGFbSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQ09OU1RfX0VBVkVfT0ZGU0VUXS50cmltKCk7XG4gICAgdGhpcy5wZXJnb2xhUHJvamVjdGlvbiA9IGRhdGFbSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQ09OU1RfX1BFUkdPTEFfUFJPSkVDVElPTl0udHJpbSgpO1xuICAgIHRoaXMucGVyZ29sYU9mZnNldCA9IGRhdGFbSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQ09OU1RfX1BFUkdPTEFfT0ZGU0VUXS50cmltKCk7XG4gICAgdGhpcy5wcm9qZWN0aW9uID0gdGhpcy5nZXRQcm9qZWN0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBoaWdoZXN0IHByb2plY3Rpb24gdmFsdWUgYW5kIHJldHVyblxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0UHJvamVjdGlvbigpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmdldEVhdmVQcm9qZWN0aW9uKCkpID4gcGFyc2VGbG9hdCh0aGlzLmdldFBlcmdvbGFQcm9qZWN0aW9uKCkpID9cbiAgICAgIHRoaXMuZ2V0RWF2ZVByb2plY3Rpb24oKSA6XG4gICAgICB0aGlzLmdldFBlcmdvbGFQcm9qZWN0aW9uKCk7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldEVhdmVPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWF2ZU9mZnNldDtcbiAgfVxuXG4gIGdldEVhdmVQcm9qZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmVhdmVQcm9qZWN0aW9uO1xuICB9XG5cbiAgZ2V0UGVyZ29sYU9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJnb2xhT2Zmc2V0O1xuICB9XG5cbiAgZ2V0UGVyZ29sYVByb2plY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyZ29sYVByb2plY3Rpb247XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIHByb2plY3Rpb246IHRoaXMuZ2V0UHJvamVjdGlvbigpLFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIGVhdmU6IHRoaXMuZ2V0RWF2ZU9mZnNldCgpLFxuICAgICAgICBwZXJnb2xhOiB0aGlzLmdldFBlcmdvbGFPZmZzZXQoKVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZS5qcyIsIi8qKlxuICogQnJlYWsgYSBXaW5kb3cgY29uc3RydWN0aW9uIGRhdGEgbGluZSBpbnRvIGl0cyB2YXJpb3VzIHBhcnRzXG4gKi9cbmNsYXNzIFdpbmRvd0NvbnN0cnVjdGlvbiB7XG5cbiAgc3RhdGljIENPTlNUX19JRCA9IDM7XG4gIHN0YXRpYyBDT05TVF9fTkFNRSA9ICcnO1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIFxcXFxkKC57M30pWyBcXFxcZF0qKFthLXpBLVpdW2EtekEtWlxcXFwtXFxcXGRdezl9WyBhLXpBLVpdW2EtekEtWl0/KSc7XG5cbiAgaWQgPSAnJztcbiAgbmFtZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFdpbmRvd0NvbnN0cnVjdGlvbi5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy5pZCA9IGRhdGFbMV0udHJpbSgpO1xuICAgIHRoaXMubmFtZSA9IGRhdGFbMl0udHJpbSgpO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBXaW5kb3dDb25zdHJ1Y3Rpb24oZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dDb25zdHJ1Y3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvV2luZG93Q29uc3RydWN0aW9uLmpzIiwiLyoqXG4gKiBDbGFzcyBab25lRGV0YWlsXG4gKi9cbmNsYXNzIFpvbmVEZXRhaWwge1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeQyBaMDA/KFxcXFxkezEsM30pID0+ICguKikkJztcblxuICBpZCA9ICcnO1xuICBuYW1lID0gJyc7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoWm9uZURldGFpbC5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy5pZCA9IGRhdGFbMV0udHJpbSgpO1xuICAgIHRoaXMubmFtZSA9IGRhdGFbMl0udHJpbSgpO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuZ2V0SWQoKSxcbiAgICAgIG5hbWU6IHRoaXMuZ2V0TmFtZSgpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBab25lRGV0YWlsKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZURldGFpbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ab25lRGV0YWlsLmpzIiwiLyoqXG4gKiBDbGFzcyB0byBwYXJzZSB3aW5kb3cgaW5mb3JtYXRpb24gaW5zaWRlIGEgem9uZSBzZWN0aW9uXG4gKi9cbmNsYXNzIFpvbmVXaW5kb3cge1xuXG4gIHN0YXRpYyBDT05TVF9fWk9ORV9JRCA9IDE7XG4gIHN0YXRpYyBDT05TVF9fV0lORE9XX0lEID0gMjtcbiAgc3RhdGljIENPTlNUX19IRUlHSFQgPSA2O1xuICBzdGF0aWMgQ09OU1RfX1dJRFRIID0gNztcbiAgc3RhdGljIENPTlNUX19BWklNVVRIID0gODtcbiAgc3RhdGljIENPTlNUX19IT1JaX1NIQURJTkdfMSA9IDk7XG4gIHN0YXRpYyBDT05TVF9fSE9SWl9TSEFESU5HXzIgPSAxMDtcblxuICBzdGF0aWMgUmVnZXggPSAnXiAzKC57M30pKCggKDEwKXwoICBbMC05XSkpKSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSc7XG5cbiAgem9uZUlkID0gJyc7XG4gIHdpbmRvd0lkID0gJyc7XG4gIGhlaWdodCA9ICcnO1xuICB3aWR0aCA9ICcnO1xuICBhemltdXRoID0gJyc7XG4gIGhlYWRIZWlnaHQgPSAnJzsgLy8gVGhpcyB2YWx1ZSBpc24ndCB1c2VkLCBqdXN0IGhlcmUgdG8gaXQgY2FuIGhvbGQgYW4gZW1wdHkgY2VsbCBpbiB0aGUgb3V0cHV0IENTVlxuICBob3JpelNoYWRpbmcxSWQgPSAnJztcbiAgaG9yaXpTaGFkaW5nMklkID0gJyc7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoWm9uZVdpbmRvdy5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy56b25lSWQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX1pPTkVfSURdLnRyaW0oKTtcbiAgICB0aGlzLndpbmRvd0lkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19XSU5ET1dfSURdLnRyaW0oKTtcbiAgICB0aGlzLmhlaWdodCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fSEVJR0hUXS50cmltKCk7XG4gICAgdGhpcy53aWR0aCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fV0lEVEhdLnRyaW0oKTtcbiAgICB0aGlzLmF6aW11dGggPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX0FaSU1VVEhdLnRyaW0oKTtcbiAgICB0aGlzLmhvcml6U2hhZGluZzFJZCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fSE9SWl9TSEFESU5HXzFdLnRyaW0oKTtcbiAgICB0aGlzLmhvcml6U2hhZGluZzJJZCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fSE9SWl9TSEFESU5HXzJdLnRyaW0oKTtcbiAgfVxuXG4gIGdldFpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy56b25lSWQ7XG4gIH1cblxuICBnZXRXaW5kb3dJZCgpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dJZDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldEF6aW11dGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXppbXV0aDtcbiAgfVxuXG4gIGdldEhlYWRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZEhlaWdodDtcbiAgfVxuXG4gIGdldEhvcml6U2hhZGluZzFJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3JpelNoYWRpbmcxSWQ7XG4gIH1cblxuICBnZXRIb3JpelNoYWRpbmcySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpTaGFkaW5nMklkO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpvbmVJZDogdGhpcy5nZXRab25lSWQoKSxcbiAgICAgIHdpbmRvd0lkOiB0aGlzLmdldFdpbmRvd0lkKCksXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KCksXG4gICAgICB3aWR0aDogdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgYXppbXV0aDogdGhpcy5nZXRBemltdXRoKCksXG4gICAgICBoZWFkSGVpZ2h0OiB0aGlzLmdldEhlYWRIZWlnaHQoKSxcbiAgICAgIGhvcml6U2hhZGluZzFJZDogdGhpcy5nZXRIb3JpelNoYWRpbmcxSWQoKSxcbiAgICAgIGhvcml6U2hhZGluZzJJZDogdGhpcy5nZXRIb3JpelNoYWRpbmcySWQoKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgWm9uZVdpbmRvdyhkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFpvbmVXaW5kb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvWm9uZVdpbmRvdy5qcyIsIi8qKlxuICogQ2xhc3MgT3JpZW50YXRpb25cbiAqL1xuY2xhc3MgT3JpZW50YXRpb24ge1xuXG4gIHN0YXRpYyBDT05TVF9fTiA9IHsgbG93ZXI6IDIyLCB1cHBlcjogMzM4IH07XG4gIHN0YXRpYyBDT05TVF9fTl9FID0geyBsb3dlcjogMjMsIHVwcGVyOiA2NyB9O1xuICBzdGF0aWMgQ09OU1RfX0UgPSB7IGxvd2VyOiA2OCwgdXBwZXI6IDExMiB9O1xuICBzdGF0aWMgQ09OU1RfX1NfRSA9IHsgbG93ZXI6IDExMywgdXBwZXI6IDE4NyB9O1xuICBzdGF0aWMgQ09OU1RfX1MgPSB7IGxvd2VyOiAxODgsIHVwcGVyOiAyMDIgfTtcbiAgc3RhdGljIENPTlNUX19TX1cgPSB7IGxvd2VyOiAyMDMsIHVwcGVyOiAyNDcgfTtcbiAgc3RhdGljIENPTlNUX19XID0geyBsb3dlcjogMjQ4LCB1cHBlcjogMjkyIH07XG4gIHN0YXRpYyBDT05TVF9fTl9XID0geyBsb3dlcjogMjkzLCB1cHBlcjogMzM3IH07XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYXppbXV0aFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXppbXV0aCAgIEF6aW11dGggdmFsdWUgYmVpbmcgY2hhbmdlZCB0byBvcmllbnRhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJlbmNlIFJlZmVyZW5jZSBhemltdXRoIGZvciBOb3J0aFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgR2V0KGF6aW11dGgsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF6aW11dGhJbnQgPSBwYXJzZUludChhemltdXRoLCAxMCk7XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fTl9FKSkge1xuICAgICAgcmV0dXJuICdORSc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX0UpKSB7XG4gICAgICByZXR1cm4gJ0UnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19TX0UpKSB7XG4gICAgICByZXR1cm4gJ1NFJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fUykpIHtcbiAgICAgIHJldHVybiAnUyc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1NfVykpIHtcbiAgICAgIHJldHVybiAnU1cnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19XKSkge1xuICAgICAgcmV0dXJuICdXJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fTl9XKSkge1xuICAgICAgcmV0dXJuICdOVyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdOJztcbiAgfVxuXG4gIHN0YXRpYyBJcyhhemltdXRoLCByZWZlcmVuY2UsIGxpbWl0cykge1xuICAgIGNvbnN0IHZlY3RvciA9IHtcbiAgICAgIHVwcGVyOiBPcmllbnRhdGlvbi5Ob3JtYWxpemUocGFyc2VJbnQocmVmZXJlbmNlLCAxMCkgKyBsaW1pdHMudXBwZXIpLFxuICAgICAgbG93ZXI6IE9yaWVudGF0aW9uLk5vcm1hbGl6ZShwYXJzZUludChyZWZlcmVuY2UsIDEwKSArIGxpbWl0cy5sb3dlcilcbiAgICB9O1xuXG4gICAgaWYgKGF6aW11dGggPiB2ZWN0b3IubG93ZXIgJiYgYXppbXV0aCA8IHZlY3Rvci51cHBlcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhIHZhbHVlIHRvIGJlIHdpdGhpbiB0aGUgMC0zNjAgcmFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHtpbnR9IG51bWJlclxuICAgKlxuICAgKiBAcmV0dXJucyB7aW50fVxuICAgKi9cbiAgc3RhdGljIE5vcm1hbGl6ZShudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgcmV0dXJuIDM2MCAtIE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA+IDM2MCkge1xuICAgICAgcmV0dXJuIChudW1iZXIgLSAzNjApO1xuICAgIH1cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmllbnRhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9PcmllbnRhdGlvbi5qcyIsImltcG9ydCBDZWlsaW5nSGVpZ2h0IGZyb20gJy4vQ2VpbGluZ0hlaWdodCc7XG5pbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG5pbXBvcnQgTG9va3NMaWtlIGZyb20gJy4vdXRpbHMvTG9va3NMaWtlJztcbmltcG9ydCBXaW5kb3dDb25zdHJ1Y3Rpb24gZnJvbSAnLi9XaW5kb3dDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVXaW5kb3cgZnJvbSAnLi9ab25lV2luZG93JztcbmltcG9ydCBab25lRGV0YWlsIGZyb20gJy4vWm9uZURldGFpbCc7XG5cbi8qKlxuICogQ2xhc3MgU2NyYXRjaEZpbGVMaW5lXG4gKi9cbmNsYXNzIFNjcmF0Y2hGaWxlTGluZSB7XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGEgZGF0YSBsaW5lIGludG8gdGhlIGFwcHJvcHJpYXRlIGNsYXNzIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSBwYXJzZWRcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIGlmIChMb29rc0xpa2UuU2hhZGluZ1NjaGVtZShkYXRhKSkge1xuICAgICAgcmV0dXJuIEhvcml6b250YWxTaGFkaW5nU2NoZW1lLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuQ2VpbGluZ0hlaWdodChkYXRhKSkge1xuICAgICAgcmV0dXJuIENlaWxpbmdIZWlnaHQuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5XaW5kb3dDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiBXaW5kb3dDb25zdHJ1Y3Rpb24uQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lV2luZG93KGRhdGEpKSB7XG4gICAgICByZXR1cm4gWm9uZVdpbmRvdy5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVEZXRhaWwoZGF0YSkpIHtcbiAgICAgIHJldHVybiBab25lRGV0YWlsLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmF0Y2hGaWxlTGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9TY3JhdGNoRmlsZUxpbmUuanMiLCJpbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi4vSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnO1xuaW1wb3J0IFdpbmRvd0NvbnN0cnVjdGlvbiBmcm9tICcuLi9XaW5kb3dDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVXaW5kb3cgZnJvbSAnLi4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuLi9DZWlsaW5nSGVpZ2h0JztcbmltcG9ydCBab25lRGV0YWlsIGZyb20gJy4uL1pvbmVEZXRhaWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gY29tcGFyZSBhIGRhdGEgc3RyaW5nIGFuZCBpbmRpY2F0ZSB3aGF0IHR5cGUgb2YgZGF0YSBpdCBsb29rcyBsaWtlXG4gKi9cbmNsYXNzIExvb2tzTGlrZSB7XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgaG9yaXpvbnRhbCBzaGFkaW5nIHNjaGVtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFNoYWRpbmdTY2hlbWUobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIEhvcml6b250YWxTaGFkaW5nU2NoZW1lLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHdpbmRvdyBjb25zdHJ1Y3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBXaW5kb3dDb25zdHJ1Y3Rpb24obGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIFdpbmRvd0NvbnN0cnVjdGlvbi5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSB6b25lIHdpbmRvd1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFpvbmVXaW5kb3cobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIFpvbmVXaW5kb3cuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgY2VpbGluZyBoZWlnaHQgbGluZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIENlaWxpbmdIZWlnaHQobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIENlaWxpbmdIZWlnaHQuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgem9uZSBkZXRhaWwgbGluZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFpvbmVEZXRhaWwobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIFpvbmVEZXRhaWwuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgcmVnZXggdGVzdCBhZ2FpbnN0IHRoZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhICBUaGUgZGF0YSB0byB0ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWdleCBUaGUgcmVnZXggcGF0dGVybiB0byB0ZXN0IHdpdGhcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgVGVzdChkYXRhLCByZWdleCkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocmVnZXgpO1xuICAgIHJldHVybiByZWdleHAudGVzdChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hhdCB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBSZXZlcnNlTG9va3VwKGRhdGEpIHtcbiAgICBpZiAoTG9va3NMaWtlLlNoYWRpbmdTY2hlbWUoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuQ2VpbGluZ0hlaWdodChkYXRhKSkge1xuICAgICAgcmV0dXJuICdDZWlsaW5nSGVpZ2h0JztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLldpbmRvd0NvbnN0cnVjdGlvbihkYXRhKSkge1xuICAgICAgcmV0dXJuICdXaW5kb3dDb25zdHJ1Y3Rpb24nO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZVdpbmRvdyhkYXRhKSkge1xuICAgICAgcmV0dXJuICdab25lV2luZG93JztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVEZXRhaWwoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnWm9uZURldGFpbCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3NMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL0xvb2tzTGlrZS5qcyIsIi8qKlxuICogQSBjbGFzcyB0byBoYW5kbGUgcGFyc2luZyBhbiBlbnRpcmUgc2NyYXRjaCBmaWxlXG4gKi9cbmltcG9ydCBTY3JhdGNoRmlsZUxpbmUgZnJvbSAnLi9TY3JhdGNoRmlsZUxpbmUnO1xuaW1wb3J0IExvb2tzTGlrZSBmcm9tICcuL3V0aWxzL0xvb2tzTGlrZSc7XG5pbXBvcnQgV2luZG93Q29uc3RydWN0aW9uIGZyb20gJy4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG5pbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuL0NlaWxpbmdIZWlnaHQnO1xuaW1wb3J0IFpvbmVEZXRhaWwgZnJvbSAnLi9ab25lRGV0YWlsJztcblxuY2xhc3MgUGFyc2VyIHtcblxuICB3aW5kb3dDb25zdHJ1Y3Rpb25zID0gW107XG4gIHpvbmVXaW5kb3dzID0gW107XG4gIHpvbmVEZXRhaWxzID0gW107XG4gIHNoYWRpbmdTY2hlbWVzID0gW107XG4gIGNlaWxpbmdIZWlnaHRzID0gW107XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IGZpbGUgQSBzY3JhdGNoZmlsZSBhcnJheVxuICAgKi9cbiAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gIH1cblxuICBwcm9jZXNzKCkge1xuICAgIGNvbnN0IGRhdGFMaW5lcyA9IHRoaXMuZ2V0RGF0YUxpbmVzKCk7XG5cbiAgICAvLyBGaWx0ZXIgdGhlIGFycmF5cyB0byBvbmx5IGluY2x1ZGUgdGhlIHJlbGF0ZWQgZGF0YSwgdGhlbiBidWlsZCB0aGUgZGF0YSBsaW5lIGludG8gdGhlIGFwcHJvcHJpYXRlIGNsYXNzXG4gICAgdGhpcy53aW5kb3dDb25zdHJ1Y3Rpb25zID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdXaW5kb3dDb25zdHJ1Y3Rpb24nKVxuICAgICAgLm1hcCh3aW5kb3cgPT4gV2luZG93Q29uc3RydWN0aW9uLkJ1aWxkKHdpbmRvdykpO1xuXG4gICAgdGhpcy56b25lV2luZG93cyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnWm9uZVdpbmRvdycpXG4gICAgICAubWFwKHpvbmVXaW5kb3cgPT4gWm9uZVdpbmRvdy5CdWlsZCh6b25lV2luZG93KSk7XG5cbiAgICB0aGlzLnNoYWRpbmdTY2hlbWVzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdIb3Jpem9udGFsU2hhZGluZ1NjaGVtZScpXG4gICAgICAubWFwKHNoYWRpbmcgPT4gSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQnVpbGQoc2hhZGluZykpO1xuXG4gICAgdGhpcy5jZWlsaW5nSGVpZ2h0cyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnQ2VpbGluZ0hlaWdodCcpXG4gICAgICAubWFwKGNlaWxpbmdIZWlnaHQgPT4gQ2VpbGluZ0hlaWdodC5CdWlsZChjZWlsaW5nSGVpZ2h0KSk7XG5cbiAgICB0aGlzLnpvbmVEZXRhaWxzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdab25lRGV0YWlsJylcbiAgICAgIC5tYXAoem9uZURldGFpbCA9PiBab25lRGV0YWlsLkJ1aWxkKHpvbmVEZXRhaWwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpbmVzIG9mIGRhdGEgdGhhdCBtYXRjaCBhIHR5cGUgd2UncmUgaW50ZXJlc3RlZCBpblxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXREYXRhTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5maWx0ZXIobGluZSA9PiBTY3JhdGNoRmlsZUxpbmUuQnVpbGQobGluZSkgIT09IGZhbHNlKTtcbiAgfVxuXG4gIGdldFdpbmRvd0NvbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93Q29uc3RydWN0aW9ucztcbiAgfVxuXG4gIGdldFpvbmVXaW5kb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVXaW5kb3dzO1xuICB9XG5cbiAgZ2V0U2hhZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkaW5nU2NoZW1lcztcbiAgfVxuXG4gIGdldENlaWxpbmdIZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmNlaWxpbmdIZWlnaHRzO1xuICB9XG5cbiAgZ2V0Wm9uZURldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZURldGFpbHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCBkYXRhIGluIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBkZWNvbnN0cnVjdGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZXRBbGxEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aW5kb3dDb25zdHJ1Y3Rpb25zOiB0aGlzLmdldFdpbmRvd0NvbnN0cnVjdGlvbnMoKSxcbiAgICAgIHpvbmVXaW5kb3dzOiB0aGlzLmdldFpvbmVXaW5kb3dzKCksXG4gICAgICBzaGFkaW5nOiB0aGlzLmdldFNoYWRpbmcoKSxcbiAgICAgIGNlaWxpbmdIZWlnaHRzOiB0aGlzLmdldENlaWxpbmdIZWlnaHRzKCksXG4gICAgICB6b25lRGV0YWlsczogdGhpcy5nZXRab25lRGV0YWlscygpXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QYXJzZXIuanMiLCJpbXBvcnQgT3JpZW50YXRpb24gZnJvbSAnLi9PcmllbnRhdGlvbic7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi91dGlscyc7XG4vKipcbiAqIENsYXNzIFJlc3VsdHNCdWlsZGVyXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHRha2UgdmFyaW91cyBhcnJheXMgb2YgZGF0YSBsaW5lcywgYnVpbGQgdGhlbSBpbnRvIHRoZWlyIGFwcHJvcHJpYXRlIGNsYXNzZXMsXG4gKiBsaW5rIHRoZW0gdGhyb3VnaCB2YXJpb3VzIElEJ3MsIGFuZCB0aGVuIGNyZWF0ZSBtdWx0aXBsZSBvdXRwdXQgbGluZXNcbiAqL1xuXG5jbGFzcyBSZXN1bHRzQnVpbGRlciB7XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIHZhcmlvdXMgYXJyYXlzIGludG8gYSBzaW5nbGUgYXJyYXlcbiAgICpcbiAgICogQHBhcmFtIHdpbmRvd0NvbnN0cnVjdGlvbnNcbiAgICogQHBhcmFtIHpvbmVXaW5kb3dzXG4gICAqIEBwYXJhbSBzaGFkaW5nXG4gICAqIEBwYXJhbSBjZWlsaW5nSGVpZ2h0c1xuICAgKiBAcGFyYW0gem9uZURldGFpbHNcbiAgICpcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHN0YXRpYyBDb21waWxlKHtcbiAgICB3aW5kb3dDb25zdHJ1Y3Rpb25zLCB6b25lV2luZG93cywgc2hhZGluZywgY2VpbGluZ0hlaWdodHMsIHpvbmVEZXRhaWxzXG4gIH0pIHtcbiAgICByZXR1cm4gem9uZURldGFpbHMubWFwKCh6b25lKSA9PiB7XG4gICAgICAvLyBGaWx0ZXIgdGhlIHpvbmUgd2luZG93cyBmb3Igb25seSB3aW5kb3dzIGluIHRoaXMgem9uZSwgYW5kIHRoZW4gbWFwIHRoZSB3aW5kb3cgY29uc3RydWN0aW9uLCBzaGFkaW5nIGFuZCBjZWlsaW5nIGhlaWdodCBkZXRhaWxzXG4gICAgICBjb25zdCB3aW5kb3dzID0gem9uZVdpbmRvd3MuZmlsdGVyKHdpbmRvdyA9PiB3aW5kb3cuem9uZUlkID09PSB6b25lLmlkKS5tYXAoKHpvbmVXaW5kb3cpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0aW9uID0gd2luZG93Q29uc3RydWN0aW9ucy5maWx0ZXIoY29ucyA9PiBjb25zLmlkID09PSB6b25lV2luZG93LmdldFdpbmRvd0lkKCkpWzBdO1xuICAgICAgICBjb25zdCBzaGFkaW5nU2NoZW1lID0gc2hhZGluZy5maWx0ZXIoc2hhZGUgPT4gc2hhZGUuZ2V0SWQoKSA9PT0gem9uZVdpbmRvdy5nZXRIb3JpelNoYWRpbmcxSWQoKSB8fCBzaGFkZS5nZXRJZCgpID09PSB6b25lV2luZG93LmdldEhvcml6U2hhZGluZzJJZCgpKTtcbiAgICAgICAgY29uc3QgY2VpbGluZ0hlaWdodCA9IGNlaWxpbmdIZWlnaHRzLmZpbHRlcihjZWlsaW5nID0+IGNlaWxpbmcuZ2V0Wm9uZUlkKCkgPT09IHpvbmUuZ2V0SWQoKSlbMF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi56b25lV2luZG93LFxuICAgICAgICAgIGNvbnN0cnVjdGlvbixcbiAgICAgICAgICBzaGFkaW5nOiBzaGFkaW5nU2NoZW1lLFxuICAgICAgICAgIGNlaWxpbmdIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogem9uZS5nZXRJZCgpLFxuICAgICAgICBuYW1lOiB6b25lLmdldE5hbWUoKSxcbiAgICAgICAgd2luZG93c1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgem9uZXMgYXJyYXkgaW50byBhIGZsYXR0IGFycmF5IHJlYWR5IGZvciBjb252ZXJzaW9uIHRvIENTVlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSAgem9uZXMgICAgIFRoZSB6b25lcyBhcnJheSBjcmVhdGVkIGluIFJlc3VsdHNCdWlsZGVyLkNvbXBpbGUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJlbmNlIFJlZmVyZW5jZSBOb3J0aCBhemltdXRoXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBCdWlsZCh6b25lcywgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY3N2ID0gem9uZXMubWFwKCh6b25lKSA9PiB7XG4gICAgICBjb25zdCB3aW5kb3dDc3YgPSB6b25lLndpbmRvd3MubWFwKCh3aW5kb3cpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3Rpb24gPSAnJztcbiAgICAgICAgbGV0IGVhdmVPZmZzZXQgPSAnJztcbiAgICAgICAgbGV0IHBlcmdvbGFPZmZzZXQgPSAnJztcbiAgICAgICAgaWYgKHdpbmRvdy5zaGFkaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBwcm9qZWN0aW9uID0gd2luZG93LnNoYWRpbmdbMF0ucHJvamVjdGlvbjtcbiAgICAgICAgICBlYXZlT2Zmc2V0ID0gd2luZG93LnNoYWRpbmdbMF0uZWF2ZU9mZnNldDtcbiAgICAgICAgICBwZXJnb2xhT2Zmc2V0ID0gd2luZG93LnNoYWRpbmdbMF0ucGVyZ29sYU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgem9uZS5uYW1lLFxuICAgICAgICAgIE9yaWVudGF0aW9uLkdldCh3aW5kb3cuYXppbXV0aCwgcmVmZXJlbmNlKSxcbiAgICAgICAgICB3aW5kb3cuaGVpZ2h0LFxuICAgICAgICAgIHdpbmRvdy53aWR0aCxcbiAgICAgICAgICBwcm9qZWN0aW9uLFxuICAgICAgICAgIHdpbmRvdy5oZWFkSGVpZ2h0LFxuICAgICAgICAgIHdpbmRvdy5jb25zdHJ1Y3Rpb24ubmFtZSxcbiAgICAgICAgICB3aW5kb3cuY2VpbGluZ0hlaWdodC5oZWlnaHQsXG4gICAgICAgICAgZWF2ZU9mZnNldCxcbiAgICAgICAgICBwZXJnb2xhT2Zmc2V0XG4gICAgICAgIF07XG4gICAgICB9KTtcblxuICAgICAgLy8gQW4gZW1wdHkgd2luZG93Q3N2IG5lZWRzIHRvIGJlIHJldHVybmVkIGluc2lkZSBhbiBhcnJheSBpdHNlbGYsIGluIG9yZGVyIHRvIHdvcmsgd2l0aCB0aGUgZmxhdHRlbiBmdW5jdGlvblxuICAgICAgcmV0dXJuIHdpbmRvd0Nzdi5sZW5ndGggPiAwID8gd2luZG93Q3N2IDogW3dpbmRvd0Nzdl07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxhdHRlbihjc3YpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0c0J1aWxkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUmVzdWx0c0J1aWxkZXIuanMiLCJjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKCdqcy93b3JrZXIuanMnKTtcblxuY29uc3QgY3JlYXRlUHJldmlldyA9IChyZXN1bHRzKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtcHJldmlldy10ZW1wbGF0ZScpO1xuICBjb25zdCBpbnN0YW5jZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG5cbiAgY29uc3QgdGFibGVCb2R5ID0gaW5zdGFuY2UucXVlcnlTZWxlY3RvcigndGJvZHknKTtcblxuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICByZXN1bHQuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGFibGVDZWxsLmlubmVyVGV4dCA9IHJlcztcbiAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlQ2VsbCk7XG4gICAgfSk7XG5cbiAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0cy1wcmV2aWV3JykuYXBwZW5kQ2hpbGQoaW5zdGFuY2UpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGRvd25sb2FkIGZpbGUsIGFuZCBkb3dubG9hZCBpdCB0byB0aGUgdXNlcnMgYnJvd3NlclxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdHNcbiAqXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuY29uc3QgY3JlYXRlRG93bmxvYWQgPSAocmVzdWx0cykgPT4ge1xuICBsZXQgY3N2Q29udGVudCA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJztcbiAgcmVzdWx0cy5mb3JFYWNoKChyb3dBcnJheSkgPT4ge1xuICAgIGlmIChyb3dBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByb3cgPSByb3dBcnJheS5qb2luKCcsJyk7XG4gICAgICBjc3ZDb250ZW50ICs9IGAke3Jvd31cXG5gO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZW5jb2RlZFVyaSA9IGVuY29kZVVSSShjc3ZDb250ZW50KTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBlbmNvZGVkVXJpKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2dsYXppbmcuY3N2Jyk7XG4gIGxpbmsuaGlkZGVuID0gdHJ1ZTtcbiAgbGluay5pbm5lckhUTUwgPSAnQ2xpY2sgSGVyZSB0byBkb3dubG9hZCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7IC8vIFJlcXVpcmVkIGZvciBGRlxuXG4gIGxpbmsuY2xpY2soKTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9jZXNzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlVG9VcGxvYWQnKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vcnRoLXJlZmVyZW5jZScpLnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSByZWZlcmVuY2Ugbm9ydGggYXppbXV0aCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChmaWxlU2VsZWN0b3IuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzY3JhdGNoIGZpbGUnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBmaWxlID0gZmlsZVNlbGVjdG9yLmZpbGVzWzBdO1xuICBjb25zdCByZWZlcmVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9ydGgtcmVmZXJlbmNlJykudmFsdWU7XG5cbiAgd29ya2VyLnBvc3RNZXNzYWdlKHsgZmlsZSwgcmVmZXJlbmNlIH0pO1xuXG4gIHdvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjcmVhdGVQcmV2aWV3KGRhdGEucmVzdWx0cyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlRG93bmxvYWQoZGF0YS5yZXN1bHRzKTtcbiAgICB9KTtcbiAgfTtcbn0pO1xuXG4vLyBDbGVhciBwcmV2aWV3IHJlc3VsdHMgd2hlbiB0aGUgc2NyYXRjaCBmaWxlIGNoYW5nZXNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlVG9VcGxvYWQnKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtcHJldmlldycpLmlubmVySFRNTCA9ICcnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBGbGF0dGVuIGFycmF5IDEgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgQXJyeWEgdG8gZmxhdHRlblxuICpcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSBhcnIgPT4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5hcnIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==