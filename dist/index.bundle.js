/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/forecast/forecast.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/forecast/forecast.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#forecast {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding-left: 20px;\n  gap : 20px;\n  margin-bottom: 10px;\n}\n\n#card-title {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n#card-box {\n  height: 240px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n#card-box::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n#card-box::-webkit-scrollbar-track {\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n}\n\n/* Handle */\n#card-box::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 200px;\n  width: 220px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-img {\n  max-width: 100px;\n  height: auto;\n  margin-bottom: -20px;\n}\n\n.card > p {\n  text-align: center;\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #forecast {\n    flex-direction: column;\n    align-items: center;\n    padding-left: 0px;\n  }\n\n  .title-card {\n    justify-content: end;\n  }\n\n  #card-box {\n    height: 100%;\n    flex-direction: column;\n  }\n\n  .rotate {\n    transform: rotateX(0deg); /* remove desktop rotation  */\n  }\n}", "",{"version":3,"sources":["webpack://./src/forecast/forecast.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,gBAAgB,EAAE,mBAAmB;AACvC;;AAEA,UAAU;AACV;EACE,YAAY;AACd;;AAEA,UAAU;AACV;EACE,iDAAiD;EACjD,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,WAAW;EACX,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B,EAAE,mBAAmB;AACjD;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,wBAAwB,EAAE,6BAA6B;EACzD;AACF","sourcesContent":["#forecast {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding-left: 20px;\n  gap : 20px;\n  margin-bottom: 10px;\n}\n\n#card-title {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n#card-box {\n  height: 240px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n#card-box::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n#card-box::-webkit-scrollbar-track {\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n}\n\n/* Handle */\n#card-box::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 200px;\n  width: 220px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-img {\n  max-width: 100px;\n  height: auto;\n  margin-bottom: -20px;\n}\n\n.card > p {\n  text-align: center;\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #forecast {\n    flex-direction: column;\n    align-items: center;\n    padding-left: 0px;\n  }\n\n  .title-card {\n    justify-content: end;\n  }\n\n  #card-box {\n    height: 100%;\n    flex-direction: column;\n  }\n\n  .rotate {\n    transform: rotateX(0deg); /* remove desktop rotation  */\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  padding: 10px;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3vh;\n  border-radius:0 0 15px 15px;\n}\n\n#title-day-time {\n  font-weight: 300;\n}\n\n#info {\n  display: flex;\n  gap: 40px;\n}\n\n#weather-now {\n  /* max-width: 200px; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1vh;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\n.weather-more-img {\n  height: 60px;\n  width: 60px;\n}\n\n@media screen and (max-height: 580px) {\n  #weather-now-img {\n    height: 100px;\n    width: 100px;\n  }\n\n  .weather-more-img {\n    height: 50px;\n    width: 50px;\n  }\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #main {\n    height: 95vh;\n    width: 90vw;\n  }\n\n  #today {\n    width: 100%;\n    min-width: 0px;\n    height: 100%;\n  }\n\n  #title-day-time {\n    text-align: center;\n  }\n\n  #info {\n    flex-direction: column;\n  }\n\n  .weather-more {\n    padding-left: 20%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/main/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;IACE,aAAa;IACb,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF;;AAEA;EACE;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,WAAW;IACX,cAAc;IACd,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  padding: 10px;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3vh;\n  border-radius:0 0 15px 15px;\n}\n\n#title-day-time {\n  font-weight: 300;\n}\n\n#info {\n  display: flex;\n  gap: 40px;\n}\n\n#weather-now {\n  /* max-width: 200px; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1vh;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\n.weather-more-img {\n  height: 60px;\n  width: 60px;\n}\n\n@media screen and (max-height: 580px) {\n  #weather-now-img {\n    height: 100px;\n    width: 100px;\n  }\n\n  .weather-more-img {\n    height: 50px;\n    width: 50px;\n  }\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #main {\n    height: 95vh;\n    width: 90vw;\n  }\n\n  #today {\n    width: 100%;\n    min-width: 0px;\n    height: 100%;\n  }\n\n  #title-day-time {\n    text-align: center;\n  }\n\n  #info {\n    flex-direction: column;\n  }\n\n  .weather-more {\n    padding-left: 20%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n\n}\n\nhtml {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: 0.1em;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 2em;\n}\n\nh2 {\n  font-weight: 400;\n}\n\n.big {\n  font-size: 1.5em;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.upper {\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n#search-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n\n#search-image {\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n}\n\n#search-input {\n  height: 20px;\n  width: 150px;\n  background: rgb(0, 0, 0, 0);\n  border: none;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.5);\n  color: white;\n  letter-spacing: 0.1em;\n}\n\n#search-input:focus {\n  border: none;\n  outline: 0;\n  border-bottom: solid 1px rgba(255, 255, 255);\n}\n\n#search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 1; /* Firefox */\n}\n\n#search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#search-input::-ms-input-placeholder { /* Microsoft Edge */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#alert {\n  position: absolute;\n  top: 40px;\n  right: 50px;\n}\n\n#answer-error {\n  margin-top: 20vh;\n  margin: auto;\n  max-width: 500px;\n  text-align: center;\n}\n\n#mobile-box {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(33, 190, 246);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n#mobile-box > h2 {\n  max-width: 70vw;\n  text-align: center;\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #container {\n    height: 100%;\n    min-height: 100vh;\n    width: 100%;\n    align-items: center;\n  }\n\n  #search-box {\n    right: 6vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;;AAEf;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,iDAAiD;EACjD,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,4CAA4C;AAC9C;;AAEA,6BAA6B,yCAAyC;EACpE,+BAA+B;EAC/B,UAAU,EAAE,YAAY;AAC1B;;AAEA,sCAAsC,4BAA4B;EAChE,+BAA+B;AACjC;;AAEA,uCAAuC,mBAAmB;EACxD,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mCAAmC;EACnC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE;IACE,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n\n}\n\nhtml {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: 0.1em;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 2em;\n}\n\nh2 {\n  font-weight: 400;\n}\n\n.big {\n  font-size: 1.5em;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.upper {\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n#search-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n\n#search-image {\n  height: 50px;\n  width: 50px;\n  cursor: pointer;\n}\n\n#search-input {\n  height: 20px;\n  width: 150px;\n  background: rgb(0, 0, 0, 0);\n  border: none;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.5);\n  color: white;\n  letter-spacing: 0.1em;\n}\n\n#search-input:focus {\n  border: none;\n  outline: 0;\n  border-bottom: solid 1px rgba(255, 255, 255);\n}\n\n#search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 1; /* Firefox */\n}\n\n#search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#search-input::-ms-input-placeholder { /* Microsoft Edge */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#alert {\n  position: absolute;\n  top: 40px;\n  right: 50px;\n}\n\n#answer-error {\n  margin-top: 20vh;\n  margin: auto;\n  max-width: 500px;\n  text-align: center;\n}\n\n#mobile-box {\n  height: 100vh;\n  width: 100vw;\n  background-color: rgb(33, 190, 246);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n#mobile-box > h2 {\n  max-width: 70vw;\n  text-align: center;\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #container {\n    height: 100%;\n    min-height: 100vh;\n    width: 100%;\n    align-items: center;\n  }\n\n  #search-box {\n    right: 6vw;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/forecast/forecast.css":
/*!***********************************!*\
  !*** ./src/forecast/forecast.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./forecast.css */ "./node_modules/css-loader/dist/cjs.js!./src/forecast/forecast.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main/main.css":
