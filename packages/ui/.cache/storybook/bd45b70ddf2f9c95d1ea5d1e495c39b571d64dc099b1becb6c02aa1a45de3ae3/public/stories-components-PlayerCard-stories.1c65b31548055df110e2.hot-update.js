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
  name: "Ronaldo",
  image: __webpack_require__(/*! ../../images/ronaldo.png */ "./src/images/ronaldo.png"),
  titles: 35,
  goals: 400,
  games: 600,
  className: "w-[400px]"
};
const PlayerWithoutTitles = Template.bind({});
PlayerWithoutTitles.args = {
  name: "Jogador Sem Títulos",
  image: __webpack_require__(/*! ../../images/ronaldo.png */ "./src/images/ronaldo.png"),
  titles: 0,
  goals: 50,
  games: 100
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

/***/ })

});
//# sourceMappingURL=stories-components-PlayerCard-stories.1c65b31548055df110e2.hot-update.js.map