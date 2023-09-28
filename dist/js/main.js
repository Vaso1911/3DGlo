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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ \"./modules/modal.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs.js */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider.js */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc.js */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sendForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm.js */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n// import { validInputNumber } from './modules/valid-input.js';\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.timer)('24 september 2023')\r\n;(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)()\r\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal)()\r\n// validInputNumber()\r\n;(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_3__.tabs)()\r\n;(0,_modules_slider_js__WEBPACK_IMPORTED_MODULE_4__.slider)(\r\n  'portfolio-content',\r\n  'portfolio-item',\r\n  'portfolio-dots',\r\n  'dot',\r\n  'portfolio-btn',\r\n  'portfolio-item-active',\r\n  'dot-active'\r\n)\r\n;(0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_5__.calc)(100)\r\n;(0,_modules_sendForm_js__WEBPACK_IMPORTED_MODULE_6__.sendForm)({\r\n  formIds: ['form1', 'form2', 'form3'],\r\n  someElem: [\r\n    {\r\n      type: 'block',\r\n      id: 'total'\r\n    }\r\n  ]\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calc: () => (/* binding */ calc)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\n_helper__WEBPACK_IMPORTED_MODULE_0__.animationNum\r\nconst calc = (price) => {\r\n  const calcBlock = document.querySelector('.calc-block')\r\n  const calcType = document.querySelector('.calc-type')\r\n  const calcSquare = document.querySelector('.calc-square')\r\n  const calcCount = document.querySelector('.calc-count')\r\n  const calcDay = document.querySelector('.calc-day')\r\n  const total = document.getElementById('total')\r\n\r\n\r\n  const countCalc = () => {\r\n    const calcTypevalue = +calcType.options[calcType.selectedIndex].value\r\n    const calcSquareValue = calcSquare.value\r\n\r\n    let totalValue = 0\r\n    let calcCountValue = 1\r\n    let calcDayValue = 1\r\n\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypevalue * calcSquareValue * calcCountValue * calcDayValue\r\n    } else {\r\n      totalValue = 0\r\n    }\r\n\r\n    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.animationNum)(totalValue, total)\r\n    \r\n  }\r\n\r\n\r\n\r\n  calcBlock.addEventListener('input', (e) => {\r\n\r\n    if (e.target === calcType || e.target === calcSquare ||\r\n      e.target === calcCount || e.target === calcDay) {\r\n      countCalc()\r\n    }\r\n\r\n  })\r\n}\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/check-window.js":
/*!*********************************!*\
  !*** ./modules/check-window.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isMobile: () => (/* binding */ isMobile)\n/* harmony export */ });\nconst isMobile = () => {\r\n  if (window.innerWidth < 768 || document.documentElement.clientWidth < 768 || document.body.clientWidth < 768) {\r\n    return true;\r\n    \r\n  }\r\n\r\n  return false;\r\n}\n\n//# sourceURL=webpack:///./modules/check-window.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateScale: () => (/* binding */ animateScale),\n/* harmony export */   animationNum: () => (/* binding */ animationNum),\n/* harmony export */   inputEmailValidate: () => (/* binding */ inputEmailValidate),\n/* harmony export */   inputMessageValidate: () => (/* binding */ inputMessageValidate),\n/* harmony export */   inputNameValidate: () => (/* binding */ inputNameValidate),\n/* harmony export */   inputPhoneValidate: () => (/* binding */ inputPhoneValidate)\n/* harmony export */ });\nconst animationNum = (value, elem) => {\r\n  let time = 1000;\r\n  let step = 1;\r\n  let num = 0;\r\n  let timeNum = time / (parseInt(value) / step);\r\n\r\n  let interval = setInterval(() => {\r\n    num += step;\r\n    if (num >= parseInt(value)) {\r\n      num = parseInt(value);\r\n      clearInterval(interval);\r\n    }\r\n    elem.textContent = num;\r\n  }, timeNum);\r\n};\r\n\r\nconst animateScale = (elem, duration) => {\r\n  elem.style.transform = `scale(0)`;\r\n  elem.style.transition = `transform ${duration}s ease-in-out`;\r\n\r\n  let count = 0;\r\n  let idInterval;\r\n\r\n  const anim = () => {\r\n    count++;\r\n    idInterval = requestAnimationFrame(anim);\r\n\r\n    if (count <= 1) {\r\n      elem.style.transform = `scale(${count})`;\r\n    } else {\r\n      cancelAnimationFrame(idInterval);\r\n    }\r\n  };\r\n\r\n  anim();\r\n};\r\n\r\nconst inputPhoneValidate = (elem) => {\r\n  if (elem) {\r\n    const phonePattern = /^[0-9+()\\-]+$/\r\n    if (phonePattern.test(elem.value)) {\r\n      elem.classList.add('success')\r\n      return true\r\n    } else {\r\n      elem.classList.remove('success')\r\n      return false\r\n    }\r\n  }\r\n  return false\r\n}\r\nconst inputEmailValidate = (elem) => {\r\n  if (elem) {\r\n    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\r\n    if (emailPattern.test(elem.value)) {\r\n      elem.classList.add('success')\r\n      return true\r\n    } else {\r\n      elem.classList.remove('success')\r\n      return false\r\n    }\r\n  }\r\n return false\r\n}\r\nconst inputNameValidate = (elem) => {\r\n  if (elem) {\r\n    const namePattern = /^[а-яА-Я\\s]+$/\r\n    if (namePattern.test(elem.value)) {\r\n      elem.classList.add('success')\r\n      return true\r\n    } else {\r\n      elem.classList.remove('success')\r\n      return false\r\n    }\r\n  }\r\n return false\r\n}\r\nconst inputMessageValidate = (elem) => {\r\n  if (elem) {\r\n    const messagePattern = /^[а-яА-Я\\s0-9.,!?()-]+$/\r\n    if (messagePattern.test(elem.value)) {\r\n      elem.classList.add('success')\r\n      return true\r\n    } else {\r\n      elem.classList.remove('success')\r\n      return false\r\n    }\r\n  }\r\n return false\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth-scroll */ \"./modules/smooth-scroll.js\");\n\r\n\r\nconst menu = () => {\r\n  const menu = document.querySelector('menu')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n  const serviceLink = document.querySelector('[href=\"#service-block\"]')\r\n  const body = document.querySelector('body')\r\n\r\n  ;(0,_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(serviceLink)\r\n\r\n  menuItems.forEach(el => {\r\n    el.classList.add('menu-link')\r\n    ;(0,_smooth_scroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(el)\r\n\r\n  })\r\n\r\n  const toggleMenu = () => {\r\n    body.addEventListener('click', (e) => {\r\n      const clickEventBurger = e.target.closest('.menu')\r\n      const clickEventClose = e.target.classList.contains('close-btn')\r\n      const clickEventLink = e.target.classList.contains('menu-link')\r\n      const clickEventMenu = e.target.classList.contains('active-menu')\r\n\r\n      if (clickEventClose || clickEventLink || clickEventBurger) {\r\n        handleMenu()\r\n      } else if(!clickEventMenu) {\r\n        menu.classList.remove('active-menu')\r\n      }\r\n    })\r\n  }\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n\r\n\r\n  toggleMenu()\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _check_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-window */ \"./modules/check-window.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup')\r\n  const modalContent = document.querySelector('.popup-content')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n\r\n  buttons.forEach(e => {\r\n    e.addEventListener('click', () => {\r\n      modal.style.display = 'block'\r\n\r\n      setTimeout(() => {\r\n        ;(0,_helper__WEBPACK_IMPORTED_MODULE_1__.animateScale)(modalContent, 0.3);\r\n      }, 300);\r\n    })\r\n  })\r\n\r\n\r\n  if ((0,_check_window__WEBPACK_IMPORTED_MODULE_0__.isMobile)()) {\r\n    modalContent.style.transform = `scale(1)`\r\n    clearTimeout(_helper__WEBPACK_IMPORTED_MODULE_1__.animateScale)\r\n  }\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none'\r\n      modalContent.style.transform = `scale(0)`\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\n\r\nconst sendForm = ({ formIds, someElem = [] }) => {\r\n  formIds.forEach(formId => {\r\n    const form = document.getElementById(formId);\r\n    const inputPhone = form.querySelector('[name=\"user_phone\"]');\r\n    const inputEmail = form.querySelector('[name=\"user_email\"]');\r\n    const inputName = form.querySelector('[name=\"user_name\"]');\r\n    const inputMessage = form.querySelector('[name=\"user_message\"]');\r\n    const statusBlock = document.createElement('div')\r\n    const loadText = 'Загрузка'\r\n    const errorText = 'Ошибка'\r\n    const succesText = 'Спасибо! Наш менеджер с вами свяжется!'\r\n\r\n    const validate = (list) => {\r\n      const invalidInputs = [];\r\n      let success = true\r\n\r\n      list.forEach(input => {\r\n\r\n        if (!input.classList.contains('success')) {\r\n          success = false\r\n          invalidInputs.push(input);\r\n        }\r\n      })\r\n      if (!success) {\r\n        alert('Данные не валидны для следующих полей:\\n\\n' + invalidInputs.map(input => input.placeholder).join('\\n'));\r\n      }\r\n      return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n      return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(data),\r\n        headers: {\r\n          'Content-Type': 'application/json'\r\n        }\r\n      }).then(res => res.json())\r\n    }\r\n\r\n    const submitForm = () => {\r\n      const formElements = form.querySelectorAll('input')\r\n      const formData = new FormData(form)\r\n      const formBody = {}\r\n\r\n      statusBlock.textContent = loadText\r\n\r\n      form.append(statusBlock)\r\n      if(form.id == 'form3') {\r\n        statusBlock.style.color = '#fff'\r\n      }\r\n      formData.forEach((val, key) => {\r\n        formBody[key] = val\r\n      });\r\n\r\n      someElem.forEach(elem => {\r\n        const element = document.getElementById(elem.id)\r\n        console.log(element);\r\n        if (elem.type === 'block') {\r\n          formBody[elem.id] = element.textContent\r\n        } else if (elem.type === 'input') {\r\n          formBody[elem.id] = element.value\r\n        }\r\n\r\n      })\r\n\r\n      Promise.all([\r\n        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.inputPhoneValidate)(inputPhone),\r\n        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.inputEmailValidate)(inputEmail),\r\n        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.inputNameValidate)(inputName),\r\n        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.inputMessageValidate)(inputMessage)\r\n      ]).then(() => {\r\n        if (validate(formElements)) {\r\n          sendData(formBody).then(data => {\r\n            statusBlock.textContent = succesText;\r\n            formElements.forEach(input => {\r\n              input.value = ''\r\n            })\r\n          }).catch(error => {\r\n            statusBlock.textContent = errorText;\r\n          });\r\n        } \r\n      })\r\n    }\r\n\r\n    try {\r\n      if (!form) {\r\n        throw new Error('Верните форму на место!')\r\n      }\r\n\r\n      form.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n        submitForm()\r\n      })\r\n    } catch (error) {\r\n      console.log(error.message);\r\n    }\r\n\r\n  });\r\n}\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = (sliderClass, slidesClass, dotsListClass, dotClass, btnClass, activeSlideClass, activeDotClass) => {\r\n  const sliderBlock = document.querySelector(`.${sliderClass}`)\r\n  const slides = document.querySelectorAll(`.${slidesClass}`)\r\n  const dotsList = document.querySelector(`.${dotsListClass}`)\r\n\r\n  if (!sliderBlock) {\r\n    return\r\n  }\r\n\r\n  if (!slides.length) {\r\n    return\r\n  }\r\n\r\n  sliderBlock.children[0].classList.add(`${activeSlideClass}`)\r\n\r\n  const createDots = () => {\r\n    let dotsListHtml = ''\r\n    for (let i = 0; i < slides.length; i++) {\r\n      dotsListHtml += `\r\n        <li class=\"dot\"></li>\r\n      `\r\n    }\r\n    dotsList.innerHTML = dotsListHtml\r\n    dotsList.children[0].classList.add(`${activeDotClass}`)\r\n  }\r\n\r\n  createDots()\r\n\r\n  const dots = document.querySelectorAll(`.${dotClass}`)\r\n  let currentSlide = 0\r\n  let interval\r\n  let timeInterval = 2000\r\n\r\n  const prevSlide = (el, i, strClass) => {\r\n    el[i].classList.remove(strClass)\r\n  }\r\n\r\n  const nextSlide = (el, i, strClass) => {\r\n    el[i].classList.add(strClass)\r\n  }\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, activeSlideClass)\r\n    prevSlide(dots, currentSlide, activeDotClass)\r\n    currentSlide++\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n    nextSlide(slides, currentSlide, activeSlideClass)\r\n    nextSlide(dots, currentSlide, activeDotClass)\r\n  }\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer)\r\n  }\r\n  const stopSlide = () => {\r\n    clearInterval(interval)\r\n  }\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    if (!e.target.matches(`.${dotClass}, .${btnClass}`)) {\r\n      return\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, activeSlideClass)\r\n    prevSlide(dots, currentSlide, activeDotClass)\r\n\r\n    if (e.target.matches('#arrow-right')) {\r\n      currentSlide++\r\n    } else if (e.target.matches('#arrow-left')) {\r\n      currentSlide--\r\n    } else if (e.target.classList.contains(`${dotClass}`)) {\r\n      dots.forEach((dot, i) => {\r\n        if (e.target === dot) {\r\n          currentSlide = i\r\n        }\r\n      })\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, activeSlideClass)\r\n    nextSlide(dots, currentSlide, activeDotClass)\r\n  })\r\n\r\n\r\n  sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if (e.target.matches(`.${dotClass}, .${btnClass}`)) {\r\n      stopSlide()\r\n    }\r\n  }, true)\r\n\r\n  sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if (e.target.matches(`.${dotClass}, .${btnClass}`)) {\r\n      startSlide(timeInterval)\r\n    }\r\n  }, true)\r\n\r\n  startSlide(timeInterval)\r\n}\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smooth-scroll.js":
