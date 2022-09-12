"use strict";
exports.id = 225;
exports.ids = [225,472];
exports.modules = {

/***/ 5225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./src/pages/style.js
var style = __webpack_require__(8293);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7801b080.png","height":70,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGP8++9fNhMjg+DlxwzHA3YyGJtxMzD8+s/wi4GB4R/Df4YXIAU+QAVsVx4zPPDawSBlzcPAAlTwFKhAGqjgEwB7FBmDzC6nUQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/people01.png
/* harmony default export */ const people01 = ({"src":"/_next/static/media/people01.85d6f24e.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATFkXwDPq6Ep5tzqmMjHxjnn8dQAP0cyx/T7/mi2zK/XAVBkaikOBfLFNDU9EfjIyQDp7+8A5yrmAFJMWO8OEgE7AXWVo8HSv6U+IAD3+mFLVAbd4eMAm5yN+lOVeAYBGAXCAXueq/rLs5sFRzIoACX9BQDk6ugAwN7dADNaKgANJ//7AXaZpfrJppAFGAoDACkN/QCuwdYAIywtAElsXQAaJA77AXCRn8Gzm5E+6Or4+pOGgAaZkYcAydPR+ktUWgZ2eG3CAVVueyq9rqnE7uTcEZu41QC0pJoAsaSRAA0QGe/z8Oc7AUBVYAD77espxb61mKGzyDkWGRwAVkM2x/Px5mkAAADWKL98pQ0mlKsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/people02.png
/* harmony default export */ const people02 = ({"src":"/_next/static/media/people02.9c744388.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+Adv4/wAAAAAo//0AmObb1zoJDA4AFR0bxvn5/2kBAgHXAdPs9igJDQnF18PAEqRoQQALISoAVIGjACczMu/18/c7Adbx/L8DAwNAwZB1+iMNBgb9/gIA2wga+khhaQb6+f3CAd77//kA/AAGzZaBAAP79wAA9/YAIFRqABIsKAD48/77Ab3T3PnCwcEGE97BACkaHAD8/QAAwfMHAERYXgAeISD7AQAAAL8AAABAaUQe+kk2QAba8AIAdJag+hMADQaUu7jCAVldXyino6HFh4GAEi0lIwBbaXkADxIPAAMCAu/f3dM7AQAAAAAAAAAoq62ymAkKCjpMSUQAJyctx/L1+Gjn5ObXnfdq2x0qig8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/people03.png
/* harmony default export */ const people03 = ({"src":"/_next/static/media/people03.7f5a57de.png","height":96,"width":96,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAgElEQVR42gWAKwoCURSG/+3cARdh1OJCRtyE3WQQk4hBEAWNtsOMRcRkmglWQbjJ1z2i3yDUDcHk8oE9A1IZ2rFDTg+xigRV1mKWvhwYppy36e599hRsGDHl5/r4kTNXKhbcwIXVbNOLC+sEfxNZHeecWFJCfAShIuxs7BOPRoYaJo5gIgihfWoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/airbnb.png
/* harmony default export */ const airbnb = ({"src":"/_next/static/media/airbnb.5bed46d9.png","height":120,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOElEQVR4nGN0dHAzZ2Bg4GNgZDjB8J/BBMjmBeKvQPwHiHlBCoKADCYgvgnEWkAMkmQB4r9AzAsARK0JN4J1mhQAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/bill.png
/* harmony default export */ const bill = ({"src":"/_next/static/media/bill.6b97dc06.png","height":1038,"width":1120,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA0ElEQVR42mMozC9lWb5yPSsDEMyYvXBid9/kA8FB4cckxdTCGNBBW1PnmbzUnP8m2sb/FeS1asGCcWlZc9LSc+bG+YfN8q2sf+41ecZ/265J/7WTs2rACiq8Yv/npOf+D/QL+W/nFfDfNTnriltLj2dkUbkKWMGMzv4/yQlpfyRE1H8Auf+BeA+KvbUTOv9FRcf/DfQP+Tth6qT/K5avfPLjx8+QL1++xH///sOUQU/LzBiozrCmvs7m3Zd3Ld+/f+959+79lPfv38/98OFDNADFKF1aq+80hgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/binance.png
/* harmony default export */ const binance = ({"src":"/_next/static/media/binance.6fce11aa.png","height":78,"width":385,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANklEQVR42mNwdHCLd3R0cwHSgSDs5ODmCWV7A3EYA1AyDoidHB3cQYK+QBwMxEFA7OXk4BYMAD95EXe/N3oFAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/assets/card.png
/* harmony default export */ const assets_card = ({"src":"/_next/static/media/card.f8322197.png","height":899,"width":1026,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA2UlEQVR42mOAgf///7PUX7zGn1JSlZ1aWFbhYO2cbahhkM5gZGC5VdnV+6isusFSBtsgGa+g0C++fsH/TQ2t/6ua2v9n8PUJ+h8cGvXfydnjP4NXmKaqhtEzIU7J//wqWj/45LV/MhiZ2q6wdvLYpGlq0xszfa6QgYbRK+XwgP+yJub/pcSV/jOAwc4DvEBSG4hNgLiWIdCvVN87LEySgdOHAQSSkzJzu3sm/O/u6v3d0tL2v7CwdD4DMigpq01funz1/82bN3/ftHnz/8mTJ69gAILJ06ZzAAABTU1Gx1IK1wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/coinbase.png
/* harmony default export */ const coinbase = ({"src":"/_next/static/media/coinbase.f1f63ef2.png","height":83,"width":379,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOElEQVR4nGN0dHDTY2BgYGVkYOD/D8RA9m8gvg/E7EDMAlJQDGQwMzIwcv1n+P8FyOaB4j9AzAYAL4EJVTLZ0F4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/dropbox.png
/* harmony default export */ const dropbox = ({"src":"/_next/static/media/dropbox.cf29f19b.png","height":76,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOklEQVR4nBXKIQ4AEBhA4d8RRMVZKE4mOqEi2gRFMJvhCd/2wlPehSQiDRkHAwYd+w+RqCjQsJhYuA++lw09XceY2AAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/robot.png
/* harmony default export */ const robot = ({"src":"/_next/static/media/robot.c35bf057.png","height":1348,"width":1338,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mMIOHfLt/fZ62MMQNDaO8+grnGqLYi9eetBRgYQMDp2gzt47ymHqvY57dMnL/u2eNnW/03d84pAcvOX72AGK8pqmhKRt2Hf/57dJ/7v2HH4yOVr1/2WrF/LwgADS7paxdsWrFvTNGfD/97JK/9P7JlbCxKvmbGJCazAPSLTJzS25kdiVt8318im1upLtwr+///PBDeh5f9/gZbpa0JW7D8X8P//f5nC7Ydj5t57KQFXkFDZp5tV03t+ytb9/+cevfI/LLbsdkrezK8RcbPvwBVZ+cTbqOgHFen5VjkAuay2WtmBbp7VxwCSPGvBWrtBCgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/assets/vision.png
/* harmony default export */ const vision = ({"src":"/_next/static/media/vision.d017af53.png","height":486,"width":485,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA40lEQVR42mOAAQnrJBYYW94yvkzFOeGBrKHTXwYnC05GW5cgdpCEOQODlK5f2kl1z4r/In5V/2UCMp8wwIFmiyyDYsQrRd/M/8pZy745FS/675nX2sDgGhQqHOVr1x4eEvYiIjzqf3dDwffC2ub/0b0rrv3//5+VIcDGcnuyr/f/xry0f83p4b+WFXn+n1gU/sOYgUELZrhgT1zL7Kbs/v+d+U3/tq7c8H/v3rOuIIlFS9awMoBARVx5Y0thx9oVCzd+WLRo00sGNMA4sWOJMFhhYVNPkGNYGojdVdvKxMDAwAAApe1U6Rg+aSUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/building-facility.png
/* harmony default export */ const building_facility = ({"src":"/_next/static/media/building-facility.96575ac0.png","height":438,"width":533,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AX57bwAsMTyh4NzXSPMPKEpUaFXftZSbKQL7+8B4AgUhAY2UmwDu6OKqSD46VeQGIPb0BBEB9PT3vvzu4REEEyeNAbTF0JLw6ugd//7/Rv8SKAoG/v0AFA8DAO71Bff18+8JAZagqP/08O4A4uXjACw6SwAH6sv/EAXXAPwVVgEPCQL9AYGLk//x7OoA6u/v/xsZGNH/3rowIB4z/QYgLAESDAIBAZ6wujz7+fgSISgp3I5kUGxNSD9pO0RLAKWorQD38eMAAZOkrgD9/f0A7+vpAK6nnzJfKQQtHyci+JnB5gUGBg3nhHltQxw4NMkAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/assets/index.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var quotes = function quotes(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m11.798 27.6 7.2-27.6h-6.6l-12 27.6h11.4Zm24 0 7.2-27.6h-6.6l-12 27.6h11.4Z",
      fill: "url(#a)"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "a",
        x1: "28.861",
        y1: "-24.797",
        x2: "41.794",
        y2: "24.147",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".009",
          stopColor: "#DEF9FA"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".172",
          stopColor: "#BEF3F5"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".42",
          stopColor: "#9DEDF0"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".551",
          stopColor: "#7DE7EB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".715",
          stopColor: "#5CE1E6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#33BBCF"
        })]
      })
    })]
  }));
};

quotes.defaultProps = {
  width: "43",
  height: "28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var send = function send(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M31.497.931a3.093 3.093 0 0 0-3.09-.805L2.653 7.616C1.488 7.938.662 8.867.439 10.048c-.227 1.201.567 2.727 1.604 3.365l8.053 4.949c.826.507 1.892.38 2.575-.31l9.222-9.278a1.174 1.174 0 0 1 1.696 0 1.22 1.22 0 0 1 0 1.707l-9.237 9.28a2.118 2.118 0 0 0-.309 2.59l4.92 8.134A3.056 3.056 0 0 0 21.622 32c.128 0 .272 0 .4-.016 1.248-.161 2.24-1.015 2.609-2.223L32.265 4.04A3.143 3.143 0 0 0 31.497.93",
      fill: "#00F6FF"
    })
  }));
};

send.defaultProps = {
  width: "33",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var shield = function shield(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.565 31.862c.177.092.375.14.573.138a1.25 1.25 0 0 0 .574-.144l5.708-3.052c1.62-.863 2.887-1.828 3.876-2.951A13.192 13.192 0 0 0 27.6 17.06l-.068-10.625c-.006-1.224-.81-2.316-1.999-2.713L14.913.16a3.022 3.022 0 0 0-1.968.011L2.365 3.86C1.183 4.274.394 5.373.4 6.598l.068 10.617a13.197 13.197 0 0 0 3.42 8.759c1 1.107 2.279 2.058 3.915 2.907l5.762 2.98Zm-1.511-12.488c.238.23.547.342.857.34.309-.002.617-.118.852-.35L20 13.212a1.155 1.155 0 0 0-.01-1.663 1.231 1.231 0 0 0-1.708.01l-5.39 5.312-2.207-2.121a1.231 1.231 0 0 0-1.709.01 1.154 1.154 0 0 0 .011 1.664l3.066 2.95Z",
      fill: "#00F6FF"
    })
  }));
};

shield.defaultProps = {
  width: "28",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var star = function star(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M25.47 19.712a1.761 1.761 0 0 0-.51 1.552l1.422 7.872a1.728 1.728 0 0 1-.72 1.728c-.548.4-1.276.448-1.872.128l-7.087-3.696a1.81 1.81 0 0 0-.8-.21h-.433c-.15.023-.298.071-.432.145L7.95 30.944c-.35.176-.748.239-1.136.176a1.778 1.778 0 0 1-1.424-2.033l1.424-7.872a1.79 1.79 0 0 0-.51-1.567l-5.778-5.6a1.727 1.727 0 0 1-.43-1.808 1.797 1.797 0 0 1 1.422-1.2L9.47 9.887a1.78 1.78 0 0 0 1.408-.975l3.504-7.184c.083-.16.19-.307.32-.432l.144-.112c.075-.083.161-.152.257-.208l.175-.064L15.55.8h.673a1.79 1.79 0 0 1 1.408.96l3.55 7.152c.257.523.754.887 1.329.975l7.952 1.153c.672.096 1.233.56 1.456 1.2.21.642.028 1.346-.464 1.808l-5.984 5.664Z",
      fill: "#00F6FF"
    })
  }));
};

star.defaultProps = {
  width: "33",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var menu = function menu(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M9 2h10a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2Zm10 8H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM1 7h18a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2Z"
    })
  }));
};

menu.defaultProps = {
  width: "20",
  height: "12",
  fill: "#FFF",
  xmlns: "http://www.w3.org/2000/svg"
};

