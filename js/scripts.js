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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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

var _CeilingHeight = __webpack_require__(1);

var _CeilingHeight2 = _interopRequireDefault(_CeilingHeight);

var _HorizontalShadingScheme = __webpack_require__(2);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _LooksLike = __webpack_require__(10);

var _LooksLike2 = _interopRequireDefault(_LooksLike);

var _WindowConstruction = __webpack_require__(3);

var _WindowConstruction2 = _interopRequireDefault(_WindowConstruction);

var _ZoneWindow = __webpack_require__(6);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _ZoneDetail = __webpack_require__(4);

var _ZoneDetail2 = _interopRequireDefault(_ZoneDetail);

var _FloorConstruction = __webpack_require__(0);

var _FloorConstruction2 = _interopRequireDefault(_FloorConstruction);

var _ZoneFloor = __webpack_require__(5);

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

var _HorizontalShadingScheme = __webpack_require__(2);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _WindowConstruction2 = __webpack_require__(3);

var _WindowConstruction3 = _interopRequireDefault(_WindowConstruction2);

var _ZoneWindow2 = __webpack_require__(6);

var _ZoneWindow3 = _interopRequireDefault(_ZoneWindow2);

var _CeilingHeight2 = __webpack_require__(1);

var _CeilingHeight3 = _interopRequireDefault(_CeilingHeight2);

var _ZoneDetail2 = __webpack_require__(4);

var _ZoneDetail3 = _interopRequireDefault(_ZoneDetail2);

var _FloorConstruction2 = __webpack_require__(0);

var _FloorConstruction3 = _interopRequireDefault(_FloorConstruction2);

var _ZoneFloor2 = __webpack_require__(5);

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

var _WindowConstruction = __webpack_require__(3);

var _WindowConstruction2 = _interopRequireDefault(_WindowConstruction);

var _ZoneWindow = __webpack_require__(6);

var _ZoneWindow2 = _interopRequireDefault(_ZoneWindow);

var _HorizontalShadingScheme = __webpack_require__(2);

var _HorizontalShadingScheme2 = _interopRequireDefault(_HorizontalShadingScheme);

var _CeilingHeight = __webpack_require__(1);

var _CeilingHeight2 = _interopRequireDefault(_CeilingHeight);

var _ZoneDetail = __webpack_require__(4);

var _ZoneDetail2 = _interopRequireDefault(_ZoneDetail);

var _FloorConstruction = __webpack_require__(0);

var _FloorConstruction2 = _interopRequireDefault(_FloorConstruction);

var _ZoneFloor = __webpack_require__(5);

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

          return [zone.name, '', _Orientation2.default.Get(window.azimuth, reference), window.height, window.width, projection, window.headHeight, window.construction.name, window.ceilingHeight.height, eaveOffset, pergolaOffset, zone.onGroundFloor ? '0' : ''];
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
  var headerArr = ['Zone Name', '{blank}', 'Orientation', 'Height', 'Width', 'Projection', 'Head Height', 'Window Type', 'Ceiling Height', 'Eave Offset', 'Pergola Offset', 'Level'];
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

