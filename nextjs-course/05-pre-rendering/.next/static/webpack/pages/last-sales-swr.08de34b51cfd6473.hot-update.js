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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LastSalesPage() {\n    _s();\n    // const [salesData, setSalesData] = useState();\n    // const [isLoading, setIsLoading] = useState(false);\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            for(const key in data){\n                transformedSales.push({\n                    id: key,\n                    username: data[key].username,\n                    volume: data[key].volume\n                });\n            }\n        }\n    }, [\n        data\n    ]);\n    // useEffect(() => {\n    //   setIsLoading(true);\n    //   fetch(\n    //     \"https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json\"\n    //   )\n    //     .then((response) => response.json())\n    //     .then((data) => {\n    //       const transformedSales = [];\n    //       for (const key in data) {\n    //         transformedSales.push({\n    //           id: key,\n    //           username: data[key].username,\n    //           volume: data[key].volume,\n    //         });\n    //       }\n    //       setSalesData(transformedSales);\n    //       setIsLoading(false);\n    //     });\n    // }, []);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n            lineNumber: 47,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Failed to Load\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n            lineNumber: 51,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: \"Testing\"\n    }, void 0, false, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/last-sales-swr.js\",\n        lineNumber: 56,\n        columnNumber: 10\n    }, this);\n}\n_s(LastSalesPage, \"i5WvaAFDajHCNU98qq4Vb7coGq0=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLXN3ci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBNEM7QUFDbkI7QUFFekIsU0FBU0csZ0JBQWdCOztJQUN2QixnREFBZ0Q7SUFDaEQscURBQXFEO0lBRXJELE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsK0NBQU1BLENBQzVCO0lBR0ZGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSSxNQUFNO1lBQ1IsSUFBSyxNQUFNRSxPQUFPRixLQUFNO2dCQUN0QkcsaUJBQWlCQyxJQUFJLENBQUM7b0JBQ3BCQyxJQUFJSDtvQkFDSkksVUFBVU4sSUFBSSxDQUFDRSxJQUFJLENBQUNJLFFBQVE7b0JBQzVCQyxRQUFRUCxJQUFJLENBQUNFLElBQUksQ0FBQ0ssTUFBTTtnQkFDMUI7WUFDRjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNQO0tBQUs7SUFDVCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBRXhCLFdBQVc7SUFDWCw4RUFBOEU7SUFDOUUsTUFBTTtJQUNOLDJDQUEyQztJQUMzQyx3QkFBd0I7SUFDeEIscUNBQXFDO0lBRXJDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLFVBQVU7SUFFVix3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixVQUFVO0lBRVYsSUFBSSxDQUFDQSxNQUFNO1FBQ1QscUJBQU8sOERBQUNRO3NCQUFHOzs7Ozs7SUFDYixDQUFDO0lBRUQsSUFBSVAsT0FBTztRQUNULHFCQUFPLDhEQUFDTztzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVEQyxRQUFRQyxHQUFHLENBQUNWO0lBRVoscUJBQU8sOERBQUNXO2tCQUFHOzs7Ozs7QUFDYjtHQXJEU1o7O1FBSWlCRCwyQ0FBTUE7OztLQUp2QkM7QUF1RFQsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy1zd3IuanM/MmNmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZnVuY3Rpb24gTGFzdFNhbGVzUGFnZSgpIHtcbiAgLy8gY29uc3QgW3NhbGVzRGF0YSwgc2V0U2FsZXNEYXRhXSA9IHVzZVN0YXRlKCk7XG4gIC8vIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIFwiaHR0cHM6Ly9uZXh0anMtNS1wcmUtcmVuZGVyaW5nLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9zYWxlcy5qc29uXCJcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkU2FsZXMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICB1c2VybmFtZTogZGF0YVtrZXldLnVzZXJuYW1lLFxuICAgICAgICAgIHZvbHVtZTogZGF0YVtrZXldLnZvbHVtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAvLyAgIGZldGNoKFxuICAvLyAgICAgXCJodHRwczovL25leHRqcy01LXByZS1yZW5kZXJpbmctZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb25cIlxuICAvLyAgIClcbiAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gIC8vICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgLy8gICAgICAgICB0cmFuc2Zvcm1lZFNhbGVzLnB1c2goe1xuICAvLyAgICAgICAgICAgaWQ6IGtleSxcbiAgLy8gICAgICAgICAgIHVzZXJuYW1lOiBkYXRhW2tleV0udXNlcm5hbWUsXG4gIC8vICAgICAgICAgICB2b2x1bWU6IGRhdGFba2V5XS52b2x1bWUsXG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgIH1cblxuICAvLyAgICAgICBzZXRTYWxlc0RhdGEodHJhbnNmb3JtZWRTYWxlcyk7XG4gIC8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gfSwgW10pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxoMT5GYWlsZWQgdG8gTG9hZDwvaDE+O1xuICB9XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIDx1bD5UZXN0aW5nPC91bD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTV1IiLCJMYXN0U2FsZXNQYWdlIiwiZGF0YSIsImVycm9yIiwia2V5IiwidHJhbnNmb3JtZWRTYWxlcyIsInB1c2giLCJpZCIsInVzZXJuYW1lIiwidm9sdW1lIiwiaDEiLCJjb25zb2xlIiwibG9nIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales-swr.js\n"));

/***/ })

});