var assets_close = function close(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m10.41 9 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L9 7.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42L7.59 9l-6.3 6.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L9 10.41l6.29 6.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L10.41 9Z"
    })
  }));
};

assets_close.defaultProps = {
  width: "18",
  height: "18",
  fill: "#FFF",
  xmlns: "http://www.w3.org/2000/svg"
};

var google = function google(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M138.829 43.037H5.339c-2.936 0-5.339-2.42-5.339-5.38V5.38C0 2.42 2.403 0 5.34 0h133.489c2.937 0 5.34 2.42 5.34 5.38v32.278c0 2.959-2.403 5.38-5.34 5.38",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M50.637 11.021c0 .902-.265 1.62-.796 2.155-.602.637-1.388.955-2.354.955-.925 0-1.71-.322-2.358-.969-.647-.646-.97-1.447-.97-2.403s.323-1.756.97-2.403c.647-.646 1.433-.969 2.358-.969.46 0 .898.09 1.316.27.417.181.751.421 1.002.722l-.564.568c-.424-.511-1.008-.766-1.754-.766-.674 0-1.257.239-1.75.717-.492.478-.738 1.098-.738 1.861 0 .764.246 1.384.738 1.862a2.427 2.427 0 0 0 1.75.717c.716 0 1.312-.24 1.79-.72.31-.314.49-.75.537-1.309h-2.327v-.775h3.105c.03.169.045.33.045.487",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M50.636 11.021h-.107c0 .881-.256 1.565-.764 2.079h-.001v.002c-.584.614-1.335.92-2.278.922-.9-.002-1.653-.31-2.282-.938-.628-.628-.938-1.395-.94-2.327.002-.931.312-1.698.94-2.326.629-.627 1.382-.937 2.282-.939.445 0 .87.088 1.274.262.404.176.724.406.962.692l.082-.07-.076-.075-.563.568.075.076.083-.07c-.444-.535-1.067-.805-1.837-.804-.7 0-1.314.251-1.823.747-.514.498-.773 1.153-.772 1.94 0 .786.258 1.44.772 1.938a2.533 2.533 0 0 0 1.823.747c.74.002 1.37-.251 1.865-.752.332-.335.52-.798.569-1.374l.01-.117h-2.337v-.56h2.998v-.108l-.105.019c.03.163.043.318.043.468h.214c0-.163-.015-.331-.047-.506l-.015-.089H47.38v.991h2.433v-.107l-.106-.01c-.047.542-.218.95-.507 1.241-.458.46-1.022.688-1.714.69-.65-.002-1.2-.227-1.675-.687-.47-.459-.705-1.044-.706-1.785.001-.74.235-1.326.706-1.784a2.317 2.317 0 0 1 1.675-.687c.723.002 1.268.243 1.673.728l.075.09.645-.651.07-.07-.064-.075a2.744 2.744 0 0 0-1.041-.751 3.39 3.39 0 0 0-1.358-.28c-.95 0-1.768.336-2.433 1.001-.667.664-1.003 1.499-1.002 2.48-.001.98.335 1.815 1.002 2.479.665.665 1.484 1 2.433 1 .989 0 1.81-.33 2.432-.989l-.078-.074.076.076c.553-.557.828-1.31.827-2.23h-.107Zm4.922-2.696H52.64v2.046h2.632v.776H52.64v2.047h2.918v.793h-3.74V7.532h3.74v.793",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M55.56 8.324v-.107h-3.025v2.262h2.631v.56h-2.631v2.263h2.918v.577h-3.527V7.64h3.527v.685h.106v-.107.107h.107v-.9h-3.954v6.67h3.954v-1.008h-2.918v-1.831h2.632v-.991h-2.632V8.432h2.918v-.108h-.106Zm3.471 5.663h-.823V8.324h-1.79v-.793h4.403v.793h-1.79v5.663",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M59.032 13.987v-.108h-.717V8.217h-1.79v-.578h4.19v.578h-1.79v5.77h.107v-.108.108h.107V8.432h1.79V7.424H56.31v1.008h1.79v5.663h1.038v-.108h-.107Zm4.975 0V7.531h.823v6.456h-.823",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M64.01 13.987h.107V7.64h.61v6.24h-.716v.108h.106-.106v.108h.93V7.424h-1.037v6.67h.107v-.107Zm4.476 0h-.824V8.324h-1.79v-.793h4.403v.793h-1.79v5.663",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M68.484 13.987v-.107h-.717V8.217h-1.79V7.64h4.19v.578h-1.79v5.77h.107v-.107.107h.107V8.432h1.79V7.424h-4.617v1.008h1.79v5.663h1.037v-.108h-.107Zm6.035-1.374a2.344 2.344 0 0 0 1.74.725c.687 0 1.268-.242 1.741-.725.475-.484.713-1.103.713-1.854 0-.75-.238-1.369-.713-1.853a2.342 2.342 0 0 0-1.74-.725c-.687 0-1.267.242-1.741.725-.474.484-.711 1.102-.711 1.853 0 .751.237 1.37.71 1.854Zm4.09.54c-.63.653-1.413.978-2.35.978-.936 0-1.72-.325-2.348-.978-.63-.652-.944-1.45-.944-2.394 0-.943.314-1.741.944-2.393.629-.653 1.412-.979 2.349-.979.93 0 1.712.328 2.345.983.632.655.948 1.452.948 2.39 0 .943-.315 1.741-.944 2.393Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m74.516 12.612-.076.076a2.452 2.452 0 0 0 1.816.757 2.45 2.45 0 0 0 1.817-.757c.495-.504.744-1.155.743-1.929 0-.773-.248-1.425-.743-1.928a2.45 2.45 0 0 0-1.817-.758 2.451 2.451 0 0 0-1.816.758c-.494.503-.744 1.155-.742 1.928-.002.774.248 1.425.742 1.93l.076-.077.075-.075c-.453-.465-.68-1.049-.68-1.778 0-.728.227-1.313.68-1.777a2.237 2.237 0 0 1 1.665-.694c.662.002 1.209.23 1.665.694.454.464.68 1.049.681 1.777 0 .729-.227 1.313-.681 1.778a2.235 2.235 0 0 1-1.665.693 2.237 2.237 0 0 1-1.665-.693l-.075.075Zm4.09.54-.077-.074c-.612.632-1.36.945-2.273.946-.912-.002-1.66-.314-2.272-.946l-.003-.003.003.003c-.611-.634-.913-1.4-.913-2.319 0-.92.302-1.684.913-2.318.611-.633 1.36-.945 2.272-.946.906 0 1.653.315 2.27.95.612.637.916 1.401.917 2.314-.001.92-.304 1.685-.914 2.32l.077.074.077.075c.647-.67.974-1.501.974-2.469 0-.962-.328-1.79-.979-2.464-.65-.675-1.466-1.017-2.422-1.016-.96 0-1.778.34-2.425 1.012-.649.67-.975 1.5-.974 2.468 0 .968.325 1.799.974 2.469l.003.003-.003-.003c.647.672 1.464 1.012 2.425 1.01.961.002 1.779-.338 2.427-1.01l-.077-.075Zm2.1.835V7.531h1.001l3.114 5.022h.036l-.036-1.244V7.531h.824v6.456h-.86l-3.257-5.265h-.036l.036 1.244v4.021h-.823",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M80.71 13.987h.107V7.64h.836l3.114 5.022h.204l-.038-1.353V7.639h.61v6.24h-.693l-3.258-5.265h-.204l.038 1.354v3.911h-.716v.108h.107-.107v.108h.93v-4.13l-.036-1.246-.107.003v.107h.036v-.107l-.09.057 3.288 5.316h1.026V7.424h-1.038v3.887l.036 1.245.107-.003v-.107h-.036v.107l.09-.057-3.145-5.072h-1.168v6.67h.107v-.107Zm33.491 18.29h1.992v-13.45h-1.992v13.45Zm17.948-8.604-2.284 5.831h-.069l-2.37-5.831h-2.147l3.555 8.15-2.027 4.534h2.08l5.478-12.684h-2.216Zm-11.301 7.077c-.653 0-1.563-.328-1.563-1.142 0-1.038 1.134-1.436 2.112-1.436.877 0 1.288.19 1.821.45-.155 1.246-1.219 2.128-2.37 2.128Zm.241-7.372c-1.443 0-2.937.64-3.555 2.06l1.768.744c.378-.744 1.082-.987 1.821-.987 1.03 0 2.078.623 2.095 1.731v.138c-.361-.207-1.133-.519-2.078-.519-1.906 0-3.848 1.055-3.848 3.028 0 1.8 1.564 2.96 3.315 2.96 1.34 0 2.078-.606 2.543-1.315h.068v1.038h1.923v-5.157c0-2.388-1.768-3.72-4.052-3.72Zm-12.316 1.932h-2.834V20.7h2.834c1.49 0 2.336 1.242 2.336 2.305 0 1.042-.846 2.305-2.336 2.305Zm-.051-6.482h-4.774v13.45h1.991v-5.096h2.783c2.209 0 4.38-1.611 4.38-4.177s-2.171-4.177-4.38-4.177ZM82.685 30.753c-1.376 0-2.529-1.162-2.529-2.756 0-1.612 1.153-2.791 2.53-2.791 1.358 0 2.425 1.179 2.425 2.79 0 1.596-1.067 2.757-2.426 2.757Zm2.288-6.327h-.068c-.448-.537-1.308-1.023-2.392-1.023-2.27 0-4.353 2.01-4.353 4.594 0 2.565 2.082 4.558 4.353 4.558 1.084 0 1.944-.485 2.392-1.04h.069v.66c0 1.75-.93 2.686-2.426 2.686-1.222 0-1.979-.884-2.289-1.63l-1.737.728c.499 1.214 1.824 2.705 4.026 2.705 2.34 0 4.318-1.387 4.318-4.767V23.68h-1.892v.745Zm3.27 7.852h1.995V18.827h-1.996v13.45Zm4.937-4.437c-.052-1.769 1.36-2.67 2.374-2.67.792 0 1.463.399 1.686.971l-4.06 1.699Zm6.194-1.526c-.378-1.023-1.532-2.912-3.889-2.912-2.34 0-4.283 1.855-4.283 4.576 0 2.566 1.926 4.576 4.507 4.576 2.082 0 3.287-1.282 3.785-2.028l-1.548-1.04c-.516.763-1.222 1.266-2.237 1.266-1.015 0-1.737-.468-2.202-1.387l6.073-2.53-.206-.52Zm-48.386-1.508v1.942H55.6c-.137 1.092-.499 1.889-1.05 2.444-.67.676-1.72 1.421-3.56 1.421-2.84 0-5.059-2.305-5.059-5.165s2.22-5.166 5.058-5.166c1.532 0 2.65.607 3.476 1.387l1.359-1.37c-1.153-1.109-2.684-1.958-4.835-1.958-3.888 0-7.157 3.19-7.157 7.107 0 3.917 3.269 7.106 7.157 7.106 2.1 0 3.682-.693 4.92-1.993 1.274-1.283 1.67-3.085 1.67-4.541 0-.451-.035-.867-.104-1.214h-6.486Zm11.832 5.946c-1.377 0-2.564-1.144-2.564-2.774 0-1.646 1.187-2.773 2.564-2.773 1.376 0 2.563 1.127 2.563 2.773 0 1.63-1.187 2.774-2.563 2.774Zm0-7.35c-2.513 0-4.56 1.924-4.56 4.576 0 2.635 2.047 4.576 4.56 4.576 2.511 0 4.559-1.941 4.559-4.576 0-2.652-2.048-4.576-4.56-4.576Zm9.945 7.35c-1.376 0-2.563-1.144-2.563-2.774 0-1.646 1.187-2.773 2.563-2.773 1.377 0 2.564 1.127 2.564 2.773 0 1.63-1.187 2.774-2.564 2.774Zm0-7.35c-2.512 0-4.559 1.924-4.559 4.576 0 2.635 2.047 4.576 4.56 4.576 2.511 0 4.559-1.941 4.559-4.576 0-2.652-2.048-4.576-4.56-4.576Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.441 11.268c-.276.25-.441.667-.441 1.22v-.124 18.268-.12c0 .511.141.906.38 1.16l.062.06c.194.175.442.268.727.268.278 0 .591-.089.922-.277l11.944-6.811 4.102-2.34c.522-.297.814-.68.863-1.07V21.5c-.049-.392-.341-.774-.862-1.072l-4.104-2.34-11.943-6.81c-.331-.189-.644-.278-.924-.278-.284 0-.532.093-.726.268Z",
      fill: "#00C1FF"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m13.415 32-.057-.06c-.225-.261-.358-.666-.358-1.191v.123V12.13v.124c0-.568.155-.996.415-1.253L23 21.5 13.415 32Z",
      fill: "url(#a)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M26.657 25 23 21.5l3.657-3.5 4.415 2.4c.56.305.875.698.928 1.1v.001c-.053.4-.367.794-.928 1.098L26.657 25",
      fill: "url(#b)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.749 32a1.14 1.14 0 0 1-.749-.256L23.5 22l3.5 3.25-12.302 6.486c-.34.18-.663.264-.95.264Z",
      fill: "url(#c)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M23.5 22 13 11.28c.2-.183.455-.28.748-.28.288 0 .61.094.951.291L27 18.426 23.5 22",
      fill: "url(#d)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.804 32c-.29 0-.544-.09-.742-.26l-.003-.003-.054-.05L13 31.68l.062-.06c.198.171.451.262.742.262.283 0 .603-.087.94-.27L26.922 25l.078.075-.079.043-12.177 6.613c-.307.166-.6.253-.863.267a1.631 1.631 0 0 1-.077.002",
      fill: "url(#e)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M27.077 25 27 24.934l4.131-2.013c.525-.255.82-.585.869-.921a.777.777 0 0 1-.096.366c-.128.242-.386.47-.773.659L27.078 25",
      fill: "url(#f)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M32 22c-.05-.449-.344-.888-.868-1.229L27 18.088l.077-.088 4.055 2.633c.578.376.868.872.868 1.367",
      fill: "url(#g)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m26.922 18-12.178-6.613c-.338-.183-.658-.27-.942-.27-.29 0-.543.09-.74.26L13 11.32l.06-.057.002-.001c.196-.17.446-.26.734-.261h.006c.284 0 .604.087.942.27L27 17.925l-.078.075",
      fill: "url(#h)"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "a",
        x1: "19.126",
        y1: "11.931",
        x2: "10.126",
        y2: "20.173",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#00A0FF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".007",
          stopColor: "#00A1FF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".26",
          stopColor: "#00BEFF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".512",
          stopColor: "#00D2FF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".76",
          stopColor: "#00DFFF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#00E3FF"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "b",
        x1: "32.683",
        y1: "21.439",
        x2: "11.258",
        y2: "21.439",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#FFE000"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".409",
          stopColor: "#FFBD00"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".775",
          stopColor: "orange"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#FF9C00"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "c",
        x1: "25.142",
        y1: "25.089",
        x2: "10.969",
        y2: "40.298",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#FF3A44"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#C31162"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "d",
        x1: "10.294",
        y1: "9.692",
        x2: "17.257",
        y2: "16.495",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#32A071"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".069",
          stopColor: "#2DA771"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".476",
          stopColor: "#15CF74"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".801",
          stopColor: "#06E775"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#00F076"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "e",
        x1: "25.075",
        y1: "27.135",
        x2: "13.487",
        y2: "39.297",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#CC2E36"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#9C0E4E"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "f",
        x1: "32.639",
        y1: "21.999",
        x2: "12.589",
        y2: "21.999",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#E0C500"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".409",
          stopColor: "#E0A600"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".775",
          stopColor: "#E09100"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#E08900"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "g",
        x1: "32.639",
        y1: "22.001",
        x2: "12.59",
        y2: "22.001",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#FFE840"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".409",
          stopColor: "#FFCE40"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".775",
          stopColor: "#FFBC40"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#FFB540"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "h",
        x1: "10.367",
        y1: "12.006",
        x2: "15.541",
        y2: "17.437",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#65B895"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".069",
          stopColor: "#62BD95"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".476",
          stopColor: "#50DB97"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".801",
          stopColor: "#44ED98"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#40F498"
        })]
      })]
    })]
  }));
};

