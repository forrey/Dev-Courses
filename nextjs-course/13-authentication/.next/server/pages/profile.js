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
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./components/profile/profile-form.module.css":
/*!****************************************************!*\
  !*** ./components/profile/profile-form.module.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"profile-form_form__CW_yz\",\n\t\"control\": \"profile-form_control__RFibq\",\n\t\"action\": \"profile-form_action__xSIGg\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLWZvcm0ubW9kdWxlLmNzcz9lOWMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJwcm9maWxlLWZvcm1fZm9ybV9fQ1dfeXpcIixcblx0XCJjb250cm9sXCI6IFwicHJvZmlsZS1mb3JtX2NvbnRyb2xfX1JGaWJxXCIsXG5cdFwiYWN0aW9uXCI6IFwicHJvZmlsZS1mb3JtX2FjdGlvbl9feFNJR2dcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/profile/profile-form.module.css\n");

/***/ }),

/***/ "./components/profile/user-profile.module.css":
/*!****************************************************!*\
  !*** ./components/profile/user-profile.module.css ***!
  \****************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"profile\": \"user-profile_profile__Y_0Fm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZS5tb2R1bGUuY3NzPzllODEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZVwiOiBcInVzZXItcHJvZmlsZV9wcm9maWxlX19ZXzBGbVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/user-profile.module.css\n");

/***/ }),

/***/ "./components/profile/profile-form.js":
/*!********************************************!*\
  !*** ./components/profile/profile-form.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.module.css */ \"./components/profile/profile-form.module.css\");\n/* harmony import */ var _profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ProfileForm(props) {\n    const oldPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const newPasswordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    function submitHandler(event) {\n        event.preventDefault();\n        const enteredOldPassword = oldPasswordRef.current.value;\n        const enteredNewPassword = newPasswordRef.current.value;\n        props.onChangePassword({\n            oldPassword: enteredOldPassword,\n            newPassword: enteredNewPassword\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n        onSubmit: submitHandler,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"new-password\",\n                        children: \"New Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"new-password\",\n                        ref: newPasswordRef\n                    }, void 0, false, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"old-password\",\n                        children: \"Old Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"old-password\",\n                        ref: oldPasswordRef\n                    }, void 0, false, {\n                        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_profile_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().action),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Change Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/profile-form.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNpQjtBQUVoRCxTQUFTRSxZQUFZQyxLQUFLLEVBQUU7SUFDMUIsTUFBTUMsaUJBQWlCSiw2Q0FBTUE7SUFDN0IsTUFBTUssaUJBQWlCTCw2Q0FBTUE7SUFFN0IsU0FBU00sY0FBY0MsS0FBSyxFQUFFO1FBQzVCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLHFCQUFxQkwsZUFBZU0sT0FBTyxDQUFDQyxLQUFLO1FBQ3ZELE1BQU1DLHFCQUFxQlAsZUFBZUssT0FBTyxDQUFDQyxLQUFLO1FBRXZEUixNQUFNVSxnQkFBZ0IsQ0FBQztZQUNyQkMsYUFBYUw7WUFDYk0sYUFBYUg7UUFDZjtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVdoQixzRUFBWTtRQUFFaUIsVUFBVVo7OzBCQUN2Qyw4REFBQ2E7Z0JBQUlGLFdBQVdoQix5RUFBZTs7a0NBQzdCLDhEQUFDb0I7d0JBQU1DLFNBQVE7a0NBQWU7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFXQyxJQUFHO3dCQUFlQyxLQUFLckI7Ozs7Ozs7Ozs7OzswQkFFaEQsOERBQUNjO2dCQUFJRixXQUFXaEIseUVBQWU7O2tDQUM3Qiw4REFBQ29CO3dCQUFNQyxTQUFRO2tDQUFlOzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBV0MsSUFBRzt3QkFBZUMsS0FBS3RCOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDZTtnQkFBSUYsV0FBV2hCLHdFQUFjOzBCQUM1Qiw0RUFBQzJCOzhCQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtBQUVBLGlFQUFlMUIsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS1mb3JtLmpzPzJmMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9wcm9maWxlLWZvcm0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBQcm9maWxlRm9ybShwcm9wcykge1xuICBjb25zdCBvbGRQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBuZXdQYXNzd29yZFJlZiA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZW50ZXJlZE9sZFBhc3N3b3JkID0gb2xkUGFzc3dvcmRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBlbnRlcmVkTmV3UGFzc3dvcmQgPSBuZXdQYXNzd29yZFJlZi5jdXJyZW50LnZhbHVlO1xuXG4gICAgcHJvcHMub25DaGFuZ2VQYXNzd29yZCh7XG4gICAgICBvbGRQYXNzd29yZDogZW50ZXJlZE9sZFBhc3N3b3JkLFxuICAgICAgbmV3UGFzc3dvcmQ6IGVudGVyZWROZXdQYXNzd29yZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmV3LXBhc3N3b3JkJz5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSduZXctcGFzc3dvcmQnIHJlZj17bmV3UGFzc3dvcmRSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nb2xkLXBhc3N3b3JkJz5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGlkPSdvbGQtcGFzc3dvcmQnIHJlZj17b2xkUGFzc3dvcmRSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XG4gICAgICAgIDxidXR0b24+Q2hhbmdlIFBhc3N3b3JkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsImNsYXNzZXMiLCJQcm9maWxlRm9ybSIsInByb3BzIiwib2xkUGFzc3dvcmRSZWYiLCJuZXdQYXNzd29yZFJlZiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXJlZE9sZFBhc3N3b3JkIiwiY3VycmVudCIsInZhbHVlIiwiZW50ZXJlZE5ld1Bhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9sIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJyZWYiLCJhY3Rpb24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/profile/profile-form.js\n");

