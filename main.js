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
___CSS_LOADER_EXPORT___.push([module.id, ".boards{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n#player-board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n\n}\n\n#cpu-board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n\n}\n\n.cell {\n    border: solid black .2px;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.cell-hit{\n    background-color: rgb(9, 13, 245);\n}\n\n.cell-not-hit {\n    background-color: aqua;\n}\n\n.cell-ship {\n    background-color: grey;\n}\n\n.cell-ship-hit {\n    background-color: red;\n}\n\n.cell-placing {\n    border: 5px solid black;\n}\n\n.ship{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n}\n\n.ship-cell{\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n.ship-destroyed{\n    background-color: rgb(255, 123, 0);\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;;AAE3C;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,uCAAuC;;AAE3C;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":[".boards{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n#player-board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n\n}\n\n#cpu-board{\n    display: grid;\n    grid-template-rows: repeat(10, 30px);\n    grid-template-columns: repeat(10, 30px);\n\n}\n\n.cell {\n    border: solid black .2px;\n}\n\n.cell:hover {\n    cursor: pointer;\n}\n\n.cell-hit{\n    background-color: rgb(9, 13, 245);\n}\n\n.cell-not-hit {\n    background-color: aqua;\n}\n\n.cell-ship {\n    background-color: grey;\n}\n\n.cell-ship-hit {\n    background-color: red;\n}\n\n.cell-placing {\n    border: 5px solid black;\n}\n\n.ship{\n    display: flex;\n    flex-direction: row;\n    margin: 10px;\n}\n\n.ship-cell{\n    height: 30px;\n    width: 30px;\n    background-color: grey;\n}\n\n.ship-destroyed{\n    background-color: rgb(255, 123, 0);\n}\n\n"],"sourceRoot":""}]);
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
  const placeShip = (ship, coord) => {


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

  const randomPlace = (board, ship) => {
    let num = Math.floor(Math.random() * 100);

    //Prevent ships overlapping
    while (board[num + ship.length - 1].isShip || board[num].isShip) {
      num = Math.floor(Math.random() * 100);
    }

    //prevent ships being placed over border
    for (let i = 1; i < 10; i++) {
      while (num >= i * 10 + 1 - ship.length && num < i * 10) {
        num = num - 1;
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
  const playerBoardContainer = document.getElementById("player-board");
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
  //Create array for random selections
  let selections = [];
  for (let i = 0; i < 100; i++) {
    selections.push(i);
  }

  orientBtn.textContent = "Horizontal";
  orientBtn.addEventListener("click", () => {
    if (orientBtn.textContent === "Horizontal") {
      orientBtn.textContent = "Vertical";
    } else {
      orientBtn.textContent = "Horizontal";
    }
  });

  //Hover color change
  const gridHover = (board) => {
    playerCells.forEach((cell) => {
      if (board.board.some((obj) => obj.shipID === 1)) {
        currentShip = ship1;
      }

      cell.addEventListener("mouseenter", () => {
        let index = playerCells.indexOf(cell);
        for (let i = 0; i < currentShip.length; i++) {
          playerCells[index + i].classList.add("cell-placing");
        }
      });
      cell.addEventListener("mouseleave", () => {
        let index = playerCells.indexOf(cell);
        for (let i = 0; i < currentShip.length; i++) {
          playerCells[index + i].classList.remove("cell-placing");
        }
      });
    });
  };

  //Place ships on players board
  const placeShips = (board) => {
    gameInfo.textContent = "Place your first ship";
    cpuBoardContainer.style.display = "none";
    gridHover(playerBoard);
    playerCells.forEach((cell) => {
      let index = playerCells.indexOf(cell);

      cell.addEventListener("click", () => {
        if (!board.board.some((obj) => obj.shipID)) {
          board.placeShip(ship1, index);
          currentShip = ship2;
          if (board.board.some((obj) => obj.shipID === 1)) {
            shipBtn1.style.display = "none";
            gameInfo.textContent = "Place your second ship";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 1 && !board.board.some((obj) => obj.shipID === 2)
          )
        ) {
          board.placeShip(ship2, index);
          currentShip = ship3;
          if (board.board.some((obj) => obj.shipID === 2)) {
            gameInfo.textContent = "Place your third ship";
            shipBtn2.style.display = "none";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 2 && !board.board.some((obj) => obj.shipID === 3)
          )
        ) {
          board.placeShip(ship3, index);
          currentShip = ship4;
          if (board.board.some((obj) => obj.shipID === 3)) {
            shipBtn3.style.display = "none";
            gameInfo.textContent = "Place your fourth ship";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 3 && !board.board.some((obj) => obj.shipID === 4)
          )
        ) {
          board.placeShip(ship4, index);
          currentShip = ship5;
          if (board.board.some((obj) => obj.shipID === 4)) {
            shipBtn4.style.display = "none";
            gameInfo.textContent = "Place your final ship";
          }
        } else if (
          board.board.some(
            (obj) =>
              obj.shipID === 4 && !board.board.some((obj) => obj.shipID === 5)
          )
        ) {
          board.placeShip(ship5, index);
          for (let i = 0; i < currentShip.length; i++) {
            playerCells[index + i].classList.remove("cell-placing");
          }
          currentShip = false;

          if (board.board.some((obj) => obj.shipID === 5)) {
            cpuPlace();

            shipBtn5.style.display = "none";
            gameInfo.textContent = "Attack Enemy Board";

            cpuBoardContainer.style.display = "grid";
          }

          shipPlacementPhase = false;
        }
        updateBoard(board, playerCells);
      });
    });
  };

  placeShips(playerBoard);

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

      
      if (ship1.length === 2 && board.board[i].shipID === 1){
        cells[i].classList.add("ship-destroyed");
      }
      if (ship2.length === 3 && board.board[i].shipID === 2){
        cells[i].classList.add("ship-destroyed");
      }
      if (ship3.length === 4 && board.board[i].shipID === 3){
        cells[i].classList.add("ship-destroyed");
      }
      if (ship4.length === 4 && board.board[i].shipID === 4){
        cells[i].classList.add("ship-destroyed");
      }
      if (ship5.length === 5 && board.board[i].shipID === 5){
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
          alert("You win");
        } else if (!playerBoard.shipsRemain()) {
          alert("You lose!");
        }
      });
    });
  };

  const cpuPlace = () => {
    cpuBoard.placeShip(ship1, cpu.randomPlace(cpuBoard.board, ship1));
    cpuBoard.placeShip(ship2, cpu.randomPlace(cpuBoard.board, ship2));
    cpuBoard.placeShip(ship3, cpu.randomPlace(cpuBoard.board, ship3));
    cpuBoard.placeShip(ship4, cpu.randomPlace(cpuBoard.board, ship4));
    cpuBoard.placeShip(ship5, cpu.randomPlace(cpuBoard.board, ship5));
  };

  let shipPlacementPhase = true;

  let turnCount = 0;

  const cpuAttack = () => {
    playerBoard.receiveAttack(cpu.randomMove(selections));
    updateBoard(playerBoard, playerCells);
    turnCount++;
  };

  hitBoard(cpuBoard);

  // const declareWinner = () => {
  //   if (playerBoard.board.some((obj) => obj.isShip && !playerBoard.board.some((obj) => obj.hit === false))) {
  //     alert("player wins")
  //   }
  // }
  //console.log(playerBoard.board.some((obj) => obj.isShip))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0JBQXdCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2UEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0Y7O0FBRTNCLDJDQUFJLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL0dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ib2FyZHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jcGxheWVyLWJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG5cXG59XFxuXFxuI2NwdS1ib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuXFxufVxcblxcbi5jZWxsIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAuMnB4O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNlbGwtaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgMTMsIDI0NSk7XFxufVxcblxcbi5jZWxsLW5vdC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uY2VsbC1zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNlbGwtc2hpcC1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jZWxsLXBsYWNpbmcge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNoaXAtY2VsbHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnNoaXAtZGVzdHJveWVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMjMsIDApO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVDQUF1Qzs7QUFFM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVDQUF1Qzs7QUFFM0M7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNwbGF5ZXItYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcblxcbn1cXG5cXG4jY3B1LWJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG5cXG59XFxuXFxuLmNlbGwge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIC4ycHg7XFxufVxcblxcbi5jZWxsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VsbC1oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCAxMywgMjQ1KTtcXG59XFxuXFxuLmNlbGwtbm90LWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jZWxsLXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uY2VsbC1zaGlwLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGwtcGxhY2luZyB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2hpcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uc2hpcC1jZWxse1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uc2hpcC1kZXN0cm95ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDEyMywgMCk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBHYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBsZXQgc2hpcHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgYm9hcmQucHVzaCh7XG4gICAgICBpc1NoaXA6IGZhbHNlLFxuICAgICAgaGl0OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vUGxhY2UgbmV3IHNoaXAgb24gYm9hcmRcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkKSA9PiB7XG5cblxuICAgIC8vVGVzdCBpZiBzaGlwIHBsYWNlbWVudCB3aWxsIGJlIG92ZXIgYm9yZGVyXG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspe1xuICAgICAgaWYgKGNvb3JkID49IChpICogMTApICsgMSAtIHNoaXAubGVuZ3RoICYmIGNvb3JkIDwgaSAqIDEwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0ZXN0IGlmIHNoaXAgcGxhY2VtZW50IHdpbGwgb3ZlcmxhcCBvdGhlciBzaGlwc1xuICAgIGlmIChib2FyZFtjb29yZCArIHNoaXAubGVuZ3RoIC0gMV0uaXNTaGlwIHx8IGJvYXJkW2Nvb3JkXS5pc1NoaXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy9DcmVhdGUgc2hpcEFycmF5IHRvIGFkZCB0byBib2FyZFxuICAgIGxldCBzaGlwQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBBcnJheS5wdXNoKHtcbiAgICAgICAgaXNTaGlwOiB0cnVlLFxuICAgICAgICBoaXQ6IGZhbHNlLFxuICAgICAgICBzaGlwSUQ6IHNoaXAuaWQsXG4gICAgICAgIHNlY3RvcjogaSArIDEsXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy9BZGQgc2hpcCB0byBib2FyZFxuICAgIGJvYXJkLnNwbGljZShjb29yZCwgc2hpcC5sZW5ndGgsIC4uLnNoaXBBcnJheSk7XG4gICAgLy9BZGQgc2hpcCB0byBib2FyZCBtZW1vcnlcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIFxuICB9O1xuXG4gIC8vUmVnaXN0ZXIgaGl0IG9uIHNoaXBcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgYm9hcmRbY29vcmRdLmhpdCA9IHRydWU7XG4gICAgLy8gaWYgKGJvYXJkW2Nvb3JkXS5zaGlwSUQpIHtcbiAgICAvLyAgIC8vaWYgaGl0cyBib2F0XG4gICAgLy8gfVxuICB9O1xuXG4gIC8vQ2hlY2sgZm9yIHJlbWFpbmluZyBzaGlwc1xuXG4gIGNvbnN0IHNoaXBzUmVtYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gYm9hcmQuc29tZSgob2JqKSA9PiBvYmouaXNTaGlwID09PSB0cnVlICYmIG9iai5oaXQgPT09IGZhbHNlKTtcblxuICAgIHJldHVybiBmb3VuZDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgcGxhY2VTaGlwLFxuICAgIHNoaXBzUmVtYWluLFxuICAgIHNoaXBzLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lQm9hcmQ7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBsZXQgdHVybnMgPSBbXTtcblxuICBjb25zdCByYW5kb21QbGFjZSA9IChib2FyZCwgc2hpcCkgPT4ge1xuICAgIGxldCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuXG4gICAgLy9QcmV2ZW50IHNoaXBzIG92ZXJsYXBwaW5nXG4gICAgd2hpbGUgKGJvYXJkW251bSArIHNoaXAubGVuZ3RoIC0gMV0uaXNTaGlwIHx8IGJvYXJkW251bV0uaXNTaGlwKSB7XG4gICAgICBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgIH1cblxuICAgIC8vcHJldmVudCBzaGlwcyBiZWluZyBwbGFjZWQgb3ZlciBib3JkZXJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHdoaWxlIChudW0gPj0gaSAqIDEwICsgMSAtIHNoaXAubGVuZ3RoICYmIG51bSA8IGkgKiAxMCkge1xuICAgICAgICBudW0gPSBudW0gLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVtO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbU1vdmUgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgcmFuZG9tU2VsZWN0aW9uID0gYXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKV07XG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKHJhbmRvbVNlbGVjdGlvbik7XG4gICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vbGV0IHJhbmRvbVNlbGVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKTtcblxuICAgIHJldHVybiByYW5kb21TZWxlY3Rpb247XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHR1cm5zLFxuICAgIHJhbmRvbU1vdmUsXG4gICAgcmFuZG9tUGxhY2UsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBpZCkgPT4ge1xuXG4gICAgLy9DcmVhdGUgc2VjdG9ycyBtYXRjaGluZyBsZW5ndGhcbiAgICBsZXQgc2VjdG9ycyA9IFtdXG4gICAgc2VjdG9ycy5sZW5ndGggPSBsZW5ndGhcbiAgICBzZWN0b3JzLmZpbGwoZmFsc2UsIDApXG5cblxuICAgIC8vUmVnaXN0ZXIgaGl0IG9uIHNlY3RvclxuICAgIGNvbnN0IGhpdCA9IChwb3MpID0+IHtcbiAgICAgICAgaWYocG9zID4gc2VjdG9ycy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc2VjdG9yc1twb3MgLSAxXSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBzaGlwIGhhcyBiZWVuIHN1bmtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIHNlY3RvcnMuZXZlcnkoZWxlbSA9PiBlbGVtID09PSB0cnVlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCwgaWQsIGlzU3Vuaywgc2VjdG9ycywgaGl0XG4gICAgfVxufVxuXG5sZXQgc2hpcDEgPSBTaGlwKDEpXG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcFxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vZmFjdG9yaWVzL1NoaXBcIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL0dhbWVCb2FyZFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9mYWN0b3JpZXMvUGxheWVyXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKCkgPT4ge1xuICBsZXQgcGxheWVyQm9hcmQgPSBHYW1lQm9hcmQoKTtcbiAgbGV0IGNwdUJvYXJkID0gR2FtZUJvYXJkKCk7XG4gIGxldCBwbGF5ZXIgPSBQbGF5ZXIoXCJwbGF5ZXJcIik7XG4gIGxldCBjcHUgPSBQbGF5ZXIoXCJDUFVcIik7XG4gIGNvbnN0IHBsYXllckJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXItYm9hcmRcIik7XG4gIGNvbnN0IGNwdUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcHUtYm9hcmRcIik7XG4gIGxldCBjcHVDZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtY2VsbFwiKSk7XG4gIGxldCBwbGF5ZXJDZWxscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItY2VsbFwiKSk7XG4gIGNvbnN0IHNoaXBCdG4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwMVwiKTtcbiAgY29uc3Qgc2hpcEJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXAyXCIpO1xuICBjb25zdCBzaGlwQnRuMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcDNcIik7XG4gIGNvbnN0IHNoaXBCdG40ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwNFwiKTtcbiAgY29uc3Qgc2hpcEJ0bjUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXA1XCIpO1xuICBjb25zdCBnYW1lSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1pbmZvXCIpO1xuICBjb25zdCBzaGlwMSA9IFNoaXAoMiwgMSk7XG4gIGNvbnN0IHNoaXAyID0gU2hpcCgzLCAyKTtcbiAgY29uc3Qgc2hpcDMgPSBTaGlwKDQsIDMpO1xuICBjb25zdCBzaGlwNCA9IFNoaXAoNCwgNCk7XG4gIGNvbnN0IHNoaXA1ID0gU2hpcCg1LCA1KTtcbiAgbGV0IGN1cnJlbnRTaGlwID0gc2hpcDE7XG4gIGNvbnN0IG9yaWVudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JpZW50YXRpb25cIik7XG4gIC8vQ3JlYXRlIGFycmF5IGZvciByYW5kb20gc2VsZWN0aW9uc1xuICBsZXQgc2VsZWN0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgc2VsZWN0aW9ucy5wdXNoKGkpO1xuICB9XG5cbiAgb3JpZW50QnRuLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCI7XG4gIG9yaWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChvcmllbnRCdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBvcmllbnRCdG4udGV4dENvbnRlbnQgPSBcIlZlcnRpY2FsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWVudEJ0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9Ib3ZlciBjb2xvciBjaGFuZ2VcbiAgY29uc3QgZ3JpZEhvdmVyID0gKGJvYXJkKSA9PiB7XG4gICAgcGxheWVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMSkpIHtcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwMTtcbiAgICAgIH1cblxuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHBsYXllckNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsc1tpbmRleCArIGldLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXBsYWNpbmdcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHBsYXllckNlbGxzLmluZGV4T2YoY2VsbCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBwbGF5ZXJDZWxsc1tpbmRleCArIGldLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLXBsYWNpbmdcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vUGxhY2Ugc2hpcHMgb24gcGxheWVycyBib2FyZFxuICBjb25zdCBwbGFjZVNoaXBzID0gKGJvYXJkKSA9PiB7XG4gICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgZmlyc3Qgc2hpcFwiO1xuICAgIGNwdUJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBncmlkSG92ZXIocGxheWVyQm9hcmQpO1xuICAgIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHBsYXllckNlbGxzLmluZGV4T2YoY2VsbCk7XG5cbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQpKSB7XG4gICAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXAxLCBpbmRleCk7XG4gICAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwMjtcbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSAxKSkge1xuICAgICAgICAgICAgc2hpcEJ0bjEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgc2Vjb25kIHNoaXBcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgYm9hcmQuYm9hcmQuc29tZShcbiAgICAgICAgICAgIChvYmopID0+XG4gICAgICAgICAgICAgIG9iai5zaGlwSUQgPT09IDEgJiYgIWJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMilcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwMiwgaW5kZXgpO1xuICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDM7XG4gICAgICAgICAgaWYgKGJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMikpIHtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHRoaXJkIHNoaXBcIjtcbiAgICAgICAgICAgIHNoaXBCdG4yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgYm9hcmQuYm9hcmQuc29tZShcbiAgICAgICAgICAgIChvYmopID0+XG4gICAgICAgICAgICAgIG9iai5zaGlwSUQgPT09IDIgJiYgIWJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwMywgaW5kZXgpO1xuICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDQ7XG4gICAgICAgICAgaWYgKGJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLnNoaXBJRCA9PT0gMykpIHtcbiAgICAgICAgICAgIHNoaXBCdG4zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGdhbWVJbmZvLnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIGZvdXJ0aCBzaGlwXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGJvYXJkLmJvYXJkLnNvbWUoXG4gICAgICAgICAgICAob2JqKSA9PlxuICAgICAgICAgICAgICBvYmouc2hpcElEID09PSAzICYmICFib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDQpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcDQsIGluZGV4KTtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IHNoaXA1O1xuICAgICAgICAgIGlmIChib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDQpKSB7XG4gICAgICAgICAgICBzaGlwQnRuNC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBnYW1lSW5mby50ZXh0Q29udGVudCA9IFwiUGxhY2UgeW91ciBmaW5hbCBzaGlwXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIGJvYXJkLmJvYXJkLnNvbWUoXG4gICAgICAgICAgICAob2JqKSA9PlxuICAgICAgICAgICAgICBvYmouc2hpcElEID09PSA0ICYmICFib2FyZC5ib2FyZC5zb21lKChvYmopID0+IG9iai5zaGlwSUQgPT09IDUpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcDUsIGluZGV4KTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwbGF5ZXJDZWxsc1tpbmRleCArIGldLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLXBsYWNpbmdcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRTaGlwID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoYm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouc2hpcElEID09PSA1KSkge1xuICAgICAgICAgICAgY3B1UGxhY2UoKTtcblxuICAgICAgICAgICAgc2hpcEJ0bjUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZ2FtZUluZm8udGV4dENvbnRlbnQgPSBcIkF0dGFjayBFbmVteSBCb2FyZFwiO1xuXG4gICAgICAgICAgICBjcHVCb2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2hpcFBsYWNlbWVudFBoYXNlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlQm9hcmQoYm9hcmQsIHBsYXllckNlbGxzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHBsYWNlU2hpcHMocGxheWVyQm9hcmQpO1xuXG4gIGNvbnN0IHVwZGF0ZUJvYXJkID0gKGJvYXJkLCBjZWxscykgPT4ge1xuICAgIGxldCBzaGlwMSA9IGJvYXJkLmJvYXJkLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLnNoaXBJRCA9PT0gMSAmJiBvYmouaGl0O1xuICAgIH0pO1xuICAgIGxldCBzaGlwMiA9IGJvYXJkLmJvYXJkLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLnNoaXBJRCA9PT0gMiAmJiBvYmouaGl0O1xuICAgIH0pO1xuICAgIGxldCBzaGlwMyA9IGJvYXJkLmJvYXJkLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLnNoaXBJRCA9PT0gMyAmJiBvYmouaGl0O1xuICAgIH0pO1xuICAgIGxldCBzaGlwNCA9IGJvYXJkLmJvYXJkLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLnNoaXBJRCA9PT0gNCAmJiBvYmouaGl0O1xuICAgIH0pO1xuICAgIGxldCBzaGlwNSA9IGJvYXJkLmJvYXJkLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqLnNoaXBJRCA9PT0gNSAmJiBvYmouaGl0O1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBib2FyZC5ib2FyZFtpXS5pc1NoaXAgJiZcbiAgICAgICAgIWJvYXJkLmJvYXJkW2ldLmhpdCAmJlxuICAgICAgICBib2FyZCA9PT0gcGxheWVyQm9hcmRcbiAgICAgICkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbC1ub3QtaGl0XCIpO1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwiY2VsbC1zaGlwXCIpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZC5ib2FyZFtpXS5pc1NoaXAgJiYgYm9hcmQuYm9hcmRbaV0uaGl0KSB7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLW5vdC1oaXRcIik7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXNoaXAtaGl0XCIpO1xuICAgICAgfSBlbHNlIGlmIChib2FyZC5ib2FyZFtpXS5oaXQgJiYgIWJvYXJkLmJvYXJkW2ldLmlzU2hpcCkge1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbC1ub3QtaGl0XCIpO1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwiY2VsbC1oaXRcIik7XG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgaWYgKHNoaXAxLmxlbmd0aCA9PT0gMiAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDEpe1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcDIubGVuZ3RoID09PSAzICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gMil7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWRlc3Ryb3llZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwMy5sZW5ndGggPT09IDQgJiYgYm9hcmQuYm9hcmRbaV0uc2hpcElEID09PSAzKXtcbiAgICAgICAgY2VsbHNbaV0uY2xhc3NMaXN0LmFkZChcInNoaXAtZGVzdHJveWVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNoaXA0Lmxlbmd0aCA9PT0gNCAmJiBib2FyZC5ib2FyZFtpXS5zaGlwSUQgPT09IDQpe1xuICAgICAgICBjZWxsc1tpXS5jbGFzc0xpc3QuYWRkKFwic2hpcC1kZXN0cm95ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2hpcDUubGVuZ3RoID09PSA1ICYmIGJvYXJkLmJvYXJkW2ldLnNoaXBJRCA9PT0gNSl7XG4gICAgICAgIGNlbGxzW2ldLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWRlc3Ryb3llZFwiKTtcbiAgICAgIH1cblxuXG5cblxuICAgIH1cbiAgfTtcblxuICAvL0FkZHMgY2xpY2sgZXZlbnQgb24gZWFjaCBlbmVteSBjZWxsIGFuZCByZWdpc3RlcnMgaGl0XG4gIGNvbnN0IGhpdEJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY3B1Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gY3B1Q2VsbHMuaW5kZXhPZihjZWxsKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkLmJvYXJkW2luZGV4XS5oaXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhpbmRleCk7XG4gICAgICAgIHVwZGF0ZUJvYXJkKGNwdUJvYXJkLCBjcHVDZWxscyk7XG4gICAgICAgIGNwdUF0dGFjaygpO1xuICAgICAgICBpZiAoIWNwdUJvYXJkLnNoaXBzUmVtYWluKCkpIHtcbiAgICAgICAgICBhbGVydChcIllvdSB3aW5cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoIXBsYXllckJvYXJkLnNoaXBzUmVtYWluKCkpIHtcbiAgICAgICAgICBhbGVydChcIllvdSBsb3NlIVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3B1UGxhY2UgPSAoKSA9PiB7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKHNoaXAxLCBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXAxKSk7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKHNoaXAyLCBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXAyKSk7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKHNoaXAzLCBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXAzKSk7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKHNoaXA0LCBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXA0KSk7XG4gICAgY3B1Qm9hcmQucGxhY2VTaGlwKHNoaXA1LCBjcHUucmFuZG9tUGxhY2UoY3B1Qm9hcmQuYm9hcmQsIHNoaXA1KSk7XG4gIH07XG5cbiAgbGV0IHNoaXBQbGFjZW1lbnRQaGFzZSA9IHRydWU7XG5cbiAgbGV0IHR1cm5Db3VudCA9IDA7XG5cbiAgY29uc3QgY3B1QXR0YWNrID0gKCkgPT4ge1xuICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soY3B1LnJhbmRvbU1vdmUoc2VsZWN0aW9ucykpO1xuICAgIHVwZGF0ZUJvYXJkKHBsYXllckJvYXJkLCBwbGF5ZXJDZWxscyk7XG4gICAgdHVybkNvdW50Kys7XG4gIH07XG5cbiAgaGl0Qm9hcmQoY3B1Qm9hcmQpO1xuXG4gIC8vIGNvbnN0IGRlY2xhcmVXaW5uZXIgPSAoKSA9PiB7XG4gIC8vICAgaWYgKHBsYXllckJvYXJkLmJvYXJkLnNvbWUoKG9iaikgPT4gb2JqLmlzU2hpcCAmJiAhcGxheWVyQm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouaGl0ID09PSBmYWxzZSkpKSB7XG4gIC8vICAgICBhbGVydChcInBsYXllciB3aW5zXCIpXG4gIC8vICAgfVxuICAvLyB9XG4gIC8vY29uc29sZS5sb2cocGxheWVyQm9hcmQuYm9hcmQuc29tZSgob2JqKSA9PiBvYmouaXNTaGlwKSlcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHtnYW1lfSBmcm9tIFwiLi9nYW1lXCJcblxuZ2FtZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9