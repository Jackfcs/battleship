/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: rgb(242, 244, 255);\n    margin: 0px;\n    z-index: 1;\n    font-family: verdana, sans-serif;\n    font-weight: 200;\n    overflow: hidden;\n}\n\n.info-cont {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#game-info {\n    border: solid rgb(58, 58, 58) 1px;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    width: 30%;\n    min-width: 300px;\n    color: rgb(58, 58, 58)\n}\n\n.boards{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n    margin: 20px;\n    transition: visibility 0s, opacity 0.5s linear;\n}\n\n.cell {\n    border: solid rgb(97, 97, 97) .1px;\n    margin: 1px;\n}\n\n.cell-legend {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.cell-hit{\n    background-color: rgb(87, 160, 255);\n}\n\n.cell-not-hit {\n    background-color: rgb(208, 255, 255);\n}\n\n.cell-ship {\n    background-color: grey;\n}\n\n.cell-ship-hit {\n    background-color: rgb(255, 86, 86);\n}\n\n.ship-destroyed{\n    background-color: rgb(255, 169, 88);\n}\n\n.cell-placing {\n    border: 2px solid black;\n}\n\n.ship{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n}\n\n.ship-cell{\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n#orientation {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n    width: 100px;\n    margin: 10px;\n    justify-self: center;\n}\n\n#orientation:hover {\n    cursor: pointer;\n}\n\n#orientation:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#legend {\n    display: flex;\n    flex-direction: column;\n    color: rgb(58, 58, 58);\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.legend-title {\n    font-weight: bold;\n}\n\n.legend-row {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 5px;\n    align-self: center;\n    height: 300px\n}\n\n.below {\n    display: flex;\n    flex-direction: row;\n    padding-top: 20px;\n    justify-content: flex-end;\n    position: relative;\n    left: 80px;\n}\n\n#win-screen{\n    position: absolute;\n    left: 50%;\n    top: 35%;\n    transform: translate(-50%, -50%);\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 10px;\n    display: none;\n    flex-direction: column;\n    justify-items: center;\n    width: 30%;\n    background-color: rgb(242, 244, 255);\n    z-index: 3;\n}\n\n.end-contents {\n    margin: 10px auto 10px auto;\n    font-size: 30px;\n    color: rgb(58, 58, 58)\n    \n}\n\n#restart {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n}\n\n#restart:hover {\n    cursor: pointer;\n}\n\n#restart:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#bg {\n    backdrop-filter: blur(5px);\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    position: absolute;\n    top: 0%;\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,WAAW;IACX,UAAU;IACV,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;IACvC,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iCAAiC;IACjC,kBAAkB;IAClB,kBAAkB;IAClB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,UAAU;IACV,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf;;AAEJ;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,aAAa;AACjB","sourcesContent":["body {\n    background-color: rgb(242, 244, 255);\n    margin: 0px;\n    z-index: 1;\n    font-family: verdana, sans-serif;\n    font-weight: 200;\n    overflow: hidden;\n}\n\n.info-cont {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#game-info {\n    border: solid rgb(58, 58, 58) 1px;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    width: 30%;\n    min-width: 300px;\n    color: rgb(58, 58, 58)\n}\n\n.boards{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n    margin: 20px;\n    transition: visibility 0s, opacity 0.5s linear;\n}\n\n.cell {\n    border: solid rgb(97, 97, 97) .1px;\n    margin: 1px;\n}\n\n.cell-legend {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.cell-hit{\n    background-color: rgb(87, 160, 255);\n}\n\n.cell-not-hit {\n    background-color: rgb(208, 255, 255);\n}\n\n.cell-ship {\n    background-color: grey;\n}\n\n.cell-ship-hit {\n    background-color: rgb(255, 86, 86);\n}\n\n.ship-destroyed{\n    background-color: rgb(255, 169, 88);\n}\n\n.cell-placing {\n    border: 2px solid black;\n}\n\n.ship{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n}\n\n.ship-cell{\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n#orientation {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n    width: 100px;\n    margin: 10px;\n    justify-self: center;\n}\n\n#orientation:hover {\n    cursor: pointer;\n}\n\n#orientation:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#legend {\n    display: flex;\n    flex-direction: column;\n    color: rgb(58, 58, 58);\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.legend-title {\n    font-weight: bold;\n}\n\n.legend-row {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 5px;\n    align-self: center;\n    height: 300px\n}\n\n.below {\n    display: flex;\n    flex-direction: row;\n    padding-top: 20px;\n    justify-content: flex-end;\n    position: relative;\n    left: 80px;\n}\n\n#win-screen{\n    position: absolute;\n    left: 50%;\n    top: 35%;\n    transform: translate(-50%, -50%);\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 10px;\n    display: none;\n    flex-direction: column;\n    justify-items: center;\n    width: 30%;\n    background-color: rgb(242, 244, 255);\n    z-index: 3;\n}\n\n.end-contents {\n    margin: 10px auto 10px auto;\n    font-size: 30px;\n    color: rgb(58, 58, 58)\n    \n}\n\n#restart {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n}\n\n#restart:hover {\n    cursor: pointer;\n}\n\n#restart:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#bg {\n    backdrop-filter: blur(5px);\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    position: absolute;\n    top: 0%;\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/GameBoard.js":
/*!************************************!*\
  !*** ./src/factories/GameBoard.js ***!
  \************************************/
/***/ ((module) => {

const GameBoard = () => {
  let board = [];
  let ships = [];

  for (let i = 0; i < 100; i++) {
    board.push({
      isShip: false,
      hit: false,
    });
  }

  //Place new ship on board
  const placeShip = (ship, coord, horizontal) => {

    //Create shipArray to add to board
    let shipArray = [];
    for (let i = 0; i < ship.length; i++) {
      shipArray.push({
        isShip: true,
        hit: false,
        shipID: ship.id,
        sector: i + 1,
      });
    }

    //Tests for vertical placement 
    if (!horizontal) {
      //If ship placement will be over border
      if (coord > 109 - ship.length * 10){
        return
      }

      //If ship overlaps other ships
      for (let i = 0; i < ship.length; i++){
        
        if (board[coord + (i * 10)].isShip || board[coord].isShip) {
                return;
              }
        
      }
      
      

      //If checks have passed, place ship
      for (let i = 0; i < ship.length; i++){
        

        board.splice(coord + i * 10, 1, shipArray[i])
      }
      
    }

    //Test if ship placement will be over border
    for (let i = 1; i < 10; i++){
      if (coord >= (i * 10) + 1 - ship.length && coord < i * 10) {
        return;
      }
    }

    // test if ship placement will overlap other ships
    if (board[coord + ship.length - 1].isShip || board[coord].isShip) {
      return;
    }
    
    
    //Add ship to board
    board.splice(coord, ship.length, ...shipArray);
    //Add ship to board memory
    ships.push(ship);
  
    
  };

  //Register hit on ship

  const receiveAttack = (coord) => {
    board[coord].hit = true;
    // if (board[coord].shipID) {
    //   //if hits boat
    // }
  };

  //Check for remaining ships

  const shipsRemain = () => {
    const found = board.some((obj) => obj.isShip === true && obj.hit === false);

    return found;
  };

  return {
    board,
    receiveAttack,
    placeShip,
    shipsRemain,
    ships,
  };
};

module.exports = GameBoard;


/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((module) => {

const Player = (name) => {
  let turns = [];

  const randomPlace = (board, ship, horizontal) => {
    let num;

    if (!horizontal) {
      num = Math.floor(Math.random() * 60);
      //Prevent ships overlapping
      for (let i = 0; i < ship.length; i++) {
        while (board[num + i * 10].isShip || board[num].isShip) {
          num = Math.floor(Math.random() * 60);
        }
      }

      //Prevent ships placed over border
      if (num > 109 - ship.length * 10) {
        num = Math.floor(Math.random() * 60);
      }
    } else if (horizontal) {
      num = Math.floor(Math.random() * 96);
      //Prevent ships overlapping
      while (board[num + ship.length - 1].isShip || board[num].isShip) {
        num = Math.floor(Math.random() * 96);
      }

      //prevent ships being placed over border
      for (let i = 1; i < 10; i++) {
        while (num >= i * 10 + 1 - ship.length && num < i * 10) {
          num = num - 1;
        }
      }
    }
    return num;
  };

  const randomMove = (array) => {
    let randomSelection = array[Math.floor(Math.random() * array.length)];
    const index = array.indexOf(randomSelection);
    array.splice(index, 1);

    //let randomSelection = Math.floor(Math.random() * 20);

    return randomSelection;
  };

  return {
    name,
    turns,
    randomMove,
    randomPlace,
  };
};

module.exports = Player;


/***/ }),

/***/ "./src/factories/Ship.js":
/*!*******************************!*\
  !*** ./src/factories/Ship.js ***!
  \*******************************/
/***/ ((module) => {

const Ship = (length, id) => {

    //Create sectors matching length
    let sectors = []
    sectors.length = length
    sectors.fill(false, 0)


    //Register hit on sector
    const hit = (pos) => {
        if(pos > sectors.length){
            return
        }
        sectors[pos - 1] = true
    }

    // Check if ship has been sunk
    const isSunk = () => {

        return sectors.every(elem => elem === true);
        
    }

   

    return {
        length, id, isSunk, sectors, hit
    }
}

let ship1 = Ship(1)

module.exports = Ship


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Ship */ "./src/factories/Ship.js");
/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_factories_Ship__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _factories_GameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/GameBoard */ "./src/factories/GameBoard.js");
/* harmony import */ var _factories_GameBoard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_factories_GameBoard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Player */ "./src/factories/Player.js");
/* harmony import */ var _factories_Player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_factories_Player__WEBPACK_IMPORTED_MODULE_2__);




const game = () => {
  let playerBoard = _factories_GameBoard__WEBPACK_IMPORTED_MODULE_1___default()();
  let cpuBoard = _factories_GameBoard__WEBPACK_IMPORTED_MODULE_1___default()();
  let player = _factories_Player__WEBPACK_IMPORTED_MODULE_2___default()("player");
  let cpu = _factories_Player__WEBPACK_IMPORTED_MODULE_2___default()("CPU");
  const cpuBoardContainer = document.getElementById("cpu-board");
  let cpuCells = Array.from(document.querySelectorAll(".cpu-cell"));
  let playerCells = Array.from(document.querySelectorAll(".player-cell"));
  const shipBtn1 = document.getElementById("ship1");
  const shipBtn2 = document.getElementById("ship2");
  const shipBtn3 = document.getElementById("ship3");
  const shipBtn4 = document.getElementById("ship4");
  const shipBtn5 = document.getElementById("ship5");
  const gameInfo = document.getElementById("game-info");
  const ship1 = _factories_Ship__WEBPACK_IMPORTED_MODULE_0___default()(2, 1);
  const ship2 = _factories_Ship__WEBPACK_IMPORTED_MODULE_0___default()(3, 2);
  const ship3 = _factories_Ship__WEBPACK_IMPORTED_MODULE_0___default()(4, 3);
  const ship4 = _factories_Ship__WEBPACK_IMPORTED_MODULE_0___default()(4, 4);
  const ship5 = _factories_Ship__WEBPACK_IMPORTED_MODULE_0___default()(5, 5);
  let currentShip = ship1;
  const orientBtn = document.getElementById("orientation");
  let horizontal = true;
  const legend = document.getElementById("legend");
  const restart = document.getElementById("restart");
  const right = document.querySelector(".right");
  const winScreen = document.getElementById("win-screen");
  const endText = document.getElementById("winner");
  const bg = document.getElementById("bg");
  legend.style.display = "none";
  //Create array for random selections
  let selections = [];
  for (let i = 0; i < 100; i++) {
    selections.push(i);
  }

  orientBtn.textContent = "Horizontal";
  orientBtn.addEventListener("click", () => {
    if (orientBtn.textContent === "Vertical") {
      orientBtn.textContent = "Horizontal";
      horizontal = true;
    } else if (orientBtn.textContent === "Horizontal") {
      orientBtn.textContent = "Vertical";
      horizontal = false;
    }
  });

  //Hover color change

  playerCells.forEach((cell) => {
    if (playerBoard.board.some((obj) => obj.shipID === 1)) {
      currentShip = ship1;
    }

    cell.addEventListener("mouseenter", () => {
      let index = playerCells.indexOf(cell);
      for (let i = 0; i < currentShip.length; i++) {
        if (horizontal === false) {
          try {
            playerCells[index + i * 10].classList.add("cell-placing");
          } catch (e) {
            return;
          }
        } else if (horizontal) {
          try {
            playerCells[index + i].classList.add("cell-placing");
          } catch (e) {
            return;
          }
        }
      }
    });
    cell.addEventListener("mouseleave", () => {
      let index = playerCells.indexOf(cell);
      for (let i = 0; i < currentShip.length; i++) {
        if (horizontal === false) {
          try {
            playerCells[index + i * 10].classList.remove("cell-placing");
          } catch (e) {
            return;
          }
        } else if (horizontal) {
          try {
            playerCells[index + i].classList.remove("cell-placing");
          } catch (e) {
            return;
          }
        }
      }
    });
  });

  //Place ships on players board
  const placeShips = (board) => {
    gameInfo.textContent = "Place your first ship";
    cpuBoardContainer.style.display = "none";
    playerCells.forEach((cell) => {
      let index = playerCells.indexOf(cell);

      cell.addEventListener("click", () => {
        if (!board.board.some((obj) => obj.shipID)) {
          board.placeShip(ship1, index, horizontal);

          if (board.board.some((obj) => obj.shipID === 1)) {
            currentShip = ship2;
            shipBtn1.style.display = "none";
            gameInfo.textContent = "Place your second ship";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 1 && !board.board.some((obj) => obj.shipID === 2)
          )
        ) {
          board.placeShip(ship2, index, horizontal);

          if (board.board.some((obj) => obj.shipID === 2)) {
            currentShip = ship3;
            gameInfo.textContent = "Place your third ship";
            shipBtn2.style.display = "none";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 2 && !board.board.some((obj) => obj.shipID === 3)
          )
        ) {
          board.placeShip(ship3, index, horizontal);

          if (board.board.some((obj) => obj.shipID === 3)) {
            currentShip = ship4;
            shipBtn3.style.display = "none";
            gameInfo.textContent = "Place your fourth ship";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 3 && !board.board.some((obj) => obj.shipID === 4)
          )
        ) {
          board.placeShip(ship4, index, horizontal);

          if (board.board.some((obj) => obj.shipID === 4)) {
            currentShip = ship5;
            shipBtn4.style.display = "none";
            gameInfo.textContent = "Place your final ship";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 4 && !board.board.some((obj) => obj.shipID === 5)
          )
        ) {
          board.placeShip(ship5, index, horizontal);

          //Remove hover class
          for (let i = 0; i < 100; i++) {
            playerCells[i].classList.remove("cell-placing");
          }

          //Actions for after 5th boat placed
          if (board.board.some((obj) => obj.shipID === 5)) {
            cpuPlace();
            right.style.display = "none";
            legend.style.display = "flex";
            currentShip = false;
            shipBtn5.style.display = "none";
            gameInfo.textContent = "Attack Enemy Board";

            cpuBoardContainer.style.display = "grid";
          }
        }
        updateBoard(board, playerCells);
      });
    });
  };

  const updateBoard = (board, cells) => {
    let ship1 = board.board.filter(function (obj) {
      return obj.shipID === 1 && obj.hit;
    });
    let ship2 = board.board.filter(function (obj) {
      return obj.shipID === 2 && obj.hit;
    });
    let ship3 = board.board.filter(function (obj) {
      return obj.shipID === 3 && obj.hit;
    });
    let ship4 = board.board.filter(function (obj) {
      return obj.shipID === 4 && obj.hit;
    });
    let ship5 = board.board.filter(function (obj) {
      return obj.shipID === 5 && obj.hit;
    });

    for (let i = 0; i < 100; i++) {
      if (
        board.board[i].isShip &&
        !board.board[i].hit &&
        board === playerBoard
      ) {
        cells[i].classList.remove("cell-not-hit");
        cells[i].classList.add("cell-ship");
      } else if (board.board[i].isShip && board.board[i].hit) {
        cells[i].classList.remove("cell-not-hit");
        cells[i].classList.add("cell-ship-hit");
      } else if (board.board[i].hit && !board.board[i].isShip) {
        cells[i].classList.remove("cell-not-hit");
        cells[i].classList.add("cell-hit");
      }

      if (ship1.length === 2 && board.board[i].shipID === 1) {
        cells[i].classList.add("ship-destroyed");
      }
      if (ship2.length === 3 && board.board[i].shipID === 2) {
        cells[i].classList.add("ship-destroyed");
      }
      if (ship3.length === 4 && board.board[i].shipID === 3) {
        cells[i].classList.add("ship-destroyed");
      }
      if (ship4.length === 4 && board.board[i].shipID === 4) {
        cells[i].classList.add("ship-destroyed");
      }
      if (ship5.length === 5 && board.board[i].shipID === 5) {
        cells[i].classList.add("ship-destroyed");
      }
    }
  };

  //Adds click event on each enemy cell and registers hit
  const hitBoard = (board) => {
    cpuCells.forEach((cell) => {
      let index = cpuCells.indexOf(cell);
      cell.addEventListener("click", () => {
        if (board.board[index].hit) {
          return;
        }
        board.receiveAttack(index);
        updateBoard(cpuBoard, cpuCells);
        cpuAttack();
        if (!cpuBoard.shipsRemain()) {
          displayEndScreen();
          endText.textContent = "You Win!";
        } else if (!playerBoard.shipsRemain()) {
          displayEndScreen();
          endText.textContent = "You Lose!";
        }
      });
    });
  };

  const displayEndScreen = () => {
    winScreen.style.display = "flex";
    bg.style.display = "block";
  };

  const cpuPlace = () => {
    cpuBoard.placeShip(
      ship1,
      cpu.randomPlace(cpuBoard.board, ship1, horizontal),
      horizontal
    );
    cpuBoard.placeShip(
      ship2,
      cpu.randomPlace(cpuBoard.board, ship2, !horizontal),
      !horizontal
    );
    cpuBoard.placeShip(
      ship3,
      cpu.randomPlace(cpuBoard.board, ship3, horizontal),
      horizontal
    );
    cpuBoard.placeShip(
      ship4,
      cpu.randomPlace(cpuBoard.board, ship4, !horizontal),
      !horizontal
    );
    cpuBoard.placeShip(
      ship5,
      cpu.randomPlace(cpuBoard.board, ship5, horizontal),
      horizontal
    );
  };

  const cpuAttack = () => {
    playerBoard.receiveAttack(cpu.randomMove(selections));
    updateBoard(playerBoard, playerCells);
  };

  placeShips(playerBoard);
  hitBoard(cpuBoard);

  restart.addEventListener("click", () => {
    location.reload(true);
  });
};


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



(0,_game__WEBPACK_IMPORTED_MODULE_1__.game)()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsU0FBUztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O1VDelNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNGOztBQUUzQiwyQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvR2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NCwgMjU1KTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW5mby1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtaW5mbyB7XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDU4LCA1OCwgNTgpIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGNvbG9yOiByZ2IoNTgsIDU4LCA1OClcXG59XFxuXFxuLmJvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYig5NywgOTcsIDk3KSAuMXB4O1xcbiAgICBtYXJnaW46IDFweDtcXG59XFxuXFxuLmNlbGwtbGVnZW5kIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNjAsIDI1NSk7XFxufVxcblxcbi5jZWxsLW5vdC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyNTUsIDI1NSk7XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY2VsbC1zaGlwLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg2LCA4Nik7XFxufVxcblxcbi5zaGlwLWRlc3Ryb3llZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCA4OCk7XFxufVxcblxcbi5jZWxsLXBsYWNpbmcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXAtY2VsbHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gICAgY29sb3I6IHJnYig3MSwgNzEsIDcxKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jb3JpZW50YXRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbiNsZWdlbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubGVnZW5kLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sZWdlbmQtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoNTgsIDU4LCA1OCkgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweFxcbn1cXG5cXG4uYmVsb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA4MHB4O1xcbn1cXG5cXG4jd2luLXNjcmVlbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMzUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoNTgsIDU4LCA1OCkgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NCwgMjU1KTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmVuZC1jb250ZW50cyB7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDU4LCA1OCwgNTgpXFxuICAgIFxcbn1cXG5cXG4jcmVzdGFydCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICAgIGNvbG9yOiByZ2IoNzEsIDcxLCA3MSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNyZXN0YXJ0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmVzdGFydDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbiNiZyB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZjs7QUFFSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NCwgMjU1KTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaW5mby1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtaW5mbyB7XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDU4LCA1OCwgNTgpIDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIGNvbG9yOiByZ2IoNTgsIDU4LCA1OClcXG59XFxuXFxuLmJvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYig5NywgOTcsIDk3KSAuMXB4O1xcbiAgICBtYXJnaW46IDFweDtcXG59XFxuXFxuLmNlbGwtbGVnZW5kIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNjAsIDI1NSk7XFxufVxcblxcbi5jZWxsLW5vdC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyNTUsIDI1NSk7XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY2VsbC1zaGlwLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg2LCA4Nik7XFxufVxcblxcbi5zaGlwLWRlc3Ryb3llZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCA4OCk7XFxufVxcblxcbi5jZWxsLXBsYWNpbmcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXAtY2VsbHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gICAgY29sb3I6IHJnYig3MSwgNzEsIDcxKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jb3JpZW50YXRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbiNsZWdlbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubGVnZW5kLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sZWdlbmQtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoNTgsIDU4LCA1OCkgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweFxcbn1cXG5cXG4uYmVsb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA4MHB4O1xcbn1cXG5cXG4jd2luLXNjcmVlbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMzUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoNTgsIDU4LCA1OCkgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NCwgMjU1KTtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLmVuZC1jb250ZW50cyB7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDEwcHggYXV0bztcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogcmdiKDU4LCA1OCwgNTgpXFxuICAgIFxcbn1cXG5cXG4jcmVzdGFydCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAyMDIsIDIwMik7XFxuICAgIGNvbG9yOiByZ2IoNzEsIDcxLCA3MSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNyZXN0YXJ0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcmVzdGFydDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbiNiZyB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBsZXQgc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgYm9hcmQucHVzaCh7XG4gICAgICBpc1NoaXA6IGZhbHNlLFxuICAgICAgaGl0OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vUGxhY2UgbmV3IHNoaXAgb24gYm9hcmRcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkLCBob3Jpem9udGFsKSA9PiB7XG5cbiAgICAvL0NyZWF0ZSBzaGlwQXJyYXkgdG8gYWRkIHRvIGJvYXJkXG4gICAgbGV0IHNoaXBBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgc2hpcEFycmF5LnB1c2goe1xuICAgICAgICBpc1NoaXA6IHRydWUsXG4gICAgICAgIGhpdDogZmFsc2UsXG4gICAgICAgIHNoaXBJRDogc2hpcC5pZCxcbiAgICAgICAgc2VjdG9yOiBpICsgMSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vVGVzdHMgZm9yIHZlcnRpY2FsIHBsYWNlbWVudCBcbiAgICBpZiAoIWhvcml6b250YWwpIHtcbiAgICAgIC8vSWYgc2hpcCBwbGFjZW1lbnQgd2lsbCBiZSBvdmVyIGJvcmRlclxuICAgICAgaWYgKGNvb3JkID4gMTA5IC0gc2hpcC5sZW5ndGggKiAxMCl7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvL0lmIHNoaXAgb3ZlcmxhcHMgb3RoZXIgc2hpcHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIFxuICAgICAgICBpZiAoYm9hcmRbY29vcmQgKyAoaSAqIDEwKV0uaXNTaGlwIHx8IGJvYXJkW2Nvb3JkXS5pc1NoaXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuXG4gICAgICAvL0lmIGNoZWNrcyBoYXZlIHBhc3NlZCwgcGxhY2Ugc2hpcFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgXG5cbiAgICAgICAgYm9hcmQuc3BsaWNlKGNvb3JkICsgaSAqIDEwLCAxLCBzaGlwQXJyYXlbaV0pXG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICAvL1Rlc3QgaWYgc2hpcCBwbGFjZW1lbnQgd2lsbCBiZSBvdmVyIGJvcmRlclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKyl7XG4gICAgICBpZiAoY29vcmQgPj0gKGkgKiAxMCkgKyAxIC0gc2hpcC5sZW5ndGggJiYgY29vcmQgPCBpICogMTApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRlc3QgaWYgc2hpcCBwbGFjZW1lbnQgd2lsbCBvdmVybGFwIG90aGVyIHNoaXBzXG4gICAgaWYgKGJvYXJkW2Nvb3JkICsgc2hpcC5sZW5ndGggLSAxXS5pc1NoaXAgfHwgYm9hcmRbY29vcmRdLmlzU2hpcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAvL0FkZCBzaGlwIHRvIGJvYXJkXG4gICAgYm9hcmQuc3BsaWNlKGNvb3JkLCBzaGlwLmxlbmd0aCwgLi4uc2hpcEFycmF5KTtcbiAgICAvL0FkZCBzaGlwIHRvIGJvYXJkIG1lbW9yeVxuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gIFxuICAgIFxuICB9O1xuXG4gIC8vUmVnaXN0ZXIgaGl0IG9uIHNoaXBcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgYm9hcmRbY29vcmRdLmhpdCA9IHRydWU7XG4gICAgLy8gaWYgKGJvYXJkW2Nvb3JkXS5zaGlwSUQpIHtcbiAgICAvLyAgIC8vaWYgaGl0cyBib2F0XG4gICAgLy8gfVxuICB9O1xuXG4gIC8vQ2hlY2sgZm9yIHJlbWFpbmluZyBzaGlwc1xuXG4gIGNvbnN0IHNoaXBzUmVtYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gYm9hcmQuc29tZSgob2JqKSA9PiBvYmouaXNTaGlwID09PSB0cnVlICYmIG9iai5oaXQgPT09IGZhbHNlKTtcblxuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VTaGlwLFxuICAgIHNoaXBzUmVtYWluLFxuICAgIHNoaXBzLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lQm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBsZXQgdHVybnMgPSBbXTtcblxuICBjb25zdCByYW5kb21QbGFjZSA9IChib2FyZCwgc2hpcCwgaG9yaXpvbnRhbCkgPT4ge1xuICAgIGxldCBudW07XG5cbiAgICBpZiAoIWhvcml6b250YWwpIHtcbiAgICAgIG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwKTtcbiAgICAgIC8vUHJldmVudCBzaGlwcyBvdmVybGFwcGluZ1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoaWxlIChib2FyZFtudW0gKyBpICogMTBdLmlzU2hpcCB8fCBib2FyZFtudW1dLmlzU2hpcCkge1xuICAgICAgICAgIG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL1ByZXZlbnQgc2hpcHMgcGxhY2VkIG92ZXIgYm9yZGVyXG4gICAgICBpZiAobnVtID4gMTA5IC0gc2hpcC5sZW5ndGggKiAxMCkge1xuICAgICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2MCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChob3Jpem9udGFsKSB7XG4gICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5Nik7XG4gICAgICAvL1ByZXZlbnQgc2hpcHMgb3ZlcmxhcHBpbmdcbiAgICAgIHdoaWxlIChib2FyZFtudW0gKyBzaGlwLmxlbmd0aCAtIDFdLmlzU2hpcCB8fCBib2FyZFtudW1dLmlzU2hpcCkge1xuICAgICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5Nik7XG4gICAgICB9XG5cbiAgICAgIC8vcHJldmVudCBzaGlwcyBiZWluZyBwbGFjZWQgb3ZlciBib3JkZXJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB3aGlsZSAobnVtID49IGkgKiAxMCArIDEgLSBzaGlwLmxlbmd0aCAmJiBudW0gPCBpICogMTApIHtcbiAgICAgICAgICBudW0gPSBudW0gLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudW07XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tTW92ZSA9IChhcnJheSkgPT4ge1xuICAgIGxldCByYW5kb21TZWxlY3Rpb24gPSBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXTtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YocmFuZG9tU2VsZWN0aW9uKTtcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy9sZXQgcmFuZG9tU2VsZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApO1xuXG4gICAgcmV0dXJuIHJhbmRvbVNlbGVjdGlvbjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgdHVybnMsXG4gICAgcmFuZG9tTW92ZSxcbiAgICByYW5kb21QbGFjZSxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIGlkKSA9PiB7XG5cbiAgICAvL0NyZWF0ZSBzZWN0b3JzIG1hdGNoaW5nIGxlbmd0aFxuICAgIGxldCBzZWN0b3JzID0gW11cbiAgICBzZWN0b3JzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHNlY3RvcnMuZmlsbChmYWxzZSwgMClcblxuXG4gICAgLy9SZWdpc3RlciBoaXQgb24gc2VjdG9yXG4gICAgY29uc3QgaGl0ID0gKHBvcykgPT4ge1xuICAgICAgICBpZihwb3MgPiBzZWN0b3JzLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBzZWN0b3JzW3BvcyAtIDFdID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHNoaXAgaGFzIGJlZW4gc3Vua1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gc2VjdG9ycy5ldmVyeShlbGVtID0+IGVsZW0gPT09IHRydWUpO1xuICAgICAgICBcbiAgICB9XG5cbiAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLCBpZCwgaXNTdW5rLCBzZWN0b3JzLCBoaXRcbiAgICB9XG59XG5cbmxldCBzaGlwMSA9IFNoaXAoMSlcblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwXG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9mYWN0b3JpZXMvU2hpcFwiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9mYWN0b3JpZXMvR2FtZUJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2ZhY3Rvcmllcy9QbGF5ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IEdhbWVCb2FyZCgpO1xuICBsZXQgY3B1Qm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IHBsYXllciA9IFBsYXllcihcInBsYXllclwiKTtcbiAgbGV0IGNwdSA9IFBsYXllcihcIkNQVVwiKTtcbiAgY29uc3QgY3B1Qm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwdS1ib2FyZFwiKTtcbiAgbGV0IGNwdUNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNwdS1jZWxsXCIpKTtcbiAgbGV0IHBsYXllckNlbGxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1jZWxsXCIpKTtcbiAgY29uc3Qgc2hpcEJ0bjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAxXCIpO1xuICBjb25zdCBzaGlwQnRuMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDJcIik7XG4gIGNvbnN0IHNoaXBCdG4zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwM1wiKTtcbiAgY29uc3Qgc2hpcEJ0bjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXA0XCIpO1xuICBjb25zdCBzaGlwQnRuNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDVcIik7XG4gIGNvbnN0IGdhbWVJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWluZm9cIik7XG4gIGNvbnN0IHNoaXAxID0gU2hpcCgyLCAxKTtcbiAgY29uc3Qgc2hpcDIgPSBTaGlwKDMsIDIpO1xuICBjb25zdCBzaGlwMyA9IFNoaXAoNCwgMyk7XG4gIGNvbnN0IHNoaXA0ID0gU2hpcCg0LCA0KTtcbiAgY29uc3Qgc2hpcDUgPSBTaGlwKDUsIDUpO1xuICBsZXQgY3VycmVudFNoaXAgPSBzaGlwMTtcbiAgY29uc3Qgb3JpZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmllbnRhdGlvblwiKTtcbiAgbGV0IGhvcml6b250YWwgPSB0cnVlO1xuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZ2VuZFwiKTtcbiAgY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGFydFwiKTtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0XCIpO1xuICBjb25zdCB3aW5TY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbi1zY3JlZW5cIik7XG4gIGNvbnN0IGVuZFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lclwiKTtcbiAgY29uc3QgYmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJnXCIpO1xuICBsZWdlbmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvL0NyZWF0ZSBhcnJheSBmb3IgcmFuZG9tIHNlbGVjdGlvbnNcbiAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIHNlbGVjdGlvbnMucHVzaChpKTtcbiAgfVxuXG4gIG9yaWVudEJ0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICBvcmllbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAob3JpZW50QnRuLnRleHRDb250ZW50ID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIG9yaWVudEJ0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgaG9yaXpvbnRhbCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChvcmllbnRCdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBvcmllbnRCdG4udGV4dENvbnRlbnQgPSBcIlZlcnRpY2FsXCI7XG4gICAgICBob3Jpem9udGFsID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICAvL0hvdmVyIGNvbG9yIGNoYW5nZVxuXG4gIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAocGxheWVyQm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAxKSkge1xuICAgICAgY3VycmVudFNoaXAgPSBzaGlwMTtcbiAgICB9XG5cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHBsYXllckNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChob3Jpem9udGFsID09PSBmYWxzZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwbGF5ZXJDZWxsc1tpbmRleCArIGkgKiAxMF0uY2xhc3NMaXN0LmFkZChcImNlbGwtcGxhY2luZ1wiKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxheWVyQ2VsbHNbaW5kZXggKyBpXS5jbGFzc0xpc3QuYWRkKFwiY2VsbC1wbGFjaW5nXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHBsYXllckNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChob3Jpem9udGFsID09PSBmYWxzZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwbGF5ZXJDZWxsc1tpbmRleCArIGkgKiAxMF0uY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtcGxhY2luZ1wiKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxheWVyQ2VsbHNbaW5kZXggKyBpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbC1wbGFjaW5nXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy9QbGFjZSBzaGlwcyBvbiBwbGF5ZXJzIGJvYXJkXG4gIGNvbnN0IHBsYWNlU2hpcHMgPSAoYm9hcmQpID0+IHtcbiAgICBnYW1lSW5mby50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBmaXJzdCBzaGlwXCI7XG4gICAgY3B1Qm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHBsYXllckNlbGxzLmluZGV4T2YoY2VsbCk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQpKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAxLCBpbmRleCwgaG9yaXpvbnRhbCk7XG5cbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAxKSkge1xuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwMjtcbiAgICAgICAgICAgIHNoaXBCdG4xLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNlY29uZCBzaGlwXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGJvYXJkLmJvYXJkLnNvbWUoXG4gICAgICAgICAgICAob2JqKSA9PlxuICAgICAgICAgICAgICBvYmouc2hpcElEID09PSAxICYmICFib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDIpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcDIsIGluZGV4LCBob3Jpem9udGFsKTtcblxuICAgICAgICAgIGlmIChib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDIpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2hpcCA9IHNoaXAzO1xuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgdGhpcmQgc2hpcFwiO1xuICAgICAgICAgICAgc2hpcEJ0bjIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBib2FyZC5ib2FyZC5zb21lKFxuICAgICAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICAgICAgb2JqLnNoaXBJRCA9PT0gMiAmJiAhYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAzKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAzLCBpbmRleCwgaG9yaXpvbnRhbCk7XG5cbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAzKSkge1xuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwNDtcbiAgICAgICAgICAgIHNoaXBCdG4zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIGZvdXJ0aCBzaGlwXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGJvYXJkLmJvYXJkLnNvbWUoXG4gICAgICAgICAgICAob2JqKSA9PlxuICAgICAgICAgICAgICBvYmouc2hpcElEID09PSAzICYmICFib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDQpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcDQsIGluZGV4LCBob3Jpem9udGFsKTtcblxuICAgICAgICAgIGlmIChib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDQpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2hpcCA9IHNoaXA1O1xuICAgICAgICAgICAgc2hpcEJ0bjQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgZmluYWwgc2hpcFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBib2FyZC5ib2FyZC5zb21lKFxuICAgICAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICAgICAgb2JqLnNoaXBJRCA9PT0gNCAmJiAhYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSA1KVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXA1LCBpbmRleCwgaG9yaXpvbnRhbCk7XG5cbiAgICAgICAgICAvL1JlbW92ZSBob3ZlciBjbGFzc1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICAgIHBsYXllckNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLXBsYWNpbmdcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9BY3Rpb25zIGZvciBhZnRlciA1dGggYm9hdCBwbGFjZWRcbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSA1KSkge1xuICAgICAgICAgICAgY3B1UGxhY2UoKTtcbiAgICAgICAgICAgIHJpZ2h0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGxlZ2VuZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBjdXJyZW50U2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hpcEJ0bjUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIkF0dGFjayBFbmVteSBCb2FyZFwiO1xuXG4gICAgICAgICAgICBjcHVCb2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUJvYXJkKGJvYXJkLCBwbGF5ZXJDZWxscyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVCb2FyZCA9IChib2FyZCwgY2VsbHMpID0+IHtcbiAgICBsZXQgc2hpcDEgPSBib2FyZC5ib2FyZC5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5zaGlwSUQgPT09IDEgJiYgb2JqLmhpdDtcbiAgICB9KTtcbiAgICBsZXQgc2hpcDIgPSBib2FyZC5ib2FyZC5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5zaGlwSUQgPT09IDIgJiYgb2JqLmhpdDtcbiAgICB9KTtcbiAgICBsZXQgc2hpcDMgPSBib2FyZC5ib2FyZC5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5zaGlwSUQgPT09IDMgJiYgb2JqLmhpdDtcbiAgICB9KTtcbiAgICBsZXQgc2hpcDQgPSBib2FyZC5ib2FyZC5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5zaGlwSUQgPT09IDQgJiYgb2JqLmhpdDtcbiAgICB9KTtcbiAgICBsZXQgc2hpcDUgPSBib2FyZC5ib2FyZC5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5zaGlwSUQgPT09IDUgJiYgb2JqLmhpdDtcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmQuYm9hcmRbaV0uaXNTaGlwICYmXG4gICAgICAgICFib2FyZC5ib2FyZFtpXS5oaXQgJiZcbiAgICAgICAgYm9hcmQgPT09IHBsYXllckJvYXJkXG4gICAgICApIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtbm90LWhpdFwiKTtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcImNlbGwtc2hpcFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmQuYm9hcmRbaV0uaXNTaGlwICYmIGJvYXJkLmJvYXJkW2ldLmhpdCkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbC1ub3QtaGl0XCIpO1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwiY2VsbC1zaGlwLWhpdFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmQuYm9hcmRbaV0uaGl0ICYmICFib2FyZC5ib2FyZFtpXS5pc1NoaXApIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtbm90LWhpdFwiKTtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcImNlbGwtaGl0XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcDEubGVuZ3RoID09PSAyICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gMSkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcDIubGVuZ3RoID09PSAzICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gMikge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcDMubGVuZ3RoID09PSA0ICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gMykge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcDQubGVuZ3RoID09PSA0ICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gNCkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcDUubGVuZ3RoID09PSA1ICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gNSkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vQWRkcyBjbGljayBldmVudCBvbiBlYWNoIGVuZW15IGNlbGwgYW5kIHJlZ2lzdGVycyBoaXRcbiAgY29uc3QgaGl0Qm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjcHVDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBjcHVDZWxscy5pbmRleE9mKGNlbGwpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmQuYm9hcmRbaW5kZXhdLmhpdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGluZGV4KTtcbiAgICAgICAgdXBkYXRlQm9hcmQoY3B1Qm9hcmQsIGNwdUNlbGxzKTtcbiAgICAgICAgY3B1QXR0YWNrKCk7XG4gICAgICAgIGlmICghY3B1Qm9hcmQuc2hpcHNSZW1haW4oKSkge1xuICAgICAgICAgIGRpc3BsYXlFbmRTY3JlZW4oKTtcbiAgICAgICAgICBlbmRUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV2luIVwiO1xuICAgICAgICB9IGVsc2UgaWYgKCFwbGF5ZXJCb2FyZC5zaGlwc1JlbWFpbigpKSB7XG4gICAgICAgICAgZGlzcGxheUVuZFNjcmVlbigpO1xuICAgICAgICAgIGVuZFRleHQudGV4dENvbnRlbnQgPSBcIllvdSBMb3NlIVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RW5kU2NyZWVuID0gKCkgPT4ge1xuICAgIHdpblNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfTtcblxuICBjb25zdCBjcHVQbGFjZSA9ICgpID0+IHtcbiAgICBjcHVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICBzaGlwMSxcbiAgICAgIGNwdS5yYW5kb21QbGFjZShjcHVCb2FyZC5ib2FyZCwgc2hpcDEsIGhvcml6b250YWwpLFxuICAgICAgaG9yaXpvbnRhbFxuICAgICk7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKFxuICAgICAgc2hpcDIsXG4gICAgICBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXAyLCAhaG9yaXpvbnRhbCksXG4gICAgICAhaG9yaXpvbnRhbFxuICAgICk7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKFxuICAgICAgc2hpcDMsXG4gICAgICBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXAzLCBob3Jpem9udGFsKSxcbiAgICAgIGhvcml6b250YWxcbiAgICApO1xuICAgIGNwdUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHNoaXA0LFxuICAgICAgY3B1LnJhbmRvbVBsYWNlKGNwdUJvYXJkLmJvYXJkLCBzaGlwNCwgIWhvcml6b250YWwpLFxuICAgICAgIWhvcml6b250YWxcbiAgICApO1xuICAgIGNwdUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHNoaXA1LFxuICAgICAgY3B1LnJhbmRvbVBsYWNlKGNwdUJvYXJkLmJvYXJkLCBzaGlwNSwgaG9yaXpvbnRhbCksXG4gICAgICBob3Jpem9udGFsXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjcHVBdHRhY2sgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjcHUucmFuZG9tTW92ZShzZWxlY3Rpb25zKSk7XG4gICAgdXBkYXRlQm9hcmQocGxheWVyQm9hcmQsIHBsYXllckNlbGxzKTtcbiAgfTtcblxuICBwbGFjZVNoaXBzKHBsYXllckJvYXJkKTtcbiAgaGl0Qm9hcmQoY3B1Qm9hcmQpO1xuXG4gIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH0pO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuL2dhbWVcIlxuXG5nYW1lKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==