/***/ }),

/***/ "./components/profile/user-profile.js":
/*!********************************************!*\
  !*** ./components/profile/user-profile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _profile_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-form */ \"./components/profile/profile-form.js\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.module.css */ \"./components/profile/user-profile.module.css\");\n/* harmony import */ var _user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction UserProfile() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    async function changePasswordHandler(passwordData) {\n        const response = await fetch(\"/api/user/change-password\", {\n            method: \"PATCH\",\n            body: JSON.stringify(passwordData),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        console.log(data);\n    }\n    if (!session && status !== \"loading\") {\n        router.push(\"/auth\");\n    }\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/user-profile.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, this);\n    }\n    if (session && status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: (_user_profile_module_css__WEBPACK_IMPORTED_MODULE_4___default().profile),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Your User Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/user-profile.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profile_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onChangePassword: changePasswordHandler\n                }, void 0, false, {\n                    fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/user-profile.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/components/profile/user-profile.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNPO0FBQ0g7QUFDTDtBQUV4QyxTQUFTSSxjQUFjO0lBQ3JCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdOLDJEQUFVQTtJQUU1QyxlQUFlTyxzQkFBc0JDLFlBQVksRUFBRTtRQUNqRCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sNkJBQTZCO1lBQ3hEQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047WUFDckJPLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFFQSxNQUFNWCxPQUFPLE1BQU1LLFNBQVNPLElBQUk7UUFDaENDLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFDZDtJQUVBLElBQUksQ0FBQ0MsV0FBV0MsV0FBVyxXQUFXO1FBQ3BDSCxPQUFPZ0IsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUliLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ2M7WUFBRUMsV0FBV3RCLHlFQUFlO3NCQUFFOzs7Ozs7SUFDeEMsQ0FBQztJQUVELElBQUlNLFdBQVdDLFdBQVcsaUJBQWlCO1FBQ3pDLHFCQUNFLDhEQUFDaUI7WUFBUUYsV0FBV3RCLHlFQUFlOzs4QkFDakMsOERBQUN5Qjs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDMUIscURBQVdBO29CQUFDMkIsa0JBQWtCbEI7Ozs7Ozs7Ozs7OztJQUdyQyxDQUFDO0FBQ0g7QUFFQSxpRUFBZUwsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3Byb2ZpbGUvdXNlci1wcm9maWxlLmpzP2NkZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2ZpbGVGb3JtIGZyb20gXCIuL3Byb2ZpbGUtZm9ybVwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlci1wcm9maWxlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkSGFuZGxlcihwYXNzd29yZERhdGEpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhc3N3b3JkRGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICBpZiAoIXNlc3Npb24gJiYgc3RhdHVzICE9PSBcImxvYWRpbmdcIikge1xuICAgIHJvdXRlci5wdXNoKFwiL2F1dGhcIik7XG4gIH1cblxuICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAgIHJldHVybiA8cCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZX0+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICBpZiAoc2Vzc2lvbiAmJiBzdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlfT5cbiAgICAgICAgPGgxPllvdXIgVXNlciBQcm9maWxlPC9oMT5cbiAgICAgICAgPFByb2ZpbGVGb3JtIG9uQ2hhbmdlUGFzc3dvcmQ9e2NoYW5nZVBhc3N3b3JkSGFuZGxlcn0gLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlByb2ZpbGVGb3JtIiwiY2xhc3NlcyIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJVc2VyUHJvZmlsZSIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY2hhbmdlUGFzc3dvcmRIYW5kbGVyIiwicGFzc3dvcmREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInAiLCJjbGFzc05hbWUiLCJwcm9maWxlIiwic2VjdGlvbiIsImgxIiwib25DaGFuZ2VQYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/profile/user-profile.js\n");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_profile_user_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/profile/user-profile */ \"./components/profile/user-profile.js\");\n\n\nfunction ProfilePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile_user_profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/forrestm/Desktop/Dev/Course Files/nextjs-course/13-authentication/pages/profile.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUE2RDtBQUU3RCxTQUFTQyxjQUFjO0lBQ3JCLHFCQUFPLDhEQUFDRCx3RUFBV0E7Ozs7O0FBQ3JCO0FBRUEsaUVBQWVDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvcHJvZmlsZS5qcz8wOGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9maWxlL3VzZXItcHJvZmlsZVwiO1xuXG5mdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcbiAgcmV0dXJuIDxVc2VyUHJvZmlsZSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iXSwibmFtZXMiOlsiVXNlclByb2ZpbGUiLCJQcm9maWxlUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile.js"));
module.exports = __webpack_exports__;

})();