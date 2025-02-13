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

/***/ })

});
//# sourceMappingURL=stories-components-PlayerCard-stories.1223e8759e97283b4aa0.hot-update.js.map