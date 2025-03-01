(self["webpackChunk_repo_ui"] = self["webpackChunk_repo_ui"] || []).push([["stories-Configure-mdx"],{

/***/ "../../node_modules/@mdx-js/react/lib/index.js":
/*!*****************************************************!*\
  !*** ../../node_modules/@mdx-js/react/lib/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "./src/stories/Configure.mdx":
/*!***********************************!*\
  !*** ./src/stories/Configure.mdx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightArrow: () => (/* binding */ RightArrow),
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _Users_imobpowerimobpower_Desktop_corinthians_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.mjs */ "../../node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @storybook/blocks */ "../../node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _assets_github_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/github.svg */ "./src/stories/assets/github.svg");
/* harmony import */ var _assets_discord_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/discord.svg */ "./src/stories/assets/discord.svg");
/* harmony import */ var _assets_youtube_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/youtube.svg */ "./src/stories/assets/youtube.svg");
/* harmony import */ var _assets_tutorials_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/tutorials.svg */ "./src/stories/assets/tutorials.svg");
/* harmony import */ var _assets_styling_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/styling.png */ "./src/stories/assets/styling.png");
/* harmony import */ var _assets_context_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/context.png */ "./src/stories/assets/context.png");
/* harmony import */ var _assets_assets_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/assets.png */ "./src/stories/assets/assets.png");
/* harmony import */ var _assets_docs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/docs.png */ "./src/stories/assets/docs.png");
/* harmony import */ var _assets_share_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/share.png */ "./src/stories/assets/share.png");
/* harmony import */ var _assets_figma_plugin_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/figma-plugin.png */ "./src/stories/assets/figma-plugin.png");
/* harmony import */ var _assets_testing_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/testing.png */ "./src/stories/assets/testing.png");
/* harmony import */ var _assets_accessibility_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/accessibility.png */ "./src/stories/assets/accessibility.png");
/* harmony import */ var _assets_theming_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/theming.png */ "./src/stories/assets/theming.png");
/* harmony import */ var _assets_addon_library_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/addon-library.png */ "./src/stories/assets/addon-library.png");




















