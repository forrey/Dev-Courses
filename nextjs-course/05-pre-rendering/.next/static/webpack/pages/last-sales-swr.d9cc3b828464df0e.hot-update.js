"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/last-sales-swr",{

/***/ "./pages/last-sales-swr.js":
/*!*********************************!*\
  !*** ./pages/last-sales-swr.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LastSalesPage() {\n    _s();\n    const [salesData, setSalesData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [isLoading, setIsLoading] = useState(false);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\", (url)=>fetch(url).then((res)=>res.json()));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            const transformedSales = [];\n            for(const key in data){\n                transformedSales.push({\n                    id: key,\n                    username: data[key].username,\n                    volume: data[key].volume\n                });\n            }\n            setSalesData(transformedSales);\n        }\n    }, [\n        data\n    ]);\n    // useEffect(() => {\n    //   setIsLoading(true);\n    //   fetch(\n    //     \"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\"\n    //   )\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       const transformedSales = [];\n    //       for (const key in data) {\n    //         transformedSales.push({\n    //           id: key,\n    //           username: data[key].username,\n    //           volume: data[key].volume,\n    //         });\n    //       }\n    //       setSalesData(transformedSales);\n    //       setIsLoading(false);\n    //     });\n    // }, []);\n    if (!data || !salesData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Failed to Load\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n            lineNumber: 55,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: salesData.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - $\",\n                    sale.volume\n                ]\n            }, sale.id, true, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"Vr3a+m6eU96VGjVFzjSh8ViV2D4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLXN3ci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBNEM7QUFDbkI7QUFFekIsU0FBU0csZ0JBQWdCOztJQUN2QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBO0lBQzFDLHFEQUFxRDtJQUVyRCxNQUFNLEVBQUVLLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdMLCtDQUFNQSxDQUM1Qix5RUFDQSxDQUFDTSxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUc1Q1osZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLE1BQU07WUFDUixNQUFNTyxtQkFBbUIsRUFBRTtZQUUzQixJQUFLLE1BQU1DLE9BQU9SLEtBQU07Z0JBQ3RCTyxpQkFBaUJFLElBQUksQ0FBQztvQkFDcEJDLElBQUlGO29CQUNKRyxVQUFVWCxJQUFJLENBQUNRLElBQUksQ0FBQ0csUUFBUTtvQkFDNUJDLFFBQVFaLElBQUksQ0FBQ1EsSUFBSSxDQUFDSSxNQUFNO2dCQUMxQjtZQUNGO1lBQ0FiLGFBQWFRO1FBQ2YsQ0FBQztJQUNILEdBQUc7UUFBQ1A7S0FBSztJQUNULG9CQUFvQjtJQUNwQix3QkFBd0I7SUFFeEIsV0FBVztJQUNYLDhFQUE4RTtJQUM5RSxNQUFNO0lBQ04sMkNBQTJDO0lBQzNDLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFFckMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsMENBQTBDO0lBQzFDLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsVUFBVTtJQUVWLHdDQUF3QztJQUN4Qyw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFVBQVU7SUFFVixJQUFJLENBQUNBLFFBQVEsQ0FBQ0YsV0FBVztRQUN2QixxQkFBTyw4REFBQ2U7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFFRCxJQUFJWixPQUFPO1FBQ1QscUJBQU8sOERBQUNZO3NCQUFHOzs7Ozs7SUFDYixDQUFDO0lBRUQscUJBQ0UsOERBQUNDO2tCQUNFaEIsVUFBVWlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ0M7O29CQUNFRCxLQUFLTCxRQUFRO29CQUFDO29CQUFLSyxLQUFLSixNQUFNOztlQUR4QkksS0FBS04sRUFBRTs7Ozs7Ozs7OztBQU14QjtHQS9EU2I7O1FBSWlCRCwyQ0FBTUE7OztLQUp2QkM7QUFpRVQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy1zd3IuanM/MmNmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZnVuY3Rpb24gTGFzdFNhbGVzUGFnZSgpIHtcbiAgY29uc3QgW3NhbGVzRGF0YSwgc2V0U2FsZXNEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtNS1wcmUtcmVuZGVyaW5nLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCIsXG4gICAgKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZXRTYWxlc0RhdGEodHJhbnNmb3JtZWRTYWxlcyk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgIGZldGNoKFxuICAvLyAgICAgXCJodHRwczovL25leHRqcy01LXByZS1yZW5kZXJpbmctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIlxuICAvLyAgIClcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gIC8vICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgLy8gICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAvLyAgICAgICAgICAgaWQ6IGtleSxcbiAgLy8gICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gIC8vICAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzZXRTYWxlc0RhdGEodHJhbnNmb3JtZWRTYWxlcyk7XG4gIC8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gfSwgW10pO1xuXG4gIGlmICghZGF0YSB8fCAhc2FsZXNEYXRhKSB7XG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGgxPkZhaWxlZCB0byBMb2FkPC9oMT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtzYWxlc0RhdGEubWFwKChzYWxlKSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e3NhbGUuaWR9PlxuICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtICR7c2FsZS52b2x1bWV9XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwiTGFzdFNhbGVzUGFnZSIsInNhbGVzRGF0YSIsInNldFNhbGVzRGF0YSIsImRhdGEiLCJlcnJvciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0cmFuc2Zvcm1lZFNhbGVzIiwia2V5IiwicHVzaCIsImlkIiwidXNlcm5hbWUiLCJ2b2x1bWUiLCJoMSIsInVsIiwibWFwIiwic2FsZSIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales-swr.js\n"));

/***/ })

});