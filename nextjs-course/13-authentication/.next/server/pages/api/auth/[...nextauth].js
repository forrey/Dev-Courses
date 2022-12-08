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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./helpers/auth.js":
/*!*************************!*\
  !*** ./helpers/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"verifyPassword\": () => (/* binding */ verifyPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n    const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n    return hashedPassword;\n}\nasync function verifyPassword(password, hashedPassword) {\n    const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n    return isValid;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUVsQyxlQUFlRSxhQUFhQyxRQUFRLEVBQUU7SUFDM0MsTUFBTUMsaUJBQWlCLE1BQU1KLDhDQUFJQSxDQUFDRyxVQUFVO0lBQzVDLE9BQU9DO0FBQ1QsQ0FBQztBQUVNLGVBQWVDLGVBQWVGLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQzdELE1BQU1FLFVBQVUsTUFBTUwsaURBQU9BLENBQUNFLFVBQVVDO0lBQ3hDLE9BQU9FO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9oZWxwZXJzL2F1dGguanM/MWE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNoLCBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMik7XG4gIHJldHVybiBoYXNoZWRQYXNzd29yZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xuICByZXR1cm4gaXNWYWxpZDtcbn1cbiJdLCJuYW1lcyI6WyJoYXNoIiwiY29tcGFyZSIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsImlzVmFsaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/auth.js\n");

/***/ }),

/***/ "(api)/./helpers/db-utils.js":
/*!*****************************!*\
  !*** ./helpers/db-utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://fm:fmtesting@testing.v9gewxh.mongodb.net/?retryWrites=true&w=majority\");\n    return client;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUUvQixlQUFlQyxvQkFBb0I7SUFDeEMsTUFBTUMsU0FBUyxNQUFNRix3REFBbUIsQ0FDdEM7SUFHRixPQUFPRTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vaGVscGVycy9kYi11dGlscy5qcz8wMTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9mbTpmbXRlc3RpbmdAdGVzdGluZy52OWdld3hoLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIHJldHVybiBjbGllbnQ7XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/db-utils.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/auth */ \"(api)/./helpers/auth.js\");\n/* harmony import */ var _helpers_db_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/db-utils */ \"(api)/./helpers/db-utils.js\");\n\n\n\n\nconst authOptions = {\n    session: {\n        maxAge: 60 * 24 * 60 * 60,\n        strategy: \"jwt\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            async authorize (credentials) {\n                const client = await (0,_helpers_db_utils__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n                const usersCollection = client.db(\"auth-demo\").collection(\"users\");\n                const user = await usersCollection.findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    client.close();\n                    throw new Error(\"No user found\");\n                }\n                const isValid = await (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_2__.verifyPassword)(credentials.password, user.password);\n                if (!isValid) {\n                    client.close();\n                    throw new Error(\"Couldn't log you in\");\n                }\n                client.close();\n                return {\n                    email: user.email\n                };\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ1k7QUFDWDtBQUNPO0FBRXZELE1BQU1JLGNBQStCO0lBQzFDQyxTQUFTO1FBQ1BDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDdkJDLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1RQLHNFQUFtQkEsQ0FBQztZQUNsQixNQUFNUSxXQUFVQyxXQUFXLEVBQUU7Z0JBQzNCLE1BQU1DLFNBQVMsTUFBTVIsb0VBQWlCQTtnQkFDdEMsTUFBTVMsa0JBQWtCRCxPQUFPRSxFQUFFLENBQUMsYUFBYUMsVUFBVSxDQUFDO2dCQUUxRCxNQUFNQyxPQUFPLE1BQU1ILGdCQUFnQkksT0FBTyxDQUFDO29CQUN6Q0MsT0FBT1AsWUFBWU8sS0FBSztnQkFDMUI7Z0JBRUEsSUFBSSxDQUFDRixNQUFNO29CQUNUSixPQUFPTyxLQUFLO29CQUNaLE1BQU0sSUFBSUMsTUFBTSxpQkFBaUI7Z0JBQ25DLENBQUM7Z0JBRUQsTUFBTUMsVUFBVSxNQUFNbEIsNkRBQWNBLENBQ2xDUSxZQUFZVyxRQUFRLEVBQ3BCTixLQUFLTSxRQUFRO2dCQUdmLElBQUksQ0FBQ0QsU0FBUztvQkFDWlQsT0FBT08sS0FBSztvQkFDWixNQUFNLElBQUlDLE1BQU0sdUJBQXVCO2dCQUN6QyxDQUFDO2dCQUVEUixPQUFPTyxLQUFLO2dCQUNaLE9BQU87b0JBQUVELE9BQU9GLEtBQUtFLEtBQUs7Z0JBQUM7WUFDN0I7UUFDRjtLQUNEO0FBQ0gsRUFBRTtBQUNGLGlFQUFlakIsZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IHsgdmVyaWZ5UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9hdXRoXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi8uLi9oZWxwZXJzL2RiLXV0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBzZXNzaW9uOiB7XG4gICAgbWF4QWdlOiA2MCAqIDI0ICogNjAgKiA2MCxcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgY29uc3QgdXNlcnNDb2xsZWN0aW9uID0gY2xpZW50LmRiKFwiYXV0aC1kZW1vXCIpLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdXNlciBmb3VuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB2ZXJpZnlQYXNzd29yZChcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgY2xpZW50LmNsb3NlKCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgbG9nIHlvdSBpblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICByZXR1cm4geyBlbWFpbDogdXNlci5lbWFpbCB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn07XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwidmVyaWZ5UGFzc3dvcmQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsIm1heEFnZSIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJ1c2Vyc0NvbGxlY3Rpb24iLCJkYiIsImNvbGxlY3Rpb24iLCJ1c2VyIiwiZmluZE9uZSIsImVtYWlsIiwiY2xvc2UiLCJFcnJvciIsImlzVmFsaWQiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();