google.defaultProps = {
  width: "145",
  height: "44",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var apple = function apple(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.274 42.046c-.332 0-.657-.005-.988-.012a13.774 13.774 0 0 1-2.042-.18 6.401 6.401 0 0 1-1.81-.602 5.91 5.91 0 0 1-1.527-1.117A5.847 5.847 0 0 1 .79 38.6a6.315 6.315 0 0 1-.593-1.822 13.723 13.723 0 0 1-.182-2.06C.01 34.484 0 33.712 0 33.712V8.322s.01-.76.016-.984c.008-.69.069-1.377.18-2.058a6.353 6.353 0 0 1 .595-1.827c.285-.569.66-1.088 1.11-1.536A6.084 6.084 0 0 1 5.238.194a13.675 13.675 0 0 1 2.05-.18L8.275 0h112.306l.998.014c.68.008 1.359.068 2.031.179.635.108 1.25.311 1.826.602a6.13 6.13 0 0 1 2.639 2.66c.284.571.482 1.182.585 1.813.113.686.176 1.379.189 2.074.004.311.004.646.004.979.009.412.009.804.009 1.2v23.005c0 .4 0 .789-.009 1.182 0 .357 0 .685-.005 1.022a14.052 14.052 0 0 1-.186 2.037 6.311 6.311 0 0 1-.591 1.836 6.024 6.024 0 0 1-1.109 1.523 5.922 5.922 0 0 1-1.53 1.124 6.377 6.377 0 0 1-1.822.605c-.676.11-1.359.17-2.043.179-.327.008-.654.011-.981.012l-1.184.002-111.128-.002Z",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M26.116 21.353a5.466 5.466 0 0 1 .704-2.615 5.427 5.427 0 0 1 1.871-1.949 5.547 5.547 0 0 0-1.902-1.704 5.511 5.511 0 0 0-2.46-.667c-1.835-.194-3.614 1.104-4.549 1.104-.953 0-2.393-1.085-3.943-1.053A5.783 5.783 0 0 0 13 15.32a5.828 5.828 0 0 0-2.051 2.147c-2.114 3.681-.537 9.09 1.488 12.066 1.013 1.457 2.196 3.084 3.745 3.026 1.516-.063 2.082-.972 3.912-.972 1.813 0 2.344.972 3.924.936 1.627-.027 2.651-1.464 3.629-2.934a12.078 12.078 0 0 0 1.659-3.4 5.233 5.233 0 0 1-2.319-1.935 5.279 5.279 0 0 1-.871-2.9Zm-2.985-8.892a5.377 5.377 0 0 0 1.218-3.837 5.407 5.407 0 0 0-3.506 1.824 5.102 5.102 0 0 0-1.25 3.695 4.456 4.456 0 0 0 1.962-.432 4.483 4.483 0 0 0 1.576-1.25Zm22.145 16.41h-5.172l-1.242 3.69H36.67l4.9-13.65h2.276l4.9 13.65h-2.228l-1.242-3.69ZM40.64 27.17h4.1l-2.02-5.988h-.057l-2.023 5.988Zm18.688.416c0 3.093-1.646 5.08-4.129 5.08a3.339 3.339 0 0 1-1.805-.42 3.365 3.365 0 0 1-1.308-1.321h-.047v4.929h-2.03V22.608h1.965v1.656h.037a3.52 3.52 0 0 1 1.334-1.318 3.494 3.494 0 0 1 1.817-.442c2.51 0 4.166 1.997 4.166 5.081Zm-2.087 0c0-2.015-1.035-3.34-2.615-3.34-1.552 0-2.595 1.353-2.595 3.34 0 2.005 1.043 3.348 2.595 3.348 1.58 0 2.615-1.315 2.615-3.348Zm12.977 0c0 3.093-1.646 5.08-4.13 5.08a3.338 3.338 0 0 1-1.805-.421 3.364 3.364 0 0 1-1.307-1.32h-.047v4.929h-2.031V22.608h1.966v1.656h.037a3.52 3.52 0 0 1 1.334-1.318 3.494 3.494 0 0 1 1.816-.442c2.511 0 4.167 1.997 4.167 5.081Zm-2.088 0c0-2.015-1.035-3.34-2.614-3.34-1.552 0-2.596 1.353-2.596 3.34 0 2.005 1.044 3.348 2.596 3.348 1.58 0 2.614-1.315 2.614-3.348Zm9.285 1.172c.15 1.354 1.458 2.243 3.244 2.243 1.712 0 2.943-.89 2.943-2.11 0-1.06-.742-1.694-2.501-2.128l-1.759-.427c-2.492-.605-3.649-1.777-3.649-3.68 0-2.355 2.04-3.972 4.938-3.972 2.868 0 4.834 1.617 4.9 3.973h-2.05c-.123-1.363-1.243-2.185-2.879-2.185-1.635 0-2.755.832-2.755 2.043 0 .965.715 1.533 2.464 1.968l1.495.369c2.784.662 3.941 1.787 3.941 3.784 0 2.554-2.022 4.153-5.239 4.153-3.009 0-5.04-1.562-5.172-4.03h2.079Zm12.715-8.504v2.355h1.882v1.618h-1.882v5.487c0 .852.377 1.25 1.204 1.25.224-.005.447-.02.668-.048v1.608a5.55 5.55 0 0 1-1.128.094c-2.003 0-2.784-.756-2.784-2.686v-5.705H86.65v-1.618h1.439v-2.355h2.04Zm2.971 7.332c0-3.131 1.834-5.099 4.693-5.099 2.869 0 4.693 1.968 4.693 5.1 0 3.139-1.815 5.098-4.693 5.098-2.877 0-4.693-1.96-4.693-5.099Zm7.317 0c0-2.148-.978-3.416-2.624-3.416-1.646 0-2.623 1.278-2.623 3.416 0 2.157.977 3.415 2.623 3.415 1.645 0 2.624-1.258 2.624-3.415Zm3.744-4.977h1.937v1.694h.047c.131-.529.439-.996.872-1.324a2.353 2.353 0 0 1 1.508-.474c.234 0 .467.025.695.076v1.911a2.818 2.818 0 0 0-.912-.123 2.034 2.034 0 0 0-1.582.655 2.057 2.057 0 0 0-.534 1.635v5.903h-2.031v-9.953Zm14.423 7.03c-.273 1.806-2.022 3.046-4.26 3.046-2.879 0-4.665-1.94-4.665-5.052 0-3.121 1.796-5.146 4.579-5.146 2.738 0 4.459 1.892 4.459 4.909v.7h-6.988v.123a2.6 2.6 0 0 0 1.594 2.63c.338.138.702.203 1.068.19.479.045.961-.067 1.373-.32a2.25 2.25 0 0 0 .911-1.08h1.929Zm-6.865-2.97h4.946a2.4 2.4 0 0 0-1.47-2.347 2.367 2.367 0 0 0-.957-.18 2.488 2.488 0 0 0-1.783.735 2.517 2.517 0 0 0-.736 1.791ZM40.385 8.635a2.869 2.869 0 0 1 2.301.899 2.904 2.904 0 0 1 .767 2.36c0 2.095-1.126 3.3-3.068 3.3H38.03v-6.56h2.355Zm-1.343 5.631h1.23a2.039 2.039 0 0 0 1.633-.665 2.066 2.066 0 0 0 .517-1.694 2.078 2.078 0 0 0-.525-1.683 2.056 2.056 0 0 0-1.625-.662h-1.23v4.704Zm5.555-1.55a2.356 2.356 0 0 1 .596-1.8 2.33 2.33 0 0 1 1.725-.768 2.32 2.32 0 0 1 1.725.768 2.346 2.346 0 0 1 .595 1.8 2.358 2.358 0 0 1-.593 1.804 2.332 2.332 0 0 1-1.727.77 2.321 2.321 0 0 1-1.727-.77 2.347 2.347 0 0 1-.594-1.804Zm3.642 0c0-1.072-.479-1.7-1.32-1.7-.844 0-1.319.628-1.319 1.7 0 1.082.475 1.705 1.32 1.705.84 0 1.32-.627 1.32-1.705Zm7.169 2.478H54.4l-1.017-3.646h-.077l-1.012 3.646h-.998l-1.356-4.95h.985l.881 3.777h.073l1.011-3.777h.932l1.012 3.777h.076l.878-3.777h.97l-1.35 4.95Zm2.492-4.95h.934v.786h.073a1.466 1.466 0 0 1 1.468-.882 1.591 1.591 0 0 1 1.292.509 1.613 1.613 0 0 1 .412 1.332v3.204h-.971v-2.959c0-.795-.344-1.19-1.062-1.19a1.124 1.124 0 0 0-1.122.771 1.14 1.14 0 0 0-.053.483v2.896H57.9v-4.95Zm5.726-1.933h.971v6.883h-.97V8.312Zm2.321 4.405a2.356 2.356 0 0 1 .596-1.8 2.333 2.333 0 0 1 1.725-.768 2.32 2.32 0 0 1 1.726.768 2.35 2.35 0 0 1 .595 1.8 2.36 2.36 0 0 1-.594 1.804 2.333 2.333 0 0 1-1.727.769 2.32 2.32 0 0 1-1.727-.77 2.35 2.35 0 0 1-.594-1.803Zm3.643 0c0-1.072-.48-1.7-1.32-1.7-.845 0-1.32.628-1.32 1.7 0 1.082.475 1.705 1.32 1.705.84 0 1.32-.627 1.32-1.705Zm2.022 1.078c0-.891.659-1.405 1.83-1.478l1.333-.077v-.427c0-.523-.344-.818-1.008-.818-.542 0-.918.2-1.025.55h-.94c.099-.85.894-1.396 2.01-1.396 1.234 0 1.93.618 1.93 1.664v3.382h-.935v-.696h-.077a1.66 1.66 0 0 1-1.478.777 1.477 1.477 0 0 1-1.147-.374 1.495 1.495 0 0 1-.493-1.107Zm3.163-.423v-.414l-1.202.077c-.678.046-.985.278-.985.714 0 .446.384.705.912.705a1.154 1.154 0 0 0 1.152-.634c.07-.14.112-.292.123-.448Zm2.243-.655c0-1.564.8-2.554 2.043-2.554a1.614 1.614 0 0 1 1.508.868h.073V8.312h.971v6.882h-.93v-.782h-.077a1.712 1.712 0 0 1-1.545.864c-1.252 0-2.043-.99-2.043-2.559Zm1.003 0c0 1.05.492 1.682 1.315 1.682.818 0 1.324-.64 1.324-1.677 0-1.032-.511-1.682-1.324-1.682-.818 0-1.315.636-1.315 1.678Zm7.61 0a2.358 2.358 0 0 1 .596-1.8 2.33 2.33 0 0 1 1.725-.768 2.32 2.32 0 0 1 1.725.768 2.347 2.347 0 0 1 .595 1.8 2.36 2.36 0 0 1-.593 1.804 2.331 2.331 0 0 1-1.727.77 2.32 2.32 0 0 1-1.727-.77 2.347 2.347 0 0 1-.594-1.804Zm3.642 0c0-1.072-.479-1.7-1.32-1.7-.844 0-1.319.628-1.319 1.7 0 1.082.475 1.705 1.32 1.705.84 0 1.32-.627 1.32-1.705Zm2.302-2.472h.935v.786h.073a1.466 1.466 0 0 1 1.468-.882 1.591 1.591 0 0 1 1.292.509 1.613 1.613 0 0 1 .411 1.332v3.204h-.97v-2.959c0-.795-.344-1.19-1.063-1.19a1.124 1.124 0 0 0-1.122.771c-.052.155-.07.32-.053.483v2.896h-.97v-4.95Zm9.667-1.233v1.255h1.066v.823h-1.066v2.545c0 .519.212.746.696.746.124 0 .247-.008.37-.023v.814a3.157 3.157 0 0 1-.528.05c-1.08 0-1.51-.382-1.51-1.336V11.09h-.781v-.823h.781V9.013h.972Zm2.393-.7h.962v2.728h.077a1.509 1.509 0 0 1 1.501-.887 1.61 1.61 0 0 1 1.278.522 1.633 1.633 0 0 1 .416 1.324v3.196h-.972V12.24c0-.79-.366-1.191-1.052-1.191a1.142 1.142 0 0 0-.91.337 1.158 1.158 0 0 0-.329.918v2.89h-.971V8.313Zm9.897 5.546a2.009 2.009 0 0 1-.808 1.105c-.39.262-.858.378-1.324.327a2.227 2.227 0 0 1-1.725-.748 2.26 2.26 0 0 1-.549-1.807 2.297 2.297 0 0 1 .548-1.814 2.27 2.27 0 0 1 1.721-.772c1.369 0 2.196.941 2.196 2.496v.34h-3.475v.055a1.32 1.32 0 0 0 .343 1 1.304 1.304 0 0 0 .967.418 1.172 1.172 0 0 0 1.171-.6h.935Zm-3.416-1.595h2.485a1.2 1.2 0 0 0-.728-1.191 1.181 1.181 0 0 0-.483-.091 1.247 1.247 0 0 0-.906.37 1.275 1.275 0 0 0-.368.912Z",
      fill: "#fff"
    })]
  }));
};

