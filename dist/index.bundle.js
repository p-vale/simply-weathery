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
___CSS_LOADER_EXPORT___.push([module.id, "#forecast {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding-left: 20px;\n  margin-bottom: 10px;\n  gap : 15px;\n}\n\n#card-title {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n#card-box {\n  height: 290px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n#card-box::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n#card-box::-webkit-scrollbar-track {\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n}\n\n/* Handle */\n#card-box::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 250px;\n  width: 175px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-img {\n  max-width: 100px;\n  height: auto;\n  margin-bottom: -20px;\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}", "",{"version":3,"sources":["webpack://./src/forecast/forecast.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,gBAAgB,EAAE,mBAAmB;AACvC;;AAEA,UAAU;AACV;EACE,YAAY;AACd;;AAEA,UAAU;AACV;EACE,iDAAiD;EACjD,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,WAAW;EACX,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B,EAAE,mBAAmB;AACjD;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;AACvB","sourcesContent":["#forecast {\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  padding-left: 20px;\n  margin-bottom: 10px;\n  gap : 15px;\n}\n\n#card-title {\n  font-size: 1.5em;\n  font-weight: 300;\n}\n\n#card-box {\n  height: 290px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n#card-box::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n#card-box::-webkit-scrollbar-track {\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n}\n\n/* Handle */\n#card-box::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 250px;\n  width: 175px;\n  flex-shrink: 0;\n  border-radius: 10px;\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-img {\n  max-width: 100px;\n  height: auto;\n  margin-bottom: -20px;\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: baseline;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  margin: 0;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3vh;\n  border-radius:0 0 15px 15px;\n}\n\n#title-day-time {\n  font-weight: 300;\n}\n\n#info {\n  display: flex;\n  gap: 40px;\n}\n\n#weather-now {\n  max-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 15px;\n  margin-top: 3px;\n  margin-bottom: 3px;;\n}\n\n.weather-more-img {\n  height: 60px;\n  width: 60px;\n}\n", "",{"version":3,"sources":["webpack://./src/main/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":["#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  margin: 0;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3vh;\n  border-radius:0 0 15px 15px;\n}\n\n#title-day-time {\n  font-weight: 300;\n}\n\n#info {\n  display: flex;\n  gap: 40px;\n}\n\n#weather-now {\n  max-width: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 15px;\n  margin-top: 3px;\n  margin-bottom: 3px;;\n}\n\n.weather-more-img {\n  height: 60px;\n  width: 60px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n\n}\n\nhtml {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: 0.1em;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 2em;\n}\n\nh2 {\n  font-weight: 400;\n}\n\n.big {\n  font-size: 1.5em;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.upper {\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n#search-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n\n#search-image {\n  height: 50px;\n  width: 50px;\n}\n\n#search-input {\n  height: 20px;\n  width: 150px;\n  background: rgb(0, 0, 0, 0);\n  border: none;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.5);\n  color: white;\n  letter-spacing: 0.1em;\n}\n\n#search-input:focus {\n  border: none;\n  outline: 0;\n  border-bottom: solid 1px rgba(255, 255, 255);\n}\n\n#search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 1; /* Firefox */\n}\n\n#search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#search-input::-ms-input-placeholder { /* Microsoft Edge */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#answer-error {\n  margin-top: 20vh;\n  margin: auto;\n  max-width: 500px;\n  text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;;AAEf;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,oCAAoC;EACpC,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,iDAAiD;EACjD,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,4CAA4C;AAC9C;;AAEA,6BAA6B,yCAAyC;EACpE,+BAA+B;EAC/B,UAAU,EAAE,YAAY;AAC1B;;AAEA,sCAAsC,4BAA4B;EAChE,+BAA+B;AACjC;;AAEA,uCAAuC,mBAAmB;EACxD,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n\n}\n\nhtml {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n  letter-spacing: 0.1em;\n}\n\nh1 {\n  font-weight: 600;\n  font-size: 2em;\n}\n\nh2 {\n  font-weight: 400;\n}\n\n.big {\n  font-size: 1.5em;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.upper {\n  text-transform: uppercase;\n  text-align: center;\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n}\n\n#search-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n\n#search-image {\n  height: 50px;\n  width: 50px;\n}\n\n#search-input {\n  height: 20px;\n  width: 150px;\n  background: rgb(0, 0, 0, 0);\n  border: none;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.5);\n  color: white;\n  letter-spacing: 0.1em;\n}\n\n#search-input:focus {\n  border: none;\n  outline: 0;\n  border-bottom: solid 1px rgba(255, 255, 255);\n}\n\n#search-input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 1; /* Firefox */\n}\n\n#search-input:-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#search-input::-ms-input-placeholder { /* Microsoft Edge */\n  color: rgba(255, 255, 255, 0.5);\n}\n\n#answer-error {\n  margin-top: 20vh;\n  margin: auto;\n  max-width: 500px;\n  text-align: center;\n}"],"sourceRoot":""}]);
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
      console.log(data)

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
      console.log(dataList)

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
    // weather.classList.add('upper')
    weather.innerHTML = item.fore

    let temp = document.createElement('div')
    temp.classList.add('card-temp')
    let min = document.createElement('p')
    min.innerHTML = `${item.min}°`
    min.classList.add('big')
    let max = document.createElement('p')
    max.classList.add('bold', 'big')
    max.innerHTML = `${item.max}°`
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
  titleCard.classList.add('card')
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
  weatherNowImg.id = 'weatheNowImg'
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

  //container
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

  //conatiner
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
/* harmony import */ var _img_icons_clear_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/icons/clear.webp */ "./src/img/icons/clear.webp");
/* harmony import */ var _img_icons_clear_moon_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/icons/clear-moon.webp */ "./src/img/icons/clear-moon.webp");
/* harmony import */ var _img_icons_broken_clouds_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/icons/broken clouds.webp */ "./src/img/icons/broken clouds.webp");
/* harmony import */ var _img_icons_rain_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/icons/rain.webp */ "./src/img/icons/rain.webp");
/* harmony import */ var _img_icons_thunderstorm_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/icons/thunderstorm.webp */ "./src/img/icons/thunderstorm.webp");
/* harmony import */ var _img_icons_snow_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/icons/snow.webp */ "./src/img/icons/snow.webp");
/* harmony import */ var _img_icons_mist_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/icons/mist.webp */ "./src/img/icons/mist.webp");
/* harmony import */ var _img_icons_humidity_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/icons/humidity.webp */ "./src/img/icons/humidity.webp");
/* harmony import */ var _img_icons_temp_day_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/icons/temp-day.webp */ "./src/img/icons/temp-day.webp");
/* harmony import */ var _img_icons_temp_night_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/icons/temp-night.webp */ "./src/img/icons/temp-night.webp");
/* harmony import */ var _img_icons_wind_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/icons/wind.webp */ "./src/img/icons/wind.webp");
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

  let day = date.getDay()
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  
  return {
    "titleDate" : day + " " + month + " " + year,
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
    case 'humi': return _img_icons_humidity_webp__WEBPACK_IMPORTED_MODULE_7__
    case 'temp': if (hour >= 21 || hour < 8) return _img_icons_temp_night_webp__WEBPACK_IMPORTED_MODULE_9__
      return _img_icons_temp_day_webp__WEBPACK_IMPORTED_MODULE_8__
    case 'wind': return _img_icons_wind_webp__WEBPACK_IMPORTED_MODULE_10__
    case 'clear':  if (hour >= 21 || hour < 8) return _img_icons_clear_moon_webp__WEBPACK_IMPORTED_MODULE_1__
      return _img_icons_clear_webp__WEBPACK_IMPORTED_MODULE_0__
    case 'clouds': return _img_icons_broken_clouds_webp__WEBPACK_IMPORTED_MODULE_2__
    case 'rain' || 0: return _img_icons_rain_webp__WEBPACK_IMPORTED_MODULE_3__
    case 'thunderstorm': return _img_icons_thunderstorm_webp__WEBPACK_IMPORTED_MODULE_4__
    case 'snow': return _img_icons_snow_webp__WEBPACK_IMPORTED_MODULE_5__
    default: return _img_icons_mist_webp__WEBPACK_IMPORTED_MODULE_6__
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

/***/ "./src/img/icons/broken clouds.webp":
/*!******************************************!*\
  !*** ./src/img/icons/broken clouds.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76ce31c14072ad5469f6.webp";

/***/ }),

