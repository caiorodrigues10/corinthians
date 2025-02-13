"use strict";
(self["webpackChunk_repo_ui"] = self["webpackChunk_repo_ui"] || []).push([["stories-components-PlayerCard-stories"],{

/***/ "./src/stories/components/PlayerCard.stories.tsx":
/*!*******************************************************!*\
  !*** ./src/stories/components/PlayerCard.stories.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   PlayerWithoutTitles: () => (/* binding */ PlayerWithoutTitles),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ "./src/components/playerCard/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const logo = __webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Components/PlayerCard",
  component: ___WEBPACK_IMPORTED_MODULE_1__.PlayerCard
});
const Template = args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.PlayerCard, args);
const Default = Template.bind({});
Default.args = {
  name: "Ronaldo",
  image: __webpack_require__(/*! ../../images/ronaldo.png */ "./src/images/ronaldo.png"),
  titles: 35,
  goals: 400,
  games: 600,
  className: "w-[400px]",
  logoImg: logo
};
const PlayerWithoutTitles = Template.bind({});
PlayerWithoutTitles.args = {
  name: "Jogador Sem Títulos",
  image: __webpack_require__(/*! ../../images/ronaldo.png */ "./src/images/ronaldo.png"),
  titles: 0,
  goals: 50,
  games: 100,
  className: "w-[400px]",
  logoImg: logo
};
;
const __namedExportsOrder = ["Default", "PlayerWithoutTitles"];
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "args => <PlayerCard {...args} />",
      ...Default.parameters?.docs?.source
    }
  }
};
PlayerWithoutTitles.parameters = {
  ...PlayerWithoutTitles.parameters,
  docs: {
    ...PlayerWithoutTitles.parameters?.docs,
    source: {
      originalSource: "args => <PlayerCard {...args} />",
      ...PlayerWithoutTitles.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "./src/components/playerCard/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/playerCard/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerCard: () => (/* binding */ PlayerCard)
/* harmony export */ });
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ "../../node_modules/@phosphor-icons/react/dist/csr/Trophy.mjs");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor-icons/react */ "../../node_modules/@phosphor-icons/react/dist/csr/FlagPennant.mjs");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor-icons/react */ "../../node_modules/@phosphor-icons/react/dist/csr/SoccerBall.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../../node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const logo = (__webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png")["default"]);

const PlayerCard = ({ games, goals, image, name, titles, className, logoImg })=>{
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("bg-gradient-to-tl from-neutral-950 to-neutral-900 p-4 rounded-2xl flex flex-col justify-between col-span-1 card h-[420px]", className)
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex justify-center relative"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "text-2xl font-bold text-center text-white z-10"
    }, name), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: logoImg || logo,
        alt: "Corinthians",
        className: "absolute mr-16",
        width: 280,
        height: 420
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: image,
        alt: name,
        className: "z-10 ml-auto object-cover h-[310px] object-top",
        width: 220,
        height: 300
    })), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "-mt-4 text-lg text-gray-300 number-font gap-4 justify-center w-full grid grid-cols-3"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-md rounded-md col-span-1 shadow-md z-10"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-sm"
    }, "T\xedtulos"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.Trophy, {
        size: 24
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-semibold"
    }, titles))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-xs rounded-md col-span-1 shadow-md z-10"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-sm"
    }, "Jogos"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_3__.FlagPennant, {
        size: 24
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-semibold"
    }, games))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-xs rounded-md col-span-1 shadow-md z-10"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-sm"
    }, "Gols"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_4__.SoccerBall, {
        size: 24
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-semibold"
    }, goals)))));
};
PlayerCard.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "PlayerCard",
    "props": {
        "name": {
            "required": true,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "image": {
            "required": true,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "titles": {
            "required": true,
            "tsType": {
                "name": "number"
            },
            "description": ""
        },
        "goals": {
            "required": true,
            "tsType": {
                "name": "number"
            },
            "description": ""
        },
        "games": {
            "required": true,
            "tsType": {
                "name": "number"
            },
            "description": ""
        },
        "className": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": ""
        },
        "logoImg": {
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

/***/ }),

/***/ "./src/images/ronaldo.png":
/*!********************************!*\
  !*** ./src/images/ronaldo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/src/images/ronaldo.png";

/***/ })

}]);
//# sourceMappingURL=stories-components-PlayerCard-stories.iframe.bundle.js.map