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

/***/ }),

/***/ "../../node_modules/clsx/dist/clsx.mjs":
/*!*********************************************!*\
  !*** ../../node_modules/clsx/dist/clsx.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/components/navBar/components/content/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/navBar/components/content/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarContent: () => (/* binding */ NavBarContent)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");

function NavBarContent({ children, classNames }) {
    return /*#__PURE__*/ React.createElement("nav", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("container mx-auto flex justify-between items-center py-4 px-6", classNames?.nav)
    }, /*#__PURE__*/ React.createElement("ul", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("flex space-x-6", classNames?.ul)
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


/***/ }),

/***/ "./src/components/navBar/components/link/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/navBar/components/link/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarLink: () => (/* binding */ NavBarLink)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");

function NavBarLink({ className, href, onClick, toId, children, ...rest }) {
    return /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: href,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("hover:text-gray-400 cursor-pointer", className),
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


/***/ }),

/***/ "./src/components/navBar/components/logo/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/navBar/components/logo/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarLogo: () => (/* binding */ NavBarLogo)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");

const logo = (__webpack_require__(/*! ../../../../images/timao.png */ "./src/images/timao.png")["default"]);
function NavBarLogo({ logoImg, className, altText = "Logo do site" }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("flex items-center gap-2", className?.content)
    }, /*#__PURE__*/ React.createElement("img", {
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


/***/ }),

/***/ "./src/components/navBar/components/root/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/navBar/components/root/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarRoot: () => (/* binding */ NavBarRoot)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");

function NavBarRoot({ children, className }) {
    return /*#__PURE__*/ React.createElement("header", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("fixed w-full bg-gradient-to-b from-black to-transparent bg-opacity-75 backdrop-blur-xs z-50", className)
    }, children);
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
        "className": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": ""
        }
    }
};


/***/ }),

/***/ "./src/components/navBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/navBar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBar: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content */ "./src/components/navBar/components/content/index.tsx");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/link */ "./src/components/navBar/components/link/index.tsx");
/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/logo */ "./src/components/navBar/components/logo/index.tsx");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/root */ "./src/components/navBar/components/root/index.tsx");




const NavBar = {
    Root: _components_root__WEBPACK_IMPORTED_MODULE_0__.NavBarRoot,
    Logo: _components_logo__WEBPACK_IMPORTED_MODULE_1__.NavBarLogo,
    Link: _components_link__WEBPACK_IMPORTED_MODULE_2__.NavBarLink,
    Content: _components_content__WEBPACK_IMPORTED_MODULE_3__.NavBarContent
};


/***/ }),

/***/ "./src/images/timao.png":
/*!******************************!*\
  !*** ./src/images/timao.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/timao.png";

/***/ })

});
//# sourceMappingURL=stories-components-NavBar-stories.7b3da14c305882fe1a28.hot-update.js.map