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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_events_EventList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/events/EventList */ \"./components/events/EventList.js\");\n/* harmony import */ var _components_events_ResultsTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/events/ResultsTitle */ \"./components/events/ResultsTitle.js\");\n/* harmony import */ var _components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/ErrorAlert */ \"./components/ui/ErrorAlert.js\");\n\n\n\n\n\nfunction FilteredEventsPage(props) {\n    if (props.hasError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_ErrorAlert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Invalid search, please try again\"\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this);\n    }\n    /*\n  const filteredEvents = getFilteredEvents(dateFilter);\n\n  if (!filteredEvents || filteredEvents.length == 0) {\n    return (\n      <ErrorAlert>\n        <p>No events found!</p>\n      </ErrorAlert>\n    );\n  }\n      \n<ResultsTitle date={props.date} />\n  const date = new Date(dateFilter.year, dateFilter.month - 1);*/ const dateForTitle = new Date(props.date);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_ResultsTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                date: dateForTitle\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_EventList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: props.events\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/06-events-project/pages/events/[...slug].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = FilteredEventsPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilteredEventsPage);\nvar _c;\n$RefreshReg$(_c, \"FilteredEventsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDa0I7QUFHTTtBQUNSO0FBRXhELFNBQVNJLG1CQUFtQkMsS0FBSyxFQUFFO0lBQ2pDLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtRQUNsQixxQkFDRSw4REFBQ0gsaUVBQVVBO3NCQUNULDRFQUFDSTswQkFBRTs7Ozs7Ozs7Ozs7SUFHVCxDQUFDO0lBQ0Q7Ozs7Ozs7Ozs7OzsrREFZNkQsR0FFN0QsTUFBTUMsZUFBZSxJQUFJQyxLQUFLSixNQUFNSyxJQUFJO0lBRXhDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNULHVFQUFZQTtnQkFBQ1EsTUFBTUY7Ozs7OzswQkFDcEIsOERBQUNQLG9FQUFTQTtnQkFBQ1csT0FBT1AsTUFBTVEsTUFBTTs7Ozs7Ozs7Ozs7O0FBR3BDO0tBOUJTVDs7QUF3RVQsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzPzUyNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2V2ZW50cy9FdmVudExpc3RcIjtcbi8vaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tIFwiLi4vLi4vZHVtbXktZGF0YVwiO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRFdmVudHMgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGktdXRpbHNcIjtcbmltcG9ydCBSZXN1bHRzVGl0bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZXZlbnRzL1Jlc3VsdHNUaXRsZVwiO1xuaW1wb3J0IEVycm9yQWxlcnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvRXJyb3JBbGVydFwiO1xuXG5mdW5jdGlvbiBGaWx0ZXJlZEV2ZW50c1BhZ2UocHJvcHMpIHtcbiAgaWYgKHByb3BzLmhhc0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckFsZXJ0PlxuICAgICAgICA8cD5JbnZhbGlkIHNlYXJjaCwgcGxlYXNlIHRyeSBhZ2FpbjwvcD5cbiAgICAgIDwvRXJyb3JBbGVydD5cbiAgICApO1xuICB9XG4gIC8qXG4gIGNvbnN0IGZpbHRlcmVkRXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoZGF0ZUZpbHRlcik7XG5cbiAgaWYgKCFmaWx0ZXJlZEV2ZW50cyB8fCBmaWx0ZXJlZEV2ZW50cy5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JBbGVydD5cbiAgICAgICAgPHA+Tm8gZXZlbnRzIGZvdW5kITwvcD5cbiAgICAgIDwvRXJyb3JBbGVydD5cbiAgICApO1xuICB9XG4gICAgICBcbjxSZXN1bHRzVGl0bGUgZGF0ZT17cHJvcHMuZGF0ZX0gLz5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVGaWx0ZXIueWVhciwgZGF0ZUZpbHRlci5tb250aCAtIDEpOyovXG5cbiAgY29uc3QgZGF0ZUZvclRpdGxlID0gbmV3IERhdGUocHJvcHMuZGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJlc3VsdHNUaXRsZSBkYXRlPXtkYXRlRm9yVGl0bGV9IC8+XG4gICAgICA8RXZlbnRMaXN0IGl0ZW1zPXtwcm9wcy5ldmVudHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcbiAgY29uc3QgZmlsdGVyRGF0YSA9IHBhcmFtcy5zbHVnO1xuXG4gIGNvbnN0IGZpbHRlclllYXIgPSArZmlsdGVyRGF0YVswXTtcbiAgY29uc3QgZmlsdGVyTW9udGggPSArZmlsdGVyRGF0YVsxXTtcblxuICBpZiAoXG4gICAgaXNOYU4oZmlsdGVyWWVhcikgfHxcbiAgICBpc05hTihmaWx0ZXJNb250aCkgfHxcbiAgICBmaWx0ZXJZZWFyID4gMjAzMCB8fFxuICAgIGZpbHRlclllYXIgPCAyMDIxIHx8XG4gICAgZmlsdGVyTW9udGggPCAxIHx8XG4gICAgZmlsdGVyTW9udGggPiAxMlxuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaGFzRXJyb3I6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBmaWx0ZXJlZEV2ZW50cyA9IGF3YWl0IGdldEZpbHRlcmVkRXZlbnRzKHtcbiAgICB5ZWFyOiBmaWx0ZXJZZWFyLFxuICAgIG1vbnRoOiBmaWx0ZXJNb250aCxcbiAgfSk7XG5cbiAgY29uc3QgZGF0ZSA9IHsgeWVhcjogZmlsdGVyWWVhciwgbW9udGg6IGZpbHRlck1vbnRoIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZXZlbnRzOiBmaWx0ZXJlZEV2ZW50cyxcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgeWVhcjogZmlsdGVyWWVhcixcbiAgICAgICAgbW9udGg6IGZpbHRlck1vbnRoLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJlZEV2ZW50c1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRXZlbnRMaXN0IiwiUmVzdWx0c1RpdGxlIiwiRXJyb3JBbGVydCIsIkZpbHRlcmVkRXZlbnRzUGFnZSIsInByb3BzIiwiaGFzRXJyb3IiLCJwIiwiZGF0ZUZvclRpdGxlIiwiRGF0ZSIsImRhdGUiLCJkaXYiLCJpdGVtcyIsImV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});