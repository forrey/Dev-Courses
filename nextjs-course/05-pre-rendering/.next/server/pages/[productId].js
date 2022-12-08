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
exports.id = "pages/[productId]";
exports.ids = ["pages/[productId]"];
exports.modules = {

/***/ "./pages/[productId].js":
/*!******************************!*\
  !*** ./pages/[productId].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction ProductPage(props) {\n    const { loadedProduct  } = props;\n    if (!loadedProduct) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/[productId].js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: loadedProduct.title\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/[productId].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: loadedProduct.description\n            }, void 0, false, {\n                fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/[productId].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/forrestm/Desktop/nextjs-course/05-pre-rendering/pages/[productId].js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\nasync function getData() {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), \"data\", \"dummy-backend.json\");\n    const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(filePath);\n    const data = JSON.parse(jsonData);\n    return data;\n}\nasync function getStaticProps(context) {\n    const { params  } = context;\n    const productId = params.productId;\n    const data = await getData();\n    const product = data.products.find((product)=>product.id === productId);\n    if (!product) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            loadedProduct: product\n        }\n    };\n}\nasync function getStaticPaths() {\n    const data = await getData();\n    const ids = data.products.map((product)=>product.id);\n    const pathsWithParams = ids.map((id)=>({\n            params: {\n                productId: id\n            }\n        }));\n    return {\n        paths: pathsWithParams,\n        fallback: true\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcHJvZHVjdElkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ0w7QUFDUztBQUVqQyxTQUFTRyxZQUFZQyxLQUFLLEVBQUU7SUFDMUIsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR0Q7SUFFMUIsSUFBSSxDQUFDQyxlQUFlO1FBQ2xCLHFCQUFPLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ1osQ0FBQztJQUVELHFCQUNFLDhEQUFDSiwyQ0FBUUE7OzBCQUNQLDhEQUFDSzswQkFBSUYsY0FBY0csS0FBSzs7Ozs7OzBCQUN4Qiw4REFBQ0Y7MEJBQUdELGNBQWNJLFdBQVc7Ozs7Ozs7Ozs7OztBQUduQztBQUVBLGVBQWVDLFVBQVU7SUFDdkIsTUFBTUMsV0FBV1YsZ0RBQVMsQ0FBQ1ksUUFBUUMsR0FBRyxJQUFJLFFBQVE7SUFDbEQsTUFBTUMsV0FBVyxNQUFNZiwyREFBVyxDQUFDVztJQUNuQyxNQUFNTSxPQUFPQyxLQUFLQyxLQUFLLENBQUNKO0lBRXhCLE9BQU9FO0FBQ1Q7QUFFTyxlQUFlRyxlQUFlQyxPQUFPLEVBQUU7SUFDNUMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Q7SUFFbkIsTUFBTUUsWUFBWUQsT0FBT0MsU0FBUztJQUVsQyxNQUFNTixPQUFPLE1BQU1QO0lBRW5CLE1BQU1jLFVBQVVQLEtBQUtRLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUNGLFVBQVlBLFFBQVFHLEVBQUUsS0FBS0o7SUFFL0QsSUFBSSxDQUFDQyxTQUFTO1FBQ1osT0FBTztZQUFFSSxVQUFVLElBQUk7UUFBQztJQUMxQixDQUFDO0lBRUQsT0FBTztRQUNMeEIsT0FBTztZQUNMQyxlQUFlbUI7UUFDakI7SUFDRjtBQUNGLENBQUM7QUFFTSxlQUFlSyxpQkFBaUI7SUFDckMsTUFBTVosT0FBTyxNQUFNUDtJQUVuQixNQUFNb0IsTUFBTWIsS0FBS1EsUUFBUSxDQUFDTSxHQUFHLENBQUMsQ0FBQ1AsVUFBWUEsUUFBUUcsRUFBRTtJQUVyRCxNQUFNSyxrQkFBa0JGLElBQUlDLEdBQUcsQ0FBQyxDQUFDSixLQUFRO1lBQUVMLFFBQVE7Z0JBQUVDLFdBQVdJO1lBQUc7UUFBRTtJQUVyRSxPQUFPO1FBQ0xNLE9BQU9EO1FBQ1BFLFVBQVUsSUFBSTtJQUNoQjtBQUNGLENBQUM7QUFFRCxpRUFBZS9CLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNS1wcmUtcmVuZGVyaW5nLy4vcGFnZXMvW3Byb2R1Y3RJZF0uanM/NGJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzL3Byb21pc2VzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUHJvZHVjdFBhZ2UocHJvcHMpIHtcbiAgY29uc3QgeyBsb2FkZWRQcm9kdWN0IH0gPSBwcm9wcztcblxuICBpZiAoIWxvYWRlZFByb2R1Y3QpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxoMT57bG9hZGVkUHJvZHVjdC50aXRsZX08L2gxPlxuICAgICAgPHA+e2xvYWRlZFByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBcImR1bW15LWJhY2tlbmQuanNvblwiKTtcbiAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG5cbiAgY29uc3QgcHJvZHVjdElkID0gcGFyYW1zLnByb2R1Y3RJZDtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHByb2R1Y3RJZCk7XG5cbiAgaWYgKCFwcm9kdWN0KSB7XG4gICAgcmV0dXJuIHsgbm90Rm91bmQ6IHRydWUgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvYWRlZFByb2R1Y3Q6IHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuXG4gIGNvbnN0IGlkcyA9IGRhdGEucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcblxuICBjb25zdCBwYXRoc1dpdGhQYXJhbXMgPSBpZHMubWFwKChpZCkgPT4gKHsgcGFyYW1zOiB7IHByb2R1Y3RJZDogaWQgfSB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHNXaXRoUGFyYW1zLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0UGFnZTtcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJGcmFnbWVudCIsIlByb2R1Y3RQYWdlIiwicHJvcHMiLCJsb2FkZWRQcm9kdWN0IiwicCIsImgxIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldERhdGEiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwianNvbkRhdGEiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiaWQiLCJub3RGb3VuZCIsImdldFN0YXRpY1BhdGhzIiwiaWRzIiwibWFwIiwicGF0aHNXaXRoUGFyYW1zIiwicGF0aHMiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[productId].js\n");

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

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[productId].js"));
module.exports = __webpack_exports__;

})();