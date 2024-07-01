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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n// import '@/styles/globals.css'\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [supabase] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__.createPagesBrowserClient)());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { data: { subscription  }  } = supabase.auth.onAuthStateChange((event, session)=>{\n            if (event === \"SIGNED_IN\") {\n                // handle sign in event\n                console.log(\"User signed in:\", session?.user);\n            } else if (event === \"SIGNED_OUT\") {\n                // handle sign out event\n                console.log(\"User signed out\");\n            }\n        });\n        return ()=>{\n            subscription.unsubscribe();\n        };\n    }, [\n        supabase\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.SessionContextProvider, {\n        supabaseClient: supabase,\n        initialSession: pageProps.initialSession,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/brunopais/Desktop/chat-playground/pages/_app.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brunopais/Desktop/chat-playground/pages/_app.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7O0FBQ1c7QUFDNkI7QUFDTTtBQUcvRCxTQUFTSSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUVoRCxFQUFFO0lBQ0YsTUFBTSxDQUFDQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDLElBQU1FLHVGQUF3QkE7SUFFMURELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUVPLE1BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUUsR0FBR0YsU0FBU0csSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDQyxPQUFPQyxVQUFZO1lBQ3JGLElBQUlELFVBQVUsYUFBYTtnQkFDekIsdUJBQXVCO2dCQUN2QkUsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkYsU0FBU0c7WUFDMUMsT0FBTyxJQUFJSixVQUFVLGNBQWM7Z0JBQ2pDLHdCQUF3QjtnQkFDeEJFLFFBQVFDLEdBQUcsQ0FBQztZQUNkLENBQUM7UUFDSDtRQUVBLE9BQU8sSUFBTTtZQUNYTixhQUFhUSxXQUFXO1FBQzFCO0lBQ0YsR0FBRztRQUFDVjtLQUFTO0lBRWIscUJBQ0UsOERBQUNKLGdGQUFzQkE7UUFBQ2UsZ0JBQWdCWDtRQUFVWSxnQkFBZ0JiLFVBQVVhLGNBQWM7a0JBQ3hGLDRFQUFDZDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LXBsYXlncm91bmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQYWdlc0Jyb3dzZXJDbGllbnQgfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqcydcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0UHJvdmlkZXIsIFNlc3Npb24gfSBmcm9tICdAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0J1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wczx7XG4gIGluaXRpYWxTZXNzaW9uOiBTZXNzaW9uXG59Pikge1xuICBjb25zdCBbc3VwYWJhc2VdID0gdXNlU3RhdGUoKCkgPT4gY3JlYXRlUGFnZXNCcm93c2VyQ2xpZW50KCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IHsgc3Vic2NyaXB0aW9uIH0gfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKGV2ZW50LCBzZXNzaW9uKSA9PiB7XG4gICAgICBpZiAoZXZlbnQgPT09ICdTSUdORURfSU4nKSB7XG4gICAgICAgIC8vIGhhbmRsZSBzaWduIGluIGV2ZW50XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHNpZ25lZCBpbjonLCBzZXNzaW9uPy51c2VyKVxuICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gJ1NJR05FRF9PVVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBzaWduIG91dCBldmVudFxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBzaWduZWQgb3V0JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgfVxuICB9LCBbc3VwYWJhc2VdKVxuXG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Db250ZXh0UHJvdmlkZXIgc3VwYWJhc2VDbGllbnQ9e3N1cGFiYXNlfSBpbml0aWFsU2Vzc2lvbj17cGFnZVByb3BzLmluaXRpYWxTZXNzaW9ufT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Nlc3Npb25Db250ZXh0UHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVQYWdlc0Jyb3dzZXJDbGllbnQiLCJTZXNzaW9uQ29udGV4dFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3VwYWJhc2UiLCJkYXRhIiwic3Vic2NyaXB0aW9uIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiZXZlbnQiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJ1bnN1YnNjcmliZSIsInN1cGFiYXNlQ2xpZW50IiwiaW5pdGlhbFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@supabase/auth-helpers-nextjs":
/*!************************************************!*\
  !*** external "@supabase/auth-helpers-nextjs" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();