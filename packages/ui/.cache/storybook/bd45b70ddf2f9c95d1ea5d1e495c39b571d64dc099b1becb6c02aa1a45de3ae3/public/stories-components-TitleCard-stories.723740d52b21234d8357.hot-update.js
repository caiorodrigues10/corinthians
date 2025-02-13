"use strict";
self["webpackHotUpdate_repo_ui"]("stories-components-TitleCard-stories",{

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
  className: "w-[320px]"
};
const WithManyTitles = Template.bind({});
WithManyTitles.args = {
  title: "Campeonato Brasileiro",
  totalTitles: 10,
  imageTitle: __webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png")
};
const WithNoTitles = Template.bind({});
WithNoTitles.args = {
  title: "Troféu Desconhecido",
  totalTitles: 0,
  imageTitle: __webpack_require__(/*! ../../images/logoblackwhite.png */ "./src/images/logoblackwhite.png")
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

/***/ })

});
//# sourceMappingURL=stories-components-TitleCard-stories.723740d52b21234d8357.hot-update.js.map