/*!***************************!*\
  !*** ./src/main/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.js */ "./src/main/main.js");
/* harmony import */ var _forecast_forecast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast/forecast.js */ "./src/forecast/forecast.js");
/* harmony import */ var _support_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-func */ "./src/support-func.js");




function component (city) {
  const container = document.createElement('div')
  container.id = 'container'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14772d2100c0f1e02315562e46c1ba6f`, { mode : 'cors' })
  .then(function(response) {
    return response.json()
    .then(function(response) {
      let x = JSON.parse(JSON.stringify(response))
      let data = (0,_support_func__WEBPACK_IMPORTED_MODULE_2__.makeData)(x)

      ;(0,_support_func__WEBPACK_IMPORTED_MODULE_2__.styler)(data.dt)
      container.appendChild((0,_main_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data))
    })
  })
  .catch(function(err) {
    console.log(err)
    container.appendChild((0,_support_func__WEBPACK_IMPORTED_MODULE_2__.handleError)(city))
  })

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=14772d2100c0f1e02315562e46c1ba6f`, { mode : 'cors' })
  .then(function(response) {
    return response.json()
    .then(function(response) {
      let y = JSON.parse(JSON.stringify(response))
      y = y.list
      let dataList = (0,_support_func__WEBPACK_IMPORTED_MODULE_2__.makeDataList)(y)

      container.appendChild((0,_forecast_forecast_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dataList))
    })
  })
  .catch(function(err) {
    console.log(err)
  })

  return container
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component);

/***/ }),

/***/ "./src/forecast/forecast-cards.js":
/*!****************************************!*\
  !*** ./src/forecast/forecast-cards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _support_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../support-func */ "./src/support-func.js");


function forecastCards (data) {
  const cardBox = document.createElement('div')
  cardBox.id = 'card-box'
  cardBox.classList.add('rotate')

  data.map((item) => {
    let card = document.createElement('div')
    card.classList.add('card', 'rotate', 'hour-color')
    let date = document.createElement('h3')
    date.classList.add('upper', 'big')
    date.innerHTML = item.dt

    let img = document.createElement('img')
    img.classList.add('card-img')
    img.src = (0,_support_func__WEBPACK_IMPORTED_MODULE_0__.imageManager)(item.main)
    let weather = document.createElement('p')
    weather.innerHTML = item.fore

    let temp = document.createElement('div')
    temp.classList.add('card-temp')
    let min = document.createElement('p')
    min.innerHTML = `min ${item.min}°`
    let max = document.createElement('p')
    max.innerHTML = `max ${item.max}°`
    temp.appendChild(min)
    temp.appendChild(max)

    card.appendChild(date)
    card.appendChild(img)
    card.appendChild(weather)
    card.appendChild(temp)
    
    cardBox.append(card)
  })
  return cardBox
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forecastCards);


/***/ }),

/***/ "./src/forecast/forecast.js":
/*!**********************************!*\
  !*** ./src/forecast/forecast.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forecast_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.css */ "./src/forecast/forecast.css");
/* harmony import */ var _forecast_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast-cards */ "./src/forecast/forecast-cards.js");



function forecast (data) {
  //title
  const title = document.createElement('p')
  title.id = 'card-title'
  title.classList.add('upper')
  title.innerHTML = 'next<br><span class="bold big">5 days<span>'

  const titleCard = document.createElement('div')
  titleCard.classList.add('card', 'title-card')
  titleCard.appendChild(title)

  //cards
  const cardBox = (0,_forecast_cards__WEBPACK_IMPORTED_MODULE_1__["default"])(data)

  //container
  const forecast = document.createElement('div')
  forecast.id = 'forecast'
  forecast.appendChild(titleCard)
  forecast.appendChild(cardBox)

  return forecast
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forecast);

/***/ }),

/***/ "./src/main/main-info.js":
/*!*******************************!*\
  !*** ./src/main/main-info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _support_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../support-func */ "./src/support-func.js");


function mainInfo (data) {
  //now
  let weatherNowImg = document.createElement('img')
  weatherNowImg.id = 'weather-now-img'
  weatherNowImg.src = (0,_support_func__WEBPACK_IMPORTED_MODULE_0__.imageManager)(data.main, data.dt)
  let weatherNowTxt = document.createElement('h2')
  weatherNowTxt.classList.add('upper')
  weatherNowTxt.innerHTML = data.descr

  const weatherNow = document.createElement('div')
  weatherNow.id = 'weather-now'
  weatherNow.appendChild(weatherNowImg)
  weatherNow.appendChild(weatherNowTxt)

  //more
  const temp = document.createElement('div')
  temp.classList.add('weather-more')
  let tempImg = document.createElement('img')
  tempImg.classList.add('weather-more-img')
  tempImg.src = (0,_support_func__WEBPACK_IMPORTED_MODULE_0__.imageManager)('temp', data.dt)
  let tempTxt = document.createElement('p')
  tempTxt.innerHTML = `${data.temp}° C`
  temp.appendChild(tempImg)
  temp.appendChild(tempTxt)

  const humi = document.createElement('div')
  humi.classList.add('weather-more')
  let humiImg = document.createElement('img')
  humiImg.classList.add('weather-more-img')
  humiImg.src = (0,_support_func__WEBPACK_IMPORTED_MODULE_0__.imageManager)('humi')
  let humiTxt = document.createElement('p')
  humiTxt.innerHTML = `${data.humi}%`
  humi.appendChild(humiImg)
  humi.appendChild(humiTxt)

  const wind = document.createElement('div')
  wind.classList.add('weather-more')
  let windImg = document.createElement('img')
  windImg.classList.add('weather-more-img')
  windImg.src = (0,_support_func__WEBPACK_IMPORTED_MODULE_0__.imageManager)('wind')
  let windTxt = document.createElement('p')
  windTxt.innerHTML = `${data.wind} m/s`
  wind.appendChild(windImg)
  wind.appendChild(windTxt)

  const weatherMore = document.createElement('div')
  weatherMore.appendChild(temp)
  weatherMore.appendChild(humi)
  weatherMore.appendChild(wind)

  //box
  const info =  document.createElement('div')
  info.id = 'info'
  info.appendChild(weatherNow)
  info.appendChild(weatherMore)

  return info
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainInfo);


/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main/main.css");
/* harmony import */ var _main_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-info */ "./src/main/main-info.js");
/* harmony import */ var _support_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support-func */ "./src/support-func.js");




const fullDate = (0,_support_func__WEBPACK_IMPORTED_MODULE_2__.getDate)()

