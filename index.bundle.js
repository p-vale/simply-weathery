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
___CSS_LOADER_EXPORT___.push([module.id, "#forecast {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding-left: 20px;\n  gap : 20px;\n  margin-bottom: 10px;\n}\n\n#card-title {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n#card-box {\n  height: 240px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n#card-box::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n#card-box::-webkit-scrollbar-track {\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n}\n\n/* Handle */\n#card-box::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 200px;\n  width: 220px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-img {\n  max-width: 100px;\n  height: auto;\n  margin-bottom: -20px;\n}\n\n.card > p {\n  text-align: center;\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #forecast {\n    margin-bottom: 5vh;\n    padding-left: 0px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .title-card {\n    height: auto;\n    margin-top: 5vh;\n  }\n\n  #card-box {\n    height: 100%;\n    flex-direction: column;\n  }\n\n  .rotate {\n    transform: rotateX(0deg); /* remove desktop rotation  */\n  }\n}", "",{"version":3,"sources":["webpack://./src/forecast/forecast.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,gBAAgB,EAAE,mBAAmB;AACvC;;AAEA,UAAU;AACV;EACE,YAAY;AACd;;AAEA,UAAU;AACV;EACE,iDAAiD;EACjD,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,WAAW;EACX,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B,EAAE,mBAAmB;AACjD;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE;IACE,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,wBAAwB,EAAE,6BAA6B;EACzD;AACF","sourcesContent":["#forecast {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding-left: 20px;\n  gap : 20px;\n  margin-bottom: 10px;\n}\n\n#card-title {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n#card-box {\n  height: 240px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n#card-box::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n#card-box::-webkit-scrollbar-track {\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n}\n\n/* Handle */\n#card-box::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 200px;\n  width: 220px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-img {\n  max-width: 100px;\n  height: auto;\n  margin-bottom: -20px;\n}\n\n.card > p {\n  text-align: center;\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #forecast {\n    margin-bottom: 5vh;\n    padding-left: 0px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .title-card {\n    height: auto;\n    margin-top: 5vh;\n  }\n\n  #card-box {\n    height: 100%;\n    flex-direction: column;\n  }\n\n  .rotate {\n    transform: rotateX(0deg); /* remove desktop rotation  */\n  }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  padding: 10px;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3vh;\n  border-radius:0 0 15px 15px;\n}\n\n#title-day-time {\n  font-weight: 300;\n}\n\n#info {\n  display: flex;\n  gap: 40px;\n}\n\n#weather-now {\n  /* max-width: 200px; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1vh;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\n.weather-more-img {\n  height: 60px;\n  width: 60px;\n}\n\n@media screen and (max-height: 580px) {\n  #weather-now-img {\n    height: 100px;\n    width: 100px;\n  }\n\n  .weather-more-img {\n    height: 50px;\n    width: 50px;\n  }\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #main {\n    width: 90vw;\n    height: auto;\n  }\n\n  #today {\n    padding-top: 6vh;\n    width: 100%;\n    min-width: 0px;\n    height: 100%;\n  }\n\n  #title-day-time {\n    text-align: center;\n  }\n\n  #info {\n    flex-direction: column;\n  }\n\n  .weather-more {\n    padding-left: 20%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/main/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;IACE,aAAa;IACb,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;AACF;;AAEA;EACE;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  padding: 10px;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3vh;\n  border-radius:0 0 15px 15px;\n}\n\n#title-day-time {\n  font-weight: 300;\n}\n\n#info {\n  display: flex;\n  gap: 40px;\n}\n\n#weather-now {\n  /* max-width: 200px; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1vh;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\n.weather-more-img {\n  height: 60px;\n  width: 60px;\n}\n\n@media screen and (max-height: 580px) {\n  #weather-now-img {\n    height: 100px;\n    width: 100px;\n  }\n\n  .weather-more-img {\n    height: 50px;\n    width: 50px;\n  }\n}\n\n@media only screen and (max-width: 750px), (max-height: 560px) {\n  #main {\n    width: 90vw;\n    height: auto;\n  }\n\n  #today {\n    padding-top: 6vh;\n    width: 100%;\n    min-width: 0px;\n    height: 100%;\n  }\n\n  #title-day-time {\n    text-align: center;\n  }\n\n  #info {\n    flex-direction: column;\n  }\n\n  .weather-more {\n    padding-left: 20%;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmb0I7QUFDZTtBQUNPOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQVU7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QixzREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBCQUEwQixzREFBUztBQUNuQyxvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3M/OTIyZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi9tYWluLmNzcz9kYTE4Iiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2ZvcmVjYXN0L2ZvcmVjYXN0LWNhcmRzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi9tYWluLWluZm8uanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvc3VwcG9ydC1mdW5jLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBnYXAgOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2NhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNjYXJkLWJveCB7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIHRvcCBzY3JvbGxiYXIgICovXFxufVxcblxcbi8qIHdpZHRoICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLmNhcmQgPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtdGVtcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCksIChtYXgtaGVpZ2h0OiA1NjBweCkge1xcbiAgI2ZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50aXRsZS1jYXJkIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICB9XFxuXFxuICAjY2FyZC1ib3gge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpOyAvKiByZW1vdmUgZGVza3RvcCByb3RhdGlvbiAgKi9cXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZvcmVjYXN0L2ZvcmVjYXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0IsRUFBRSxtQkFBbUI7QUFDdkM7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFVBQVU7QUFDVjtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEIsRUFBRSxtQkFBbUI7QUFDakQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usd0JBQXdCLEVBQUUsNkJBQTZCO0VBQ3pEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBnYXAgOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2NhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNjYXJkLWJveCB7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIHRvcCBzY3JvbGxiYXIgICovXFxufVxcblxcbi8qIHdpZHRoICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjIwcHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLmNhcmQgPiBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQtdGVtcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCksIChtYXgtaGVpZ2h0OiA1NjBweCkge1xcbiAgI2ZvcmVjYXN0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC50aXRsZS1jYXJkIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICB9XFxuXFxuICAjY2FyZC1ib3gge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucm90YXRlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpOyAvKiByZW1vdmUgZGVza3RvcCByb3RhdGlvbiAgKi9cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW4ge1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzdmg7XFxuICBib3JkZXItcmFkaXVzOjAgMCAxNXB4IDE1cHg7XFxufVxcblxcbiN0aXRsZS1kYXktdGltZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jd2VhdGhlci1ub3cge1xcbiAgLyogbWF4LXdpZHRoOiAyMDBweDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXZoO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlLWltZyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDU4MHB4KSB7XFxuICAjd2VhdGhlci1ub3ctaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcblxcbiAgLndlYXRoZXItbW9yZS1pbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSwgKG1heC1oZWlnaHQ6IDU2MHB4KSB7XFxuICAjbWFpbiB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAjdG9kYXkge1xcbiAgICBwYWRkaW5nLXRvcDogNnZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICN0aXRsZS1kYXktdGltZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNpbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLW1vcmUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4vbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21haW4ge1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdG9kYXkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzdmg7XFxuICBib3JkZXItcmFkaXVzOjAgMCAxNXB4IDE1cHg7XFxufVxcblxcbiN0aXRsZS1kYXktdGltZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jd2VhdGhlci1ub3cge1xcbiAgLyogbWF4LXdpZHRoOiAyMDBweDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXZoO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlLWltZyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDU4MHB4KSB7XFxuICAjd2VhdGhlci1ub3ctaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgfVxcblxcbiAgLndlYXRoZXItbW9yZS1pbWcge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSwgKG1heC1oZWlnaHQ6IDU2MHB4KSB7XFxuICAjbWFpbiB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAjdG9kYXkge1xcbiAgICBwYWRkaW5nLXRvcDogNnZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gICN0aXRsZS1kYXktdGltZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNpbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC53ZWF0aGVyLW1vcmUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5odG1sIHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYmlnIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udXBwZXIge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNzZWFyY2gtYm94IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2gtaW1hZ2Uge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuI2FsZXJ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDBweDtcXG4gIHJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jYW5zd2VyLWVycm9yIHtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbW9iaWxlLWJveCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAxOTAsIDI0Nik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI21vYmlsZS1ib3ggPiBoMiB7XFxuICBtYXgtd2lkdGg6IDcwdnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpLCAobWF4LWhlaWdodDogNTYwcHgpIHtcXG4gICNjb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNzZWFyY2gtYm94IHtcXG4gICAgcmlnaHQ6IDZ2dztcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaURBQWlEO0VBQ2pELFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDRDQUE0QztBQUM5Qzs7QUFFQSw2QkFBNkIseUNBQXlDO0VBQ3BFLCtCQUErQjtFQUMvQixVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQSxzQ0FBc0MsNEJBQTRCO0VBQ2hFLCtCQUErQjtBQUNqQzs7QUFFQSx1Q0FBdUMsbUJBQW1CO0VBQ3hELCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG59XFxuXFxuaHRtbCB7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmJpZyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnVwcGVyIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2VhcmNoLWJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoLWltYWdlIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuI3NlYXJjaC1pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbiNhbGVydCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwcHg7XFxuICByaWdodDogNTBweDtcXG59XFxuXFxuI2Fuc3dlci1lcnJvciB7XFxuICBtYXJnaW4tdG9wOiAyMHZoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21vYmlsZS1ib3gge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMTkwLCAyNDYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNtb2JpbGUtYm94ID4gaDIge1xcbiAgbWF4LXdpZHRoOiA3MHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSwgKG1heC1oZWlnaHQ6IDU2MHB4KSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjc2VhcmNoLWJveCB7XFxuICAgIHJpZ2h0OiA2dnc7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yZWNhc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JlY2FzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYWluIGZyb20gJy4vbWFpbi9tYWluLmpzJ1xuaW1wb3J0IGZvcmVjYXN0IGZyb20gJy4vZm9yZWNhc3QvZm9yZWNhc3QuanMnXG5pbXBvcnQgeyBoYW5kbGVFcnJvciwgbWFrZURhdGEsIG1ha2VEYXRhTGlzdCwgc3R5bGVyIH0gZnJvbSAnLi9zdXBwb3J0LWZ1bmMnXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCAoY2l0eSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuaWQgPSAnY29udGFpbmVyJ1xuXG4gIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9MTQ3NzJkMjEwMGMwZjFlMDIzMTU1NjJlNDZjMWJhNmZgLCB7IG1vZGUgOiAnY29ycycgfSlcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGxldCB4ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXG4gICAgICBsZXQgZGF0YSA9IG1ha2VEYXRhKHgpXG5cbiAgICAgIHN0eWxlcihkYXRhLmR0KVxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4oZGF0YSkpXG4gICAgfSlcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGFuZGxlRXJyb3IoY2l0eSkpXG4gIH0pXG5cbiAgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7Y2l0eX0mYXBwaWQ9MTQ3NzJkMjEwMGMwZjFlMDIzMTU1NjJlNDZjMWJhNmZgLCB7IG1vZGUgOiAnY29ycycgfSlcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGxldCB5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXG4gICAgICB5ID0geS5saXN0XG4gICAgICBsZXQgZGF0YUxpc3QgPSBtYWtlRGF0YUxpc3QoeSlcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0KGRhdGFMaXN0KSlcbiAgICB9KVxuICB9KVxuICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9KVxuXG4gIHJldHVybiBjb250YWluZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50IiwiaW1wb3J0IHsgaW1hZ2VNYW5hZ2VyIH0gZnJvbSAnLi4vc3VwcG9ydC1mdW5jJ1xuXG5mdW5jdGlvbiBmb3JlY2FzdENhcmRzIChkYXRhKSB7XG4gIGNvbnN0IGNhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjYXJkQm94LmlkID0gJ2NhcmQtYm94J1xuICBjYXJkQm94LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXG5cbiAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ3JvdGF0ZScsICdob3VyLWNvbG9yJylcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3VwcGVyJywgJ2JpZycpXG4gICAgZGF0ZS5pbm5lckhUTUwgPSBpdGVtLmR0XG5cbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKVxuICAgIGltZy5zcmMgPSBpbWFnZU1hbmFnZXIoaXRlbS5tYWluKVxuICAgIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgd2VhdGhlci5pbm5lckhUTUwgPSBpdGVtLmZvcmVcblxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGVtcCcpXG4gICAgbGV0IG1pbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1pbi5pbm5lckhUTUwgPSBgbWluICR7aXRlbS5taW59wrBgXG4gICAgbGV0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1heC5pbm5lckhUTUwgPSBgbWF4ICR7aXRlbS5tYXh9wrBgXG4gICAgdGVtcC5hcHBlbmRDaGlsZChtaW4pXG4gICAgdGVtcC5hcHBlbmRDaGlsZChtYXgpXG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgY2FyZC5hcHBlbmRDaGlsZChpbWcpXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh3ZWF0aGVyKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBcbiAgICBjYXJkQm94LmFwcGVuZChjYXJkKVxuICB9KVxuICByZXR1cm4gY2FyZEJveFxufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JlY2FzdENhcmRzXG4iLCJpbXBvcnQgJy4vZm9yZWNhc3QuY3NzJ1xuaW1wb3J0IGZvcmVjYXN0Q2FyZHMgZnJvbSAnLi9mb3JlY2FzdC1jYXJkcydcblxuZnVuY3Rpb24gZm9yZWNhc3QgKGRhdGEpIHtcbiAgLy90aXRsZVxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICB0aXRsZS5pZCA9ICdjYXJkLXRpdGxlJ1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd1cHBlcicpXG4gIHRpdGxlLmlubmVySFRNTCA9ICduZXh0PGJyPjxzcGFuIGNsYXNzPVwiYm9sZCBiaWdcIj41IGRheXM8c3Bhbj4nXG5cbiAgY29uc3QgdGl0bGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAndGl0bGUtY2FyZCcpXG4gIHRpdGxlQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAvL2NhcmRzXG4gIGNvbnN0IGNhcmRCb3ggPSBmb3JlY2FzdENhcmRzKGRhdGEpXG5cbiAgLy9jb250YWluZXJcbiAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmb3JlY2FzdC5pZCA9ICdmb3JlY2FzdCdcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQodGl0bGVDYXJkKVxuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChjYXJkQm94KVxuXG4gIHJldHVybiBmb3JlY2FzdFxufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JlY2FzdCIsImltcG9ydCB7IGltYWdlTWFuYWdlciB9IGZyb20gJy4uL3N1cHBvcnQtZnVuYydcblxuZnVuY3Rpb24gbWFpbkluZm8gKGRhdGEpIHtcbiAgLy9ub3dcbiAgbGV0IHdlYXRoZXJOb3dJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB3ZWF0aGVyTm93SW1nLmlkID0gJ3dlYXRoZXItbm93LWltZydcbiAgd2VhdGhlck5vd0ltZy5zcmMgPSBpbWFnZU1hbmFnZXIoZGF0YS5tYWluLCBkYXRhLmR0KVxuICBsZXQgd2VhdGhlck5vd1R4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgd2VhdGhlck5vd1R4dC5jbGFzc0xpc3QuYWRkKCd1cHBlcicpXG4gIHdlYXRoZXJOb3dUeHQuaW5uZXJIVE1MID0gZGF0YS5kZXNjclxuXG4gIGNvbnN0IHdlYXRoZXJOb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3ZWF0aGVyTm93LmlkID0gJ3dlYXRoZXItbm93J1xuICB3ZWF0aGVyTm93LmFwcGVuZENoaWxkKHdlYXRoZXJOb3dJbWcpXG4gIHdlYXRoZXJOb3cuYXBwZW5kQ2hpbGQod2VhdGhlck5vd1R4dClcblxuICAvL21vcmVcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlJylcbiAgbGV0IHRlbXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB0ZW1wSW1nLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZS1pbWcnKVxuICB0ZW1wSW1nLnNyYyA9IGltYWdlTWFuYWdlcigndGVtcCcsIGRhdGEuZHQpXG4gIGxldCB0ZW1wVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHRlbXBUeHQuaW5uZXJIVE1MID0gYCR7ZGF0YS50ZW1wfcKwIENgXG4gIHRlbXAuYXBwZW5kQ2hpbGQodGVtcEltZylcbiAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wVHh0KVxuXG4gIGNvbnN0IGh1bWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBodW1pLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZScpXG4gIGxldCBodW1pSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgaHVtaUltZy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUtaW1nJylcbiAgaHVtaUltZy5zcmMgPSBpbWFnZU1hbmFnZXIoJ2h1bWknKVxuICBsZXQgaHVtaVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBodW1pVHh0LmlubmVySFRNTCA9IGAke2RhdGEuaHVtaX0lYFxuICBodW1pLmFwcGVuZENoaWxkKGh1bWlJbWcpXG4gIGh1bWkuYXBwZW5kQ2hpbGQoaHVtaVR4dClcblxuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd2luZC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUnKVxuICBsZXQgd2luZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHdpbmRJbWcuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlLWltZycpXG4gIHdpbmRJbWcuc3JjID0gaW1hZ2VNYW5hZ2VyKCd3aW5kJylcbiAgbGV0IHdpbmRUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgd2luZFR4dC5pbm5lckhUTUwgPSBgJHtkYXRhLndpbmR9IG0vc2BcbiAgd2luZC5hcHBlbmRDaGlsZCh3aW5kSW1nKVxuICB3aW5kLmFwcGVuZENoaWxkKHdpbmRUeHQpXG5cbiAgY29uc3Qgd2VhdGhlck1vcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3ZWF0aGVyTW9yZS5hcHBlbmRDaGlsZCh0ZW1wKVxuICB3ZWF0aGVyTW9yZS5hcHBlbmRDaGlsZChodW1pKVxuICB3ZWF0aGVyTW9yZS5hcHBlbmRDaGlsZCh3aW5kKVxuXG4gIC8vYm94XG4gIGNvbnN0IGluZm8gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaW5mby5pZCA9ICdpbmZvJ1xuICBpbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJOb3cpXG4gIGluZm8uYXBwZW5kQ2hpbGQod2VhdGhlck1vcmUpXG5cbiAgcmV0dXJuIGluZm9cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbkluZm9cbiIsImltcG9ydCAnLi9tYWluLmNzcydcbmltcG9ydCBtYWluSW5mbyBmcm9tICcuL21haW4taW5mbydcbmltcG9ydCB7IGdldERhdGUsIHVuaXhUb0RhdGVUaW1lIH0gZnJvbSAnLi4vc3VwcG9ydC1mdW5jJ1xuXG5jb25zdCBmdWxsRGF0ZSA9IGdldERhdGUoKVxuXG5mdW5jdGlvbiBtYWluIChkYXRhKSB7XG4gIC8vdGl0bGVcbiAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgndXBwZXInKVxuICBkYXRlLmlubmVySFRNTCA9IGZ1bGxEYXRlLnRpdGxlRGF0ZVxuICBsZXQgZGF5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgZGF5VGltZS5pZCA9ICd0aXRsZS1kYXktdGltZSdcbiAgZGF5VGltZS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9LCAke2Z1bGxEYXRlLndlZWtkYXl9IFVUQyAke3VuaXhUb0RhdGVUaW1lKGRhdGEuZHQpfWBcbiAgXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoZGF5VGltZSlcblxuICAvL2luZm9cbiAgbGV0IGluZm8gPSBtYWluSW5mbyhkYXRhKVxuXG4gIC8vc3ViLWNvbnRhaW5lclxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRvZGF5LmlkID0gJ3RvZGF5J1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdob3VyLWNvbG9yJylcbiAgdG9kYXkuYXBwZW5kQ2hpbGQodGl0bGUpXG4gIHRvZGF5LmFwcGVuZENoaWxkKGluZm8pXG5cbiAgLy9jb250YWluZXJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1haW4uaWQgPSAnbWFpbidcbiAgbWFpbi5hcHBlbmRDaGlsZCh0b2RheSlcblxuICByZXR1cm4gbWFpblxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluXG4iLCJjb25zdCB3ZWVrZGF5ID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG5jb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxuXG5mdW5jdGlvbiBtYWtlRGF0YSAoeCkge1xuICBsZXQgZGF0YSA9IHt9XG4gIGRhdGEubWFpbiA9IHgud2VhdGhlclswXS5tYWluLnRvTG93ZXJDYXNlKClcbiAgZGF0YS5kZXNjciA9IHgud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICBkYXRhLnRlbXAgPSAoeC5tYWluLnRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMilcbiAgZGF0YS5odW1pID0geC5tYWluLmh1bWlkaXR5XG4gIGRhdGEud2luZCA9IHgud2luZC5zcGVlZFxuICBkYXRhLm5hbWUgPSB4Lm5hbWVcbiAgZGF0YS5kdCA9IHguZHRcbiAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBjbGVhbkRhdGFMaXN0IChqKSB7IC8vZnVuY3Rpb24gZm9yIG1ha2VEYXRhTGlzdCgpIC0gc2VlIGJlbG93XG4gIGxldCBkYXRhTGlzdCA9IFtdXG4gIGxldCBkYXRlID0gJydcbiAgbGV0IGl0ZW0gPSB7fVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGoubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VyciA9IGpbaV1cbiAgICBsZXQgY3VyckRhdGUgPSBjdXJyLmR0LnNsaWNlKDAsIDEwKVxuICAgIGlmICggY3VyckRhdGUgPT09IGRhdGUgKSB7XG4gICAgICBpZiAoaXRlbS5taW4gPiBjdXJyLnRlbXApIGl0ZW0ubWluID0gY3Vyci50ZW1wXG4gICAgICBpZiAoaXRlbS5tYXggPCBjdXJyLnRlbXApIGl0ZW0ubWF4ID0gY3Vyci50ZW1wXG4gICAgfSBlbHNlIGlmICggaXNFbXB0eShpdGVtKSApIHsgLy9maXJzdFxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgJ2R0JyA6IGAke2N1cnJEYXRlLnNsaWNlKDgsIDEwKX0gJHttb250aHNbcGFyc2VJbnQoY3VyckRhdGUuc2xpY2UoNSwgNyktMSldfWAsXG4gICAgICAgICdtaW4nIDogY3Vyci50ZW1wLFxuICAgICAgICAnbWF4JyA6IGN1cnIudGVtcCxcbiAgICAgICAgJ2ZvcmUnIDogY3Vyci5mb3JlLFxuICAgICAgICAnbWFpbicgOiBjdXJyLm1haW4udG9Mb3dlckNhc2UoKVxuICAgICAgfVxuICAgICAgZGF0ZSA9IGN1cnJEYXRlXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFMaXN0LnB1c2goaXRlbSlcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgICdkdCcgOiBgJHtjdXJyRGF0ZS5zbGljZSg4LCAxMCl9ICR7bW9udGhzW3BhcnNlSW50KGN1cnJEYXRlLnNsaWNlKDUsIDcpLTEpXX1gLFxuICAgICAgICAnbWluJyA6IGN1cnIudGVtcCxcbiAgICAgICAgJ21heCcgOiBjdXJyLnRlbXAsXG4gICAgICAgICdmb3JlJyA6IGN1cnIuZm9yZSxcbiAgICAgICAgJ21haW4nIDogY3Vyci5tYWluLnRvTG93ZXJDYXNlKClcbiAgICAgIH1cbiAgICAgIGRhdGUgPSBjdXJyRGF0ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YUxpc3Rcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFMaXN0ICh5KSB7XG4gIGxldCBhcnIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IHtcbiAgICAgICdkdCcgOiB5W2ldLmR0X3R4dCxcbiAgICAgICd0ZW1wJyA6IE1hdGgucm91bmQoeVtpXS5tYWluLnRlbXAgLSAyNzMuMTUpLFxuICAgICAgJ2ZvcmUnIDogeVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgJ21haW4nIDogeVtpXS53ZWF0aGVyWzBdLm1haW5cbiAgICB9XG4gICAgYXJyLnB1c2goaXRlbSlcbiAgfVxuICBjb25zdCBkYXRhTGlzdCA9IGNsZWFuRGF0YUxpc3QoYXJyKVxuICByZXR1cm4gZGF0YUxpc3Rcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSAoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG5cbiAgbGV0IGRheU51bSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIGxldCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldXG4gIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIFxuICByZXR1cm4ge1xuICAgIFwidGl0bGVEYXRlXCIgOiBkYXlOdW0gKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyB5ZWFyLFxuICAgIFwid2Vla2RheVwiIDogd2Vla2RheVtkYXRlLmdldERheSgpXVxuICB9XG59XG5cbmZ1bmN0aW9uIHVuaXhUb0RhdGVUaW1lICh1bml4KSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodW5peCAqIDEwMDApXG4gIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKVxuICBsZXQgbWludXRlcyA9IFwiMFwiICsgZGF0ZS5nZXRNaW51dGVzKClcbiAgcmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcy5zbGljZSgtMilcbn1cblxuZnVuY3Rpb24gdW5peFRvSG91cnMgKHVuaXgpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1bml4ICogMTAwMClcbiAgcmV0dXJuIGRhdGUuZ2V0SG91cnMoKVxufVxuXG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9pbWcvY2xlYXIud2VicCdcbmltcG9ydCBjbGVhck1vb24gZnJvbSAnLi9pbWcvY2xlYXItbW9vbi53ZWJwJ1xuaW1wb3J0IGJyb2tlbiBmcm9tICcuL2ltZy9icm9rZW4gY2xvdWRzLndlYnAnXG5pbXBvcnQgcmFpbiBmcm9tICcuL2ltZy9yYWluLndlYnAnXG5pbXBvcnQgdGh1bmRlcnN0b3JtIGZyb20gJy4vaW1nL3RodW5kZXJzdG9ybS53ZWJwJ1xuaW1wb3J0IHNub3cgZnJvbSAnLi9pbWcvc25vdy53ZWJwJ1xuaW1wb3J0IG1pc3QgZnJvbSAnLi9pbWcvbWlzdC53ZWJwJ1xuaW1wb3J0IGh1bWkgZnJvbSAnLi9pbWcvaHVtaWRpdHkud2VicCdcbmltcG9ydCB0ZW1wRGF5IGZyb20gJy4vaW1nL3RlbXAtZGF5LndlYnAnXG5pbXBvcnQgdGVtcE5pZ2h0IGZyb20gJy4vaW1nL3RlbXAtbmlnaHQud2VicCdcbmltcG9ydCB3aW5kIGZyb20gJy4vaW1nL3dpbmQud2VicCdcblxuZnVuY3Rpb24gaW1hZ2VNYW5hZ2VyIChkZXNjciwgZHQpIHtcbiAgY29uc3QgaG91ciA9IHVuaXhUb0hvdXJzKGR0KVxuICBzd2l0Y2ggKGRlc2NyKSB7XG4gICAgY2FzZSAnaHVtaSc6IHJldHVybiBodW1pXG4gICAgY2FzZSAndGVtcCc6IGlmIChob3VyID49IDIxIHx8IGhvdXIgPCA4KSByZXR1cm4gdGVtcE5pZ2h0XG4gICAgICByZXR1cm4gdGVtcERheVxuICAgIGNhc2UgJ3dpbmQnOiByZXR1cm4gd2luZFxuICAgIGNhc2UgJ2NsZWFyJzogIGlmIChob3VyID49IDIxIHx8IGhvdXIgPCA4KSByZXR1cm4gY2xlYXJNb29uXG4gICAgICByZXR1cm4gY2xlYXJcbiAgICBjYXNlICdjbG91ZHMnOiByZXR1cm4gYnJva2VuXG4gICAgY2FzZSAncmFpbicgfHwgJ2RyaXp6bGUnOiByZXR1cm4gcmFpblxuICAgIGNhc2UgJ3RodW5kZXJzdG9ybSc6IHJldHVybiB0aHVuZGVyc3Rvcm1cbiAgICBjYXNlICdzbm93JzogcmV0dXJuIHNub3dcbiAgICBkZWZhdWx0OiByZXR1cm4gbWlzdFxuICB9XG59XG5cbmNvbnN0IG1vcm5pbmcgPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjAxLDE5MiwyMTUsMSkgMCUsIHJnYmEoMjQ5LDIyMywyMjIsMSkgNyUsIHJnYmEoMjQ5LDIzNSwyMzYsMSkgMTMlLCByZ2JhKDIxMywyMjUsMjM3LDEpIDM5JSwgcmdiYSgxNjcsMTk0LDIyMywxKSA2NiUsIHJnYmEoOTEsMTQ0LDE5MSwxKSAxMDAlKSdcbmNvbnN0IGRheSA9ICdsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCByZ2JhKDY1LDE5NiwyMjEsMSkgMCUsIHJnYmEoMzMsMTkwLDI0NiwxKSA1MCUsIHJnYmEoMTAwLDE2OCwyMjcsMSkgMTAwJSknXG5jb25zdCBldmVuaW5nID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE1MSwxMzEsMTMyLDEpIDAlLCByZ2JhKDIwMSwxNjQsMTQ4LDEpIDYlLCByZ2JhKDE5NCwxNzgsMTY1LDEpIDE1JSwgcmdiYSgxNjcsMTgxLDE4NCwxKSAyOSUsIHJnYmEoODUsMTM4LDE5MCwxKSA2MSUsIHJnYmEoMzMsNjUsMTQxLDEpIDEwMCUpJ1xuY29uc3QgbmlnaHQgPSAnbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTIwLDEzOSwxNDUsMSkgMCUsIHJnYmEoNTUsMTMzLDE0NSwxKSAxOCUsIHJnYmEoNDgsNzgsODUsMSkgNjAlLCByZ2JhKDUyLDUwLDQ5LDEpIDEwMCUpJ1xuY29uc3QgbW9ybmluZ0NvbG9yID0gJ3JnYig0NiwgMjMsIDY5LCAwLjQpJ1xuY29uc3QgZGF5Q29sb3IgPSAncmdiKDIzLCA0NSw3OSwgMC40KSdcbmNvbnN0IGV2ZW5pbmdDb2xvciA9ICdyZ2IoNzksIDI4LCAyMywgMC40KSdcbmNvbnN0IG5pZ2h0Q29sb3IgPSAncmdiKDcsIDI1LCAyMCwgMC40KSdcblxuZnVuY3Rpb24gc3R5bGVyIChkdCkge1xuICBjb25zdCBob3VyID0gdW5peFRvSG91cnMoZHQpXG4gIGxldCBkZXNpZ24gPSB7fVxuICBsZXQgbW9ybmluZ0NhcmQgPSAnJyAvLyB3aGl0ZSBoYXMgbG93IHJlYWRhYmlsaXR5XG4gIGlmIChob3VyID49IDIyIHx8IGhvdXIgPCA1KSB7XG4gICAgZGVzaWduLmJnID0gbmlnaHRcbiAgICBkZXNpZ24uY29sb3IgPSBuaWdodENvbG9yXG4gIH0gZWxzZSBpZiAoaG91ciA+PSA2ICYmIGhvdXIgPCAxMCkge1xuICAgIGRlc2lnbi5iZyA9IG1vcm5pbmdcbiAgICBkZXNpZ24uY29sb3IgPSBtb3JuaW5nQ29sb3JcbiAgICBtb3JuaW5nQ2FyZCA9IGAjY2FyZC10aXRsZSB7IGNvbG9yOiAke2Rlc2lnbi5jb2xvcn07IH1gXG4gIH0gZWxzZSBpZiAoaG91ciA+PSAxMCAmJiBob3VyIDwgMTcpIHtcbiAgICBkZXNpZ24uYmcgPSBkYXlcbiAgICBkZXNpZ24uY29sb3IgPSBkYXlDb2xvclxuICB9IGVsc2Uge1xuICAgIGRlc2lnbi5iZyA9IGV2ZW5pbmdcbiAgICBkZXNpZ24uY29sb3IgPSBldmVuaW5nQ29sb3JcbiAgfVxuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlLmlubmVyVGV4dCA9IGBcbiAgI2NvbnRhaW5lciB7IGJhY2tncm91bmQ6ICNlOWVlZjA7IGJhY2tncm91bmQ6ICR7ZGVzaWduLmJnfTsgfSBcbiAgLmhvdXItY29sb3IgeyBiYWNrZ3JvdW5kLWNvbG9yOiAke2Rlc2lnbi5jb2xvcn07IH0gXG4gICR7bW9ybmluZ0NhcmR9XG4gICNjYXJkLWJveCB7IHNjcm9sbGJhci1jb2xvcjogJHtkZXNpZ24uY29sb3J9IHJnYigyNTUsIDI1NSwgMjU1LCAwKTt9XG4gICNjYXJkLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCAke2Rlc2lnbi5jb2xvcn07IH1cbiAgI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6ICR7ZGVzaWduLmNvbG9yfTsgfVxuICBgXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGNpdHkpIHtcbiAgY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBhbnN3ZXIuaWQgPSAnYW5zd2VyLWVycm9yJ1xuICBhbnN3ZXIuaW5uZXJIVE1MID0gYFwiJHtjaXR5fVwiIGlzbid0IGluIHRoZSBkYXRhYmFzZSwgdHJ5IGFub3RoZXIgY2l0eSFgXG4gIHJldHVybiBhbnN3ZXJcbn1cblxuZXhwb3J0IHtcbiAgbWFrZURhdGEsXG4gIG1ha2VEYXRhTGlzdCxcbiAgZ2V0RGF0ZSxcbiAgdW5peFRvRGF0ZVRpbWUsXG4gIGltYWdlTWFuYWdlcixcbiAgc3R5bGVyLFxuICBoYW5kbGVFcnJvclxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCdcbmltcG9ydCBzZWFyY2hJY29uIGZyb20gJy4vaW1nL3NlYXJjaC53ZWJwJ1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LmlkID0gJ3NlYXJjaC1pbnB1dCdcbmlucHV0LnR5cGUgPSAndGV4dCdcbmlucHV0LnJlcXVpcmVkID0gdHJ1ZVxuaW5wdXQucGxhY2Vob2xkZXIgPSAnQW1zdGVyZGFtJ1xuXG5jb25zdCBzZWFyY2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuc2VhcmNoSW1nLmlkID0gJ3NlYXJjaC1pbWFnZSdcbnNlYXJjaEltZy5zcmMgPSBzZWFyY2hJY29uXG5cbmNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5zZWFyY2hCb3guaWQgPSAnc2VhcmNoLWJveCdcbnNlYXJjaEJveC5hcHBlbmRDaGlsZChpbnB1dClcbnNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hJbWcpXG5cbnNlYXJjaEltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxlcnQuaWQgPSAnYWxlcnQnXG4gICAgYWxlcnQuaW5uZXJIVE1MID0gJ3BsZWFzZSBjaG9vc2UgYSBjaXR5J1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWxlcnQpXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KGlucHV0LnZhbHVlKSlcbiAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWFyY2hCb3gpXG4gIH1cbn0pXG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2hJbWcuY2xpY2soKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCdiZXJsaW4nKSlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==