"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-NavBar-stories",{

/***/ "./src/components/navBar/components/logo/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/navBar/components/logo/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarLogo: () => (/* binding */ NavBarLogo)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const logo = (__webpack_require__(/*! ../../../../images/timao.png */ "./src/images/timao.png")["default"]);

function NavBarLogo({ logoImg, className, altText = "Logo do site" }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("flex items-center gap-2 w-[50px] h-[50px]", className?.content)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: logoImg || logo,
        alt: altText,
        width: 50,
        height: 50,
        className: className?.img
    }));
}
NavBarLogo.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "NavBarLogo",
    "props": {
        "logoImg": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "className": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "object",
                "raw": "{\n  content?: string;\n  img?: string;\n}",
                "signature": {
                    "properties": [
                        {
                            "key": "content",
                            "value": {
                                "name": "string",
                                "required": false
                            }
                        },
                        {
                            "key": "img",
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
        "altText": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": "",
            "defaultValue": {
                "value": "\"Logo do site\"",
                "computed": false
            }
        }
    }
};


/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.005fdfa6eb0fa1955fd8.hot-update.js.map