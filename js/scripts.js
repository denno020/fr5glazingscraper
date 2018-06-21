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
Orientation.CONST__S_E = { lower: 113, upper: 187 };
Orientation.CONST__S = { lower: 188, upper: 202 };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFjZGU0ZDlhMGViMmVmZDRiOWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0Zsb29yQ29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lV2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DZWlsaW5nSGVpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2luZG93Q29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lRGV0YWlsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3VuZEZsb29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PcmllbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2NyYXRjaEZpbGVMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9Mb29rc0xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUmVzdWx0c0J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGbG9vckNvbnN0cnVjdGlvbiIsImxpbmVEYXRhIiwiaWQiLCJpc0Nzb2ciLCJyZWdleCIsIlJlZ0V4cCIsIlJlZ2V4IiwiZGF0YSIsImV4ZWMiLCJ0cmltIiwiVGVzdENzb2ciLCJnZXRDb25zdHJ1Y3Rpb25JZCIsImdldElzQ3NvZyIsImNzb2dSZWdleCIsIkNTT0dSZWdleCIsInRlc3QiLCJDb25zdHJ1Y3Rpb25JZFJlZ2V4IiwiWm9uZVdpbmRvdyIsInpvbmVJZCIsIndpbmRvd0lkIiwiaGVpZ2h0Iiwid2lkdGgiLCJhemltdXRoIiwiaGVhZEhlaWdodCIsImhvcml6U2hhZGluZzFJZCIsImhvcml6U2hhZGluZzJJZCIsIkNPTlNUX19aT05FX0lEIiwiQ09OU1RfX1dJTkRPV19JRCIsIkNPTlNUX19IRUlHSFQiLCJDT05TVF9fV0lEVEgiLCJDT05TVF9fQVpJTVVUSCIsIkNPTlNUX19IT1JaX1NIQURJTkdfMSIsIkNPTlNUX19IT1JaX1NIQURJTkdfMiIsImdldFpvbmVJZCIsImdldFdpbmRvd0lkIiwiZ2V0SGVpZ2h0IiwiZ2V0V2lkdGgiLCJnZXRBemltdXRoIiwiZ2V0SGVhZEhlaWdodCIsImdldEhvcml6U2hhZGluZzFJZCIsImdldEhvcml6U2hhZGluZzJJZCIsIndpbmRvd0hlaWdodCIsImVhdmVPZmZzZXQiLCJ3aW5kb3dIZWlnaHRGbG9hdCIsInBhcnNlRmxvYXQiLCJlYXZlT2Zmc2V0RmxvYXQiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJDZWlsaW5nSGVpZ2h0IiwiSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUiLCJlYXZlUHJvamVjdGlvbiIsInBlcmdvbGFQcm9qZWN0aW9uIiwicGVyZ29sYU9mZnNldCIsInByb2plY3Rpb24iLCJDT05TVF9fSUQiLCJDT05TVF9fRUFWRV9QUk9KRUNUSU9OIiwiQ09OU1RfX0VBVkVfT0ZGU0VUIiwiQ09OU1RfX1BFUkdPTEFfUFJPSkVDVElPTiIsIkNPTlNUX19QRVJHT0xBX09GRlNFVCIsImdldFByb2plY3Rpb24iLCJnZXRFYXZlUHJvamVjdGlvbiIsImdldFBlcmdvbGFQcm9qZWN0aW9uIiwiZ2V0SWQiLCJvZmZzZXQiLCJlYXZlIiwiZ2V0RWF2ZU9mZnNldCIsInBlcmdvbGEiLCJnZXRQZXJnb2xhT2Zmc2V0IiwiV2luZG93Q29uc3RydWN0aW9uIiwibmFtZSIsIkNPTlNUX19OQU1FIiwiWm9uZURldGFpbCIsImdldE5hbWUiLCJab25lRmxvb3IiLCJjb25zdHJ1Y3Rpb25JZCIsIkdyb3VuZEZsb29yIiwiZmxvb3JzIiwiZmlsdGVyIiwiZmxvb3IiLCJsZW5ndGgiLCJPcmllbnRhdGlvbiIsInJlZmVyZW5jZSIsImF6aW11dGhJbnQiLCJwYXJzZUludCIsIklzIiwiQ09OU1RfX05fRSIsIkNPTlNUX19FIiwiQ09OU1RfX1NfRSIsIkNPTlNUX19TIiwiQ09OU1RfX1NfVyIsIkNPTlNUX19XIiwiQ09OU1RfX05fVyIsImxpbWl0cyIsInZlY3RvciIsInVwcGVyIiwiTm9ybWFsaXplIiwibG93ZXIiLCJudW1iZXIiLCJNYXRoIiwiYWJzIiwiQ09OU1RfX04iLCJTY3JhdGNoRmlsZUxpbmUiLCJMb29rc0xpa2UiLCJTaGFkaW5nU2NoZW1lIiwiQnVpbGQiLCJUZXN0IiwicmVnZXhwIiwiUGFyc2VyIiwiZmlsZSIsIndpbmRvd0NvbnN0cnVjdGlvbnMiLCJ6b25lV2luZG93cyIsInpvbmVEZXRhaWxzIiwic2hhZGluZ1NjaGVtZXMiLCJjZWlsaW5nSGVpZ2h0cyIsImRhdGFMaW5lcyIsImdldERhdGFMaW5lcyIsIlJldmVyc2VMb29rdXAiLCJsaW5lIiwibWFwIiwid2luZG93Iiwiem9uZVdpbmRvdyIsInNoYWRpbmciLCJjZWlsaW5nSGVpZ2h0Iiwiem9uZURldGFpbCIsImZsb29yQ29uc3RydWN0aW9ucyIsImZsb29yQ29uc3RydWN0aW9uIiwiem9uZUZsb29ycyIsInpvbmVGbG9vciIsImdldFdpbmRvd0NvbnN0cnVjdGlvbnMiLCJnZXRab25lV2luZG93cyIsImdldFNoYWRpbmciLCJnZXRDZWlsaW5nSGVpZ2h0cyIsImdldFpvbmVEZXRhaWxzIiwiZ2V0Rmxvb3JDb25zdHJ1Y3Rpb25zIiwiZ2V0Wm9uZUZsb29ycyIsIlJlc3VsdHNCdWlsZGVyIiwiem9uZSIsIndpbmRvd3MiLCJjb25zdHJ1Y3Rpb24iLCJjb25zIiwic2hhZGluZ1NjaGVtZSIsInNoYWRlIiwiY2VpbGluZyIsImZsb29yQ29uIiwib25Hcm91bmRGbG9vciIsInpvbmVzIiwiY3N2Iiwid2luZG93Q3N2IiwiR2V0IiwiSGVhZEhlaWdodCIsIndvcmtlciIsIldvcmtlciIsImNyZWF0ZVByZXZpZXciLCJyZXN1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zdGFuY2UiLCJpbXBvcnROb2RlIiwiY29udGVudCIsInRhYmxlQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwicmVzdWx0IiwidGFibGVSb3ciLCJjcmVhdGVFbGVtZW50IiwicmVzIiwidGFibGVDZWxsIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVEb3dubG9hZCIsImNzdkNvbnRlbnQiLCJoZWFkZXJBcnIiLCJoZWFkZXJSb3ciLCJqb2luIiwicm93QXJyYXkiLCJyb3ciLCJlbmNvZGVkVXJpIiwiZW5jb2RlVVJJIiwibGluayIsInNldEF0dHJpYnV0ZSIsImhpZGRlbiIsImlubmVySFRNTCIsImJvZHkiLCJjbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlU2VsZWN0b3IiLCJ2YWx1ZSIsImFsZXJ0IiwiZmlsZXMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsIm9uY2hhbmdlIiwiZmxhdHRlbiIsInByb3RvdHlwZSIsImNvbmNhdCIsImFyciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7OztJQUdNQSxpQjtBQVNKLDZCQUFZQyxRQUFaLEVBQXNC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QUFNaEYsT0FBTzhFLGFBQWFHLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBYjtBQUNBLE1BQU01RyxZQUFZMEUsU0FBU00sYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMwQixLQUE3RDs7QUFFQXJDLFNBQU93QyxXQUFQLENBQW1CLEVBQUVsRixVQUFGLEVBQVEzQixvQkFBUixFQUFuQjs7QUFFQXFFLFNBQU95QyxTQUFQLEdBQW1CLGdCQUFjO0FBQUEsUUFBWHhMLElBQVcsUUFBWEEsSUFBVzs7QUFDL0JpSixrQkFBY2pKLEtBQUtrSixPQUFuQjs7QUFFQUUsYUFBU00sYUFBVCxDQUF1QixPQUF2QixFQUFnQ3dCLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUEwRCxZQUFNO0FBQzlEZixxQkFBZW5LLEtBQUtrSixPQUFwQjtBQUNELEtBRkQ7QUFHRCxHQU5EO0FBT0QsQ0F6QkQ7O0FBMkJBO0FBQ0FFLFNBQVNNLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0MrQixRQUF4QyxHQUFtRCxZQUFNO0FBQ3ZEckMsV0FBU00sYUFBVCxDQUF1QixrQkFBdkIsRUFBMkNxQixTQUEzQyxHQUF1RCxFQUF2RDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBOzs7Ozs7O0FBT08sSUFBTVcsNEJBQVUsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU8sMEJBQU1DLFNBQU4sRUFBZ0JDLE1BQWhCLDRDQUEwQkMsR0FBMUIsRUFBUDtBQUFBLENBQWhCLEMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlhY2RlNGQ5YTBlYjJlZmQ0YjliIiwiLyoqXG4gKiBDbGFzcyBGbG9vckNvbnN0cnVjdGlvblxuICovXG5jbGFzcyBGbG9vckNvbnN0cnVjdGlvbiB7XG5cbiAgc3RhdGljIENvbnN0cnVjdGlvbklkUmVnZXggPSAnKDI0WzEtOV18Mls1LTldXFxcXGR8M1sxLTNdXFxcXGR8MzQwKSc7XG4gIHN0YXRpYyBSZWdleCA9IGBeIDIke0Zsb29yQ29uc3RydWN0aW9uLkNvbnN0cnVjdGlvbklkUmVnZXh9YDtcbiAgc3RhdGljIENTT0dSZWdleCA9ICdeIDIoMjRbMS05XXwyWzUtOV1cXFxcZHwzWzEtM11cXFxcZHwzNDApICAgKC57N30pKiggMTggMTAwKSc7XG5cbiAgaWQgPSAnJztcbiAgaXNDc29nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoRmxvb3JDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLmlzQ3NvZyA9IEZsb29yQ29uc3RydWN0aW9uLlRlc3RDc29nKGxpbmVEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnN0cnVjdGlvbiBpZCB0aGF0IHRoaXMgZmxvb3IgY29uc3RydWN0aW9uIGJlbG9uZ3MgdG9cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlL2ZhbHNlIGluZGljYXRpbmcgaWYgdGhlIGZsb29yaW5nIHR5cGUgaW4gdGhlIHpvbmUgaXMgQ1NPR1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldElzQ3NvZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Nzb2c7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB0aGUgZGF0YSBsaW5lIHRvIHNlZSBpZiB0aGVyZSBpcyBjb25jcmV0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBUZXN0Q3NvZyhsaW5lRGF0YSkge1xuICAgIGNvbnN0IGNzb2dSZWdleCA9IG5ldyBSZWdFeHAoRmxvb3JDb25zdHJ1Y3Rpb24uQ1NPR1JlZ2V4KTtcbiAgICByZXR1cm4gY3NvZ1JlZ2V4LnRlc3QobGluZURhdGEpO1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEZsb29yQ29uc3RydWN0aW9uKGRhdGEpO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldENvbnN0cnVjdGlvbklkKCksXG4gICAgICBpc0Nzb2c6IHRoaXMuZ2V0SXNDc29nKClcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvb3JDb25zdHJ1Y3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvRmxvb3JDb25zdHJ1Y3Rpb24uanMiLCIvKipcbiAqIENsYXNzIHRvIHBhcnNlIHdpbmRvdyBpbmZvcm1hdGlvbiBpbnNpZGUgYSB6b25lIHNlY3Rpb25cbiAqL1xuY2xhc3MgWm9uZVdpbmRvdyB7XG5cbiAgc3RhdGljIENPTlNUX19aT05FX0lEID0gMTtcbiAgc3RhdGljIENPTlNUX19XSU5ET1dfSUQgPSAyO1xuICBzdGF0aWMgQ09OU1RfX0hFSUdIVCA9IDY7XG4gIHN0YXRpYyBDT05TVF9fV0lEVEggPSA3O1xuICBzdGF0aWMgQ09OU1RfX0FaSU1VVEggPSA4O1xuICBzdGF0aWMgQ09OU1RfX0hPUlpfU0hBRElOR18xID0gOTtcbiAgc3RhdGljIENPTlNUX19IT1JaX1NIQURJTkdfMiA9IDEwO1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDMoLnszfSkoKCAoMTApfCggIFswLTldKSkpKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pJztcblxuICB6b25lSWQgPSAnJztcbiAgd2luZG93SWQgPSAnJztcbiAgaGVpZ2h0ID0gJyc7XG4gIHdpZHRoID0gJyc7XG4gIGF6aW11dGggPSAnJztcbiAgaGVhZEhlaWdodCA9ICcnOyAvLyBUaGlzIHZhbHVlIGlzbid0IHVzZWQsIGp1c3QgaGVyZSB0byBpdCBjYW4gaG9sZCBhbiBlbXB0eSBjZWxsIGluIHRoZSBvdXRwdXQgQ1NWXG4gIGhvcml6U2hhZGluZzFJZCA9ICcnO1xuICBob3JpelNoYWRpbmcySWQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChab25lV2luZG93LlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLnpvbmVJZCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fWk9ORV9JRF0udHJpbSgpO1xuICAgIHRoaXMud2luZG93SWQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX1dJTkRPV19JRF0udHJpbSgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IRUlHSFRdLnRyaW0oKTtcbiAgICB0aGlzLndpZHRoID0gZGF0YVtab25lV2luZG93LkNPTlNUX19XSURUSF0udHJpbSgpO1xuICAgIHRoaXMuYXppbXV0aCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fQVpJTVVUSF0udHJpbSgpO1xuICAgIHRoaXMuaG9yaXpTaGFkaW5nMUlkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IT1JaX1NIQURJTkdfMV0udHJpbSgpO1xuICAgIHRoaXMuaG9yaXpTaGFkaW5nMklkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IT1JaX1NIQURJTkdfMl0udHJpbSgpO1xuICB9XG5cbiAgZ2V0Wm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVJZDtcbiAgfVxuXG4gIGdldFdpbmRvd0lkKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd0lkO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0QXppbXV0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hemltdXRoO1xuICB9XG5cbiAgZ2V0SGVhZEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkSGVpZ2h0O1xuICB9XG5cbiAgZ2V0SG9yaXpTaGFkaW5nMUlkKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6U2hhZGluZzFJZDtcbiAgfVxuXG4gIGdldEhvcml6U2hhZGluZzJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3JpelNoYWRpbmcySWQ7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgem9uZUlkOiB0aGlzLmdldFpvbmVJZCgpLFxuICAgICAgd2luZG93SWQ6IHRoaXMuZ2V0V2luZG93SWQoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICBhemltdXRoOiB0aGlzLmdldEF6aW11dGgoKSxcbiAgICAgIGhlYWRIZWlnaHQ6IHRoaXMuZ2V0SGVhZEhlaWdodCgpLFxuICAgICAgaG9yaXpTaGFkaW5nMUlkOiB0aGlzLmdldEhvcml6U2hhZGluZzFJZCgpLFxuICAgICAgaG9yaXpTaGFkaW5nMklkOiB0aGlzLmdldEhvcml6U2hhZGluZzJJZCgpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBab25lV2luZG93KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgSGVhZCBIZWlnaHQgb2YgYSB3aW5kb3cgZnJvbSB0aGUgaGVpZ2h0IG9mIHRoZSB3aW5kb3cgYW5kIHRoZSBlYXZlIG9mZnNldFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gd2luZG93SGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHdpbmRvd1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZWF2ZU9mZnNldCAgIFRoZSBlYXZlIG9mZnNldCBvZiB0aGUgd2luZG93XG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgSGVhZEhlaWdodCh3aW5kb3dIZWlnaHQsIGVhdmVPZmZzZXQpIHtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHRGbG9hdCA9IHdpbmRvd0hlaWdodCA9PT0gJycgPyAwIDogcGFyc2VGbG9hdCh3aW5kb3dIZWlnaHQpO1xuICAgIGNvbnN0IGVhdmVPZmZzZXRGbG9hdCA9IGVhdmVPZmZzZXQgPT09ICcnID8gMCA6IHBhcnNlRmxvYXQoZWF2ZU9mZnNldCk7XG4gICAgcmV0dXJuICh3aW5kb3dIZWlnaHRGbG9hdCArIGVhdmVPZmZzZXRGbG9hdCkudG9GaXhlZCgyKS50b1N0cmluZygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZVdpbmRvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ab25lV2luZG93LmpzIiwiLyoqXG4gKiBDbGFzcyBDZWlsaW5nSGVpZ2h0XG4gKi9cbmNsYXNzIENlaWxpbmdIZWlnaHQge1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDMoLnszfSk3MDAoLns2fSkoLns2fSkoLns2fSkoLns2fSknO1xuXG4gIHpvbmVJZCA9ICcnO1xuICBoZWlnaHQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChDZWlsaW5nSGVpZ2h0LlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLnpvbmVJZCA9IGRhdGFbMV0udHJpbSgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gZGF0YVszXS50cmltKCk7XG4gIH1cblxuICBnZXRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUlkO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB6b25lSWQ6IHRoaXMuZ2V0Wm9uZUlkKCksXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IENlaWxpbmdIZWlnaHQoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWlsaW5nSGVpZ2h0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0NlaWxpbmdIZWlnaHQuanMiLCIvKipcbiAqIEJyZWFrIHRoZSBIb3Jpem9udGFsIFNoYWRpbmcgU2NoZW1lIGRhdGEgaW50byBpdHMgdmFyaW91cyBwYXJ0c1xuICovXG5jbGFzcyBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSB7XG5cbiAgLyoqXG4gICAqIENvbnN0YW50cyB0aGF0IG1hcCB0aGUgdmFyaW91cyBiaXRzIG9mIGRhdGEgdG8gdGhlIHNlY3Rpb24gb2YgcmVnZXhcbiAgICovXG4gIHN0YXRpYyBDT05TVF9fSUQgPSAxO1xuICBzdGF0aWMgQ09OU1RfX0VBVkVfUFJPSkVDVElPTiA9IDI7XG4gIHN0YXRpYyBDT05TVF9fRUFWRV9PRkZTRVQgPSAzO1xuICBzdGF0aWMgQ09OU1RfX1BFUkdPTEFfUFJPSkVDVElPTiA9IDY7XG4gIHN0YXRpYyBDT05TVF9fUEVSR09MQV9PRkZTRVQgPSA3O1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDEgMjAoLnszfSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkkJztcblxuICBpZCA9ICcnO1xuICBlYXZlUHJvamVjdGlvbiA9ICcnO1xuICBlYXZlT2Zmc2V0ID0gJyc7XG4gIHBlcmdvbGFQcm9qZWN0aW9uID0gJyc7XG4gIHBlcmdvbGFPZmZzZXQgPSAnJztcbiAgcHJvamVjdGlvbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKEhvcml6b250YWxTaGFkaW5nU2NoZW1lLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fSURdLnRyaW0oKTtcbiAgICB0aGlzLmVhdmVQcm9qZWN0aW9uID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fRUFWRV9QUk9KRUNUSU9OXS50cmltKCk7XG4gICAgdGhpcy5lYXZlT2Zmc2V0ID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fRUFWRV9PRkZTRVRdLnRyaW0oKTtcbiAgICB0aGlzLnBlcmdvbGFQcm9qZWN0aW9uID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OXS50cmltKCk7XG4gICAgdGhpcy5wZXJnb2xhT2Zmc2V0ID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fUEVSR09MQV9PRkZTRVRdLnRyaW0oKTtcbiAgICB0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIGhpZ2hlc3QgcHJvamVjdGlvbiB2YWx1ZSBhbmQgcmV0dXJuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRQcm9qZWN0aW9uKCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0RWF2ZVByb2plY3Rpb24oKSkgPiBwYXJzZUZsb2F0KHRoaXMuZ2V0UGVyZ29sYVByb2plY3Rpb24oKSkgP1xuICAgICAgdGhpcy5nZXRFYXZlUHJvamVjdGlvbigpIDpcbiAgICAgIHRoaXMuZ2V0UGVyZ29sYVByb2plY3Rpb24oKTtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0RWF2ZU9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5lYXZlT2Zmc2V0O1xuICB9XG5cbiAgZ2V0RWF2ZVByb2plY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWF2ZVByb2plY3Rpb247XG4gIH1cblxuICBnZXRQZXJnb2xhT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcmdvbGFPZmZzZXQ7XG4gIH1cblxuICBnZXRQZXJnb2xhUHJvamVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJnb2xhUHJvamVjdGlvbjtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgcHJvamVjdGlvbjogdGhpcy5nZXRQcm9qZWN0aW9uKCksXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgZWF2ZTogdGhpcy5nZXRFYXZlT2Zmc2V0KCksXG4gICAgICAgIHBlcmdvbGE6IHRoaXMuZ2V0UGVyZ29sYU9mZnNldCgpXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZShkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxTaGFkaW5nU2NoZW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0hvcml6b250YWxTaGFkaW5nU2NoZW1lLmpzIiwiLyoqXG4gKiBCcmVhayBhIFdpbmRvdyBjb25zdHJ1Y3Rpb24gZGF0YSBsaW5lIGludG8gaXRzIHZhcmlvdXMgcGFydHNcbiAqL1xuY2xhc3MgV2luZG93Q29uc3RydWN0aW9uIHtcblxuICBzdGF0aWMgQ09OU1RfX0lEID0gMztcbiAgc3RhdGljIENPTlNUX19OQU1FID0gJyc7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ14gXFxcXGQoLnszfSlbIFxcXFxkXSooW2EtekEtWl1bYS16QS1aXFxcXC1cXFxcZF17OX1bIGEtekEtWl1bYS16QS1aXT8pJztcblxuICBpZCA9ICcnO1xuICBuYW1lID0gJyc7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoV2luZG93Q29uc3RydWN0aW9uLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVsxXS50cmltKCk7XG4gICAgdGhpcy5uYW1lID0gZGF0YVsyXS50cmltKCk7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFdpbmRvd0NvbnN0cnVjdGlvbihkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd0NvbnN0cnVjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9XaW5kb3dDb25zdHJ1Y3Rpb24uanMiLCIvKipcbiAqIENsYXNzIFpvbmVEZXRhaWxcbiAqL1xuY2xhc3MgWm9uZURldGFpbCB7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ15DIFowMD8oXFxcXGR7MSwzfSkgPT4gKC4qKSQnO1xuXG4gIGlkID0gJyc7XG4gIG5hbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChab25lRGV0YWlsLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVsxXS50cmltKCk7XG4gICAgdGhpcy5uYW1lID0gZGF0YVsyXS50cmltKCk7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbmFtZTogdGhpcy5nZXROYW1lKClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFpvbmVEZXRhaWwoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBab25lRGV0YWlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1pvbmVEZXRhaWwuanMiLCJpbXBvcnQgRmxvb3JDb25zdHJ1Y3Rpb24gZnJvbSAnLi9GbG9vckNvbnN0cnVjdGlvbic7XG4vKipcbiAqIENsYXNzIFpvbmVGbG9vclxuICovXG5jbGFzcyBab25lRmxvb3Ige1xuXG4gIHN0YXRpYyBSZWdleCA9IGAgMyguLi4pKCR7Rmxvb3JDb25zdHJ1Y3Rpb24uQ29uc3RydWN0aW9uSWRSZWdleH0pYDtcblxuICB6b25lSWQgPSAnJztcbiAgY29uc3RydWN0aW9uSWQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChab25lRmxvb3IuUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuem9uZUlkID0gZGF0YVsxXS50cmltKCk7XG4gICAgdGhpcy5jb25zdHJ1Y3Rpb25JZCA9IGRhdGFbMl0udHJpbSgpO1xuICB9XG5cbiAgZ2V0Wm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVJZDtcbiAgfVxuXG4gIGdldENvbnN0cnVjdGlvbklkKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdGlvbklkO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpvbmVJZDogdGhpcy5nZXRab25lSWQoKSxcbiAgICAgIGNvbnN0cnVjdGlvbklkOiB0aGlzLmdldENvbnN0cnVjdGlvbklkKClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFpvbmVGbG9vcihkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFpvbmVGbG9vcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ab25lRmxvb3IuanMiLCIvKipcbiAqIENsYXNzIEdyb3VuZEZsb29yXG4gKi9cbmNsYXNzIEdyb3VuZEZsb29yIHtcblxuICAvKipcbiAgICogVGVzdCBpZiBhbnkgb2YgdGhlIHByb3ZpZGVkIGZsb29ycyBoYXZlIGEgQ1NPRyBjb25zdHJ1Y3Rpb24sIGluZGljYXRpbmcgdGhlIHpvbmUgaXMgbGlrZWx5IG9uIHRoZSBncm91bmQgZmxvb3JcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gZmxvb3JzIFRoZSBmbG9vcnMgdG8gY2hlY2sgZm9yIENTT0dcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgVGVzdChmbG9vcnMpIHtcbiAgICByZXR1cm4gZmxvb3JzLmZpbHRlcihmbG9vciA9PiBmbG9vci5pc0Nzb2cpLmxlbmd0aCA+IDA7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91bmRGbG9vcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9Hcm91bmRGbG9vci5qcyIsIi8qKlxuICogQ2xhc3MgT3JpZW50YXRpb25cbiAqL1xuY2xhc3MgT3JpZW50YXRpb24ge1xuXG4gIHN0YXRpYyBDT05TVF9fTiA9IHsgbG93ZXI6IDIyLCB1cHBlcjogMzM4IH07XG4gIHN0YXRpYyBDT05TVF9fTl9FID0geyBsb3dlcjogMjMsIHVwcGVyOiA2NyB9O1xuICBzdGF0aWMgQ09OU1RfX0UgPSB7IGxvd2VyOiA2OCwgdXBwZXI6IDExMiB9O1xuICBzdGF0aWMgQ09OU1RfX1NfRSA9IHsgbG93ZXI6IDExMywgdXBwZXI6IDE4NyB9O1xuICBzdGF0aWMgQ09OU1RfX1MgPSB7IGxvd2VyOiAxODgsIHVwcGVyOiAyMDIgfTtcbiAgc3RhdGljIENPTlNUX19TX1cgPSB7IGxvd2VyOiAyMDMsIHVwcGVyOiAyNDcgfTtcbiAgc3RhdGljIENPTlNUX19XID0geyBsb3dlcjogMjQ4LCB1cHBlcjogMjkyIH07XG4gIHN0YXRpYyBDT05TVF9fTl9XID0geyBsb3dlcjogMjkzLCB1cHBlcjogMzM3IH07XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYXppbXV0aFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXppbXV0aCAgIEF6aW11dGggdmFsdWUgYmVpbmcgY2hhbmdlZCB0byBvcmllbnRhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJlbmNlIFJlZmVyZW5jZSBhemltdXRoIGZvciBOb3J0aFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgR2V0KGF6aW11dGgsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF6aW11dGhJbnQgPSBwYXJzZUludChhemltdXRoLCAxMCk7XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fTl9FKSkge1xuICAgICAgcmV0dXJuICdORSc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX0UpKSB7XG4gICAgICByZXR1cm4gJ0UnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19TX0UpKSB7XG4gICAgICByZXR1cm4gJ1NFJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fUykpIHtcbiAgICAgIHJldHVybiAnUyc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1NfVykpIHtcbiAgICAgIHJldHVybiAnU1cnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19XKSkge1xuICAgICAgcmV0dXJuICdXJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fTl9XKSkge1xuICAgICAgcmV0dXJuICdOVyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdOJztcbiAgfVxuXG4gIHN0YXRpYyBJcyhhemltdXRoLCByZWZlcmVuY2UsIGxpbWl0cykge1xuICAgIGNvbnN0IHZlY3RvciA9IHtcbiAgICAgIHVwcGVyOiBPcmllbnRhdGlvbi5Ob3JtYWxpemUocGFyc2VJbnQocmVmZXJlbmNlLCAxMCkgKyBsaW1pdHMudXBwZXIpLFxuICAgICAgbG93ZXI6IE9yaWVudGF0aW9uLk5vcm1hbGl6ZShwYXJzZUludChyZWZlcmVuY2UsIDEwKSArIGxpbWl0cy5sb3dlcilcbiAgICB9O1xuXG4gICAgcmV0dXJuIChhemltdXRoID49IHZlY3Rvci5sb3dlciAmJiBhemltdXRoIDw9IHZlY3Rvci51cHBlcilcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYSB2YWx1ZSB0byBiZSB3aXRoaW4gdGhlIDAtMzYwIHJhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7aW50fSBudW1iZXJcbiAgICpcbiAgICogQHJldHVybnMge2ludH1cbiAgICovXG4gIHN0YXRpYyBOb3JtYWxpemUobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHJldHVybiAzNjAgLSBNYXRoLmFicyhudW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgPiAzNjApIHtcbiAgICAgIHJldHVybiAobnVtYmVyIC0gMzYwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JpZW50YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvT3JpZW50YXRpb24uanMiLCJpbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuL0NlaWxpbmdIZWlnaHQnO1xuaW1wb3J0IEhvcml6b250YWxTaGFkaW5nU2NoZW1lIGZyb20gJy4vSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnO1xuaW1wb3J0IExvb2tzTGlrZSBmcm9tICcuL3V0aWxzL0xvb2tzTGlrZSc7XG5pbXBvcnQgV2luZG93Q29uc3RydWN0aW9uIGZyb20gJy4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgWm9uZURldGFpbCBmcm9tICcuL1pvbmVEZXRhaWwnO1xuaW1wb3J0IEZsb29yQ29uc3RydWN0aW9uIGZyb20gJy4vRmxvb3JDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVGbG9vciBmcm9tICcuL1pvbmVGbG9vcic7XG5cbi8qKlxuICogQ2xhc3MgU2NyYXRjaEZpbGVMaW5lXG4gKi9cbmNsYXNzIFNjcmF0Y2hGaWxlTGluZSB7XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGEgZGF0YSBsaW5lIGludG8gdGhlIGFwcHJvcHJpYXRlIGNsYXNzIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSBwYXJzZWRcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIGlmIChMb29rc0xpa2UuU2hhZGluZ1NjaGVtZShkYXRhKSkge1xuICAgICAgcmV0dXJuIEhvcml6b250YWxTaGFkaW5nU2NoZW1lLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuQ2VpbGluZ0hlaWdodChkYXRhKSkge1xuICAgICAgcmV0dXJuIENlaWxpbmdIZWlnaHQuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5XaW5kb3dDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiBXaW5kb3dDb25zdHJ1Y3Rpb24uQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lV2luZG93KGRhdGEpKSB7XG4gICAgICByZXR1cm4gWm9uZVdpbmRvdy5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVEZXRhaWwoZGF0YSkpIHtcbiAgICAgIHJldHVybiBab25lRGV0YWlsLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuRmxvb3JDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiBGbG9vckNvbnN0cnVjdGlvbi5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVGbG9vcihkYXRhKSkge1xuICAgICAgcmV0dXJuIFpvbmVGbG9vci5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JhdGNoRmlsZUxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvU2NyYXRjaEZpbGVMaW5lLmpzIiwiaW1wb3J0IEhvcml6b250YWxTaGFkaW5nU2NoZW1lIGZyb20gJy4uL0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbmltcG9ydCBXaW5kb3dDb25zdHJ1Y3Rpb24gZnJvbSAnLi4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4uL1pvbmVXaW5kb3cnO1xuaW1wb3J0IENlaWxpbmdIZWlnaHQgZnJvbSAnLi4vQ2VpbGluZ0hlaWdodCc7XG5pbXBvcnQgWm9uZURldGFpbCBmcm9tICcuLi9ab25lRGV0YWlsJztcbmltcG9ydCBGbG9vckNvbnN0cnVjdGlvbiBmcm9tICcuLi9GbG9vckNvbnN0cnVjdGlvbic7XG5pbXBvcnQgWm9uZUZsb29yIGZyb20gXCIuLi9ab25lRmxvb3JcIjtcblxuLyoqXG4gKiBBIGNsYXNzIHRvIGNvbXBhcmUgYSBkYXRhIHN0cmluZyBhbmQgaW5kaWNhdGUgd2hhdCB0eXBlIG9mIGRhdGEgaXQgbG9va3MgbGlrZVxuICovXG5jbGFzcyBMb29rc0xpa2Uge1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIGhvcml6b250YWwgc2hhZGluZyBzY2hlbWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBTaGFkaW5nU2NoZW1lKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSB3aW5kb3cgY29uc3RydWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgV2luZG93Q29uc3RydWN0aW9uKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBXaW5kb3dDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgem9uZSB3aW5kb3dcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBab25lV2luZG93KGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBab25lV2luZG93LlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIGNlaWxpbmcgaGVpZ2h0IGxpbmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBDZWlsaW5nSGVpZ2h0KGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBDZWlsaW5nSGVpZ2h0LlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHpvbmUgZGV0YWlsIGxpbmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBab25lRGV0YWlsKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBab25lRGV0YWlsLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIGZsb29yIGNvbnN0cnVjdGlvbiBsaW5lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgRmxvb3JDb25zdHJ1Y3Rpb24obGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIEZsb29yQ29uc3RydWN0aW9uLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHpvbmUgZmxvb3IgbGluZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFpvbmVGbG9vcihsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgWm9uZUZsb29yLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gdGhlIHJlZ2V4IHRlc3QgYWdhaW5zdCB0aGUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAgVGhlIGRhdGEgdG8gdGVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnZXggVGhlIHJlZ2V4IHBhdHRlcm4gdG8gdGVzdCB3aXRoXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFRlc3QoZGF0YSwgcmVnZXgpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHJlZ2V4KTtcbiAgICByZXR1cm4gcmVnZXhwLnRlc3QoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoYXQgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgUmV2ZXJzZUxvb2t1cChkYXRhKSB7XG4gICAgaWYgKExvb2tzTGlrZS5TaGFkaW5nU2NoZW1lKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLkNlaWxpbmdIZWlnaHQoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnQ2VpbGluZ0hlaWdodCc7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5XaW5kb3dDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiAnV2luZG93Q29uc3RydWN0aW9uJztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVXaW5kb3coZGF0YSkpIHtcbiAgICAgIHJldHVybiAnWm9uZVdpbmRvdyc7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lRGV0YWlsKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ1pvbmVEZXRhaWwnO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuRmxvb3JDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiAnRmxvb3JDb25zdHJ1Y3Rpb24nO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZUZsb29yKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ1pvbmVGbG9vcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3NMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL0xvb2tzTGlrZS5qcyIsIi8qKlxuICogQSBjbGFzcyB0byBoYW5kbGUgcGFyc2luZyBhbiBlbnRpcmUgc2NyYXRjaCBmaWxlXG4gKi9cbmltcG9ydCBTY3JhdGNoRmlsZUxpbmUgZnJvbSAnLi9TY3JhdGNoRmlsZUxpbmUnO1xuaW1wb3J0IExvb2tzTGlrZSBmcm9tICcuL3V0aWxzL0xvb2tzTGlrZSc7XG5pbXBvcnQgV2luZG93Q29uc3RydWN0aW9uIGZyb20gJy4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG5pbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuL0NlaWxpbmdIZWlnaHQnO1xuaW1wb3J0IFpvbmVEZXRhaWwgZnJvbSAnLi9ab25lRGV0YWlsJztcbmltcG9ydCBGbG9vckNvbnN0cnVjdGlvbiBmcm9tICcuL0Zsb29yQ29uc3RydWN0aW9uJztcbmltcG9ydCBab25lRmxvb3IgZnJvbSAnLi9ab25lRmxvb3InO1xuXG5jbGFzcyBQYXJzZXIge1xuXG4gIHdpbmRvd0NvbnN0cnVjdGlvbnMgPSBbXTtcbiAgem9uZVdpbmRvd3MgPSBbXTtcbiAgem9uZURldGFpbHMgPSBbXTtcbiAgc2hhZGluZ1NjaGVtZXMgPSBbXTtcbiAgY2VpbGluZ0hlaWdodHMgPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gZmlsZSBBIHNjcmF0Y2hmaWxlIGFycmF5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgfVxuXG4gIHByb2Nlc3MoKSB7XG4gICAgY29uc3QgZGF0YUxpbmVzID0gdGhpcy5nZXREYXRhTGluZXMoKTtcblxuICAgIC8vIEZpbHRlciB0aGUgYXJyYXlzIHRvIG9ubHkgaW5jbHVkZSB0aGUgcmVsYXRlZCBkYXRhLCB0aGVuIGJ1aWxkIHRoZSBkYXRhIGxpbmUgaW50byB0aGUgYXBwcm9wcmlhdGUgY2xhc3NcbiAgICB0aGlzLndpbmRvd0NvbnN0cnVjdGlvbnMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1dpbmRvd0NvbnN0cnVjdGlvbicpXG4gICAgICAubWFwKHdpbmRvdyA9PiBXaW5kb3dDb25zdHJ1Y3Rpb24uQnVpbGQod2luZG93KSk7XG5cbiAgICB0aGlzLnpvbmVXaW5kb3dzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdab25lV2luZG93JylcbiAgICAgIC5tYXAoem9uZVdpbmRvdyA9PiBab25lV2luZG93LkJ1aWxkKHpvbmVXaW5kb3cpKTtcblxuICAgIHRoaXMuc2hhZGluZ1NjaGVtZXMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ0hvcml6b250YWxTaGFkaW5nU2NoZW1lJylcbiAgICAgIC5tYXAoc2hhZGluZyA9PiBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5CdWlsZChzaGFkaW5nKSk7XG5cbiAgICB0aGlzLmNlaWxpbmdIZWlnaHRzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdDZWlsaW5nSGVpZ2h0JylcbiAgICAgIC5tYXAoY2VpbGluZ0hlaWdodCA9PiBDZWlsaW5nSGVpZ2h0LkJ1aWxkKGNlaWxpbmdIZWlnaHQpKTtcblxuICAgIHRoaXMuem9uZURldGFpbHMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1pvbmVEZXRhaWwnKVxuICAgICAgLm1hcCh6b25lRGV0YWlsID0+IFpvbmVEZXRhaWwuQnVpbGQoem9uZURldGFpbCkpO1xuXG4gICAgdGhpcy5mbG9vckNvbnN0cnVjdGlvbnMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ0Zsb29yQ29uc3RydWN0aW9uJylcbiAgICAgIC5tYXAoZmxvb3JDb25zdHJ1Y3Rpb24gPT4gRmxvb3JDb25zdHJ1Y3Rpb24uQnVpbGQoZmxvb3JDb25zdHJ1Y3Rpb24pKTtcblxuICAgIHRoaXMuem9uZUZsb29ycyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnWm9uZUZsb29yJylcbiAgICAgIC5tYXAoem9uZUZsb29yID0+IFpvbmVGbG9vci5CdWlsZCh6b25lRmxvb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpbmVzIG9mIGRhdGEgdGhhdCBtYXRjaCBhIHR5cGUgd2UncmUgaW50ZXJlc3RlZCBpblxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXREYXRhTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5maWx0ZXIobGluZSA9PiBTY3JhdGNoRmlsZUxpbmUuQnVpbGQobGluZSkgIT09IGZhbHNlKTtcbiAgfVxuXG4gIGdldFdpbmRvd0NvbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93Q29uc3RydWN0aW9ucztcbiAgfVxuXG4gIGdldFpvbmVXaW5kb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVXaW5kb3dzO1xuICB9XG5cbiAgZ2V0U2hhZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkaW5nU2NoZW1lcztcbiAgfVxuXG4gIGdldENlaWxpbmdIZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmNlaWxpbmdIZWlnaHRzO1xuICB9XG5cbiAgZ2V0Wm9uZURldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZURldGFpbHM7XG4gIH1cblxuICBnZXRGbG9vckNvbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvb3JDb25zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0Wm9uZUZsb29ycygpIHtcbiAgICByZXR1cm4gdGhpcy56b25lRmxvb3JzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgZGF0YSBpbiBhbiBvYmplY3QgdGhhdCBjYW4gYmUgZGVjb25zdHJ1Y3RlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0QWxsRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2luZG93Q29uc3RydWN0aW9uczogdGhpcy5nZXRXaW5kb3dDb25zdHJ1Y3Rpb25zKCksXG4gICAgICB6b25lV2luZG93czogdGhpcy5nZXRab25lV2luZG93cygpLFxuICAgICAgc2hhZGluZzogdGhpcy5nZXRTaGFkaW5nKCksXG4gICAgICBjZWlsaW5nSGVpZ2h0czogdGhpcy5nZXRDZWlsaW5nSGVpZ2h0cygpLFxuICAgICAgem9uZURldGFpbHM6IHRoaXMuZ2V0Wm9uZURldGFpbHMoKSxcbiAgICAgIGZsb29yQ29uc3RydWN0aW9uczogdGhpcy5nZXRGbG9vckNvbnN0cnVjdGlvbnMoKSxcbiAgICAgIHpvbmVGbG9vcnM6IHRoaXMuZ2V0Wm9uZUZsb29ycygpXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QYXJzZXIuanMiLCJpbXBvcnQgT3JpZW50YXRpb24gZnJvbSAnLi9PcmllbnRhdGlvbic7XG5pbXBvcnQgR3JvdW5kRmxvb3IgZnJvbSAnLi9Hcm91bmRGbG9vcic7XG5pbXBvcnQgWm9uZVdpbmRvdyBmcm9tICcuL1pvbmVXaW5kb3cnO1xuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJy4vdXRpbHMnO1xuLyoqXG4gKiBDbGFzcyBSZXN1bHRzQnVpbGRlclxuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCB0YWtlIHZhcmlvdXMgYXJyYXlzIG9mIGRhdGEgbGluZXMsIGJ1aWxkIHRoZW0gaW50byB0aGVpciBhcHByb3ByaWF0ZSBjbGFzc2VzLFxuICogbGluayB0aGVtIHRocm91Z2ggdmFyaW91cyBJRCdzLCBhbmQgdGhlbiBjcmVhdGUgbXVsdGlwbGUgb3V0cHV0IGxpbmVzXG4gKi9cblxuY2xhc3MgUmVzdWx0c0J1aWxkZXIge1xuXG4gIC8qKlxuICAgKiBDb21waWxlIHRoZSB2YXJpb3VzIGFycmF5cyBpbnRvIGEgc2luZ2xlIGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9IHdpbmRvd0NvbnN0cnVjdGlvbnNcbiAgICogQHBhcmFtIHthcnJheX0gem9uZVdpbmRvd3NcbiAgICogQHBhcmFtIHthcnJheX0gc2hhZGluZ1xuICAgKiBAcGFyYW0ge2FycmF5fSBjZWlsaW5nSGVpZ2h0c1xuICAgKiBAcGFyYW0ge2FycmF5fSB6b25lRGV0YWlsc1xuICAgKiBAcGFyYW0ge2FycmF5fSBmbG9vckNvbnN0cnVjdGlvbnNcbiAgICogQHBhcmFtIHthcnJheX0gem9uZUZsb29yc1xuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgc3RhdGljIENvbXBpbGUoe1xuICAgIHdpbmRvd0NvbnN0cnVjdGlvbnMsIHpvbmVXaW5kb3dzLCBzaGFkaW5nLCBjZWlsaW5nSGVpZ2h0cywgem9uZURldGFpbHMsIGZsb29yQ29uc3RydWN0aW9ucywgem9uZUZsb29yc1xuICB9KSB7XG4gICAgcmV0dXJuIHpvbmVEZXRhaWxzLm1hcCgoem9uZSkgPT4ge1xuICAgICAgLy8gRmlsdGVyIHRoZSB6b25lIHdpbmRvd3MgZm9yIG9ubHkgd2luZG93cyBpbiB0aGlzIHpvbmUsIGFuZCB0aGVuIG1hcCB0aGUgd2luZG93IGNvbnN0cnVjdGlvbiwgc2hhZGluZyBhbmQgY2VpbGluZyBoZWlnaHQgZGV0YWlsc1xuICAgICAgY29uc3Qgd2luZG93cyA9IHpvbmVXaW5kb3dzLmZpbHRlcih3aW5kb3cgPT4gd2luZG93LnpvbmVJZCA9PT0gem9uZS5pZCkubWFwKCh6b25lV2luZG93KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdGlvbiA9IHdpbmRvd0NvbnN0cnVjdGlvbnMuZmlsdGVyKGNvbnMgPT4gY29ucy5pZCA9PT0gem9uZVdpbmRvdy5nZXRXaW5kb3dJZCgpKVswXTtcbiAgICAgICAgY29uc3Qgc2hhZGluZ1NjaGVtZSA9IHNoYWRpbmcuZmlsdGVyKHNoYWRlID0+IHNoYWRlLmdldElkKCkgPT09IHpvbmVXaW5kb3cuZ2V0SG9yaXpTaGFkaW5nMUlkKCkgfHwgc2hhZGUuZ2V0SWQoKSA9PT0gem9uZVdpbmRvdy5nZXRIb3JpelNoYWRpbmcySWQoKSk7XG4gICAgICAgIGNvbnN0IGNlaWxpbmdIZWlnaHQgPSBjZWlsaW5nSGVpZ2h0cy5maWx0ZXIoY2VpbGluZyA9PiBjZWlsaW5nLmdldFpvbmVJZCgpID09PSB6b25lLmdldElkKCkpWzBdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uem9uZVdpbmRvdyxcbiAgICAgICAgICBjb25zdHJ1Y3Rpb24sXG4gICAgICAgICAgc2hhZGluZzogc2hhZGluZ1NjaGVtZSxcbiAgICAgICAgICBjZWlsaW5nSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZmxvb3JzID0gem9uZUZsb29ycy5maWx0ZXIoem9uZUZsb29yID0+IHpvbmVGbG9vci56b25lSWQgPT09IHpvbmUuaWQpLm1hcCgoem9uZUZsb29yKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdGlvbiA9IGZsb29yQ29uc3RydWN0aW9ucy5maWx0ZXIoZmxvb3JDb24gPT4gZmxvb3JDb24uaWQgPT09IHpvbmVGbG9vci5jb25zdHJ1Y3Rpb25JZClbMF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi56b25lRmxvb3IsXG4gICAgICAgICAgLi4uY29uc3RydWN0aW9uXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHpvbmUuZ2V0SWQoKSxcbiAgICAgICAgbmFtZTogem9uZS5nZXROYW1lKCksXG4gICAgICAgIHdpbmRvd3MsXG4gICAgICAgIG9uR3JvdW5kRmxvb3I6IEdyb3VuZEZsb29yLlRlc3QoZmxvb3JzKVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgem9uZXMgYXJyYXkgaW50byBhIGZsYXR0IGFycmF5IHJlYWR5IGZvciBjb252ZXJzaW9uIHRvIENTVlxuICAgKlxuICAgKiBAcGFyYW0ge2FycmF5fSAgem9uZXMgICAgIFRoZSB6b25lcyBhcnJheSBjcmVhdGVkIGluIFJlc3VsdHNCdWlsZGVyLkNvbXBpbGUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJlbmNlIFtPcHRpb25hbF0gUmVmZXJlbmNlIE5vcnRoIGF6aW11dGguIERlZmF1bHQgMFxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBzdGF0aWMgQnVpbGQoem9uZXMsIHJlZmVyZW5jZSA9IDApIHtcbiAgICBjb25zdCBjc3YgPSB6b25lcy5tYXAoKHpvbmUpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd0NzdiA9IHpvbmUud2luZG93cy5tYXAoKHdpbmRvdykgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdGlvbiA9ICcnO1xuICAgICAgICBsZXQgZWF2ZU9mZnNldCA9ICcnO1xuICAgICAgICBsZXQgcGVyZ29sYU9mZnNldCA9ICcnO1xuICAgICAgICBpZiAod2luZG93LnNoYWRpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHByb2plY3Rpb24gPSB3aW5kb3cuc2hhZGluZ1swXS5wcm9qZWN0aW9uO1xuICAgICAgICAgIGVhdmVPZmZzZXQgPSB3aW5kb3cuc2hhZGluZ1swXS5lYXZlT2Zmc2V0O1xuICAgICAgICAgIHBlcmdvbGFPZmZzZXQgPSB3aW5kb3cuc2hhZGluZ1swXS5wZXJnb2xhT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB6b25lLm5hbWUsXG4gICAgICAgICAgJycsXG4gICAgICAgICAgT3JpZW50YXRpb24uR2V0KHdpbmRvdy5hemltdXRoLCByZWZlcmVuY2UpLFxuICAgICAgICAgIHdpbmRvdy5oZWlnaHQsXG4gICAgICAgICAgd2luZG93LndpZHRoLFxuICAgICAgICAgIHByb2plY3Rpb24sXG4gICAgICAgICAgWm9uZVdpbmRvdy5IZWFkSGVpZ2h0KHdpbmRvdy5oZWlnaHQsIGVhdmVPZmZzZXQpLFxuICAgICAgICAgIHdpbmRvdy5jb25zdHJ1Y3Rpb24ubmFtZSxcbiAgICAgICAgICB3aW5kb3cuY2VpbGluZ0hlaWdodC5oZWlnaHQsXG4gICAgICAgICAgZWF2ZU9mZnNldCxcbiAgICAgICAgICBwZXJnb2xhT2Zmc2V0LFxuICAgICAgICAgIHpvbmUub25Hcm91bmRGbG9vciA/ICcwJyA6ICcnXG4gICAgICAgIF07XG4gICAgICB9KTtcblxuICAgICAgLy8gQW4gZW1wdHkgd2luZG93Q3N2IG5lZWRzIHRvIGJlIHJldHVybmVkIGluc2lkZSBhbiBhcnJheSBpdHNlbGYsIGluIG9yZGVyIHRvIHdvcmsgd2l0aCB0aGUgZmxhdHRlbiBmdW5jdGlvblxuICAgICAgcmV0dXJuIHdpbmRvd0Nzdi5sZW5ndGggPiAwID8gd2luZG93Q3N2IDogW3dpbmRvd0Nzdl07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxhdHRlbihjc3YpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0c0J1aWxkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvUmVzdWx0c0J1aWxkZXIuanMiLCJjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKCdqcy93b3JrZXIuanMnKTtcblxuY29uc3QgY3JlYXRlUHJldmlldyA9IChyZXN1bHRzKSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMtcHJldmlldy10ZW1wbGF0ZScpO1xuICBjb25zdCBpbnN0YW5jZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG5cbiAgY29uc3QgdGFibGVCb2R5ID0gaW5zdGFuY2UucXVlcnlTZWxlY3RvcigndGJvZHknKTtcblxuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICByZXN1bHQuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgdGFibGVDZWxsLmlubmVyVGV4dCA9IHJlcztcbiAgICAgIHRhYmxlUm93LmFwcGVuZENoaWxkKHRhYmxlQ2VsbCk7XG4gICAgfSk7XG5cbiAgICB0YWJsZUJvZHkuYXBwZW5kQ2hpbGQodGFibGVSb3cpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0cy1wcmV2aWV3JykuYXBwZW5kQ2hpbGQoaW5zdGFuY2UpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGRvd25sb2FkIGZpbGUsIGFuZCBkb3dubG9hZCBpdCB0byB0aGUgdXNlcnMgYnJvd3NlclxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdHNcbiAqXG4gKiBAcmV0dXJucyB7bnVsbH1cbiAqL1xuY29uc3QgY3JlYXRlRG93bmxvYWQgPSAocmVzdWx0cykgPT4ge1xuICBsZXQgY3N2Q29udGVudCA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJztcbiAgY29uc3QgaGVhZGVyQXJyID0gW1xuICAgICdab25lIE5hbWUnLFxuICAgICd7Ymxhbmt9JyxcbiAgICAnT3JpZW50YXRpb24nLFxuICAgICdIZWlnaHQnLFxuICAgICdXaWR0aCcsXG4gICAgJ1Byb2plY3Rpb24nLFxuICAgICdIJyxcbiAgICAnV2luZG93IFR5cGUnLFxuICAgICdDZWlsaW5nIEhlaWdodCcsXG4gICAgJ0VhdmUgT2Zmc2V0JyxcbiAgICAnUGVyZ29sYSBPZmZzZXQnLFxuICAgICdMZXZlbCdcbiAgXTtcbiAgY29uc3QgaGVhZGVyUm93ID0gaGVhZGVyQXJyLmpvaW4oJywnKTtcbiAgY3N2Q29udGVudCArPSBgJHtoZWFkZXJSb3d9XFxuYDtcblxuICByZXN1bHRzLmZvckVhY2goKHJvd0FycmF5KSA9PiB7XG4gICAgaWYgKHJvd0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJvdyA9IHJvd0FycmF5LmpvaW4oJywnKTtcbiAgICAgIGNzdkNvbnRlbnQgKz0gYCR7cm93fVxcbmA7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdkNvbnRlbnQpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGVuY29kZWRVcmkpO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnZ2xhemluZy5jc3YnKTtcbiAgbGluay5oaWRkZW4gPSB0cnVlO1xuICBsaW5rLmlubmVySFRNTCA9ICdDbGljayBIZXJlIHRvIGRvd25sb2FkJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTsgLy8gUmVxdWlyZWQgZm9yIEZGXG5cbiAgbGluay5jbGljaygpO1xufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2Nlc3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgZmlsZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGVUb1VwbG9hZCcpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9ydGgtcmVmZXJlbmNlJykudmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHJlZmVyZW5jZSBub3J0aCBhemltdXRoJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGZpbGVTZWxlY3Rvci5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIHNjcmF0Y2ggZmlsZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGZpbGUgPSBmaWxlU2VsZWN0b3IuZmlsZXNbMF07XG4gIGNvbnN0IHJlZmVyZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3J0aC1yZWZlcmVuY2UnKS52YWx1ZTtcblxuICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBmaWxlLCByZWZlcmVuY2UgfSk7XG5cbiAgd29ya2VyLm9ubWVzc2FnZSA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIGNyZWF0ZVByZXZpZXcoZGF0YS5yZXN1bHRzKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjcmVhdGVEb3dubG9hZChkYXRhLnJlc3VsdHMpO1xuICAgIH0pO1xuICB9O1xufSk7XG5cbi8vIENsZWFyIHByZXZpZXcgcmVzdWx0cyB3aGVuIHRoZSBzY3JhdGNoIGZpbGUgY2hhbmdlc1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGVUb1VwbG9hZCcpLm9uY2hhbmdlID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0cy1wcmV2aWV3JykuaW5uZXJIVE1MID0gJyc7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBGbGF0dGVuIGFycmF5IDEgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgQXJyeWEgdG8gZmxhdHRlblxuICpcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSBhcnIgPT4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5hcnIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==