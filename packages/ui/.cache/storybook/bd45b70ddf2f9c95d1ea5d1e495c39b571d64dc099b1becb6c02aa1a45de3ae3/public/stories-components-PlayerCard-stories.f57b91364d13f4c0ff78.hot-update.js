"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-PlayerCard-stories",{

/***/ "./src/stories/components/PlayerCard.stories.tsx":
/*!*******************************************************!*\
  !*** ./src/stories/components/PlayerCard.stories.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   PlayerWithFewStats: () => (/* binding */ PlayerWithFewStats),
/* harmony export */   PlayerWithoutTitles: () => (/* binding */ PlayerWithoutTitles),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ "./src/components/playerCard/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Ajuste o caminho se necessário

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: "Components/PlayerCard",
  component: ___WEBPACK_IMPORTED_MODULE_1__.PlayerCard
});
const Template = args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.PlayerCard, args);
const Default = Template.bind({});
Default.args = {
  name: "Neymar Jr.",
  image: "https://tmssl.akamaized.net/images/foto/galerie/neymar-1668083930-73597.jpg?lm=1668083984",
  titles: 35,
  goals: 400,
  games: 600
};
const PlayerWithoutTitles = Template.bind({});
PlayerWithoutTitles.args = {
  name: "Jogador Sem Títulos",
  image: "https://tmssl.akamaized.net/images/foto/galerie/neymar-1668083930-73597.jpg?lm=1668083984",
  titles: 0,
  goals: 50,
  games: 100
};
const PlayerWithFewStats = Template.bind({});
PlayerWithFewStats.args = {
  name: "Jogador Iniciante",
  image: "https://tmssl.akamaized.net/images/foto/galerie/neymar-1668083930-73597.jpg?lm=1668083984",
  titles: 1,
  goals: 5,
  games: 20
};
;
const __namedExportsOrder = ["Default", "PlayerWithoutTitles", "PlayerWithFewStats"];
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
PlayerWithFewStats.parameters = {
  ...PlayerWithFewStats.parameters,
  docs: {
    ...PlayerWithFewStats.parameters?.docs,
    source: {
      originalSource: "args => <PlayerCard {...args} />",
      ...PlayerWithFewStats.parameters?.docs?.source
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
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor-icons/react */ "../../node_modules/@phosphor-icons/react/dist/csr/Trophy.mjs");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor-icons/react */ "../../node_modules/@phosphor-icons/react/dist/csr/FlagPennant.mjs");
/* harmony import */ var _phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor-icons/react */ "../../node_modules/@phosphor-icons/react/dist/csr/SoccerBall.mjs");

const logo = (__webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png")["default"]);
const PlayerCard = ({ games, goals, image, name, titles })=>{
    return /*#__PURE__*/ React.createElement("div", {
        className: "bg-gradient-to-tl from-neutral-950 to-neutral-900 p-4 rounded-2xl flex flex-col justify-between col-span-1 card h-[420px]"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex justify-center relative"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "text-2xl font-bold text-center text-white z-10"
    }, name), /*#__PURE__*/ React.createElement("img", {
        src: logo,
        alt: name,
        className: "absolute mr-16",
        width: 280,
        height: 420
    }), /*#__PURE__*/ React.createElement("img", {
        src: image,
        alt: name,
        className: "z-10 ml-auto object-cover h-[310px] object-top",
        width: 220,
        height: 300
    })), /*#__PURE__*/ React.createElement("div", {
        className: "-mt-4 text-lg text-gray-300 number-font gap-4 justify-center w-full grid grid-cols-3"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-md rounded-md col-span-1 shadow-md z-10"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "text-sm"
    }, "T\xedtulos"), /*#__PURE__*/ React.createElement("p", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ React.createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_0__.Trophy, {
        size: 24
    }), /*#__PURE__*/ React.createElement("span", {
        className: "font-semibold"
    }, titles))), /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-xs rounded-md col-span-1 shadow-md z-10"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "text-sm"
    }, "Jogos"), /*#__PURE__*/ React.createElement("p", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ React.createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_1__.FlagPennant, {
        size: 24
    }), /*#__PURE__*/ React.createElement("span", {
        className: "font-semibold"
    }, games))), /*#__PURE__*/ React.createElement("div", {
        className: "flex flex-col gap-3 p-3 bg-gradient-to-t from-neutral-800 to-neutral-800/30 backdrop-blur-xs rounded-md col-span-1 shadow-md z-10"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "text-sm"
    }, "Gols"), /*#__PURE__*/ React.createElement("p", {
        className: "flex items-center gap-4"
    }, /*#__PURE__*/ React.createElement(_phosphor_icons_react__WEBPACK_IMPORTED_MODULE_2__.SoccerBall, {
        size: 24
    }), /*#__PURE__*/ React.createElement("span", {
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

});
//# sourceMappingURL=stories-components-PlayerCard-stories.f57b91364d13f4c0ff78.hot-update.js.map