/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/forecast.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/forecast.css ***!
  \****************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#forecast {\n  display: flex;\n  align-items: end;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  gap : 15px;\n}\n\n#forecast-title {\n  text-transform: uppercase;\n}\n\n#card-box {\n  height: 310px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  /* background: rgb(223, 223, 223, 0.4); */\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n  /* background-clip: content-box;\n  border: 5px solid transparent; */\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 250px;\n  width: 175px;\n  flex-shrink: 0;\n  background-color: rgb(46, 23, 79, .4);\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/forecast.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,gBAAgB,EAAE,mBAAmB;AACvC;;AAEA,UAAU;AACV;EACE,YAAY;AACd;;AAEA,UAAU;AACV;EACE,yCAAyC;EACzC,iDAAiD;EACjD,mBAAmB;EACnB;kCACgC;AAClC;;AAEA,WAAW;AACX;EACE,WAAW;EACX,oCAAoC;EACpC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,qCAAqC;EACrC,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B,EAAE,mBAAmB;AACjD;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC","sourcesContent":["#forecast {\n  display: flex;\n  align-items: end;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  gap : 15px;\n}\n\n#forecast-title {\n  text-transform: uppercase;\n}\n\n#card-box {\n  height: 310px;\n  display: flex;\n  align-items: start;\n  gap: 20px;\n  overflow-x: auto; /* top scrollbar  */\n}\n\n/* width */\n::-webkit-scrollbar {\n  height: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  /* background: rgb(223, 223, 223, 0.4); */\n  box-shadow: inset 1px 1px 5px rgba(255, 255, 255);\n  border-radius: 10px;\n  /* background-clip: content-box;\n  border: 5px solid transparent; */\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  height: 8px;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n}\n\n.card {\n  height: 250px;\n  width: 175px;\n  flex-shrink: 0;\n  background-color: rgb(46, 23, 79, .4);\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n  justify-content: center;\n}\n\n.rotate {\n  transform: rotateX(180deg); /* top scrollbar  */\n}\n\n.card-temp {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  background-color: rgb(46, 23, 79, .4);\n  margin: 0;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  border-radius:0 0 15px 15px;\n}\n\n#title {\n  text-align: right;\n}\n\n#info {\n  display: flex;\n  gap: 20px;\n}\n\n#weather-now {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 10px;\n}\n\n.weather-more-img {\n  height: 90px;\n  width: 90px;\n}\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,qCAAqC;EACrC,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":["#main {\n  height: 60vh;\n  display: flex;\n  justify-content: center;\n}\n\n#today {\n  background-color: rgb(46, 23, 79, .4);\n  margin: 0;\n  width: 50vw;\n  min-width: 500px;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  border-radius:0 0 15px 15px;\n}\n\n#title {\n  text-align: right;\n}\n\n#info {\n  display: flex;\n  gap: 20px;\n}\n\n#weather-now {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather-more {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 10px;\n}\n\n.weather-more-img {\n  height: 90px;\n  width: 90px;\n}\n"],"sourceRoot":""}]);
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n\n}\n\nhtml {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  color: white;\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n}\n\nh2 {\n  /* text-transform: uppercase; */\n  text-align: center;\n}\n\nh3 {\n  font-weight: lighter;\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(193, 255, 255);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;;AAEf;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,gDAAgD;AAClD;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,oCAAoC;AACtC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml::-webkit-scrollbar {\n  display: none;\n\n}\n\nhtml {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  color: white;\n  font-family: Tahoma, Geneva, Verdana, sans-serif;\n}\n\nh1 {\n  text-transform: uppercase;\n  text-align: center;\n}\n\nh2 {\n  /* text-transform: uppercase; */\n  text-align: center;\n}\n\nh3 {\n  font-weight: lighter;\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(193, 255, 255);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/forecast.css":
/*!**************************!*\
  !*** ./src/forecast.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./forecast.css */ "./node_modules/css-loader/dist/cjs.js!./src/forecast.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forecast_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/forecast-cards.js":
/*!*******************************!*\
  !*** ./src/forecast-cards.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function forecastCards (data) {
  const dataList = data

  const cardBox = document.createElement('div')
  cardBox.id = 'card-box'
  cardBox.classList.add('rotate')

  dataList.map((item) => {
    let card = document.createElement('div')
    card.classList.add('card', 'rotate')
    let date = document.createElement('h3')
    date.classList.add('card-date')
    date.innerHTML = item.dt

    let img = document.createElement('img')
    img.src = 'http://placekitten.com/150/150'
    let weather = document.createElement('p')
    weather.innerHTML = item.fore

    let temp = document.createElement('div')
    temp.classList.add('card-temp')
    let min =  document.createElement('p')
    min.classList.add('temp-min')
    min.innerHTML = item.min
    let max =  document.createElement('p')
    max.classList.add('temp-max')
    max.innerHTML = item.max
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

/***/ "./src/forecast.js":
/*!*************************!*\
  !*** ./src/forecast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forecast_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast.css */ "./src/forecast.css");
/* harmony import */ var _forecast_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast-cards */ "./src/forecast-cards.js");



