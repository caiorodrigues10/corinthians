"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-NavBar-stories",{

/***/ "./src/components/navBar/components/root/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/navBar/components/root/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarRoot: () => (/* binding */ NavBarRoot)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NavBarRoot({ children, classNames }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("fixed w-full bg-gradient-to-b from-black to-transparent bg-opacity-75 backdrop-blur-xs z-50", classNames?.header)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("container mx-auto flex py-4 px-6 justify-between items-center", classNames?.nav)
    }, children));
}
NavBarRoot.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "NavBarRoot",
    "props": {
        "children": {
            "required": true,
            "tsType": {
                "name": "ReactNode"
            },
            "description": ""
        },
        "classNames": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "object",
                "raw": "{\n  nav?: string;\n  header?: string;\n}",
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
                            "key": "header",
                            "value": {
                                "name": "string",
                                "required": false
                            }
                        }
                    ]
                }
            },
            "description": ""
        }
    }
};


/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.911c3f32e0a2d265e1f9.hot-update.js.map