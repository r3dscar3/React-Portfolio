module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");


var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/components/Loader.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  height: 40px;\n  width: 40px;\n  margin: 0 auto;\n\n  &:before {\n    content: '';\n    box-sizing: border-box;\n    position: absolute;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 3px solid ", ";\n    border-top-color: transparent;\n    animation: spinner 0.4s linear infinite;\n\n    @keyframes spinner {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n  z-index: 666;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledLoader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var LoadingSpinner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), utils_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.backgroundMenu);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLoader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoadingSpinner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./components/layout/PageWrapper.js":
/*!******************************************!*\
  !*** ./components/layout/PageWrapper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/mediaQueries */ "./utils/mediaQueries.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");


var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/components/layout/PageWrapper.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 30px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: ", ";\n  flex: 1 0 0%;\n  min-height: 0;\n  overflow-y: scroll;\n  padding: 30px 15px;\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 18px;\n  line-height: 1.5;\n  margin-left: 13px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 16px;\n  opacity: 0.7;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  flex: 0 0 auto;\n  height: 72px;\n  padding-left: 34px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  height: 100%;\n  flex: 1 0 0%;\n  flex-direction: column;\n  min-width: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), utils_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.border);
var Emoji = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject4(), utils_theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.textGrey, function (props) {
  return props.theme.fontStack;
});
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5(), function (props) {
  return props.theme.colors.backgroundContent;
}, utils_mediaQueries__WEBPACK_IMPORTED_MODULE_3__["default"].tablet(_templateObject6()));
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7(), function (props) {
  return props.fullWidth ? '100%' : '768px';
});
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var children = props.children,
      heading = props.heading,
      emoji = props.emoji,
      fullWidth = props.fullWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Emoji, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, emoji), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
    fullWidth: fullWidth,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, children)));
});

/***/ }),

/***/ "./components/layout/StyledComponents.js":
/*!***********************************************!*\
  !*** ./components/layout/StyledComponents.js ***!
  \***********************************************/
/*! exports provided: Wrapper, Image, H1, H2, H3, Body, Paragraph, List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");


function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  line-height: 2;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: circle inside;\n  margin-bottom: 12px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 6px;\n\n  :last-child {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 30px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 20px;\n  font-weight: 700;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 22px;\n  font-weight: 700;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 28px;\n  font-weight: 700;\n  line-height: 1.5em;\n\n  small {\n    display: block;\n    font-size: 0.6em;\n    line-height: 1em;\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  height: 430px;\n  margin-bottom: 12px;\n  width: 300px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 16px;\n  line-height: 1.5;\n  max-width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.fullWidth ? '100%' : '600px';
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject2());
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1(_templateObject3(), utils_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.textGrey);
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject4());
var H3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3(_templateObject5());
var Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());
var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject8());
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject9());

/***/ }),

