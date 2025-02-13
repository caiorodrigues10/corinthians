"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-NavBar-stories",{

/***/ "./src/components/navBar/components/content/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/navBar/components/content/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarContent: () => (/* binding */ NavBarContent)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NavBarContent({ children, classNames }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("container mx-auto flex justify-between items-center py-4 px-6", classNames?.nav)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("flex space-x-6", classNames?.ul)
    }, children));
}
NavBarContent.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "NavBarContent",
    "props": {
        "classNames": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "object",
                "raw": "{\n  nav?: string;\n  ul?: string;\n}",
                "signature": {
                    "properties": [
                        {
                            "key": "nav",
                            "value": {
                                "name": "string",
                                "required": false
                            }
                        },
                        {
                            "key": "ul",
                            "value": {
                                "name": "string",
                                "required": false
                            }
                        }
                    ]
                }
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
    }
};


/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.e5c90f18d19a52280599.hot-update.js.map