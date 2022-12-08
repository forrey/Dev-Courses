"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./components/auth/auth-form.js":
/*!**************************************!*\
  !*** ./components/auth/auth-form.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-form.module.css */ \"./components/auth/auth-form.module.css\");\n/* harmony import */ var _auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function createUser(email, password) {\n    const response = await fetch(\"/api/auth/signup\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            email,\n            password\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong...\");\n    }\n    return data;\n}\nfunction AuthForm() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const emailInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function switchAuthModeHandler() {\n        setIsLogin((prevState)=>!prevState);\n    }\n    async function submitHandler(event) {\n        event.preventDefault();\n        const enteredEmail = emailInputRef.current.value;\n        const enteredPassword = passwordInputRef.current.value;\n        if (isLogin) {\n            // Log user in\n            const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"credentials\", {\n                redirect: false,\n                email: enteredEmail,\n                password: enteredPassword\n            });\n            if (!result.error) {\n            // Do stuff\n            }\n        } else {\n            try {\n                const result1 = await createUser(enteredEmail, enteredPassword);\n                console.log(result1);\n            } catch (error) {\n                console.log(error);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().auth),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: isLogin ? \"Login\" : \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Your Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                ref: emailInputRef,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Your Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                ref: passwordInputRef,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: isLogin ? \"Login\" : \"Create Account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: (_auth_form_module_css__WEBPACK_IMPORTED_MODULE_4___default().toggle),\n                                onClick: switchAuthModeHandler,\n                                children: isLogin ? \"Create new account\" : \"Login with existing account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/auth/auth-form.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthForm, \"BO0sKlTHV+ujVALvb1bXtjxluhM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvYXV0aC1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXlDO0FBQ0E7QUFDRDtBQUNLO0FBRTdDLGVBQWVLLFdBQVdDLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3pDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQkFBb0I7UUFDL0NDLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQUVQO1lBQU9DO1FBQVM7UUFDdkNPLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtJQUVoQyxJQUFJLENBQUNSLFNBQVNTLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU1ILEtBQUtJLE9BQU8sSUFBSSwyQkFBMkI7SUFDN0QsQ0FBQztJQUVELE9BQU9KO0FBQ1Q7QUFFQSxTQUFTSyxXQUFXOztJQUNsQixNQUFNQyxTQUFTbEIsc0RBQVNBO0lBQ3hCLE1BQU1tQixnQkFBZ0JyQiw2Q0FBTUE7SUFDNUIsTUFBTXNCLG1CQUFtQnRCLDZDQUFNQTtJQUUvQixNQUFNLENBQUN1QixTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDLFNBQVMwQix3QkFBd0I7UUFDL0JELFdBQVcsQ0FBQ0UsWUFBYyxDQUFDQTtJQUM3QjtJQUVBLGVBQWVDLGNBQWNDLEtBQUssRUFBRTtRQUNsQ0EsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxlQUFlVCxjQUFjVSxPQUFPLENBQUNDLEtBQUs7UUFDaEQsTUFBTUMsa0JBQWtCWCxpQkFBaUJTLE9BQU8sQ0FBQ0MsS0FBSztRQUV0RCxJQUFJVCxTQUFTO1lBQ1gsY0FBYztZQUNkLE1BQU1XLFNBQVMsTUFBTWpDLHVEQUFNQSxDQUFDLGVBQWU7Z0JBQ3pDa0MsVUFBVSxLQUFLO2dCQUNmOUIsT0FBT3lCO2dCQUNQeEIsVUFBVTJCO1lBQ1o7WUFFQSxJQUFJLENBQUNDLE9BQU9FLEtBQUssRUFBRTtZQUNqQixXQUFXO1lBQ2IsQ0FBQztRQUNILE9BQU87WUFDTCxJQUFJO2dCQUNGLE1BQU1GLFVBQVMsTUFBTTlCLFdBQVcwQixjQUFjRztnQkFDOUNJLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDZCxFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDZDtRQUNGLENBQUM7SUFDSDtJQUNBLHFCQUNFLDhEQUFDRztRQUFRQyxXQUFXckMsbUVBQVk7OzBCQUM5Qiw4REFBQ3VDOzBCQUFJbkIsVUFBVSxVQUFVLFNBQVM7Ozs7OzswQkFDbEMsOERBQUNvQjtnQkFBS0MsVUFBVWpCOztrQ0FDZCw4REFBQ2tCO3dCQUFJTCxXQUFXckMsc0VBQWU7OzBDQUM3Qiw4REFBQzRDO2dDQUFNQyxTQUFROzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBUUMsSUFBRztnQ0FBUUMsS0FBSy9CO2dDQUFlZ0MsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUU3RCw4REFBQ1I7d0JBQUlMLFdBQVdyQyxzRUFBZTs7MENBQzdCLDhEQUFDNEM7Z0NBQU1DLFNBQVE7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxLQUFLOUI7Z0NBQ0wrQixRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNSO3dCQUFJTCxXQUFXckMsc0VBQWU7OzBDQUM3Qiw4REFBQ29EOzBDQUFRaEMsVUFBVSxVQUFVLGdCQUFnQjs7Ozs7OzBDQUM3Qyw4REFBQ2dDO2dDQUNDTCxNQUFLO2dDQUNMVixXQUFXckMscUVBQWM7Z0NBQ3pCc0QsU0FBU2hDOzBDQUVSRixVQUFVLHVCQUF1Qiw2QkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zRTtHQW5FU0o7O1FBQ1FqQixrREFBU0E7OztLQURqQmlCO0FBcUVULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9hdXRoLWZvcm0uanM/NjFmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2F1dGgtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbnVwXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uLlwiKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBBdXRoRm9ybSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGVtYWlsSW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGZ1bmN0aW9uIHN3aXRjaEF1dGhNb2RlSGFuZGxlcigpIHtcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSBlbWFpbElucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgaWYgKGlzTG9naW4pIHtcbiAgICAgIC8vIExvZyB1c2VyIGluXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7XG4gICAgICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGVudGVyZWRQYXNzd29yZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICAvLyBEbyBzdHVmZlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGVVc2VyKGVudGVyZWRFbWFpbCwgZW50ZXJlZFBhc3N3b3JkKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aH0+XG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPllvdXIgRW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgaWQ9J2VtYWlsJyByZWY9e2VtYWlsSW5wdXRSZWZ9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGFzc3dvcmQnPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBpZD0ncGFzc3dvcmQnXG4gICAgICAgICAgICByZWY9e3Bhc3N3b3JkSW5wdXRSZWZ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtzd2l0Y2hBdXRoTW9kZUhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTG9naW4gPyBcIkNyZWF0ZSBuZXcgYWNjb3VudFwiIDogXCJMb2dpbiB3aXRoIGV4aXN0aW5nIGFjY291bnRcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInNpZ25JbiIsInVzZVJvdXRlciIsImNsYXNzZXMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJyb3V0ZXIiLCJlbWFpbElucHV0UmVmIiwicGFzc3dvcmRJbnB1dFJlZiIsImlzTG9naW4iLCJzZXRJc0xvZ2luIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkUGFzc3dvcmQiLCJyZXN1bHQiLCJyZWRpcmVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhdXRoIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJyZXF1aXJlZCIsImFjdGlvbnMiLCJidXR0b24iLCJ0b2dnbGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/auth-form.js\n"));

/***/ })

});