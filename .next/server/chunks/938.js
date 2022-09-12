"use strict";
exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 8938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3031);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__]);
_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "h-screen flex flex-row justify-start",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_Sidebar_jsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "flex-1 p-4 text-black",
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9101);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9470);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3682);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_auth__WEBPACK_IMPORTED_MODULE_6__]);
_lib_auth__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["icon"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const menuItems = [{
  id: 1,
  label: "Home",
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__/* .HomeIcon */ .tv,
  link: "/main/home"
}, {
  id: 2,
  label: "Work Orders",
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__/* .WorkorderIcon */ .Rx,
  link: "/main/workorders"
}, {
  id: 3,
  label: "Procedure Library",
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__/* .ProcedureIcon */ .lD,
  link: "/main/procedures"
}, {
  id: 4,
  label: "Team & Users",
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__/* .UsersIcon */ .oy,
  link: "/main/users"
}];

const logout = () => {
  (0,_lib_auth__WEBPACK_IMPORTED_MODULE_6__/* .unsetToken */ .Ll)();
};

function Sidebar() {
  const {
    0: toggleCollapse,
    1: setToggleCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isCollapsible,
    1: setIsCollapsible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const activeMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname]);
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()("h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col", {
    "w-80": !toggleCollapse,
    "w-20": toggleCollapse
  });
  const collapseIconClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()("p-4 rounded bg-light-lighter absolute right-0", {
    "rotate-180": toggleCollapse
  });

  const getNavItemClasses = menu => {
    return classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap", {
      "bg-light-lighter": activeMenu?.id === menu.id
    });
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: wrapperClasses,
    onMouseEnter: onMouseOver,
    onMouseLeave: onMouseOver,
    style: {
      transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center justify-between relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex items-center pl-1 gap-4",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("", {
              hidden: toggleCollapse
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              src: "/favicon-32x32.png",
              width: "40",
              height: "40",
              alt: "\uB85C\uACE0 \uC774\uBBF8\uC9C0"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mt-1 text-lg font-bold text-text", {
              hidden: toggleCollapse
            }),
            children: "DX Maintenence"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          className: collapseIconClasses,
          onClick: handleSidebarToggle,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_icons__WEBPACK_IMPORTED_MODULE_7__/* .CollapsIcon */ .z3, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "flex flex-col items-start mt-24",
        children: menuItems.map(_ref => {
          let {
            icon: Icon
          } = _ref,
              menu = _objectWithoutProperties(_ref, _excluded);

          const classes = getNavItemClasses(menu);
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: classes,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: menu.link,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                className: "flex py-4 px-3 items-center w-full h-full",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  style: {
                    width: "2.5rem"
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Icon, {})
                }), !toggleCollapse && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-md font-medium text-text-light"),
                  children: menu.label
                })]
              }, "a")
            })
          }, menu.label);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "align-bottom",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: `${getNavItemClasses({})} px-3 py-4`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          style: {
            width: "2.5rem"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.Settings, {})
        }), !toggleCollapse && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-md font-medium text-text-light"),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/main/settings",
            children: "Settings"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: `${getNavItemClasses({})} px-3 py-4`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          style: {
            width: "2.5rem"
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__.Power, {})
        }), !toggleCollapse && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-md font-medium text-text-light"),
          onClick: logout,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: "Logout"
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z3": () => (/* reexport */ icons_CollapsIcon),
  "tv": () => (/* reexport */ icons_HomeIcon),
  "lD": () => (/* reexport */ icons_ProcedureIcon),
  "oy": () => (/* reexport */ icons_UsersIcon),
  "Rx": () => (/* reexport */ icons_WorkorderIcon)
});

// UNUSED EXPORTS: ArticleIcon, CategoryIcon, LogoIcon, VideosIcon

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/icons/ArticleIcon.jsx
const _excluded = (/* unused pure expression or super */ null && (["fill"]));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function ArticleIcon(_ref) {
  let {
    fill = '#6C7281'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
      fill: fill
    })]
  }));
}

/* harmony default export */ const icons_ArticleIcon = ((/* unused pure expression or super */ null && (ArticleIcon)));
;// CONCATENATED MODULE: ./src/components/icons/HomeIcon.jsx
const HomeIcon_excluded = ["fill"];

function HomeIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function HomeIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? HomeIcon_ownKeys(Object(source), !0).forEach(function (key) { HomeIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : HomeIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function HomeIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function HomeIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HomeIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HomeIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function HomeIcon(_ref) {
  let {
    fill = '#ffffff'
  } = _ref,
      rest = HomeIcon_objectWithoutProperties(_ref, HomeIcon_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", HomeIcon_objectSpread(HomeIcon_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    className: "css-i6dzq1"
  }, rest), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("polyline", {
      points: "9 22 9 12 15 12 15 22",
      fill: fill
    })]
  }));
}

/* harmony default export */ const icons_HomeIcon = (HomeIcon);
;// CONCATENATED MODULE: ./src/components/icons/UsersIcon.jsx
const UsersIcon_excluded = ["fill"];

function UsersIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function UsersIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UsersIcon_ownKeys(Object(source), !0).forEach(function (key) { UsersIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UsersIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function UsersIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UsersIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = UsersIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function UsersIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function UsersIcon(_ref) {
  let {
    fill = '#ffffff'
  } = _ref,
      rest = UsersIcon_objectWithoutProperties(_ref, UsersIcon_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", UsersIcon_objectSpread(UsersIcon_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    className: "css-i6dzq1"
  }, rest), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })]
  }));
}

/* harmony default export */ const icons_UsersIcon = (UsersIcon);
;// CONCATENATED MODULE: ./src/components/icons/VideosIcon.jsx
const VideosIcon_excluded = (/* unused pure expression or super */ null && (["fill"]));

function VideosIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function VideosIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? VideosIcon_ownKeys(Object(source), !0).forEach(function (key) { VideosIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : VideosIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function VideosIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function VideosIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = VideosIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function VideosIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function VideosIcon(_ref) {
  let {
    fill = '#6C7281'
  } = _ref,
      rest = VideosIcon_objectWithoutProperties(_ref, VideosIcon_excluded);

  return /*#__PURE__*/_jsxs("svg", VideosIcon_objectSpread(VideosIcon_objectSpread({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M4 8H2v12a2 2 0 002 2h12v-2H4V8z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-9 12V6l7 4-7 4z",
      fill: fill
    })]
  }));
}

/* harmony default export */ const icons_VideosIcon = ((/* unused pure expression or super */ null && (VideosIcon)));
;// CONCATENATED MODULE: ./src/components/icons/CollapsIcon.jsx
const CollapsIcon_excluded = ["fill"];

function CollapsIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CollapsIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CollapsIcon_ownKeys(Object(source), !0).forEach(function (key) { CollapsIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CollapsIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CollapsIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CollapsIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CollapsIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CollapsIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function CollapsIcon(_ref) {
  let {
    fill = '#6C7281'
  } = _ref,
      rest = CollapsIcon_objectWithoutProperties(_ref, CollapsIcon_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", CollapsIcon_objectSpread(CollapsIcon_objectSpread({
    width: 16,
    height: 15,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.901 1.768L7.134 0 0 7.134l7.134 7.133L8.9 12.5 3.535 7.134l5.366-5.367z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.384 0L6.25 7.134l7.134 7.133L15.15 12.5 9.785 7.134l5.366-5.367L13.384 0z",
      fill: fill
    })]
  }));
}

/* harmony default export */ const icons_CollapsIcon = (CollapsIcon);
;// CONCATENATED MODULE: ./src/components/icons/Logo.jsx
const Logo_excluded = (/* unused pure expression or super */ null && (["fill"]));

