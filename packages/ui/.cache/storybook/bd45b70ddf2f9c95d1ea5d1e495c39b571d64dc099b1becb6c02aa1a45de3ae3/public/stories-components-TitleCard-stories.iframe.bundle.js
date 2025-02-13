"use strict";
(self["webpackChunk_repo_ui"] = self["webpackChunk_repo_ui"] || []).push([["stories-components-TitleCard-stories"],{

/***/ "./src/stories/components/TitleCard.stories.tsx":
/*!******************************************************!*\
  !*** ./src/stories/components/TitleCard.stories.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   WithManyTitles: () => (/* binding */ WithManyTitles),
/* harmony export */   WithNoTitles: () => (/* binding */ WithNoTitles),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ "./src/components/titleCard/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Components/TitleCard",
  component: ___WEBPACK_IMPORTED_MODULE_1__.TitleCard
});
const Template = args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.TitleCard, args);
const Default = Template.bind({});
Default.args = {
  title: "Copa do Brasil",
  totalTitles: 4,
  imageTitle: __webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png"),
  className: "w-[400px]"
};
const WithManyTitles = Template.bind({});
WithManyTitles.args = {
  title: "Campeonato Brasileiro",
  totalTitles: 10,
  imageTitle: __webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png"),
  className: "w-[400px]"
};
const WithNoTitles = Template.bind({});
WithNoTitles.args = {
  title: "Troféu Desconhecido",
  totalTitles: 0,
  imageTitle: __webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png"),
  className: "w-[400px]"
};
;
const __namedExportsOrder = ["Default", "WithManyTitles", "WithNoTitles"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <TitleCard {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
WithManyTitles.parameters = {
  ...WithManyTitles.parameters,
  docs: {
    ...WithManyTitles.parameters?.docs,
    source: {
      originalSource: "args => <TitleCard {...args} />",
      ...WithManyTitles.parameters?.docs?.source
    }
  }
};
WithNoTitles.parameters = {
  ...WithNoTitles.parameters,
  docs: {
    ...WithNoTitles.parameters?.docs,
    source: {
      originalSource: "args => <TitleCard {...args} />",
      ...WithNoTitles.parameters?.docs?.source
    }
  }
};

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

/***/ "./src/components/titleCard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/titleCard/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleCard: () => (/* binding */ TitleCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");
"use client";


const TitleCard = ({ imageTitle, title, totalTitles, className })=>{
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("bg-black p-6 flex flex-col gap-4 rounded-2xl relative overflow-hidden btn justify-center", className)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex gap-4 items-center z-10"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "bg-white p-1 rounded-lg"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: imageTitle,
        className: "w-[100px] h-[100px] object-contain",
        alt: `${title} image`
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "text-xl font-bold mb-2 text-white"
    }, title), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-gray-300 nunito"
    }, totalTitles, " T\xedtulos"))));
};
TitleCard.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "TitleCard",
    "props": {
        "totalTitles": {
            "required": true,
            "tsType": {
                "name": "number"
            },
            "description": ""
        },
        "title": {
            "required": true,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "imageTitle": {
            "required": true,
            "tsType": {
                "name": "string"
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

/***/ "./src/images/logoblackwhite.png":
/*!***************************************!*\
  !*** ./src/images/logoblackwhite.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/logoblackwhite.png";

/***/ })

}]);
//# sourceMappingURL=stories-components-TitleCard-stories.iframe.bundle.js.map