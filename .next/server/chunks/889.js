exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 9849:
/***/ ((module) => {

// Exports
module.exports = {
	"rowStyle": "layout_rowStyle__FCi7r",
	"containter": "layout_containter__woYaP",
	"allPortraitsList": "layout_allPortraitsList__e8sxc",
	"inactivePortraitsList": "layout_inactivePortraitsList__5z4e2",
	"pcaption": "layout_pcaption__hqFg_",
	"allContent": "layout_allContent__m3CZu",
	"postMetaData": "layout_postMetaData__Pl_EQ",
	"postContentContainer": "layout_postContentContainer__URuDk",
	"activePortrait": "layout_activePortrait__8whuq",
	"fig-align-right": "layout_fig-align-right__W9f2k",
	"fig-align-left": "layout_fig-align-left__2E5Rj"
};


/***/ }),

/***/ 1928:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY"
};


/***/ }),

/***/ 2469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9849);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1928);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

/** @format */ 



function Template({ allPostsData , postContent  }) {
    const { 0: currentPostID , 1: setCurrentPostID  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "The Age of Elegance"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Discover the culture of 19th century British Culture"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:title",
                        content: "The Age of Elegance"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().containter),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "rowStyle",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().list)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().rowStyle)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().allPortraitsList)}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().list)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().activePortrait)}`,
                                    style: {
                                        backgroundImage: `url(${allPostsData[currentPostID].image})`
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().pcaption),
                                        children: allPostsData[currentPostID].imagecap
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().list)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().rowStyle)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().inactivePortraitsList)}`,
                                    children: allPostsData.map(({ id , image , imagecover , title  }, index)=>id != allPostsData[currentPostID].id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: ()=>{
                                                setCurrentPostID(index);
                                                document.getElementById("articleContent").scrollTop = 0;
                                            },
                                            className: `${(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem)}`,
                                            style: {
                                                backgroundImage: `url(${imagecover != null ? imagecover : image})`
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                children: title
                                            })
                                        }, id) : null)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().allContent)} ${(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().rowStyle)}`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().postMetaData),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                children: allPostsData[currentPostID].title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: allPostsData[currentPostID].lifespan
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "articleNav"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                id: "articleContent",
                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().postContentContainer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: postContent[currentPostID].contentHtml
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().fade)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getPostData),
/* harmony export */   "l": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4390);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6688);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2509);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1871);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__, unified__WEBPACK_IMPORTED_MODULE_5__, remark_parse__WEBPACK_IMPORTED_MODULE_6__, remark_rehype__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_8__, rehype_stringify__WEBPACK_IMPORTED_MODULE_9__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__, unified__WEBPACK_IMPORTED_MODULE_5__, remark_parse__WEBPACK_IMPORTED_MODULE_6__, remark_rehype__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_8__, rehype_stringify__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/** @format */ 









function getSortedPostsData(dir) {
    var postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts", dir);
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData;
// .sort((a, b) => {
// 	if (a.date < b.date) {
// 		return 1;
// 	} else {
// 		return -1;
// 	}
// });
}
async function getPostData(dir, id) {
    var postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts", dir);
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_parse__WEBPACK_IMPORTED_MODULE_6__["default"]).use(remark_rehype__WEBPACK_IMPORTED_MODULE_7__["default"], {
        allowDangerousHtml: true
    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_8__["default"]) // *Parse* the raw HTML strings embedded in the tree
    .use(rehype_stringify__WEBPACK_IMPORTED_MODULE_9__["default"])// .use( html)
    .process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;