const RightArrow = () => {
  const _components = {
    path: "path",
    svg: "svg",
    ...(0,_Users_imobpowerimobpower_Desktop_corinthians_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)()
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.svg, {
    viewBox: "0 0 14 14",
    width: "8px",
    height: "14px",
    style: {
      marginLeft: '4px',
      display: 'inline-block',
      shapeRendering: 'inherit',
      verticalAlign: 'middle',
      fill: 'currentColor',
      'path fill': 'currentColor'
    },
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.path, {
      d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"
    })
  });
};
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    p: "p",
    ...(0,_Users_imobpowerimobpower_Desktop_corinthians_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.Meta, {
      title: "Configure your project"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "sb-container",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section-title",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
          id: "configure-your-project",
          children: "Configure your project"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community."
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "sb-section-item",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: _assets_styling_png__WEBPACK_IMPORTED_MODULE_4__,
            alt: "A wall of logos representing different styling technologies"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
            className: "sb-section-item-heading",
            children: "Add styling and CSS"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "sb-section-item-paragraph",
            children: "Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "https://storybook.js.org/docs/configure/styling-and-css/?renderer=react",
            target: "_blank",
            children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "sb-section-item",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: _assets_context_png__WEBPACK_IMPORTED_MODULE_5__,
            alt: "An abstraction representing the composition of data for a component"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
            className: "sb-section-item-heading",
            children: "Provide context and mocking"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "sb-section-item-paragraph",
            children: "Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "https://storybook.js.org/docs/writing-stories/decorators/?renderer=react#context-for-mocking",
            target: "_blank",
            children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "sb-section-item",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: _assets_assets_png__WEBPACK_IMPORTED_MODULE_6__,
            alt: "A representation of typography and image assets"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Load assets and resources"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              className: "sb-section-item-paragraph",
              children: ["To link static files (like fonts) to your projects and stories, use the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                children: "staticDirs"
              }), " configuration option to specify folders to load when\nstarting Storybook."]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/configure/images-and-assets/?renderer=react",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "sb-container",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section-title",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
          id: "do-more-with-storybook",
          children: "Do more with Storybook"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs."
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "sb-section",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "sb-features-grid",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "sb-grid-item",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_docs_png__WEBPACK_IMPORTED_MODULE_7__,
              alt: "A screenshot showing the autodocs tag being set, pointing a docs page being generated"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Autodocs"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "sb-section-item-paragraph",
              children: "Auto-generate living,\ninteractive reference documentation from your components and stories."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "sb-grid-item",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_share_png__WEBPACK_IMPORTED_MODULE_8__,
              alt: "A browser window showing a Storybook being published to a chromatic.com URL"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Publish to Chromatic"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "sb-section-item-paragraph",
              children: "Publish your Storybook to review and collaborate with your entire team."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react#publish-storybook-with-chromatic",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "sb-grid-item",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_figma_plugin_png__WEBPACK_IMPORTED_MODULE_9__,
              alt: "Windows showing the Storybook plugin in Figma"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Figma Plugin"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "sb-section-item-paragraph",
              children: "Embed your stories into Figma to cross-reference the design and live\nimplementation in one place."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/sharing/design-integrations/?renderer=react#embed-storybook-in-figma-with-the-plugin",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "sb-grid-item",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_testing_png__WEBPACK_IMPORTED_MODULE_10__,
              alt: "Screenshot of tests passing and failing"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Testing"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "sb-section-item-paragraph",
              children: "Use stories to test a component in all its variations, no matter how\ncomplex."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/writing-tests/?renderer=react",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "sb-grid-item",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_accessibility_png__WEBPACK_IMPORTED_MODULE_11__,
              alt: "Screenshot of accessibility tests passing and failing"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Accessibility"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "sb-section-item-paragraph",
              children: "Automatically test your components for a11y issues as you develop."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "sb-grid-item",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_theming_png__WEBPACK_IMPORTED_MODULE_12__,
              alt: "Screenshot of Storybook in light and dark mode"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "sb-section-item-heading",
              children: "Theming"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "sb-section-item-paragraph",
              children: "Theme Storybook's UI to personalize it to your project."
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: "https://storybook.js.org/docs/configure/theming/?renderer=react",
              target: "_blank",
              children: ["Learn more", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
            })]
          })]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "sb-addon",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-addon-text",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
          children: "Addons"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "sb-section-item-paragraph",
          children: "Integrate your tools with Storybook to connect workflows."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "https://storybook.js.org/addons/",
          target: "_blank",
          children: ["Discover all addons", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "sb-addon-img",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: _assets_addon_library_png__WEBPACK_IMPORTED_MODULE_13__,
          alt: "Integrate your tools with Storybook to connect workflows."
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "sb-section sb-socials",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section-item",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: _assets_github_svg__WEBPACK_IMPORTED_MODULE_14__,
          alt: "Github logo",
          className: "sb-explore-image"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Join our contributors building the future of UI development."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "https://github.com/storybookjs/storybook",
          target: "_blank",
          children: ["Star on GitHub", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section-item",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: _assets_discord_svg__WEBPACK_IMPORTED_MODULE_15__,
          alt: "Discord logo",
          className: "sb-explore-image"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
            children: "Get support and chat with frontend developers."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "https://discord.gg/storybook",
            target: "_blank",
            children: ["Join Discord server", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section-item",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: _assets_youtube_svg__WEBPACK_IMPORTED_MODULE_16__,
          alt: "Youtube logo",
          className: "sb-explore-image"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
            children: "Watch tutorials, feature previews and interviews."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "https://www.youtube.com/@chromaticui",
            target: "_blank",
            children: ["Watch on YouTube", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "sb-section-item",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: _assets_tutorials_svg__WEBPACK_IMPORTED_MODULE_17__,
          alt: "A book",
          className: "sb-explore-image"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Follow guided walkthroughs on for key workflows."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "https://storybook.js.org/tutorials/",
          target: "_blank",
          children: ["Discover tutorials", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RightArrow, {})]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
      children: `
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_Users_imobpowerimobpower_Desktop_corinthians_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.useMDXComponents)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "../../node_modules/@storybook/blocks/dist sync recursive":
/*!*******************************************************!*\
  !*** ../../node_modules/@storybook/blocks/dist/ sync ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/@storybook/blocks/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../node_modules/@storybook/core/dist/components sync recursive":
/*!****************************************************************!*\
  !*** ../../node_modules/@storybook/core/dist/components/ sync ***!
  \****************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/@storybook/core/dist/components sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../node_modules/@storybook/core/dist/theming sync recursive":
/*!*************************************************************!*\
  !*** ../../node_modules/@storybook/core/dist/theming/ sync ***!
  \*************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/@storybook/core/dist/theming sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/stories/assets/accessibility.png":
/*!**********************************************!*\
  !*** ./src/stories/assets/accessibility.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/accessibility.png";

/***/ }),

/***/ "./src/stories/assets/addon-library.png":
/*!**********************************************!*\
  !*** ./src/stories/assets/addon-library.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/addon-library.png";

/***/ }),

/***/ "./src/stories/assets/assets.png":
/*!***************************************!*\
  !*** ./src/stories/assets/assets.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/assets.png";

/***/ }),

/***/ "./src/stories/assets/context.png":
/*!****************************************!*\
  !*** ./src/stories/assets/context.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/context.png";

/***/ }),

/***/ "./src/stories/assets/discord.svg":
/*!****************************************!*\
  !*** ./src/stories/assets/discord.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/discord.svg";

/***/ }),

/***/ "./src/stories/assets/docs.png":
/*!*************************************!*\
  !*** ./src/stories/assets/docs.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/docs.png";

/***/ }),

/***/ "./src/stories/assets/figma-plugin.png":
/*!*********************************************!*\
  !*** ./src/stories/assets/figma-plugin.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/figma-plugin.png";

/***/ }),

/***/ "./src/stories/assets/github.svg":
/*!***************************************!*\
  !*** ./src/stories/assets/github.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/github.svg";

/***/ }),

/***/ "./src/stories/assets/share.png":
/*!**************************************!*\
  !*** ./src/stories/assets/share.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/share.png";

/***/ }),

/***/ "./src/stories/assets/styling.png":
/*!****************************************!*\
  !*** ./src/stories/assets/styling.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/styling.png";

/***/ }),

/***/ "./src/stories/assets/testing.png":
/*!****************************************!*\
  !*** ./src/stories/assets/testing.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/testing.png";

/***/ }),

/***/ "./src/stories/assets/theming.png":
/*!****************************************!*\
  !*** ./src/stories/assets/theming.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/theming.png";

/***/ }),

/***/ "./src/stories/assets/tutorials.svg":
/*!******************************************!*\
  !*** ./src/stories/assets/tutorials.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/tutorials.svg";

/***/ }),

/***/ "./src/stories/assets/youtube.svg":
/*!****************************************!*\
  !*** ./src/stories/assets/youtube.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/src/stories/assets/youtube.svg";

/***/ })

}]);
//# sourceMappingURL=stories-Configure-mdx.iframe.bundle.js.map