/***/ "./icons/Bass.js":
/*!***********************!*\
  !*** ./icons/Bass.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/icons/Bass.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? utils_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.textDefault : _ref$fill;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: fill,
    viewBox: "0 0 48 48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.3,41.7l6.5-13.9c0.1-0.2,0-0.5-0.1-0.7l-0.4-0.4L35.6,14l0.2,0.2c0.2,0.2,0.6,0.2,0.8-0.1l2.8-4 c0.2-0.2,0.1-0.5-0.1-0.7l-0.7-0.7c-0.2-0.2-0.5-0.2-0.7-0.1l-4,2.8c-0.3,0.2-0.3,0.6-0.1,0.8l0.2,0.2L21.5,25l-0.4-0.4 c-0.2-0.2-0.4-0.2-0.7-0.1L6.5,30.9c-0.5,0.2-0.4,1,0.1,1.1l7.6,1.5c0.2,0,0.4,0.2,0.5,0.5l1.5,7.6C16.3,42.1,17,42.2,17.3,41.7z M36.8,12.9c0.1,0.1,0.1,0.3,0,0.4c-0.1,0.1-0.3,0.1-0.4,0c-0.1-0.1-0.1-0.3,0-0.4C36.5,12.8,36.7,12.8,36.8,12.9z M38.4,10.7 c0.1,0.1,0.1,0.3,0,0.4c-0.1,0.1-0.3,0.1-0.4,0c-0.1-0.1-0.1-0.3,0-0.4C38.1,10.6,38.3,10.6,38.4,10.7z M37.5,9.8 c0.1,0.1,0.1,0.3,0,0.4c-0.1,0.1-0.3,0.1-0.4,0c-0.1-0.1-0.1-0.3,0-0.4C37.2,9.7,37.4,9.7,37.5,9.8z M34.9,11.8 c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4C35.2,11.9,35.1,11.9,34.9,11.8z M14.6,32.6 c-0.1,0.1-0.1,0.1-0.2,0c-0.1-0.1-0.1-0.1,0-0.2l5.7-5.7l0.8-0.8l13.4-13.2l0,0l0.2,0.2l0,0L21.1,26.1l-0.8,0.8L14.6,32.6z M15,33 c0,0-0.1,0-0.2,0c0,0,0-0.1,0-0.2l5.7-5.7l0.8-0.8l13.3-13.3l0,0l0.2,0.2l0,0L21.5,26.5l-0.8,0.8L15,33z M15.3,33.4c0,0,0-0.1,0-0.1 l5.7-5.7l0.8-0.8L35,13.4l0,0l0.1,0.1l0,0L21.9,26.9l-0.8,0.8l-5.7,5.7C15.4,33.5,15.3,33.5,15.3,33.4z M15.6,33.8l5.8-5.8l0.8-0.8 l13.2-13.4l0,0l0.1,0.1l0,0L22.3,27.3l-0.8,0.8l-5.8,5.8L15.6,33.8z M17.6,36.1c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0 c0.2,0.2,0.2,0.5,0,0.7C18.1,36.3,17.8,36.3,17.6,36.1z M17.2,37.9c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0 c0.2,0.2,0.2,0.5,0,0.7C17.7,38.1,17.4,38.1,17.2,37.9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./icons/Golf.js":
/*!***********************!*\
  !*** ./icons/Golf.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/icons/Golf.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? utils_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.textDefault : _ref$fill;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: fill,
    viewBox: "0 0 48 48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.5,32.2v3.1v0.1h0.1c2.9,2.7,3.2,7.8,3.2,7.8h6.3c0,0-0.1-4.7,3.2-7.8h0.1v-0.1v-3.1c-2,1-4.2,1.5-6.6,1.5 C21.7,33.6,19.5,33.1,17.5,32.2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24,3.8c-8,0-14.5,6.5-14.5,14.5c0,5.3,2.9,10.2,7.6,12.7c2.1,1.2,4.5,1.8,6.9,1.8c2.5,0,4.9-0.6,7.1-1.8 c4.6-2.6,7.4-7.4,7.4-12.7C38.5,10.3,32,3.8,24,3.8z M30.1,29.3c-3.7,2.1-8.4,2.1-12.1,0.1c-4-2.2-6.5-6.4-6.5-11 c0-6.9,5.6-12.5,12.5-12.5s12.5,5.6,12.5,12.5C36.5,22.9,34,27,30.1,29.3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M28.7,23.8c-1,0.2-2.3-0.9-2,0.2c0.2,1,1.3,1.7,2.3,1.5s1.7-1.3,1.5-2.3C30.2,22.1,29.7,23.6,28.7,23.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.8,27.4c-1.1-0.6-1.5-2-1.9-1.2c-0.4,0.7,0.2,1.8,1.2,2.3c1.1,0.6,2.2,0.4,2.6-0.3C22.1,27.5,20.8,28,19.8,27.4z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M27.3,27.7c-1.2,0.2-2.4-0.6-2.2,0.2c0.1,0.8,1.2,1.3,2.4,1.1s2-1,1.9-1.8C29.1,26.4,28.4,27.5,27.3,27.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M25.1,21.8c1.2,0.1,2-0.6,2-1.8c0.1-1.2-0.6,0-1.9-0.1c-1.2-0.1-2.2-1.6-2.3-0.4S23.9,21.8,25.1,21.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M23.2,23.7c-1-0.3-1.5-1.9-1.8-0.8c-0.3,1,0.3,2.1,1.3,2.4c1,0.3,2.1-0.3,2.4-1.3C25.3,23,24.2,24,23.2,23.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M18.2,19.3c0.8,0.6,2,0.5,2.5-0.2c0.6-0.7-0.8-0.3-1.6-0.9c-0.8-0.6-0.8-2.1-1.4-1.4S17.4,18.6,18.2,19.3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.3,16.2c0.8-0.3-0.5-0.6-0.8-1.6s0.3-2.2-0.5-1.9S12.8,14,13.2,15S14.5,16.5,15.3,16.2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.6,19.8c0.5-0.5-0.6-0.5-1.3-1.3c-0.7-0.8-0.6-2.1-1.1-1.6c-0.5,0.5-0.5,1.5,0.2,2.3C13.1,20,14,20.3,14.6,19.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.9,23.9c-0.8-0.7-0.9-1.9-1.4-1.4c-0.5,0.5-0.2,1.5,0.6,2.2c0.8,0.7,1.8,0.8,2.3,0.2S15.7,24.5,14.9,23.9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.4,22.7c0.5-0.7-0.7-0.3-1.6-0.8c-0.8-0.6-1-2-1.4-1.3s-0.2,1.7,0.6,2.3C17.9,23.5,18.9,23.4,19.4,22.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M34.3,23.3c-0.5-0.7-0.4,0.6-1.1,1.1c-0.7,0.5-1.7,0.4-1.2,1.1c0.5,0.7,1.1,0.6,1.9,0C34.6,25,34.9,24,34.3,23.3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./icons/Hockey.js":
/*!*************************!*\
  !*** ./icons/Hockey.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/icons/Hockey.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? utils_theme__WEBPACK_IMPORTED_MODULE_1__["default"].colors.textDefault : _ref$fill;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: fill,
    viewBox: "0 0 48 48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M38,34c-2,0.5-4.5,0.7-5,0.4c-0.2-0.1-3.8-4.2-8-9.1c3.9-4.6,8.2-9.5,10.8-12.7c0.1,0,0.2,0,0.2-0.1l2.7-3.1l0.1,0.1 l0.8-0.9L38,7.2l-0.8,0.9l0.1,0.1c0,0,0,0,0,0l-2.7,3.1c-0.1,0.1-0.1,0.2-0.1,0.3c-2.6,3.1-6.8,8-10.6,12.4 c-3.8-4.4-8-9.3-10.6-12.4c0-0.1,0-0.2-0.1-0.3l-2.7-3.1c0,0,0,0,0,0l0.1-0.1L10,7.2L8.4,8.6l0.8,0.9l0.1-0.1l2.7,3.1 c0.1,0.1,0.1,0.1,0.2,0.1c2.6,3.1,6.9,8.1,10.8,12.7c-4.2,4.9-7.8,9-8,9.1c-0.5,0.3-3,0.1-5-0.4c-1.9-0.4-4.2-0.9-4.5,1.1 c-0.4,2.3,8.3,2.7,9.8,1.3c0.3-0.3,4.2-4.8,8.7-10c4.5,5.2,8.4,9.7,8.7,10c1.5,1.4,10.2,1,9.8-1.3C42.1,33.1,39.9,33.6,38,34z M37.7,8.6L38,8.2l-0.1-0.1l0.2-0.2l0.9,0.8l-0.2,0.2l-0.1-0.1l-2.9,3.4l-0.1,0l-0.5-0.4l0-0.1L37.7,8.6z M12.9,11.7l-0.5,0.4 l-0.1,0L9.4,8.7L9.2,8.9L9.1,8.6l0.9-0.8l0.2,0.2L10,8.2l0.3,0.3l2.6,3.1L12.9,11.7z M12.9,36.7c-1.8,0.2-4.2,0.1-5.7-0.5l0.6-2.1 c0.7,0,1.5,0.2,2.2,0.4c0.6,0.1,2,0.4,3.2,0.5L12.9,36.7z M35.1,36.7L34.9,35c1.2-0.1,2.6-0.3,3.2-0.5c0.7-0.2,1.5-0.3,2.2-0.4 l0.6,2.1C39.3,36.8,36.9,36.9,35.1,36.7z M23.5,36.1c-1.2,0-2.5,0.3-2.5,1v0.7c0,0.7,1.3,1,2.5,1c1.2,0,2.5-0.3,2.5-1v-0.7 C26,36.4,24.7,36.1,23.5,36.1z M25.6,37.2c-0.1,0.3-1,0.6-2.1,0.6c-1.2,0-2-0.3-2.1-0.6l0-0.1l0-0.1c0.1-0.3,0.9-0.6,2.1-0.6 c1.2,0,2,0.3,2.1,0.6V37.2L25.6,37.2z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./icons/Logo.js":
/*!***********************!*\
  !*** ./icons/Logo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");


var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/icons/Logo.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  path:not(:nth-of-type(3)) {\n    isolation: isolate;\n    opacity: 0.2;\n    mix-blend-mode: multiply;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StyledSvg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.svg(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? utils_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.textDefault : _ref$fill;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSvg, {
    fill: fill,
    viewBox: "0 0 867.96 303.51",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M94.65,54c-17,12.54-27.86,32.41-30.14,63.36A151.69,151.69,0,0,0,204.64,279.75c35.54,2.62,68.73-7.77,96.07-26.38Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M532.8,63.93c-21.95,14.91-34.7,37.89-31.91,75.69A151.69,151.69,0,0,0,663.33,279.75c25.39-1.87,48.45-10.46,68.65-23.06Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M434,39.8c-67,0-86.12-15.9-106.83-21-0.7-.23-1.5-0.38-2.21-0.6s-1.44-.37-2.2-0.55C294.15,9,259.94,4.92,222.88,2.19,189.49-.27,158.5-1,131,1.91,74,3.26,38.87,8.07,0,17.39V86.93c12.89,0,27.59,10.43,27.85,31.41,1.24,96.27,75,177.44,172.85,184.65C304,310.61,394,233,401.58,129.7c0.74-10.06-1.11-17.67-2.24-26-4.21-2.93-7.27-6.22-7.27-10C392.06,83.41,410.83,75,434,75s41.92,8.41,41.92,18.78c0,3.74-3.06,7-7.27,10-1.14,8.29-3,15.89-2.24,26C474,233,563.94,310.61,667.26,303c97.81-7.21,171.61-88.38,172.85-184.65,0.26-21,15-31.41,27.85-31.41V17.39C829.09,8.07,794,3.26,737,1.91c-27.5-3-58.49-2.18-91.88.28C608,4.92,573.81,9,545.22,17.62c-0.76.18-1.45,0.37-2.2,0.55s-1.51.38-2.21,0.6C520.1,23.9,501,39.8,434,39.8Zm-229.34,240A151.69,151.69,0,0,1,64.51,117.31c6.16-83.55,74.51-87,158.06-80.8S373.23,56.07,367.08,139.62A151.7,151.7,0,0,1,204.64,279.75ZM500.88,139.62c-6.16-83.55,61-97,144.51-103.11s151.9-2.75,158.06,80.8A151.69,151.69,0,0,1,500.88,139.62Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/home/Home.js":
/*!****************************!*\
  !*** ./pages/home/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries */ "./pages/home/queries.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils */ "./utils/index.js");
