"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/events/EventList */ \"./components/events/EventList.js\");\n/* harmony import */ var _components_events_ResultsTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/ResultsTitle */ \"./components/events/ResultsTitle.js\");\n/* harmony import */ var _components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/ErrorAlert */ \"./components/ui/ErrorAlert.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const filterData = router.query.slug;\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"https://nextjs-6-events-project-default-rtdb.firebaseio.com/events.json\", (url)=>fetch(url).then((res)=>res.json()));\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        if (!data) {\n            const data1 = response.json();\n            const events = [];\n            for(const key in data1){\n                events.push({\n                    id: key,\n                    ...data1[key]\n                });\n            }\n            return events;\n        }\n    }, [\n        data\n    ]);\n    if (!filterData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, this);\n    }\n    if (props.hasError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Invalid search, please try again\"\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this);\n    }\n    const date = new Date(props.date.year, props.date.month - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_ResultsTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                date: date\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_EventList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: props.events\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(FilteredEventsPage, \"ueaSG3dFe54Zrjg9PlhqkDW4vec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = FilteredEventsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEventsPage);\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ2tCO0FBRU07QUFDUjtBQUMvQjtBQUNtQjtBQUU1QyxTQUFTTyxtQkFBbUJDLEtBQUssRUFBRTs7SUFDakMsTUFBTUMsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU1VLGFBQWFELE9BQU9FLEtBQUssQ0FBQ0MsSUFBSTtJQUVwQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdWLCtDQUFNQSxDQUM1QiwyRUFDQSxDQUFDVyxNQUFRQyxNQUFNRCxLQUFLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUc1Q2IsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ08sTUFBTTtZQUNULE1BQU1BLFFBQU9PLFNBQVNELElBQUk7WUFFMUIsTUFBTUUsU0FBUyxFQUFFO1lBRWpCLElBQUssTUFBTUMsT0FBT1QsTUFBTTtnQkFDdEJRLE9BQU9FLElBQUksQ0FBQztvQkFDVkMsSUFBSUY7b0JBQ0osR0FBR1QsS0FBSSxDQUFDUyxJQUFJO2dCQUNkO1lBQ0Y7WUFFQSxPQUFPRDtRQUNULENBQUM7SUFDSCxHQUFHO1FBQUNSO0tBQUs7SUFFVCxJQUFJLENBQUNILFlBQVk7UUFDZixxQkFBTyw4REFBQ2U7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFFRCxJQUFJakIsTUFBTWtCLFFBQVEsRUFBRTtRQUNsQixxQkFDRSw4REFBQ3ZCLGlFQUFVQTtzQkFDVCw0RUFBQ3NCOzBCQUFFOzs7Ozs7Ozs7OztJQUdULENBQUM7SUFFRCxNQUFNRSxPQUFPLElBQUlDLEtBQUtwQixNQUFNbUIsSUFBSSxDQUFDRSxJQUFJLEVBQUVyQixNQUFNbUIsSUFBSSxDQUFDRyxLQUFLLEdBQUc7SUFFMUQscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQzdCLHVFQUFZQTtnQkFBQ3lCLE1BQU1BOzs7Ozs7MEJBQ3BCLDhEQUFDMUIsb0VBQVNBO2dCQUFDK0IsT0FBT3hCLE1BQU1hLE1BQU07Ozs7Ozs7Ozs7OztBQUdwQztHQS9DU2Q7O1FBQ1FQLGtEQUFTQTtRQUlBSSwyQ0FBTUE7OztLQUx2Qkc7O0FBeUZULCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzL1suLi5zbHVnXS5qcz81MjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEV2ZW50TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvRXZlbnRMaXN0XCI7XG5pbXBvcnQgeyBnZXRGaWx0ZXJlZEV2ZW50cyB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsc1wiO1xuaW1wb3J0IFJlc3VsdHNUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ldmVudHMvUmVzdWx0c1RpdGxlXCI7XG5pbXBvcnQgRXJyb3JBbGVydCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9FcnJvckFsZXJ0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gRmlsdGVyZWRFdmVudHNQYWdlKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGZpbHRlckRhdGEgPSByb3V0ZXIucXVlcnkuc2x1ZztcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgXCJodHRwczovL25leHRqcy02LWV2ZW50cy1wcm9qZWN0LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9ldmVudHMuanNvblwiLFxuICAgICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBjb25zdCBldmVudHMgPSBbXTtcblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICBldmVudHMucHVzaCh7XG4gICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAuLi5kYXRhW2tleV0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZlbnRzO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBpZiAoIWZpbHRlckRhdGEpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZzwvcD47XG4gIH1cblxuICBpZiAocHJvcHMuaGFzRXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQWxlcnQ+XG4gICAgICAgIDxwPkludmFsaWQgc2VhcmNoLCBwbGVhc2UgdHJ5IGFnYWluPC9wPlxuICAgICAgPC9FcnJvckFsZXJ0PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUocHJvcHMuZGF0ZS55ZWFyLCBwcm9wcy5kYXRlLm1vbnRoIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlfSAvPlxuICAgICAgPEV2ZW50TGlzdCBpdGVtcz17cHJvcHMuZXZlbnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IGZpbHRlckRhdGEgPSBwYXJhbXMuc2x1ZztcblxuICBjb25zdCBmaWx0ZXJZZWFyID0gK2ZpbHRlckRhdGFbMF07XG4gIGNvbnN0IGZpbHRlck1vbnRoID0gK2ZpbHRlckRhdGFbMV07XG5cbiAgaWYgKFxuICAgIGlzTmFOKGZpbHRlclllYXIpIHx8XG4gICAgaXNOYU4oZmlsdGVyTW9udGgpIHx8XG4gICAgZmlsdGVyWWVhciA+IDIwMzAgfHxcbiAgICBmaWx0ZXJZZWFyIDwgMjAyMSB8fFxuICAgIGZpbHRlck1vbnRoIDwgMSB8fFxuICAgIGZpbHRlck1vbnRoID4gMTJcbiAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGhhc0Vycm9yOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZmlsdGVyZWRFdmVudHMgPSBhd2FpdCBnZXRGaWx0ZXJlZEV2ZW50cyh7XG4gICAgeWVhcjogZmlsdGVyWWVhcixcbiAgICBtb250aDogZmlsdGVyTW9udGgsXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGUgPSB7IHllYXI6IGZpbHRlclllYXIsIG1vbnRoOiBmaWx0ZXJNb250aCB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGV2ZW50czogZmlsdGVyZWRFdmVudHMsXG4gICAgICBkYXRlOiB7XG4gICAgICAgIHllYXI6IGZpbHRlclllYXIsXG4gICAgICAgIG1vbnRoOiBmaWx0ZXJNb250aCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyZWRFdmVudHNQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkV2ZW50TGlzdCIsIlJlc3VsdHNUaXRsZSIsIkVycm9yQWxlcnQiLCJ1c2VTV1IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZpbHRlcmVkRXZlbnRzUGFnZSIsInByb3BzIiwicm91dGVyIiwiZmlsdGVyRGF0YSIsInF1ZXJ5Iiwic2x1ZyIsImRhdGEiLCJlcnJvciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsImV2ZW50cyIsImtleSIsInB1c2giLCJpZCIsInAiLCJoYXNFcnJvciIsImRhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGl2IiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});