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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_valid_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/valid-input.js */ \"./modules/valid-input.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.timer)('22 september 2023')\r\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)()\r\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)()\r\n;(0,_modules_valid_input_js__WEBPACK_IMPORTED_MODULE_3__.validInputNumber)()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/check-window.js":
/*!*********************************!*\
  !*** ./modules/check-window.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isMobile: () => (/* binding */ isMobile)\n/* harmony export */ });\nconst isMobile = () => {\r\n  if (window.innerWidth < 768 || document.documentElement.clientWidth < 768 || document.body.clientWidth < 768) {\r\n    return true;\r\n    \r\n  }\r\n\r\n  return false;\r\n}\n\n//# sourceURL=webpack:///./modules/check-window.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-scroll */ \"./modules/smooth-scroll.js\");\n\r\n\r\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu')\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n  const serviceLink = document.querySelector('[href=\"#service-block\"]')\r\n\r\n  ;(0,_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(serviceLink)\r\n\r\n  menuItems.forEach(el => {\r\n    el.addEventListener('click', (0,_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(el))\r\n  })\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n\r\n  menuBtn.addEventListener('click', handleMenu)\r\n  closeBtn.addEventListener('click', handleMenu)\r\n\r\n  menuItems.forEach(e => e.addEventListener('click', handleMenu))\r\n}\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _check_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-window */ \"./modules/check-window.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup')\r\n  const modalContent = document.querySelector('.popup-content')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n  const closeBtn = modal.querySelector('.popup-close')\r\n  modalContent.style.transform = `scale(0)`\r\n  modalContent.style.transition = `transform .3s ease-in-out`\r\n\r\n  let count = 0\r\n  let idInterval\r\n\r\n  const anim = () => {\r\n    count++\r\n    idInterval = requestAnimationFrame(anim)\r\n\r\n    if (count <= 1) {\r\n      modalContent.style.transform = `scale(${count})`\r\n    } else {\r\n      cancelAnimationFrame(idInterval)\r\n    }\r\n  }\r\n\r\n\r\n  buttons.forEach(e => {\r\n    e.addEventListener('click', () => {\r\n      modal.style.display = 'block'\r\n      count = 0\r\n      setTimeout(anim, 300)\r\n    })\r\n  })\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none'\r\n    modalContent.style.transform = `scale(0)`\r\n  })\r\n\r\n  if ((0,_check_window__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {\r\n    modalContent.style.transform = `scale(1)`\r\n    clearTimeout(anim)\r\n  }\r\n}\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smooth-scroll.js":
/*!**********************************!*\
  !*** ./modules/smooth-scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = (link) => {\r\n\r\n  link.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    const linkId = link.getAttribute('href').substring(1)\r\n    const section = document.getElementById(linkId)\r\n\r\n    if (section) {\r\n      const topOffset = section.offsetTop\r\n\r\n      window.scrollTo({\r\n        top: topOffset,\r\n        behavior: 'smooth'\r\n      });\r\n    }\r\n  })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/smooth-scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n  const formatTime = (num) => {\r\n    return num < 10 ? '0' + num : num;\r\n  }\r\n  const getTimeRemaning = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaning = (dateStop - dateNow) / 1000\r\n    let hours = Math.floor((timeRemaning / 3600))\r\n    let minutes = Math.floor((timeRemaning / 60) % 60)\r\n    let seconds = Math.floor(timeRemaning % 60)\r\n\r\n    return { timeRemaning, hours, minutes, seconds, }\r\n  }\r\n\r\n  const upddateClock = () => {\r\n    let getTime = getTimeRemaning()\r\n    timerHours.textContent = `${formatTime(getTime.hours)}`\r\n    timerMinutes.textContent = `${formatTime(getTime.minutes)}`\r\n    timerSeconds.textContent = `${formatTime(getTime.seconds)}`\r\n\r\n    if (getTime.timeRemaning > 0) {\r\n      setTimeout(upddateClock, 1000)\r\n    } else {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n    }\r\n\r\n  }\r\n  upddateClock()\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/valid-input.js":
/*!********************************!*\
  !*** ./modules/valid-input.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validInputNumber: () => (/* binding */ validInputNumber)\n/* harmony export */ });\nconst validInputNumber = () => {\r\n\r\n  const inputs = document.querySelectorAll('.calc-block > input')\r\n  const forms = document.querySelectorAll('form')\r\n  const nameInputs = document.querySelectorAll('[type=\"text\"]')\r\n  const emailInputs = document.querySelectorAll('[type=\"email\"]')\r\n  const telInputs = document.querySelectorAll('[type=\"tel\"]')\r\n  const textInput = document.querySelector('.mess')\r\n\r\nconst validateName = (name) =>{\r\n    const regex = /[^-\\u0400-\\u04FF\\s]/g;\r\n    name = name.replace(regex, \"\");\r\n    name = name.replace(/(^[-\\s]+)|([- ]+$)/g, \"\");\r\n    name = name.replace(/[-\\s]+/g, \"-\");\r\n    name = name.toLowerCase();\r\n    name = name.charAt(0).toUpperCase() + name.slice(1);\r\n    \r\n    return name;\r\n  }\r\n  \r\nconst validateBlur = (event) => {\r\n    const input = event.target;\r\n    const inputValue = input.value;\r\n    const formattedValue = validateName(inputValue);\r\n    input.value = formattedValue;\r\n  }\r\n\r\n  nameInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\s-]/g, '');\r\n    });\r\ninput.addEventListener('blur', validateBlur)\r\n  });\r\n\r\n  emailInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\\-_\\.!~*']/g, '');\r\n    });\r\n  });\r\n\r\n  telInputs.forEach((input) => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d()\\-]/g, '')\r\n    });\r\n\r\n      textInput.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\s-]/g, '')\r\n      })\r\n  });\r\n\r\n  inputs.forEach(input => {\r\n    input.addEventListener('input', (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\")\r\n\r\n    })\r\n  })\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/valid-input.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;