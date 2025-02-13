"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-NavBar-stories",{

/***/ "./src/components/navBar/components/link/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/navBar/components/link/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarLink: () => (/* binding */ NavBarLink)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NavBarLink({ className, href, onClick, toId, children, ...rest }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: href,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("hover:text-gray-400 cursor-pointer navbar-link", className),
        onClick: (e)=>{
            onClick?.(e);
            e.preventDefault();
            document.getElementById(toId)?.scrollIntoView({
                behavior: "smooth"
            });
        },
        ...rest
    }, children));
}
NavBarLink.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "NavBarLink",
    "props": {
        "toId": {
            "required": true,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "children": {
            "required": true,
            "tsType": {
                "name": "ReactNode"
            },
            "description": ""
        }
    },
    "composes": [
        "AnchorHTMLAttributes"
    ]
};


/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.986331b022158034324e.hot-update.js.map