function main (data) {
  //title
  let date = document.createElement('h1')
  date.classList.add('upper')
  date.innerHTML = fullDate.titleDate
  let dayTime = document.createElement('h3')
  dayTime.id = 'title-day-time'
  dayTime.innerHTML = `${data.name}, ${fullDate.weekday} UTC ${(0,_support_func__WEBPACK_IMPORTED_MODULE_2__.unixToDateTime)(data.dt)}`
  
  const title = document.createElement('div')
  title.appendChild(date)
  title.appendChild(dayTime)

  //info
  let info = (0,_main_info__WEBPACK_IMPORTED_MODULE_1__["default"])(data)

  //sub-container
  const today = document.createElement('div')
  today.id = 'today'
  today.classList.add('hour-color')
  today.appendChild(title)
  today.appendChild(info)

  //container
  const main = document.createElement('div')
  main.id = 'main'
  main.appendChild(today)

  return main
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ "./src/support-func.js":
/*!*****************************!*\
  !*** ./src/support-func.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "imageManager": () => (/* binding */ imageManager),
/* harmony export */   "makeData": () => (/* binding */ makeData),
/* harmony export */   "makeDataList": () => (/* binding */ makeDataList),
/* harmony export */   "styler": () => (/* binding */ styler),
/* harmony export */   "unixToDateTime": () => (/* binding */ unixToDateTime)
/* harmony export */ });
/* harmony import */ var _img_clear_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clear.webp */ "./src/img/clear.webp");
/* harmony import */ var _img_clear_moon_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/clear-moon.webp */ "./src/img/clear-moon.webp");
/* harmony import */ var _img_broken_clouds_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/broken clouds.webp */ "./src/img/broken clouds.webp");
/* harmony import */ var _img_rain_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/rain.webp */ "./src/img/rain.webp");
/* harmony import */ var _img_thunderstorm_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/thunderstorm.webp */ "./src/img/thunderstorm.webp");
/* harmony import */ var _img_snow_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/snow.webp */ "./src/img/snow.webp");
/* harmony import */ var _img_mist_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/mist.webp */ "./src/img/mist.webp");
/* harmony import */ var _img_humidity_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/humidity.webp */ "./src/img/humidity.webp");
/* harmony import */ var _img_temp_day_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/temp-day.webp */ "./src/img/temp-day.webp");
/* harmony import */ var _img_temp_night_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/temp-night.webp */ "./src/img/temp-night.webp");
/* harmony import */ var _img_wind_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/wind.webp */ "./src/img/wind.webp");
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function makeData (x) {
  let data = {}
  data.main = x.weather[0].main.toLowerCase()
  data.descr = x.weather[0].description
  data.temp = (x.main.temp - 273.15).toFixed(2)
  data.humi = x.main.humidity
  data.wind = x.wind.speed
  data.name = x.name
  data.dt = x.dt
  return data
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function cleanDataList (j) { //function for makeDataList() - see below
  let dataList = []
  let date = ''
  let item = {}
  for (let i = 0; i < j.length; i++) {
    let curr = j[i]
    let currDate = curr.dt.slice(0, 10)
    if ( currDate === date ) {
      if (item.min > curr.temp) item.min = curr.temp
      if (item.max < curr.temp) item.max = curr.temp
    } else if ( isEmpty(item) ) { //first
      item = {
        'dt' : `${currDate.slice(8, 10)} ${months[parseInt(currDate.slice(5, 7)-1)]}`,
        'min' : curr.temp,
        'max' : curr.temp,
        'fore' : curr.fore,
        'main' : curr.main.toLowerCase()
      }
      date = currDate
    } else {
      dataList.push(item)
      item = {
        'dt' : `${currDate.slice(8, 10)} ${months[parseInt(currDate.slice(5, 7)-1)]}`,
        'min' : curr.temp,
        'max' : curr.temp,
        'fore' : curr.fore,
        'main' : curr.main.toLowerCase()
      }
      date = currDate
    }
  }
  return dataList
}

function makeDataList (y) {
  let arr = []
  for (let i = 0; i < y.length; i++) {
    let item = {
      'dt' : y[i].dt_txt,
      'temp' : Math.round(y[i].main.temp - 273.15),
      'fore' : y[i].weather[0].description,
      'main' : y[i].weather[0].main
    }
    arr.push(item)
  }
  const dataList = cleanDataList(arr)
  return dataList
}

function getDate () {
  const date = new Date()

  let dayNum = date.getDate()
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  
  return {
    "titleDate" : dayNum + " " + month + " " + year,
    "weekday" : weekday[date.getDay()]
  }
}

function unixToDateTime (unix) {
  let date = new Date(unix * 1000)
  let hours = date.getHours()
  let minutes = "0" + date.getMinutes()
  return hours + ':' + minutes.slice(-2)
}

function unixToHours (unix) {
  let date = new Date(unix * 1000)
  return date.getHours()
}













function imageManager (descr, dt) {
  const hour = unixToHours(dt)
  switch (descr) {
    case 'humi': return _img_humidity_webp__WEBPACK_IMPORTED_MODULE_7__
    case 'temp': if (hour >= 21 || hour < 8) return _img_temp_night_webp__WEBPACK_IMPORTED_MODULE_9__
      return _img_temp_day_webp__WEBPACK_IMPORTED_MODULE_8__
    case 'wind': return _img_wind_webp__WEBPACK_IMPORTED_MODULE_10__
    case 'clear':  if (hour >= 21 || hour < 8) return _img_clear_moon_webp__WEBPACK_IMPORTED_MODULE_1__
      return _img_clear_webp__WEBPACK_IMPORTED_MODULE_0__
    case 'clouds': return _img_broken_clouds_webp__WEBPACK_IMPORTED_MODULE_2__
    case 'rain' || 0: return _img_rain_webp__WEBPACK_IMPORTED_MODULE_3__
    case 'thunderstorm': return _img_thunderstorm_webp__WEBPACK_IMPORTED_MODULE_4__
    case 'snow': return _img_snow_webp__WEBPACK_IMPORTED_MODULE_5__
    default: return _img_mist_webp__WEBPACK_IMPORTED_MODULE_6__
  }
}

const morning = 'linear-gradient(0deg, rgba(201,192,215,1) 0%, rgba(249,223,222,1) 7%, rgba(249,235,236,1) 13%, rgba(213,225,237,1) 39%, rgba(167,194,223,1) 66%, rgba(91,144,191,1) 100%)'
const day = 'linear-gradient(315deg, rgba(65,196,221,1) 0%, rgba(33,190,246,1) 50%, rgba(100,168,227,1) 100%)'
const evening = 'linear-gradient(0deg, rgba(151,131,132,1) 0%, rgba(201,164,148,1) 6%, rgba(194,178,165,1) 15%, rgba(167,181,184,1) 29%, rgba(85,138,190,1) 61%, rgba(33,65,141,1) 100%)'
const night = 'linear-gradient(0deg, rgba(120,139,145,1) 0%, rgba(55,133,145,1) 18%, rgba(48,78,85,1) 60%, rgba(52,50,49,1) 100%)'
const morningColor = 'rgb(46, 23, 69, 0.4)'
const dayColor = 'rgb(23, 45,79, 0.4)'
const eveningColor = 'rgb(79, 28, 23, 0.4)'
const nightColor = 'rgb(7, 25, 20, 0.4)'

function styler (dt) {
  const hour = unixToHours(dt)
  let design = {}
  let morningCard = '' // white has low readability
  if (hour >= 22 || hour < 5) {
    design.bg = night
    design.color = nightColor
  } else if (hour >= 6 && hour < 10) {
    design.bg = morning
    design.color = morningColor
    morningCard = `#card-title { color: ${design.color}; }`
  } else if (hour >= 10 && hour < 17) {
    design.bg = day
    design.color = dayColor
  } else {
    design.bg = evening
    design.color = eveningColor
  }
  let style = document.createElement('style')
  style.innerText = `
  #container { background: #e9eef0; background: ${design.bg}; } 
  .hour-color { background-color: ${design.color}; } 
  ${morningCard}
  #card-box { scrollbar-color: ${design.color} rgb(255, 255, 255, 0);}
  #card-box::-webkit-scrollbar-track { box-shadow: inset 1px 1px 5px ${design.color}; }
  #card-box::-webkit-scrollbar-thumb { background: ${design.color}; }
  `
  document.head.appendChild(style)
}

function handleError(city) {
  const answer = document.createElement('h1')
  answer.id = 'answer-error'
  answer.innerHTML = `"${city}" isn't in the database, try another city!`
  return answer
}




/***/ }),