/* harmony import */ var components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/layout/StyledComponents */ "./components/layout/StyledComponents.js");
/* harmony import */ var components_layout_PageWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/layout/PageWrapper */ "./components/layout/PageWrapper.js");
/* harmony import */ var components_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Loader */ "./components/Loader.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/mediaQueries */ "./utils/mediaQueries.js");
/* harmony import */ var icons_Bass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! icons/Bass */ "./icons/Bass.js");
/* harmony import */ var icons_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! icons/Logo */ "./icons/Logo.js");
/* harmony import */ var icons_Golf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! icons/Golf */ "./icons/Golf.js");
/* harmony import */ var icons_Hockey__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! icons/Hockey */ "./icons/Hockey.js");


var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/pages/home/Home.js";

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: auto;\n  height: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 80px;\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: -55px;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  background-color: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 5px 10px -8px ", ";\n\n  svg {\n    width: 70%;\n    height: auto;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex: 0 0 calc(33.33% - 20px);\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  background: #fff;\n  margin: 35px 0;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex-direction: row;\n    justify-content: space-between;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  border-radius: 0.25em;\n  padding: 1.3em 15px 20px;\n  border: 1px solid ", ";\n  background: radial-gradient(circle closest-side at 0.5em 0.5em, #ea5a5a, #ea5a5a 2px, #6c6c6c 3px, transparent 3px),\n    radial-gradient(circle closest-side at 1.03em 0.5em, #d5c035, #d5c035 2px, #6c6c6c 3px, transparent 3px),\n    radial-gradient(circle closest-side at 1.53em 0.5em, #32b42c, #32b42c 2px, #6c6c6c 3px, transparent 3px),\n    linear-gradient(to bottom, ", " 1em, white 1em);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















var StyledBrowser = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.border, utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.darkGrey);
var StyledCardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), utils_mediaQueries__WEBPACK_IMPORTED_MODULE_11__["default"].tablet(_templateObject3()));
var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4(), utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.border, utils_mediaQueries__WEBPACK_IMPORTED_MODULE_11__["default"].tablet(_templateObject5()));
var StyledCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6(), utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.lightGrey, utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.border, utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.darkGrey);
var StyledCardImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject7());
var StyledCardImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject8());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_5__["GET_HOME_CONTENT"], {
    variables: {
      id: 1
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Loader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 23
    }
  });
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, "Error :(");
  var sections = data.Page.sections;
  var Hobbies = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_Bass__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 20
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_Golf__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 30
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_Hockey__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 40
    }
  })];
  var Dev = [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_PageWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    heading: "Welcome",
    emoji: "\uD83D\uDC4B",
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Wrapper"], {
    fullWidth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledBrowser, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["H1"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Hello World!"), Object(utils__WEBPACK_IMPORTED_MODULE_6__["splitLineBreaks"])(sections[0].content).map(function (line, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Paragraph"], {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 22
      }
    }, line);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["H2"], {
    style: {
      paddingBottom: 12
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, sections[1].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCardsWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, sections[1].content.map(function (card, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCard, {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCardIcon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 19
      }
    }, Hobbies[idx] || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_Logo__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 52
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["H3"], {
      style: {
        paddingTop: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, card.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Paragraph"], {
      style: {
        textAlign: 'center'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 19
      }
    }, card.description));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["H2"], {
    style: {
      paddingBottom: 12
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, sections[2].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCardsWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, sections[2].content.map(function (card, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCard, {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCardImageWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCardImage, {
      src: card.src,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["H3"], {
      style: {
        paddingTop: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, card.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_StyledComponents__WEBPACK_IMPORTED_MODULE_7__["Paragraph"], {
      style: {
        textAlign: 'center'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, card.description));
  })))));
});

/***/ }),

