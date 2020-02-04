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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/vuex/user.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/vuex/user.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/vuex/user.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// == Constants =======================
// == State ===========================
// These images were taken from the internet. We do not own or have the rights to use them in a commercial product
// They are simply for demonstration purposes
var state = {
  _list: [{
    name: 'Luigi',
    avatar_url: 'https://i.pinimg.com/originals/be/71/8d/be718d1db03995c6d24455c6ebd9143f.jpg'
  }, {
    name: 'Mario',
    avatar_url: 'https://i.pinimg.com/236x/68/f7/6e/68f76eaa71d54923f9ebca1414c73e46--mario.jpg'
  }, {
    name: 'Peach',
    avatar_url: 'https://pm1.narvii.com/6563/5abdcddcfec4fcb304534c88b530bbbfa04b5ebf_hq.jpg'
  }, {
    name: 'Toad',
    avatar_url: 'https://i.ya-webdesign.com/images/toad-transparent-face-mario-1.png'
  }, {
    name: 'Yoshi',
    avatar_url: 'https://www.nicepng.com/png/detail/350-3502424_neorigg-crit-le-mario-kart-yoshi-face.png'
  }]
}; // == Getters =========================

var getters = {}; // == Mutations =======================

var mutations = {}; // == Actions =========================

var actions = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ })

/******/ });
//# sourceMappingURL=user-8065a256b2917e6e11ee.js.map