/*!**********************************!*\
  !*** ./modules/smooth-scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = (link) => {\r\n\r\n  link.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n\r\n    const linkId = link.getAttribute('href').substring(1)\r\n    const section = document.getElementById(linkId)\r\n\r\n    if (section) {\r\n      const topOffset = section.offsetTop\r\n\r\n      window.scrollTo({\r\n        top: topOffset,\r\n        behavior: 'smooth'\r\n      });\r\n    }\r\n  })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/smooth-scroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: () => (/* binding */ tabs)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n    const tabBtn = e.target.closest('.service-header-tab')\r\n      tabs.forEach((tab, i) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[i].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[i].classList.add('d-none')\r\n        }\r\n      })\r\n\r\n  })\r\n}\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById('timer-hours')\r\n  const timerMinutes = document.getElementById('timer-minutes')\r\n  const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n  const formatTime = (num) => {\r\n    return num < 10 ? '0' + num : num;\r\n  }\r\n  const getTimeRemaning = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaning = (dateStop - dateNow) / 1000\r\n    let hours = Math.floor((timeRemaning / 3600))\r\n    let minutes = Math.floor((timeRemaning / 60) % 60)\r\n    let seconds = Math.floor(timeRemaning % 60)\r\n\r\n    return { timeRemaning, hours, minutes, seconds, }\r\n  }\r\n\r\n  const upddateClock = () => {\r\n    let getTime = getTimeRemaning()\r\n    timerHours.textContent = `${formatTime(getTime.hours)}`\r\n    timerMinutes.textContent = `${formatTime(getTime.minutes)}`\r\n    timerSeconds.textContent = `${formatTime(getTime.seconds)}`\r\n\r\n    if (getTime.timeRemaning > 0) {\r\n      setTimeout(upddateClock, 1000)\r\n    } else {\r\n      timerHours.textContent = '00'\r\n      timerMinutes.textContent = '00'\r\n      timerSeconds.textContent = '00'\r\n    }\r\n\r\n  }\r\n  upddateClock()\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/timer.js?");

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