apple.defaultProps = {
  width: "129",
  height: "43",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var arrowUp = function arrowUp(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.99 15.261a.719.719 0 0 1 .018-.944l.07-.068 11.012-9.24a.719.719 0 0 1 .995 1.033l-.07.068-11.013 9.24a.719.719 0 0 1-1.012-.088Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.339 5.58a.719.719 0 0 1 .015-1.434l.107.001 8.152.696c.36.03.636.323.657.673l-.002.107-.73 8.15a.719.719 0 0 1-1.434-.022l.002-.106.665-7.431L8.34 5.58Z",
      fill: "#fff"
    })]
  }));
};

arrowUp.defaultProps = {
  width: "22",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var discount = function discount(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      opacity: ".4",
      d: "M15.999 29.331c-1.026 0-2.05-.39-2.832-1.167l-.973-.973a2.006 2.006 0 0 0-1.42-.585H9.406a4.02 4.02 0 0 1-4.014-4.015v-1.37a2.012 2.012 0 0 0-.587-1.42l-.957-.957a4.02 4.02 0 0 1-.015-5.676l.973-.974c.376-.378.584-.883.586-1.419V9.407a4.02 4.02 0 0 1 4.014-4.016h1.371c.535 0 1.039-.208 1.419-.588l.958-.956a4.018 4.018 0 0 1 5.676-.015l.974.974c.378.377.883.585 1.417.585h1.37a4.02 4.02 0 0 1 4.015 4.016v1.37c.002.534.21 1.04.587 1.42l.957.957a3.99 3.99 0 0 1 1.183 2.833 3.99 3.99 0 0 1-1.156 2.83l-.038.04-.947.946a2.006 2.006 0 0 0-.585 1.419v1.369a4.02 4.02 0 0 1-4.015 4.015h-1.37c-.535.001-1.04.209-1.42.586l-.958.958a3.998 3.998 0 0 1-2.844 1.181",
      fill: "#393939"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.39 13.401c-.22.22-.505.339-.82.339-.297 0-.588-.121-.82-.34a1.174 1.174 0 0 1-.348-.827c0-.29.123-.59.34-.82.118-.12.26-.21.4-.258.403-.184.938-.076 1.255.257.113.113.2.237.257.367.063.138.095.296.095.454 0 .318-.127.612-.359.828Zm6.864-1.655a1.17 1.17 0 0 0-1.65 0L11.752 18.6a1.17 1.17 0 0 0 0 1.65c.222.22.514.342.826.342.312 0 .604-.122.824-.342l6.853-6.853a1.17 1.17 0 0 0 0-1.65Zm-.38 6.606a1.18 1.18 0 0 0-1.285.259c-.07.082-.17.21-.239.36a1.133 1.133 0 0 0-.08.456c0 .117.008.29.08.453.067.15.147.27.252.376.242.224.522.337.834.337.296 0 .586-.12.825-.342.212-.212.328-.506.328-.824 0-.32-.116-.612-.33-.826a1.063 1.063 0 0 0-.385-.25Z",
      fill: "#00F6FF"
    })]
  }));
};

discount.defaultProps = {
  width: "32",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var facebook = function facebook(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M10.5 0C4.701 0 0 4.72 0 10.544c0 5.223 3.785 9.548 8.749 10.386v-8.186H6.216V9.798h2.533V7.626c0-2.52 1.533-3.894 3.772-3.894 1.072 0 1.994.08 2.262.116v2.634H13.23c-1.218 0-1.453.582-1.453 1.434v1.88h2.905l-.379 2.946h-2.526V21C16.972 20.365 21 15.93 21 10.54 21 4.72 16.299 0 10.5 0Z",
      fill: "#fff"
    })
  }));
};

facebook.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var instagram = function instagram(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M20.947 6.174c-.05-1.116-.23-1.883-.489-2.548a5.124 5.124 0 0 0-1.214-1.862 5.169 5.169 0 0 0-1.859-1.21c-.669-.259-1.432-.44-2.548-.488C13.713.012 13.356 0 10.504 0 7.652 0 7.295.012 6.175.062 5.06.11 4.292.292 3.627.55a5.125 5.125 0 0 0-1.863 1.214 5.17 5.17 0 0 0-1.21 1.858c-.259.67-.44 1.432-.488 2.548C.012 7.294 0 7.65 0 10.502c0 2.851.012 3.208.062 4.328.049 1.116.23 1.883.488 2.548a5.178 5.178 0 0 0 1.214 1.862 5.167 5.167 0 0 0 1.86 1.21c.668.259 1.431.44 2.547.489 1.12.049 1.477.061 4.33.061 2.85 0 3.208-.012 4.328-.061 1.116-.05 1.883-.23 2.548-.489a5.371 5.371 0 0 0 3.073-3.072c.259-.669.44-1.432.489-2.548.049-1.12.061-1.477.061-4.328s-.004-3.208-.053-4.328Zm-1.892 8.574c-.045 1.026-.217 1.58-.36 1.949A3.484 3.484 0 0 1 16.7 18.69c-.37.143-.927.315-1.95.36-1.107.05-1.44.062-4.242.062S7.37 19.1 6.265 19.05c-1.025-.045-1.58-.217-1.949-.36a3.233 3.233 0 0 1-1.206-.784 3.265 3.265 0 0 1-.784-1.206c-.143-.37-.315-.927-.36-1.949-.05-1.107-.062-1.44-.062-4.242s.012-3.138.062-4.242c.045-1.025.217-1.579.36-1.948.169-.456.435-.87.788-1.206a3.26 3.26 0 0 1 1.207-.784c.369-.143.927-.316 1.949-.36 1.108-.05 1.44-.062 4.242-.062 2.807 0 3.14.012 4.243.061 1.026.045 1.58.218 1.949.361.455.168.87.435 1.206.784.35.34.616.75.784 1.206.144.369.316.927.361 1.948.05 1.108.062 1.44.062 4.242s-.013 3.13-.062 4.238Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M10.5 6a4.501 4.501 0 0 0 0 9 4.501 4.501 0 0 0 0-9Zm0 7.419a2.92 2.92 0 1 1 0-5.839 2.92 2.92 0 0 1 0 5.839ZM18 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
      fill: "#fff"
    })]
  }));
};

instagram.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var linkedin = function linkedin(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M19.485 0H1.515C.678 0 0 .678 0 1.515v17.97C0 20.322.678 21 1.515 21h17.97c.837 0 1.515-.678 1.515-1.515V1.515C21 .678 20.322 0 19.485 0ZM7.45 15.873H4.892V8.18h2.557v7.693ZM6.17 7.129h-.016c-.859 0-1.413-.59-1.413-1.329 0-.755.571-1.33 1.446-1.33s1.413.575 1.43 1.33c0 .738-.555 1.329-1.447 1.329Zm10.5 8.744h-2.557v-4.116c0-1.034-.37-1.74-1.296-1.74-.706 0-1.127.476-1.312.936-.067.164-.084.394-.084.624v4.296H8.864s.034-6.972 0-7.693h2.557v1.089c.34-.524.948-1.27 2.305-1.27 1.682 0 2.944 1.1 2.944 3.463v4.411Z",
      fill: "#fff"
    })
  }));
};

linkedin.defaultProps = {
  width: "21",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var twitter = function twitter(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M23 2.25a9.704 9.704 0 0 1-2.717.756 4.754 4.754 0 0 0 2.074-2.65 9.329 9.329 0 0 1-2.99 1.161A4.689 4.689 0 0 0 15.923 0c-2.61 0-4.712 2.154-4.712 4.795 0 .38.032.746.11 1.094C7.4 5.694 3.93 3.784 1.6.874a4.888 4.888 0 0 0-.645 2.423c0 1.66.84 3.132 2.094 3.984a4.598 4.598 0 0 1-2.13-.59v.053c0 2.33 1.634 4.264 3.778 4.71a4.633 4.633 0 0 1-1.237.158c-.301 0-.606-.018-.892-.082.61 1.899 2.344 3.294 4.406 3.34a9.376 9.376 0 0 1-5.847 2.044c-.386 0-.757-.017-1.128-.065A13.116 13.116 0 0 0 7.234 19c8.676 0 13.42-7.308 13.42-13.642 0-.212-.007-.417-.017-.62A9.493 9.493 0 0 0 23 2.25Z",
      fill: "#fff"
    })
  }));
};

