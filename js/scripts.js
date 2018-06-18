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

          return [zone.name, '', _Orientation2.default.Get(window.azimuth, reference), window.height, window.width, projection, window.headHeight, window.construction.name, window.ceilingHeight.height, eaveOffset, pergolaOffset];
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
  var headerArr = ['Zone Name', '{blank}', 'Orientation', 'Height', 'Width', 'Projection', 'Head Height', 'Window Type', 'Ceiling Height', 'Eave Offset', 'Pergola Offset'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGY3Yzk4ZmQ1M2UxNzQ4NTJkNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0NlaWxpbmdIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0hvcml6b250YWxTaGFkaW5nU2NoZW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9XaW5kb3dDb25zdHJ1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1pvbmVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1pvbmVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL09yaWVudGF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9TY3JhdGNoRmlsZUxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL0xvb2tzTGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGFyc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9SZXN1bHRzQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNlaWxpbmdIZWlnaHQiLCJsaW5lRGF0YSIsInpvbmVJZCIsImhlaWdodCIsInJlZ2V4IiwiUmVnRXhwIiwiUmVnZXgiLCJkYXRhIiwiZXhlYyIsInRyaW0iLCJnZXRab25lSWQiLCJnZXRIZWlnaHQiLCJIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSIsImlkIiwiZWF2ZVByb2plY3Rpb24iLCJlYXZlT2Zmc2V0IiwicGVyZ29sYVByb2plY3Rpb24iLCJwZXJnb2xhT2Zmc2V0IiwicHJvamVjdGlvbiIsIkNPTlNUX19JRCIsIkNPTlNUX19FQVZFX1BST0pFQ1RJT04iLCJDT05TVF9fRUFWRV9PRkZTRVQiLCJDT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OIiwiQ09OU1RfX1BFUkdPTEFfT0ZGU0VUIiwiZ2V0UHJvamVjdGlvbiIsInBhcnNlRmxvYXQiLCJnZXRFYXZlUHJvamVjdGlvbiIsImdldFBlcmdvbGFQcm9qZWN0aW9uIiwiZ2V0SWQiLCJvZmZzZXQiLCJlYXZlIiwiZ2V0RWF2ZU9mZnNldCIsInBlcmdvbGEiLCJnZXRQZXJnb2xhT2Zmc2V0IiwiV2luZG93Q29uc3RydWN0aW9uIiwibmFtZSIsIkNPTlNUX19OQU1FIiwiWm9uZURldGFpbCIsImdldE5hbWUiLCJab25lV2luZG93Iiwid2luZG93SWQiLCJ3aWR0aCIsImF6aW11dGgiLCJoZWFkSGVpZ2h0IiwiaG9yaXpTaGFkaW5nMUlkIiwiaG9yaXpTaGFkaW5nMklkIiwiQ09OU1RfX1pPTkVfSUQiLCJDT05TVF9fV0lORE9XX0lEIiwiQ09OU1RfX0hFSUdIVCIsIkNPTlNUX19XSURUSCIsIkNPTlNUX19BWklNVVRIIiwiQ09OU1RfX0hPUlpfU0hBRElOR18xIiwiQ09OU1RfX0hPUlpfU0hBRElOR18yIiwiZ2V0V2luZG93SWQiLCJnZXRXaWR0aCIsImdldEF6aW11dGgiLCJnZXRIZWFkSGVpZ2h0IiwiZ2V0SG9yaXpTaGFkaW5nMUlkIiwiZ2V0SG9yaXpTaGFkaW5nMklkIiwiT3JpZW50YXRpb24iLCJyZWZlcmVuY2UiLCJhemltdXRoSW50IiwicGFyc2VJbnQiLCJJcyIsIkNPTlNUX19OX0UiLCJDT05TVF9fRSIsIkNPTlNUX19TX0UiLCJDT05TVF9fUyIsIkNPTlNUX19TX1ciLCJDT05TVF9fVyIsIkNPTlNUX19OX1ciLCJsaW1pdHMiLCJ2ZWN0b3IiLCJ1cHBlciIsIk5vcm1hbGl6ZSIsImxvd2VyIiwibnVtYmVyIiwiTWF0aCIsImFicyIsIkNPTlNUX19OIiwiU2NyYXRjaEZpbGVMaW5lIiwiTG9va3NMaWtlIiwiU2hhZGluZ1NjaGVtZSIsIkJ1aWxkIiwiVGVzdCIsInJlZ2V4cCIsInRlc3QiLCJQYXJzZXIiLCJmaWxlIiwid2luZG93Q29uc3RydWN0aW9ucyIsInpvbmVXaW5kb3dzIiwiem9uZURldGFpbHMiLCJzaGFkaW5nU2NoZW1lcyIsImNlaWxpbmdIZWlnaHRzIiwiZGF0YUxpbmVzIiwiZ2V0RGF0YUxpbmVzIiwiZmlsdGVyIiwiUmV2ZXJzZUxvb2t1cCIsImxpbmUiLCJtYXAiLCJ3aW5kb3ciLCJ6b25lV2luZG93Iiwic2hhZGluZyIsImNlaWxpbmdIZWlnaHQiLCJ6b25lRGV0YWlsIiwiZ2V0V2luZG93Q29uc3RydWN0aW9ucyIsImdldFpvbmVXaW5kb3dzIiwiZ2V0U2hhZGluZyIsImdldENlaWxpbmdIZWlnaHRzIiwiZ2V0Wm9uZURldGFpbHMiLCJSZXN1bHRzQnVpbGRlciIsInpvbmUiLCJ3aW5kb3dzIiwiY29uc3RydWN0aW9uIiwiY29ucyIsInNoYWRpbmdTY2hlbWUiLCJzaGFkZSIsImNlaWxpbmciLCJ6b25lcyIsImNzdiIsIndpbmRvd0NzdiIsImxlbmd0aCIsIkdldCIsIndvcmtlciIsIldvcmtlciIsImNyZWF0ZVByZXZpZXciLCJyZXN1bHRzIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5zdGFuY2UiLCJpbXBvcnROb2RlIiwiY29udGVudCIsInRhYmxlQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwicmVzdWx0IiwidGFibGVSb3ciLCJjcmVhdGVFbGVtZW50IiwicmVzIiwidGFibGVDZWxsIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVEb3dubG9hZCIsImNzdkNvbnRlbnQiLCJoZWFkZXJBcnIiLCJoZWFkZXJSb3ciLCJqb2luIiwicm93QXJyYXkiLCJyb3ciLCJlbmNvZGVkVXJpIiwiZW5jb2RlVVJJIiwibGluayIsInNldEF0dHJpYnV0ZSIsImhpZGRlbiIsImlubmVySFRNTCIsImJvZHkiLCJjbGljayIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlU2VsZWN0b3IiLCJ2YWx1ZSIsImFsZXJ0IiwiZmlsZXMiLCJwb3N0TWVzc2FnZSIsIm9ubWVzc2FnZSIsIm9uY2hhbmdlIiwiZmxhdHRlbiIsInByb3RvdHlwZSIsImNvbmNhdCIsImFyciJdLCJtYXBwaW5ncyI6IjtBQUFB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MkJBO0FBQ0FFLFNBQVNNLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0MrQixRQUF4QyxHQUFtRCxZQUFNO0FBQ3ZEckMsV0FBU00sYUFBVCxDQUF1QixrQkFBdkIsRUFBMkNxQixTQUEzQyxHQUF1RCxFQUF2RDtBQUNELENBRkQsQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBOzs7Ozs7O0FBT08sSUFBTVcsNEJBQVUsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU8sMEJBQU1DLFNBQU4sRUFBZ0JDLE1BQWhCLDRDQUEwQkMsR0FBMUIsRUFBUDtBQUFBLENBQWhCLEMiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRmN2M5OGZkNTNlMTc0ODUyZDUyIiwiLyoqXG4gKiBDbGFzcyBDZWlsaW5nSGVpZ2h0XG4gKi9cbmNsYXNzIENlaWxpbmdIZWlnaHQge1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDMoLnszfSk3MDAoLns2fSkoLns2fSkoLns2fSkoLns2fSknO1xuXG4gIHpvbmVJZCA9ICcnO1xuICBoZWlnaHQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChDZWlsaW5nSGVpZ2h0LlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLnpvbmVJZCA9IGRhdGFbMV0udHJpbSgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gZGF0YVszXS50cmltKCk7XG4gIH1cblxuICBnZXRab25lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZUlkO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB6b25lSWQ6IHRoaXMuZ2V0Wm9uZUlkKCksXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2V0SGVpZ2h0KClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IENlaWxpbmdIZWlnaHQoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWlsaW5nSGVpZ2h0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0NlaWxpbmdIZWlnaHQuanMiLCIvKipcbiAqIEJyZWFrIHRoZSBIb3Jpem9udGFsIFNoYWRpbmcgU2NoZW1lIGRhdGEgaW50byBpdHMgdmFyaW91cyBwYXJ0c1xuICovXG5jbGFzcyBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSB7XG5cbiAgLyoqXG4gICAqIENvbnN0YW50cyB0aGF0IG1hcCB0aGUgdmFyaW91cyBiaXRzIG9mIGRhdGEgdG8gdGhlIHNlY3Rpb24gb2YgcmVnZXhcbiAgICovXG4gIHN0YXRpYyBDT05TVF9fSUQgPSAxO1xuICBzdGF0aWMgQ09OU1RfX0VBVkVfUFJPSkVDVElPTiA9IDI7XG4gIHN0YXRpYyBDT05TVF9fRUFWRV9PRkZTRVQgPSAzO1xuICBzdGF0aWMgQ09OU1RfX1BFUkdPTEFfUFJPSkVDVElPTiA9IDY7XG4gIHN0YXRpYyBDT05TVF9fUEVSR09MQV9PRkZTRVQgPSA3O1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDEgMjAoLnszfSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkoLns2fSkkJztcblxuICBpZCA9ICcnO1xuICBlYXZlUHJvamVjdGlvbiA9ICcnO1xuICBlYXZlT2Zmc2V0ID0gJyc7XG4gIHBlcmdvbGFQcm9qZWN0aW9uID0gJyc7XG4gIHBlcmdvbGFPZmZzZXQgPSAnJztcbiAgcHJvamVjdGlvbiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVEYXRhKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKEhvcml6b250YWxTaGFkaW5nU2NoZW1lLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fSURdLnRyaW0oKTtcbiAgICB0aGlzLmVhdmVQcm9qZWN0aW9uID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fRUFWRV9QUk9KRUNUSU9OXS50cmltKCk7XG4gICAgdGhpcy5lYXZlT2Zmc2V0ID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fRUFWRV9PRkZTRVRdLnRyaW0oKTtcbiAgICB0aGlzLnBlcmdvbGFQcm9qZWN0aW9uID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fUEVSR09MQV9QUk9KRUNUSU9OXS50cmltKCk7XG4gICAgdGhpcy5wZXJnb2xhT2Zmc2V0ID0gZGF0YVtIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5DT05TVF9fUEVSR09MQV9PRkZTRVRdLnRyaW0oKTtcbiAgICB0aGlzLnByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgdGhlIGhpZ2hlc3QgcHJvamVjdGlvbiB2YWx1ZSBhbmQgcmV0dXJuXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRQcm9qZWN0aW9uKCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0RWF2ZVByb2plY3Rpb24oKSkgPiBwYXJzZUZsb2F0KHRoaXMuZ2V0UGVyZ29sYVByb2plY3Rpb24oKSkgP1xuICAgICAgdGhpcy5nZXRFYXZlUHJvamVjdGlvbigpIDpcbiAgICAgIHRoaXMuZ2V0UGVyZ29sYVByb2plY3Rpb24oKTtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgZ2V0RWF2ZU9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5lYXZlT2Zmc2V0O1xuICB9XG5cbiAgZ2V0RWF2ZVByb2plY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWF2ZVByb2plY3Rpb247XG4gIH1cblxuICBnZXRQZXJnb2xhT2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLnBlcmdvbGFPZmZzZXQ7XG4gIH1cblxuICBnZXRQZXJnb2xhUHJvamVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJnb2xhUHJvamVjdGlvbjtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgcHJvamVjdGlvbjogdGhpcy5nZXRQcm9qZWN0aW9uKCksXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgZWF2ZTogdGhpcy5nZXRFYXZlT2Zmc2V0KCksXG4gICAgICAgIHBlcmdvbGE6IHRoaXMuZ2V0UGVyZ29sYU9mZnNldCgpXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZShkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvcml6b250YWxTaGFkaW5nU2NoZW1lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL0hvcml6b250YWxTaGFkaW5nU2NoZW1lLmpzIiwiLyoqXG4gKiBCcmVhayBhIFdpbmRvdyBjb25zdHJ1Y3Rpb24gZGF0YSBsaW5lIGludG8gaXRzIHZhcmlvdXMgcGFydHNcbiAqL1xuY2xhc3MgV2luZG93Q29uc3RydWN0aW9uIHtcblxuICBzdGF0aWMgQ09OU1RfX0lEID0gMztcbiAgc3RhdGljIENPTlNUX19OQU1FID0gJyc7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ14gXFxcXGQoLnszfSlbIFxcXFxkXSooW2EtekEtWl1bYS16QS1aXFxcXC1cXFxcZF17OX1bIGEtekEtWl1bYS16QS1aXT8pJztcblxuICBpZCA9ICcnO1xuICBuYW1lID0gJyc7XG5cbiAgY29uc3RydWN0b3IobGluZURhdGEpIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoV2luZG93Q29uc3RydWN0aW9uLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVsxXS50cmltKCk7XG4gICAgdGhpcy5uYW1lID0gZGF0YVsyXS50cmltKCk7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFdpbmRvd0NvbnN0cnVjdGlvbihkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvd0NvbnN0cnVjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9XaW5kb3dDb25zdHJ1Y3Rpb24uanMiLCIvKipcbiAqIENsYXNzIFpvbmVEZXRhaWxcbiAqL1xuY2xhc3MgWm9uZURldGFpbCB7XG5cbiAgc3RhdGljIFJlZ2V4ID0gJ15DIFowMD8oXFxcXGR7MSwzfSkgPT4gKC4qKSQnO1xuXG4gIGlkID0gJyc7XG4gIG5hbWUgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChab25lRGV0YWlsLlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YVsxXS50cmltKCk7XG4gICAgdGhpcy5uYW1lID0gZGF0YVsyXS50cmltKCk7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5nZXRJZCgpLFxuICAgICAgbmFtZTogdGhpcy5nZXROYW1lKClcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEJ1aWxkKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFpvbmVEZXRhaWwoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBab25lRGV0YWlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1pvbmVEZXRhaWwuanMiLCIvKipcbiAqIENsYXNzIHRvIHBhcnNlIHdpbmRvdyBpbmZvcm1hdGlvbiBpbnNpZGUgYSB6b25lIHNlY3Rpb25cbiAqL1xuY2xhc3MgWm9uZVdpbmRvdyB7XG5cbiAgc3RhdGljIENPTlNUX19aT05FX0lEID0gMTtcbiAgc3RhdGljIENPTlNUX19XSU5ET1dfSUQgPSAyO1xuICBzdGF0aWMgQ09OU1RfX0hFSUdIVCA9IDY7XG4gIHN0YXRpYyBDT05TVF9fV0lEVEggPSA3O1xuICBzdGF0aWMgQ09OU1RfX0FaSU1VVEggPSA4O1xuICBzdGF0aWMgQ09OU1RfX0hPUlpfU0hBRElOR18xID0gOTtcbiAgc3RhdGljIENPTlNUX19IT1JaX1NIQURJTkdfMiA9IDEwO1xuXG4gIHN0YXRpYyBSZWdleCA9ICdeIDMoLnszfSkoKCAoMTApfCggIFswLTldKSkpKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pKC57Nn0pJztcblxuICB6b25lSWQgPSAnJztcbiAgd2luZG93SWQgPSAnJztcbiAgaGVpZ2h0ID0gJyc7XG4gIHdpZHRoID0gJyc7XG4gIGF6aW11dGggPSAnJztcbiAgaGVhZEhlaWdodCA9ICcnOyAvLyBUaGlzIHZhbHVlIGlzbid0IHVzZWQsIGp1c3QgaGVyZSB0byBpdCBjYW4gaG9sZCBhbiBlbXB0eSBjZWxsIGluIHRoZSBvdXRwdXQgQ1NWXG4gIGhvcml6U2hhZGluZzFJZCA9ICcnO1xuICBob3JpelNoYWRpbmcySWQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihsaW5lRGF0YSkge1xuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChab25lV2luZG93LlJlZ2V4KTtcbiAgICBjb25zdCBkYXRhID0gcmVnZXguZXhlYyhsaW5lRGF0YSk7XG5cbiAgICB0aGlzLnpvbmVJZCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fWk9ORV9JRF0udHJpbSgpO1xuICAgIHRoaXMud2luZG93SWQgPSBkYXRhW1pvbmVXaW5kb3cuQ09OU1RfX1dJTkRPV19JRF0udHJpbSgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IRUlHSFRdLnRyaW0oKTtcbiAgICB0aGlzLndpZHRoID0gZGF0YVtab25lV2luZG93LkNPTlNUX19XSURUSF0udHJpbSgpO1xuICAgIHRoaXMuYXppbXV0aCA9IGRhdGFbWm9uZVdpbmRvdy5DT05TVF9fQVpJTVVUSF0udHJpbSgpO1xuICAgIHRoaXMuaG9yaXpTaGFkaW5nMUlkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IT1JaX1NIQURJTkdfMV0udHJpbSgpO1xuICAgIHRoaXMuaG9yaXpTaGFkaW5nMklkID0gZGF0YVtab25lV2luZG93LkNPTlNUX19IT1JaX1NIQURJTkdfMl0udHJpbSgpO1xuICB9XG5cbiAgZ2V0Wm9uZUlkKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVJZDtcbiAgfVxuXG4gIGdldFdpbmRvd0lkKCkge1xuICAgIHJldHVybiB0aGlzLndpbmRvd0lkO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG5cbiAgZ2V0QXppbXV0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5hemltdXRoO1xuICB9XG5cbiAgZ2V0SGVhZEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkSGVpZ2h0O1xuICB9XG5cbiAgZ2V0SG9yaXpTaGFkaW5nMUlkKCkge1xuICAgIHJldHVybiB0aGlzLmhvcml6U2hhZGluZzFJZDtcbiAgfVxuXG4gIGdldEhvcml6U2hhZGluZzJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5ob3JpelNoYWRpbmcySWQ7XG4gIH1cblxuICB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgem9uZUlkOiB0aGlzLmdldFpvbmVJZCgpLFxuICAgICAgd2luZG93SWQ6IHRoaXMuZ2V0V2luZG93SWQoKSxcbiAgICAgIGhlaWdodDogdGhpcy5nZXRIZWlnaHQoKSxcbiAgICAgIHdpZHRoOiB0aGlzLmdldFdpZHRoKCksXG4gICAgICBhemltdXRoOiB0aGlzLmdldEF6aW11dGgoKSxcbiAgICAgIGhlYWRIZWlnaHQ6IHRoaXMuZ2V0SGVhZEhlaWdodCgpLFxuICAgICAgaG9yaXpTaGFkaW5nMUlkOiB0aGlzLmdldEhvcml6U2hhZGluZzFJZCgpLFxuICAgICAgaG9yaXpTaGFkaW5nMklkOiB0aGlzLmdldEhvcml6U2hhZGluZzJJZCgpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBab25lV2luZG93KGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgWm9uZVdpbmRvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ab25lV2luZG93LmpzIiwiLyoqXG4gKiBDbGFzcyBPcmllbnRhdGlvblxuICovXG5jbGFzcyBPcmllbnRhdGlvbiB7XG5cbiAgc3RhdGljIENPTlNUX19OID0geyBsb3dlcjogMjIsIHVwcGVyOiAzMzggfTtcbiAgc3RhdGljIENPTlNUX19OX0UgPSB7IGxvd2VyOiAyMywgdXBwZXI6IDY3IH07XG4gIHN0YXRpYyBDT05TVF9fRSA9IHsgbG93ZXI6IDY4LCB1cHBlcjogMTEyIH07XG4gIHN0YXRpYyBDT05TVF9fU19FID0geyBsb3dlcjogMTEzLCB1cHBlcjogMTg3IH07XG4gIHN0YXRpYyBDT05TVF9fUyA9IHsgbG93ZXI6IDE4OCwgdXBwZXI6IDIwMiB9O1xuICBzdGF0aWMgQ09OU1RfX1NfVyA9IHsgbG93ZXI6IDIwMywgdXBwZXI6IDI0NyB9O1xuICBzdGF0aWMgQ09OU1RfX1cgPSB7IGxvd2VyOiAyNDgsIHVwcGVyOiAyOTIgfTtcbiAgc3RhdGljIENPTlNUX19OX1cgPSB7IGxvd2VyOiAyOTMsIHVwcGVyOiAzMzcgfTtcblxuICAvKipcbiAgICogR2V0IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhemltdXRoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhemltdXRoICAgQXppbXV0aCB2YWx1ZSBiZWluZyBjaGFuZ2VkIHRvIG9yaWVudGF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2UgUmVmZXJlbmNlIGF6aW11dGggZm9yIE5vcnRoXG4gICAqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBHZXQoYXppbXV0aCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXppbXV0aEludCA9IHBhcnNlSW50KGF6aW11dGgsIDEwKTtcblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19OX0UpKSB7XG4gICAgICByZXR1cm4gJ05FJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fRSkpIHtcbiAgICAgIHJldHVybiAnRSc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1NfRSkpIHtcbiAgICAgIHJldHVybiAnU0UnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19TKSkge1xuICAgICAgcmV0dXJuICdTJztcbiAgICB9XG5cbiAgICBpZiAoT3JpZW50YXRpb24uSXMoYXppbXV0aEludCwgcmVmZXJlbmNlLCBPcmllbnRhdGlvbi5DT05TVF9fU19XKSkge1xuICAgICAgcmV0dXJuICdTVyc7XG4gICAgfVxuXG4gICAgaWYgKE9yaWVudGF0aW9uLklzKGF6aW11dGhJbnQsIHJlZmVyZW5jZSwgT3JpZW50YXRpb24uQ09OU1RfX1cpKSB7XG4gICAgICByZXR1cm4gJ1cnO1xuICAgIH1cblxuICAgIGlmIChPcmllbnRhdGlvbi5JcyhhemltdXRoSW50LCByZWZlcmVuY2UsIE9yaWVudGF0aW9uLkNPTlNUX19OX1cpKSB7XG4gICAgICByZXR1cm4gJ05XJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ04nO1xuICB9XG5cbiAgc3RhdGljIElzKGF6aW11dGgsIHJlZmVyZW5jZSwgbGltaXRzKSB7XG4gICAgY29uc3QgdmVjdG9yID0ge1xuICAgICAgdXBwZXI6IE9yaWVudGF0aW9uLk5vcm1hbGl6ZShwYXJzZUludChyZWZlcmVuY2UsIDEwKSArIGxpbWl0cy51cHBlciksXG4gICAgICBsb3dlcjogT3JpZW50YXRpb24uTm9ybWFsaXplKHBhcnNlSW50KHJlZmVyZW5jZSwgMTApICsgbGltaXRzLmxvd2VyKVxuICAgIH07XG5cbiAgICBpZiAoYXppbXV0aCA+IHZlY3Rvci5sb3dlciAmJiBhemltdXRoIDwgdmVjdG9yLnVwcGVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTm9ybWFsaXplIGEgdmFsdWUgdG8gYmUgd2l0aGluIHRoZSAwLTM2MCByYW5nZVxuICAgKlxuICAgKiBAcGFyYW0ge2ludH0gbnVtYmVyXG4gICAqXG4gICAqIEByZXR1cm5zIHtpbnR9XG4gICAqL1xuICBzdGF0aWMgTm9ybWFsaXplKG51bWJlcikge1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICByZXR1cm4gMzYwIC0gTWF0aC5hYnMobnVtYmVyKTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyID4gMzYwKSB7XG4gICAgICByZXR1cm4gKG51bWJlciAtIDM2MCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yaWVudGF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL09yaWVudGF0aW9uLmpzIiwiaW1wb3J0IENlaWxpbmdIZWlnaHQgZnJvbSAnLi9DZWlsaW5nSGVpZ2h0JztcbmltcG9ydCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSBmcm9tICcuL0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbmltcG9ydCBMb29rc0xpa2UgZnJvbSAnLi91dGlscy9Mb29rc0xpa2UnO1xuaW1wb3J0IFdpbmRvd0NvbnN0cnVjdGlvbiBmcm9tICcuL1dpbmRvd0NvbnN0cnVjdGlvbic7XG5pbXBvcnQgWm9uZVdpbmRvdyBmcm9tICcuL1pvbmVXaW5kb3cnO1xuaW1wb3J0IFpvbmVEZXRhaWwgZnJvbSAnLi9ab25lRGV0YWlsJztcblxuLyoqXG4gKiBDbGFzcyBTY3JhdGNoRmlsZUxpbmVcbiAqL1xuY2xhc3MgU2NyYXRjaEZpbGVMaW5lIHtcblxuICAvKipcbiAgICogQnVpbGQgYSBkYXRhIGxpbmUgaW50byB0aGUgYXBwcm9wcmlhdGUgY2xhc3Mgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHBhcnNlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R8Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBCdWlsZChkYXRhKSB7XG4gICAgaWYgKExvb2tzTGlrZS5TaGFkaW5nU2NoZW1lKGRhdGEpKSB7XG4gICAgICByZXR1cm4gSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5DZWlsaW5nSGVpZ2h0KGRhdGEpKSB7XG4gICAgICByZXR1cm4gQ2VpbGluZ0hlaWdodC5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLldpbmRvd0NvbnN0cnVjdGlvbihkYXRhKSkge1xuICAgICAgcmV0dXJuIFdpbmRvd0NvbnN0cnVjdGlvbi5CdWlsZChkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAoTG9va3NMaWtlLlpvbmVXaW5kb3coZGF0YSkpIHtcbiAgICAgIHJldHVybiBab25lV2luZG93LkJ1aWxkKGRhdGEpO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZURldGFpbChkYXRhKSkge1xuICAgICAgcmV0dXJuIFpvbmVEZXRhaWwuQnVpbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NyYXRjaEZpbGVMaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1NjcmF0Y2hGaWxlTGluZS5qcyIsImltcG9ydCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSBmcm9tICcuLi9Ib3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG5pbXBvcnQgV2luZG93Q29uc3RydWN0aW9uIGZyb20gJy4uL1dpbmRvd0NvbnN0cnVjdGlvbic7XG5pbXBvcnQgWm9uZVdpbmRvdyBmcm9tICcuLi9ab25lV2luZG93JztcbmltcG9ydCBDZWlsaW5nSGVpZ2h0IGZyb20gJy4uL0NlaWxpbmdIZWlnaHQnO1xuaW1wb3J0IFpvbmVEZXRhaWwgZnJvbSAnLi4vWm9uZURldGFpbCc7XG5cbi8qKlxuICogQSBjbGFzcyB0byBjb21wYXJlIGEgZGF0YSBzdHJpbmcgYW5kIGluZGljYXRlIHdoYXQgdHlwZSBvZiBkYXRhIGl0IGxvb2tzIGxpa2VcbiAqL1xuY2xhc3MgTG9va3NMaWtlIHtcblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSBob3Jpem9udGFsIHNoYWRpbmcgc2NoZW1lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgU2hhZGluZ1NjaGVtZShsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgSG9yaXpvbnRhbFNoYWRpbmdTY2hlbWUuUmVnZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlc3QgaWYgdGhlIGRhdGEgbGluZSBsb29rcyBsaWtlIGEgd2luZG93IGNvbnN0cnVjdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZURhdGEgVGhlIGRhdGEgbGluZSB0byB0ZXN0XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFdpbmRvd0NvbnN0cnVjdGlvbihsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgV2luZG93Q29uc3RydWN0aW9uLlJlZ2V4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXN0IGlmIHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZSBhIHpvbmUgd2luZG93XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgWm9uZVdpbmRvdyhsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgWm9uZVdpbmRvdy5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSBjZWlsaW5nIGhlaWdodCBsaW5lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgQ2VpbGluZ0hlaWdodChsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgQ2VpbGluZ0hlaWdodC5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogVGVzdCBpZiB0aGUgZGF0YSBsaW5lIGxvb2tzIGxpa2UgYSB6b25lIGRldGFpbCBsaW5lXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lRGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgWm9uZURldGFpbChsaW5lRGF0YSkge1xuICAgIHJldHVybiBMb29rc0xpa2UuVGVzdChsaW5lRGF0YSwgWm9uZURldGFpbC5SZWdleCk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIHRoZSByZWdleCB0ZXN0IGFnYWluc3QgdGhlIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgIFRoZSBkYXRhIHRvIHRlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlZ2V4IFRoZSByZWdleCBwYXR0ZXJuIHRvIHRlc3Qgd2l0aFxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBUZXN0KGRhdGEsIHJlZ2V4KSB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChyZWdleCk7XG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGF0IHRoZSBkYXRhIGxpbmUgbG9va3MgbGlrZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgZGF0YSBsaW5lIHRvIHRlc3RcbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ3xib29sZWFufVxuICAgKi9cbiAgc3RhdGljIFJldmVyc2VMb29rdXAoZGF0YSkge1xuICAgIGlmIChMb29rc0xpa2UuU2hhZGluZ1NjaGVtZShkYXRhKSkge1xuICAgICAgcmV0dXJuICdIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSc7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5DZWlsaW5nSGVpZ2h0KGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ0NlaWxpbmdIZWlnaHQnO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuV2luZG93Q29uc3RydWN0aW9uKGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ1dpbmRvd0NvbnN0cnVjdGlvbic7XG4gICAgfVxuXG4gICAgaWYgKExvb2tzTGlrZS5ab25lV2luZG93KGRhdGEpKSB7XG4gICAgICByZXR1cm4gJ1pvbmVXaW5kb3cnO1xuICAgIH1cblxuICAgIGlmIChMb29rc0xpa2UuWm9uZURldGFpbChkYXRhKSkge1xuICAgICAgcmV0dXJuICdab25lRGV0YWlsJztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb29rc0xpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdXRpbHMvTG9va3NMaWtlLmpzIiwiLyoqXG4gKiBBIGNsYXNzIHRvIGhhbmRsZSBwYXJzaW5nIGFuIGVudGlyZSBzY3JhdGNoIGZpbGVcbiAqL1xuaW1wb3J0IFNjcmF0Y2hGaWxlTGluZSBmcm9tICcuL1NjcmF0Y2hGaWxlTGluZSc7XG5pbXBvcnQgTG9va3NMaWtlIGZyb20gJy4vdXRpbHMvTG9va3NMaWtlJztcbmltcG9ydCBXaW5kb3dDb25zdHJ1Y3Rpb24gZnJvbSAnLi9XaW5kb3dDb25zdHJ1Y3Rpb24nO1xuaW1wb3J0IFpvbmVXaW5kb3cgZnJvbSAnLi9ab25lV2luZG93JztcbmltcG9ydCBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZSBmcm9tICcuL0hvcml6b250YWxTaGFkaW5nU2NoZW1lJztcbmltcG9ydCBDZWlsaW5nSGVpZ2h0IGZyb20gJy4vQ2VpbGluZ0hlaWdodCc7XG5pbXBvcnQgWm9uZURldGFpbCBmcm9tICcuL1pvbmVEZXRhaWwnO1xuXG5jbGFzcyBQYXJzZXIge1xuXG4gIHdpbmRvd0NvbnN0cnVjdGlvbnMgPSBbXTtcbiAgem9uZVdpbmRvd3MgPSBbXTtcbiAgem9uZURldGFpbHMgPSBbXTtcbiAgc2hhZGluZ1NjaGVtZXMgPSBbXTtcbiAgY2VpbGluZ0hlaWdodHMgPSBbXTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gZmlsZSBBIHNjcmF0Y2hmaWxlIGFycmF5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgfVxuXG4gIHByb2Nlc3MoKSB7XG4gICAgY29uc3QgZGF0YUxpbmVzID0gdGhpcy5nZXREYXRhTGluZXMoKTtcblxuICAgIC8vIEZpbHRlciB0aGUgYXJyYXlzIHRvIG9ubHkgaW5jbHVkZSB0aGUgcmVsYXRlZCBkYXRhLCB0aGVuIGJ1aWxkIHRoZSBkYXRhIGxpbmUgaW50byB0aGUgYXBwcm9wcmlhdGUgY2xhc3NcbiAgICB0aGlzLndpbmRvd0NvbnN0cnVjdGlvbnMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1dpbmRvd0NvbnN0cnVjdGlvbicpXG4gICAgICAubWFwKHdpbmRvdyA9PiBXaW5kb3dDb25zdHJ1Y3Rpb24uQnVpbGQod2luZG93KSk7XG5cbiAgICB0aGlzLnpvbmVXaW5kb3dzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdab25lV2luZG93JylcbiAgICAgIC5tYXAoem9uZVdpbmRvdyA9PiBab25lV2luZG93LkJ1aWxkKHpvbmVXaW5kb3cpKTtcblxuICAgIHRoaXMuc2hhZGluZ1NjaGVtZXMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ0hvcml6b250YWxTaGFkaW5nU2NoZW1lJylcbiAgICAgIC5tYXAoc2hhZGluZyA9PiBIb3Jpem9udGFsU2hhZGluZ1NjaGVtZS5CdWlsZChzaGFkaW5nKSk7XG5cbiAgICB0aGlzLmNlaWxpbmdIZWlnaHRzID0gZGF0YUxpbmVzXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gTG9va3NMaWtlLlJldmVyc2VMb29rdXAobGluZSkgPT09ICdDZWlsaW5nSGVpZ2h0JylcbiAgICAgIC5tYXAoY2VpbGluZ0hlaWdodCA9PiBDZWlsaW5nSGVpZ2h0LkJ1aWxkKGNlaWxpbmdIZWlnaHQpKTtcblxuICAgIHRoaXMuem9uZURldGFpbHMgPSBkYXRhTGluZXNcbiAgICAgIC5maWx0ZXIobGluZSA9PiBMb29rc0xpa2UuUmV2ZXJzZUxvb2t1cChsaW5lKSA9PT0gJ1pvbmVEZXRhaWwnKVxuICAgICAgLm1hcCh6b25lRGV0YWlsID0+IFpvbmVEZXRhaWwuQnVpbGQoem9uZURldGFpbCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGluZXMgb2YgZGF0YSB0aGF0IG1hdGNoIGEgdHlwZSB3ZSdyZSBpbnRlcmVzdGVkIGluXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIGdldERhdGFMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlLmZpbHRlcihsaW5lID0+IFNjcmF0Y2hGaWxlTGluZS5CdWlsZChsaW5lKSAhPT0gZmFsc2UpO1xuICB9XG5cbiAgZ2V0V2luZG93Q29uc3RydWN0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dDb25zdHJ1Y3Rpb25zO1xuICB9XG5cbiAgZ2V0Wm9uZVdpbmRvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZVdpbmRvd3M7XG4gIH1cblxuICBnZXRTaGFkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnNoYWRpbmdTY2hlbWVzO1xuICB9XG5cbiAgZ2V0Q2VpbGluZ0hlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VpbGluZ0hlaWdodHM7XG4gIH1cblxuICBnZXRab25lRGV0YWlscygpIHtcbiAgICByZXR1cm4gdGhpcy56b25lRGV0YWlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWxsIGRhdGEgaW4gYW4gb2JqZWN0IHRoYXQgY2FuIGJlIGRlY29uc3RydWN0ZWRcbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIGdldEFsbERhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbmRvd0NvbnN0cnVjdGlvbnM6IHRoaXMuZ2V0V2luZG93Q29uc3RydWN0aW9ucygpLFxuICAgICAgem9uZVdpbmRvd3M6IHRoaXMuZ2V0Wm9uZVdpbmRvd3MoKSxcbiAgICAgIHNoYWRpbmc6IHRoaXMuZ2V0U2hhZGluZygpLFxuICAgICAgY2VpbGluZ0hlaWdodHM6IHRoaXMuZ2V0Q2VpbGluZ0hlaWdodHMoKSxcbiAgICAgIHpvbmVEZXRhaWxzOiB0aGlzLmdldFpvbmVEZXRhaWxzKClcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL1BhcnNlci5qcyIsImltcG9ydCBPcmllbnRhdGlvbiBmcm9tICcuL09yaWVudGF0aW9uJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzJztcbi8qKlxuICogQ2xhc3MgUmVzdWx0c0J1aWxkZXJcbiAqXG4gKiBUaGlzIGNsYXNzIHdpbGwgdGFrZSB2YXJpb3VzIGFycmF5cyBvZiBkYXRhIGxpbmVzLCBidWlsZCB0aGVtIGludG8gdGhlaXIgYXBwcm9wcmlhdGUgY2xhc3NlcyxcbiAqIGxpbmsgdGhlbSB0aHJvdWdoIHZhcmlvdXMgSUQncywgYW5kIHRoZW4gY3JlYXRlIG11bHRpcGxlIG91dHB1dCBsaW5lc1xuICovXG5cbmNsYXNzIFJlc3VsdHNCdWlsZGVyIHtcblxuICAvKipcbiAgICogQ29tcGlsZSB0aGUgdmFyaW91cyBhcnJheXMgaW50byBhIHNpbmdsZSBhcnJheVxuICAgKlxuICAgKiBAcGFyYW0gd2luZG93Q29uc3RydWN0aW9uc1xuICAgKiBAcGFyYW0gem9uZVdpbmRvd3NcbiAgICogQHBhcmFtIHNoYWRpbmdcbiAgICogQHBhcmFtIGNlaWxpbmdIZWlnaHRzXG4gICAqIEBwYXJhbSB6b25lRGV0YWlsc1xuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgc3RhdGljIENvbXBpbGUoe1xuICAgIHdpbmRvd0NvbnN0cnVjdGlvbnMsIHpvbmVXaW5kb3dzLCBzaGFkaW5nLCBjZWlsaW5nSGVpZ2h0cywgem9uZURldGFpbHNcbiAgfSkge1xuICAgIHJldHVybiB6b25lRGV0YWlscy5tYXAoKHpvbmUpID0+IHtcbiAgICAgIC8vIEZpbHRlciB0aGUgem9uZSB3aW5kb3dzIGZvciBvbmx5IHdpbmRvd3MgaW4gdGhpcyB6b25lLCBhbmQgdGhlbiBtYXAgdGhlIHdpbmRvdyBjb25zdHJ1Y3Rpb24sIHNoYWRpbmcgYW5kIGNlaWxpbmcgaGVpZ2h0IGRldGFpbHNcbiAgICAgIGNvbnN0IHdpbmRvd3MgPSB6b25lV2luZG93cy5maWx0ZXIod2luZG93ID0+IHdpbmRvdy56b25lSWQgPT09IHpvbmUuaWQpLm1hcCgoem9uZVdpbmRvdykgPT4ge1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3Rpb24gPSB3aW5kb3dDb25zdHJ1Y3Rpb25zLmZpbHRlcihjb25zID0+IGNvbnMuaWQgPT09IHpvbmVXaW5kb3cuZ2V0V2luZG93SWQoKSlbMF07XG4gICAgICAgIGNvbnN0IHNoYWRpbmdTY2hlbWUgPSBzaGFkaW5nLmZpbHRlcihzaGFkZSA9PiBzaGFkZS5nZXRJZCgpID09PSB6b25lV2luZG93LmdldEhvcml6U2hhZGluZzFJZCgpIHx8IHNoYWRlLmdldElkKCkgPT09IHpvbmVXaW5kb3cuZ2V0SG9yaXpTaGFkaW5nMklkKCkpO1xuICAgICAgICBjb25zdCBjZWlsaW5nSGVpZ2h0ID0gY2VpbGluZ0hlaWdodHMuZmlsdGVyKGNlaWxpbmcgPT4gY2VpbGluZy5nZXRab25lSWQoKSA9PT0gem9uZS5nZXRJZCgpKVswXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnpvbmVXaW5kb3csXG4gICAgICAgICAgY29uc3RydWN0aW9uLFxuICAgICAgICAgIHNoYWRpbmc6IHNoYWRpbmdTY2hlbWUsXG4gICAgICAgICAgY2VpbGluZ0hlaWdodFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiB6b25lLmdldElkKCksXG4gICAgICAgIG5hbWU6IHpvbmUuZ2V0TmFtZSgpLFxuICAgICAgICB3aW5kb3dzXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSB6b25lcyBhcnJheSBpbnRvIGEgZmxhdHQgYXJyYXkgcmVhZHkgZm9yIGNvbnZlcnNpb24gdG8gQ1NWXG4gICAqXG4gICAqIEBwYXJhbSB7YXJyYXl9ICB6b25lcyAgICAgVGhlIHpvbmVzIGFycmF5IGNyZWF0ZWQgaW4gUmVzdWx0c0J1aWxkZXIuQ29tcGlsZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWZlcmVuY2UgUmVmZXJlbmNlIE5vcnRoIGF6aW11dGhcbiAgICpcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKi9cbiAgc3RhdGljIEJ1aWxkKHpvbmVzLCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjc3YgPSB6b25lcy5tYXAoKHpvbmUpID0+IHtcbiAgICAgIGNvbnN0IHdpbmRvd0NzdiA9IHpvbmUud2luZG93cy5tYXAoKHdpbmRvdykgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdGlvbiA9ICcnO1xuICAgICAgICBsZXQgZWF2ZU9mZnNldCA9ICcnO1xuICAgICAgICBsZXQgcGVyZ29sYU9mZnNldCA9ICcnO1xuICAgICAgICBpZiAod2luZG93LnNoYWRpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHByb2plY3Rpb24gPSB3aW5kb3cuc2hhZGluZ1swXS5wcm9qZWN0aW9uO1xuICAgICAgICAgIGVhdmVPZmZzZXQgPSB3aW5kb3cuc2hhZGluZ1swXS5lYXZlT2Zmc2V0O1xuICAgICAgICAgIHBlcmdvbGFPZmZzZXQgPSB3aW5kb3cuc2hhZGluZ1swXS5wZXJnb2xhT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB6b25lLm5hbWUsXG4gICAgICAgICAgJycsXG4gICAgICAgICAgT3JpZW50YXRpb24uR2V0KHdpbmRvdy5hemltdXRoLCByZWZlcmVuY2UpLFxuICAgICAgICAgIHdpbmRvdy5oZWlnaHQsXG4gICAgICAgICAgd2luZG93LndpZHRoLFxuICAgICAgICAgIHByb2plY3Rpb24sXG4gICAgICAgICAgd2luZG93LmhlYWRIZWlnaHQsXG4gICAgICAgICAgd2luZG93LmNvbnN0cnVjdGlvbi5uYW1lLFxuICAgICAgICAgIHdpbmRvdy5jZWlsaW5nSGVpZ2h0LmhlaWdodCxcbiAgICAgICAgICBlYXZlT2Zmc2V0LFxuICAgICAgICAgIHBlcmdvbGFPZmZzZXRcbiAgICAgICAgXTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBbiBlbXB0eSB3aW5kb3dDc3YgbmVlZHMgdG8gYmUgcmV0dXJuZWQgaW5zaWRlIGFuIGFycmF5IGl0c2VsZiwgaW4gb3JkZXIgdG8gd29yayB3aXRoIHRoZSBmbGF0dGVuIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gd2luZG93Q3N2Lmxlbmd0aCA+IDAgPyB3aW5kb3dDc3YgOiBbd2luZG93Q3N2XTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmbGF0dGVuKGNzdik7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzQnVpbGRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9SZXN1bHRzQnVpbGRlci5qcyIsImNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoJ2pzL3dvcmtlci5qcycpO1xuXG5jb25zdCBjcmVhdGVQcmV2aWV3ID0gKHJlc3VsdHMpID0+IHtcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy1wcmV2aWV3LXRlbXBsYXRlJyk7XG4gIGNvbnN0IGluc3RhbmNlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcblxuICBjb25zdCB0YWJsZUJvZHkgPSBpbnN0YW5jZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuXG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHJlc3VsdC5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IHRhYmxlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICB0YWJsZUNlbGwuaW5uZXJUZXh0ID0gcmVzO1xuICAgICAgdGFibGVSb3cuYXBwZW5kQ2hpbGQodGFibGVDZWxsKTtcbiAgICB9KTtcblxuICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZCh0YWJsZVJvdyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzLXByZXZpZXcnKS5hcHBlbmRDaGlsZChpbnN0YW5jZSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgZG93bmxvYWQgZmlsZSwgYW5kIGRvd25sb2FkIGl0IHRvIHRoZSB1c2VycyBicm93c2VyXG4gKlxuICogQHBhcmFtIHthcnJheX0gcmVzdWx0c1xuICpcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5jb25zdCBjcmVhdGVEb3dubG9hZCA9IChyZXN1bHRzKSA9PiB7XG4gIGxldCBjc3ZDb250ZW50ID0gJ2RhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCwnO1xuICBjb25zdCBoZWFkZXJBcnIgPSBbXG4gICAgJ1pvbmUgTmFtZScsXG4gICAgJ3tibGFua30nLFxuICAgICdPcmllbnRhdGlvbicsXG4gICAgJ0hlaWdodCcsXG4gICAgJ1dpZHRoJyxcbiAgICAnUHJvamVjdGlvbicsXG4gICAgJ0hlYWQgSGVpZ2h0JyxcbiAgICAnV2luZG93IFR5cGUnLFxuICAgICdDZWlsaW5nIEhlaWdodCcsXG4gICAgJ0VhdmUgT2Zmc2V0JyxcbiAgICAnUGVyZ29sYSBPZmZzZXQnXG4gIF07XG4gIGNvbnN0IGhlYWRlclJvdyA9IGhlYWRlckFyci5qb2luKCcsJyk7XG4gIGNzdkNvbnRlbnQgKz0gYCR7aGVhZGVyUm93fVxcbmA7XG5cbiAgcmVzdWx0cy5mb3JFYWNoKChyb3dBcnJheSkgPT4ge1xuICAgIGlmIChyb3dBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByb3cgPSByb3dBcnJheS5qb2luKCcsJyk7XG4gICAgICBjc3ZDb250ZW50ICs9IGAke3Jvd31cXG5gO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZW5jb2RlZFVyaSA9IGVuY29kZVVSSShjc3ZDb250ZW50KTtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBlbmNvZGVkVXJpKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2dsYXppbmcuY3N2Jyk7XG4gIGxpbmsuaGlkZGVuID0gdHJ1ZTtcbiAgbGluay5pbm5lckhUTUwgPSAnQ2xpY2sgSGVyZSB0byBkb3dubG9hZCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7IC8vIFJlcXVpcmVkIGZvciBGRlxuXG4gIGxpbmsuY2xpY2soKTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9jZXNzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGZpbGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlVG9VcGxvYWQnKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vcnRoLXJlZmVyZW5jZScpLnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSByZWZlcmVuY2Ugbm9ydGggYXppbXV0aCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChmaWxlU2VsZWN0b3IuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzY3JhdGNoIGZpbGUnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBmaWxlID0gZmlsZVNlbGVjdG9yLmZpbGVzWzBdO1xuICBjb25zdCByZWZlcmVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm9ydGgtcmVmZXJlbmNlJykudmFsdWU7XG5cbiAgd29ya2VyLnBvc3RNZXNzYWdlKHsgZmlsZSwgcmVmZXJlbmNlIH0pO1xuXG4gIHdvcmtlci5vbm1lc3NhZ2UgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjcmVhdGVQcmV2aWV3KGRhdGEucmVzdWx0cyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlRG93bmxvYWQoZGF0YS5yZXN1bHRzKTtcbiAgICB9KTtcbiAgfTtcbn0pO1xuXG4vLyBDbGVhciBwcmV2aWV3IHJlc3VsdHMgd2hlbiB0aGUgc2NyYXRjaCBmaWxlIGNoYW5nZXNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlVG9VcGxvYWQnKS5vbmNoYW5nZSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHMtcHJldmlldycpLmlubmVySFRNTCA9ICcnO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBGbGF0dGVuIGFycmF5IDEgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgQXJyeWEgdG8gZmxhdHRlblxuICpcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW4gPSBhcnIgPT4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5hcnIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==