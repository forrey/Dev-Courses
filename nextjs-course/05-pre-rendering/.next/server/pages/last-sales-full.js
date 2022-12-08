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
exports.id = "pages/last-sales-full";
exports.ids = ["pages/last-sales-full"];
exports.modules = {

/***/ "./pages/last-sales-full.js":
/*!**********************************!*\
  !*** ./pages/last-sales-full.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction LastSalesPage(props) {\n    const [salesData, setSalesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sales);\n    // const [isLoading, setIsLoading] = useState(false);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\", (url)=>fetch(url).then((res)=>res.json()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            const transformedSales = [];\n            for(const key in data){\n                transformedSales.push({\n                    id: key,\n                    username: data[key].username,\n                    volume: data[key].volume\n                });\n            }\n            setSalesData(transformedSales);\n        }\n    }, [\n        data\n    ]);\n    if (!data && !salesData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-full.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Failed to Load\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-full.js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: salesData.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.volume\n                ]\n            }, sale.id, true, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-full.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-full.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    const response = await fetch(\"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\");\n    const data = await response.json();\n    const transformedSales = [];\n    for(const key in data){\n        transformedSales.push({\n            id: key,\n            username: data[key].username,\n            volume: data[key].volume\n        });\n    }\n    return {\n        props: {\n            sales: transformedSales\n        },\n        revalidate: 10\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLWZ1bGwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ25CO0FBRXpCLFNBQVNHLGNBQWNDLEtBQUssRUFBRTtJQUM1QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUNHLE1BQU1HLEtBQUs7SUFDdEQscURBQXFEO0lBRXJELE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1AsK0NBQU1BLENBQzVCLHlFQUNBLENBQUNRLE1BQVFDLE1BQU1ELEtBQUtFLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRzVDZCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsTUFBTTtZQUNSLE1BQU1PLG1CQUFtQixFQUFFO1lBRTNCLElBQUssTUFBTUMsT0FBT1IsS0FBTTtnQkFDdEJPLGlCQUFpQkUsSUFBSSxDQUFDO29CQUNwQkMsSUFBSUY7b0JBQ0pHLFVBQVVYLElBQUksQ0FBQ1EsSUFBSSxDQUFDRyxRQUFRO29CQUM1QkMsUUFBUVosSUFBSSxDQUFDUSxJQUFJLENBQUNJLE1BQU07Z0JBQzFCO1lBQ0Y7WUFDQWQsYUFBYVM7UUFDZixDQUFDO0lBQ0gsR0FBRztRQUFDUDtLQUFLO0lBRVQsSUFBSSxDQUFDQSxRQUFRLENBQUNILFdBQVc7UUFDdkIscUJBQU8sOERBQUNnQjtzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELElBQUlaLE9BQU87UUFDVCxxQkFBTyw4REFBQ1k7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7a0JBQ0VqQixVQUFVa0IsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDQzs7b0JBQ0VELEtBQUtMLFFBQVE7b0JBQUM7b0JBQUtLLEtBQUtKLE1BQU07O2VBRHhCSSxLQUFLTixFQUFFOzs7Ozs7Ozs7O0FBTXhCO0FBRU8sZUFBZVEsaUJBQWlCO0lBQ3JDLE1BQU1DLFdBQVcsTUFBTWhCLE1BQ3JCO0lBR0YsTUFBTUgsT0FBTyxNQUFNbUIsU0FBU2IsSUFBSTtJQUVoQyxNQUFNQyxtQkFBbUIsRUFBRTtJQUUzQixJQUFLLE1BQU1DLE9BQU9SLEtBQU07UUFDdEJPLGlCQUFpQkUsSUFBSSxDQUFDO1lBQ3BCQyxJQUFJRjtZQUNKRyxVQUFVWCxJQUFJLENBQUNRLElBQUksQ0FBQ0csUUFBUTtZQUM1QkMsUUFBUVosSUFBSSxDQUFDUSxJQUFJLENBQUNJLE1BQU07UUFDMUI7SUFDRjtJQUVBLE9BQU87UUFBRWhCLE9BQU87WUFBRUcsT0FBT1E7UUFBaUI7UUFBR2EsWUFBWTtJQUFHO0FBQzlELENBQUM7QUFFRCxpRUFBZXpCLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNS1wcmUtcmVuZGVyaW5nLy4vcGFnZXMvbGFzdC1zYWxlcy1mdWxsLmpzPzUyMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UocHJvcHMpIHtcbiAgY29uc3QgW3NhbGVzRGF0YSwgc2V0U2FsZXNEYXRhXSA9IHVzZVN0YXRlKHByb3BzLnNhbGVzKTtcbiAgLy8gY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL25leHRqcy01LXByZS1yZW5kZXJpbmctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIixcbiAgICAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gICAgICAgICAgdm9sdW1lOiBkYXRhW2tleV0udm9sdW1lLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHNldFNhbGVzRGF0YSh0cmFuc2Zvcm1lZFNhbGVzKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG5cbiAgaWYgKCFkYXRhICYmICFzYWxlc0RhdGEpIHtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8aDE+RmFpbGVkIHRvIExvYWQ8L2gxPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NhbGVzRGF0YS5tYXAoKHNhbGUpID0+IChcbiAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAge3NhbGUudXNlcm5hbWV9IC0gJHtzYWxlLnZvbHVtZX1cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vbmV4dGpzLTUtcHJlLXJlbmRlcmluZy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vc2FsZXMuanNvblwiXG4gICk7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICBpZDoga2V5LFxuICAgICAgdXNlcm5hbWU6IGRhdGFba2V5XS51c2VybmFtZSxcbiAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHByb3BzOiB7IHNhbGVzOiB0cmFuc2Zvcm1lZFNhbGVzIH0sIHJldmFsaWRhdGU6IDEwIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJMYXN0U2FsZXNQYWdlIiwicHJvcHMiLCJzYWxlc0RhdGEiLCJzZXRTYWxlc0RhdGEiLCJzYWxlcyIsImRhdGEiLCJlcnJvciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0cmFuc2Zvcm1lZFNhbGVzIiwia2V5IiwicHVzaCIsImlkIiwidXNlcm5hbWUiLCJ2b2x1bWUiLCJoMSIsInVsIiwibWFwIiwic2FsZSIsImxpIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXNwb25zZSIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales-full.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/last-sales-full.js"));
module.exports = __webpack_exports__;

})();