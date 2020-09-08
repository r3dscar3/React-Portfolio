webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/Home.js":
/*!****************************!*\
  !*** ./pages/home/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  ju\n  height: 80px;\n  width: 100%;\n"]);

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
















var StyledBrowser = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.border, utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.darkGrey);
var StyledCardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), utils_mediaQueries__WEBPACK_IMPORTED_MODULE_11__["default"].tablet(_templateObject3()));
var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.border, utils_mediaQueries__WEBPACK_IMPORTED_MODULE_11__["default"].tablet(_templateObject5()));
var StyledCardIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject6(), utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.lightGrey, utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.border, utils_theme__WEBPACK_IMPORTED_MODULE_10__["default"].colors.darkGrey);
var StyledCardImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject7());
var StyledCardImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img(_templateObject8());
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

/***/ })

})
//# sourceMappingURL=index.js.ec4b260b233660e820c2.hot-update.js.map