function forecast (data) {

  //title
  const title = document.createElement('p')
  title.id = 'forecast-title'
  title.innerHTML = 'next 5 days'
  // const before = document.createElement('p')
  // before.innerHTML = '<-'
  // const after = document.createElement('p')
  // after.innerHTML = '->'

  const titleCard = document.createElement('div')
  titleCard.classList.add('card')
  // titleCard.appendChild(before)
  titleCard.appendChild(title)
  // titleCard.appendChild(after)

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

/***/ "./src/main-info.js":
/*!**************************!*\
  !*** ./src/main-info.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mainInfo (data) {

  //now
  let weatherNowImg = document.createElement('img')
  weatherNowImg.id = 'weatheNowImg'
  weatherNowImg.src = 'http://placekitten.com/200/200'
  let weatherNowTxt = document.createElement('h2')
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
  tempImg.src = 'http://placekitten.com/100/100'
  let tempTxt = document.createElement('p')
  tempTxt.innerHTML = `${data.temp}° C`
  temp.appendChild(tempImg)
  temp.appendChild(tempTxt)

  const humi = document.createElement('div')
  humi.classList.add('weather-more')
  let humiImg = document.createElement('img')
  humiImg.classList.add('weather-more-img')
  humiImg.src = 'http://placekitten.com/100/100'
  let humiTxt = document.createElement('p')
  humiTxt.innerHTML = `${data.humi}%`
  humi.appendChild(humiImg)
  humi.appendChild(humiTxt)

  const wind = document.createElement('div')
  wind.classList.add('weather-more')
  let windImg = document.createElement('img')
  windImg.classList.add('weather-more-img')
  windImg.src = 'http://placekitten.com/100/100'
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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-info */ "./src/main-info.js");
/* harmony import */ var _support_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support-func */ "./src/support-func.js");




const fullDate = (0,_support_func__WEBPACK_IMPORTED_MODULE_2__.getDate)()

function main (data) {

  //title
  let date = document.createElement('h1')
  date.innerHTML = fullDate.titleDate
  let dayTime = document.createElement('h3')
  dayTime.innerHTML = `${data.name}, ${fullDate.weekday} UTC ${(0,_support_func__WEBPACK_IMPORTED_MODULE_2__.unixToDateTime)(data.dt)}`
  
  const title = document.createElement('div')
  title.id = 'title'
  title.appendChild(date)
  title.appendChild(dayTime)

  //info
  let info = (0,_main_info__WEBPACK_IMPORTED_MODULE_1__["default"])(data)

  //sub-container
  const today = document.createElement('div')
  today.id = 'today'
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
/* harmony export */   "makeData": () => (/* binding */ makeData),
/* harmony export */   "makeDataList": () => (/* binding */ makeDataList),
/* harmony export */   "unixToDateTime": () => (/* binding */ unixToDateTime)
/* harmony export */ });
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function makeData (x) {
  let data = {}
  data.weather = x.weather[0].main
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

function cleanDataList (j) {
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
        'fore' : curr.fore
      }
      date = currDate
    } else {
      dataList.push(item)
      item = {
        'dt' : `${currDate.slice(8, 10)} ${months[parseInt(currDate.slice(5, 7)-1)]}`,
        'min' : curr.temp,
        'max' : curr.temp,
        'fore' : curr.fore
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
      'fore' : y[i].weather[0].main
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast.js */ "./src/forecast.js");
/* harmony import */ var _support_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support-func */ "./src/support-func.js");