/***/ "./src/img/icons/clear-moon.webp":
/*!***************************************!*\
  !*** ./src/img/icons/clear-moon.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49d7345acbf0e1b7e49a.webp";

/***/ }),

/***/ "./src/img/icons/clear.webp":
/*!**********************************!*\
  !*** ./src/img/icons/clear.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2de5bc84d740cf5168a.webp";

/***/ }),

/***/ "./src/img/icons/humidity.webp":
/*!*************************************!*\
  !*** ./src/img/icons/humidity.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be5a248e59cdbb4f5293.webp";

/***/ }),

/***/ "./src/img/icons/mist.webp":
/*!*********************************!*\
  !*** ./src/img/icons/mist.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9bbf4cb5f91ea27f0777.webp";

/***/ }),

/***/ "./src/img/icons/rain.webp":
/*!*********************************!*\
  !*** ./src/img/icons/rain.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87f3f69b7603cbedcdc3.webp";

/***/ }),

/***/ "./src/img/icons/search.webp":
/*!***********************************!*\
  !*** ./src/img/icons/search.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7af82462b28c4869658d.webp";

/***/ }),

/***/ "./src/img/icons/snow.webp":
/*!*********************************!*\
  !*** ./src/img/icons/snow.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a98d4e63ddf5c73976d.webp";

/***/ }),

/***/ "./src/img/icons/temp-day.webp":
/*!*************************************!*\
  !*** ./src/img/icons/temp-day.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "458a74829d51dff2e8ec.webp";

/***/ }),

/***/ "./src/img/icons/temp-night.webp":
/*!***************************************!*\
  !*** ./src/img/icons/temp-night.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a83f3236d415b4a44a2.webp";

/***/ }),

/***/ "./src/img/icons/thunderstorm.webp":
/*!*****************************************!*\
  !*** ./src/img/icons/thunderstorm.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47fdd30f1d5af4a2eb69.webp";

/***/ }),

