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

/***/ "./webpack/js/contact.js":
/*!*******************************!*\
  !*** ./webpack/js/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_addTimeToHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/addTimeToHeader */ \"./webpack/js/common/addTimeToHeader.js\");\n/* harmony import */ var _common_addWeatherToHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/addWeatherToHeader */ \"./webpack/js/common/addWeatherToHeader.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n$(document).ready(function () {\n  // Definitions/selectors\n  var $emailFormGroup = $('.email-form-group');\n  var $form = $('form'); // Do\n\n  (0,_common_addTimeToHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_common_addWeatherToHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // On form submit\n\n  $form.submit(function (e) {\n    e.preventDefault();\n\n    var _$form$serializeArray = $form.serializeArray(),\n        _$form$serializeArray2 = _slicedToArray(_$form$serializeArray, 2),\n        selected = _$form$serializeArray2[0].value,\n        email = _$form$serializeArray2[1].value;\n\n    var radioValToSubject = {\n      project: 'I would like to talk to Studio Apt. about a project',\n      work: 'I would like to work for/with Studio Apt.',\n      hi: 'I would just like to say hi!'\n    };\n    var msg = {\n      from: email || null,\n      subject: radioValToSubject[selected] || null\n    };\n    $.post(\"https://us-central1-studio-apartment-gage.cloudfunctions.net/sendContactEmail\", msg).done(function (res) {\n      return console.log(res);\n    });\n    $form.html(\"\\n      <h2 style=\\\"margin-top: 40px;\\\">Email sent, thank you!</h2>\\n      <p>You can expect a reply within the next 1-3 business days.</p>\\n    \");\n  }); // When a radio gets selected, reveal email inputs\n\n  $('#contact-form input[type=\"radio\"]').change(function (e) {\n    $emailFormGroup.removeClass('d-none');\n  });\n});\n\n//# sourceURL=webpack://studio-apt/./webpack/js/contact.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/js/contact.js");
/******/ 	
/******/ })()
;