/***/ "./src/img/broken clouds.webp":
/*!************************************!*\
  !*** ./src/img/broken clouds.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76ce31c14072ad5469f6.webp";

/***/ }),

/***/ "./src/img/clear-moon.webp":
/*!*********************************!*\
  !*** ./src/img/clear-moon.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49d7345acbf0e1b7e49a.webp";

/***/ }),

/***/ "./src/img/clear.webp":
/*!****************************!*\
  !*** ./src/img/clear.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2de5bc84d740cf5168a.webp";

/***/ }),

/***/ "./src/img/humidity.webp":
/*!*******************************!*\
  !*** ./src/img/humidity.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be5a248e59cdbb4f5293.webp";

/***/ }),

/***/ "./src/img/mist.webp":
/*!***************************!*\
  !*** ./src/img/mist.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bbf4cb5f91ea27f0777.webp";

/***/ }),

/***/ "./src/img/rain.webp":
/*!***************************!*\
  !*** ./src/img/rain.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87f3f69b7603cbedcdc3.webp";

/***/ }),

/***/ "./src/img/search.webp":
/*!*****************************!*\
  !*** ./src/img/search.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7af82462b28c4869658d.webp";

/***/ }),

/***/ "./src/img/snow.webp":
/*!***************************!*\
  !*** ./src/img/snow.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a98d4e63ddf5c73976d.webp";

/***/ }),

/***/ "./src/img/temp-day.webp":
/*!*******************************!*\
  !*** ./src/img/temp-day.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "458a74829d51dff2e8ec.webp";

/***/ }),

/***/ "./src/img/temp-night.webp":
/*!*********************************!*\
  !*** ./src/img/temp-night.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a83f3236d415b4a44a2.webp";

/***/ }),

/***/ "./src/img/thunderstorm.webp":
/*!***********************************!*\
  !*** ./src/img/thunderstorm.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47fdd30f1d5af4a2eb69.webp";

/***/ }),

/***/ "./src/img/wind.webp":
/*!***************************!*\
  !*** ./src/img/wind.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "662e76a751b8f06ab243.webp";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _img_search_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/search.webp */ "./src/img/search.webp");




const input = document.createElement('input')
input.id = 'search-input'
input.type = 'text'
input.required = true
input.placeholder = 'Amsterdam'

const searchImg = document.createElement('img')
searchImg.id = 'search-image'
searchImg.src = _img_search_webp__WEBPACK_IMPORTED_MODULE_2__

const searchBox = document.createElement('div')
searchBox.id = 'search-box'
searchBox.appendChild(input)
searchBox.appendChild(searchImg)

searchImg.addEventListener('click', () => {
  if (input.validity.valueMissing) {
    const alert = document.createElement('p')
    alert.id = 'alert'
    alert.innerHTML = 'please choose a city'
    document.body.appendChild(alert)
  } else {
    document.body.innerHTML = ''
    document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_1__["default"])(input.value))
    input.value = ''
    document.body.appendChild(searchBox)
  }
})

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchImg.click();
  }
});