twitter.defaultProps = {
  width: "23",
  height: "19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};








;// CONCATENATED MODULE: ./src/constants/index.js
function constants_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function constants_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? constants_ownKeys(Object(source), !0).forEach(function (key) { constants_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : constants_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function constants_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Star = function Star(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", constants_objectSpread(constants_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M25.47 19.712a1.761 1.761 0 0 0-.51 1.552l1.422 7.872a1.728 1.728 0 0 1-.72 1.728c-.548.4-1.276.448-1.872.128l-7.087-3.696a1.81 1.81 0 0 0-.8-.21h-.433c-.15.023-.298.071-.432.145L7.95 30.944c-.35.176-.748.239-1.136.176a1.778 1.778 0 0 1-1.424-2.033l1.424-7.872a1.79 1.79 0 0 0-.51-1.567l-5.778-5.6a1.727 1.727 0 0 1-.43-1.808 1.797 1.797 0 0 1 1.422-1.2L9.47 9.887a1.78 1.78 0 0 0 1.408-.975l3.504-7.184c.083-.16.19-.307.32-.432l.144-.112c.075-.083.161-.152.257-.208l.175-.064L15.55.8h.673a1.79 1.79 0 0 1 1.408.96l3.55 7.152c.257.523.754.887 1.329.975l7.952 1.153c.672.096 1.233.56 1.456 1.2.21.642.028 1.346-.464 1.808l-5.984 5.664Z",
      fill: "#00F6FF"
    })
  }));
};

Star.defaultProps = {
  width: "33",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Shield = function Shield(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", constants_objectSpread(constants_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.565 31.862c.177.092.375.14.573.138a1.25 1.25 0 0 0 .574-.144l5.708-3.052c1.62-.863 2.887-1.828 3.876-2.951A13.192 13.192 0 0 0 27.6 17.06l-.068-10.625c-.006-1.224-.81-2.316-1.999-2.713L14.913.16a3.022 3.022 0 0 0-1.968.011L2.365 3.86C1.183 4.274.394 5.373.4 6.598l.068 10.617a13.197 13.197 0 0 0 3.42 8.759c1 1.107 2.279 2.058 3.915 2.907l5.762 2.98Zm-1.511-12.488c.238.23.547.342.857.34.309-.002.617-.118.852-.35L20 13.212a1.155 1.155 0 0 0-.01-1.663 1.231 1.231 0 0 0-1.708.01l-5.39 5.312-2.207-2.121a1.231 1.231 0 0 0-1.709.01 1.154 1.154 0 0 0 .011 1.664l3.066 2.95Z",
      fill: "#00F6FF"
    })
  }));
};

Shield.defaultProps = {
  width: "28",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Send = function Send(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", constants_objectSpread(constants_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M31.497.931a3.093 3.093 0 0 0-3.09-.805L2.653 7.616C1.488 7.938.662 8.867.439 10.048c-.227 1.201.567 2.727 1.604 3.365l8.053 4.949c.826.507 1.892.38 2.575-.31l9.222-9.278a1.174 1.174 0 0 1 1.696 0 1.22 1.22 0 0 1 0 1.707l-9.237 9.28a2.118 2.118 0 0 0-.309 2.59l4.92 8.134A3.056 3.056 0 0 0 21.622 32c.128 0 .272 0 .4-.016 1.248-.161 2.24-1.015 2.609-2.223L32.265 4.04A3.143 3.143 0 0 0 31.497.93",
      fill: "#00F6FF"
    })
  }));
};

Send.defaultProps = {
  width: "33",
  height: "32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};






const navLinks = [{
  id: "home",
  title: "Home"
}, {
  id: "features",
  title: "Features"
}, {
  id: "product",
  title: "Product"
}, {
  id: "clients",
  title: "Clients"
}];
const features = [{
  id: "feature-1",
  icon: /*#__PURE__*/jsx_runtime_.jsx(Star, {}),
  title: "Procedure Template",
  content: "Self-customized procedure template is free. You can compose a lot of procedure template."
}, {
  id: "feature-2",
  icon: /*#__PURE__*/jsx_runtime_.jsx(Shield, {}),
  title: "Work Orders",
  content: "DX Maintenance provides work order utility. Users can make work order and solve the problem."
}, {
  id: "feature-3",
  icon: /*#__PURE__*/jsx_runtime_.jsx(Send, {}),
  title: "Build your own Team",
  content: "Make your team. And work with them. DX Maintenance provides you to build your own team."
}];
const feedback = [{
  id: "feedback-1",
  content: "Time is gold. DX Maintenance give me gold.",
  name: "Herman Jensen",
  title: "Founder & Leader",
  img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: people01
  })
}, {
  id: "feedback-2",
  content: "Sometimes Life is going to hit you in the head with a brick. Don't lose faith.",
  name: "Steve Mark",
  title: "Founder & Leader",
  img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: people02
  })
}, {
  id: "feedback-3",
  content: "Everyone has a plan until they get punched in the mouth",
  name: "Kenn Gallagher",
  title: "Founder & Leader",
  img: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
    src: people03
  })
}];
const stats = [{
  id: "stats-1",
  title: "Users",
  value: "1500+"
}, {
  id: "stats-2",
  title: "Trusted by Company",
  value: "100+"
}, {
  id: "stats-3",
  title: "Managed Facilities",
  value: "1000+"
}];
const footerLinks = [{
  title: "Useful Links",
  links: [{
    name: "Content",
    link: "https://www.hoobank.com/content/"
  }, {
    name: "How it Works",
    link: "https://www.hoobank.com/how-it-works/"
  }, {
    name: "Create",
    link: "https://www.hoobank.com/create/"
  }, {
    name: "Explore",
    link: "https://www.hoobank.com/explore/"
  }, {
    name: "Terms & Services",
    link: "https://www.hoobank.com/terms-and-services/"
  }]
}, {
  title: "Community",
  links: [{
    name: "Help Center",
    link: "https://www.hoobank.com/help-center/"
  }, {
    name: "Partners",
    link: "https://www.hoobank.com/partners/"
  }, {
    name: "Suggestions",
    link: "https://www.hoobank.com/suggestions/"
  }, {
    name: "Github",
    link: "https://github.com/DonCorle/"
  }]
}, {
  title: "Partner",
  links: [{
    name: "Our Partner",
    link: "https://www.hoobank.com/our-partner/"
  }, {
    name: "Become a Partner",
    link: "https://www.hoobank.com/become-a-partner/"
  }]
}];
const socialMedia = [{
  id: "social-media-1",
  icon: instagram,
  link: "https://www.instagram.com/"
}, {
  id: "social-media-2",
  icon: facebook,
  link: "https://www.facebook.com/"
}, {
  id: "social-media-3",
  icon: twitter,
  link: "https://www.twitter.com/"
}, {
  id: "social-media-4",
  icon: linkedin,
  link: "https://www.linkedin.com/"
}];
const constants_clients = [{
  id: "client-1",
  logo: airbnb
}, {
  id: "client-2",
  logo: binance
}, {
  id: "client-3",
  logo: coinbase
}, {
  id: "client-4",
  logo: dropbox
}];
;// CONCATENATED MODULE: ./src/components/Button.jsx



const Button_Button = ({
  styles
}) => /*#__PURE__*/jsx_runtime_.jsx("button", {
  type: "button",
  className: `${styles}`,
  children: "Get Started"
});

/* harmony default export */ const components_Button = (Button_Button);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx
function Navbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Navbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Navbar_ownKeys(Object(source), !0).forEach(function (key) { Navbar_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Navbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Close = function Close(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", Navbar_objectSpread(Navbar_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m10.41 9 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L9 7.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42L7.59 9l-6.3 6.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L9 10.41l6.29 6.3a1.001 1.001 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L10.41 9Z"
    })
  }));
};

Close.defaultProps = {
  width: "18",
  height: "18",
  fill: "#FFF",
  xmlns: "http://www.w3.org/2000/svg"
};

var Menu = function Menu(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", Navbar_objectSpread(Navbar_objectSpread({}, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M9 2h10a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2Zm10 8H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2ZM1 7h18a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2Z"
    })
  }));
};

Menu.defaultProps = {
  width: "20",
  height: "12",
  fill: "#FFF",
  xmlns: "http://www.w3.org/2000/svg"
};






