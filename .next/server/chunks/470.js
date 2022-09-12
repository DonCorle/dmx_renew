"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 3156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fetcher)
/* harmony export */ });
async function fetcher(url, option = {}) {
  let response;

  if (!option) {
    response = await fetch(url);
  } else {
    response = await fetch(url, option);
  }

  const data = await response.json();
  return data;
}

/***/ }),

/***/ 9470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BT": () => (/* binding */ getUserFromLocalCookie),
/* harmony export */   "Ll": () => (/* binding */ unsetToken),
/* harmony export */   "UI": () => (/* binding */ getTokenFromServerCookie),
/* harmony export */   "o4": () => (/* binding */ setToken)
/* harmony export */ });
/* unused harmony exports getTokenFromLocalCookie, getIdFromLocalCookie, getIdFromServerCookie */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable consistent-return */



const setToken = data => {
  if (true) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("id", data.user.id);
  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("username", data.user.username);
  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("jwt", data.jwt);
  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("isLogin", true);
};
const unsetToken = () => {
  if (true) {
    return;
  }

  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("id");
  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("jwt");
  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("username");
  js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("isLogin");
};
const getTokenFromLocalCookie = () => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("jwt");
};
const getUserFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();

  if (jwt) {
    return (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .fetcher */ ._)(`${"http://localhost:1337/api"}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      }
    }).then(data => {
      return data.username;
    }).catch(error => console.error(error));
  }

  return "";
};
const getIdFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();

  if (jwt) {
    return fetcher(`${"http://localhost:1337/api"}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      }
    }).then(data => {
      return data.id;
    });
  }

  return "";
};
const getTokenFromServerCookie = req => {
  if (!req.headers.cookie || "") {
    return undefined;
  }

  const jwtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt="));

  if (!jwtCookie) {
    return undefined;
  }

  const jwt = jwtCookie.split("=")[1];
  return jwt;
};
const getIdFromServerCookie = req => {
  if (!req.headers.cookie || "") {
    return undefined;
  }

  const idCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("id="));

  if (!idCookie) {
    return undefined;
  }

  const id = idCookie.split("=")[1];
  return id;
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;