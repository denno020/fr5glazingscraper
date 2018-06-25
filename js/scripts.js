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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
 * Class FloorConstruction
 */
var FloorConstruction = function () {
  function FloorConstruction(lineData) {
    _classCallCheck(this, FloorConstruction);

    this.id = '';
    this.isCsog = false;

    var regex = new RegExp(FloorConstruction.Regex);
    var data = regex.exec(lineData);

    this.id = data[1].trim();
    this.isCsog = FloorConstruction.TestCsog(lineData);
  }

  /**
   * Get the construction id that this floor construction belongs to
   *
   * @returns {string}
   */


  _createClass(FloorConstruction, [{
    key: 'getId',
    value: function getId() {
      return this.id;
    }

    /**
     * Return true/false indicating if the flooring type in the zone is CSOG
     *
     * @returns {boolean}
     */

  }, {
    key: 'getIsCsog',
    value: function getIsCsog() {
      return this.isCsog;
    }

    /**
     * Test the data line to see if there is concrete
     * @returns {boolean}
     */

  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        id: this.getConstructionId(),
        isCsog: this.getIsCsog()
      };
    }
  }], [{
    key: 'TestCsog',
    value: function TestCsog(lineData) {
      var csogRegex = new RegExp(FloorConstruction.CSOGRegex);
      return csogRegex.test(lineData);
    }
  }, {
    key: 'Build',
    value: function Build(data) {
      return new FloorConstruction(data);
    }
  }]);

  return FloorConstruction;
}();

FloorConstruction.ConstructionIdRegex = '(24[1-9]|2[5-9]\\d|3[1-3]\\d|340)';
FloorConstruction.Regex = '^ 2' + FloorConstruction.ConstructionIdRegex;
FloorConstruction.CSOGRegex = '^ 2(24[1-9]|2[5-9]\\d|3[1-3]\\d|340)   (.{7})*( 18 100)';
exports.default = FloorConstruction;

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

    /**
     * Determine the Head Height of a window from the height of the window and the eave offset
     *
     * @param {string} windowHeight The height of the window
     * @param {string} eaveOffset   The eave offset of the window
     *
     * @returns {number}
     */

  }, {
    key: 'HeadHeight',
    value: function HeadHeight(windowHeight, eaveOffset) {
      var windowHeightFloat = windowHeight === '' ? 0 : parseFloat(windowHeight);
      var eaveOffsetFloat = eaveOffset === '' ? 0 : parseFloat(eaveOffset);
      return (windowHeightFloat + eaveOffsetFloat).toFixed(2).toString();
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
/* 2 */
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
/* 3 */
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
      var projection = parseFloat(this.getEaveProjection()) > parseFloat(this.getPergolaProjection()) ? this.getEaveProjection() : this.getPergolaProjection();

      return HorizontalShadingScheme.RoundValue(projection);
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

    /**
     * Round the provided value (projection) to the nearest 0.05
     *
     * @param {string} value The value to round
     *
     * @returns {string}
     */

  }, {
    key: 'RoundValue',
    value: function RoundValue(value) {
      // See https://stackoverflow.com/a/10413602/1560593
      return (Math.round(value * 20) / 20).toFixed(2);
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FloorConstruction = __webpack_require__(0);

var _FloorConstruction2 = _interopRequireDefault(_FloorConstruction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class ZoneFloor
 */
var ZoneFloor = function () {
  function ZoneFloor(lineData) {
    _classCallCheck(this, ZoneFloor);

    this.zoneId = '';
    this.constructionId = '';

    var regex = new RegExp(ZoneFloor.Regex);
    var data = regex.exec(lineData);

    this.zoneId = data[1].trim();
    this.constructionId = data[2].trim();
  }

  _createClass(ZoneFloor, [{
    key: 'getZoneId',
    value: function getZoneId() {
      return this.zoneId;
    }
  }, {
    key: 'getConstructionId',
    value: function getConstructionId() {
      return this.constructionId;
    }
  }, {
    key: 'toObject',
    value: function toObject() {
      return {
        zoneId: this.getZoneId(),
        constructionId: this.getConstructionId()
      };
    }
  }], [{
    key: 'Build',
    value: function Build(data) {
      return new ZoneFloor(data);
    }
  }]);

  return ZoneFloor;
}();

ZoneFloor.Regex = ' 3(...)(' + _FloorConstruction2.default.ConstructionIdRegex + ')';
exports.default = ZoneFloor;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class GroundFloor
 */
var GroundFloor = function () {
  function GroundFloor() {
    _classCallCheck(this, GroundFloor);
  }

  _createClass(GroundFloor, null, [{
    key: "Test",


    /**
     * Test if any of the provided floors have a CSOG construction, indicating the zone is likely on the ground floor
     *
     * @param {array} floors The floors to check for CSOG
     *
     * @returns {boolean}
     */
    value: function Test(floors) {
      return floors.filter(function (floor) {
        return floor.isCsog;
      }).length > 0;
    }
  }]);

  return GroundFloor;
}();

exports.default = GroundFloor;

/***/ }),
/* 8 */
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

      return azimuth >= vector.lower && azimuth <= vector.upper;
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
Orientation.CONST__S_E = { lower: 113, upper: 157 };
Orientation.CONST__S = { lower: 158, upper: 202 };
Orientation.CONST__S_W = { lower: 203, upper: 247 };
Orientation.CONST__W = { lower: 248, upper: 292 };
Orientation.CONST__N_W = { lower: 293, upper: 337 };
exports.default = Orientation;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CeilingHeight = __webpack_require__(2);

var _CeilingHeight2 = _interopRequireDefault(_CeilingHeight);

var _HorizontalShadingScheme = __webpack_require__(3);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _LooksLike = __webpack_require__(10);

var _LooksLike2 = _interopRequireDefault(_LooksLike);

var _WindowConstruction = __webpack_require__(4);

var _WindowConstruction2 = _interopRequireDefault(_WindowConstruction);

var _ZoneWindow = __webpack_require__(1);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _ZoneDetail = __webpack_require__(5);

var _ZoneDetail2 = _interopRequireDefault(_ZoneDetail);

var _FloorConstruction = __webpack_require__(0);

var _FloorConstruction2 = _interopRequireDefault(_FloorConstruction);

var _ZoneFloor = __webpack_require__(6);

var _ZoneFloor2 = _interopRequireDefault(_ZoneFloor);

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

      if (_LooksLike2.default.FloorConstruction(data)) {
        return _FloorConstruction2.default.Build(data);
      }

      if (_LooksLike2.default.ZoneFloor(data)) {
        return _ZoneFloor2.default.Build(data);
      }

      return false;
    }
  }]);

  return ScratchFileLine;
}();

exports.default = ScratchFileLine;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HorizontalShadingScheme = __webpack_require__(3);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _WindowConstruction2 = __webpack_require__(4);

var _WindowConstruction3 = _interopRequireDefault(_WindowConstruction2);

var _ZoneWindow2 = __webpack_require__(1);

var _ZoneWindow3 = _interopRequireDefault(_ZoneWindow2);

var _CeilingHeight2 = __webpack_require__(2);

var _CeilingHeight3 = _interopRequireDefault(_CeilingHeight2);

var _ZoneDetail2 = __webpack_require__(5);

var _ZoneDetail3 = _interopRequireDefault(_ZoneDetail2);

var _FloorConstruction2 = __webpack_require__(0);

var _FloorConstruction3 = _interopRequireDefault(_FloorConstruction2);

var _ZoneFloor2 = __webpack_require__(6);

var _ZoneFloor3 = _interopRequireDefault(_ZoneFloor2);

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
     * Test if the data line looks like a floor construction line
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */

  }, {
    key: 'FloorConstruction',
    value: function FloorConstruction(lineData) {
      return LooksLike.Test(lineData, _FloorConstruction3.default.Regex);
    }

    /**
     * Test if the data line looks like a zone floor line
     *
     * @param {string} lineData The data line to test
     *
     * @returns {boolean}
     */

  }, {
    key: 'ZoneFloor',
    value: function ZoneFloor(lineData) {
      return LooksLike.Test(lineData, _ZoneFloor3.default.Regex);
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

      if (LooksLike.FloorConstruction(data)) {
        return 'FloorConstruction';
      }

      if (LooksLike.ZoneFloor(data)) {
        return 'ZoneFloor';
      }

      return false;
    }
  }]);

  return LooksLike;
}();

