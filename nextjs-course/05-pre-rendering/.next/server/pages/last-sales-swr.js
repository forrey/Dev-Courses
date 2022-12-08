"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/last-sales-swr";
exports.ids = ["pages/last-sales-swr"];
exports.modules = {

/***/ "./pages/last-sales-swr.js":
/*!*********************************!*\
  !*** ./pages/last-sales-swr.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction LastSalesPage() {\n    const [salesData, setSalesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [isLoading, setIsLoading] = useState(false);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\", (url)=>fetch(url).then((res)=>res.json()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            const transformedSales = [];\n            for(const key in data){\n                transformedSales.push({\n                    id: key,\n                    username: data[key].username,\n                    volume: data[key].volume\n                });\n            }\n            setSalesData(transformedSales);\n        }\n    }, [\n        data\n    ]);\n    if (!data || !salesData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Failed to Load\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: salesData.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.volume\n                ]\n            }, sale.id, true, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLXN3ci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNuQjtBQUV6QixTQUFTRyxnQkFBZ0I7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQTtJQUMxQyxxREFBcUQ7SUFFckQsTUFBTSxFQUFFSyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHTCwrQ0FBTUEsQ0FDNUIseUVBQ0EsQ0FBQ00sTUFBUUMsTUFBTUQsS0FBS0UsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFHNUNaLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJTSxNQUFNO1lBQ1IsTUFBTU8sbUJBQW1CLEVBQUU7WUFFM0IsSUFBSyxNQUFNQyxPQUFPUixLQUFNO2dCQUN0Qk8saUJBQWlCRSxJQUFJLENBQUM7b0JBQ3BCQyxJQUFJRjtvQkFDSkcsVUFBVVgsSUFBSSxDQUFDUSxJQUFJLENBQUNHLFFBQVE7b0JBQzVCQyxRQUFRWixJQUFJLENBQUNRLElBQUksQ0FBQ0ksTUFBTTtnQkFDMUI7WUFDRjtZQUNBYixhQUFhUTtRQUNmLENBQUM7SUFDSCxHQUFHO1FBQUNQO0tBQUs7SUFFVCxJQUFJLENBQUNBLFFBQVEsQ0FBQ0YsV0FBVztRQUN2QixxQkFBTyw4REFBQ2U7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFFRCxJQUFJWixPQUFPO1FBQ1QscUJBQU8sOERBQUNZO3NCQUFHOzs7Ozs7SUFDYixDQUFDO0lBRUQscUJBQ0UsOERBQUNDO2tCQUNFaEIsVUFBVWlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ0M7O29CQUNFRCxLQUFLTCxRQUFRO29CQUFDO29CQUFLSyxLQUFLSixNQUFNOztlQUR4QkksS0FBS04sRUFBRTs7Ozs7Ozs7OztBQU14QjtBQUVBLGlFQUFlYixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDUtcHJlLXJlbmRlcmluZy8uL3BhZ2VzL2xhc3Qtc2FsZXMtc3dyLmpzPzJjZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKSB7XG4gIGNvbnN0IFtzYWxlc0RhdGEsIHNldFNhbGVzRGF0YV0gPSB1c2VTdGF0ZSgpO1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBcImh0dHBzOi8vbmV4dGpzLTUtcHJlLXJlbmRlcmluZy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiLFxuICAgICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkU2FsZXMgPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2V0U2FsZXNEYXRhKHRyYW5zZm9ybWVkU2FsZXMpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBpZiAoIWRhdGEgfHwgIXNhbGVzRGF0YSkge1xuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxoMT5GYWlsZWQgdG8gTG9hZDwvaDE+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7c2FsZXNEYXRhLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSAke3NhbGUudm9sdW1lfVxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsIkxhc3RTYWxlc1BhZ2UiLCJzYWxlc0RhdGEiLCJzZXRTYWxlc0RhdGEiLCJkYXRhIiwiZXJyb3IiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwidHJhbnNmb3JtZWRTYWxlcyIsImtleSIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwiaDEiLCJ1bCIsIm1hcCIsInNhbGUiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales-swr.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/last-sales-swr.js"));
module.exports = __webpack_exports__;

})();