const Navbar = () => {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)("Home");
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);
  const {
    0: scroll,
    1: setScroll
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = scroll => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: `fixed w-9/12 flex py-5 justify-between z-10 ${scroll === true ? "bg-slate-900/90" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[200px] h-[50px]",
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: logo
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      className: "list-none sm:flex hidden justify-center items-center flex-5",
      children: navLinks.map((nav, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: `font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`,
        onClick: () => setActive(nav.title),
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `#${nav.id}`,
          children: nav.title
        })
      }, nav.id))
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/auth/login",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Button, {
          styles: ` py-3 px-3 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[8px] outline-5 `
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "sm:hidden flex flex-1 justify-end items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[28px] h-[28px] object-contain",
        onClick: () => setToggle(!toggle),
        children: toggle ? /*#__PURE__*/jsx_runtime_.jsx(Close, {}) : /*#__PURE__*/jsx_runtime_.jsx(Menu, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`,
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "list-none flex justify-end items-start flex-1 flex-col",
          children: navLinks.map((nav, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: `font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`,
            onClick: () => setActive(nav.title),
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `#${nav.id}`,
              children: nav.title
            })
          }, nav.id))
        })
      })]
    })]
  });
};

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./src/components/Billing.jsx
function Billing_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Billing_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Billing_ownKeys(Object(source), !0).forEach(function (key) { Billing_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Billing_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Billing_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Apple = function Apple(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", Billing_objectSpread(Billing_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.274 42.046c-.332 0-.657-.005-.988-.012a13.774 13.774 0 0 1-2.042-.18 6.401 6.401 0 0 1-1.81-.602 5.91 5.91 0 0 1-1.527-1.117A5.847 5.847 0 0 1 .79 38.6a6.315 6.315 0 0 1-.593-1.822 13.723 13.723 0 0 1-.182-2.06C.01 34.484 0 33.712 0 33.712V8.322s.01-.76.016-.984c.008-.69.069-1.377.18-2.058a6.353 6.353 0 0 1 .595-1.827c.285-.569.66-1.088 1.11-1.536A6.084 6.084 0 0 1 5.238.194a13.675 13.675 0 0 1 2.05-.18L8.275 0h112.306l.998.014c.68.008 1.359.068 2.031.179.635.108 1.25.311 1.826.602a6.13 6.13 0 0 1 2.639 2.66c.284.571.482 1.182.585 1.813.113.686.176 1.379.189 2.074.004.311.004.646.004.979.009.412.009.804.009 1.2v23.005c0 .4 0 .789-.009 1.182 0 .357 0 .685-.005 1.022a14.052 14.052 0 0 1-.186 2.037 6.311 6.311 0 0 1-.591 1.836 6.024 6.024 0 0 1-1.109 1.523 5.922 5.922 0 0 1-1.53 1.124 6.377 6.377 0 0 1-1.822.605c-.676.11-1.359.17-2.043.179-.327.008-.654.011-.981.012l-1.184.002-111.128-.002Z",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M26.116 21.353a5.466 5.466 0 0 1 .704-2.615 5.427 5.427 0 0 1 1.871-1.949 5.547 5.547 0 0 0-1.902-1.704 5.511 5.511 0 0 0-2.46-.667c-1.835-.194-3.614 1.104-4.549 1.104-.953 0-2.393-1.085-3.943-1.053A5.783 5.783 0 0 0 13 15.32a5.828 5.828 0 0 0-2.051 2.147c-2.114 3.681-.537 9.09 1.488 12.066 1.013 1.457 2.196 3.084 3.745 3.026 1.516-.063 2.082-.972 3.912-.972 1.813 0 2.344.972 3.924.936 1.627-.027 2.651-1.464 3.629-2.934a12.078 12.078 0 0 0 1.659-3.4 5.233 5.233 0 0 1-2.319-1.935 5.279 5.279 0 0 1-.871-2.9Zm-2.985-8.892a5.377 5.377 0 0 0 1.218-3.837 5.407 5.407 0 0 0-3.506 1.824 5.102 5.102 0 0 0-1.25 3.695 4.456 4.456 0 0 0 1.962-.432 4.483 4.483 0 0 0 1.576-1.25Zm22.145 16.41h-5.172l-1.242 3.69H36.67l4.9-13.65h2.276l4.9 13.65h-2.228l-1.242-3.69ZM40.64 27.17h4.1l-2.02-5.988h-.057l-2.023 5.988Zm18.688.416c0 3.093-1.646 5.08-4.129 5.08a3.339 3.339 0 0 1-1.805-.42 3.365 3.365 0 0 1-1.308-1.321h-.047v4.929h-2.03V22.608h1.965v1.656h.037a3.52 3.52 0 0 1 1.334-1.318 3.494 3.494 0 0 1 1.817-.442c2.51 0 4.166 1.997 4.166 5.081Zm-2.087 0c0-2.015-1.035-3.34-2.615-3.34-1.552 0-2.595 1.353-2.595 3.34 0 2.005 1.043 3.348 2.595 3.348 1.58 0 2.615-1.315 2.615-3.348Zm12.977 0c0 3.093-1.646 5.08-4.13 5.08a3.338 3.338 0 0 1-1.805-.421 3.364 3.364 0 0 1-1.307-1.32h-.047v4.929h-2.031V22.608h1.966v1.656h.037a3.52 3.52 0 0 1 1.334-1.318 3.494 3.494 0 0 1 1.816-.442c2.511 0 4.167 1.997 4.167 5.081Zm-2.088 0c0-2.015-1.035-3.34-2.614-3.34-1.552 0-2.596 1.353-2.596 3.34 0 2.005 1.044 3.348 2.596 3.348 1.58 0 2.614-1.315 2.614-3.348Zm9.285 1.172c.15 1.354 1.458 2.243 3.244 2.243 1.712 0 2.943-.89 2.943-2.11 0-1.06-.742-1.694-2.501-2.128l-1.759-.427c-2.492-.605-3.649-1.777-3.649-3.68 0-2.355 2.04-3.972 4.938-3.972 2.868 0 4.834 1.617 4.9 3.973h-2.05c-.123-1.363-1.243-2.185-2.879-2.185-1.635 0-2.755.832-2.755 2.043 0 .965.715 1.533 2.464 1.968l1.495.369c2.784.662 3.941 1.787 3.941 3.784 0 2.554-2.022 4.153-5.239 4.153-3.009 0-5.04-1.562-5.172-4.03h2.079Zm12.715-8.504v2.355h1.882v1.618h-1.882v5.487c0 .852.377 1.25 1.204 1.25.224-.005.447-.02.668-.048v1.608a5.55 5.55 0 0 1-1.128.094c-2.003 0-2.784-.756-2.784-2.686v-5.705H86.65v-1.618h1.439v-2.355h2.04Zm2.971 7.332c0-3.131 1.834-5.099 4.693-5.099 2.869 0 4.693 1.968 4.693 5.1 0 3.139-1.815 5.098-4.693 5.098-2.877 0-4.693-1.96-4.693-5.099Zm7.317 0c0-2.148-.978-3.416-2.624-3.416-1.646 0-2.623 1.278-2.623 3.416 0 2.157.977 3.415 2.623 3.415 1.645 0 2.624-1.258 2.624-3.415Zm3.744-4.977h1.937v1.694h.047c.131-.529.439-.996.872-1.324a2.353 2.353 0 0 1 1.508-.474c.234 0 .467.025.695.076v1.911a2.818 2.818 0 0 0-.912-.123 2.034 2.034 0 0 0-1.582.655 2.057 2.057 0 0 0-.534 1.635v5.903h-2.031v-9.953Zm14.423 7.03c-.273 1.806-2.022 3.046-4.26 3.046-2.879 0-4.665-1.94-4.665-5.052 0-3.121 1.796-5.146 4.579-5.146 2.738 0 4.459 1.892 4.459 4.909v.7h-6.988v.123a2.6 2.6 0 0 0 1.594 2.63c.338.138.702.203 1.068.19.479.045.961-.067 1.373-.32a2.25 2.25 0 0 0 .911-1.08h1.929Zm-6.865-2.97h4.946a2.4 2.4 0 0 0-1.47-2.347 2.367 2.367 0 0 0-.957-.18 2.488 2.488 0 0 0-1.783.735 2.517 2.517 0 0 0-.736 1.791ZM40.385 8.635a2.869 2.869 0 0 1 2.301.899 2.904 2.904 0 0 1 .767 2.36c0 2.095-1.126 3.3-3.068 3.3H38.03v-6.56h2.355Zm-1.343 5.631h1.23a2.039 2.039 0 0 0 1.633-.665 2.066 2.066 0 0 0 .517-1.694 2.078 2.078 0 0 0-.525-1.683 2.056 2.056 0 0 0-1.625-.662h-1.23v4.704Zm5.555-1.55a2.356 2.356 0 0 1 .596-1.8 2.33 2.33 0 0 1 1.725-.768 2.32 2.32 0 0 1 1.725.768 2.346 2.346 0 0 1 .595 1.8 2.358 2.358 0 0 1-.593 1.804 2.332 2.332 0 0 1-1.727.77 2.321 2.321 0 0 1-1.727-.77 2.347 2.347 0 0 1-.594-1.804Zm3.642 0c0-1.072-.479-1.7-1.32-1.7-.844 0-1.319.628-1.319 1.7 0 1.082.475 1.705 1.32 1.705.84 0 1.32-.627 1.32-1.705Zm7.169 2.478H54.4l-1.017-3.646h-.077l-1.012 3.646h-.998l-1.356-4.95h.985l.881 3.777h.073l1.011-3.777h.932l1.012 3.777h.076l.878-3.777h.97l-1.35 4.95Zm2.492-4.95h.934v.786h.073a1.466 1.466 0 0 1 1.468-.882 1.591 1.591 0 0 1 1.292.509 1.613 1.613 0 0 1 .412 1.332v3.204h-.971v-2.959c0-.795-.344-1.19-1.062-1.19a1.124 1.124 0 0 0-1.122.771 1.14 1.14 0 0 0-.053.483v2.896H57.9v-4.95Zm5.726-1.933h.971v6.883h-.97V8.312Zm2.321 4.405a2.356 2.356 0 0 1 .596-1.8 2.333 2.333 0 0 1 1.725-.768 2.32 2.32 0 0 1 1.726.768 2.35 2.35 0 0 1 .595 1.8 2.36 2.36 0 0 1-.594 1.804 2.333 2.333 0 0 1-1.727.769 2.32 2.32 0 0 1-1.727-.77 2.35 2.35 0 0 1-.594-1.803Zm3.643 0c0-1.072-.48-1.7-1.32-1.7-.845 0-1.32.628-1.32 1.7 0 1.082.475 1.705 1.32 1.705.84 0 1.32-.627 1.32-1.705Zm2.022 1.078c0-.891.659-1.405 1.83-1.478l1.333-.077v-.427c0-.523-.344-.818-1.008-.818-.542 0-.918.2-1.025.55h-.94c.099-.85.894-1.396 2.01-1.396 1.234 0 1.93.618 1.93 1.664v3.382h-.935v-.696h-.077a1.66 1.66 0 0 1-1.478.777 1.477 1.477 0 0 1-1.147-.374 1.495 1.495 0 0 1-.493-1.107Zm3.163-.423v-.414l-1.202.077c-.678.046-.985.278-.985.714 0 .446.384.705.912.705a1.154 1.154 0 0 0 1.152-.634c.07-.14.112-.292.123-.448Zm2.243-.655c0-1.564.8-2.554 2.043-2.554a1.614 1.614 0 0 1 1.508.868h.073V8.312h.971v6.882h-.93v-.782h-.077a1.712 1.712 0 0 1-1.545.864c-1.252 0-2.043-.99-2.043-2.559Zm1.003 0c0 1.05.492 1.682 1.315 1.682.818 0 1.324-.64 1.324-1.677 0-1.032-.511-1.682-1.324-1.682-.818 0-1.315.636-1.315 1.678Zm7.61 0a2.358 2.358 0 0 1 .596-1.8 2.33 2.33 0 0 1 1.725-.768 2.32 2.32 0 0 1 1.725.768 2.347 2.347 0 0 1 .595 1.8 2.36 2.36 0 0 1-.593 1.804 2.331 2.331 0 0 1-1.727.77 2.32 2.32 0 0 1-1.727-.77 2.347 2.347 0 0 1-.594-1.804Zm3.642 0c0-1.072-.479-1.7-1.32-1.7-.844 0-1.319.628-1.319 1.7 0 1.082.475 1.705 1.32 1.705.84 0 1.32-.627 1.32-1.705Zm2.302-2.472h.935v.786h.073a1.466 1.466 0 0 1 1.468-.882 1.591 1.591 0 0 1 1.292.509 1.613 1.613 0 0 1 .411 1.332v3.204h-.97v-2.959c0-.795-.344-1.19-1.063-1.19a1.124 1.124 0 0 0-1.122.771c-.052.155-.07.32-.053.483v2.896h-.97v-4.95Zm9.667-1.233v1.255h1.066v.823h-1.066v2.545c0 .519.212.746.696.746.124 0 .247-.008.37-.023v.814a3.157 3.157 0 0 1-.528.05c-1.08 0-1.51-.382-1.51-1.336V11.09h-.781v-.823h.781V9.013h.972Zm2.393-.7h.962v2.728h.077a1.509 1.509 0 0 1 1.501-.887 1.61 1.61 0 0 1 1.278.522 1.633 1.633 0 0 1 .416 1.324v3.196h-.972V12.24c0-.79-.366-1.191-1.052-1.191a1.142 1.142 0 0 0-.91.337 1.158 1.158 0 0 0-.329.918v2.89h-.971V8.313Zm9.897 5.546a2.009 2.009 0 0 1-.808 1.105c-.39.262-.858.378-1.324.327a2.227 2.227 0 0 1-1.725-.748 2.26 2.26 0 0 1-.549-1.807 2.297 2.297 0 0 1 .548-1.814 2.27 2.27 0 0 1 1.721-.772c1.369 0 2.196.941 2.196 2.496v.34h-3.475v.055a1.32 1.32 0 0 0 .343 1 1.304 1.304 0 0 0 .967.418 1.172 1.172 0 0 0 1.171-.6h.935Zm-3.416-1.595h2.485a1.2 1.2 0 0 0-.728-1.191 1.181 1.181 0 0 0-.483-.091 1.247 1.247 0 0 0-.906.37 1.275 1.275 0 0 0-.368.912Z",
      fill: "#fff"
    })]
  }));
};