/***/ "./src/img/icons/wind.webp":
/*!*********************************!*\
  !*** ./src/img/icons/wind.webp ***!
  \*********************************/
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
/* harmony import */ var _img_icons_search_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/icons/search.webp */ "./src/img/icons/search.webp");




const input = document.createElement('input')
input.id = 'search-input'
input.type = 'text'
input.required = true
input.placeholder = 'Amsterdam'

const searchImg = document.createElement('img')
searchImg.id = 'search-image'
searchImg.src = _img_icons_search_webp__WEBPACK_IMPORTED_MODULE_2__

const searchBox = document.createElement('div')
searchBox.id = 'search-box'
searchBox.appendChild(input)
searchBox.appendChild(searchImg)

searchImg.addEventListener('click', () => {
  if (input.validity.valueMissing) {
    input.setCustomValidity('please choose a city');
    input.reportValidity();
  } else {
    document.body.innerHTML = ''
    document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_1__["default"])(input.value))
    input.value = ''
    document.body.appendChild(searchBox)
  }
})

document.body.appendChild((0,_component__WEBPACK_IMPORTED_MODULE_1__["default"])('berlin'))
document.body.appendChild(searchBox)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDhCQUE4QixzREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBCQUEwQixzREFBUztBQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5jc3M/OTIyZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi9tYWluLmNzcz9kYTE4Iiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2ZvcmVjYXN0L2ZvcmVjYXN0LWNhcmRzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi9tYWluLWluZm8uanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvc3VwcG9ydC1mdW5jLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZ2FwIDogMTVweDtcXG59XFxuXFxuI2NhcmQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbiNjYXJkLWJveCB7XFxuICBoZWlnaHQ6IDI5MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGdhcDogMjBweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87IC8qIHRvcCBzY3JvbGxiYXIgICovXFxufVxcblxcbi8qIHdpZHRoICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi8qIFRyYWNrICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogSGFuZGxlICovXFxuI2NhcmQtYm94Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTc1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcXG59XFxuXFxuLmNhcmQtdGVtcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZvcmVjYXN0L2ZvcmVjYXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0IsRUFBRSxtQkFBbUI7QUFDdkM7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsWUFBWTtBQUNkOztBQUVBLFVBQVU7QUFDVjtFQUNFLGlEQUFpRDtFQUNqRCxtQkFBbUI7QUFDckI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEIsRUFBRSxtQkFBbUI7QUFDakQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBnYXAgOiAxNXB4O1xcbn1cXG5cXG4jY2FyZC10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI2NhcmQtYm94IHtcXG4gIGhlaWdodDogMjkwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLyogd2lkdGggKi9cXG4jY2FyZC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG4jY2FyZC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBIYW5kbGUgKi9cXG4jY2FyZC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIHdpZHRoOiAxNzVweDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDF2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyAvKiB0b3Agc2Nyb2xsYmFyICAqL1xcbn1cXG5cXG4uY2FyZC1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbn1cXG5cXG4uY2FyZC10ZW1wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWFpbiB7XFxuICBoZWlnaHQ6IDYwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0b2RheSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNTB2dztcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3ZoO1xcbiAgYm9yZGVyLXJhZGl1czowIDAgMTVweCAxNXB4O1xcbn1cXG5cXG4jdGl0bGUtZGF5LXRpbWUge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuI2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuI3dlYXRoZXItbm93IHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItbW9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7O1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlLWltZyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4vbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNtYWluIHtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RvZGF5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzdmg7XFxuICBib3JkZXItcmFkaXVzOjAgMCAxNXB4IDE1cHg7XFxufVxcblxcbiN0aXRsZS1kYXktdGltZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4jaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4jd2VhdGhlci1ub3cge1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDs7XFxufVxcblxcbi53ZWF0aGVyLW1vcmUtaW1nIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5iaWcge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51cHBlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1pbWFnZSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4jYW5zd2VyLWVycm9yIHtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osaURBQWlEO0VBQ2pELFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDRDQUE0QztBQUM5Qzs7QUFFQSw2QkFBNkIseUNBQXlDO0VBQ3BFLCtCQUErQjtFQUMvQixVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQSxzQ0FBc0MsNEJBQTRCO0VBQ2hFLCtCQUErQjtBQUNqQzs7QUFFQSx1Q0FBdUMsbUJBQW1CO0VBQ3hELCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5iaWcge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51cHBlciB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3NlYXJjaC1ib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaC1pbWFnZSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4jYW5zd2VyLWVycm9yIHtcXG4gIG1hcmdpbi10b3A6IDIwdmg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvcmVjYXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yZWNhc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFpbiBmcm9tICcuL21haW4vbWFpbi5qcydcbmltcG9ydCBmb3JlY2FzdCBmcm9tICcuL2ZvcmVjYXN0L2ZvcmVjYXN0LmpzJ1xuaW1wb3J0IHsgaGFuZGxlRXJyb3IsIG1ha2VEYXRhLCBtYWtlRGF0YUxpc3QsIHN0eWxlciB9IGZyb20gJy4vc3VwcG9ydC1mdW5jJ1xuXG5mdW5jdGlvbiBjb21wb25lbnQgKGNpdHkpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcblxuICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTE0NzcyZDIxMDBjMGYxZTAyMzE1NTYyZTQ2YzFiYTZmYCwgeyBtb2RlIDogJ2NvcnMnIH0pXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBsZXQgeCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgICAgbGV0IGRhdGEgPSBtYWtlRGF0YSh4KVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgc3R5bGVyKGRhdGEuZHQpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbihkYXRhKSlcbiAgICB9KVxuICB9KVxuICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoYW5kbGVFcnJvcihjaXR5KSlcbiAgfSlcblxuICBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZhcHBpZD0xNDc3MmQyMTAwYzBmMWUwMjMxNTU2MmU0NmMxYmE2ZmAsIHsgbW9kZSA6ICdjb3JzJyB9KVxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgbGV0IHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSlcbiAgICAgIHkgPSB5Lmxpc3RcbiAgICAgIGxldCBkYXRhTGlzdCA9IG1ha2VEYXRhTGlzdCh5KVxuICAgICAgY29uc29sZS5sb2coZGF0YUxpc3QpXG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdChkYXRhTGlzdCkpXG4gICAgfSlcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfSlcblxuICByZXR1cm4gY29udGFpbmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudCIsImltcG9ydCB7IGltYWdlTWFuYWdlciB9IGZyb20gJy4uL3N1cHBvcnQtZnVuYydcblxuZnVuY3Rpb24gZm9yZWNhc3RDYXJkcyAoZGF0YSkge1xuICBjb25zdCBjYXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2FyZEJveC5pZCA9ICdjYXJkLWJveCdcbiAgY2FyZEJveC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKVxuXG4gIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdyb3RhdGUnLCAnaG91ci1jb2xvcicpXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd1cHBlcicsICdiaWcnKVxuICAgIGRhdGUuaW5uZXJIVE1MID0gaXRlbS5kdFxuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJylcbiAgICBpbWcuc3JjID0gaW1hZ2VNYW5hZ2VyKGl0ZW0ubWFpbilcbiAgICBsZXQgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIC8vIHdlYXRoZXIuY2xhc3NMaXN0LmFkZCgndXBwZXInKVxuICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gaXRlbS5mb3JlXG5cbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRlbXAnKVxuICAgIGxldCBtaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtaW4uaW5uZXJIVE1MID0gYCR7aXRlbS5taW59wrBgXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ2JpZycpXG4gICAgbGV0IG1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdib2xkJywgJ2JpZycpXG4gICAgbWF4LmlubmVySFRNTCA9IGAke2l0ZW0ubWF4fcKwYFxuICAgIHRlbXAuYXBwZW5kQ2hpbGQobWluKVxuICAgIHRlbXAuYXBwZW5kQ2hpbGQobWF4KVxuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQod2VhdGhlcilcbiAgICBjYXJkLmFwcGVuZENoaWxkKHRlbXApXG4gICAgXG4gICAgY2FyZEJveC5hcHBlbmQoY2FyZClcbiAgfSlcbiAgcmV0dXJuIGNhcmRCb3hcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yZWNhc3RDYXJkc1xuIiwiaW1wb3J0ICcuL2ZvcmVjYXN0LmNzcydcbmltcG9ydCBmb3JlY2FzdENhcmRzIGZyb20gJy4vZm9yZWNhc3QtY2FyZHMnXG5cbmZ1bmN0aW9uIGZvcmVjYXN0IChkYXRhKSB7XG4gIC8vdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGl0bGUuaWQgPSAnY2FyZC10aXRsZSdcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndXBwZXInKVxuICB0aXRsZS5pbm5lckhUTUwgPSAnbmV4dDxicj48c3BhbiBjbGFzcz1cImJvbGQgYmlnXCI+NSBkYXlzPHNwYW4+J1xuXG4gIGNvbnN0IHRpdGxlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgdGl0bGVDYXJkLmFwcGVuZENoaWxkKHRpdGxlKVxuXG4gIC8vY2FyZHNcbiAgY29uc3QgY2FyZEJveCA9IGZvcmVjYXN0Q2FyZHMoZGF0YSlcblxuICAvL2NvbnRhaW5lclxuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvcmVjYXN0LmlkID0gJ2ZvcmVjYXN0J1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh0aXRsZUNhcmQpXG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGNhcmRCb3gpXG5cbiAgcmV0dXJuIGZvcmVjYXN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcmVjYXN0IiwiaW1wb3J0IHsgaW1hZ2VNYW5hZ2VyIH0gZnJvbSAnLi4vc3VwcG9ydC1mdW5jJ1xuXG5mdW5jdGlvbiBtYWluSW5mbyAoZGF0YSkge1xuICAvL25vd1xuICBsZXQgd2VhdGhlck5vd0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHdlYXRoZXJOb3dJbWcuaWQgPSAnd2VhdGhlTm93SW1nJ1xuICB3ZWF0aGVyTm93SW1nLnNyYyA9IGltYWdlTWFuYWdlcihkYXRhLm1haW4sIGRhdGEuZHQpXG4gIGxldCB3ZWF0aGVyTm93VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB3ZWF0aGVyTm93VHh0LmNsYXNzTGlzdC5hZGQoJ3VwcGVyJylcbiAgd2VhdGhlck5vd1R4dC5pbm5lckhUTUwgPSBkYXRhLmRlc2NyXG5cbiAgY29uc3Qgd2VhdGhlck5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdlYXRoZXJOb3cuaWQgPSAnd2VhdGhlci1ub3cnXG4gIHdlYXRoZXJOb3cuYXBwZW5kQ2hpbGQod2VhdGhlck5vd0ltZylcbiAgd2VhdGhlck5vdy5hcHBlbmRDaGlsZCh3ZWF0aGVyTm93VHh0KVxuXG4gIC8vbW9yZVxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUnKVxuICBsZXQgdGVtcEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHRlbXBJbWcuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlLWltZycpXG4gIHRlbXBJbWcuc3JjID0gaW1hZ2VNYW5hZ2VyKCd0ZW1wJywgZGF0YS5kdClcbiAgbGV0IHRlbXBUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGVtcFR4dC5pbm5lckhUTUwgPSBgJHtkYXRhLnRlbXB9wrAgQ2BcbiAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wSW1nKVxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBUeHQpXG5cbiAgY29uc3QgaHVtaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGh1bWkuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlJylcbiAgbGV0IGh1bWlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICBodW1pSW1nLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZS1pbWcnKVxuICBodW1pSW1nLnNyYyA9IGltYWdlTWFuYWdlcignaHVtaScpXG4gIGxldCBodW1pVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGh1bWlUeHQuaW5uZXJIVE1MID0gYCR7ZGF0YS5odW1pfSVgXG4gIGh1bWkuYXBwZW5kQ2hpbGQoaHVtaUltZylcbiAgaHVtaS5hcHBlbmRDaGlsZChodW1pVHh0KVxuXG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB3aW5kLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZScpXG4gIGxldCB3aW5kSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgd2luZEltZy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUtaW1nJylcbiAgd2luZEltZy5zcmMgPSBpbWFnZU1hbmFnZXIoJ3dpbmQnKVxuICBsZXQgd2luZFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICB3aW5kVHh0LmlubmVySFRNTCA9IGAke2RhdGEud2luZH0gbS9zYFxuICB3aW5kLmFwcGVuZENoaWxkKHdpbmRJbWcpXG4gIHdpbmQuYXBwZW5kQ2hpbGQod2luZFR4dClcblxuICBjb25zdCB3ZWF0aGVyTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdlYXRoZXJNb3JlLmFwcGVuZENoaWxkKHRlbXApXG4gIHdlYXRoZXJNb3JlLmFwcGVuZENoaWxkKGh1bWkpXG4gIHdlYXRoZXJNb3JlLmFwcGVuZENoaWxkKHdpbmQpXG5cbiAgLy9jb250YWluZXJcbiAgY29uc3QgaW5mbyA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbmZvLmlkID0gJ2luZm8nXG4gIGluZm8uYXBwZW5kQ2hpbGQod2VhdGhlck5vdylcbiAgaW5mby5hcHBlbmRDaGlsZCh3ZWF0aGVyTW9yZSlcblxuICByZXR1cm4gaW5mb1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWluSW5mb1xuIiwiaW1wb3J0ICcuL21haW4uY3NzJ1xuaW1wb3J0IG1haW5JbmZvIGZyb20gJy4vbWFpbi1pbmZvJ1xuaW1wb3J0IHsgZ2V0RGF0ZSwgdW5peFRvRGF0ZVRpbWUgfSBmcm9tICcuLi9zdXBwb3J0LWZ1bmMnXG5cbmNvbnN0IGZ1bGxEYXRlID0gZ2V0RGF0ZSgpXG5cbmZ1bmN0aW9uIG1haW4gKGRhdGEpIHtcbiAgLy90aXRsZVxuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd1cHBlcicpXG4gIGRhdGUuaW5uZXJIVE1MID0gZnVsbERhdGUudGl0bGVEYXRlXG4gIGxldCBkYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBkYXlUaW1lLmlkID0gJ3RpdGxlLWRheS10aW1lJ1xuICBkYXlUaW1lLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX0sICR7ZnVsbERhdGUud2Vla2RheX0gVVRDICR7dW5peFRvRGF0ZVRpbWUoZGF0YS5kdCl9YFxuICBcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aXRsZS5hcHBlbmRDaGlsZChkYXRlKVxuICB0aXRsZS5hcHBlbmRDaGlsZChkYXlUaW1lKVxuXG4gIC8vaW5mb1xuICBsZXQgaW5mbyA9IG1haW5JbmZvKGRhdGEpXG5cbiAgLy9zdWItY29udGFpbmVyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdG9kYXkuaWQgPSAndG9kYXknXG4gIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2hvdXItY29sb3InKVxuICB0b2RheS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgdG9kYXkuYXBwZW5kQ2hpbGQoaW5mbylcblxuICAvL2NvbmF0aW5lclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbWFpbi5pZCA9ICdtYWluJ1xuICBtYWluLmFwcGVuZENoaWxkKHRvZGF5KVxuXG4gIHJldHVybiBtYWluXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5cbiIsImNvbnN0IHdlZWtkYXkgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbmNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG5cbmZ1bmN0aW9uIG1ha2VEYXRhICh4KSB7XG4gIGxldCBkYXRhID0ge31cbiAgZGF0YS5tYWluID0geC53ZWF0aGVyWzBdLm1haW4udG9Mb3dlckNhc2UoKVxuICBkYXRhLmRlc2NyID0geC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gIGRhdGEudGVtcCA9ICh4Lm1haW4udGVtcCAtIDI3My4xNSkudG9GaXhlZCgyKVxuICBkYXRhLmh1bWkgPSB4Lm1haW4uaHVtaWRpdHlcbiAgZGF0YS53aW5kID0geC53aW5kLnNwZWVkXG4gIGRhdGEubmFtZSA9IHgubmFtZVxuICBkYXRhLmR0ID0geC5kdFxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRGF0YUxpc3QgKGopIHsgLy9mdW5jdGlvbiBmb3IgbWFrZURhdGFMaXN0KCkgLSBzZWUgYmVsb3dcbiAgbGV0IGRhdGFMaXN0ID0gW11cbiAgbGV0IGRhdGUgPSAnJ1xuICBsZXQgaXRlbSA9IHt9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgai5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyID0galtpXVxuICAgIGxldCBjdXJyRGF0ZSA9IGN1cnIuZHQuc2xpY2UoMCwgMTApXG4gICAgaWYgKCBjdXJyRGF0ZSA9PT0gZGF0ZSApIHtcbiAgICAgIGlmIChpdGVtLm1pbiA+IGN1cnIudGVtcCkgaXRlbS5taW4gPSBjdXJyLnRlbXBcbiAgICAgIGlmIChpdGVtLm1heCA8IGN1cnIudGVtcCkgaXRlbS5tYXggPSBjdXJyLnRlbXBcbiAgICB9IGVsc2UgaWYgKCBpc0VtcHR5KGl0ZW0pICkgeyAvL2ZpcnN0XG4gICAgICBpdGVtID0ge1xuICAgICAgICAnZHQnIDogYCR7Y3VyckRhdGUuc2xpY2UoOCwgMTApfSAke21vbnRoc1twYXJzZUludChjdXJyRGF0ZS5zbGljZSg1LCA3KS0xKV19YCxcbiAgICAgICAgJ21pbicgOiBjdXJyLnRlbXAsXG4gICAgICAgICdtYXgnIDogY3Vyci50ZW1wLFxuICAgICAgICAnZm9yZScgOiBjdXJyLmZvcmUsXG4gICAgICAgICdtYWluJyA6IGN1cnIubWFpbi50b0xvd2VyQ2FzZSgpXG4gICAgICB9XG4gICAgICBkYXRlID0gY3VyckRhdGVcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YUxpc3QucHVzaChpdGVtKVxuICAgICAgaXRlbSA9IHtcbiAgICAgICAgJ2R0JyA6IGAke2N1cnJEYXRlLnNsaWNlKDgsIDEwKX0gJHttb250aHNbcGFyc2VJbnQoY3VyckRhdGUuc2xpY2UoNSwgNyktMSldfWAsXG4gICAgICAgICdtaW4nIDogY3Vyci50ZW1wLFxuICAgICAgICAnbWF4JyA6IGN1cnIudGVtcCxcbiAgICAgICAgJ2ZvcmUnIDogY3Vyci5mb3JlLFxuICAgICAgICAnbWFpbicgOiBjdXJyLm1haW4udG9Mb3dlckNhc2UoKVxuICAgICAgfVxuICAgICAgZGF0ZSA9IGN1cnJEYXRlXG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhTGlzdFxufVxuXG5mdW5jdGlvbiBtYWtlRGF0YUxpc3QgKHkpIHtcbiAgbGV0IGFyciA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtID0ge1xuICAgICAgJ2R0JyA6IHlbaV0uZHRfdHh0LFxuICAgICAgJ3RlbXAnIDogTWF0aC5yb3VuZCh5W2ldLm1haW4udGVtcCAtIDI3My4xNSksXG4gICAgICAnZm9yZScgOiB5W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAnbWFpbicgOiB5W2ldLndlYXRoZXJbMF0ubWFpblxuICAgIH1cbiAgICBhcnIucHVzaChpdGVtKVxuICB9XG4gIGNvbnN0IGRhdGFMaXN0ID0gY2xlYW5EYXRhTGlzdChhcnIpXG4gIHJldHVybiBkYXRhTGlzdFxufVxuXG5mdW5jdGlvbiBnZXREYXRlICgpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcblxuICBsZXQgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICBsZXQgbW9udGggPSBtb250aHNbZGF0ZS5nZXRNb250aCgpXVxuICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBcbiAgcmV0dXJuIHtcbiAgICBcInRpdGxlRGF0ZVwiIDogZGF5ICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhcixcbiAgICBcIndlZWtkYXlcIiA6IHdlZWtkYXlbZGF0ZS5nZXREYXkoKV1cbiAgfVxufVxuXG5mdW5jdGlvbiB1bml4VG9EYXRlVGltZSAodW5peCkge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHVuaXggKiAxMDAwKVxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgbGV0IG1pbnV0ZXMgPSBcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpXG4gIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMuc2xpY2UoLTIpXG59XG5cbmZ1bmN0aW9uIHVuaXhUb0hvdXJzICh1bml4KSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUodW5peCAqIDEwMDApXG4gIHJldHVybiBkYXRlLmdldEhvdXJzKClcbn1cblxuaW1wb3J0IGNsZWFyIGZyb20gJy4vaW1nL2ljb25zL2NsZWFyLndlYnAnXG5pbXBvcnQgY2xlYXJNb29uIGZyb20gJy4vaW1nL2ljb25zL2NsZWFyLW1vb24ud2VicCdcbmltcG9ydCBicm9rZW4gZnJvbSAnLi9pbWcvaWNvbnMvYnJva2VuIGNsb3Vkcy53ZWJwJ1xuaW1wb3J0IHJhaW4gZnJvbSAnLi9pbWcvaWNvbnMvcmFpbi53ZWJwJ1xuaW1wb3J0IHRodW5kZXJzdG9ybSBmcm9tICcuL2ltZy9pY29ucy90aHVuZGVyc3Rvcm0ud2VicCdcbmltcG9ydCBzbm93IGZyb20gJy4vaW1nL2ljb25zL3Nub3cud2VicCdcbmltcG9ydCBtaXN0IGZyb20gJy4vaW1nL2ljb25zL21pc3Qud2VicCdcbmltcG9ydCBodW1pIGZyb20gJy4vaW1nL2ljb25zL2h1bWlkaXR5LndlYnAnXG5pbXBvcnQgdGVtcERheSBmcm9tICcuL2ltZy9pY29ucy90ZW1wLWRheS53ZWJwJ1xuaW1wb3J0IHRlbXBOaWdodCBmcm9tICcuL2ltZy9pY29ucy90ZW1wLW5pZ2h0LndlYnAnXG5pbXBvcnQgd2luZCBmcm9tICcuL2ltZy9pY29ucy93aW5kLndlYnAnXG5cbmZ1bmN0aW9uIGltYWdlTWFuYWdlciAoZGVzY3IsIGR0KSB7XG4gIGNvbnN0IGhvdXIgPSB1bml4VG9Ib3VycyhkdClcbiAgc3dpdGNoIChkZXNjcikge1xuICAgIGNhc2UgJ2h1bWknOiByZXR1cm4gaHVtaVxuICAgIGNhc2UgJ3RlbXAnOiBpZiAoaG91ciA+PSAyMSB8fCBob3VyIDwgOCkgcmV0dXJuIHRlbXBOaWdodFxuICAgICAgcmV0dXJuIHRlbXBEYXlcbiAgICBjYXNlICd3aW5kJzogcmV0dXJuIHdpbmRcbiAgICBjYXNlICdjbGVhcic6ICBpZiAoaG91ciA+PSAyMSB8fCBob3VyIDwgOCkgcmV0dXJuIGNsZWFyTW9vblxuICAgICAgcmV0dXJuIGNsZWFyXG4gICAgY2FzZSAnY2xvdWRzJzogcmV0dXJuIGJyb2tlblxuICAgIGNhc2UgJ3JhaW4nIHx8ICdkcml6emxlJzogcmV0dXJuIHJhaW5cbiAgICBjYXNlICd0aHVuZGVyc3Rvcm0nOiByZXR1cm4gdGh1bmRlcnN0b3JtXG4gICAgY2FzZSAnc25vdyc6IHJldHVybiBzbm93XG4gICAgZGVmYXVsdDogcmV0dXJuIG1pc3RcbiAgfVxufVxuXG5jb25zdCBtb3JuaW5nID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIwMSwxOTIsMjE1LDEpIDAlLCByZ2JhKDI0OSwyMjMsMjIyLDEpIDclLCByZ2JhKDI0OSwyMzUsMjM2LDEpIDEzJSwgcmdiYSgyMTMsMjI1LDIzNywxKSAzOSUsIHJnYmEoMTY3LDE5NCwyMjMsMSkgNjYlLCByZ2JhKDkxLDE0NCwxOTEsMSkgMTAwJSknXG5jb25zdCBkYXkgPSAnbGluZWFyLWdyYWRpZW50KDMxNWRlZywgcmdiYSg2NSwxOTYsMjIxLDEpIDAlLCByZ2JhKDMzLDE5MCwyNDYsMSkgNTAlLCByZ2JhKDEwMCwxNjgsMjI3LDEpIDEwMCUpJ1xuY29uc3QgZXZlbmluZyA9ICdsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNTEsMTMxLDEzMiwxKSAwJSwgcmdiYSgyMDEsMTY0LDE0OCwxKSA2JSwgcmdiYSgxOTQsMTc4LDE2NSwxKSAxNSUsIHJnYmEoMTY3LDE4MSwxODQsMSkgMjklLCByZ2JhKDg1LDEzOCwxOTAsMSkgNjElLCByZ2JhKDMzLDY1LDE0MSwxKSAxMDAlKSdcbmNvbnN0IG5pZ2h0ID0gJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCwxMzksMTQ1LDEpIDAlLCByZ2JhKDU1LDEzMywxNDUsMSkgMTglLCByZ2JhKDQ4LDc4LDg1LDEpIDYwJSwgcmdiYSg1Miw1MCw0OSwxKSAxMDAlKSdcbmNvbnN0IG1vcm5pbmdDb2xvciA9ICdyZ2IoNDYsIDIzLCA2OSwgMC40KSdcbmNvbnN0IGRheUNvbG9yID0gJ3JnYigyMywgNDUsNzksIDAuNCknXG5jb25zdCBldmVuaW5nQ29sb3IgPSAncmdiKDc5LCAyOCwgMjMsIDAuNCknXG5jb25zdCBuaWdodENvbG9yID0gJ3JnYig3LCAyNSwgMjAsIDAuNCknXG5cbmZ1bmN0aW9uIHN0eWxlciAoZHQpIHtcbiAgY29uc3QgaG91ciA9IHVuaXhUb0hvdXJzKGR0KVxuICBsZXQgZGVzaWduID0ge31cbiAgbGV0IG1vcm5pbmdDYXJkID0gJycgLy8gd2hpdGUgaGFzIGxvdyByZWFkYWJpbGl0eVxuICBpZiAoaG91ciA+PSAyMiB8fCBob3VyIDwgNSkge1xuICAgIGRlc2lnbi5iZyA9IG5pZ2h0XG4gICAgZGVzaWduLmNvbG9yID0gbmlnaHRDb2xvclxuICB9IGVsc2UgaWYgKGhvdXIgPj0gNiAmJiBob3VyIDwgMTApIHtcbiAgICBkZXNpZ24uYmcgPSBtb3JuaW5nXG4gICAgZGVzaWduLmNvbG9yID0gbW9ybmluZ0NvbG9yXG4gICAgbW9ybmluZ0NhcmQgPSBgI2NhcmQtdGl0bGUgeyBjb2xvcjogJHtkZXNpZ24uY29sb3J9OyB9YFxuICB9IGVsc2UgaWYgKGhvdXIgPj0gMTAgJiYgaG91ciA8IDE3KSB7XG4gICAgZGVzaWduLmJnID0gZGF5XG4gICAgZGVzaWduLmNvbG9yID0gZGF5Q29sb3JcbiAgfSBlbHNlIHtcbiAgICBkZXNpZ24uYmcgPSBldmVuaW5nXG4gICAgZGVzaWduLmNvbG9yID0gZXZlbmluZ0NvbG9yXG4gIH1cbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZS5pbm5lclRleHQgPSBgXG4gICNjb250YWluZXIgeyBiYWNrZ3JvdW5kOiAjZTllZWYwOyBiYWNrZ3JvdW5kOiAke2Rlc2lnbi5iZ307IH0gXG4gIC5ob3VyLWNvbG9yIHsgYmFja2dyb3VuZC1jb2xvcjogJHtkZXNpZ24uY29sb3J9OyB9IFxuICAke21vcm5pbmdDYXJkfVxuICAjY2FyZC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggJHtkZXNpZ24uY29sb3J9OyB9XG4gICNjYXJkLWJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiAke2Rlc2lnbi5jb2xvcn07IH1cbiAgYFxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihjaXR5KSB7XG4gIGNvbnN0IGFuc3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgYW5zd2VyLmlkID0gJ2Fuc3dlci1lcnJvcidcbiAgYW5zd2VyLmlubmVySFRNTCA9IGBcIiR7Y2l0eX1cIiBpc24ndCBpbiB0aGUgZGF0YWJhc2UsIHRyeSBhbm90aGVyIGNpdHkhYFxuICByZXR1cm4gYW5zd2VyXG59XG5cbmV4cG9ydCB7XG4gIG1ha2VEYXRhLFxuICBtYWtlRGF0YUxpc3QsXG4gIGdldERhdGUsXG4gIHVuaXhUb0RhdGVUaW1lLFxuICBpbWFnZU1hbmFnZXIsXG4gIHN0eWxlcixcbiAgaGFuZGxlRXJyb3Jcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgc2VhcmNoSWNvbiBmcm9tICcuL2ltZy9pY29ucy9zZWFyY2gud2VicCdcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dC5pZCA9ICdzZWFyY2gtaW5wdXQnXG5pbnB1dC50eXBlID0gJ3RleHQnXG5pbnB1dC5yZXF1aXJlZCA9IHRydWVcbmlucHV0LnBsYWNlaG9sZGVyID0gJ0Ftc3RlcmRhbSdcblxuY29uc3Qgc2VhcmNoSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbnNlYXJjaEltZy5pZCA9ICdzZWFyY2gtaW1hZ2UnXG5zZWFyY2hJbWcuc3JjID0gc2VhcmNoSWNvblxuXG5jb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuc2VhcmNoQm94LmlkID0gJ3NlYXJjaC1ib3gnXG5zZWFyY2hCb3guYXBwZW5kQ2hpbGQoaW5wdXQpXG5zZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoSW1nKVxuXG5zZWFyY2hJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgncGxlYXNlIGNob29zZSBhIGNpdHknKTtcbiAgICBpbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJydcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudChpbnB1dC52YWx1ZSkpXG4gICAgaW5wdXQudmFsdWUgPSAnJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KVxuICB9XG59KVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgnYmVybGluJykpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlYXJjaEJveClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==