exports.default = LooksLike;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * A class to handle parsing an entire scratch file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _ScratchFileLine = __webpack_require__(9);

var _ScratchFileLine2 = _interopRequireDefault(_ScratchFileLine);

var _LooksLike = __webpack_require__(10);

var _LooksLike2 = _interopRequireDefault(_LooksLike);

var _WindowConstruction = __webpack_require__(4);

var _WindowConstruction2 = _interopRequireDefault(_WindowConstruction);

var _ZoneWindow = __webpack_require__(1);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _HorizontalShadingScheme = __webpack_require__(3);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _CeilingHeight = __webpack_require__(2);

var _CeilingHeight2 = _interopRequireDefault(_CeilingHeight);

var _ZoneDetail = __webpack_require__(5);

var _ZoneDetail2 = _interopRequireDefault(_ZoneDetail);

var _FloorConstruction = __webpack_require__(0);

var _FloorConstruction2 = _interopRequireDefault(_FloorConstruction);

var _ZoneFloor = __webpack_require__(6);

var _ZoneFloor2 = _interopRequireDefault(_ZoneFloor);

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

      this.floorConstructions = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'FloorConstruction';
      }).map(function (floorConstruction) {
        return _FloorConstruction2.default.Build(floorConstruction);
      });

      this.zoneFloors = dataLines.filter(function (line) {
        return _LooksLike2.default.ReverseLookup(line) === 'ZoneFloor';
      }).map(function (zoneFloor) {
        return _ZoneFloor2.default.Build(zoneFloor);
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
  }, {
    key: 'getFloorConstructions',
    value: function getFloorConstructions() {
      return this.floorConstructions;
    }
  }, {
    key: 'getZoneFloors',
    value: function getZoneFloors() {
      return this.zoneFloors;
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
        zoneDetails: this.getZoneDetails(),
        floorConstructions: this.getFloorConstructions(),
        zoneFloors: this.getZoneFloors()
      };
    }
  }]);

  return Parser;
}();

exports.default = Parser;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Orientation = __webpack_require__(8);

var _Orientation2 = _interopRequireDefault(_Orientation);

var _GroundFloor = __webpack_require__(7);

var _GroundFloor2 = _interopRequireDefault(_GroundFloor);

