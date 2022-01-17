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

/***/ "./webpack/js/about.js":
/*!*****************************!*\
  !*** ./webpack/js/about.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_addTimeToHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/addTimeToHeader */ \"./webpack/js/common/addTimeToHeader.js\");\n/* harmony import */ var _common_addWeatherToHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/addWeatherToHeader */ \"./webpack/js/common/addWeatherToHeader.js\");\n/* harmony import */ var _common_createTooltips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/createTooltips */ \"./webpack/js/common/createTooltips.js\");\n\n\n\n$(document).ready(function () {\n  /////////////////\n  // Definitions //\n  /////////////////\n  ////////\n  // Do //\n  ////////\n  (0,_common_addTimeToHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_common_addWeatherToHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_common_createTooltips__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://studio-apt/./webpack/js/about.js?");

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

/***/ "./webpack/js/common/createTooltips.js":
/*!*********************************************!*\
  !*** ./webpack/js/common/createTooltips.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTooltips)\n/* harmony export */ });\n/* harmony import */ var _showOnHover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showOnHover */ \"./webpack/js/common/showOnHover.js\");\n\nfunction createTooltips() {\n  tooltip_img_boxBottom(\"#stealth-gaming\", \"assets/images/stealthgaming.png\", \"This is the only decent screenshot from the Wayback Machine that I could grab of one the many schemes me and friends in high school dreamed up. I was usually the graphics guy because I wasn’t nearly as smart as everyone else, and this is the type of stuff I would come up with... 😂\", \"Project with friends back in the day\", \"rgb(66, 90, 131)\");\n  tooltip_text(\"#work-experience\", \"Work Experience:\", \"<ul><li>— <b>Current:</b> Studio Apt, 3 years</li><li>— <b>Nelson Cash:</b> Sr. Designer, 6 years</li><li>— <b>Doejo:</b> Sr. Designer, 1 year</li><li>— <b>Smith Brothers Advertising:</b> Designer, 1 year</li><li>— <b>Mind Over Media:</b> Designer, 1 year</li></ul>\");\n  tooltip_img_boxRight(\"#edinboro\", \"assets/images/edinboro.png\", '<div style=\"color:rgb(162, 157, 157);padding-bottom:.5rem\"><b>EDUCATION:<br />— Edinboro Univ. of PA</b><br /><span style=\"padding-left:15px\">BFA, 2008</span></div>This picture sums up what it was like to walk on campus most of the year. I experienced lake-effect snowstorms, amazing friendships and lots of late nights at the studio.', \"Edinboro University of Pennsylvania\", \"rgb(46, 43, 43)\");\n}\n\nfunction tooltip_img_boxBottom(target, image, caption, alt, captionBgColor) {\n  var div = document.createElement(\"div\");\n  div.className = \"tooltip tooltip-img-box--bottom\";\n  var fig = document.createElement(\"figure\");\n  var img = document.createElement(\"img\");\n  img.src = image;\n  if (arguments.length = 5) img.alt = alt;\n  var cptn = document.createElement(\"figcaption\");\n  cptn.style.backgroundColor = captionBgColor;\n  cptn.innerHTML = caption;\n  cptn.className = \"tooltip__figcaption\";\n  fig.appendChild(img);\n  fig.appendChild(cptn);\n  div.appendChild(fig);\n  document.body.appendChild(div);\n  $(img).load(function () {\n    $(fig).width($(img).width());\n  }).each(function () {\n    if (this.complete) $(this).trigger(\"load\");\n  });\n  (0,_showOnHover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(div, target);\n}\n\nfunction tooltip_img_boxRight(target, image, caption, alt, captionBgColor) {\n  var div = document.createElement(\"div\");\n  div.className = \"tooltip tooltip-img-box--right\";\n  var fig = document.createElement(\"figure\");\n  var img = document.createElement(\"img\");\n  img.src = image;\n  if (arguments.length = 5) img.alt = alt;\n  var cptn = document.createElement(\"figcaption\");\n  cptn.style.backgroundColor = captionBgColor;\n  cptn.innerHTML = caption;\n  cptn.className = \"tooltip__figcaption\";\n  fig.appendChild(img);\n  fig.appendChild(cptn);\n  div.appendChild(fig);\n  document.body.appendChild(div);\n  $(img).load(function () {\n    $(fig).height($(img).height());\n    $(cptn).width($(img).width());\n  }).each(function () {\n    if (this.complete) $(this).trigger(\"load\");\n  });\n  (0,_showOnHover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(div, target);\n}\n\nfunction tooltip_text(target, title, text) {\n  var div = document.createElement(\"div\");\n  div.className = \"tooltip tooltip-text\";\n  var titleElt = document.createElement(\"h4\");\n  var textElt = document.createElement(\"div\");\n  titleElt.innerHTML = title;\n  textElt.innerHTML = text;\n  div.appendChild(titleElt);\n  div.appendChild(textElt);\n  document.body.appendChild(div);\n  (0,_showOnHover__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(div, target);\n}\n\n//# sourceURL=webpack://studio-apt/./webpack/js/common/createTooltips.js?");

/***/ }),

/***/ "./webpack/js/common/showOnHover.js":
/*!******************************************!*\
  !*** ./webpack/js/common/showOnHover.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showOnHover)\n/* harmony export */ });\nfunction showOnHover(elt, target) {\n  $('body').on('mouseenter', target, function (e) {\n    var paddingBottom = parseInt($(elt).css('padding-bottom').slice(0, -2));\n    var paddingTop = parseInt($(elt).css('padding-top').slice(0, -2)); // Set top pos\n\n    if (e.clientY - ($(elt).height() + 20 + paddingBottom + paddingTop) / 2 < 0) {\n      elt.style.top = e.pageY + 20 - paddingBottom + paddingTop + 'px';\n    } else {\n      elt.style.top = e.pageY - ($(elt).height() + 20) - (paddingBottom + paddingTop) + 'px';\n    } // Set left pos\n\n\n    if (e.pageX - $(elt).width() / 2 < 0) elt.style.left = 0;else if (e.pageX + $(elt).width() / 2 > $(window).width()) elt.style.left = $(window).width() - $(elt).width() + 'px';else elt.style.left = e.pageX - $(elt).width() / 2 + 'px';\n  });\n  $('body').on('mouseleave', target, function (e) {\n    setTimeout(function () {\n      if (!$(elt).is(':hover')) elt.style.left = '-9999px';else {\n        $(elt).mouseleave(function (e) {\n          elt.style.left = '-9999px';\n        });\n      }\n    }, 150);\n  });\n}\n\n//# sourceURL=webpack://studio-apt/./webpack/js/common/showOnHover.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/js/about.js");
/******/ 	
/******/ })()
;