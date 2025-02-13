"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-NavBar-stories",{

/***/ "./src/stories/components/NavBar.stories.tsx":
/*!***************************************************!*\
  !*** ./src/stories/components/NavBar.stories.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarStories: () => (/* binding */ NavBarStories),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
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
const Template = ({
  links = navBarLinks
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Logo, {
  altText: "Logo do site"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Content, null, links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.NavBar.Link, {
  key: link.toId,
  toId: link.toId
}, link.text))));
// Exemplo adicional com links diferentes
const NavBarStories = Template.bind({});
;
const __namedExportsOrder = ["NavBarStories"];
NavBarStories.parameters = {
  ...NavBarStories.parameters,
  docs: {
    ...NavBarStories.parameters?.docs,
    source: {
      originalSource: "({\n  links = navBarLinks\n}: NavBarProps) => <NavBar.Root>\n    <NavBar.Logo altText=\"Logo do site\" />\n    <NavBar.Content>\n      {links.map(link => <NavBar.Link key={link.toId} toId={link.toId}>\n          {link.text}\n        </NavBar.Link>)}\n    </NavBar.Content>\n  </NavBar.Root>",
      ...NavBarStories.parameters?.docs?.source
    }
  }
};

/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.f0bcbb050f34a20481f1.hot-update.js.map