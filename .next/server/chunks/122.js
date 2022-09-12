"use strict";
exports.id = 122;
exports.ids = [122];
exports.modules = {

/***/ 122:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dr": () => (/* binding */ UserProvider),
/* harmony export */   "jy": () => (/* binding */ useFetchUser)
/* harmony export */ });
/* unused harmony export useUser */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9470);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth__WEBPACK_IMPORTED_MODULE_1__]);
_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable consistent-return */



let userState;
const User = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  user: null,
  loading: false
});
const UserProvider = ({
  value,
  children
}) => {
  const {
    user
  } = value;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!userState && user) {
      userState = user;
    }
  }, [user]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(User.Provider, {
    value: value,
    children: children
  });
};
const useUser = () => useContext(User);
const useFetchUser = () => {
  const {
    0: data,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    user: userState || null,
    loading: userState === undefined
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (userState !== undefined) {
      return;
    }

    let isMounted = true;

    const resolveUser = async () => {
      const user = await (0,_auth__WEBPACK_IMPORTED_MODULE_1__/* .getUserFromLocalCookie */ .BT)();

      if (isMounted) {
        setUser({
          user,
          loading: false
        });
      }
    };

    resolveUser();
    return () => {
      isMounted = false;
    };
  }, []);
  return data;
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;