function component () {
  const container = document.createElement('div')
  container.id = 'container'
  
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=14772d2100c0f1e02315562e46c1ba6f', { mode : 'cors' })
  .then(function(response) {
    return response.json()
  .then(function(response) {
    let x = JSON.parse(JSON.stringify(response))
    let data = (0,_support_func__WEBPACK_IMPORTED_MODULE_3__.makeData)(x)

    container.appendChild((0,_main_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data))
  })
  })
  .catch(function(err) {
  console.log(err)
  })

  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=14772d2100c0f1e02315562e46c1ba6f', { mode : 'cors' })
  .then(function(response) {
    return response.json()
  .then(function(response) {
    let y = JSON.parse(JSON.stringify(response))
    y = y.list
    let dataList = (0,_support_func__WEBPACK_IMPORTED_MODULE_3__.makeDataList)(y)

    container.appendChild((0,_forecast_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dataList))
  })
  })
  .catch(function(err) {
  console.log(err)
  })

  return container
}

 document.body.appendChild(component())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9CO0FBQ1E7QUFDUTtBQUNtQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsZUFBZTtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdURBQVE7O0FBRXZCLDBCQUEwQixvREFBSTtBQUM5QixHQUFHO0FBQ0gsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVILG9IQUFvSCxlQUFlO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVk7O0FBRS9CLDBCQUEwQix3REFBUTtBQUNsQyxHQUFHO0FBQ0gsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvZm9yZWNhc3QuY3NzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL2ZvcmVjYXN0LmNzcz9jYjc3Iiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS8uL3NyYy9mb3JlY2FzdC1jYXJkcy5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5Ly4vc3JjL21haW4taW5mby5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvc3VwcG9ydC1mdW5jLmpzIiwid2VicGFjazovL3NpbXBseS13ZWF0aGVyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2ltcGx5LXdlYXRoZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaW1wbHktd2VhdGhlcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIGdhcCA6IDE1cHg7XFxufVxcblxcbiNmb3JlY2FzdC10aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4jY2FyZC1ib3gge1xcbiAgaGVpZ2h0OiAzMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDIwcHg7XFxuICBvdmVyZmxvdy14OiBhdXRvOyAvKiB0b3Agc2Nyb2xsYmFyICAqL1xcbn1cXG5cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgLyogYmFja2dyb3VuZDogcmdiKDIyMywgMjIzLCAyMjMsIDAuNCk7ICovXFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDVweCByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC8qIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XFxuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgKi9cXG59XFxuXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB3aWR0aDogMTc1cHg7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgMjMsIDc5LCAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpOyAvKiB0b3Agc2Nyb2xsYmFyICAqL1xcbn1cXG5cXG4uY2FyZC10ZW1wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZvcmVjYXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUUsbUJBQW1CO0FBQ3ZDOztBQUVBLFVBQVU7QUFDVjtFQUNFLFlBQVk7QUFDZDs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSx5Q0FBeUM7RUFDekMsaURBQWlEO0VBQ2pELG1CQUFtQjtFQUNuQjtrQ0FDZ0M7QUFDbEM7O0FBRUEsV0FBVztBQUNYO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCLEVBQUUsbUJBQW1CO0FBQ2pEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBnYXAgOiAxNXB4O1xcbn1cXG5cXG4jZm9yZWNhc3QtdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2NhcmQtYm94IHtcXG4gIGhlaWdodDogMzEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bzsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIC8qIGJhY2tncm91bmQ6IHJnYigyMjMsIDIyMywgMjIzLCAwLjQpOyAqL1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAvKiBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICovXFxufVxcblxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgd2lkdGg6IDE3NXB4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDIzLCA3OSwgLjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTsgLyogdG9wIHNjcm9sbGJhciAgKi9cXG59XFxuXFxuLmNhcmQtdGVtcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtYWluIHtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RvZGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgMjMsIDc5LCAuNCk7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNTB2dztcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6MCAwIDE1cHggMTVweDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1ub3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLW1vcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlLWltZyB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNtYWluIHtcXG4gIGhlaWdodDogNjB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RvZGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgMjMsIDc5LCAuNCk7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNTB2dztcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6MCAwIDE1cHggMTVweDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1ub3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLW1vcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1tb3JlLWltZyB7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogOTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5odG1sIHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjU1LCAyNTUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5odG1sIHtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MywgMjU1LCAyNTUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvcmVjYXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9yZWNhc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBmb3JlY2FzdENhcmRzIChkYXRhKSB7XG4gIGNvbnN0IGRhdGFMaXN0ID0gZGF0YVxuXG4gIGNvbnN0IGNhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjYXJkQm94LmlkID0gJ2NhcmQtYm94J1xuICBjYXJkQm94LmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZScpXG5cbiAgZGF0YUxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdyb3RhdGUnKVxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnY2FyZC1kYXRlJylcbiAgICBkYXRlLmlubmVySFRNTCA9IGl0ZW0uZHRcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5zcmMgPSAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xNTAvMTUwJ1xuICAgIGxldCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgd2VhdGhlci5pbm5lckhUTUwgPSBpdGVtLmZvcmVcblxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGVtcCcpXG4gICAgbGV0IG1pbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgndGVtcC1taW4nKVxuICAgIG1pbi5pbm5lckhUTUwgPSBpdGVtLm1pblxuICAgIGxldCBtYXggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ3RlbXAtbWF4JylcbiAgICBtYXguaW5uZXJIVE1MID0gaXRlbS5tYXhcbiAgICB0ZW1wLmFwcGVuZENoaWxkKG1pbilcbiAgICB0ZW1wLmFwcGVuZENoaWxkKG1heClcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZylcbiAgICBjYXJkLmFwcGVuZENoaWxkKHdlYXRoZXIpXG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIFxuICAgIGNhcmRCb3guYXBwZW5kKGNhcmQpXG4gIH0pXG4gIHJldHVybiBjYXJkQm94XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcmVjYXN0Q2FyZHNcbiIsImltcG9ydCAnLi9mb3JlY2FzdC5jc3MnXG5pbXBvcnQgZm9yZWNhc3RDYXJkcyBmcm9tICcuL2ZvcmVjYXN0LWNhcmRzJ1xuXG5mdW5jdGlvbiBmb3JlY2FzdCAoZGF0YSkge1xuXG4gIC8vdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgdGl0bGUuaWQgPSAnZm9yZWNhc3QtdGl0bGUnXG4gIHRpdGxlLmlubmVySFRNTCA9ICduZXh0IDUgZGF5cydcbiAgLy8gY29uc3QgYmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIC8vIGJlZm9yZS5pbm5lckhUTUwgPSAnPC0nXG4gIC8vIGNvbnN0IGFmdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIC8vIGFmdGVyLmlubmVySFRNTCA9ICctPidcblxuICBjb25zdCB0aXRsZUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0aXRsZUNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gIC8vIHRpdGxlQ2FyZC5hcHBlbmRDaGlsZChiZWZvcmUpXG4gIHRpdGxlQ2FyZC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgLy8gdGl0bGVDYXJkLmFwcGVuZENoaWxkKGFmdGVyKVxuXG4gIC8vY2FyZHNcbiAgY29uc3QgY2FyZEJveCA9IGZvcmVjYXN0Q2FyZHMoZGF0YSlcblxuICAvL2NvbnRhaW5lclxuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvcmVjYXN0LmlkID0gJ2ZvcmVjYXN0J1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZCh0aXRsZUNhcmQpXG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGNhcmRCb3gpXG5cbiAgcmV0dXJuIGZvcmVjYXN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcmVjYXN0IiwiZnVuY3Rpb24gbWFpbkluZm8gKGRhdGEpIHtcblxuICAvL25vd1xuICBsZXQgd2VhdGhlck5vd0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIHdlYXRoZXJOb3dJbWcuaWQgPSAnd2VhdGhlTm93SW1nJ1xuICB3ZWF0aGVyTm93SW1nLnNyYyA9ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8yMDAnXG4gIGxldCB3ZWF0aGVyTm93VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICB3ZWF0aGVyTm93VHh0LmlubmVySFRNTCA9IGRhdGEuZGVzY3JcblxuICBjb25zdCB3ZWF0aGVyTm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd2VhdGhlck5vdy5pZCA9ICd3ZWF0aGVyLW5vdydcbiAgd2VhdGhlck5vdy5hcHBlbmRDaGlsZCh3ZWF0aGVyTm93SW1nKVxuICB3ZWF0aGVyTm93LmFwcGVuZENoaWxkKHdlYXRoZXJOb3dUeHQpXG5cbiAgLy9tb3JlXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZScpXG4gIGxldCB0ZW1wSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgdGVtcEltZy5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUtaW1nJylcbiAgdGVtcEltZy5zcmMgPSAnaHR0cDovL3BsYWNla2l0dGVuLmNvbS8xMDAvMTAwJ1xuICBsZXQgdGVtcFR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICB0ZW1wVHh0LmlubmVySFRNTCA9IGAke2RhdGEudGVtcH3CsCBDYFxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBJbWcpXG4gIHRlbXAuYXBwZW5kQ2hpbGQodGVtcFR4dClcblxuICBjb25zdCBodW1pID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaHVtaS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLW1vcmUnKVxuICBsZXQgaHVtaUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIGh1bWlJbWcuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlLWltZycpXG4gIGh1bWlJbWcuc3JjID0gJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vMTAwLzEwMCdcbiAgbGV0IGh1bWlUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgaHVtaVR4dC5pbm5lckhUTUwgPSBgJHtkYXRhLmh1bWl9JWBcbiAgaHVtaS5hcHBlbmRDaGlsZChodW1pSW1nKVxuICBodW1pLmFwcGVuZENoaWxkKGh1bWlUeHQpXG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdpbmQuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1tb3JlJylcbiAgbGV0IHdpbmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICB3aW5kSW1nLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItbW9yZS1pbWcnKVxuICB3aW5kSW1nLnNyYyA9ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tLzEwMC8xMDAnXG4gIGxldCB3aW5kVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIHdpbmRUeHQuaW5uZXJIVE1MID0gYCR7ZGF0YS53aW5kfSBtL3NgXG4gIHdpbmQuYXBwZW5kQ2hpbGQod2luZEltZylcbiAgd2luZC5hcHBlbmRDaGlsZCh3aW5kVHh0KVxuXG4gIGNvbnN0IHdlYXRoZXJNb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgd2VhdGhlck1vcmUuYXBwZW5kQ2hpbGQodGVtcClcbiAgd2VhdGhlck1vcmUuYXBwZW5kQ2hpbGQoaHVtaSlcbiAgd2VhdGhlck1vcmUuYXBwZW5kQ2hpbGQod2luZClcblxuICAvL2NvbnRhaW5lclxuICBjb25zdCBpbmZvID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGluZm8uaWQgPSAnaW5mbydcbiAgaW5mby5hcHBlbmRDaGlsZCh3ZWF0aGVyTm93KVxuICBpbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJNb3JlKVxuXG4gIHJldHVybiBpbmZvXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5JbmZvXG4iLCJpbXBvcnQgJy4vbWFpbi5jc3MnXG5pbXBvcnQgbWFpbkluZm8gZnJvbSAnLi9tYWluLWluZm8nXG5pbXBvcnQgeyBnZXREYXRlLCB1bml4VG9EYXRlVGltZSB9IGZyb20gJy4vc3VwcG9ydC1mdW5jJ1xuXG5jb25zdCBmdWxsRGF0ZSA9IGdldERhdGUoKVxuXG5mdW5jdGlvbiBtYWluIChkYXRhKSB7XG5cbiAgLy90aXRsZVxuICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgZGF0ZS5pbm5lckhUTUwgPSBmdWxsRGF0ZS50aXRsZURhdGVcbiAgbGV0IGRheVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGRheVRpbWUuaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfSwgJHtmdWxsRGF0ZS53ZWVrZGF5fSBVVEMgJHt1bml4VG9EYXRlVGltZShkYXRhLmR0KX1gXG4gIFxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRpdGxlLmlkID0gJ3RpdGxlJ1xuICB0aXRsZS5hcHBlbmRDaGlsZChkYXRlKVxuICB0aXRsZS5hcHBlbmRDaGlsZChkYXlUaW1lKVxuXG4gIC8vaW5mb1xuICBsZXQgaW5mbyA9IG1haW5JbmZvKGRhdGEpXG5cbiAgLy9zdWItY29udGFpbmVyXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdG9kYXkuaWQgPSAndG9kYXknXG4gIHRvZGF5LmFwcGVuZENoaWxkKHRpdGxlKVxuICB0b2RheS5hcHBlbmRDaGlsZChpbmZvKVxuXG4gIC8vY29uYXRpbmVyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtYWluLmlkID0gJ21haW4nXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9kYXkpXG5cbiAgcmV0dXJuIG1haW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpblxuIiwiY29uc3Qgd2Vla2RheSA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxuY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cblxuZnVuY3Rpb24gbWFrZURhdGEgKHgpIHtcbiAgbGV0IGRhdGEgPSB7fVxuICBkYXRhLndlYXRoZXIgPSB4LndlYXRoZXJbMF0ubWFpblxuICBkYXRhLmRlc2NyID0geC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gIGRhdGEudGVtcCA9ICh4Lm1haW4udGVtcCAtIDI3My4xNSkudG9GaXhlZCgyKVxuICBkYXRhLmh1bWkgPSB4Lm1haW4uaHVtaWRpdHlcbiAgZGF0YS53aW5kID0geC53aW5kLnNwZWVkXG4gIGRhdGEubmFtZSA9IHgubmFtZVxuICBkYXRhLmR0ID0geC5kdFxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRGF0YUxpc3QgKGopIHtcbiAgbGV0IGRhdGFMaXN0ID0gW11cbiAgbGV0IGRhdGUgPSAnJ1xuICBsZXQgaXRlbSA9IHt9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgai5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjdXJyID0galtpXVxuICAgIGxldCBjdXJyRGF0ZSA9IGN1cnIuZHQuc2xpY2UoMCwgMTApXG4gICAgaWYgKCBjdXJyRGF0ZSA9PT0gZGF0ZSApIHtcbiAgICAgIGlmIChpdGVtLm1pbiA+IGN1cnIudGVtcCkgaXRlbS5taW4gPSBjdXJyLnRlbXBcbiAgICAgIGlmIChpdGVtLm1heCA8IGN1cnIudGVtcCkgaXRlbS5tYXggPSBjdXJyLnRlbXBcbiAgICB9IGVsc2UgaWYgKCBpc0VtcHR5KGl0ZW0pICkgeyAvL2ZpcnN0XG4gICAgICBpdGVtID0ge1xuICAgICAgICAnZHQnIDogYCR7Y3VyckRhdGUuc2xpY2UoOCwgMTApfSAke21vbnRoc1twYXJzZUludChjdXJyRGF0ZS5zbGljZSg1LCA3KS0xKV19YCxcbiAgICAgICAgJ21pbicgOiBjdXJyLnRlbXAsXG4gICAgICAgICdtYXgnIDogY3Vyci50ZW1wLFxuICAgICAgICAnZm9yZScgOiBjdXJyLmZvcmVcbiAgICAgIH1cbiAgICAgIGRhdGUgPSBjdXJyRGF0ZVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhTGlzdC5wdXNoKGl0ZW0pXG4gICAgICBpdGVtID0ge1xuICAgICAgICAnZHQnIDogYCR7Y3VyckRhdGUuc2xpY2UoOCwgMTApfSAke21vbnRoc1twYXJzZUludChjdXJyRGF0ZS5zbGljZSg1LCA3KS0xKV19YCxcbiAgICAgICAgJ21pbicgOiBjdXJyLnRlbXAsXG4gICAgICAgICdtYXgnIDogY3Vyci50ZW1wLFxuICAgICAgICAnZm9yZScgOiBjdXJyLmZvcmVcbiAgICAgIH1cbiAgICAgIGRhdGUgPSBjdXJyRGF0ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YUxpc3Rcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFMaXN0ICh5KSB7XG4gIGxldCBhcnIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IHtcbiAgICAgICdkdCcgOiB5W2ldLmR0X3R4dCxcbiAgICAgICd0ZW1wJyA6IE1hdGgucm91bmQoeVtpXS5tYWluLnRlbXAgLSAyNzMuMTUpLFxuICAgICAgJ2ZvcmUnIDogeVtpXS53ZWF0aGVyWzBdLm1haW5cbiAgICB9XG4gICAgYXJyLnB1c2goaXRlbSlcbiAgfVxuICBjb25zdCBkYXRhTGlzdCA9IGNsZWFuRGF0YUxpc3QoYXJyKVxuICByZXR1cm4gZGF0YUxpc3Rcbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSAoKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG5cbiAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KClcbiAgbGV0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV1cbiAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgXG4gIHJldHVybiB7XG4gICAgXCJ0aXRsZURhdGVcIiA6IGRheSArIFwiIFwiICsgbW9udGggKyBcIiBcIiArIHllYXIsXG4gICAgXCJ3ZWVrZGF5XCIgOiB3ZWVrZGF5W2RhdGUuZ2V0RGF5KCldXG4gIH1cbn1cblxuZnVuY3Rpb24gdW5peFRvRGF0ZVRpbWUgKHVuaXgpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1bml4ICogMTAwMClcbiAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpXG4gIGxldCBtaW51dGVzID0gXCIwXCIgKyBkYXRlLmdldE1pbnV0ZXMoKVxuICByZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzLnNsaWNlKC0yKVxufVxuXG5leHBvcnQge1xuICBtYWtlRGF0YSxcbiAgbWFrZURhdGFMaXN0LFxuICBnZXREYXRlLFxuICB1bml4VG9EYXRlVGltZVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4uanMnXG5pbXBvcnQgZm9yZWNhc3QgZnJvbSAnLi9mb3JlY2FzdC5qcydcbmltcG9ydCB7IG1ha2VEYXRhLCBtYWtlRGF0YUxpc3QgfSBmcm9tICcuL3N1cHBvcnQtZnVuYydcblxuZnVuY3Rpb24gY29tcG9uZW50ICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcidcbiAgXG4gIGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9MzUmbG9uPTEzOSZhcHBpZD0xNDc3MmQyMTAwYzBmMWUwMjMxNTU2MmU0NmMxYmE2ZicsIHsgbW9kZSA6ICdjb3JzJyB9KVxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBsZXQgeCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgIGxldCBkYXRhID0gbWFrZURhdGEoeClcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKGRhdGEpKVxuICB9KVxuICB9KVxuICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gIGNvbnNvbGUubG9nKGVycilcbiAgfSlcblxuICBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0zNSZsb249MTM5JmFwcGlkPTE0NzcyZDIxMDBjMGYxZTAyMzE1NTYyZTQ2YzFiYTZmJywgeyBtb2RlIDogJ2NvcnMnIH0pXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGxldCB5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXG4gICAgeSA9IHkubGlzdFxuICAgIGxldCBkYXRhTGlzdCA9IG1ha2VEYXRhTGlzdCh5KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0KGRhdGFMaXN0KSlcbiAgfSlcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICBjb25zb2xlLmxvZyhlcnIpXG4gIH0pXG5cbiAgcmV0dXJuIGNvbnRhaW5lclxufVxuXG4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=