/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./webpack/js/common/Dropdown.js":
/*!***************************************!*\
  !*** ./webpack/js/common/Dropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dropdown)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Dropdown = /*#__PURE__*/function () {\n  function Dropdown(config) {\n    _classCallCheck(this, Dropdown);\n\n    _defineProperty(this, \"arrow\", '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\"><path fill=\"none\" fill-rule=\"evenodd\" stroke=\"#4D4545\" stroke-width=\"1.5\" d=\"M11.13256879.75868655L6.0460822 6.59228518.95959486.75868634\"/></svg>');\n\n    this.$elt = $(config.element);\n    this.handleSelect = config.handleSelect;\n    this.options = config.options;\n    this.selected = config.initialValue;\n  }\n\n  _createClass(Dropdown, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.$elt.find(\"li\").click(function (e) {\n        // Set selected\n        _this.selected = e.target.dataset.value; // Get new list\n\n        var selectedIndex = _this.options.findIndex(function (option) {\n          return option.value === _this.selected;\n        });\n\n        var listItems = _toConsumableArray(_this.options);\n\n        listItems.splice(selectedIndex, 1); // Inject selected value\n\n        _this.$elt.find(\".header-dropdown-val\").html(\"Viewing \".concat(e.target.innerHTML, \" examples \").concat(_this.arrow)); // Inject list items\n\n\n        _this.$elt.find(\"li\").each(function (index, elt) {\n          $(elt).html(listItems[index].HTMLDisplayText).attr('data-value', listItems[index].value);\n        });\n\n        _this.handleSelect(_this.options[selectedIndex], _this.options);\n      });\n    }\n  }]);\n\n  return Dropdown;\n}();\n\n\n\n//# sourceURL=webpack://studio-apt/./webpack/js/common/Dropdown.js?");

/***/ }),

/***/ "./webpack/js/common/addTimeToHeader.js":
/*!**********************************************!*\
  !*** ./webpack/js/common/addTimeToHeader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTimeToHeader)\n/* harmony export */ });\nfunction addTimeToHeader() {\n  // Get time string\n  var ESTLocaleStr = new Date().toLocaleString(\"en-US\", {\n    timeZone: \"America/New_York\"\n  });\n  var ESTDateObj = new Date(ESTLocaleStr);\n  var dateTimeFormat = new Intl.DateTimeFormat('en', {\n    hour: 'numeric',\n    minute: 'numeric'\n  });\n  var parts = dateTimeFormat.formatToParts(ESTDateObj);\n  var ESTFormattedTimeStr = \"\".concat(parts[0].value, \":\").concat(parts[2].value).concat(parts[4].value.toLowerCase()); // Get elt\n\n  var elt = document.querySelector('#ESTTime');\n  elt.innerHTML = ESTFormattedTimeStr;\n}\n\n//# sourceURL=webpack://studio-apt/./webpack/js/common/addTimeToHeader.js?");

/***/ }),

/***/ "./webpack/js/common/addWeatherToHeader.js":
/*!*************************************************!*\
  !*** ./webpack/js/common/addWeatherToHeader.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWeatherToHeader)\n/* harmony export */ });\nfunction addWeatherToHeader() {\n  var appid = '74735b702c4617a2e6cabc145c497c33';\n  var URL = \"https://api.openweathermap.org/data/2.5/weather?id=5110302&appid=\".concat(appid, \"&units=imperial\");\n  $.get(URL, function (res) {\n    if (res.cod !== 200 || !res.weather || !res.weather.length || !res.main) {\n      console.log('Could not get weather.');\n      return null;\n    }\n\n    var temp = Math.round(res.main.temp);\n    var _res$weather$ = res.weather[0],\n        id = _res$weather$.id,\n        description = _res$weather$.description;\n    var color = codeToColor(id);\n    var desc = description.toLowerCase(); // Reword desc...\n\n    if (id === 800) {\n      desc = \"sunny\";\n    }\n\n    if (desc === \"overcast clouds\") {\n      desc = \"overcast\";\n    }\n\n    var str = \"\".concat(temp, \"\\xB0 and \").concat(desc);\n    var dotBorderStyle = id > 800 ? '1px solid rgba(82, 73, 76, .15)' : 'none';\n    var elt = document.querySelector('#weather');\n    elt.innerHTML = \"\\n      <span class=\\\"weather__dot\\\" style=\\\"background-color: \".concat(color, \"; border:\").concat(dotBorderStyle, \"\\\"></span>\\n      <span>\").concat(str, \"</span>\\n    \");\n  });\n}\n\nfunction codeToColor(code) {\n  switch (true) {\n    case code < 300:\n      return 'rgb(152, 105, 213)';\n    // Thunderstorm\n\n    case code < 500:\n      return 'rgb(61, 126, 195)';\n    // Drizzle\n\n    case code < 600:\n      return 'rgb(22, 70, 123)';\n    // Rain\n\n    case code < 700:\n      return 'rgb(208, 231, 241)';\n    // Snow\n\n    case code < 800:\n      return 'rgb(217, 223, 229)';\n    // Atmosphere\n\n    case code === 800:\n      return 'rgb(242, 185, 82)';\n    // Clear but displayed as \"sunny\"\n\n    default:\n      return 'rgb(255, 255, 255)';\n    // Clouds\n  }\n}\n\n//# sourceURL=webpack://studio-apt/./webpack/js/common/addWeatherToHeader.js?");

