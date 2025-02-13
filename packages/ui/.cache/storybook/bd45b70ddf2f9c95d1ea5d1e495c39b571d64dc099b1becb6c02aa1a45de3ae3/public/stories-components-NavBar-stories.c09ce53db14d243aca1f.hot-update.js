"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-NavBar-stories",{

/***/ "./src/stories/components/NavBar.stories.tsx":
/*!***************************************************!*\
  !*** ./src/stories/components/NavBar.stories.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ "./src/components/navBar/index.tsx");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Components/NavBar",
  component: ___WEBPACK_IMPORTED_MODULE_1__.NavBar
});
const navBarLinks = [{
  toId: "section1",
  text: "Section 1"
}, {
  toId: "section2",
  text: "Section 2"
}, {
  toId: "section3",
  text: "Section 3"
}];
const Template = args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Logo, {
  altText: "Logo do site"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Content, null, args.links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Link, {
  key: link.toId,
  toId: link.toId
}, link.text))));

/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.c09ce53db14d243aca1f.hot-update.js.map