document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_1__["default"])('berlin'))
document.body.appendChild(searchBox)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmb0I7QUFDZTtBQUNPOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQVU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QixzREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBCQUEwQixzREFBUztBQUNuQyxvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3M/OTIyZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi9tYWluLmNzcz9kYTE4Iiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2ZvcmVjYXN0L2ZvcmVjYXN0LWNhcmRzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi9tYWluLWluZm8uanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvc3VwcG9ydC1mdW5jLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBnYXAgOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2NhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNjYXJkLWJveCB7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIHRvcCBzY3JvbGxiYXIgICovXFxufVxcblxcbi8qIHdpZHRoICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLmNhcmQgPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtdGVtcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCksIChtYXgtaGVpZ2h0OiA1NjBweCkge1xcbiAgI2ZvcmVjYXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICB9XFxuXFxuICAudGl0bGUtY2FyZCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgfVxcblxcbiAgI2NhcmQtYm94IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnJvdGF0ZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTsgLyogcmVtb3ZlIGRlc2t0b3Agcm90YXRpb24gICovXFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUUsbUJBQW1CO0FBQ3ZDOztBQUVBLFVBQVU7QUFDVjtFQUNFLFlBQVk7QUFDZDs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxpREFBaUQ7RUFDakQsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCLEVBQUUsbUJBQW1CO0FBQ2pEOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHdCQUF3QixFQUFFLDZCQUE2QjtFQUN6RDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNmb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZ2FwIDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNjYXJkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jY2FyZC1ib3gge1xcbiAgaGVpZ2h0OiAyNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxuICBvdmVyZmxvdy14OiBhdXRvOyAvKiB0b3Agc2Nyb2xsYmFyICAqL1xcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbiNjYXJkLWJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbiNjYXJkLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbiNjYXJkLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7IC8qIHRvcCBzY3JvbGxiYXIgICovXFxufVxcblxcbi5jYXJkLWltZyB7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XFxufVxcblxcbi5jYXJkID4gcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLXRlbXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpLCAobWF4LWhlaWdodDogNTYwcHgpIHtcXG4gICNmb3JlY2FzdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgfVxcblxcbiAgLnRpdGxlLWNhcmQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIH1cXG5cXG4gICNjYXJkLWJveCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5yb3RhdGUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7IC8qIHJlbW92ZSBkZXNrdG9wIHJvdGF0aW9uICAqL1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbiB7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0b2RheSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDN2aDtcXG4gIGJvcmRlci1yYWRpdXM6MCAwIDE1cHggMTVweDtcXG59XFxuXFxuI3RpdGxlLWRheS10aW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNpbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbiN3ZWF0aGVyLW5vdyB7XFxuICAvKiBtYXgtd2lkdGg6IDIwMHB4OyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLW1vcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdmg7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcblxcbi53ZWF0aGVyLW1vcmUtaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTgwcHgpIHtcXG4gICN3ZWF0aGVyLW5vdy1pbWcge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxuXFxuICAud2VhdGhlci1tb3JlLWltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpLCAobWF4LWhlaWdodDogNTYwcHgpIHtcXG4gICNtYWluIHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG5cXG4gICN0b2RheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgI3RpdGxlLWRheS10aW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgI2luZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLndlYXRoZXItbW9yZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNtYWluIHtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RvZGF5IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNTB2dztcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3ZoO1xcbiAgYm9yZGVyLXJhZGl1czowIDAgMTVweCAxNXB4O1xcbn1cXG5cXG4jdGl0bGUtZGF5LXRpbWUge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuI3dlYXRoZXItbm93IHtcXG4gIC8qIG1heC13aWR0aDogMjAwcHg7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItbW9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDF2aDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuLndlYXRoZXItbW9yZS1pbWcge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1ODBweCkge1xcbiAgI3dlYXRoZXItbm93LWltZyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLW1vcmUtaW1nIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCksIChtYXgtaGVpZ2h0OiA1NjBweCkge1xcbiAgI21haW4ge1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgfVxcblxcbiAgI3RvZGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAjdGl0bGUtZGF5LXRpbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjaW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAud2VhdGhlci1tb3JlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuaHRtbCB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJpZyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnVwcGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2VhcmNoLWJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoLWltYWdlIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuI3NlYXJjaC1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbiNhbGVydCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICByaWdodDogNTBweDtcXG59XFxuXFxuI2Fuc3dlci1lcnJvciB7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21vYmlsZS1ib3gge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMTkwLCAyNDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNtb2JpbGUtYm94ID4gaDIge1xcbiAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSwgKG1heC1oZWlnaHQ6IDU2MHB4KSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjc2VhcmNoLWJveCB7XFxuICAgIHJpZ2h0OiA2dnc7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGlEQUFpRDtFQUNqRCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDViw0Q0FBNEM7QUFDOUM7O0FBRUEsNkJBQTZCLHlDQUF5QztFQUNwRSwrQkFBK0I7RUFDL0IsVUFBVSxFQUFFLFlBQVk7QUFDMUI7O0FBRUEsc0NBQXNDLDRCQUE0QjtFQUNoRSwrQkFBK0I7QUFDakM7O0FBRUEsdUNBQXVDLG1CQUFtQjtFQUN4RCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5iaWcge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51cHBlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1pbWFnZSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4jYWxlcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgcmlnaHQ6IDUwcHg7XFxufVxcblxcbiNhbnN3ZXItZXJyb3Ige1xcbiAgbWFyZ2luLXRvcDogMjB2aDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNtb2JpbGUtYm94IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDE5MCwgMjQ2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbW9iaWxlLWJveCA+IGgyIHtcXG4gIG1heC13aWR0aDogNzB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCksIChtYXgtaGVpZ2h0OiA1NjBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3NlYXJjaC1ib3gge1xcbiAgICByaWdodDogNnZ3O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvcmVjYXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yZWNhc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFpbiBmcm9tICcuL21haW4vbWFpbi5qcydcbmltcG9ydCBmb3JlY2FzdCBmcm9tICcuL2ZvcmVjYXN0L2ZvcmVjYXN0LmpzJ1xuaW1wb3J0IHsgaGFuZGxlRXJyb3IsIG1ha2VEYXRhLCBtYWtlRGF0YUxpc3QsIHN0eWxlciB9IGZyb20gJy4vc3VwcG9ydC1mdW5jJ1xuXG5mdW5jdGlvbiBjb21wb25lbnQgKGNpdHkpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcblxuICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTE0NzcyZDIxMDBjMGYxZTAyMzE1NTYyZTQ2YzFiYTZmYCwgeyBtb2RlIDogJ2NvcnMnIH0pXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBsZXQgeCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgICAgbGV0IGRhdGEgPSBtYWtlRGF0YSh4KVxuXG4gICAgICBzdHlsZXIoZGF0YS5kdClcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKGRhdGEpKVxuICAgIH0pXG4gIH0pXG4gIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhhbmRsZUVycm9yKGNpdHkpKVxuICB9KVxuXG4gIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JmFwcGlkPTE0NzcyZDIxMDBjMGYxZTAyMzE1NTYyZTQ2YzFiYTZmYCwgeyBtb2RlIDogJ2NvcnMnIH0pXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBsZXQgeSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgICAgeSA9IHkubGlzdFxuICAgICAgbGV0IGRhdGFMaXN0ID0gbWFrZURhdGFMaXN0KHkpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdChkYXRhTGlzdCkpXG4gICAgfSlcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfSlcblxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCIsImltcG9ydCB7IGltYWdlTWFuYWdlciB9IGZyb20gJy4uL3N1cHBvcnQtZnVuYydcblxuZnVuY3Rpb24gZm9yZWNhc3RDYXJkcyAoZGF0YSkge1xuICBjb25zdCBjYXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2FyZEJveC5pZCA9ICdjYXJkLWJveCdcbiAgY2FyZEJveC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKVxuXG4gIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdyb3RhdGUnLCAnaG91ci1jb2xvcicpXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd1cHBlcicsICdiaWcnKVxuICAgIGRhdGUuaW5uZXJIVE1MID0gaXRlbS5kdFxuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJylcbiAgICBpbWcuc3JjID0gaW1hZ2VNYW5hZ2VyKGl0ZW0ubWFpbilcbiAgICBsZXQgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gaXRlbS5mb3JlXG5cbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRlbXAnKVxuICAgIGxldCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtaW4uaW5uZXJIVE1MID0gYG1pbiAke2l0ZW0ubWlufcKwYFxuICAgIGxldCBtYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtYXguaW5uZXJIVE1MID0gYG1heCAke2l0ZW0ubWF4fcKwYFxuICAgIHRlbXAuYXBwZW5kQ2hpbGQobWluKVxuICAgIHRlbXAuYXBwZW5kQ2hpbGQobWF4KVxuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXApXG4gICAgXG4gICAgY2FyZEJveC5hcHBlbmQoY2FyZClcbiAgfSlcbiAgcmV0dXJuIGNhcmRCb3hcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yZWNhc3RDYXJkc1xuIiwiaW1wb3J0ICcuL2ZvcmVjYXN0LmNzcydcbmltcG9ydCBmb3JlY2FzdENhcmRzIGZyb20gJy4vZm9yZWNhc3QtY2FyZHMnXG5cbmZ1bmN0aW9uIGZvcmVjYXN0IChkYXRhKSB7XG4gIC8vdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGl0bGUuaWQgPSAnY2FyZC10aXRsZSdcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndXBwZXInKVxuICB0aXRsZS5pbm5lckhUTUwgPSAnbmV4dDxicj48c3BhbiBjbGFzcz1cImJvbGQgYmlnXCI+NSBkYXlzPHNwYW4+J1xuXG4gIGNvbnN0IHRpdGxlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ3RpdGxlLWNhcmQnKVxuICB0aXRsZUNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpXG5cbiAgLy9jYXJkc1xuICBjb25zdCBjYXJkQm94ID0gZm9yZWNhc3RDYXJkcyhkYXRhKVxuXG4gIC8vY29udGFpbmVyXG4gIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZm9yZWNhc3QuaWQgPSAnZm9yZWNhc3QnXG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKHRpdGxlQ2FyZClcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoY2FyZEJveClcblxuICByZXR1cm4gZm9yZWNhc3Rcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yZWNhc3QiLCJpbXBvcnQgeyBpbWFnZU1hbmFnZXIgfSBmcm9tICcuLi9zdXBwb3J0LWZ1bmMnXG5cbmZ1bmN0aW9uIG1haW5JbmZvIChkYXRhKSB7XG4gIC8vbm93XG4gIGxldCB3ZWF0aGVyTm93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgd2VhdGhlck5vd0ltZy5pZCA9ICd3ZWF0aGVyLW5vdy1pbWcnXG4gIHdlYXRoZXJOb3dJbWcuc3JjID0gaW1hZ2VNYW5hZ2VyKGRhdGEubWFpbiwgZGF0YS5kdClcbiAgbGV0IHdlYXRoZXJOb3dUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHdlYXRoZXJOb3dUeHQuY2xhc3NMaXN0LmFkZCgndXBwZXInKVxuICB3ZWF0aGVyTm93VHh0LmlubmVySFRNTCA9IGRhdGEuZGVzY3JcblxuICBjb25zdCB3ZWF0aGVyTm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd2VhdGhlck5vdy5pZCA9ICd3ZWF0aGVyLW5vdydcbiAgd2VhdGhlck5vdy5hcHBlbmRDaGlsZCh3ZWF0aGVyTm93SW1nKVxuICB3ZWF0aGVyTm93LmFwcGVuZENoaWxkKHdlYXRoZXJOb3dUeHQpXG5cbiAgLy9tb3JlXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZScpXG4gIGxldCB0ZW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgdGVtcEltZy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUtaW1nJylcbiAgdGVtcEltZy5zcmMgPSBpbWFnZU1hbmFnZXIoJ3RlbXAnLCBkYXRhLmR0KVxuICBsZXQgdGVtcFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICB0ZW1wVHh0LmlubmVySFRNTCA9IGAke2RhdGEudGVtcH3CsCBDYFxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBJbWcpXG4gIHRlbXAuYXBwZW5kQ2hpbGQodGVtcFR4dClcblxuICBjb25zdCBodW1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaHVtaS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUnKVxuICBsZXQgaHVtaUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGh1bWlJbWcuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlLWltZycpXG4gIGh1bWlJbWcuc3JjID0gaW1hZ2VNYW5hZ2VyKCdodW1pJylcbiAgbGV0IGh1bWlUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgaHVtaVR4dC5pbm5lckhUTUwgPSBgJHtkYXRhLmh1bWl9JWBcbiAgaHVtaS5hcHBlbmRDaGlsZChodW1pSW1nKVxuICBodW1pLmFwcGVuZENoaWxkKGh1bWlUeHQpXG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdpbmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlJylcbiAgbGV0IHdpbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB3aW5kSW1nLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZS1pbWcnKVxuICB3aW5kSW1nLnNyYyA9IGltYWdlTWFuYWdlcignd2luZCcpXG4gIGxldCB3aW5kVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHdpbmRUeHQuaW5uZXJIVE1MID0gYCR7ZGF0YS53aW5kfSBtL3NgXG4gIHdpbmQuYXBwZW5kQ2hpbGQod2luZEltZylcbiAgd2luZC5hcHBlbmRDaGlsZCh3aW5kVHh0KVxuXG4gIGNvbnN0IHdlYXRoZXJNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd2VhdGhlck1vcmUuYXBwZW5kQ2hpbGQodGVtcClcbiAgd2VhdGhlck1vcmUuYXBwZW5kQ2hpbGQoaHVtaSlcbiAgd2VhdGhlck1vcmUuYXBwZW5kQ2hpbGQod2luZClcblxuICAvL2JveFxuICBjb25zdCBpbmZvID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGluZm8uaWQgPSAnaW5mbydcbiAgaW5mby5hcHBlbmRDaGlsZCh3ZWF0aGVyTm93KVxuICBpbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJNb3JlKVxuXG4gIHJldHVybiBpbmZvXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5JbmZvXG4iLCJpbXBvcnQgJy4vbWFpbi5jc3MnXG5pbXBvcnQgbWFpbkluZm8gZnJvbSAnLi9tYWluLWluZm8nXG5pbXBvcnQgeyBnZXREYXRlLCB1bml4VG9EYXRlVGltZSB9IGZyb20gJy4uL3N1cHBvcnQtZnVuYydcblxuY29uc3QgZnVsbERhdGUgPSBnZXREYXRlKClcblxuZnVuY3Rpb24gbWFpbiAoZGF0YSkge1xuICAvL3RpdGxlXG4gIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3VwcGVyJylcbiAgZGF0ZS5pbm5lckhUTUwgPSBmdWxsRGF0ZS50aXRsZURhdGVcbiAgbGV0IGRheVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGRheVRpbWUuaWQgPSAndGl0bGUtZGF5LXRpbWUnXG4gIGRheVRpbWUuaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfSwgJHtmdWxsRGF0ZS53ZWVrZGF5fSBVVEMgJHt1bml4VG9EYXRlVGltZShkYXRhLmR0KX1gXG4gIFxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlLmFwcGVuZENoaWxkKGRhdGUpXG4gIHRpdGxlLmFwcGVuZENoaWxkKGRheVRpbWUpXG5cbiAgLy9pbmZvXG4gIGxldCBpbmZvID0gbWFpbkluZm8oZGF0YSlcblxuICAvL3N1Yi1jb250YWluZXJcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0b2RheS5pZCA9ICd0b2RheSdcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnaG91ci1jb2xvcicpXG4gIHRvZGF5LmFwcGVuZENoaWxkKHRpdGxlKVxuICB0b2RheS5hcHBlbmRDaGlsZChpbmZvKVxuXG4gIC8vY29udGFpbmVyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLmlkID0gJ21haW4nXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kYXkpXG5cbiAgcmV0dXJuIG1haW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpblxuIiwiY29uc3Qgd2Vla2RheSA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxuY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cblxuZnVuY3Rpb24gbWFrZURhdGEgKHgpIHtcbiAgbGV0IGRhdGEgPSB7fVxuICBkYXRhLm1haW4gPSB4LndlYXRoZXJbMF0ubWFpbi50b0xvd2VyQ2FzZSgpXG4gIGRhdGEuZGVzY3IgPSB4LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgZGF0YS50ZW1wID0gKHgubWFpbi50ZW1wIC0gMjczLjE1KS50b0ZpeGVkKDIpXG4gIGRhdGEuaHVtaSA9IHgubWFpbi5odW1pZGl0eVxuICBkYXRhLndpbmQgPSB4LndpbmQuc3BlZWRcbiAgZGF0YS5uYW1lID0geC5uYW1lXG4gIGRhdGEuZHQgPSB4LmR0XG4gIHJldHVybiBkYXRhXG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gY2xlYW5EYXRhTGlzdCAoaikgeyAvL2Z1bmN0aW9uIGZvciBtYWtlRGF0YUxpc3QoKSAtIHNlZSBiZWxvd1xuICBsZXQgZGF0YUxpc3QgPSBbXVxuICBsZXQgZGF0ZSA9ICcnXG4gIGxldCBpdGVtID0ge31cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBqLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGN1cnIgPSBqW2ldXG4gICAgbGV0IGN1cnJEYXRlID0gY3Vyci5kdC5zbGljZSgwLCAxMClcbiAgICBpZiAoIGN1cnJEYXRlID09PSBkYXRlICkge1xuICAgICAgaWYgKGl0ZW0ubWluID4gY3Vyci50ZW1wKSBpdGVtLm1pbiA9IGN1cnIudGVtcFxuICAgICAgaWYgKGl0ZW0ubWF4IDwgY3Vyci50ZW1wKSBpdGVtLm1heCA9IGN1cnIudGVtcFxuICAgIH0gZWxzZSBpZiAoIGlzRW1wdHkoaXRlbSkgKSB7IC8vZmlyc3RcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgICdkdCcgOiBgJHtjdXJyRGF0ZS5zbGljZSg4LCAxMCl9ICR7bW9udGhzW3BhcnNlSW50KGN1cnJEYXRlLnNsaWNlKDUsIDcpLTEpXX1gLFxuICAgICAgICAnbWluJyA6IGN1cnIudGVtcCxcbiAgICAgICAgJ21heCcgOiBjdXJyLnRlbXAsXG4gICAgICAgICdmb3JlJyA6IGN1cnIuZm9yZSxcbiAgICAgICAgJ21haW4nIDogY3Vyci5tYWluLnRvTG93ZXJDYXNlKClcbiAgICAgIH1cbiAgICAgIGRhdGUgPSBjdXJyRGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhTGlzdC5wdXNoKGl0ZW0pXG4gICAgICBpdGVtID0ge1xuICAgICAgICAnZHQnIDogYCR7Y3VyckRhdGUuc2xpY2UoOCwgMTApfSAke21vbnRoc1twYXJzZUludChjdXJyRGF0ZS5zbGljZSg1LCA3KS0xKV19YCxcbiAgICAgICAgJ21pbicgOiBjdXJyLnRlbXAsXG4gICAgICAgICdtYXgnIDogY3Vyci50ZW1wLFxuICAgICAgICAnZm9yZScgOiBjdXJyLmZvcmUsXG4gICAgICAgICdtYWluJyA6IGN1cnIubWFpbi50b0xvd2VyQ2FzZSgpXG4gICAgICB9XG4gICAgICBkYXRlID0gY3VyckRhdGVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGFMaXN0XG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhTGlzdCAoeSkge1xuICBsZXQgYXJyID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSB7XG4gICAgICAnZHQnIDogeVtpXS5kdF90eHQsXG4gICAgICAndGVtcCcgOiBNYXRoLnJvdW5kKHlbaV0ubWFpbi50ZW1wIC0gMjczLjE1KSxcbiAgICAgICdmb3JlJyA6IHlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICdtYWluJyA6IHlbaV0ud2VhdGhlclswXS5tYWluXG4gICAgfVxuICAgIGFyci5wdXNoKGl0ZW0pXG4gIH1cbiAgY29uc3QgZGF0YUxpc3QgPSBjbGVhbkRhdGFMaXN0KGFycilcbiAgcmV0dXJuIGRhdGFMaXN0XG59XG5cbmZ1bmN0aW9uIGdldERhdGUgKCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuXG4gIGxldCBkYXlOdW0gPSBkYXRlLmdldERhdGUoKVxuICBsZXQgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXVxuICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBcbiAgcmV0dXJuIHtcbiAgICBcInRpdGxlRGF0ZVwiIDogZGF5TnVtICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhcixcbiAgICBcIndlZWtkYXlcIiA6IHdlZWtkYXlbZGF0ZS5nZXREYXkoKV1cbiAgfVxufVxuXG5mdW5jdGlvbiB1bml4VG9EYXRlVGltZSAodW5peCkge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHVuaXggKiAxMDAwKVxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgbGV0IG1pbnV0ZXMgPSBcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpXG4gIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMuc2xpY2UoLTIpXG59XG5cbmZ1bmN0aW9uIHVuaXhUb0hvdXJzICh1bml4KSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodW5peCAqIDEwMDApXG4gIHJldHVybiBkYXRlLmdldEhvdXJzKClcbn1cblxuaW1wb3J0IGNsZWFyIGZyb20gJy4vaW1nL2NsZWFyLndlYnAnXG5pbXBvcnQgY2xlYXJNb29uIGZyb20gJy4vaW1nL2NsZWFyLW1vb24ud2VicCdcbmltcG9ydCBicm9rZW4gZnJvbSAnLi9pbWcvYnJva2VuIGNsb3Vkcy53ZWJwJ1xuaW1wb3J0IHJhaW4gZnJvbSAnLi9pbWcvcmFpbi53ZWJwJ1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tICcuL2ltZy90aHVuZGVyc3Rvcm0ud2VicCdcbmltcG9ydCBzbm93IGZyb20gJy4vaW1nL3Nub3cud2VicCdcbmltcG9ydCBtaXN0IGZyb20gJy4vaW1nL21pc3Qud2VicCdcbmltcG9ydCBodW1pIGZyb20gJy4vaW1nL2h1bWlkaXR5LndlYnAnXG5pbXBvcnQgdGVtcERheSBmcm9tICcuL2ltZy90ZW1wLWRheS53ZWJwJ1xuaW1wb3J0IHRlbXBOaWdodCBmcm9tICcuL2ltZy90ZW1wLW5pZ2h0LndlYnAnXG5pbXBvcnQgd2luZCBmcm9tICcuL2ltZy93aW5kLndlYnAnXG5cbmZ1bmN0aW9uIGltYWdlTWFuYWdlciAoZGVzY3IsIGR0KSB7XG4gIGNvbnN0IGhvdXIgPSB1bml4VG9Ib3VycyhkdClcbiAgc3dpdGNoIChkZXNjcikge1xuICAgIGNhc2UgJ2h1bWknOiByZXR1cm4gaHVtaVxuICAgIGNhc2UgJ3RlbXAnOiBpZiAoaG91ciA+PSAyMSB8fCBob3VyIDwgOCkgcmV0dXJuIHRlbXBOaWdodFxuICAgICAgcmV0dXJuIHRlbXBEYXlcbiAgICBjYXNlICd3aW5kJzogcmV0dXJuIHdpbmRcbiAgICBjYXNlICdjbGVhcic6ICBpZiAoaG91ciA+PSAyMSB8fCBob3VyIDwgOCkgcmV0dXJuIGNsZWFyTW9vblxuICAgICAgcmV0dXJuIGNsZWFyXG4gICAgY2FzZSAnY2xvdWRzJzogcmV0dXJuIGJyb2tlblxuICAgIGNhc2UgJ3JhaW4nIHx8ICdkcml6emxlJzogcmV0dXJuIHJhaW5cbiAgICBjYXNlICd0aHVuZGVyc3Rvcm0nOiByZXR1cm4gdGh1bmRlcnN0b3JtXG4gICAgY2FzZSAnc25vdyc6IHJldHVybiBzbm93XG4gICAgZGVmYXVsdDogcmV0dXJuIG1pc3RcbiAgfVxufVxuXG5jb25zdCBtb3JuaW5nID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIwMSwxOTIsMjE1LDEpIDAlLCByZ2JhKDI0OSwyMjMsMjIyLDEpIDclLCByZ2JhKDI0OSwyMzUsMjM2LDEpIDEzJSwgcmdiYSgyMTMsMjI1LDIzNywxKSAzOSUsIHJnYmEoMTY3LDE5NCwyMjMsMSkgNjYlLCByZ2JhKDkxLDE0NCwxOTEsMSkgMTAwJSknXG5jb25zdCBkYXkgPSAnbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg2NSwxOTYsMjIxLDEpIDAlLCByZ2JhKDMzLDE5MCwyNDYsMSkgNTAlLCByZ2JhKDEwMCwxNjgsMjI3LDEpIDEwMCUpJ1xuY29uc3QgZXZlbmluZyA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNTEsMTMxLDEzMiwxKSAwJSwgcmdiYSgyMDEsMTY0LDE0OCwxKSA2JSwgcmdiYSgxOTQsMTc4LDE2NSwxKSAxNSUsIHJnYmEoMTY3LDE4MSwxODQsMSkgMjklLCByZ2JhKDg1LDEzOCwxOTAsMSkgNjElLCByZ2JhKDMzLDY1LDE0MSwxKSAxMDAlKSdcbmNvbnN0IG5pZ2h0ID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCwxMzksMTQ1LDEpIDAlLCByZ2JhKDU1LDEzMywxNDUsMSkgMTglLCByZ2JhKDQ4LDc4LDg1LDEpIDYwJSwgcmdiYSg1Miw1MCw0OSwxKSAxMDAlKSdcbmNvbnN0IG1vcm5pbmdDb2xvciA9ICdyZ2IoNDYsIDIzLCA2OSwgMC40KSdcbmNvbnN0IGRheUNvbG9yID0gJ3JnYigyMywgNDUsNzksIDAuNCknXG5jb25zdCBldmVuaW5nQ29sb3IgPSAncmdiKDc5LCAyOCwgMjMsIDAuNCknXG5jb25zdCBuaWdodENvbG9yID0gJ3JnYig3LCAyNSwgMjAsIDAuNCknXG5cbmZ1bmN0aW9uIHN0eWxlciAoZHQpIHtcbiAgY29uc3QgaG91ciA9IHVuaXhUb0hvdXJzKGR0KVxuICBsZXQgZGVzaWduID0ge31cbiAgbGV0IG1vcm5pbmdDYXJkID0gJycgLy8gd2hpdGUgaGFzIGxvdyByZWFkYWJpbGl0eVxuICBpZiAoaG91ciA+PSAyMiB8fCBob3VyIDwgNSkge1xuICAgIGRlc2lnbi5iZyA9IG5pZ2h0XG4gICAgZGVzaWduLmNvbG9yID0gbmlnaHRDb2xvclxuICB9IGVsc2UgaWYgKGhvdXIgPj0gNiAmJiBob3VyIDwgMTApIHtcbiAgICBkZXNpZ24uYmcgPSBtb3JuaW5nXG4gICAgZGVzaWduLmNvbG9yID0gbW9ybmluZ0NvbG9yXG4gICAgbW9ybmluZ0NhcmQgPSBgI2NhcmQtdGl0bGUgeyBjb2xvcjogJHtkZXNpZ24uY29sb3J9OyB9YFxuICB9IGVsc2UgaWYgKGhvdXIgPj0gMTAgJiYgaG91ciA8IDE3KSB7XG4gICAgZGVzaWduLmJnID0gZGF5XG4gICAgZGVzaWduLmNvbG9yID0gZGF5Q29sb3JcbiAgfSBlbHNlIHtcbiAgICBkZXNpZ24uYmcgPSBldmVuaW5nXG4gICAgZGVzaWduLmNvbG9yID0gZXZlbmluZ0NvbG9yXG4gIH1cbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZS5pbm5lclRleHQgPSBgXG4gICNjb250YWluZXIgeyBiYWNrZ3JvdW5kOiAjZTllZWYwOyBiYWNrZ3JvdW5kOiAke2Rlc2lnbi5iZ307IH0gXG4gIC5ob3VyLWNvbG9yIHsgYmFja2dyb3VuZC1jb2xvcjogJHtkZXNpZ24uY29sb3J9OyB9IFxuICAke21vcm5pbmdDYXJkfVxuICAjY2FyZC1ib3ggeyBzY3JvbGxiYXItY29sb3I6ICR7ZGVzaWduLmNvbG9yfSByZ2IoMjU1LCAyNTUsIDI1NSwgMCk7fVxuICAjY2FyZC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggJHtkZXNpZ24uY29sb3J9OyB9XG4gICNjYXJkLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiAke2Rlc2lnbi5jb2xvcn07IH1cbiAgYFxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihjaXR5KSB7XG4gIGNvbnN0IGFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgYW5zd2VyLmlkID0gJ2Fuc3dlci1lcnJvcidcbiAgYW5zd2VyLmlubmVySFRNTCA9IGBcIiR7Y2l0eX1cIiBpc24ndCBpbiB0aGUgZGF0YWJhc2UsIHRyeSBhbm90aGVyIGNpdHkhYFxuICByZXR1cm4gYW5zd2VyXG59XG5cbmV4cG9ydCB7XG4gIG1ha2VEYXRhLFxuICBtYWtlRGF0YUxpc3QsXG4gIGdldERhdGUsXG4gIHVuaXhUb0RhdGVUaW1lLFxuICBpbWFnZU1hbmFnZXIsXG4gIHN0eWxlcixcbiAgaGFuZGxlRXJyb3Jcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltZy9zZWFyY2gud2VicCdcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dC5pZCA9ICdzZWFyY2gtaW5wdXQnXG5pbnB1dC50eXBlID0gJ3RleHQnXG5pbnB1dC5yZXF1aXJlZCA9IHRydWVcbmlucHV0LnBsYWNlaG9sZGVyID0gJ0Ftc3RlcmRhbSdcblxuY29uc3Qgc2VhcmNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnNlYXJjaEltZy5pZCA9ICdzZWFyY2gtaW1hZ2UnXG5zZWFyY2hJbWcuc3JjID0gc2VhcmNoSWNvblxuXG5jb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc2VhcmNoQm94LmlkID0gJ3NlYXJjaC1ib3gnXG5zZWFyY2hCb3guYXBwZW5kQ2hpbGQoaW5wdXQpXG5zZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKVxuXG5zZWFyY2hJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFsZXJ0LmlkID0gJ2FsZXJ0J1xuICAgIGFsZXJ0LmlubmVySFRNTCA9ICdwbGVhc2UgY2hvb3NlIGEgY2l0eSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFsZXJ0KVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJydcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudChpbnB1dC52YWx1ZSkpXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KVxuICB9XG59KVxuXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VhcmNoSW1nLmNsaWNrKCk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgnYmVybGluJykpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlYXJjaEJveCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=