function Logo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Logo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Logo_ownKeys(Object(source), !0).forEach(function (key) { Logo_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Logo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Logo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Logo(_ref) {
  let {
    fill = '#3B81F6'
  } = _ref,
      rest = Logo_objectWithoutProperties(_ref, Logo_excluded);

  return /*#__PURE__*/_jsxs("svg", Logo_objectSpread(Logo_objectSpread({
    width: 40,
    height: 40,
    fill: "none",
    viewBox: "0 0 40 40",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M22.5 32.5h10V35h-10v-2.5zm0-5h15V30h-15v-2.5zm0-5h15V25h-15v-2.5z",
      fill: fill
    }), /*#__PURE__*/_jsx("path", {
      d: "M25.686 14.021L20 2.5l-5.686 11.521L1.6 15.87l9.2 8.968L8.628 37.5l8.872-4.664v-2.825L11.95 32.93l1.315-7.67.222-1.296-.94-.916-5.573-5.434 7.7-1.119 1.3-.189.583-1.179L20 8.15l3.444 6.979.582 1.178 1.3.189 9.318 1.356.356-2.476-9.314-1.354z",
      fill: fill
    })]
  }));
}

/* harmony default export */ const icons_Logo = ((/* unused pure expression or super */ null && (Logo)));
;// CONCATENATED MODULE: ./src/components/icons/WorkorderIcon.jsx
const WorkorderIcon_excluded = ["fill"];

function WorkorderIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function WorkorderIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? WorkorderIcon_ownKeys(Object(source), !0).forEach(function (key) { WorkorderIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : WorkorderIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function WorkorderIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WorkorderIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = WorkorderIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function WorkorderIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function WorkorderIcon(_ref) {
  let {
    fill = '#ffffff'
  } = _ref,
      rest = WorkorderIcon_objectWithoutProperties(_ref, WorkorderIcon_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", WorkorderIcon_objectSpread(WorkorderIcon_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    className: "css-i6dzq1"
  }, rest), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      x: "2",
      y: "7",
      width: "20",
      height: "14",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
      fill: fill
    })]
  }));
}

/* harmony default export */ const icons_WorkorderIcon = (WorkorderIcon);
;// CONCATENATED MODULE: ./src/components/icons/CategoryIcon.jsx
const CategoryIcon_excluded = (/* unused pure expression or super */ null && (["fill"]));

function CategoryIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function CategoryIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? CategoryIcon_ownKeys(Object(source), !0).forEach(function (key) { CategoryIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : CategoryIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function CategoryIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CategoryIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CategoryIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CategoryIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function CategoryIcon(_ref) {
  let {
    fill = '#ffffff'
  } = _ref,
      rest = CategoryIcon_objectWithoutProperties(_ref, CategoryIcon_excluded);

  return /*#__PURE__*/_jsx("svg", CategoryIcon_objectSpread(CategoryIcon_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none"
  }, rest), {}, {
    className: "css-i6dzq1",
    children: /*#__PURE__*/_jsx("path", {
      d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      fill: fill
    })
  }));
}

/* harmony default export */ const icons_CategoryIcon = ((/* unused pure expression or super */ null && (CategoryIcon)));
;// CONCATENATED MODULE: ./src/components/icons/ProcedureIcon.jsx
const ProcedureIcon_excluded = ["fill"];

function ProcedureIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function ProcedureIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ProcedureIcon_ownKeys(Object(source), !0).forEach(function (key) { ProcedureIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ProcedureIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function ProcedureIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ProcedureIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ProcedureIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ProcedureIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function ProcedureIcon(_ref) {
  let {
    fill = '#ffffff'
  } = _ref,
      rest = ProcedureIcon_objectWithoutProperties(_ref, ProcedureIcon_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", ProcedureIcon_objectSpread(ProcedureIcon_objectSpread({
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    stroke: "currentColor",
    strokeWidth: "2",
    fill: "none",
    className: "css-i6dzq1"
  }, rest), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
      fill: fill
    }), /*#__PURE__*/jsx_runtime_.jsx("polyline", {
      points: "14 2 14 8 20 8"
    }), /*#__PURE__*/jsx_runtime_.jsx("line", {
      x1: "16",
      y1: "13",
      x2: "8",
      y2: "13"
    }), /*#__PURE__*/jsx_runtime_.jsx("line", {
      x1: "16",
      y1: "17",
      x2: "8",
      y2: "17"
    }), /*#__PURE__*/jsx_runtime_.jsx("polyline", {
      points: "10 9 9 9 8 9"
    })]
  }));
}

/* harmony default export */ const icons_ProcedureIcon = (ProcedureIcon);
;// CONCATENATED MODULE: ./src/components/icons/index.js










/***/ })

};
;