var _ZoneWindow = __webpack_require__(1);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _utils = __webpack_require__(14);

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
     * @param {array} windowConstructions
     * @param {array} zoneWindows
     * @param {array} shading
     * @param {array} ceilingHeights
     * @param {array} zoneDetails
     * @param {array} floorConstructions
     * @param {array} zoneFloors
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
          zoneDetails = _ref.zoneDetails,
          floorConstructions = _ref.floorConstructions,
          zoneFloors = _ref.zoneFloors;

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

        var floors = zoneFloors.filter(function (zoneFloor) {
          return zoneFloor.zoneId === zone.id;
        }).map(function (zoneFloor) {
          var construction = floorConstructions.filter(function (floorCon) {
            return floorCon.id === zoneFloor.constructionId;
          })[0];

          return _extends({}, zoneFloor, construction);
        });

        return {
          id: zone.getId(),
          name: zone.getName(),
          windows: windows,
          onGroundFloor: _GroundFloor2.default.Test(floors)
        };
      });
    }

    /**
     * Build the zones array into a flatt array ready for conversion to CSV
     *
     * @param {array}  zones     The zones array created in ResultsBuilder.Compile()
     * @param {string} reference [Optional] Reference North azimuth. Default 0
     *
     * @returns {array}
     */

  }, {
    key: 'Build',
    value: function Build(zones) {
      var reference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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

          return [zone.name, '', _Orientation2.default.Get(window.azimuth, reference), window.height, window.width, projection, _ZoneWindow2.default.HeadHeight(window.height, eaveOffset), window.construction.name, window.ceilingHeight.height, eaveOffset, pergolaOffset, zone.onGroundFloor ? '0' : ''];
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
/* 13 */
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
  var headerArr = ['Zone Name', '{blank}', 'Orientation', 'Height', 'Width', 'Projection', 'H', 'Window Type', 'Ceiling Height', 'Eave Offset', 'Pergola Offset', 'Level'];
  var headerRow = headerArr.join(',');
  csvContent += headerRow + '\n';

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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(0);
__webpack_require__(7);
__webpack_require__(3);
__webpack_require__(13);
__webpack_require__(8);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(9);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VkNjg5NTcyMDYwMDg2MTk3ZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0Zsb29yQ29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DZWlsaW5nSGVpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2luZG93Q29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lRGV0YWlsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3VuZEZsb29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PcmllbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2NyYXRjaEZpbGVMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9Mb29rc0xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUmVzdWx0c0J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGbG9vckNvbnN0cnVjdGlvbiIsImxpbmVEYXRhIiwiaWQiLCJpc0Nzb2ciLCJyZWdleCIsIlJlZ0V4cCIsIlJlZ2V4IiwiZGF0YSIsImV4ZWMiLCJ0cmltIiwiVGVzdENzb2ciLCJnZXRDb25zdHJ1Y3Rpb25JZCIsImdldElzQ3NvZyIsImNzb2dSZWdleCIsIkNTT0dSZWdleCIsInRlc3QiLCJDb25zdHJ1Y3Rpb25JZFJlZ2V4IiwiWm9uZVdpbmRvdyIsInpvbmVJZCIsIndpbmRvd0lkIiwiaGVpZ2h0Iiwid2lkdGgiLCJhemltdXRoIiwiaGVhZEhlaWdodCIsImhvcml6U2hhZGluZzFJZCIsImhvcml6U2hhZGluZzJJZCIsIkNPTlNUX19aT05FX0lEIiwiQ09OU1RfX1dJTkRPV19JRCIsIkNPTlNUX19IRUlHSFQiLCJDT05TVF9fV0lEVEgiLCJDT05TVF9fQVpJTVVUSCIsIkNPTlNUX19IT1JaX1NIQURJTkdfMSIsIkNPTlNUX19IT1JaX1NIQURJTkdfMiIsImdldFpvbmVJZCIsImdldFdpbmRvd0lkIiwiZ2V0SGVpZ2h0IiwiZ2V0V2lkdGgiLCJnZXRBemltdXRoIiwiZ2V0SGVhZEhlaWdodCIsImdldEhvcml6U2hhZGluZzFJZCIsImdldEhvcml6U2hhZGluZzJJZCIsIndpbmRvd0hlaWdodCIsImVhdmVPZmZzZXQiLCJ3aW5kb3dIZWlnaHRGbG9hdCIsInBhcnNlRmxvYXQiLCJlYXZlT2Zmc2V0RmxvYXQiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJDZWlsaW5nSGVpZ2h0IiwiSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUiLCJlYXZlUHJvamVjdGlvbiIsInBlcmdvbGFQcm9qZWN0aW9uIiwicGVyZ29sYU9mZnNldCIsInByb2plY3Rpb24iLCJDT05TVF9fSUQiLCJDT05TVF9fRUFWRV9QUk9KRUNUSU9OIiwiQ09OU1RfX0VBVkVfT0ZGU0VUIiwiQ09OU1RfX1BFUkdPTEFfUFJPSkVDVElPTiIsIkNPTlNUX19QRVJHT0xBX09GRlNFVCIsImdldFByb2plY3Rpb24iLCJnZXRFYXZlUHJvamVjdGlvbiIsImdldFBlcmdvbGFQcm9qZWN0aW9uIiwiUm91bmRWYWx1ZSIsImdldElkIiwib2Zmc2V0IiwiZWF2ZSIsImdldEVhdmVPZmZzZXQiLCJwZXJnb2xhIiwiZ2V0UGVyZ29sYU9mZnNldCIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwiV2luZG93Q29uc3RydWN0aW9uIiwibmFtZSIsIkNPTlNUX19OQU1FIiwiWm9uZURldGFpbCIsImdldE5hbWUiLCJab25lRmxvb3IiLCJjb25zdHJ1Y3Rpb25JZCIsIkdyb3VuZEZsb29yIiwiZmxvb3JzIiwiZmlsdGVyIiwiZmxvb3IiLCJsZW5ndGgiLCJPcmllbnRhdGlvbiIsInJlZmVyZW5jZSIsImF6aW11dGhJbnQiLCJwYXJzZUludCIsIklzIiwiQ09OU1RfX05fRSIsIkNPTlNUX19FIiwiQ09OU1RfX1NfRSIsIkNPTlNUX19TIiwiQ09OU1RfX1NfVyIsIkNPTlNUX19XIiwiQ09OU1RfX05fVyIsImxpbWl0cyIsInZlY3RvciIsInVwcGVyIiwiTm9ybWFsaXplIiwibG93ZXIiLCJudW1iZXIiLCJhYnMiLCJDT05TVF9fTiIsIlNjcmF0Y2hGaWxlTGluZSIsIkxvb2tzTGlrZSIsIlNoYWRpbmdTY2hlbWUiLCJCdWlsZCIsIlRlc3QiLCJyZWdleHAiLCJQYXJzZXIiLCJmaWxlIiwid2luZG93Q29uc3RydWN0aW9ucyIsInpvbmVXaW5kb3dzIiwiem9uZURldGFpbHMiLCJzaGFkaW5nU2NoZW1lcyIsImNlaWxpbmdIZWlnaHRzIiwiZGF0YUxpbmVzIiwiZ2V0RGF0YUxpbmVzIiwiUmV2ZXJzZUxvb2t1cCIsImxpbmUiLCJtYXAiLCJ3aW5kb3ciLCJ6b25lV2luZG93Iiwic2hhZGluZyIsImNlaWxpbmdIZWlnaHQiLCJ6b25lRGV0YWlsIiwiZmxvb3JDb25zdHJ1Y3Rpb25zIiwiZmxvb3JDb25zdHJ1Y3Rpb24iLCJ6b25lRmxvb3JzIiwiem9uZUZsb29yIiwiZ2V0V2luZG93Q29uc3RydWN0aW9ucyIsImdldFpvbmVXaW5kb3dzIiwiZ2V0U2hhZGluZyIsImdldENlaWxpbmdIZWlnaHRzIiwiZ2V0Wm9uZURldGFpbHMiLCJnZXRGbG9vckNvbnN0cnVjdGlvbnMiLCJnZXRab25lRmxvb3JzIiwiUmVzdWx0c0J1aWxkZXIiLCJ6b25lIiwid2luZG93cyIsImNvbnN0cnVjdGlvbiIsImNvbnMiLCJzaGFkaW5nU2NoZW1lIiwic2hhZGUiLCJjZWlsaW5nIiwiZmxvb3JDb24iLCJvbkdyb3VuZEZsb29yIiwiem9uZXMiLCJjc3YiLCJ3aW5kb3dDc3YiLCJHZXQiLCJIZWFkSGVpZ2h0Iiwid29ya2VyIiwiV29ya2VyIiwiY3JlYXRlUHJldmlldyIsInJlc3VsdHMiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0YW5jZSIsImltcG9ydE5vZGUiLCJjb250ZW50IiwidGFibGVCb2R5IiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCJyZXN1bHQiLCJ0YWJsZVJvdyIsImNyZWF0ZUVsZW1lbnQiLCJyZXMiLCJ0YWJsZUNlbGwiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZURvd25sb2FkIiwiY3N2Q29udGVudCIsImhlYWRlckFyciIsImhlYWRlclJvdyIsImpvaW4iLCJyb3dBcnJheSIsInJvdyIsImVuY29kZWRVcmkiLCJlbmNvZGVVUkkiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwiaGlkZGVuIiwiaW5uZXJIVE1MIiwiYm9keSIsImNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVTZWxlY3RvciIsImFsZXJ0IiwiZmlsZXMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsIm9uY2hhbmdlIiwiZmxhdHRlbiIsInByb3RvdHlwZSIsImNvbmNhdCIsImFyciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7OztJQUdNQSxpQjtB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biBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdlZDY4OTU3MjA2MDA4NjE5N2VmIiwiLyoqXG4gKiBDbGFzcyBGbG9vckNvbnN0cnVjdGlvblxuICovXG5jbGFzcyBGbG9vckNvbnN0cnVjdGlvbiB7XG5cbiAgc3RhdGljIENvbnN0cnVjdGlvbklkUmVnZXggPSAnKDI0WzEtOV18Mls1LTldXFxcXGR8M1sxLTNdXFxcXGR8MzQwKSc7XG4gIHN0YXRpYyBSZWdleCA9IGBeIDIke0Zsb29yQ29uc3RydWN0aW9uLkNvbnN0cnVjdGlvbklkUmVnZXh9YDtcbiAgc3RhdGljIENTT0dSZWdleCA9ICdeIDIoMjRbMS05XXwyWzUtOV1cXFxcZHwzWzEtM11cXFxcZHwzNDApICAgKC57N30pKiggMTggMTAwKSc7XG5cbiAgaWQgPSAnJztcbiAgaXNDc29nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoRmxvb3JDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLmlzQ3NvZyA9IEZsb29yQ29uc3RydWN0aW9uLlRlc3RDc29nKGxpbmVEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnN0cnVjdGlvbiBpZCB0aGF0IHRoaXMgZmxvb3IgY29uc3RydWN0aW9uIGJlbG9uZ3MgdG9cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlL2ZhbHNlIGluZGljYXRpbmcgaWYgdGhlIGZsb29yaW5nIHR5cGUgaW4gdGhlIHpvbmUgaXMgQ1NPR1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldElzQ3NvZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Nzb2c7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB0aGUgZGF0YSBsaW5lIHRvIHNlZSBpZiB0aGVyZSBpcyBjb25jcmV0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBUZXN0Q3NvZyhsaW5lRGF0YSkge1xuICAgIGNvbnN0IGNzb2dSZWdleCA9IG5ldyBSZWdFeHAoRmxvb3JDb25zdHJ1Y3Rpb24uQ1NPR1JlZ2V4KTtcbiAgICByZXR1cm4gY3NvZ1JlZ2V4LnRlc3QobGluZURhdGEpO1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEZsb29yQ29uc3RydWN0aW9uKGRhdGEpO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldENvbnN0cnVjdGlvbklkKCksXG4gICAgICBpc0Nzb2c6IHRoaXMuZ2V0SXNDc29nKClcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvb3JDb25zdHJ1Y3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvRmxvb3JDb25zdHJ1Y3Rpb24uanMiLCIvKipcbiAqIENsYXNzIHRvIHBhcnNlIHdpbmRvdyBpbmZvcm1hdGlvbiBpbnNpZGUgYSB6b25lIHNlY3Rpb25cbiAqL1xuY2xhc3MgWm9uZVdpbmRvdyB7XG5cbiAgc3RhdGljIENPTlNUX19aT05FX0lEID0gMTtcbiAgc3RhdGljIENPTlNUX19XSU5ET1dfSUQgPSAyO1xuICBzdGF0aWMgQ09OU1RfX0hFSUdIVCA9IDY7XG4gIHN0YXRpYyBDT05TVF9fV0lEVEggPSA3O1xuICBzdGF0aWMgQ09OU1RfX0FaSU1VVEggPSA4O1xuICBzdGF0aWMgQ09OU1RfX0hPUlpfU0hBRElOR18xID0gOTtcbiAgc3RhdGljIENPTlNUX19IT1JaX1NIQURJTkdfMiA9IDEwO1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDMoLnszfSkoKCAoMTApfCggIFswLTldKSkpKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pJztcblxuICB6b25lSWQgPSAnJztcbiAgd2luZG93SWQgPSAnJztcbiAgaGVpZ2h0ID0gJyc7XG4gIHdpZHRoID0gJyc7XG4gIGF6aW11dGggPSAnJztcbiAgaGVhZEhlaWdodCA9ICcnOyAvLyBUaGlzIHZhbHVlIGlzbid0IHVzZWQsIGp1c3QgaGVyZSB0byBpdCBjYW4gaG9sZCBhbiBlbXB0eSBjZWxsIGluIHRoZSBvdXRwdXQgQ1NWXG4gIGhvcml6U2hhZGluZzFJZCA9ICcnO1xuICBob3JpelNoYWRpbmcySWQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChab25lV2luZG93LlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLnpvbmVJZCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fWk9ORV9JRF0udHJpbSgpO1xuICAgIHRoaXMud2luZG93SWQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX1dJTkRPV19JRF0udHJpbSgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IRUlHSFRdLnRyaW0oKTtcbiAgICB0aGlzLndpZHRoID0gZGF0YVtab25lV2luZG93LkNPTlNUX19XSURUSF0udHJpbSgpO1xuICAgIHRoaXMuYXppbXV0aCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fQVpJTVVUSF0udHJpbSgpO1xuICAgIHRoaXMuaG9yaXpTaGFkaW5nMUlkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IT1JaX1NIQURJTkdfMV0udHJpbSgpO1xuICAgIHRoaXMuaG9yaXpTaGFkaW5nMklkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IT1JaX1NIQURJTkdfMl0udHJpbSgpO1xuICB9XG5cbiAgZ2V0Wm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVJZDtcbiAgfVxuXG4gIGdldFdpbmRvd0lkKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd0lkO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0QXppbXV0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hemltdXRoO1xuICB9XG5cbiAgZ2V0SGVhZEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkSGVpZ2h0O1xuICB9XG5cbiAgZ2V0SG9yaXpTaGFkaW5nMUlkKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6U2hhZGluZzFJZDtcbiAgfVxuXG4gIGdldEhvcml6U2hhZGluZzJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3JpelNoYWRpbmcySWQ7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgem9uZUlkOiB0aGlzLmdldFpvbmVJZCgpLFxuICAgICAgd2luZG93SWQ6IHRoaXMuZ2V0V2luZG93SWQoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICBhemltdXRoOiB0aGlzLmdldEF6aW11dGgoKSxcbiAgICAgIGhlYWRIZWlnaHQ6IHRoaXMuZ2V0SGVhZEhlaWdodCgpLFxuICAgICAgaG9yaXpTaGFkaW5nMUlkOiB0aGlzLmdldEhvcml6U2hhZGluZzFJZCgpLFxuICAgICAgaG9yaXpTaGFkaW5nMklkOiB0aGlzLmdldEhvcml6U2hhZGluZzJJZCgpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBab25lV2luZG93KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgSGVhZCBIZWlnaHQgb2YgYSB3aW5kb3cgZnJvbSB0aGUgaGVpZ2h0IG9mIHRoZSB3aW5kb3cgYW5kIHRoZSBlYXZlIG9mZnNldFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gd2luZG93SGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHdpbmRvd1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZWF2ZU9mZnNldCAgIFRoZSBlYXZlIG9mZnNldCBvZiB0aGUgd2luZG93XG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgSGVhZEhlaWdodCh3aW5kb3dIZWlnaHQsIGVhdmVPZmZzZXQpIHtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHRGbG9hdCA9IHdpbmRvd0hlaWdodCA9PT0gJycgPyAwIDogcGFyc2VGbG9hdCh3aW5kb3dIZWlnaHQpO1xuICAgIGNvbnN0IGVhdmVPZmZzZXRGbG9hdCA9IGVhdmVPZmZzZXQgPT09ICcnID8gMCA6IHBhcnNlRmxvYXQoZWF2ZU9mZnNldCk7XG4gICAgcmV0dXJuICh3aW5kb3dIZWlnaHRGbG9hdCArIGVhdmVPZmZzZXRGbG9hdCkudG9GaXhlZCgyKS50b1N0cmluZygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZVdpbmRvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ab25lV2luZG93LmpzIiwiLyoqXG4gKiBDbGFzcyBDZWlsaW5nSGVpZ2h0XG4gKi9cbmNsYXNzIENlaWxpbmdIZWlnaHQge1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDMoLnszfSk3MDAoLns2fSkoLns2fSkoLns2fSkoLns2fSknO1xuXG4gIHpvbmVJZCA9ICcnO1xuICBoZWlnaHQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChDZWlsaW5nSGVpZ2h0LlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLnpvbmVJZCA9IGRhdGFbMV0udHJpbSgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gZGF0YVszXS50cmltKCk7XG4gIH1cblxuICBnZXRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUlkO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB6b25lSWQ6IHRoaXMuZ2V0Wm9uZUlkKCksXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IENlaWxpbmdIZWlnaHQoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWlsaW5nSGVpZ2h0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0NlaWxpbmdIZWlnaHQuanMiLCIvKipcbiAqIEJyZWFrIHRoZSBIb3Jpem9udGFsIFNoYWRpbmcgU2NoZW1lIGRhdGEgaW50byBpdHMgdmFyaW91cyBwYXJ0c1xuICovXG5jbGFzcyBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSB7XG5cbiAgLyoqXG4gICAqIENvbnN0YW50cyB0aGF0IG1hcCB0aGUgdmFyaW91cyBiaXRzIG9mIGRhdGEgdG8gdGhlIHNlY3Rpb24gb2YgcmVnZXhcbiAgICovXG4gIHN0YXRpYyBDT05TVF9fSUQgPSAxO1xuICBzdGF0aWMgQ09OU1RfX0VBVkVfUFJPSkVDVElPTiA9IDI7XG4gIHN0YXRpYyBDT05TVF9fRUFWRV9PRkZTRVQgPSAzO1xuICBzdGF0aWMgQ09OU1RfX1BFUkdPTEFfUFJPSkVDVElPTiA9IDY7XG4gIHN0YXRpYyBDT05TVF9fUEVSR09MQV9PRkZTRVQgPSA3O1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDEgMjAoLnszfSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkkJztcblxuICBpZCA9ICcnO1xuICBlYXZlUHJvamVjdGlvbiA9ICcnO1xuICBlYXZlT2Zmc2V0ID0gJyc7XG4gIHBlcmdvbGFQcm9qZWN0aW9uID0gJyc7XG4gIHBlcmdvbGFPZmZzZXQgPSAnJztcbiAgcHJvamVjdGlvbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKEhvcml6b250YWxTaGFkaW5nU2NoZW1lLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fSURdLnRyaW0oKTtcbiAgICB0aGlzLmVhdmVQcm9qZWN0aW9uID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fRUFWRV9QUk9KRUNUSU9OXS50cmltKCk7XG4gICAgdGhpcy5lYXZlT2Zmc2V0ID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fRUFWRV9PRkZTRVRdLnRyaW0oKTtcbiAgICB0aGlzLnBlcmdvbGFQcm9qZWN0aW9uID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OXS50cmltKCk7XG4gICAgdGhpcy5wZXJnb2xhT2Zmc2V0ID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fUEVSR09MQV9PRkZTRVRdLnRyaW0oKTtcbiAgICB0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIGhpZ2hlc3QgcHJvamVjdGlvbiB2YWx1ZSBhbmQgcmV0dXJuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRQcm9qZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3Rpb24gPSBwYXJzZUZsb2F0KHRoaXMuZ2V0RWF2ZVByb2plY3Rpb24oKSkgPiBwYXJzZUZsb2F0KHRoaXMuZ2V0UGVyZ29sYVByb2plY3Rpb24oKSkgP1xuICAgICAgdGhpcy5nZXRFYXZlUHJvamVjdGlvbigpIDpcbiAgICAgIHRoaXMuZ2V0UGVyZ29sYVByb2plY3Rpb24oKTtcblxuICAgIHJldHVybiBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5Sb3VuZFZhbHVlKHByb2plY3Rpb24pO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXRFYXZlT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmVhdmVPZmZzZXQ7XG4gIH1cblxuICBnZXRFYXZlUHJvamVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lYXZlUHJvamVjdGlvbjtcbiAgfVxuXG4gIGdldFBlcmdvbGFPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyZ29sYU9mZnNldDtcbiAgfVxuXG4gIGdldFBlcmdvbGFQcm9qZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlcmdvbGFQcm9qZWN0aW9uO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBwcm9qZWN0aW9uOiB0aGlzLmdldFByb2plY3Rpb24oKSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICBlYXZlOiB0aGlzLmdldEVhdmVPZmZzZXQoKSxcbiAgICAgICAgcGVyZ29sYTogdGhpcy5nZXRQZXJnb2xhT2Zmc2V0KClcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEhvcml6b250YWxTaGFkaW5nU2NoZW1lKGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdW5kIHRoZSBwcm92aWRlZCB2YWx1ZSAocHJvamVjdGlvbikgdG8gdGhlIG5lYXJlc3QgMC4wNVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHJvdW5kXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgUm91bmRWYWx1ZSh2YWx1ZSkge1xuICAgIC8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA0MTM2MDIvMTU2MDU5M1xuICAgIHJldHVybiAoTWF0aC5yb3VuZCh2YWx1ZSAqIDIwKSAvIDIwKS50b0ZpeGVkKDIpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuanMiLCIvKipcbiAqIEJyZWFrIGEgV2luZG93IGNvbnN0cnVjdGlvbiBkYXRhIGxpbmUgaW50byBpdHMgdmFyaW91cyBwYXJ0c1xuICovXG5jbGFzcyBXaW5kb3dDb25zdHJ1Y3Rpb24ge1xuXG4gIHN0YXRpYyBDT05TVF9fSUQgPSAzO1xuICBzdGF0aWMgQ09OU1RfX05BTUUgPSAnJztcblxuICBzdGF0aWMgUmVnZXggPSAnXiBcXFxcZCguezN9KVsgXFxcXGRdKihbYS16QS1aXVthLXpBLVpcXFxcLVxcXFxkXXs5fVsgYS16QS1aXVthLXpBLVpdPyknO1xuXG4gIGlkID0gJyc7XG4gIG5hbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChXaW5kb3dDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLm5hbWUgPSBkYXRhWzJdLnRyaW0oKTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgV2luZG93Q29uc3RydWN0aW9uKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93Q29uc3RydWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1dpbmRvd0NvbnN0cnVjdGlvbi5qcyIsIi8qKlxuICogQ2xhc3MgWm9uZURldGFpbFxuICovXG5jbGFzcyBab25lRGV0YWlsIHtcblxuICBzdGF0aWMgUmVnZXggPSAnXkMgWjAwPyhcXFxcZHsxLDN9KSA9PiAoLiopJCc7XG5cbiAgaWQgPSAnJztcbiAgbmFtZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFpvbmVEZXRhaWwuUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLm5hbWUgPSBkYXRhWzJdLnRyaW0oKTtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBuYW1lOiB0aGlzLmdldE5hbWUoKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgWm9uZURldGFpbChkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFpvbmVEZXRhaWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvWm9uZURldGFpbC5qcyIsImltcG9ydCBGbG9vckNvbnN0cnVjdGlvbiBmcm9tICcuL0Zsb29yQ29uc3RydWN0aW9uJztcbi8qKlxuICogQ2xhc3MgWm9uZUZsb29yXG4gKi9cbmNsYXNzIFpvbmVGbG9vciB7XG5cbiAgc3RhdGljIFJlZ2V4ID0gYCAzKC4uLikoJHtGbG9vckNvbnN0cnVjdGlvbi5Db25zdHJ1Y3Rpb25JZFJlZ2V4fSlgO1xuXG4gIHpvbmVJZCA9ICcnO1xuICBjb25zdHJ1Y3Rpb25JZCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFpvbmVGbG9vci5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy56b25lSWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLmNvbnN0cnVjdGlvbklkID0gZGF0YVsyXS50cmltKCk7XG4gIH1cblxuICBnZXRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUlkO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0aW9uSWQ7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgem9uZUlkOiB0aGlzLmdldFpvbmVJZCgpLFxuICAgICAgY29uc3RydWN0aW9uSWQ6IHRoaXMuZ2V0Q29uc3RydWN0aW9uSWQoKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgWm9uZUZsb29yKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZUZsb29yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1pvbmVGbG9vci5qcyIsIi8qKlxuICogQ2xhc3MgR3JvdW5kRmxvb3JcbiAqL1xuY2xhc3MgR3JvdW5kRmxvb3Ige1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIGFueSBvZiB0aGUgcHJvdmlkZWQgZmxvb3JzIGhhdmUgYSBDU09HIGNvbnN0cnVjdGlvbiwgaW5kaWNhdGluZyB0aGUgem9uZSBpcyBsaWtlbHkgb24gdGhlIGdyb3VuZCBmbG9vclxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBmbG9vcnMgVGhlIGZsb29ycyB0byBjaGVjayBmb3IgQ1NPR1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBUZXN0KGZsb29ycykge1xuICAgIHJldHVybiBmbG9vcnMuZmlsdGVyKGZsb29yID0+IGZsb29yLmlzQ3NvZykubGVuZ3RoID4gMDtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VuZEZsb29yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0dyb3VuZEZsb29yLmpzIiwiLyoqXG4gKiBDbGFzcyBPcmllbnRhdGlvblxuICovXG5jbGFzcyBPcmllbnRhdGlvbiB7XG5cbiAgc3RhdGljIENPTlNUX19OID0geyBsb3dlcjogMjIsIHVwcGVyOiAzMzggfTtcbiAgc3RhdGljIENPTlNUX19OX0UgPSB7IGxvd2VyOiAyMywgdXBwZXI6IDY3IH07XG4gIHN0YXRpYyBDT05TVF9fRSA9IHsgbG93ZXI6IDY4LCB1cHBlcjogMTEyIH07XG4gIHN0YXRpYyBDT05TVF9fU19FID0geyBsb3dlcjogMTEzLCB1cHBlcjogMTU3IH07XG4gIHN0YXRpYyBDT05TVF9fUyA9IHsgbG93ZXI6IDE1OCwgdXBwZXI6IDIwMiB9O1xuICBzdGF0aWMgQ09OU1RfX1NfVyA9IHsgbG93ZXI6IDIwMywgdXBwZXI6IDI0NyB9O1xuICBzdGF0aWMgQ09OU1RfX1cgPSB7IGxvd2VyOiAyNDgsIHVwcGVyOiAyOTIgfTtcbiAgc3RhdGljIENPTlNUX19OX1cgPSB7IGxvd2VyOiAyOTMsIHVwcGVyOiAzMzcgfTtcblxuICAvKipcbiAgICogR2V0IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhemltdXRoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhemltdXRoICAgQXppbXV0aCB2YWx1ZSBiZWluZyBjaGFuZ2VkIHRvIG9yaWVudGF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2UgUmVmZXJlbmNlIGF6aW11dGggZm9yIE5vcnRoXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBHZXQoYXppbXV0aCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXppbXV0aEludCA9IHBhcnNlSW50KGF6aW11dGgsIDEwKTtcblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19OX0UpKSB7XG4gICAgICByZXR1cm4gJ05FJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fRSkpIHtcbiAgICAgIHJldHVybiAnRSc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1NfRSkpIHtcbiAgICAgIHJldHVybiAnU0UnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19TKSkge1xuICAgICAgcmV0dXJuICdTJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fU19XKSkge1xuICAgICAgcmV0dXJuICdTVyc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1cpKSB7XG4gICAgICByZXR1cm4gJ1cnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19OX1cpKSB7XG4gICAgICByZXR1cm4gJ05XJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ04nO1xuICB9XG5cbiAgc3RhdGljIElzKGF6aW11dGgsIHJlZmVyZW5jZSwgbGltaXRzKSB7XG4gICAgY29uc3QgdmVjdG9yID0ge1xuICAgICAgdXBwZXI6IE9yaWVudGF0aW9uLk5vcm1hbGl6ZShwYXJzZUludChyZWZlcmVuY2UsIDEwKSArIGxpbWl0cy51cHBlciksXG4gICAgICBsb3dlcjogT3JpZW50YXRpb24uTm9ybWFsaXplKHBhcnNlSW50KHJlZmVyZW5jZSwgMTApICsgbGltaXRzLmxvd2VyKVxuICAgIH07XG5cbiAgICByZXR1cm4gKGF6aW11dGggPj0gdmVjdG9yLmxvd2VyICYmIGF6aW11dGggPD0gdmVjdG9yLnVwcGVyKVxuICB9XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBhIHZhbHVlIHRvIGJlIHdpdGhpbiB0aGUgMC0zNjAgcmFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHtpbnR9IG51bWJlclxuICAgKlxuICAgKiBAcmV0dXJucyB7aW50fVxuICAgKi9cbiAgc3RhdGljIE5vcm1hbGl6ZShudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgcmV0dXJuIDM2MCAtIE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA+IDM2MCkge1xuICAgICAgcmV0dXJuIChudW1iZXIgLSAzNjApO1xuICAgIH1cblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmllbnRhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9PcmllbnRhdGlvbi5qcyIsImltcG9ydCBDZWlsaW5nSGVpZ2h0IGZyb20gJy4vQ2VpbGluZ0hlaWdodCc7XG5pbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG5pbXBvcnQgTG9va3NMaWtlIGZyb20gJy4vdXRpbHMvTG9va3NMaWtlJztcbmltcG9ydCBXaW5kb3dDb25zdHJ1Y3Rpb24gZnJvbSAnLi9XaW5kb3dDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVXaW5kb3cgZnJvbSAnLi9ab25lV2luZG93JztcbmltcG9ydCBab25lRGV0YWlsIGZyb20gJy4vWm9uZURldGFpbCc7XG5pbXBvcnQgRmxvb3JDb25zdHJ1Y3Rpb24gZnJvbSAnLi9GbG9vckNvbnN0cnVjdGlvbic7XG5pbXBvcnQgWm9uZUZsb29yIGZyb20gJy4vWm9uZUZsb29yJztcblxuLyoqXG4gKiBDbGFzcyBTY3JhdGNoRmlsZUxpbmVcbiAqL1xuY2xhc3MgU2NyYXRjaEZpbGVMaW5lIHtcblxuICAvKipcbiAgICogQnVpbGQgYSBkYXRhIGxpbmUgaW50byB0aGUgYXBwcm9wcmlhdGUgY2xhc3Mgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHBhcnNlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R8Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgaWYgKExvb2tzTGlrZS5TaGFkaW5nU2NoZW1lKGRhdGEpKSB7XG4gICAgICByZXR1cm4gSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5DZWlsaW5nSGVpZ2h0KGRhdGEpKSB7XG4gICAgICByZXR1cm4gQ2VpbGluZ0hlaWdodC5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLldpbmRvd0NvbnN0cnVjdGlvbihkYXRhKSkge1xuICAgICAgcmV0dXJuIFdpbmRvd0NvbnN0cnVjdGlvbi5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVXaW5kb3coZGF0YSkpIHtcbiAgICAgIHJldHVybiBab25lV2luZG93LkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZURldGFpbChkYXRhKSkge1xuICAgICAgcmV0dXJuIFpvbmVEZXRhaWwuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5GbG9vckNvbnN0cnVjdGlvbihkYXRhKSkge1xuICAgICAgcmV0dXJuIEZsb29yQ29uc3RydWN0aW9uLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZUZsb29yKGRhdGEpKSB7XG4gICAgICByZXR1cm4gWm9uZUZsb29yLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmF0Y2hGaWxlTGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9TY3JhdGNoRmlsZUxpbmUuanMiLCJpbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi4vSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnO1xuaW1wb3J0IFdpbmRvd0NvbnN0cnVjdGlvbiBmcm9tICcuLi9XaW5kb3dDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVXaW5kb3cgZnJvbSAnLi4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuLi9DZWlsaW5nSGVpZ2h0JztcbmltcG9ydCBab25lRGV0YWlsIGZyb20gJy4uL1pvbmVEZXRhaWwnO1xuaW1wb3J0IEZsb29yQ29uc3RydWN0aW9uIGZyb20gJy4uL0Zsb29yQ29uc3RydWN0aW9uJztcbmltcG9ydCBab25lRmxvb3IgZnJvbSBcIi4uL1pvbmVGbG9vclwiO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gY29tcGFyZSBhIGRhdGEgc3RyaW5nIGFuZCBpbmRpY2F0ZSB3aGF0IHR5cGUgb2YgZGF0YSBpdCBsb29rcyBsaWtlXG4gKi9cbmNsYXNzIExvb2tzTGlrZSB7XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgaG9yaXpvbnRhbCBzaGFkaW5nIHNjaGVtZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFNoYWRpbmdTY2hlbWUobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIEhvcml6b250YWxTaGFkaW5nU2NoZW1lLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHdpbmRvdyBjb25zdHJ1Y3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBXaW5kb3dDb25zdHJ1Y3Rpb24obGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIFdpbmRvd0NvbnN0cnVjdGlvbi5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSB6b25lIHdpbmRvd1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFpvbmVXaW5kb3cobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIFpvbmVXaW5kb3cuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgY2VpbGluZyBoZWlnaHQgbGluZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIENlaWxpbmdIZWlnaHQobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIENlaWxpbmdIZWlnaHQuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgem9uZSBkZXRhaWwgbGluZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFpvbmVEZXRhaWwobGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIFpvbmVEZXRhaWwuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgZmxvb3IgY29uc3RydWN0aW9uIGxpbmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBGbG9vckNvbnN0cnVjdGlvbihsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgRmxvb3JDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgem9uZSBmbG9vciBsaW5lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgWm9uZUZsb29yKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBab25lRmxvb3IuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgcmVnZXggdGVzdCBhZ2FpbnN0IHRoZSBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhICBUaGUgZGF0YSB0byB0ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWdleCBUaGUgcmVnZXggcGF0dGVybiB0byB0ZXN0IHdpdGhcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgVGVzdChkYXRhLCByZWdleCkge1xuICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAocmVnZXgpO1xuICAgIHJldHVybiByZWdleHAudGVzdChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hhdCB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBSZXZlcnNlTG9va3VwKGRhdGEpIHtcbiAgICBpZiAoTG9va3NMaWtlLlNoYWRpbmdTY2hlbWUoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuQ2VpbGluZ0hlaWdodChkYXRhKSkge1xuICAgICAgcmV0dXJuICdDZWlsaW5nSGVpZ2h0JztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLldpbmRvd0NvbnN0cnVjdGlvbihkYXRhKSkge1xuICAgICAgcmV0dXJuICdXaW5kb3dDb25zdHJ1Y3Rpb24nO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZVdpbmRvdyhkYXRhKSkge1xuICAgICAgcmV0dXJuICdab25lV2luZG93JztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVEZXRhaWwoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnWm9uZURldGFpbCc7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5GbG9vckNvbnN0cnVjdGlvbihkYXRhKSkge1xuICAgICAgcmV0dXJuICdGbG9vckNvbnN0cnVjdGlvbic7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lRmxvb3IoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnWm9uZUZsb29yJztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb29rc0xpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvTG9va3NMaWtlLmpzIiwiLyoqXG4gKiBBIGNsYXNzIHRvIGhhbmRsZSBwYXJzaW5nIGFuIGVudGlyZSBzY3JhdGNoIGZpbGVcbiAqL1xuaW1wb3J0IFNjcmF0Y2hGaWxlTGluZSBmcm9tICcuL1NjcmF0Y2hGaWxlTGluZSc7XG5pbXBvcnQgTG9va3NMaWtlIGZyb20gJy4vdXRpbHMvTG9va3NMaWtlJztcbmltcG9ydCBXaW5kb3dDb25zdHJ1Y3Rpb24gZnJvbSAnLi9XaW5kb3dDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVXaW5kb3cgZnJvbSAnLi9ab25lV2luZG93JztcbmltcG9ydCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSBmcm9tICcuL0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbmltcG9ydCBDZWlsaW5nSGVpZ2h0IGZyb20gJy4vQ2VpbGluZ0hlaWdodCc7XG5pbXBvcnQgWm9uZURldGFpbCBmcm9tICcuL1pvbmVEZXRhaWwnO1xuaW1wb3J0IEZsb29yQ29uc3RydWN0aW9uIGZyb20gJy4vRmxvb3JDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVGbG9vciBmcm9tICcuL1pvbmVGbG9vcic7XG5cbmNsYXNzIFBhcnNlciB7XG5cbiAgd2luZG93Q29uc3RydWN0aW9ucyA9IFtdO1xuICB6b25lV2luZG93cyA9IFtdO1xuICB6b25lRGV0YWlscyA9IFtdO1xuICBzaGFkaW5nU2NoZW1lcyA9IFtdO1xuICBjZWlsaW5nSGVpZ2h0cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSBmaWxlIEEgc2NyYXRjaGZpbGUgYXJyYXlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICB9XG5cbiAgcHJvY2VzcygpIHtcbiAgICBjb25zdCBkYXRhTGluZXMgPSB0aGlzLmdldERhdGFMaW5lcygpO1xuXG4gICAgLy8gRmlsdGVyIHRoZSBhcnJheXMgdG8gb25seSBpbmNsdWRlIHRoZSByZWxhdGVkIGRhdGEsIHRoZW4gYnVpbGQgdGhlIGRhdGEgbGluZSBpbnRvIHRoZSBhcHByb3ByaWF0ZSBjbGFzc1xuICAgIHRoaXMud2luZG93Q29uc3RydWN0aW9ucyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnV2luZG93Q29uc3RydWN0aW9uJylcbiAgICAgIC5tYXAod2luZG93ID0+IFdpbmRvd0NvbnN0cnVjdGlvbi5CdWlsZCh3aW5kb3cpKTtcblxuICAgIHRoaXMuem9uZVdpbmRvd3MgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1pvbmVXaW5kb3cnKVxuICAgICAgLm1hcCh6b25lV2luZG93ID0+IFpvbmVXaW5kb3cuQnVpbGQoem9uZVdpbmRvdykpO1xuXG4gICAgdGhpcy5zaGFkaW5nU2NoZW1lcyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnKVxuICAgICAgLm1hcChzaGFkaW5nID0+IEhvcml6b250YWxTaGFkaW5nU2NoZW1lLkJ1aWxkKHNoYWRpbmcpKTtcblxuICAgIHRoaXMuY2VpbGluZ0hlaWdodHMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ0NlaWxpbmdIZWlnaHQnKVxuICAgICAgLm1hcChjZWlsaW5nSGVpZ2h0ID0+IENlaWxpbmdIZWlnaHQuQnVpbGQoY2VpbGluZ0hlaWdodCkpO1xuXG4gICAgdGhpcy56b25lRGV0YWlscyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnWm9uZURldGFpbCcpXG4gICAgICAubWFwKHpvbmVEZXRhaWwgPT4gWm9uZURldGFpbC5CdWlsZCh6b25lRGV0YWlsKSk7XG5cbiAgICB0aGlzLmZsb29yQ29uc3RydWN0aW9ucyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnRmxvb3JDb25zdHJ1Y3Rpb24nKVxuICAgICAgLm1hcChmbG9vckNvbnN0cnVjdGlvbiA9PiBGbG9vckNvbnN0cnVjdGlvbi5CdWlsZChmbG9vckNvbnN0cnVjdGlvbikpO1xuXG4gICAgdGhpcy56b25lRmxvb3JzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdab25lRmxvb3InKVxuICAgICAgLm1hcCh6b25lRmxvb3IgPT4gWm9uZUZsb29yLkJ1aWxkKHpvbmVGbG9vcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGluZXMgb2YgZGF0YSB0aGF0IG1hdGNoIGEgdHlwZSB3ZSdyZSBpbnRlcmVzdGVkIGluXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIGdldERhdGFMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLmZpbHRlcihsaW5lID0+IFNjcmF0Y2hGaWxlTGluZS5CdWlsZChsaW5lKSAhPT0gZmFsc2UpO1xuICB9XG5cbiAgZ2V0V2luZG93Q29uc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dDb25zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0Wm9uZVdpbmRvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZVdpbmRvd3M7XG4gIH1cblxuICBnZXRTaGFkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnNoYWRpbmdTY2hlbWVzO1xuICB9XG5cbiAgZ2V0Q2VpbGluZ0hlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VpbGluZ0hlaWdodHM7XG4gIH1cblxuICBnZXRab25lRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy56b25lRGV0YWlscztcbiAgfVxuXG4gIGdldEZsb29yQ29uc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5mbG9vckNvbnN0cnVjdGlvbnM7XG4gIH1cblxuICBnZXRab25lRmxvb3JzKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVGbG9vcnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCBkYXRhIGluIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBkZWNvbnN0cnVjdGVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAqL1xuICBnZXRBbGxEYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aW5kb3dDb25zdHJ1Y3Rpb25zOiB0aGlzLmdldFdpbmRvd0NvbnN0cnVjdGlvbnMoKSxcbiAgICAgIHpvbmVXaW5kb3dzOiB0aGlzLmdldFpvbmVXaW5kb3dzKCksXG4gICAgICBzaGFkaW5nOiB0aGlzLmdldFNoYWRpbmcoKSxcbiAgICAgIGNlaWxpbmdIZWlnaHRzOiB0aGlzLmdldENlaWxpbmdIZWlnaHRzKCksXG4gICAgICB6b25lRGV0YWlsczogdGhpcy5nZXRab25lRGV0YWlscygpLFxuICAgICAgZmxvb3JDb25zdHJ1Y3Rpb25zOiB0aGlzLmdldEZsb29yQ29uc3RydWN0aW9ucygpLFxuICAgICAgem9uZUZsb29yczogdGhpcy5nZXRab25lRmxvb3JzKClcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1BhcnNlci5qcyIsImltcG9ydCBPcmllbnRhdGlvbiBmcm9tICcuL09yaWVudGF0aW9uJztcbmltcG9ydCBHcm91bmRGbG9vciBmcm9tICcuL0dyb3VuZEZsb29yJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi91dGlscyc7XG4vKipcbiAqIENsYXNzIFJlc3VsdHNCdWlsZGVyXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHRha2UgdmFyaW91cyBhcnJheXMgb2YgZGF0YSBsaW5lcywgYnVpbGQgdGhlbSBpbnRvIHRoZWlyIGFwcHJvcHJpYXRlIGNsYXNzZXMsXG4gKiBsaW5rIHRoZW0gdGhyb3VnaCB2YXJpb3VzIElEJ3MsIGFuZCB0aGVuIGNyZWF0ZSBtdWx0aXBsZSBvdXRwdXQgbGluZXNcbiAqL1xuXG5jbGFzcyBSZXN1bHRzQnVpbGRlciB7XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIHZhcmlvdXMgYXJyYXlzIGludG8gYSBzaW5nbGUgYXJyYXlcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gd2luZG93Q29uc3RydWN0aW9uc1xuICAgKiBAcGFyYW0ge2FycmF5fSB6b25lV2luZG93c1xuICAgKiBAcGFyYW0ge2FycmF5fSBzaGFkaW5nXG4gICAqIEBwYXJhbSB7YXJyYXl9IGNlaWxpbmdIZWlnaHRzXG4gICAqIEBwYXJhbSB7YXJyYXl9IHpvbmVEZXRhaWxzXG4gICAqIEBwYXJhbSB7YXJyYXl9IGZsb29yQ29uc3RydWN0aW9uc1xuICAgKiBAcGFyYW0ge2FycmF5fSB6b25lRmxvb3JzXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBzdGF0aWMgQ29tcGlsZSh7XG4gICAgd2luZG93Q29uc3RydWN0aW9ucywgem9uZVdpbmRvd3MsIHNoYWRpbmcsIGNlaWxpbmdIZWlnaHRzLCB6b25lRGV0YWlscywgZmxvb3JDb25zdHJ1Y3Rpb25zLCB6b25lRmxvb3JzXG4gIH0pIHtcbiAgICByZXR1cm4gem9uZURldGFpbHMubWFwKCh6b25lKSA9PiB7XG4gICAgICAvLyBGaWx0ZXIgdGhlIHpvbmUgd2luZG93cyBmb3Igb25seSB3aW5kb3dzIGluIHRoaXMgem9uZSwgYW5kIHRoZW4gbWFwIHRoZSB3aW5kb3cgY29uc3RydWN0aW9uLCBzaGFkaW5nIGFuZCBjZWlsaW5nIGhlaWdodCBkZXRhaWxzXG4gICAgICBjb25zdCB3aW5kb3dzID0gem9uZVdpbmRvd3MuZmlsdGVyKHdpbmRvdyA9PiB3aW5kb3cuem9uZUlkID09PSB6b25lLmlkKS5tYXAoKHpvbmVXaW5kb3cpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0aW9uID0gd2luZG93Q29uc3RydWN0aW9ucy5maWx0ZXIoY29ucyA9PiBjb25zLmlkID09PSB6b25lV2luZG93LmdldFdpbmRvd0lkKCkpWzBdO1xuICAgICAgICBjb25zdCBzaGFkaW5nU2NoZW1lID0gc2hhZGluZy5maWx0ZXIoc2hhZGUgPT4gc2hhZGUuZ2V0SWQoKSA9PT0gem9uZVdpbmRvdy5nZXRIb3JpelNoYWRpbmcxSWQoKSB8fCBzaGFkZS5nZXRJZCgpID09PSB6b25lV2luZG93LmdldEhvcml6U2hhZGluZzJJZCgpKTtcbiAgICAgICAgY29uc3QgY2VpbGluZ0hlaWdodCA9IGNlaWxpbmdIZWlnaHRzLmZpbHRlcihjZWlsaW5nID0+IGNlaWxpbmcuZ2V0Wm9uZUlkKCkgPT09IHpvbmUuZ2V0SWQoKSlbMF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi56b25lV2luZG93LFxuICAgICAgICAgIGNvbnN0cnVjdGlvbixcbiAgICAgICAgICBzaGFkaW5nOiBzaGFkaW5nU2NoZW1lLFxuICAgICAgICAgIGNlaWxpbmdIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmbG9vcnMgPSB6b25lRmxvb3JzLmZpbHRlcih6b25lRmxvb3IgPT4gem9uZUZsb29yLnpvbmVJZCA9PT0gem9uZS5pZCkubWFwKCh6b25lRmxvb3IpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0aW9uID0gZmxvb3JDb25zdHJ1Y3Rpb25zLmZpbHRlcihmbG9vckNvbiA9PiBmbG9vckNvbi5pZCA9PT0gem9uZUZsb29yLmNvbnN0cnVjdGlvbklkKVswXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnpvbmVGbG9vcixcbiAgICAgICAgICAuLi5jb25zdHJ1Y3Rpb25cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogem9uZS5nZXRJZCgpLFxuICAgICAgICBuYW1lOiB6b25lLmdldE5hbWUoKSxcbiAgICAgICAgd2luZG93cyxcbiAgICAgICAgb25Hcm91bmRGbG9vcjogR3JvdW5kRmxvb3IuVGVzdChmbG9vcnMpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSB6b25lcyBhcnJheSBpbnRvIGEgZmxhdHQgYXJyYXkgcmVhZHkgZm9yIGNvbnZlcnNpb24gdG8gQ1NWXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9ICB6b25lcyAgICAgVGhlIHpvbmVzIGFycmF5IGNyZWF0ZWQgaW4gUmVzdWx0c0J1aWxkZXIuQ29tcGlsZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2UgW09wdGlvbmFsXSBSZWZlcmVuY2UgTm9ydGggYXppbXV0aC4gRGVmYXVsdCAwXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBCdWlsZCh6b25lcywgcmVmZXJlbmNlID0gMCkge1xuICAgIGNvbnN0IGNzdiA9IHpvbmVzLm1hcCgoem9uZSkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93Q3N2ID0gem9uZS53aW5kb3dzLm1hcCgod2luZG93KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0aW9uID0gJyc7XG4gICAgICAgIGxldCBlYXZlT2Zmc2V0ID0gJyc7XG4gICAgICAgIGxldCBwZXJnb2xhT2Zmc2V0ID0gJyc7XG4gICAgICAgIGlmICh3aW5kb3cuc2hhZGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcHJvamVjdGlvbiA9IHdpbmRvdy5zaGFkaW5nWzBdLnByb2plY3Rpb247XG4gICAgICAgICAgZWF2ZU9mZnNldCA9IHdpbmRvdy5zaGFkaW5nWzBdLmVhdmVPZmZzZXQ7XG4gICAgICAgICAgcGVyZ29sYU9mZnNldCA9IHdpbmRvdy5zaGFkaW5nWzBdLnBlcmdvbGFPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHpvbmUubmFtZSxcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBPcmllbnRhdGlvbi5HZXQod2luZG93LmF6aW11dGgsIHJlZmVyZW5jZSksXG4gICAgICAgICAgd2luZG93LmhlaWdodCxcbiAgICAgICAgICB3aW5kb3cud2lkdGgsXG4gICAgICAgICAgcHJvamVjdGlvbixcbiAgICAgICAgICBab25lV2luZG93LkhlYWRIZWlnaHQod2luZG93LmhlaWdodCwgZWF2ZU9mZnNldCksXG4gICAgICAgICAgd2luZG93LmNvbnN0cnVjdGlvbi5uYW1lLFxuICAgICAgICAgIHdpbmRvdy5jZWlsaW5nSGVpZ2h0LmhlaWdodCxcbiAgICAgICAgICBlYXZlT2Zmc2V0LFxuICAgICAgICAgIHBlcmdvbGFPZmZzZXQsXG4gICAgICAgICAgem9uZS5vbkdyb3VuZEZsb29yID8gJzAnIDogJydcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBbiBlbXB0eSB3aW5kb3dDc3YgbmVlZHMgdG8gYmUgcmV0dXJuZWQgaW5zaWRlIGFuIGFycmF5IGl0c2VsZiwgaW4gb3JkZXIgdG8gd29yayB3aXRoIHRoZSBmbGF0dGVuIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gd2luZG93Q3N2Lmxlbmd0aCA+IDAgPyB3aW5kb3dDc3YgOiBbd2luZG93Q3N2XTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmbGF0dGVuKGNzdik7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzQnVpbGRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9SZXN1bHRzQnVpbGRlci5qcyIsImNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoJ2pzL3dvcmtlci5qcycpO1xuXG5jb25zdCBjcmVhdGVQcmV2aWV3ID0gKHJlc3VsdHMpID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1wcmV2aWV3LXRlbXBsYXRlJyk7XG4gIGNvbnN0IGluc3RhbmNlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcblxuICBjb25zdCB0YWJsZUJvZHkgPSBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuXG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHJlc3VsdC5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHRhYmxlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0YWJsZUNlbGwuaW5uZXJUZXh0ID0gcmVzO1xuICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVDZWxsKTtcbiAgICB9KTtcblxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLXByZXZpZXcnKS5hcHBlbmRDaGlsZChpbnN0YW5jZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgZG93bmxvYWQgZmlsZSwgYW5kIGRvd25sb2FkIGl0IHRvIHRoZSB1c2VycyBicm93c2VyXG4gKlxuICogQHBhcmFtIHthcnJheX0gcmVzdWx0c1xuICpcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5jb25zdCBjcmVhdGVEb3dubG9hZCA9IChyZXN1bHRzKSA9PiB7XG4gIGxldCBjc3ZDb250ZW50ID0gJ2RhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCwnO1xuICBjb25zdCBoZWFkZXJBcnIgPSBbXG4gICAgJ1pvbmUgTmFtZScsXG4gICAgJ3tibGFua30nLFxuICAgICdPcmllbnRhdGlvbicsXG4gICAgJ0hlaWdodCcsXG4gICAgJ1dpZHRoJyxcbiAgICAnUHJvamVjdGlvbicsXG4gICAgJ0gnLFxuICAgICdXaW5kb3cgVHlwZScsXG4gICAgJ0NlaWxpbmcgSGVpZ2h0JyxcbiAgICAnRWF2ZSBPZmZzZXQnLFxuICAgICdQZXJnb2xhIE9mZnNldCcsXG4gICAgJ0xldmVsJ1xuICBdO1xuICBjb25zdCBoZWFkZXJSb3cgPSBoZWFkZXJBcnIuam9pbignLCcpO1xuICBjc3ZDb250ZW50ICs9IGAke2hlYWRlclJvd31cXG5gO1xuXG4gIHJlc3VsdHMuZm9yRWFjaCgocm93QXJyYXkpID0+IHtcbiAgICBpZiAocm93QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgcm93ID0gcm93QXJyYXkuam9pbignLCcpO1xuICAgICAgY3N2Q29udGVudCArPSBgJHtyb3d9XFxuYDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVuY29kZWRVcmkgPSBlbmNvZGVVUkkoY3N2Q29udGVudCk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZW5jb2RlZFVyaSk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdnbGF6aW5nLmNzdicpO1xuICBsaW5rLmhpZGRlbiA9IHRydWU7XG4gIGxpbmsuaW5uZXJIVE1MID0gJ0NsaWNrIEhlcmUgdG8gZG93bmxvYWQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspOyAvLyBSZXF1aXJlZCBmb3IgRkZcblxuICBsaW5rLmNsaWNrKCk7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvY2VzcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBmaWxlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZVRvVXBsb2FkJyk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3J0aC1yZWZlcmVuY2UnKS52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgcmVmZXJlbmNlIG5vcnRoIGF6aW11dGgnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZmlsZVNlbGVjdG9yLmZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgc2NyYXRjaCBmaWxlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZmlsZSA9IGZpbGVTZWxlY3Rvci5maWxlc1swXTtcbiAgY29uc3QgcmVmZXJlbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vcnRoLXJlZmVyZW5jZScpLnZhbHVlO1xuXG4gIHdvcmtlci5wb3N0TWVzc2FnZSh7IGZpbGUsIHJlZmVyZW5jZSB9KTtcblxuICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY3JlYXRlUHJldmlldyhkYXRhLnJlc3VsdHMpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZURvd25sb2FkKGRhdGEucmVzdWx0cyk7XG4gICAgfSk7XG4gIH07XG59KTtcblxuLy8gQ2xlYXIgcHJldmlldyByZXN1bHRzIHdoZW4gdGhlIHNjcmF0Y2ggZmlsZSBjaGFuZ2VzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZVRvVXBsb2FkJykub25jaGFuZ2UgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLXByZXZpZXcnKS5pbm5lckhUTUwgPSAnJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCIvKipcbiAqIEZsYXR0ZW4gYXJyYXkgMSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyciBBcnJ5YSB0byBmbGF0dGVuXG4gKlxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IGFyciA9PiBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFycik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9