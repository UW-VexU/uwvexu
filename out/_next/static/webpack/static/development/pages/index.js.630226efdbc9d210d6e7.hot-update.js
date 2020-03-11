webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NextLink */ "./components/NextLink.js");
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Styles */ "./components/Styles.jsx");
var _jsxFileName = "/Users/alexgirard/Documents/VEXU/uwvexu.ca/components/NavBar.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var NavContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__NavContainer",
  componentId: "gz3npb-0"
})(["@media (max-width:920px){background-color:black;}"]);
var MenuText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NavBar__MenuText",
  componentId: "gz3npb-1"
})(["margin-left:1.5rem;margin-right:1.5rem;font-size:20px;cursor:pointer;user-select:none;"]);
var MenuOption = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuText).withConfig({
  displayName: "NavBar__MenuOption",
  componentId: "gz3npb-2"
})(["color:white;transition:all 0.2s;:hover{color:", ";}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"]);
var MenuButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuText).withConfig({
  displayName: "NavBar__MenuButton",
  componentId: "gz3npb-3"
})(["border:2px solid ", ";color:", ";padding-top:0.6rem;padding-bottom:0.6rem;padding-left:1.25rem;padding-right:1.25rem;margin-right:1rem;transition:all 0.2s;:hover{background-color:", ";color:black;}"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"], _Styles__WEBPACK_IMPORTED_MODULE_3__["yellow"]);
var TextMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__TextMenu",
  componentId: "gz3npb-4"
})(["@media (max-width:920px){display:none;}"]);
var MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "NavBar__MenuIcon",
  componentId: "gz3npb-5"
})(["color:white;padding-right:1.5rem;font-size:30px;"]);
var ButtonMenu = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_Styles__WEBPACK_IMPORTED_MODULE_3__["FlexContainer"]).withConfig({
  displayName: "NavBar__ButtonMenu",
  componentId: "gz3npb-6"
})(["display:none;@media (max-width:920px){display:block;}"]);

var MenuOptions = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("a", {
  href: "#about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "ABOUT")), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("a", {
  href: "#events",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, "EVENTS")), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("a", {
  href: "#sponsor",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, "SPONSOR")), __jsx(MenuOption, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("a", {
  href: "#contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, "CONTACT")), __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: "https://forms.gle/WGnEERX5HZF1xDwb7",
  external: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx(MenuButton, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "JOIN")));

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(NavContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_NextLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_Styles__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    width: "200px",
    src: "/static/logo_w.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_Styles__WEBPACK_IMPORTED_MODULE_3__["Spacer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(TextMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, MenuOptions), __jsx(ButtonMenu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(MenuIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-bars",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.630226efdbc9d210d6e7.hot-update.js.map