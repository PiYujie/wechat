/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: D:\\xampp\\htdocs\\WeChat\\index.js: Unexpected token, expected \",\" (103:1)\n\n  101 | \t\t\tcomponent: person_info\n  102 | \t\t}\n> 103 | \t}\t\t\t\n      | \t^\n  104 | }\n  105 | /*// 配置store\n  106 | var store = new Vuex.Store({\n    at Parser.raise (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:832:15)\n    at Parser.unexpected (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2212:16)\n    at Parser.expect (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2198:28)\n    at Parser.parseExprList (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:4026:14)\n    at Parser.parseExprAtom (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3305:30)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2972:21)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2950:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2855:21)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2825:21)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2781:21)\n    at Parser.parseObjectProperty (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3817:101)\n    at Parser.parseObjPropValue (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3842:86)\n    at Parser.parseObj (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3741:12)\n    at Parser.parseExprAtom (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3310:21)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2972:21)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2950:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2855:21)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2825:21)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2781:21)\n    at Parser.parseExprListItem (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:4048:18)\n    at Parser.parseExprList (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:4030:22)\n    at Parser.parseNewArguments (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3588:23)\n    at Parser.parseNew (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3582:10)\n    at Parser.parseExprAtom (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:3324:21)\n    at Parser.parseExprSubscripts (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2972:21)\n    at Parser.parseMaybeUnary (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2950:21)\n    at Parser.parseExprOps (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2855:21)\n    at Parser.parseMaybeConditional (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2825:21)\n    at Parser.parseMaybeAssign (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:2781:21)\n    at Parser.parseVar (D:\\xampp\\htdocs\\WeChat\\node_modules\\_babylon@7.0.0-beta.37@babylon\\lib\\index.js:4840:26)");

/***/ })
/******/ ]);