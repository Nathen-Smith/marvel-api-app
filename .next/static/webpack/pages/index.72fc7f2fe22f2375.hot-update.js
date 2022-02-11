"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/classNames */ \"./utils/classNames.ts\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// import { ChevronLeftIcon, ChevronRightIcon } from \"@heroicons/react/outline\";\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function(param) {\n    var children = param.children, searchActive = param.searchActive;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Gallery\",\n            to: \"/\",\n            current: !searchActive\n        },\n        {\n            name: \"Search\",\n            to: \"/search\",\n            current: searchActive\n        }, \n    ]), navigation = ref[0], setNavigation = ref[1];\n    // there probably is a better way to handle this...\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), data1 = ref1[0], setData = ref1[1];\n    // using callback here to memoize and store the results of data\n    var updateComicsData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(data) {\n        setData(data);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-gray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex items-center justify-between h-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-4\",\n                                    children: navigation.map(function(item, idx) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: item.to,\n                                            // onClick={() => updateFieldChanged(idx)}\n                                            \"aria-current\": item.current ? \"page\" : undefined,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: (0,_utils_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)(item.current ? \"bg-gray-300 text-black\" : \"text-gray-400 hover:bg-gray-300 hover:text-black\", \"px-3 py-2 rounded-md text-sm font-medium\"),\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, item.name, false, {\n                                            fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/Nathen-Smith/marvel-api-app\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGithub,\n                                    size: \"2x\",\n                                    className: \"gray-600\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathensmith/Code/cs498rk1/mp2-github/components/Navbar.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"5EhmieKSUNJATUBPLD98B4nb6M0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlFO0FBQzdDO0FBRW9CO0FBQ2hELEVBQWdGO0FBQ2hCO0FBQ0g7OztBQU03RCxHQUFLLENBQUNPLE1BQU0sR0FBNEIsUUFBUSxRQUF3QixDQUFDO1FBQTlCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsWUFBWSxTQUFaQSxZQUFZOzs7SUFDL0QsR0FBSyxDQUErQlIsR0FHbEMsR0FIa0NBLCtDQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDO1lBQUNTLElBQUksRUFBRSxDQUFTO1lBQUVDLEVBQUUsRUFBRSxDQUFHO1lBQUVDLE9BQU8sR0FBR0gsWUFBWTtRQUFDLENBQUM7UUFDcEQsQ0FBQztZQUFDQyxJQUFJLEVBQUUsQ0FBUTtZQUFFQyxFQUFFLEVBQUUsQ0FBUztZQUFFQyxPQUFPLEVBQUVILFlBQVk7UUFBQyxDQUFDO0lBQzFELENBQUMsR0FITUksVUFBVSxHQUFtQlosR0FHbEMsS0FIaUJhLGFBQWEsR0FBSWIsR0FHbEM7SUFDRixFQUFtRDtJQUVuRCxHQUFLLENBQW1CQSxJQUF3QixHQUF4QkEsK0NBQVEsSUFBekJjLEtBQUksR0FBYWQsSUFBd0IsS0FBbkNlLE9BQU8sR0FBSWYsSUFBd0I7SUFFaEQsRUFBK0Q7SUFDL0QsR0FBSyxDQUFDZ0IsZ0JBQWdCLEdBQUdmLGtEQUFXLENBQUMsUUFBUSxDQUFQYSxJQUFrQixFQUFXLENBQUM7UUFDbEVDLE9BQU8sQ0FBQ0QsSUFBSTtJQUNkLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNIRyxDQUFHOzt3RkFDREMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWE7c0dBQ3pCRixDQUFHO29CQUFDRSxTQUFTLEVBQUMsQ0FBd0M7MEdBQ3BERixDQUFHO3dCQUFDRSxTQUFTLEVBQUMsQ0FBaUQ7O3dHQUM3REYsQ0FBRztnQ0FBQ0UsU0FBUyxFQUFDLENBQUU7c0hBQ2RGLENBQUc7b0NBQUNFLFNBQVMsRUFBQyxDQUFnQjs4Q0FDNUJQLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFFQyxHQUFHO3NEQUN4QixNQUNsQixDQUFDLDhEQURrQnBCLGtEQUFJOzRDQUVIcUIsSUFBSSxFQUFFRixJQUFJLENBQUNYLEVBQUU7NENBQ2IsRUFBMEM7NENBRTFDYyxDQUFZLGVBQUVILElBQUksQ0FBQ1YsT0FBTyxHQUFHLENBQU0sUUFBR2MsU0FBUztrSUFFOUNDLENBQUM7Z0RBQ0FQLFNBQVMsRUFBRWhCLDZEQUFVLENBQ25Ca0IsSUFBSSxDQUFDVixPQUFPLEdBQ1IsQ0FBd0IsMEJBQ3hCLENBQWtELG1EQUN0RCxDQUEwQzswREFHM0NVLElBQUksQ0FBQ1osSUFBSTs7Ozs7OzJDQWRQWSxJQUFJLENBQUNaLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBb0JyQmlCLENBQUM7Z0NBQUNILElBQUksRUFBQyxDQUFnRDtzSEFDckRuQiwyRUFBZTtvQ0FBQ3VCLElBQUksRUFBRXRCLHdFQUFRO29DQUFFdUIsSUFBSSxFQUFDLENBQUk7b0NBQUNULFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLdEVaLFFBQVE7Ozs7Ozs7QUFtRmYsQ0FBQztHQXBJS0QsTUFBTTtLQUFOQSxNQUFNO0FBc0laLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQ29taWNzRGF0YSB9IGZyb20gXCIuLi91dGlscy9hcGlVdGlsc1wiO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gXCIuLi91dGlscy9jbGFzc05hbWVzXCI7XG4vLyBpbXBvcnQgeyBDaGV2cm9uTGVmdEljb24sIENoZXZyb25SaWdodEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5pbnRlcmZhY2UgQ2hpbGRyZW5Qcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgc2VhcmNoQWN0aXZlOiBib29sZWFuO1xufVxuXG5jb25zdCBOYXZiYXI6IFJlYWN0LkZDPENoaWxkcmVuUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHNlYXJjaEFjdGl2ZSB9KSA9PiB7XG4gIGNvbnN0IFtuYXZpZ2F0aW9uLCBzZXROYXZpZ2F0aW9uXSA9IHVzZVN0YXRlKFtcbiAgICB7IG5hbWU6IFwiR2FsbGVyeVwiLCB0bzogXCIvXCIsIGN1cnJlbnQ6ICFzZWFyY2hBY3RpdmUgfSxcbiAgICB7IG5hbWU6IFwiU2VhcmNoXCIsIHRvOiBcIi9zZWFyY2hcIiwgY3VycmVudDogc2VhcmNoQWN0aXZlIH0sXG4gIF0pO1xuICAvLyB0aGVyZSBwcm9iYWJseSBpcyBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxDb21pY3NEYXRhW10+KCk7XG5cbiAgLy8gdXNpbmcgY2FsbGJhY2sgaGVyZSB0byBtZW1vaXplIGFuZCBzdG9yZSB0aGUgcmVzdWx0cyBvZiBkYXRhXG4gIGNvbnN0IHVwZGF0ZUNvbWljc0RhdGEgPSB1c2VDYWxsYmFjaygoZGF0YTogQ29taWNzRGF0YVtdKTogdm9pZCA9PiB7XG4gICAgc2V0RGF0YShkYXRhKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC0yIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICB7bmF2aWdhdGlvbi5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udG99XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUZpZWxkQ2hhbmdlZChpZHgpfVxuXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD17aXRlbS5jdXJyZW50ID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmF5LTMwMCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS0zMDAgaG92ZXI6dGV4dC1ibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9OYXRoZW4tU21pdGgvbWFydmVsLWFwaS1hcHBcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gc2l6ZT1cIjJ4XCIgY2xhc3NOYW1lPVwiZ3JheS02MDBcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAge2NoaWxkcmVufVxuXG4gICAgICB7LyogPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlXG4gICAgICAgICAgcGF0aD1cIipcIlxuICAgICAgICAgIGVsZW1lbnQ9ezxMaXN0IHVwZGF0ZUNvbWljc0RhdGE9e3VwZGF0ZUNvbWljc0RhdGF9IC8+fVxuICAgICAgICAvPlxuICAgICAgICA8Um91dGVcbiAgICAgICAgICBwYXRoPVwiL21hcnZlbC1hcGktYXBwL3NlYXJjaFwiXG4gICAgICAgICAgZWxlbWVudD17PExpc3QgdXBkYXRlQ29taWNzRGF0YT17dXBkYXRlQ29taWNzRGF0YX0gLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvbWFydmVsLWFwaS1hcHAvZ2FsbGVyeVwiXG4gICAgICAgICAgZWxlbWVudD17PEdhbGxlcnkgdXBkYXRlQ29taWNzRGF0YT17dXBkYXRlQ29taWNzRGF0YX0gLz59XG4gICAgICAgIC8+XG4gICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgZGF0YS5tYXAoKGNvbWljLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXJMaXN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY29taWMuY2hhcmFjdGVycz8ucmV0dXJuZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hhckxpc3QgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICAgICAgICAgICAgICAgIGNvbWljLmNoYXJhY3RlcnMuaXRlbXMubWFwKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJMaXN0LnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhckxpc3QudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgIHBhdGg9e2AvbWFydmVsLWFwaS1hcHAvZGV0YWlsLyR7Y29taWMuaWR9YH1cbiAgICAgICAgICAgICAgICBrZXk9e2NvbWljLmlkfVxuICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1jZW50ZXIgbGVhZGluZy02IGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y29taWMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbnRlbnQtY2VudGVyIG10LTQgbXgtYXV0byBtYXgtdy03eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvbWFydmVsLWFwaS1hcHAvZGV0YWlsLyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaWR4ID4gMCA/IGlkeCAtIDEgOiBpZHhdPy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXggaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWwgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiBjbGFzc05hbWU9XCJibG9jayBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29taWMudGh1bWJuYWlsLnBhdGggKyBcIi5cIiArIGNvbWljLnRodW1ibmFpbC5leHRlbnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbWljLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctMCBoLTk2IGhvdmVyOmgtNTJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL21hcnZlbC1hcGktYXBwL2RldGFpbC8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2lkeCA8IGRhdGEubGVuZ3RoIC0gMSA/IGlkeCArIDEgOiBpZHhdPy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW4tdy0wIGZsZXggaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtZ3JheS04MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLXIgbXItYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodEljb24gY2xhc3NOYW1lPVwiYmxvY2sgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCB0ZXh0LW1kIG1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbWljLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgbXktMiBtYXgtdy03eGwgbXgtYXV0byBweC01IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIENoYXJhY3RlciBMaXN0OiB7Y2hhckxpc3QoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9Sb3V0ZXM+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIkxpbmsiLCJjbGFzc05hbWVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFHaXRodWIiLCJOYXZiYXIiLCJjaGlsZHJlbiIsInNlYXJjaEFjdGl2ZSIsIm5hbWUiLCJ0byIsImN1cnJlbnQiLCJuYXZpZ2F0aW9uIiwic2V0TmF2aWdhdGlvbiIsImRhdGEiLCJzZXREYXRhIiwidXBkYXRlQ29taWNzRGF0YSIsImRpdiIsIm5hdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpZHgiLCJocmVmIiwiYXJpYS1jdXJyZW50IiwidW5kZWZpbmVkIiwiYSIsImljb24iLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n");

/***/ })

});