__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(7);
__webpack_require__(2);
__webpack_require__(13);
__webpack_require__(8);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(9);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjEwYTQwMjdlNjllNTJkYTcxNTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0Zsb29yQ29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9DZWlsaW5nSGVpZ2h0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvV2luZG93Q29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lRGV0YWlsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9ab25lRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1pvbmVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0dyb3VuZEZsb29yLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9PcmllbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvU2NyYXRjaEZpbGVMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9Mb29rc0xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUmVzdWx0c0J1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGbG9vckNvbnN0cnVjdGlvbiIsImxpbmVEYXRhIiwiaWQiLCJpc0Nzb2ciLCJyZWdleCIsIlJlZ0V4cCIsIlJlZ2V4IiwiZGF0YSIsImV4ZWMiLCJ0cmltIiwiVGVzdENzb2ciLCJnZXRDb25zdHJ1Y3Rpb25JZCIsImdldElzQ3NvZyIsImNzb2dSZWdleCIsIkNTT0dSZWdleCIsInRlc3QiLCJDb25zdHJ1Y3Rpb25JZFJlZ2V4IiwiQ2VpbGluZ0hlaWdodCIsInpvbmVJZCIsImhlaWdodCIsImdldFpvbmVJZCIsImdldEhlaWdodCIsIkhvcml6b250YWxTaGFkaW5nU2NoZW1lIiwiZWF2ZVByb2plY3Rpb24iLCJlYXZlT2Zmc2V0IiwicGVyZ29sYVByb2plY3Rpb24iLCJwZXJnb2xhT2Zmc2V0IiwicHJvamVjdGlvbiIsIkNPTlNUX19JRCIsIkNPTlNUX19FQVZFX1BST0pFQ1RJT04iLCJDT05TVF9fRUFWRV9PRkZTRVQiLCJDT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OIiwiQ09OU1RfX1BFUkdPTEFfT0ZGU0VUIiwiZ2V0UHJvamVjdGlvbiIsInBhcnNlRmxvYXQiLCJnZXRFYXZlUHJvamVjdGlvbiIsImdldFBlcmdvbGFQcm9qZWN0aW9uIiwiZ2V0SWQiLCJvZmZzZXQiLCJlYXZlIiwiZ2V0RWF2ZU9mZnNldCIsInBlcmdvbGEiLCJnZXRQZXJnb2xhT2Zmc2V0IiwiV2luZG93Q29uc3RydWN0aW9uIiwibmFtZSIsIkNPTlNUX19OQU1FIiwiWm9uZURldGFpbCIsImdldE5hbWUiLCJab25lRmxvb3IiLCJjb25zdHJ1Y3Rpb25JZCIsIlpvbmVXaW5kb3ciLCJ3aW5kb3dJZCIsIndpZHRoIiwiYXppbXV0aCIsImhlYWRIZWlnaHQiLCJob3JpelNoYWRpbmcxSWQiLCJob3JpelNoYWRpbmcySWQiLCJDT05TVF9fWk9ORV9JRCIsIkNPTlNUX19XSU5ET1dfSUQiLCJDT05TVF9fSEVJR0hUIiwiQ09OU1RfX1dJRFRIIiwiQ09OU1RfX0FaSU1VVEgiLCJDT05TVF9fSE9SWl9TSEFESU5HXzEiLCJDT05TVF9fSE9SWl9TSEFESU5HXzIiLCJnZXRXaW5kb3dJZCIsImdldFdpZHRoIiwiZ2V0QXppbXV0aCIsImdldEhlYWRIZWlnaHQiLCJnZXRIb3JpelNoYWRpbmcxSWQiLCJnZXRIb3JpelNoYWRpbmcySWQiLCJHcm91bmRGbG9vciIsImZsb29ycyIsImZpbHRlciIsImZsb29yIiwibGVuZ3RoIiwiT3JpZW50YXRpb24iLCJyZWZlcmVuY2UiLCJhemltdXRoSW50IiwicGFyc2VJbnQiLCJJcyIsIkNPTlNUX19OX0UiLCJDT05TVF9fRSIsIkNPTlNUX19TX0UiLCJDT05TVF9fUyIsIkNPTlNUX19TX1ciLCJDT05TVF9fVyIsIkNPTlNUX19OX1ciLCJsaW1pdHMiLCJ2ZWN0b3IiLCJ1cHBlciIsIk5vcm1hbGl6ZSIsImxvd2VyIiwibnVtYmVyIiwiTWF0aCIsImFicyIsIkNPTlNUX19OIiwiU2NyYXRjaEZpbGVMaW5lIiwiTG9va3NMaWtlIiwiU2hhZGluZ1NjaGVtZSIsIkJ1aWxkIiwiVGVzdCIsInJlZ2V4cCIsIlBhcnNlciIsImZpbGUiLCJ3aW5kb3dDb25zdHJ1Y3Rpb25zIiwiem9uZVdpbmRvd3MiLCJ6b25lRGV0YWlscyIsInNoYWRpbmdTY2hlbWVzIiwiY2VpbGluZ0hlaWdodHMiLCJkYXRhTGluZXMiLCJnZXREYXRhTGluZXMiLCJSZXZlcnNlTG9va3VwIiwibGluZSIsIm1hcCIsIndpbmRvdyIsInpvbmVXaW5kb3ciLCJzaGFkaW5nIiwiY2VpbGluZ0hlaWdodCIsInpvbmVEZXRhaWwiLCJmbG9vckNvbnN0cnVjdGlvbnMiLCJmbG9vckNvbnN0cnVjdGlvbiIsInpvbmVGbG9vcnMiLCJ6b25lRmxvb3IiLCJnZXRXaW5kb3dDb25zdHJ1Y3Rpb25zIiwiZ2V0Wm9uZVdpbmRvd3MiLCJnZXRTaGFkaW5nIiwiZ2V0Q2VpbGluZ0hlaWdodHMiLCJnZXRab25lRGV0YWlscyIsImdldEZsb29yQ29uc3RydWN0aW9ucyIsImdldFpvbmVGbG9vcnMiLCJSZXN1bHRzQnVpbGRlciIsInpvbmUiLCJ3aW5kb3dzIiwiY29uc3RydWN0aW9uIiwiY29ucyIsInNoYWRpbmdTY2hlbWUiLCJzaGFkZSIsImNlaWxpbmciLCJmbG9vckNvbiIsIm9uR3JvdW5kRmxvb3IiLCJ6b25lcyIsImNzdiIsIndpbmRvd0NzdiIsIkdldCIsIndvcmtlciIsIldvcmtlciIsImNyZWF0ZVByZXZpZXciLCJyZXN1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zdGFuY2UiLCJpbXBvcnROb2RlIiwiY29udGVudCIsInRhYmxlQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwicmVzdWx0IiwidGFibGVSb3ciLCJjcmVhdGVFbGVtZW50IiwicmVzIiwidGFibGVDZWxsIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVEb3dubG9hZCIsImNzdkNvbnRlbnQiLCJoZWFkZXJBcnIiLCJoZWFkZXJSb3ciLCJqb2luIiwicm93QXJyYXkiLCJyb3ciLCJlbmNvZGVkVXJpIiwiZW5jb2RlVVJJIiwibGluayIsInNldEF0dHJpYnV0ZSIsImhpZGRlbiIsImlubmVySFRNTCIsImJvZHkiLCJjbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlU2VsZWN0b3IiLCJ2YWx1ZSIsImFsZXJ0IiwiZmlsZXMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsIm9uY2hhbmdlIiwiZmxhdHRlbiIsInByb3RvdHlwZSIsImNvbmNhdCIsImFyciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7OztJQUdNQSxpQjtBQVNKLDZCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUEsU0FIdEJDLEVBR3NCLEdBSGpCLEVBR2lCO0FBQUEsU0FGdEJDLE1BRXNCLEdBRmIsS0FFYTs7QUFDcEIsUUFBTUMsUUFBUSxJQUFJ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Q0FFLFNBQVNNLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0MrQixRQUF4QyxHQUFtRCxZQUFNO0FBQ3ZEckMsV0FBU00sYUFBVCxDQUF1QixrQkFBdkIsRUFBMkNxQixTQUEzQyxHQUF1RCxFQUF2RDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBOzs7Ozs7O0FBT08sSUFBTVcsNEJBQVUsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU8sMEJBQU1DLFNBQU4sRUFBZ0JDLE1BQWhCLDRDQUEwQkMsR0FBMUIsRUFBUDtBQUFBLENBQWhCLEMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIxMGE0MDI3ZTY5ZTUyZGE3MTU4IiwiLyoqXG4gKiBDbGFzcyBGbG9vckNvbnN0cnVjdGlvblxuICovXG5jbGFzcyBGbG9vckNvbnN0cnVjdGlvbiB7XG5cbiAgc3RhdGljIENvbnN0cnVjdGlvbklkUmVnZXggPSAnKDI0WzEtOV18Mls1LTldXFxcXGR8M1sxLTNdXFxcXGR8MzQwKSc7XG4gIHN0YXRpYyBSZWdleCA9IGBeIDIke0Zsb29yQ29uc3RydWN0aW9uLkNvbnN0cnVjdGlvbklkUmVnZXh9YDtcbiAgc3RhdGljIENTT0dSZWdleCA9ICdeIDIoMjRbMS05XXwyWzUtOV1cXFxcZHwzWzEtM11cXFxcZHwzNDApICAgKC57N30pKiggMTggMTAwKSc7XG5cbiAgaWQgPSAnJztcbiAgaXNDc29nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoRmxvb3JDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLmlzQ3NvZyA9IEZsb29yQ29uc3RydWN0aW9uLlRlc3RDc29nKGxpbmVEYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbnN0cnVjdGlvbiBpZCB0aGF0IHRoaXMgZmxvb3IgY29uc3RydWN0aW9uIGJlbG9uZ3MgdG9cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlL2ZhbHNlIGluZGljYXRpbmcgaWYgdGhlIGZsb29yaW5nIHR5cGUgaW4gdGhlIHpvbmUgaXMgQ1NPR1xuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldElzQ3NvZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Nzb2c7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCB0aGUgZGF0YSBsaW5lIHRvIHNlZSBpZiB0aGVyZSBpcyBjb25jcmV0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBUZXN0Q3NvZyhsaW5lRGF0YSkge1xuICAgIGNvbnN0IGNzb2dSZWdleCA9IG5ldyBSZWdFeHAoRmxvb3JDb25zdHJ1Y3Rpb24uQ1NPR1JlZ2V4KTtcbiAgICByZXR1cm4gY3NvZ1JlZ2V4LnRlc3QobGluZURhdGEpO1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEZsb29yQ29uc3RydWN0aW9uKGRhdGEpO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldENvbnN0cnVjdGlvbklkKCksXG4gICAgICBpc0Nzb2c6IHRoaXMuZ2V0SXNDc29nKClcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvb3JDb25zdHJ1Y3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvRmxvb3JDb25zdHJ1Y3Rpb24uanMiLCIvKipcbiAqIENsYXNzIENlaWxpbmdIZWlnaHRcbiAqL1xuY2xhc3MgQ2VpbGluZ0hlaWdodCB7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ14gMyguezN9KTcwMCguezZ9KSguezZ9KSguezZ9KSguezZ9KSc7XG5cbiAgem9uZUlkID0gJyc7XG4gIGhlaWdodCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKENlaWxpbmdIZWlnaHQuUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuem9uZUlkID0gZGF0YVsxXS50cmltKCk7XG4gICAgdGhpcy5oZWlnaHQgPSBkYXRhWzNdLnRyaW0oKTtcbiAgfVxuXG4gIGdldFpvbmVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy56b25lSWQ7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpvbmVJZDogdGhpcy5nZXRab25lSWQoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgQ2VpbGluZ0hlaWdodChkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENlaWxpbmdIZWlnaHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvQ2VpbGluZ0hlaWdodC5qcyIsIi8qKlxuICogQnJlYWsgdGhlIEhvcml6b250YWwgU2hhZGluZyBTY2hlbWUgZGF0YSBpbnRvIGl0cyB2YXJpb3VzIHBhcnRzXG4gKi9cbmNsYXNzIEhvcml6b250YWxTaGFkaW5nU2NoZW1lIHtcblxuICAvKipcbiAgICogQ29uc3RhbnRzIHRoYXQgbWFwIHRoZSB2YXJpb3VzIGJpdHMgb2YgZGF0YSB0byB0aGUgc2VjdGlvbiBvZiByZWdleFxuICAgKi9cbiAgc3RhdGljIENPTlNUX19JRCA9IDE7XG4gIHN0YXRpYyBDT05TVF9fRUFWRV9QUk9KRUNUSU9OID0gMjtcbiAgc3RhdGljIENPTlNUX19FQVZFX09GRlNFVCA9IDM7XG4gIHN0YXRpYyBDT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OID0gNjtcbiAgc3RhdGljIENPTlNUX19QRVJHT0xBX09GRlNFVCA9IDc7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ14gMSAyMCguezN9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSguezZ9KSQnO1xuXG4gIGlkID0gJyc7XG4gIGVhdmVQcm9qZWN0aW9uID0gJyc7XG4gIGVhdmVPZmZzZXQgPSAnJztcbiAgcGVyZ29sYVByb2plY3Rpb24gPSAnJztcbiAgcGVyZ29sYU9mZnNldCA9ICcnO1xuICBwcm9qZWN0aW9uID0gJyc7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhW0hvcml6b250YWxTaGFkaW5nU2NoZW1lLkNPTlNUX19JRF0udHJpbSgpO1xuICAgIHRoaXMuZWF2ZVByb2plY3Rpb24gPSBkYXRhW0hvcml6b250YWxTaGFkaW5nU2NoZW1lLkNPTlNUX19FQVZFX1BST0pFQ1RJT05dLnRyaW0oKTtcbiAgICB0aGlzLmVhdmVPZmZzZXQgPSBkYXRhW0hvcml6b250YWxTaGFkaW5nU2NoZW1lLkNPTlNUX19FQVZFX09GRlNFVF0udHJpbSgpO1xuICAgIHRoaXMucGVyZ29sYVByb2plY3Rpb24gPSBkYXRhW0hvcml6b250YWxTaGFkaW5nU2NoZW1lLkNPTlNUX19QRVJHT0xBX1BST0pFQ1RJT05dLnRyaW0oKTtcbiAgICB0aGlzLnBlcmdvbGFPZmZzZXQgPSBkYXRhW0hvcml6b250YWxTaGFkaW5nU2NoZW1lLkNPTlNUX19QRVJHT0xBX09GRlNFVF0udHJpbSgpO1xuICAgIHRoaXMucHJvamVjdGlvbiA9IHRoaXMuZ2V0UHJvamVjdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgaGlnaGVzdCBwcm9qZWN0aW9uIHZhbHVlIGFuZCByZXR1cm5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldFByb2plY3Rpb24oKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5nZXRFYXZlUHJvamVjdGlvbigpKSA+IHBhcnNlRmxvYXQodGhpcy5nZXRQZXJnb2xhUHJvamVjdGlvbigpKSA/XG4gICAgICB0aGlzLmdldEVhdmVQcm9qZWN0aW9uKCkgOlxuICAgICAgdGhpcy5nZXRQZXJnb2xhUHJvamVjdGlvbigpO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBnZXRFYXZlT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmVhdmVPZmZzZXQ7XG4gIH1cblxuICBnZXRFYXZlUHJvamVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lYXZlUHJvamVjdGlvbjtcbiAgfVxuXG4gIGdldFBlcmdvbGFPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyZ29sYU9mZnNldDtcbiAgfVxuXG4gIGdldFBlcmdvbGFQcm9qZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBlcmdvbGFQcm9qZWN0aW9uO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBwcm9qZWN0aW9uOiB0aGlzLmdldFByb2plY3Rpb24oKSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICBlYXZlOiB0aGlzLmdldEVhdmVPZmZzZXQoKSxcbiAgICAgICAgcGVyZ29sYTogdGhpcy5nZXRQZXJnb2xhT2Zmc2V0KClcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IEhvcml6b250YWxTaGFkaW5nU2NoZW1lKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuanMiLCIvKipcbiAqIEJyZWFrIGEgV2luZG93IGNvbnN0cnVjdGlvbiBkYXRhIGxpbmUgaW50byBpdHMgdmFyaW91cyBwYXJ0c1xuICovXG5jbGFzcyBXaW5kb3dDb25zdHJ1Y3Rpb24ge1xuXG4gIHN0YXRpYyBDT05TVF9fSUQgPSAzO1xuICBzdGF0aWMgQ09OU1RfX05BTUUgPSAnJztcblxuICBzdGF0aWMgUmVnZXggPSAnXiBcXFxcZCguezN9KVsgXFxcXGRdKihbYS16QS1aXVthLXpBLVpcXFxcLVxcXFxkXXs5fVsgYS16QS1aXVthLXpBLVpdPyknO1xuXG4gIGlkID0gJyc7XG4gIG5hbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChXaW5kb3dDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLm5hbWUgPSBkYXRhWzJdLnRyaW0oKTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgV2luZG93Q29uc3RydWN0aW9uKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93Q29uc3RydWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1dpbmRvd0NvbnN0cnVjdGlvbi5qcyIsIi8qKlxuICogQ2xhc3MgWm9uZURldGFpbFxuICovXG5jbGFzcyBab25lRGV0YWlsIHtcblxuICBzdGF0aWMgUmVnZXggPSAnXkMgWjAwPyhcXFxcZHsxLDN9KSA9PiAoLiopJCc7XG5cbiAgaWQgPSAnJztcbiAgbmFtZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFpvbmVEZXRhaWwuUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuaWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLm5hbWUgPSBkYXRhWzJdLnRyaW0oKTtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmdldElkKCksXG4gICAgICBuYW1lOiB0aGlzLmdldE5hbWUoKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgWm9uZURldGFpbChkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFpvbmVEZXRhaWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvWm9uZURldGFpbC5qcyIsImltcG9ydCBGbG9vckNvbnN0cnVjdGlvbiBmcm9tICcuL0Zsb29yQ29uc3RydWN0aW9uJztcbi8qKlxuICogQ2xhc3MgWm9uZUZsb29yXG4gKi9cbmNsYXNzIFpvbmVGbG9vciB7XG5cbiAgc3RhdGljIFJlZ2V4ID0gYCAzKC4uLikoJHtGbG9vckNvbnN0cnVjdGlvbi5Db25zdHJ1Y3Rpb25JZFJlZ2V4fSlgO1xuXG4gIHpvbmVJZCA9ICcnO1xuICBjb25zdHJ1Y3Rpb25JZCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFpvbmVGbG9vci5SZWdleCk7XG4gICAgY29uc3QgZGF0YSA9IHJlZ2V4LmV4ZWMobGluZURhdGEpO1xuXG4gICAgdGhpcy56b25lSWQgPSBkYXRhWzFdLnRyaW0oKTtcbiAgICB0aGlzLmNvbnN0cnVjdGlvbklkID0gZGF0YVsyXS50cmltKCk7XG4gIH1cblxuICBnZXRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUlkO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0aW9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0aW9uSWQ7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgem9uZUlkOiB0aGlzLmdldFpvbmVJZCgpLFxuICAgICAgY29uc3RydWN0aW9uSWQ6IHRoaXMuZ2V0Q29uc3RydWN0aW9uSWQoKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIHJldHVybiBuZXcgWm9uZUZsb29yKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZUZsb29yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1pvbmVGbG9vci5qcyIsIi8qKlxuICogQ2xhc3MgdG8gcGFyc2Ugd2luZG93IGluZm9ybWF0aW9uIGluc2lkZSBhIHpvbmUgc2VjdGlvblxuICovXG5jbGFzcyBab25lV2luZG93IHtcblxuICBzdGF0aWMgQ09OU1RfX1pPTkVfSUQgPSAxO1xuICBzdGF0aWMgQ09OU1RfX1dJTkRPV19JRCA9IDI7XG4gIHN0YXRpYyBDT05TVF9fSEVJR0hUID0gNjtcbiAgc3RhdGljIENPTlNUX19XSURUSCA9IDc7XG4gIHN0YXRpYyBDT05TVF9fQVpJTVVUSCA9IDg7XG4gIHN0YXRpYyBDT05TVF9fSE9SWl9TSEFESU5HXzEgPSA5O1xuICBzdGF0aWMgQ09OU1RfX0hPUlpfU0hBRElOR18yID0gMTA7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ14gMyguezN9KSgoICgxMCl8KCAgWzAtOV0pKSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSknO1xuXG4gIHpvbmVJZCA9ICcnO1xuICB3aW5kb3dJZCA9ICcnO1xuICBoZWlnaHQgPSAnJztcbiAgd2lkdGggPSAnJztcbiAgYXppbXV0aCA9ICcnO1xuICBoZWFkSGVpZ2h0ID0gJyc7IC8vIFRoaXMgdmFsdWUgaXNuJ3QgdXNlZCwganVzdCBoZXJlIHRvIGl0IGNhbiBob2xkIGFuIGVtcHR5IGNlbGwgaW4gdGhlIG91dHB1dCBDU1ZcbiAgaG9yaXpTaGFkaW5nMUlkID0gJyc7XG4gIGhvcml6U2hhZGluZzJJZCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFpvbmVXaW5kb3cuUmVnZXgpO1xuICAgIGNvbnN0IGRhdGEgPSByZWdleC5leGVjKGxpbmVEYXRhKTtcblxuICAgIHRoaXMuem9uZUlkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19aT05FX0lEXS50cmltKCk7XG4gICAgdGhpcy53aW5kb3dJZCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fV0lORE9XX0lEXS50cmltKCk7XG4gICAgdGhpcy5oZWlnaHQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX0hFSUdIVF0udHJpbSgpO1xuICAgIHRoaXMud2lkdGggPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX1dJRFRIXS50cmltKCk7XG4gICAgdGhpcy5hemltdXRoID0gZGF0YVtab25lV2luZG93LkNPTlNUX19BWklNVVRIXS50cmltKCk7XG4gICAgdGhpcy5ob3JpelNoYWRpbmcxSWQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX0hPUlpfU0hBRElOR18xXS50cmltKCk7XG4gICAgdGhpcy5ob3JpelNoYWRpbmcySWQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX0hPUlpfU0hBRElOR18yXS50cmltKCk7XG4gIH1cblxuICBnZXRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUlkO1xuICB9XG5cbiAgZ2V0V2luZG93SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93SWQ7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cblxuICBnZXRBemltdXRoKCkge1xuICAgIHJldHVybiB0aGlzLmF6aW11dGg7XG4gIH1cblxuICBnZXRIZWFkSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRIZWlnaHQ7XG4gIH1cblxuICBnZXRIb3JpelNoYWRpbmcxSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9yaXpTaGFkaW5nMUlkO1xuICB9XG5cbiAgZ2V0SG9yaXpTaGFkaW5nMklkKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6U2hhZGluZzJJZDtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB6b25lSWQ6IHRoaXMuZ2V0Wm9uZUlkKCksXG4gICAgICB3aW5kb3dJZDogdGhpcy5nZXRXaW5kb3dJZCgpLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgd2lkdGg6IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgIGF6aW11dGg6IHRoaXMuZ2V0QXppbXV0aCgpLFxuICAgICAgaGVhZEhlaWdodDogdGhpcy5nZXRIZWFkSGVpZ2h0KCksXG4gICAgICBob3JpelNoYWRpbmcxSWQ6IHRoaXMuZ2V0SG9yaXpTaGFkaW5nMUlkKCksXG4gICAgICBob3JpelNoYWRpbmcySWQ6IHRoaXMuZ2V0SG9yaXpTaGFkaW5nMklkKClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFpvbmVXaW5kb3coZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBab25lV2luZG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1pvbmVXaW5kb3cuanMiLCIvKipcbiAqIENsYXNzIEdyb3VuZEZsb29yXG4gKi9cbmNsYXNzIEdyb3VuZEZsb29yIHtcblxuICAvKipcbiAgICogVGVzdCBpZiBhbnkgb2YgdGhlIHByb3ZpZGVkIGZsb29ycyBoYXZlIGEgQ1NPRyBjb25zdHJ1Y3Rpb24sIGluZGljYXRpbmcgdGhlIHpvbmUgaXMgbGlrZWx5IG9uIHRoZSBncm91bmQgZmxvb3JcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gZmxvb3JzIFRoZSBmbG9vcnMgdG8gY2hlY2sgZm9yIENTT0dcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgVGVzdChmbG9vcnMpIHtcbiAgICByZXR1cm4gZmxvb3JzLmZpbHRlcihmbG9vciA9PiBmbG9vci5pc0Nzb2cpLmxlbmd0aCA+IDA7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91bmRGbG9vcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9Hcm91bmRGbG9vci5qcyIsIi8qKlxuICogQ2xhc3MgT3JpZW50YXRpb25cbiAqL1xuY2xhc3MgT3JpZW50YXRpb24ge1xuXG4gIHN0YXRpYyBDT05TVF9fTiA9IHsgbG93ZXI6IDIyLCB1cHBlcjogMzM4IH07XG4gIHN0YXRpYyBDT05TVF9fTl9FID0geyBsb3dlcjogMjMsIHVwcGVyOiA2NyB9O1xuICBzdGF0aWMgQ09OU1RfX0UgPSB7IGxvd2VyOiA2OCwgdXBwZXI6IDExMiB9O1xuICBzdGF0aWMgQ09OU1RfX1NfRSA9IHsgbG93ZXI6IDExMywgdXBwZXI6IDE4NyB9O1xuICBzdGF0aWMgQ09OU1RfX1MgPSB7IGxvd2VyOiAxODgsIHVwcGVyOiAyMDIgfTtcbiAgc3RhdGljIENPTlNUX19TX1cgPSB7IGxvd2VyOiAyMDMsIHVwcGVyOiAyNDcgfTtcbiAgc3RhdGljIENPTlNUX19XID0geyBsb3dlcjogMjQ4LCB1cHBlcjogMjkyIH07XG4gIHN0YXRpYyBDT05TVF9fTl9XID0geyBsb3dlcjogMjkzLCB1cHBlcjogMzM3IH07XG5cbiAgLyoqXG4gICAqIEdldCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYXppbXV0aFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXppbXV0aCAgIEF6aW11dGggdmFsdWUgYmVpbmcgY2hhbmdlZCB0byBvcmllbnRhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmZXJlbmNlIFJlZmVyZW5jZSBhemltdXRoIGZvciBOb3J0aFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgR2V0KGF6aW11dGgsIHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF6aW11dGhJbnQgPSBwYXJzZUludChhemltdXRoLCAxMCk7XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fTl9FKSkge1xuICAgICAgcmV0dXJuICdORSc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX0UpKSB7XG4gICAgICByZXR1cm4gJ0UnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19TX0UpKSB7XG4gICAgICByZXR1cm4gJ1NFJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fUykpIHtcbiAgICAgIHJldHVybiAnUyc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1NfVykpIHtcbiAgICAgIHJldHVybiAnU1cnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19XKSkge1xuICAgICAgcmV0dXJuICdXJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fTl9XKSkge1xuICAgICAgcmV0dXJuICdOVyc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdOJztcbiAgfVxuXG4gIHN0YXRpYyBJcyhhemltdXRoLCByZWZlcmVuY2UsIGxpbWl0cykge1xuICAgIGNvbnN0IHZlY3RvciA9IHtcbiAgICAgIHVwcGVyOiBPcmllbnRhdGlvbi5Ob3JtYWxpemUocGFyc2VJbnQocmVmZXJlbmNlLCAxMCkgKyBsaW1pdHMudXBwZXIpLFxuICAgICAgbG93ZXI6IE9yaWVudGF0aW9uLk5vcm1hbGl6ZShwYXJzZUludChyZWZlcmVuY2UsIDEwKSArIGxpbWl0cy5sb3dlcilcbiAgICB9O1xuXG4gICAgcmV0dXJuIChhemltdXRoID49IHZlY3Rvci5sb3dlciAmJiBhemltdXRoIDw9IHZlY3Rvci51cHBlcilcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemUgYSB2YWx1ZSB0byBiZSB3aXRoaW4gdGhlIDAtMzYwIHJhbmdlXG4gICAqXG4gICAqIEBwYXJhbSB7aW50fSBudW1iZXJcbiAgICpcbiAgICogQHJldHVybnMge2ludH1cbiAgICovXG4gIHN0YXRpYyBOb3JtYWxpemUobnVtYmVyKSB7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHJldHVybiAzNjAgLSBNYXRoLmFicyhudW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgPiAzNjApIHtcbiAgICAgIHJldHVybiAobnVtYmVyIC0gMzYwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JpZW50YXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvT3JpZW50YXRpb24uanMiLCJpbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuL0NlaWxpbmdIZWlnaHQnO1xuaW1wb3J0IEhvcml6b250YWxTaGFkaW5nU2NoZW1lIGZyb20gJy4vSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUnO1xuaW1wb3J0IExvb2tzTGlrZSBmcm9tICcuL3V0aWxzL0xvb2tzTGlrZSc7XG5pbXBvcnQgV2luZG93Q29uc3RydWN0aW9uIGZyb20gJy4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgWm9uZURldGFpbCBmcm9tICcuL1pvbmVEZXRhaWwnO1xuaW1wb3J0IEZsb29yQ29uc3RydWN0aW9uIGZyb20gJy4vRmxvb3JDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVGbG9vciBmcm9tICcuL1pvbmVGbG9vcic7XG5cbi8qKlxuICogQ2xhc3MgU2NyYXRjaEZpbGVMaW5lXG4gKi9cbmNsYXNzIFNjcmF0Y2hGaWxlTGluZSB7XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGEgZGF0YSBsaW5lIGludG8gdGhlIGFwcHJvcHJpYXRlIGNsYXNzIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSBwYXJzZWRcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgQnVpbGQoZGF0YSkge1xuICAgIGlmIChMb29rc0xpa2UuU2hhZGluZ1NjaGVtZShkYXRhKSkge1xuICAgICAgcmV0dXJuIEhvcml6b250YWxTaGFkaW5nU2NoZW1lLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuQ2VpbGluZ0hlaWdodChkYXRhKSkge1xuICAgICAgcmV0dXJuIENlaWxpbmdIZWlnaHQuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5XaW5kb3dDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiBXaW5kb3dDb25zdHJ1Y3Rpb24uQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lV2luZG93KGRhdGEpKSB7XG4gICAgICByZXR1cm4gWm9uZVdpbmRvdy5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVEZXRhaWwoZGF0YSkpIHtcbiAgICAgIHJldHVybiBab25lRGV0YWlsLkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuRmxvb3JDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiBGbG9vckNvbnN0cnVjdGlvbi5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVGbG9vcihkYXRhKSkge1xuICAgICAgcmV0dXJuIFpvbmVGbG9vci5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JhdGNoRmlsZUxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvU2NyYXRjaEZpbGVMaW5lLmpzIiwiaW1wb3J0IEhvcml6b250YWxTaGFkaW5nU2NoZW1lIGZyb20gJy4uL0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbmltcG9ydCBXaW5kb3dDb25zdHJ1Y3Rpb24gZnJvbSAnLi4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4uL1pvbmVXaW5kb3cnO1xuaW1wb3J0IENlaWxpbmdIZWlnaHQgZnJvbSAnLi4vQ2VpbGluZ0hlaWdodCc7XG5pbXBvcnQgWm9uZURldGFpbCBmcm9tICcuLi9ab25lRGV0YWlsJztcbmltcG9ydCBGbG9vckNvbnN0cnVjdGlvbiBmcm9tICcuLi9GbG9vckNvbnN0cnVjdGlvbic7XG5pbXBvcnQgWm9uZUZsb29yIGZyb20gXCIuLi9ab25lRmxvb3JcIjtcblxuLyoqXG4gKiBBIGNsYXNzIHRvIGNvbXBhcmUgYSBkYXRhIHN0cmluZyBhbmQgaW5kaWNhdGUgd2hhdCB0eXBlIG9mIGRhdGEgaXQgbG9va3MgbGlrZVxuICovXG5jbGFzcyBMb29rc0xpa2Uge1xuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIGhvcml6b250YWwgc2hhZGluZyBzY2hlbWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBTaGFkaW5nU2NoZW1lKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSB3aW5kb3cgY29uc3RydWN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgV2luZG93Q29uc3RydWN0aW9uKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBXaW5kb3dDb25zdHJ1Y3Rpb24uUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgem9uZSB3aW5kb3dcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBab25lV2luZG93KGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBab25lV2luZG93LlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIGNlaWxpbmcgaGVpZ2h0IGxpbmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBDZWlsaW5nSGVpZ2h0KGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBDZWlsaW5nSGVpZ2h0LlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHpvbmUgZGV0YWlsIGxpbmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVEYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBab25lRGV0YWlsKGxpbmVEYXRhKSB7XG4gICAgcmV0dXJuIExvb2tzTGlrZS5UZXN0KGxpbmVEYXRhLCBab25lRGV0YWlsLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIGZsb29yIGNvbnN0cnVjdGlvbiBsaW5lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgRmxvb3JDb25zdHJ1Y3Rpb24obGluZURhdGEpIHtcbiAgICByZXR1cm4gTG9va3NMaWtlLlRlc3QobGluZURhdGEsIEZsb29yQ29uc3RydWN0aW9uLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHpvbmUgZmxvb3IgbGluZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFpvbmVGbG9vcihsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgWm9uZUZsb29yLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gdGhlIHJlZ2V4IHRlc3QgYWdhaW5zdCB0aGUgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAgVGhlIGRhdGEgdG8gdGVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnZXggVGhlIHJlZ2V4IHBhdHRlcm4gdG8gdGVzdCB3aXRoXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFRlc3QoZGF0YSwgcmVnZXgpIHtcbiAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKHJlZ2V4KTtcbiAgICByZXR1cm4gcmVnZXhwLnRlc3QoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoYXQgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSBkYXRhIGxpbmUgdG8gdGVzdFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfGJvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgUmV2ZXJzZUxvb2t1cChkYXRhKSB7XG4gICAgaWYgKExvb2tzTGlrZS5TaGFkaW5nU2NoZW1lKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLkNlaWxpbmdIZWlnaHQoZGF0YSkpIHtcbiAgICAgIHJldHVybiAnQ2VpbGluZ0hlaWdodCc7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5XaW5kb3dDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiAnV2luZG93Q29uc3RydWN0aW9uJztcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVXaW5kb3coZGF0YSkpIHtcbiAgICAgIHJldHVybiAnWm9uZVdpbmRvdyc7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lRGV0YWlsKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ1pvbmVEZXRhaWwnO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuRmxvb3JDb25zdHJ1Y3Rpb24oZGF0YSkpIHtcbiAgICAgIHJldHVybiAnRmxvb3JDb25zdHJ1Y3Rpb24nO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZUZsb29yKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ1pvbmVGbG9vcic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3NMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL0xvb2tzTGlrZS5qcyIsIi8qKlxuICogQSBjbGFzcyB0byBoYW5kbGUgcGFyc2luZyBhbiBlbnRpcmUgc2NyYXRjaCBmaWxlXG4gKi9cbmltcG9ydCBTY3JhdGNoRmlsZUxpbmUgZnJvbSAnLi9TY3JhdGNoRmlsZUxpbmUnO1xuaW1wb3J0IExvb2tzTGlrZSBmcm9tICcuL3V0aWxzL0xvb2tzTGlrZSc7XG5pbXBvcnQgV2luZG93Q29uc3RydWN0aW9uIGZyb20gJy4vV2luZG93Q29uc3RydWN0aW9uJztcbmltcG9ydCBab25lV2luZG93IGZyb20gJy4vWm9uZVdpbmRvdyc7XG5pbXBvcnQgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUgZnJvbSAnLi9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG5pbXBvcnQgQ2VpbGluZ0hlaWdodCBmcm9tICcuL0NlaWxpbmdIZWlnaHQnO1xuaW1wb3J0IFpvbmVEZXRhaWwgZnJvbSAnLi9ab25lRGV0YWlsJztcbmltcG9ydCBGbG9vckNvbnN0cnVjdGlvbiBmcm9tICcuL0Zsb29yQ29uc3RydWN0aW9uJztcbmltcG9ydCBab25lRmxvb3IgZnJvbSAnLi9ab25lRmxvb3InO1xuXG5jbGFzcyBQYXJzZXIge1xuXG4gIHdpbmRvd0NvbnN0cnVjdGlvbnMgPSBbXTtcbiAgem9uZVdpbmRvd3MgPSBbXTtcbiAgem9uZURldGFpbHMgPSBbXTtcbiAgc2hhZGluZ1NjaGVtZXMgPSBbXTtcbiAgY2VpbGluZ0hlaWdodHMgPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gZmlsZSBBIHNjcmF0Y2hmaWxlIGFycmF5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgfVxuXG4gIHByb2Nlc3MoKSB7XG4gICAgY29uc3QgZGF0YUxpbmVzID0gdGhpcy5nZXREYXRhTGluZXMoKTtcblxuICAgIC8vIEZpbHRlciB0aGUgYXJyYXlzIHRvIG9ubHkgaW5jbHVkZSB0aGUgcmVsYXRlZCBkYXRhLCB0aGVuIGJ1aWxkIHRoZSBkYXRhIGxpbmUgaW50byB0aGUgYXBwcm9wcmlhdGUgY2xhc3NcbiAgICB0aGlzLndpbmRvd0NvbnN0cnVjdGlvbnMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1dpbmRvd0NvbnN0cnVjdGlvbicpXG4gICAgICAubWFwKHdpbmRvdyA9PiBXaW5kb3dDb25zdHJ1Y3Rpb24uQnVpbGQod2luZG93KSk7XG5cbiAgICB0aGlzLnpvbmVXaW5kb3dzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdab25lV2luZG93JylcbiAgICAgIC5tYXAoem9uZVdpbmRvdyA9PiBab25lV2luZG93LkJ1aWxkKHpvbmVXaW5kb3cpKTtcblxuICAgIHRoaXMuc2hhZGluZ1NjaGVtZXMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ0hvcml6b250YWxTaGFkaW5nU2NoZW1lJylcbiAgICAgIC5tYXAoc2hhZGluZyA9PiBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5CdWlsZChzaGFkaW5nKSk7XG5cbiAgICB0aGlzLmNlaWxpbmdIZWlnaHRzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdDZWlsaW5nSGVpZ2h0JylcbiAgICAgIC5tYXAoY2VpbGluZ0hlaWdodCA9PiBDZWlsaW5nSGVpZ2h0LkJ1aWxkKGNlaWxpbmdIZWlnaHQpKTtcblxuICAgIHRoaXMuem9uZURldGFpbHMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1pvbmVEZXRhaWwnKVxuICAgICAgLm1hcCh6b25lRGV0YWlsID0+IFpvbmVEZXRhaWwuQnVpbGQoem9uZURldGFpbCkpO1xuXG4gICAgdGhpcy5mbG9vckNvbnN0cnVjdGlvbnMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ0Zsb29yQ29uc3RydWN0aW9uJylcbiAgICAgIC5tYXAoZmxvb3JDb25zdHJ1Y3Rpb24gPT4gRmxvb3JDb25zdHJ1Y3Rpb24uQnVpbGQoZmxvb3JDb25zdHJ1Y3Rpb24pKTtcblxuICAgIHRoaXMuem9uZUZsb29ycyA9IGRhdGFMaW5lc1xuICAgICAgLmZpbHRlcihsaW5lID0+IExvb2tzTGlrZS5SZXZlcnNlTG9va3VwKGxpbmUpID09PSAnWm9uZUZsb29yJylcbiAgICAgIC5tYXAoem9uZUZsb29yID0+IFpvbmVGbG9vci5CdWlsZCh6b25lRmxvb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpbmVzIG9mIGRhdGEgdGhhdCBtYXRjaCBhIHR5cGUgd2UncmUgaW50ZXJlc3RlZCBpblxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXREYXRhTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZS5maWx0ZXIobGluZSA9PiBTY3JhdGNoRmlsZUxpbmUuQnVpbGQobGluZSkgIT09IGZhbHNlKTtcbiAgfVxuXG4gIGdldFdpbmRvd0NvbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luZG93Q29uc3RydWN0aW9ucztcbiAgfVxuXG4gIGdldFpvbmVXaW5kb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVXaW5kb3dzO1xuICB9XG5cbiAgZ2V0U2hhZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkaW5nU2NoZW1lcztcbiAgfVxuXG4gIGdldENlaWxpbmdIZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmNlaWxpbmdIZWlnaHRzO1xuICB9XG5cbiAgZ2V0Wm9uZURldGFpbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZURldGFpbHM7XG4gIH1cblxuICBnZXRGbG9vckNvbnN0cnVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmxvb3JDb25zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0Wm9uZUZsb29ycygpIHtcbiAgICByZXR1cm4gdGhpcy56b25lRmxvb3JzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgZGF0YSBpbiBhbiBvYmplY3QgdGhhdCBjYW4gYmUgZGVjb25zdHJ1Y3RlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgKi9cbiAgZ2V0QWxsRGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2luZG93Q29uc3RydWN0aW9uczogdGhpcy5nZXRXaW5kb3dDb25zdHJ1Y3Rpb25zKCksXG4gICAgICB6b25lV2luZG93czogdGhpcy5nZXRab25lV2luZG93cygpLFxuICAgICAgc2hhZGluZzogdGhpcy5nZXRTaGFkaW5nKCksXG4gICAgICBjZWlsaW5nSGVpZ2h0czogdGhpcy5nZXRDZWlsaW5nSGVpZ2h0cygpLFxuICAgICAgem9uZURldGFpbHM6IHRoaXMuZ2V0Wm9uZURldGFpbHMoKSxcbiAgICAgIGZsb29yQ29uc3RydWN0aW9uczogdGhpcy5nZXRGbG9vckNvbnN0cnVjdGlvbnMoKSxcbiAgICAgIHpvbmVGbG9vcnM6IHRoaXMuZ2V0Wm9uZUZsb29ycygpXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhcnNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9QYXJzZXIuanMiLCJpbXBvcnQgT3JpZW50YXRpb24gZnJvbSAnLi9PcmllbnRhdGlvbic7XG5pbXBvcnQgR3JvdW5kRmxvb3IgZnJvbSAnLi9Hcm91bmRGbG9vcic7XG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnLi91dGlscyc7XG4vKipcbiAqIENsYXNzIFJlc3VsdHNCdWlsZGVyXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIHRha2UgdmFyaW91cyBhcnJheXMgb2YgZGF0YSBsaW5lcywgYnVpbGQgdGhlbSBpbnRvIHRoZWlyIGFwcHJvcHJpYXRlIGNsYXNzZXMsXG4gKiBsaW5rIHRoZW0gdGhyb3VnaCB2YXJpb3VzIElEJ3MsIGFuZCB0aGVuIGNyZWF0ZSBtdWx0aXBsZSBvdXRwdXQgbGluZXNcbiAqL1xuXG5jbGFzcyBSZXN1bHRzQnVpbGRlciB7XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgdGhlIHZhcmlvdXMgYXJyYXlzIGludG8gYSBzaW5nbGUgYXJyYXlcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gd2luZG93Q29uc3RydWN0aW9uc1xuICAgKiBAcGFyYW0ge2FycmF5fSB6b25lV2luZG93c1xuICAgKiBAcGFyYW0ge2FycmF5fSBzaGFkaW5nXG4gICAqIEBwYXJhbSB7YXJyYXl9IGNlaWxpbmdIZWlnaHRzXG4gICAqIEBwYXJhbSB7YXJyYXl9IHpvbmVEZXRhaWxzXG4gICAqIEBwYXJhbSB7YXJyYXl9IGZsb29yQ29uc3RydWN0aW9uc1xuICAgKiBAcGFyYW0ge2FycmF5fSB6b25lRmxvb3JzXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBzdGF0aWMgQ29tcGlsZSh7XG4gICAgd2luZG93Q29uc3RydWN0aW9ucywgem9uZVdpbmRvd3MsIHNoYWRpbmcsIGNlaWxpbmdIZWlnaHRzLCB6b25lRGV0YWlscywgZmxvb3JDb25zdHJ1Y3Rpb25zLCB6b25lRmxvb3JzXG4gIH0pIHtcbiAgICByZXR1cm4gem9uZURldGFpbHMubWFwKCh6b25lKSA9PiB7XG4gICAgICAvLyBGaWx0ZXIgdGhlIHpvbmUgd2luZG93cyBmb3Igb25seSB3aW5kb3dzIGluIHRoaXMgem9uZSwgYW5kIHRoZW4gbWFwIHRoZSB3aW5kb3cgY29uc3RydWN0aW9uLCBzaGFkaW5nIGFuZCBjZWlsaW5nIGhlaWdodCBkZXRhaWxzXG4gICAgICBjb25zdCB3aW5kb3dzID0gem9uZVdpbmRvd3MuZmlsdGVyKHdpbmRvdyA9PiB3aW5kb3cuem9uZUlkID09PSB6b25lLmlkKS5tYXAoKHpvbmVXaW5kb3cpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0aW9uID0gd2luZG93Q29uc3RydWN0aW9ucy5maWx0ZXIoY29ucyA9PiBjb25zLmlkID09PSB6b25lV2luZG93LmdldFdpbmRvd0lkKCkpWzBdO1xuICAgICAgICBjb25zdCBzaGFkaW5nU2NoZW1lID0gc2hhZGluZy5maWx0ZXIoc2hhZGUgPT4gc2hhZGUuZ2V0SWQoKSA9PT0gem9uZVdpbmRvdy5nZXRIb3JpelNoYWRpbmcxSWQoKSB8fCBzaGFkZS5nZXRJZCgpID09PSB6b25lV2luZG93LmdldEhvcml6U2hhZGluZzJJZCgpKTtcbiAgICAgICAgY29uc3QgY2VpbGluZ0hlaWdodCA9IGNlaWxpbmdIZWlnaHRzLmZpbHRlcihjZWlsaW5nID0+IGNlaWxpbmcuZ2V0Wm9uZUlkKCkgPT09IHpvbmUuZ2V0SWQoKSlbMF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi56b25lV2luZG93LFxuICAgICAgICAgIGNvbnN0cnVjdGlvbixcbiAgICAgICAgICBzaGFkaW5nOiBzaGFkaW5nU2NoZW1lLFxuICAgICAgICAgIGNlaWxpbmdIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmbG9vcnMgPSB6b25lRmxvb3JzLmZpbHRlcih6b25lRmxvb3IgPT4gem9uZUZsb29yLnpvbmVJZCA9PT0gem9uZS5pZCkubWFwKCh6b25lRmxvb3IpID0+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0aW9uID0gZmxvb3JDb25zdHJ1Y3Rpb25zLmZpbHRlcihmbG9vckNvbiA9PiBmbG9vckNvbi5pZCA9PT0gem9uZUZsb29yLmNvbnN0cnVjdGlvbklkKVswXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnpvbmVGbG9vcixcbiAgICAgICAgICAuLi5jb25zdHJ1Y3Rpb25cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogem9uZS5nZXRJZCgpLFxuICAgICAgICBuYW1lOiB6b25lLmdldE5hbWUoKSxcbiAgICAgICAgd2luZG93cyxcbiAgICAgICAgb25Hcm91bmRGbG9vcjogR3JvdW5kRmxvb3IuVGVzdChmbG9vcnMpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSB6b25lcyBhcnJheSBpbnRvIGEgZmxhdHQgYXJyYXkgcmVhZHkgZm9yIGNvbnZlcnNpb24gdG8gQ1NWXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9ICB6b25lcyAgICAgVGhlIHpvbmVzIGFycmF5IGNyZWF0ZWQgaW4gUmVzdWx0c0J1aWxkZXIuQ29tcGlsZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2UgW09wdGlvbmFsXSBSZWZlcmVuY2UgTm9ydGggYXppbXV0aC4gRGVmYXVsdCAwXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIHN0YXRpYyBCdWlsZCh6b25lcywgcmVmZXJlbmNlID0gMCkge1xuICAgIGNvbnN0IGNzdiA9IHpvbmVzLm1hcCgoem9uZSkgPT4ge1xuICAgICAgY29uc3Qgd2luZG93Q3N2ID0gem9uZS53aW5kb3dzLm1hcCgod2luZG93KSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0aW9uID0gJyc7XG4gICAgICAgIGxldCBlYXZlT2Zmc2V0ID0gJyc7XG4gICAgICAgIGxldCBwZXJnb2xhT2Zmc2V0ID0gJyc7XG4gICAgICAgIGlmICh3aW5kb3cuc2hhZGluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcHJvamVjdGlvbiA9IHdpbmRvdy5zaGFkaW5nWzBdLnByb2plY3Rpb247XG4gICAgICAgICAgZWF2ZU9mZnNldCA9IHdpbmRvdy5zaGFkaW5nWzBdLmVhdmVPZmZzZXQ7XG4gICAgICAgICAgcGVyZ29sYU9mZnNldCA9IHdpbmRvdy5zaGFkaW5nWzBdLnBlcmdvbGFPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHpvbmUubmFtZSxcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBPcmllbnRhdGlvbi5HZXQod2luZG93LmF6aW11dGgsIHJlZmVyZW5jZSksXG4gICAgICAgICAgd2luZG93LmhlaWdodCxcbiAgICAgICAgICB3aW5kb3cud2lkdGgsXG4gICAgICAgICAgcHJvamVjdGlvbixcbiAgICAgICAgICB3aW5kb3cuaGVhZEhlaWdodCxcbiAgICAgICAgICB3aW5kb3cuY29uc3RydWN0aW9uLm5hbWUsXG4gICAgICAgICAgd2luZG93LmNlaWxpbmdIZWlnaHQuaGVpZ2h0LFxuICAgICAgICAgIGVhdmVPZmZzZXQsXG4gICAgICAgICAgcGVyZ29sYU9mZnNldCxcbiAgICAgICAgICB6b25lLm9uR3JvdW5kRmxvb3IgPyAnMCcgOiAnJ1xuICAgICAgICBdO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFuIGVtcHR5IHdpbmRvd0NzdiBuZWVkcyB0byBiZSByZXR1cm5lZCBpbnNpZGUgYW4gYXJyYXkgaXRzZWxmLCBpbiBvcmRlciB0byB3b3JrIHdpdGggdGhlIGZsYXR0ZW4gZnVuY3Rpb25cbiAgICAgIHJldHVybiB3aW5kb3dDc3YubGVuZ3RoID4gMCA/IHdpbmRvd0NzdiA6IFt3aW5kb3dDc3ZdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZsYXR0ZW4oY3N2KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHNCdWlsZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1Jlc3VsdHNCdWlsZGVyLmpzIiwiY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcignanMvd29ya2VyLmpzJyk7XG5cbmNvbnN0IGNyZWF0ZVByZXZpZXcgPSAocmVzdWx0cykgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzLXByZXZpZXctdGVtcGxhdGUnKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuXG4gIGNvbnN0IHRhYmxlQm9keSA9IGluc3RhbmNlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG5cbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgcmVzdWx0LmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgY29uc3QgdGFibGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgIHRhYmxlQ2VsbC5pbm5lclRleHQgPSByZXM7XG4gICAgICB0YWJsZVJvdy5hcHBlbmRDaGlsZCh0YWJsZUNlbGwpO1xuICAgIH0pO1xuXG4gICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHRhYmxlUm93KTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtcHJldmlldycpLmFwcGVuZENoaWxkKGluc3RhbmNlKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBkb3dubG9hZCBmaWxlLCBhbmQgZG93bmxvYWQgaXQgdG8gdGhlIHVzZXJzIGJyb3dzZXJcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSByZXN1bHRzXG4gKlxuICogQHJldHVybnMge251bGx9XG4gKi9cbmNvbnN0IGNyZWF0ZURvd25sb2FkID0gKHJlc3VsdHMpID0+IHtcbiAgbGV0IGNzdkNvbnRlbnQgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCc7XG4gIGNvbnN0IGhlYWRlckFyciA9IFtcbiAgICAnWm9uZSBOYW1lJyxcbiAgICAne2JsYW5rfScsXG4gICAgJ09yaWVudGF0aW9uJyxcbiAgICAnSGVpZ2h0JyxcbiAgICAnV2lkdGgnLFxuICAgICdQcm9qZWN0aW9uJyxcbiAgICAnSGVhZCBIZWlnaHQnLFxuICAgICdXaW5kb3cgVHlwZScsXG4gICAgJ0NlaWxpbmcgSGVpZ2h0JyxcbiAgICAnRWF2ZSBPZmZzZXQnLFxuICAgICdQZXJnb2xhIE9mZnNldCcsXG4gICAgJ0xldmVsJ1xuICBdO1xuICBjb25zdCBoZWFkZXJSb3cgPSBoZWFkZXJBcnIuam9pbignLCcpO1xuICBjc3ZDb250ZW50ICs9IGAke2hlYWRlclJvd31cXG5gO1xuXG4gIHJlc3VsdHMuZm9yRWFjaCgocm93QXJyYXkpID0+IHtcbiAgICBpZiAocm93QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgcm93ID0gcm93QXJyYXkuam9pbignLCcpO1xuICAgICAgY3N2Q29udGVudCArPSBgJHtyb3d9XFxuYDtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVuY29kZWRVcmkgPSBlbmNvZGVVUkkoY3N2Q29udGVudCk7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZW5jb2RlZFVyaSk7XG4gIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdnbGF6aW5nLmNzdicpO1xuICBsaW5rLmhpZGRlbiA9IHRydWU7XG4gIGxpbmsuaW5uZXJIVE1MID0gJ0NsaWNrIEhlcmUgdG8gZG93bmxvYWQnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspOyAvLyBSZXF1aXJlZCBmb3IgRkZcblxuICBsaW5rLmNsaWNrKCk7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvY2VzcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBmaWxlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZVRvVXBsb2FkJyk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3J0aC1yZWZlcmVuY2UnKS52YWx1ZSA9PT0gJycpIHtcbiAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgcmVmZXJlbmNlIG5vcnRoIGF6aW11dGgnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZmlsZVNlbGVjdG9yLmZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgc2NyYXRjaCBmaWxlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZmlsZSA9IGZpbGVTZWxlY3Rvci5maWxlc1swXTtcbiAgY29uc3QgcmVmZXJlbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vcnRoLXJlZmVyZW5jZScpLnZhbHVlO1xuXG4gIHdvcmtlci5wb3N0TWVzc2FnZSh7IGZpbGUsIHJlZmVyZW5jZSB9KTtcblxuICB3b3JrZXIub25tZXNzYWdlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY3JlYXRlUHJldmlldyhkYXRhLnJlc3VsdHMpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZURvd25sb2FkKGRhdGEucmVzdWx0cyk7XG4gICAgfSk7XG4gIH07XG59KTtcblxuLy8gQ2xlYXIgcHJldmlldyByZXN1bHRzIHdoZW4gdGhlIHNjcmF0Y2ggZmlsZSBjaGFuZ2VzXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZVRvVXBsb2FkJykub25jaGFuZ2UgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLXByZXZpZXcnKS5pbm5lckhUTUwgPSAnJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCIvKipcbiAqIEZsYXR0ZW4gYXJyYXkgMSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyciBBcnJ5YSB0byBmbGF0dGVuXG4gKlxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbiA9IGFyciA9PiBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLmFycik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9