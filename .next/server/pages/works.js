"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 4330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ articles),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8904);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2469);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_1__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/** @format */ 

const dir = "articles";
const getStaticProps = async ()=>{
    const allPostsData = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__/* .getSortedPostsData */ .l)(dir);
    const postContent = [];
    for(let i = 0; i < allPostsData.length; i++){
        var temp = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__/* .getPostData */ .A)(dir, allPostsData[i].id);
        postContent[i] = temp;
    }
    return {
        props: {
            allPostsData: allPostsData,
            postContent: postContent
        }
    };
};
function articles({ allPostsData , postContent  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        allPostsData: allPostsData,
        postContent: postContent
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1871:
/***/ ((module) => {

module.exports = import("rehype-raw");;

/***/ }),

/***/ 5390:
/***/ ((module) => {

module.exports = import("rehype-stringify");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [889], () => (__webpack_exec__(4330)));
module.exports = __webpack_exports__;

})();