/***/ }),

/***/ "./webpack/js/common/putItemsIntoHomeGrid.js":
/*!***************************************************!*\
  !*** ./webpack/js/common/putItemsIntoHomeGrid.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ putItemsIntoHomeGrid)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/** There is a <template> elt on the front page containing all of the projects. \n *  And there is a dropdown filter for the grid. This function puts the correct\n *  items into the grid.\n * \n *  parameter `selected` will be 'all' | 'branding' | etc... reflecting the options\n *  of the grid filter\n * */\nfunction putItemsIntoHomeGrid(selected) {\n  // select template elt\n  var template = document.querySelector('#template-grid');\n  var templateChildren = template.content.children;\n  var gridElt = document.querySelector('.grid');\n  gridElt.innerHTML = ''; // Append keeper elts\n\n  var _iterator = _createForOfIteratorHelper(templateChildren),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var i = _step.value;\n\n      if (!i.classList || !i.classList.contains || !i.classList.contains('grid__item')) {\n        continue;\n      }\n\n      if (selected === 'all' || i.dataset.categories.includes(selected)) {\n        gridElt.appendChild(i.cloneNode(true));\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://studio-apt/./webpack/js/common/putItemsIntoHomeGrid.js?");

/***/ }),

/***/ "./webpack/js/homepage.js":
/*!********************************!*\
  !*** ./webpack/js/homepage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Dropdown */ \"./webpack/js/common/Dropdown.js\");\n/* harmony import */ var _common_addTimeToHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/addTimeToHeader */ \"./webpack/js/common/addTimeToHeader.js\");\n/* harmony import */ var _common_addWeatherToHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/addWeatherToHeader */ \"./webpack/js/common/addWeatherToHeader.js\");\n/* harmony import */ var _common_putItemsIntoHomeGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/putItemsIntoHomeGrid */ \"./webpack/js/common/putItemsIntoHomeGrid.js\");\n\n\n\n\n$(document).ready(function () {\n  /////////////////\n  // Definitions //\n  /////////////////\n  var headerDropdown = new _common_Dropdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    element: document.querySelector(\".header-dropdown\"),\n    handleSelect: function handleSelect(selected, options) {\n      var $grid = $(\".grid\"); // Hide grid\n\n      $grid.addClass(\"grid--hide\");\n      setTimeout(function () {\n        // Remove all classes from grid\n        $grid.removeClass(options.map(function (i) {\n          return i.value;\n        }).join(\" \")); // Add class to .grid\n\n        $grid.addClass(selected.value); // Put items in grid\n\n        (0,_common_putItemsIntoHomeGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(selected.value);\n      }, 100);\n      setTimeout(function () {\n        $grid.removeClass(\"grid--hide\");\n      }, 150);\n    },\n    initialValue: \"all\",\n    options: [{\n      value: \"all\",\n      HTMLDisplayText: 'all'\n    }, {\n      value: \"branding\",\n      HTMLDisplayText: 'branding'\n    }, {\n      value: \"digital\",\n      HTMLDisplayText: 'web sites & applications'\n    }, {\n      value: \"print\",\n      HTMLDisplayText: 'print'\n    }]\n  }); ////////\n  // Do //\n  ////////\n\n  headerDropdown.init();\n  (0,_common_addTimeToHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_common_addWeatherToHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_common_putItemsIntoHomeGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('all');\n});\n\n//# sourceURL=webpack://studio-apt/./webpack/js/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/js/homepage.js");
/******/ 	
/******/ })()
;