Apple.defaultProps = {
  width: "129",
  height: "43",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Google = function Google(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", Billing_objectSpread(Billing_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M138.829 43.037H5.339c-2.936 0-5.339-2.42-5.339-5.38V5.38C0 2.42 2.403 0 5.34 0h133.489c2.937 0 5.34 2.42 5.34 5.38v32.278c0 2.959-2.403 5.38-5.34 5.38",
      fill: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M50.637 11.021c0 .902-.265 1.62-.796 2.155-.602.637-1.388.955-2.354.955-.925 0-1.71-.322-2.358-.969-.647-.646-.97-1.447-.97-2.403s.323-1.756.97-2.403c.647-.646 1.433-.969 2.358-.969.46 0 .898.09 1.316.27.417.181.751.421 1.002.722l-.564.568c-.424-.511-1.008-.766-1.754-.766-.674 0-1.257.239-1.75.717-.492.478-.738 1.098-.738 1.861 0 .764.246 1.384.738 1.862a2.427 2.427 0 0 0 1.75.717c.716 0 1.312-.24 1.79-.72.31-.314.49-.75.537-1.309h-2.327v-.775h3.105c.03.169.045.33.045.487",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M50.636 11.021h-.107c0 .881-.256 1.565-.764 2.079h-.001v.002c-.584.614-1.335.92-2.278.922-.9-.002-1.653-.31-2.282-.938-.628-.628-.938-1.395-.94-2.327.002-.931.312-1.698.94-2.326.629-.627 1.382-.937 2.282-.939.445 0 .87.088 1.274.262.404.176.724.406.962.692l.082-.07-.076-.075-.563.568.075.076.083-.07c-.444-.535-1.067-.805-1.837-.804-.7 0-1.314.251-1.823.747-.514.498-.773 1.153-.772 1.94 0 .786.258 1.44.772 1.938a2.533 2.533 0 0 0 1.823.747c.74.002 1.37-.251 1.865-.752.332-.335.52-.798.569-1.374l.01-.117h-2.337v-.56h2.998v-.108l-.105.019c.03.163.043.318.043.468h.214c0-.163-.015-.331-.047-.506l-.015-.089H47.38v.991h2.433v-.107l-.106-.01c-.047.542-.218.95-.507 1.241-.458.46-1.022.688-1.714.69-.65-.002-1.2-.227-1.675-.687-.47-.459-.705-1.044-.706-1.785.001-.74.235-1.326.706-1.784a2.317 2.317 0 0 1 1.675-.687c.723.002 1.268.243 1.673.728l.075.09.645-.651.07-.07-.064-.075a2.744 2.744 0 0 0-1.041-.751 3.39 3.39 0 0 0-1.358-.28c-.95 0-1.768.336-2.433 1.001-.667.664-1.003 1.499-1.002 2.48-.001.98.335 1.815 1.002 2.479.665.665 1.484 1 2.433 1 .989 0 1.81-.33 2.432-.989l-.078-.074.076.076c.553-.557.828-1.31.827-2.23h-.107Zm4.922-2.696H52.64v2.046h2.632v.776H52.64v2.047h2.918v.793h-3.74V7.532h3.74v.793",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M55.56 8.324v-.107h-3.025v2.262h2.631v.56h-2.631v2.263h2.918v.577h-3.527V7.64h3.527v.685h.106v-.107.107h.107v-.9h-3.954v6.67h3.954v-1.008h-2.918v-1.831h2.632v-.991h-2.632V8.432h2.918v-.108h-.106Zm3.471 5.663h-.823V8.324h-1.79v-.793h4.403v.793h-1.79v5.663",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M59.032 13.987v-.108h-.717V8.217h-1.79v-.578h4.19v.578h-1.79v5.77h.107v-.108.108h.107V8.432h1.79V7.424H56.31v1.008h1.79v5.663h1.038v-.108h-.107Zm4.975 0V7.531h.823v6.456h-.823",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M64.01 13.987h.107V7.64h.61v6.24h-.716v.108h.106-.106v.108h.93V7.424h-1.037v6.67h.107v-.107Zm4.476 0h-.824V8.324h-1.79v-.793h4.403v.793h-1.79v5.663",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M68.484 13.987v-.107h-.717V8.217h-1.79V7.64h4.19v.578h-1.79v5.77h.107v-.107.107h.107V8.432h1.79V7.424h-4.617v1.008h1.79v5.663h1.037v-.108h-.107Zm6.035-1.374a2.344 2.344 0 0 0 1.74.725c.687 0 1.268-.242 1.741-.725.475-.484.713-1.103.713-1.854 0-.75-.238-1.369-.713-1.853a2.342 2.342 0 0 0-1.74-.725c-.687 0-1.267.242-1.741.725-.474.484-.711 1.102-.711 1.853 0 .751.237 1.37.71 1.854Zm4.09.54c-.63.653-1.413.978-2.35.978-.936 0-1.72-.325-2.348-.978-.63-.652-.944-1.45-.944-2.394 0-.943.314-1.741.944-2.393.629-.653 1.412-.979 2.349-.979.93 0 1.712.328 2.345.983.632.655.948 1.452.948 2.39 0 .943-.315 1.741-.944 2.393Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m74.516 12.612-.076.076a2.452 2.452 0 0 0 1.816.757 2.45 2.45 0 0 0 1.817-.757c.495-.504.744-1.155.743-1.929 0-.773-.248-1.425-.743-1.928a2.45 2.45 0 0 0-1.817-.758 2.451 2.451 0 0 0-1.816.758c-.494.503-.744 1.155-.742 1.928-.002.774.248 1.425.742 1.93l.076-.077.075-.075c-.453-.465-.68-1.049-.68-1.778 0-.728.227-1.313.68-1.777a2.237 2.237 0 0 1 1.665-.694c.662.002 1.209.23 1.665.694.454.464.68 1.049.681 1.777 0 .729-.227 1.313-.681 1.778a2.235 2.235 0 0 1-1.665.693 2.237 2.237 0 0 1-1.665-.693l-.075.075Zm4.09.54-.077-.074c-.612.632-1.36.945-2.273.946-.912-.002-1.66-.314-2.272-.946l-.003-.003.003.003c-.611-.634-.913-1.4-.913-2.319 0-.92.302-1.684.913-2.318.611-.633 1.36-.945 2.272-.946.906 0 1.653.315 2.27.95.612.637.916 1.401.917 2.314-.001.92-.304 1.685-.914 2.32l.077.074.077.075c.647-.67.974-1.501.974-2.469 0-.962-.328-1.79-.979-2.464-.65-.675-1.466-1.017-2.422-1.016-.96 0-1.778.34-2.425 1.012-.649.67-.975 1.5-.974 2.468 0 .968.325 1.799.974 2.469l.003.003-.003-.003c.647.672 1.464 1.012 2.425 1.01.961.002 1.779-.338 2.427-1.01l-.077-.075Zm2.1.835V7.531h1.001l3.114 5.022h.036l-.036-1.244V7.531h.824v6.456h-.86l-3.257-5.265h-.036l.036 1.244v4.021h-.823",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M80.71 13.987h.107V7.64h.836l3.114 5.022h.204l-.038-1.353V7.639h.61v6.24h-.693l-3.258-5.265h-.204l.038 1.354v3.911h-.716v.108h.107-.107v.108h.93v-4.13l-.036-1.246-.107.003v.107h.036v-.107l-.09.057 3.288 5.316h1.026V7.424h-1.038v3.887l.036 1.245.107-.003v-.107h-.036v.107l.09-.057-3.145-5.072h-1.168v6.67h.107v-.107Zm33.491 18.29h1.992v-13.45h-1.992v13.45Zm17.948-8.604-2.284 5.831h-.069l-2.37-5.831h-2.147l3.555 8.15-2.027 4.534h2.08l5.478-12.684h-2.216Zm-11.301 7.077c-.653 0-1.563-.328-1.563-1.142 0-1.038 1.134-1.436 2.112-1.436.877 0 1.288.19 1.821.45-.155 1.246-1.219 2.128-2.37 2.128Zm.241-7.372c-1.443 0-2.937.64-3.555 2.06l1.768.744c.378-.744 1.082-.987 1.821-.987 1.03 0 2.078.623 2.095 1.731v.138c-.361-.207-1.133-.519-2.078-.519-1.906 0-3.848 1.055-3.848 3.028 0 1.8 1.564 2.96 3.315 2.96 1.34 0 2.078-.606 2.543-1.315h.068v1.038h1.923v-5.157c0-2.388-1.768-3.72-4.052-3.72Zm-12.316 1.932h-2.834V20.7h2.834c1.49 0 2.336 1.242 2.336 2.305 0 1.042-.846 2.305-2.336 2.305Zm-.051-6.482h-4.774v13.45h1.991v-5.096h2.783c2.209 0 4.38-1.611 4.38-4.177s-2.171-4.177-4.38-4.177ZM82.685 30.753c-1.376 0-2.529-1.162-2.529-2.756 0-1.612 1.153-2.791 2.53-2.791 1.358 0 2.425 1.179 2.425 2.79 0 1.596-1.067 2.757-2.426 2.757Zm2.288-6.327h-.068c-.448-.537-1.308-1.023-2.392-1.023-2.27 0-4.353 2.01-4.353 4.594 0 2.565 2.082 4.558 4.353 4.558 1.084 0 1.944-.485 2.392-1.04h.069v.66c0 1.75-.93 2.686-2.426 2.686-1.222 0-1.979-.884-2.289-1.63l-1.737.728c.499 1.214 1.824 2.705 4.026 2.705 2.34 0 4.318-1.387 4.318-4.767V23.68h-1.892v.745Zm3.27 7.852h1.995V18.827h-1.996v13.45Zm4.937-4.437c-.052-1.769 1.36-2.67 2.374-2.67.792 0 1.463.399 1.686.971l-4.06 1.699Zm6.194-1.526c-.378-1.023-1.532-2.912-3.889-2.912-2.34 0-4.283 1.855-4.283 4.576 0 2.566 1.926 4.576 4.507 4.576 2.082 0 3.287-1.282 3.785-2.028l-1.548-1.04c-.516.763-1.222 1.266-2.237 1.266-1.015 0-1.737-.468-2.202-1.387l6.073-2.53-.206-.52Zm-48.386-1.508v1.942H55.6c-.137 1.092-.499 1.889-1.05 2.444-.67.676-1.72 1.421-3.56 1.421-2.84 0-5.059-2.305-5.059-5.165s2.22-5.166 5.058-5.166c1.532 0 2.65.607 3.476 1.387l1.359-1.37c-1.153-1.109-2.684-1.958-4.835-1.958-3.888 0-7.157 3.19-7.157 7.107 0 3.917 3.269 7.106 7.157 7.106 2.1 0 3.682-.693 4.92-1.993 1.274-1.283 1.67-3.085 1.67-4.541 0-.451-.035-.867-.104-1.214h-6.486Zm11.832 5.946c-1.377 0-2.564-1.144-2.564-2.774 0-1.646 1.187-2.773 2.564-2.773 1.376 0 2.563 1.127 2.563 2.773 0 1.63-1.187 2.774-2.563 2.774Zm0-7.35c-2.513 0-4.56 1.924-4.56 4.576 0 2.635 2.047 4.576 4.56 4.576 2.511 0 4.559-1.941 4.559-4.576 0-2.652-2.048-4.576-4.56-4.576Zm9.945 7.35c-1.376 0-2.563-1.144-2.563-2.774 0-1.646 1.187-2.773 2.563-2.773 1.377 0 2.564 1.127 2.564 2.773 0 1.63-1.187 2.774-2.564 2.774Zm0-7.35c-2.512 0-4.559 1.924-4.559 4.576 0 2.635 2.047 4.576 4.56 4.576 2.511 0 4.559-1.941 4.559-4.576 0-2.652-2.048-4.576-4.56-4.576Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.441 11.268c-.276.25-.441.667-.441 1.22v-.124 18.268-.12c0 .511.141.906.38 1.16l.062.06c.194.175.442.268.727.268.278 0 .591-.089.922-.277l11.944-6.811 4.102-2.34c.522-.297.814-.68.863-1.07V21.5c-.049-.392-.341-.774-.862-1.072l-4.104-2.34-11.943-6.81c-.331-.189-.644-.278-.924-.278-.284 0-.532.093-.726.268Z",
      fill: "#00C1FF"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m13.415 32-.057-.06c-.225-.261-.358-.666-.358-1.191v.123V12.13v.124c0-.568.155-.996.415-1.253L23 21.5 13.415 32Z",
      fill: "url(#a)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M26.657 25 23 21.5l3.657-3.5 4.415 2.4c.56.305.875.698.928 1.1v.001c-.053.4-.367.794-.928 1.098L26.657 25",
      fill: "url(#b)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.749 32a1.14 1.14 0 0 1-.749-.256L23.5 22l3.5 3.25-12.302 6.486c-.34.18-.663.264-.95.264Z",
      fill: "url(#c)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M23.5 22 13 11.28c.2-.183.455-.28.748-.28.288 0 .61.094.951.291L27 18.426 23.5 22",
      fill: "url(#d)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M13.804 32c-.29 0-.544-.09-.742-.26l-.003-.003-.054-.05L13 31.68l.062-.06c.198.171.451.262.742.262.283 0 .603-.087.94-.27L26.922 25l.078.075-.079.043-12.177 6.613c-.307.166-.6.253-.863.267a1.631 1.631 0 0 1-.077.002",
      fill: "url(#e)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M27.077 25 27 24.934l4.131-2.013c.525-.255.82-.585.869-.921a.777.777 0 0 1-.096.366c-.128.242-.386.47-.773.659L27.078 25",
      fill: "url(#f)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M32 22c-.05-.449-.344-.888-.868-1.229L27 18.088l.077-.088 4.055 2.633c.578.376.868.872.868 1.367",
      fill: "url(#g)"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m26.922 18-12.178-6.613c-.338-.183-.658-.27-.942-.27-.29 0-.543.09-.74.26L13 11.32l.06-.057.002-.001c.196-.17.446-.26.734-.261h.006c.284 0 .604.087.942.27L27 17.925l-.078.075",
      fill: "url(#h)"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "a",
        x1: "19.126",
        y1: "11.931",
        x2: "10.126",
        y2: "20.173",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#00A0FF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".007",
          stopColor: "#00A1FF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".26",
          stopColor: "#00BEFF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".512",
          stopColor: "#00D2FF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".76",
          stopColor: "#00DFFF"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#00E3FF"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "b",
        x1: "32.683",
        y1: "21.439",
        x2: "11.258",
        y2: "21.439",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#FFE000"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".409",
          stopColor: "#FFBD00"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".775",
          stopColor: "orange"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#FF9C00"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "c",
        x1: "25.142",
        y1: "25.089",
        x2: "10.969",
        y2: "40.298",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#FF3A44"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#C31162"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "d",
        x1: "10.294",
        y1: "9.692",
        x2: "17.257",
        y2: "16.495",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#32A071"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".069",
          stopColor: "#2DA771"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".476",
          stopColor: "#15CF74"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".801",
          stopColor: "#06E775"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#00F076"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "e",
        x1: "25.075",
        y1: "27.135",
        x2: "13.487",
        y2: "39.297",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#CC2E36"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#9C0E4E"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "f",
        x1: "32.639",
        y1: "21.999",
        x2: "12.589",
        y2: "21.999",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#E0C500"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".409",
          stopColor: "#E0A600"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".775",
          stopColor: "#E09100"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#E08900"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "g",
        x1: "32.639",
        y1: "22.001",
        x2: "12.59",
        y2: "22.001",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#FFE840"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".409",
          stopColor: "#FFCE40"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".775",
          stopColor: "#FFBC40"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#FFB540"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "h",
        x1: "10.367",
        y1: "12.006",
        x2: "15.541",
        y2: "17.437",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#65B895"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".069",
          stopColor: "#62BD95"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".476",
          stopColor: "#50DB97"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".801",
          stopColor: "#44ED98"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#40F498"
        })]
      })]
    })]
  }));
};