/***/ "./pages/home/index.js":
/*!*****************************!*\
  !*** ./pages/home/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./pages/home/Home.js");

/* harmony default export */ __webpack_exports__["default"] = (_Home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/home/queries.js":
/*!*******************************!*\
  !*** ./pages/home/queries.js ***!
  \*******************************/
/*! exports provided: GET_HOME_CONTENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_CONTENT", function() { return GET_HOME_CONTENT; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query GetHomeContent($id: ID!) {\n    Page(id: $id) {\n      id\n      name\n      sections\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_HOME_CONTENT = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./pages/home/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: splitLineBreaks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitLineBreaks", function() { return splitLineBreaks; });
var splitLineBreaks = function splitLineBreaks(str) {
  return str.split(new RegExp('\\r?\\n'));
};

/***/ }),

/***/ "./utils/mediaQueries.js":
/*!*******************************!*\
  !*** ./utils/mediaQueries.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @media (min-width: ", "px) {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 320
};

var media = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(sizes).reduce(function (object, label) {
  object[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), sizes[label], styled_components__WEBPACK_IMPORTED_MODULE_2__["css"].apply(void 0, arguments));
  };

  return object;
}, {});

/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    grey: {
      100: 'hsl(219, 18%, 25%)',
      90: 'hsl(219, 18%, 33%)',
      80: 'hsl(219, 18%, 41%)',
      70: 'hsl(219, 18%, 49%)',
      60: 'hsl(219, 18%, 57%)',
      50: 'hsl(219, 18%, 65%)',
      40: 'hsl(219, 15%, 73%)',
      30: 'hsl(219, 8%, 91%)',
      20: 'hsl(219, 4%, 97%)',
      10: 'hsl(219, 1%, 98%)'
    },
    textDefault: 'hsl(219, 75%, 14%)',
    backgroundMenu: 'hsl(219, 50%, 30%)',
    activeLink: 'hsl(219, 50%, 23%)',
    darkGrey: 'hsl(219, 18%, 49%)',
    //grey[70]
    textGrey: 'hsl(219, 15%, 71%)',
    //grey[40]
    border: 'hsl(219, 8%, 91%)',
    //grey[30]
    lightGrey: 'hsl(219, 4%, 97%)',
    //grey[20]
    backgroundContent: 'hsl(219, 1%, 98%)' //grey[10]

  },
  fontStack: 'Noto Sans JP, Helvetica Neue, sans-serif'
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map