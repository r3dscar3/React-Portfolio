webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/navigation/Navigation.js":
/*!****************************************************!*\
  !*** ./components/layout/navigation/Navigation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_layout_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout/Logo */ "./components/layout/Logo.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavLink */ "./components/layout/navigation/NavLink.js");
/* harmony import */ var utils_mediaQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/mediaQueries */ "./utils/mediaQueries.js");
/* harmony import */ var icons_GitHub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! icons/GitHub */ "./icons/GitHub.js");
/* harmony import */ var icons_CodePen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! icons/CodePen */ "./icons/CodePen.js");
/* harmony import */ var icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! icons/LinkedIn */ "./icons/LinkedIn.js");


var _this = undefined,
    _jsxFileName = "/private/var/mobile/Containers/Data/Application/036CC3B1-6026-4531-A0B4-6FACA72B9EB5/Documents/apps/REACT PORTFOLIO7177FA5C-A9B2-4794-8364-6B285E6119A8/src/components/layout/navigation/Navigation.js";

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 30px;\n\n  svg {\n    width: 26px;\n    height: 26px;\n    margin: 10p\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  line-height: 42px;\n  padding-top: 41px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 200px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 108px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  flex: 0 0 auto;\n  padding-top: 37px;\n  width: 50px;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.backgroundMenu;
}, utils_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].tablet(_templateObject2()), utils_mediaQueries__WEBPACK_IMPORTED_MODULE_6__["default"].desktop(_templateObject3()));
var NavWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());
var routes = [{
  emoji: '👋',
  key: 'index',
  label: 'Home',
  pathname: '/'
}, {
  emoji: '☠️',
  key: 'about',
  label: 'About',
  pathname: '/about'
}];

var Navigation = function Navigation(props) {
  var router = props.router;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_layout_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NavWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, routes.map(function (route) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
      active: router.pathname === route.pathname,
      emoji: route.emoji,
      key: route.key,
      label: route.label,
      pathname: route.pathname,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Footer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferer nofollow",
    href: "https://github.com/r3dscar3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_GitHub__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferer nofollow",
    href: "https://codepen.io/r3dscar3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_CodePen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferer nofollow",
    href: "https://linkedin.com/r3dscar3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(icons_LinkedIn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Navigation));

/***/ })

})
//# sourceMappingURL=_app.js.3a3012c6f2d287f92474.hot-update.js.map