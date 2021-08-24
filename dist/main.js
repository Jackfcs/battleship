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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: rgb(242, 244, 255);\n    margin: 0px;\n    z-index: 1;\n    font-family: verdana, sans-serif;\n    font-weight: 200;\n}\n\n.info-cont {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#game-info {\n    border: solid rgb(58, 58, 58) 1px;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    width: 30%;\n    min-width: 300px;\n    color: rgb(58, 58, 58)\n}\n\n.boards{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n}\n\n.cell {\n    border: solid rgb(97, 97, 97) .1px;\n    margin: 1px;\n}\n\n.cell-legend {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.cell-hit{\n    background-color: rgb(87, 160, 255);\n}\n\n.cell-not-hit {\n    background-color: rgb(208, 255, 255);\n}\n\n.cell-ship {\n    background-color: grey;\n}\n\n.cell-ship-hit {\n    background-color: rgb(255, 86, 86);\n}\n\n.ship-destroyed{\n    background-color: rgb(255, 169, 88);\n}\n\n.cell-placing {\n    border: 2px solid black;\n}\n\n.ship{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n}\n\n.ship-cell{\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n#orientation {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n    width: 100px;\n    margin: 10px;\n    justify-self: center;\n}\n\n#orientation:hover {\n    cursor: pointer;\n}\n\n#orientation:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#legend {\n    display: flex;\n    flex-direction: column;\n}\n\n.legend-row {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 5px;\n    align-self: flex-start;\n    height: 300px\n}\n\n.below {\n    display: flex;\n    flex-direction: row;\n    padding-top: 40px;\n    justify-content: flex-end;\n    position: relative;\n    right: 100px;\n}\n\n#win-screen{\n    position: absolute;\n    left: 50%;\n    top: 35%;\n    transform: translate(-50%, -50%);\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 10px;\n    display: none;\n    flex-direction: column;\n    justify-items: center;\n    width: 30%;\n    background-color: rgb(242, 244, 255);\n    z-index: 3;\n}\n\n.end-contents {\n    margin: 10px auto 10px auto;\n    font-size: 30px;\n    color: rgb(58, 58, 58)\n    \n}\n\n#restart {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n}\n\n#restart:hover {\n    cursor: pointer;\n}\n\n#restart:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#bg {\n    backdrop-filter: blur(5px);\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    position: absolute;\n    top: 0%;\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,WAAW;IACX,UAAU;IACV,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,gBAAgB;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;AAC3C;;AAEA;IACI,kCAAkC;IAClC,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iCAAiC;IACjC,kBAAkB;IAClB,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,iCAAiC;IACjC,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,UAAU;IACV,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,eAAe;IACf;;AAEJ;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,0BAA0B;IAC1B,WAAW;IACX,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,aAAa;AACjB","sourcesContent":["body {\n    background-color: rgb(242, 244, 255);\n    margin: 0px;\n    z-index: 1;\n    font-family: verdana, sans-serif;\n    font-weight: 200;\n}\n\n.info-cont {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#game-info {\n    border: solid rgb(58, 58, 58) 1px;\n    text-align: center;\n    padding: 10px;\n    border-radius: 5px;\n    width: 30%;\n    min-width: 300px;\n    color: rgb(58, 58, 58)\n}\n\n.boards{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n}\n\n.cell {\n    border: solid rgb(97, 97, 97) .1px;\n    margin: 1px;\n}\n\n.cell-legend {\n    width: 30px;\n    height: 30px;\n    margin-right: 5px;\n    margin-top: 5px;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.cell-hit{\n    background-color: rgb(87, 160, 255);\n}\n\n.cell-not-hit {\n    background-color: rgb(208, 255, 255);\n}\n\n.cell-ship {\n    background-color: grey;\n}\n\n.cell-ship-hit {\n    background-color: rgb(255, 86, 86);\n}\n\n.ship-destroyed{\n    background-color: rgb(255, 169, 88);\n}\n\n.cell-placing {\n    border: 2px solid black;\n}\n\n.ship{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n}\n\n.ship-cell{\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n#orientation {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n    width: 100px;\n    margin: 10px;\n    justify-self: center;\n}\n\n#orientation:hover {\n    cursor: pointer;\n}\n\n#orientation:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#legend {\n    display: flex;\n    flex-direction: column;\n}\n\n.legend-row {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    flex-direction: column;\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 5px;\n    align-self: flex-start;\n    height: 300px\n}\n\n.below {\n    display: flex;\n    flex-direction: row;\n    padding-top: 40px;\n    justify-content: flex-end;\n    position: relative;\n    right: 100px;\n}\n\n#win-screen{\n    position: absolute;\n    left: 50%;\n    top: 35%;\n    transform: translate(-50%, -50%);\n    border: solid rgb(58, 58, 58) 1px;\n    border-radius: 10px;\n    display: none;\n    flex-direction: column;\n    justify-items: center;\n    width: 30%;\n    background-color: rgb(242, 244, 255);\n    z-index: 3;\n}\n\n.end-contents {\n    margin: 10px auto 10px auto;\n    font-size: 30px;\n    color: rgb(58, 58, 58)\n    \n}\n\n#restart {\n    border: none;\n    border-radius: 5px;\n    background-color: rgb(202, 202, 202);\n    color: rgb(71, 71, 71);\n    padding: 10px;\n}\n\n#restart:hover {\n    cursor: pointer;\n}\n\n#restart:active {\n    background-color: rgb(163, 163, 163);\n}\n\n#bg {\n    backdrop-filter: blur(5px);\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    position: absolute;\n    top: 0%;\n    display: none;\n}\n"],"sourceRoot":""}]);
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
    let num

    if (!horizontal) {
        num = Math.floor(Math.random() * 60);
      //Prevent ships overlapping
      for (let i = 0; i < ship.length; i++) {
        console.log(num + (i * 10))
        while (board[num + (i * 10)].isShip || board[num].isShip) {
          num = Math.floor(Math.random() * 60);
          console.log('rework')
          
        }
      }

      //Prevent ships placed over border
      if (num > 109 - ship.length * 10){
        num = Math.floor(Math.random() * 60);
      }
      console.log(num)


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
    console.log(num)
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
          displayEndScreen()
          endText.textContent = "You Win!"
        } else if (!playerBoard.shipsRemain()) {
          displayEndScreen()
          endText.textContent = "You Lose!"
        }
      });
    });
  };


  const displayEndScreen = () => {
    winScreen.style.display = "flex";
    bg.style.display = "block";
    console.log('hi')
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
    turnCount++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0Y7O0FBRTNCLDJDQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQ0LCAyNTUpO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5pbmZvLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1pbmZvIHtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoNTgsIDU4LCA1OCkgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KVxcbn1cXG5cXG4uYm9hcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYig5NywgOTcsIDk3KSAuMXB4O1xcbiAgICBtYXJnaW46IDFweDtcXG59XFxuXFxuLmNlbGwtbGVnZW5kIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNjAsIDI1NSk7XFxufVxcblxcbi5jZWxsLW5vdC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyNTUsIDI1NSk7XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY2VsbC1zaGlwLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg2LCA4Nik7XFxufVxcblxcbi5zaGlwLWRlc3Ryb3llZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCA4OCk7XFxufVxcblxcbi5jZWxsLXBsYWNpbmcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXAtY2VsbHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gICAgY29sb3I6IHJnYig3MSwgNzEsIDcxKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jb3JpZW50YXRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbiNsZWdlbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGVnZW5kLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDU4LCA1OCwgNTgpIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDMwMHB4XFxufVxcblxcbi5iZWxvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3dpbi1zY3JlZW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDU4LCA1OCwgNTgpIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDQsIDI1NSk7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5lbmQtY29udGVudHMge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KVxcbiAgICBcXG59XFxuXFxuI3Jlc3RhcnQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAyLCAyMDIpO1xcbiAgICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jcmVzdGFydDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Jlc3RhcnQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xcbn1cXG5cXG4jYmcge1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmOztBQUVKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQ0LCAyNTUpO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5pbmZvLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1pbmZvIHtcXG4gICAgYm9yZGVyOiBzb2xpZCByZ2IoNTgsIDU4LCA1OCkgMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KVxcbn1cXG5cXG4uYm9hcmRze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IHNvbGlkIHJnYig5NywgOTcsIDk3KSAuMXB4O1xcbiAgICBtYXJnaW46IDFweDtcXG59XFxuXFxuLmNlbGwtbGVnZW5kIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZWxsLWhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNjAsIDI1NSk7XFxufVxcblxcbi5jZWxsLW5vdC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAyNTUsIDI1NSk7XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY2VsbC1zaGlwLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg2LCA4Nik7XFxufVxcblxcbi5zaGlwLWRlc3Ryb3llZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTY5LCA4OCk7XFxufVxcblxcbi5jZWxsLXBsYWNpbmcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXAtY2VsbHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuI29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDIwMiwgMjAyKTtcXG4gICAgY29sb3I6IHJnYig3MSwgNzEsIDcxKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jb3JpZW50YXRpb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNvcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYzLCAxNjMsIDE2Myk7XFxufVxcblxcbiNsZWdlbmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGVnZW5kLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDU4LCA1OCwgNTgpIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBoZWlnaHQ6IDMwMHB4XFxufVxcblxcbi5iZWxvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAxMDBweDtcXG59XFxuXFxuI3dpbi1zY3JlZW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDM1JTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJvcmRlcjogc29saWQgcmdiKDU4LCA1OCwgNTgpIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDQsIDI1NSk7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5lbmQtY29udGVudHMge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHJnYig1OCwgNTgsIDU4KVxcbiAgICBcXG59XFxuXFxuI3Jlc3RhcnQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMjAyLCAyMDIpO1xcbiAgICBjb2xvcjogcmdiKDcxLCA3MSwgNzEpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jcmVzdGFydDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Jlc3RhcnQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xcbn1cXG5cXG4jYmcge1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgR2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBbXTtcbiAgbGV0IHNoaXBzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGJvYXJkLnB1c2goe1xuICAgICAgaXNTaGlwOiBmYWxzZSxcbiAgICAgIGhpdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvL1BsYWNlIG5ldyBzaGlwIG9uIGJvYXJkXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZCwgaG9yaXpvbnRhbCkgPT4ge1xuXG4gICAgLy9DcmVhdGUgc2hpcEFycmF5IHRvIGFkZCB0byBib2FyZFxuICAgIGxldCBzaGlwQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBBcnJheS5wdXNoKHtcbiAgICAgICAgaXNTaGlwOiB0cnVlLFxuICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICBzaGlwSUQ6IHNoaXAuaWQsXG4gICAgICAgIHNlY3RvcjogaSArIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvL1Rlc3RzIGZvciB2ZXJ0aWNhbCBwbGFjZW1lbnQgXG4gICAgaWYgKCFob3Jpem9udGFsKSB7XG4gICAgICAvL0lmIHNoaXAgcGxhY2VtZW50IHdpbGwgYmUgb3ZlciBib3JkZXJcbiAgICAgIGlmIChjb29yZCA+IDEwOSAtIHNoaXAubGVuZ3RoICogMTApe1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy9JZiBzaGlwIG92ZXJsYXBzIG90aGVyIHNoaXBzXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICBcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkICsgKGkgKiAxMCldLmlzU2hpcCB8fCBib2FyZFtjb29yZF0uaXNTaGlwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBcblxuICAgICAgLy9JZiBjaGVja3MgaGF2ZSBwYXNzZWQsIHBsYWNlIHNoaXBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIFxuXG4gICAgICAgIGJvYXJkLnNwbGljZShjb29yZCArIGkgKiAxMCwgMSwgc2hpcEFycmF5W2ldKVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgLy9UZXN0IGlmIHNoaXAgcGxhY2VtZW50IHdpbGwgYmUgb3ZlciBib3JkZXJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspe1xuICAgICAgaWYgKGNvb3JkID49IChpICogMTApICsgMSAtIHNoaXAubGVuZ3RoICYmIGNvb3JkIDwgaSAqIDEwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0ZXN0IGlmIHNoaXAgcGxhY2VtZW50IHdpbGwgb3ZlcmxhcCBvdGhlciBzaGlwc1xuICAgIGlmIChib2FyZFtjb29yZCArIHNoaXAubGVuZ3RoIC0gMV0uaXNTaGlwIHx8IGJvYXJkW2Nvb3JkXS5pc1NoaXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy9BZGQgc2hpcCB0byBib2FyZFxuICAgIGJvYXJkLnNwbGljZShjb29yZCwgc2hpcC5sZW5ndGgsIC4uLnNoaXBBcnJheSk7XG4gICAgLy9BZGQgc2hpcCB0byBib2FyZCBtZW1vcnlcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICBcbiAgICBcbiAgfTtcblxuICAvL1JlZ2lzdGVyIGhpdCBvbiBzaGlwXG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgIGJvYXJkW2Nvb3JkXS5oaXQgPSB0cnVlO1xuICAgIC8vIGlmIChib2FyZFtjb29yZF0uc2hpcElEKSB7XG4gICAgLy8gICAvL2lmIGhpdHMgYm9hdFxuICAgIC8vIH1cbiAgfTtcblxuICAvL0NoZWNrIGZvciByZW1haW5pbmcgc2hpcHNcblxuICBjb25zdCBzaGlwc1JlbWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBmb3VuZCA9IGJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLmlzU2hpcCA9PT0gdHJ1ZSAmJiBvYmouaGl0ID09PSBmYWxzZSk7XG5cbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHBsYWNlU2hpcCxcbiAgICBzaGlwc1JlbWFpbixcbiAgICBzaGlwcyxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgbGV0IHR1cm5zID0gW107XG5cbiAgY29uc3QgcmFuZG9tUGxhY2UgPSAoYm9hcmQsIHNoaXAsIGhvcml6b250YWwpID0+IHtcbiAgICBsZXQgbnVtXG5cbiAgICBpZiAoIWhvcml6b250YWwpIHtcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjApO1xuICAgICAgLy9QcmV2ZW50IHNoaXBzIG92ZXJsYXBwaW5nXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc29sZS5sb2cobnVtICsgKGkgKiAxMCkpXG4gICAgICAgIHdoaWxlIChib2FyZFtudW0gKyAoaSAqIDEwKV0uaXNTaGlwIHx8IGJvYXJkW251bV0uaXNTaGlwKSB7XG4gICAgICAgICAgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXdvcmsnKVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vUHJldmVudCBzaGlwcyBwbGFjZWQgb3ZlciBib3JkZXJcbiAgICAgIGlmIChudW0gPiAxMDkgLSBzaGlwLmxlbmd0aCAqIDEwKXtcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjApO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cobnVtKVxuXG5cbiAgICB9IGVsc2UgaWYgKGhvcml6b250YWwpIHtcblxuICAgICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5Nik7XG4gICAgICAvL1ByZXZlbnQgc2hpcHMgb3ZlcmxhcHBpbmdcbiAgICAgIHdoaWxlIChib2FyZFtudW0gKyBzaGlwLmxlbmd0aCAtIDFdLmlzU2hpcCB8fCBib2FyZFtudW1dLmlzU2hpcCkge1xuICAgICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5Nik7XG4gICAgICB9XG5cbiAgICAgIC8vcHJldmVudCBzaGlwcyBiZWluZyBwbGFjZWQgb3ZlciBib3JkZXJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgICAgICB3aGlsZSAobnVtID49IGkgKiAxMCArIDEgLSBzaGlwLmxlbmd0aCAmJiBudW0gPCBpICogMTApIHtcbiAgICAgICAgICBudW0gPSBudW0gLSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG51bSlcbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbU1vdmUgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgcmFuZG9tU2VsZWN0aW9uID0gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKHJhbmRvbVNlbGVjdGlvbik7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vbGV0IHJhbmRvbVNlbGVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKTtcblxuICAgIHJldHVybiByYW5kb21TZWxlY3Rpb247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHR1cm5zLFxuICAgIHJhbmRvbU1vdmUsXG4gICAgcmFuZG9tUGxhY2UsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBpZCkgPT4ge1xuXG4gICAgLy9DcmVhdGUgc2VjdG9ycyBtYXRjaGluZyBsZW5ndGhcbiAgICBsZXQgc2VjdG9ycyA9IFtdXG4gICAgc2VjdG9ycy5sZW5ndGggPSBsZW5ndGhcbiAgICBzZWN0b3JzLmZpbGwoZmFsc2UsIDApXG5cblxuICAgIC8vUmVnaXN0ZXIgaGl0IG9uIHNlY3RvclxuICAgIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICAgICAgaWYocG9zID4gc2VjdG9ycy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VjdG9yc1twb3MgLSAxXSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBzaGlwIGhhcyBiZWVuIHN1bmtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHNlY3RvcnMuZXZlcnkoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCwgaWQsIGlzU3Vuaywgc2VjdG9ycywgaGl0XG4gICAgfVxufVxuXG5sZXQgc2hpcDEgPSBTaGlwKDEpXG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcFxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vZmFjdG9yaWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL0dhbWVCb2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9mYWN0b3JpZXMvUGxheWVyXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKCkgPT4ge1xuICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IGNwdUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGxldCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gIGxldCBjcHUgPSBQbGF5ZXIoXCJDUFVcIik7XG4gIGNvbnN0IGNwdUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcHUtYm9hcmRcIik7XG4gIGxldCBjcHVDZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtY2VsbFwiKSk7XG4gIGxldCBwbGF5ZXJDZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItY2VsbFwiKSk7XG4gIGNvbnN0IHNoaXBCdG4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwMVwiKTtcbiAgY29uc3Qgc2hpcEJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAyXCIpO1xuICBjb25zdCBzaGlwQnRuMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDNcIik7XG4gIGNvbnN0IHNoaXBCdG40ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwNFwiKTtcbiAgY29uc3Qgc2hpcEJ0bjUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXA1XCIpO1xuICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvXCIpO1xuICBjb25zdCBzaGlwMSA9IFNoaXAoMiwgMSk7XG4gIGNvbnN0IHNoaXAyID0gU2hpcCgzLCAyKTtcbiAgY29uc3Qgc2hpcDMgPSBTaGlwKDQsIDMpO1xuICBjb25zdCBzaGlwNCA9IFNoaXAoNCwgNCk7XG4gIGNvbnN0IHNoaXA1ID0gU2hpcCg1LCA1KTtcbiAgbGV0IGN1cnJlbnRTaGlwID0gc2hpcDE7XG4gIGNvbnN0IG9yaWVudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JpZW50YXRpb25cIik7XG4gIGxldCBob3Jpem9udGFsID0gdHJ1ZTtcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWdlbmRcIik7XG4gIGNvbnN0IHJlc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRcIik7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodFwiKTtcbiAgY29uc3Qgd2luU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW4tc2NyZWVuXCIpO1xuICBjb25zdCBlbmRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uZXJcIik7XG4gIGNvbnN0IGJnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZ1wiKTtcbiAgbGVnZW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy9DcmVhdGUgYXJyYXkgZm9yIHJhbmRvbSBzZWxlY3Rpb25zXG4gIGxldCBzZWxlY3Rpb25zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBzZWxlY3Rpb25zLnB1c2goaSk7XG4gIH1cblxuICBvcmllbnRCdG4udGV4dENvbnRlbnQgPSBcIkhvcml6b250YWxcIjtcbiAgb3JpZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKG9yaWVudEJ0bi50ZXh0Q29udGVudCA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICBvcmllbnRCdG4udGV4dENvbnRlbnQgPSBcIkhvcml6b250YWxcIjtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAob3JpZW50QnRuLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgb3JpZW50QnRuLnRleHRDb250ZW50ID0gXCJWZXJ0aWNhbFwiO1xuICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9Ib3ZlciBjb2xvciBjaGFuZ2VcblxuICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKHBsYXllckJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMSkpIHtcbiAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDE7XG4gICAgfVxuXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBwbGF5ZXJDZWxscy5pbmRleE9mKGNlbGwpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxheWVyQ2VsbHNbaW5kZXggKyBpICogMTBdLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXBsYWNpbmdcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYXllckNlbGxzW2luZGV4ICsgaV0uY2xhc3NMaXN0LmFkZChcImNlbGwtcGxhY2luZ1wiKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBwbGF5ZXJDZWxscy5pbmRleE9mKGNlbGwpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxheWVyQ2VsbHNbaW5kZXggKyBpICogMTBdLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLXBsYWNpbmdcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYXllckNlbGxzW2luZGV4ICsgaV0uY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtcGxhY2luZ1wiKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vUGxhY2Ugc2hpcHMgb24gcGxheWVycyBib2FyZFxuICBjb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkKSA9PiB7XG4gICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgZmlyc3Qgc2hpcFwiO1xuICAgIGNwdUJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBwbGF5ZXJDZWxscy5pbmRleE9mKGNlbGwpO1xuXG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmICghYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEKSkge1xuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwMSwgaW5kZXgsIGhvcml6b250YWwpO1xuXG4gICAgICAgICAgaWYgKGJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDI7XG4gICAgICAgICAgICBzaGlwQnRuMS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBnYW1lSW5mby50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBzZWNvbmQgc2hpcFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBib2FyZC5ib2FyZC5zb21lKFxuICAgICAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICAgICAgb2JqLnNoaXBJRCA9PT0gMSAmJiAhYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAyKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAyLCBpbmRleCwgaG9yaXpvbnRhbCk7XG5cbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAyKSkge1xuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwMztcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHRoaXJkIHNoaXBcIjtcbiAgICAgICAgICAgIHNoaXBCdG4yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgYm9hcmQuYm9hcmQuc29tZShcbiAgICAgICAgICAgIChvYmopID0+XG4gICAgICAgICAgICAgIG9iai5zaGlwSUQgPT09IDIgJiYgIWJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwMywgaW5kZXgsIGhvcml6b250YWwpO1xuXG4gICAgICAgICAgaWYgKGJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDQ7XG4gICAgICAgICAgICBzaGlwQnRuMy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBnYW1lSW5mby50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBmb3VydGggc2hpcFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBib2FyZC5ib2FyZC5zb21lKFxuICAgICAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICAgICAgb2JqLnNoaXBJRCA9PT0gMyAmJiAhYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSA0KVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXA0LCBpbmRleCwgaG9yaXpvbnRhbCk7XG5cbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSA0KSkge1xuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwNTtcbiAgICAgICAgICAgIHNoaXBCdG40LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIGZpbmFsIHNoaXBcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgYm9hcmQuYm9hcmQuc29tZShcbiAgICAgICAgICAgIChvYmopID0+XG4gICAgICAgICAgICAgIG9iai5zaGlwSUQgPT09IDQgJiYgIWJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gNSlcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwNSwgaW5kZXgsIGhvcml6b250YWwpO1xuXG4gICAgICAgICAgLy9SZW1vdmUgaG92ZXIgY2xhc3NcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBwbGF5ZXJDZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbC1wbGFjaW5nXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vQWN0aW9ucyBmb3IgYWZ0ZXIgNXRoIGJvYXQgcGxhY2VkXG4gICAgICAgICAgaWYgKGJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gNSkpIHtcbiAgICAgICAgICAgIGNwdVBsYWNlKCk7XG4gICAgICAgICAgICByaWdodC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBsZWdlbmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgY3VycmVudFNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgIHNoaXBCdG41LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJBdHRhY2sgRW5lbXkgQm9hcmRcIjtcblxuICAgICAgICAgICAgY3B1Qm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVCb2FyZChib2FyZCwgcGxheWVyQ2VsbHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQm9hcmQgPSAoYm9hcmQsIGNlbGxzKSA9PiB7XG4gICAgbGV0IHNoaXAxID0gYm9hcmQuYm9hcmQuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmouc2hpcElEID09PSAxICYmIG9iai5oaXQ7XG4gICAgfSk7XG4gICAgbGV0IHNoaXAyID0gYm9hcmQuYm9hcmQuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmouc2hpcElEID09PSAyICYmIG9iai5oaXQ7XG4gICAgfSk7XG4gICAgbGV0IHNoaXAzID0gYm9hcmQuYm9hcmQuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmouc2hpcElEID09PSAzICYmIG9iai5oaXQ7XG4gICAgfSk7XG4gICAgbGV0IHNoaXA0ID0gYm9hcmQuYm9hcmQuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmouc2hpcElEID09PSA0ICYmIG9iai5oaXQ7XG4gICAgfSk7XG4gICAgbGV0IHNoaXA1ID0gYm9hcmQuYm9hcmQuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmouc2hpcElEID09PSA1ICYmIG9iai5oaXQ7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkLmJvYXJkW2ldLmlzU2hpcCAmJlxuICAgICAgICAhYm9hcmQuYm9hcmRbaV0uaGl0ICYmXG4gICAgICAgIGJvYXJkID09PSBwbGF5ZXJCb2FyZFxuICAgICAgKSB7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLW5vdC1oaXRcIik7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXNoaXBcIik7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkLmJvYXJkW2ldLmlzU2hpcCAmJiBib2FyZC5ib2FyZFtpXS5oaXQpIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtbm90LWhpdFwiKTtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcImNlbGwtc2hpcC1oaXRcIik7XG4gICAgICB9IGVsc2UgaWYgKGJvYXJkLmJvYXJkW2ldLmhpdCAmJiAhYm9hcmQuYm9hcmRbaV0uaXNTaGlwKSB7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLW5vdC1oaXRcIik7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWhpdFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXAxLmxlbmd0aCA9PT0gMiAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDEpIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZGVzdHJveWVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAyLmxlbmd0aCA9PT0gMyAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDIpIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZGVzdHJveWVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXAzLmxlbmd0aCA9PT0gNCAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDMpIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZGVzdHJveWVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXA0Lmxlbmd0aCA9PT0gNCAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDQpIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZGVzdHJveWVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXA1Lmxlbmd0aCA9PT0gNSAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDUpIHtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZGVzdHJveWVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvL0FkZHMgY2xpY2sgZXZlbnQgb24gZWFjaCBlbmVteSBjZWxsIGFuZCByZWdpc3RlcnMgaGl0XG4gIGNvbnN0IGhpdEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY3B1Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gY3B1Q2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkLmJvYXJkW2luZGV4XS5oaXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCk7XG4gICAgICAgIHVwZGF0ZUJvYXJkKGNwdUJvYXJkLCBjcHVDZWxscyk7XG4gICAgICAgIGNwdUF0dGFjaygpO1xuICAgICAgICBpZiAoIWNwdUJvYXJkLnNoaXBzUmVtYWluKCkpIHtcbiAgICAgICAgICBkaXNwbGF5RW5kU2NyZWVuKClcbiAgICAgICAgICBlbmRUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV2luIVwiXG4gICAgICAgIH0gZWxzZSBpZiAoIXBsYXllckJvYXJkLnNoaXBzUmVtYWluKCkpIHtcbiAgICAgICAgICBkaXNwbGF5RW5kU2NyZWVuKClcbiAgICAgICAgICBlbmRUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgTG9zZSFcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuXG4gIGNvbnN0IGRpc3BsYXlFbmRTY3JlZW4gPSAoKSA9PiB7XG4gICAgd2luU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBiZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGNvbnNvbGUubG9nKCdoaScpXG4gIH07XG5cbiAgY29uc3QgY3B1UGxhY2UgPSAoKSA9PiB7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKFxuICAgICAgc2hpcDEsXG4gICAgICBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXAxLCBob3Jpem9udGFsKSxcbiAgICAgIGhvcml6b250YWxcbiAgICApO1xuICAgIGNwdUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHNoaXAyLFxuICAgICAgY3B1LnJhbmRvbVBsYWNlKGNwdUJvYXJkLmJvYXJkLCBzaGlwMiwgIWhvcml6b250YWwpLFxuICAgICAgIWhvcml6b250YWxcbiAgICApO1xuICAgIGNwdUJvYXJkLnBsYWNlU2hpcChcbiAgICAgIHNoaXAzLFxuICAgICAgY3B1LnJhbmRvbVBsYWNlKGNwdUJvYXJkLmJvYXJkLCBzaGlwMywgaG9yaXpvbnRhbCksXG4gICAgICBob3Jpem9udGFsXG4gICAgKTtcbiAgICBjcHVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICBzaGlwNCxcbiAgICAgIGNwdS5yYW5kb21QbGFjZShjcHVCb2FyZC5ib2FyZCwgc2hpcDQsICFob3Jpem9udGFsKSxcbiAgICAgICFob3Jpem9udGFsXG4gICAgKTtcbiAgICBjcHVCb2FyZC5wbGFjZVNoaXAoXG4gICAgICBzaGlwNSxcbiAgICAgIGNwdS5yYW5kb21QbGFjZShjcHVCb2FyZC5ib2FyZCwgc2hpcDUsIGhvcml6b250YWwpLFxuICAgICAgaG9yaXpvbnRhbFxuICAgICk7XG4gIH07XG5cblxuICBjb25zdCBjcHVBdHRhY2sgPSAoKSA9PiB7XG4gICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjcHUucmFuZG9tTW92ZShzZWxlY3Rpb25zKSk7XG4gICAgdXBkYXRlQm9hcmQocGxheWVyQm9hcmQsIHBsYXllckNlbGxzKTtcbiAgICB0dXJuQ291bnQrKztcbiAgfTtcblxuICBwbGFjZVNoaXBzKHBsYXllckJvYXJkKTtcbiAgaGl0Qm9hcmQoY3B1Qm9hcmQpO1xuXG4gIHJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH0pO1xuXG4gIFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQge2dhbWV9IGZyb20gXCIuL2dhbWVcIlxuXG5nYW1lKClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==