Google.defaultProps = {
  width: "145",
  height: "44",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};





const Billing = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
  id: "product",
  className: style.layout.sectionReverse,
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: style.layout.sectionImgReverse,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[100%] h-[100%] relative z-[5]",
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: building_facility
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
    })]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: style.layout.sectionInfo,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      className: style["default"].heading2,
      children: ["Easily control with your ", /*#__PURE__*/jsx_runtime_.jsx("br", {
        className: "sm:block hidden"
      }), " Web & Mobile Phone"]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: `${style["default"].paragraph} max-w-[470px] mt-5`,
      children: "You can use our service with your Web and also mobile phone. Espacially, mobile environment will gives you a great efficiency to do your work."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-row flex-wrap sm:mt-10 mt-6",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx(Apple, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[144.17px] h-[43.08px] object-contain cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx(Google, {})
      })]
    })]
  })]
});

/* harmony default export */ const components_Billing = (Billing);
;// CONCATENATED MODULE: ./src/components/CardDeal.jsx






const CardDeal = () => /*#__PURE__*/_jsxs("section", {
  className: layout.section,
  children: [/*#__PURE__*/_jsxs("div", {
    className: layout.sectionInfo,
    children: [/*#__PURE__*/_jsxs("h2", {
      className: styles.heading2,
      children: ["Find a better card deal ", /*#__PURE__*/_jsx("br", {
        className: "sm:block hidden"
      }), " in few easy steps."]
    }), /*#__PURE__*/_jsx("p", {
      className: `${styles.paragraph} max-w-[470px] mt-5`,
      children: "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.\xE7 Aliquet ultrices ac, ametau."
    }), /*#__PURE__*/_jsx(Button, {
      styles: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`
    })]
  }), /*#__PURE__*/_jsx("div", {
    className: layout.sectionImg,
    children: /*#__PURE__*/_jsx("img", {
      src: card,
      alt: "billing",
      className: "w-[100%] h-[100%]"
    })
  })]
});

/* harmony default export */ const components_CardDeal = ((/* unused pure expression or super */ null && (CardDeal)));
;// CONCATENATED MODULE: ./src/components/Business.jsx
function Business_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Business_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Business_ownKeys(Object(source), !0).forEach(function (key) { Business_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Business_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Business_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const FeatureCard = ({
  icon,
  title,
  content,
  index
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: `flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`,
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `w-[64px] h-[64px] rounded-full ${style["default"].flexCenter} bg-dimBlue`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-[50%] h-[50%] object-contain",
      children: icon
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex-1 flex flex-col ml-3",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px]",
      children: content
    })]
  })]
});

const Business = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
  id: "features",
  className: style.layout.section,
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: style.layout.sectionInfo,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      className: style["default"].heading2,
      children: ["Make your own procedure template. ", /*#__PURE__*/jsx_runtime_.jsx("br", {
        className: "sm:block hidden"
      }), " It will gives you efficiency."]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: `${style["default"].paragraph} max-w-[470px] mt-5`,
      children: "With the DX Maintenance, you can improve your management by creating procedure template, work orders."
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Button, {
      styles: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${style.layout.sectionImg} flex-col`,
    children: features.map((feature, index) => /*#__PURE__*/jsx_runtime_.jsx(FeatureCard, Business_objectSpread(Business_objectSpread({}, feature), {}, {
      index: index
    }), feature.id))
  })]
});

/* harmony default export */ const components_Business = (Business);
;// CONCATENATED MODULE: ./src/components/Clients.jsx




const Clients = () => /*#__PURE__*/_jsx("section", {
  className: `${styles.flexCenter} my-4`,
  children: /*#__PURE__*/_jsx("div", {
    className: `${styles.flexCenter} flex-wrap w-full`,
    children: clients.map(client => /*#__PURE__*/_jsx("div", {
      className: `flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`,
      children: /*#__PURE__*/_jsx("img", {
        src: client.logo,
        alt: "client_logo",
        className: "sm:w-[192px] w-[100px] object-contain"
      })
    }, client.id))
  })
});

/* harmony default export */ const components_Clients = ((/* unused pure expression or super */ null && (Clients)));
;// CONCATENATED MODULE: ./src/components/CTA.jsx






const CTA = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
  className: `${style["default"].flexCenter} ${style["default"].marginY} ${style["default"].padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`,
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex-1 flex flex-col",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: style["default"].heading2,
      children: "Let\u2019s try our service now!"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: `${style["default"].paragraph} max-w-[470px] mt-5`,
      children: "Stop wasting time looking for gear or figuring out who\u2019s using it. All your information is stored and updated in our solution."
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${style["default"].flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`,
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/auth/login",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Button, {
          styles: `py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`
        })
      })
    })
  })]
});

/* harmony default export */ const components_CTA = (CTA);
;// CONCATENATED MODULE: ./src/components/Stats.jsx





const Stats = () => /*#__PURE__*/jsx_runtime_.jsx("section", {
  className: `${style["default"].flexCenter} flex-row flex-wrap sm:mb-20 mb-6`,
  children: stats.map(stat => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `flex-1 flex justify-start items-center flex-row m-3`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white",
      children: stat.value
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3",
      children: stat.title
    })]
  }, stat.id))
});

/* harmony default export */ const components_Stats = (Stats);
;// CONCATENATED MODULE: ./src/components/Footer.jsx







const Footer = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
  className: `${style["default"].flexCenter} ${style["default"].paddingY} flex-col`,
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${style["default"].flexStart} md:flex-row flex-col mb-8 w-full`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-[1] flex flex-col justify-start mr-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[266px] h-[72.14px] object-contain",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: logo
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: `${style["default"].paragraph} mt-4 max-w-[312px]`,
        children: "A new way to manage your facilities easy, reliable and secure."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10",
      children: footerLinks.map(footerlink => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `flex flex-col ss:my-0 my-4 min-w-[150px]`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "font-poppins font-medium text-[18px] leading-[27px] text-white",
          children: footerlink.title
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "list-none mt-4",
          children: footerlink.links.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: `font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${link.link}`,
              children: link.name
            })
          }, link.name))
        })]
      }, footerlink.title))
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]",
    children: /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-poppins font-normal text-center text-[18px] leading-[27px] text-white",
      children: "Copyright \u24B8 2022 Gractor. All Rights Reserved."
    })
  })]
});

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/FeedbackCard.jsx
function FeedbackCard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function FeedbackCard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? FeedbackCard_ownKeys(Object(source), !0).forEach(function (key) { FeedbackCard_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : FeedbackCard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function FeedbackCard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Quotes = function Quotes(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", FeedbackCard_objectSpread(FeedbackCard_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m11.798 27.6 7.2-27.6h-6.6l-12 27.6h11.4Zm24 0 7.2-27.6h-6.6l-12 27.6h11.4Z",
      fill: "url(#a)"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "a",
        x1: "28.861",
        y1: "-24.797",
        x2: "41.794",
        y2: "24.147",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".009",
          stopColor: "#DEF9FA"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".172",
          stopColor: "#BEF3F5"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".42",
          stopColor: "#9DEDF0"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".551",
          stopColor: "#7DE7EB"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: ".715",
          stopColor: "#5CE1E6"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: "1",
          stopColor: "#33BBCF"
        })]
      })
    })]
  }));
};

Quotes.defaultProps = {
  width: "43",
  height: "28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const FeedbackCard = ({
  content,
  name,
  title,
  img
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-[42.6px] h-[27.6px] object-contain",
    alt: "double_quotes",
    children: /*#__PURE__*/jsx_runtime_.jsx(Quotes, {})
  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
    className: "font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10",
    children: content
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-row",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      alt: name,
      className: "w-[48px] h-[48px] rounded-full",
      children: img
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col ml-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "font-poppins font-semibold text-[20px] leading-[32px] text-white",
        children: name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "font-poppins font-normal text-[16px] leading-[24px] text-dimWhite",
        children: title
      })]
    })]
  })]
});

/* harmony default export */ const components_FeedbackCard = (FeedbackCard);
;// CONCATENATED MODULE: ./src/components/Testimonials.jsx
function Testimonials_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Testimonials_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Testimonials_ownKeys(Object(source), !0).forEach(function (key) { Testimonials_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Testimonials_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Testimonials_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Testimonials = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
  id: "clients",
  className: `${style["default"].paddingY} ${style["default"].flexCenter} flex-col relative `,
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      className: style["default"].heading2,
      children: ["Here's our Customer. ", /*#__PURE__*/jsx_runtime_.jsx("br", {
        className: "sm:block hidden"
      }), " They talk about us"]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full md:mt-0 mt-6",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: `${style["default"].paragraph} text-left max-w-[450px]`,
        children: "After using our service, many customers leave a comment for us. Let's take a look."
      })
    })]
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]",
    children: feedback.map(card => /*#__PURE__*/jsx_runtime_.jsx(components_FeedbackCard, Testimonials_objectSpread({}, card), card.id))
  })]
});

/* harmony default export */ const components_Testimonials = (Testimonials);
;// CONCATENATED MODULE: ./src/components/GetStarted.jsx
function GetStarted_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function GetStarted_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GetStarted_ownKeys(Object(source), !0).forEach(function (key) { GetStarted_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GetStarted_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function GetStarted_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ArrowUp = function ArrowUp(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", GetStarted_objectSpread(GetStarted_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.99 15.261a.719.719 0 0 1 .018-.944l.07-.068 11.012-9.24a.719.719 0 0 1 .995 1.033l-.07.068-11.013 9.24a.719.719 0 0 1-1.012-.088Z",
      fill: "#fff"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M8.339 5.58a.719.719 0 0 1 .015-1.434l.107.001 8.152.696c.36.03.636.323.657.673l-.002.107-.73 8.15a.719.719 0 0 1-1.434-.022l.002-.106.665-7.431L8.34 5.58Z",
      fill: "#fff"
    })]
  }));
};

ArrowUp.defaultProps = {
  width: "22",
  height: "21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const GetStarted = () => /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: `${style["default"].flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`,
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${style["default"].flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${style["default"].flexStart} flex-row`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "font-poppins font-medium text-[18px] leading-[23.4px]",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-gradient",
          children: "Get"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[23px] h-[23px] object-contain",
        alt: "arrow-up",
        children: /*#__PURE__*/jsx_runtime_.jsx(ArrowUp, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "font-poppins font-medium text-[18px] leading-[23.4px]",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-gradient",
        children: "Started"
      })
    })]
  })
});

/* harmony default export */ const components_GetStarted = (GetStarted);
;// CONCATENATED MODULE: ./src/components/Hero.jsx







const Hero = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "home",
    className: `flex md:flex-row flex-col ${style["default"].paddingY}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `flex-1 ${style["default"].flexStart} flex-col xl:px-0 sm:px-16 px-6`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-row justify-between items-center w-full",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
          className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",
          children: ["Manage your", /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "sm:block hidden"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-gradient",
            children: "Facilities"
          }), " "]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full",
        children: "Efficiently"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: `${style["default"].paragraph} max-w-[470px] mt-5`,
        children: ["DX Maintenance is the brand new solution to manage your facilities and assets. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "DX Maintenance gives every Maintenance and Reliability team the tools and information they need to run Operations efficiently and effectively."]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `flex-1 flex ${style["default"].flexCenter} md:my-0 my-10 relative`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-[100%] h-[100%] relative z-[5]",
        alt: "billing",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: vision
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `ss:hidden ${style["default"].flexCenter}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_GetStarted, {})
    })]
  });
};

/* harmony default export */ const components_Hero = (Hero);
;// CONCATENATED MODULE: ./src/components/index.js











;// CONCATENATED MODULE: ./src/pages/App.js





const App = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "bg-primary w-full overflow-hidden",
  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `${style["default"].paddingX} ${style["default"].flexCenter}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${style["default"].boxWidth}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {})
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `bg-primary ${style["default"].flexStart}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${style["default"].boxWidth}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Hero, {})
    })
  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `bg-primary ${style["default"].paddingX} ${style["default"].flexCenter}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${style["default"].boxWidth}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Stats, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Business, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Billing, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Testimonials, {}), /*#__PURE__*/jsx_runtime_.jsx(components_CTA, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
    })
  })]
});

/* harmony default export */ const pages_App = (App);

/***/ }),

/***/ 8293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6"
};
const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);

/***/ })

};
;