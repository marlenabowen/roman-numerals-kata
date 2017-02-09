/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
class RomanNumerals {
  static numeral(value, numeral) {
    return { value: value, numeral: numeral };
  }

  static convert(n) {
    const numerals = [
      RomanNumerals.numeral(1, 'I'),
      RomanNumerals.numeral(4, 'IV'),
      RomanNumerals.numeral(5, 'V'),
      RomanNumerals.numeral(9, 'IX'),
      RomanNumerals.numeral(10, 'X'),
      RomanNumerals.numeral(40, 'XL'),
      RomanNumerals.numeral(50, 'L'),
      RomanNumerals.numeral(90, 'XC'),
      RomanNumerals.numeral(100, 'C'),
      RomanNumerals.numeral(400, 'CD'),
      RomanNumerals.numeral(500, 'D'),
      RomanNumerals.numeral(900, 'CM'),
      RomanNumerals.numeral(1000, 'M'),
    ];

    let romanNumeral = '';
    numerals.forEach((item) => {
      while (n >= item.value) {
        romanNumeral += item.numeral;
        n -= item.value;
      }
    });
    return romanNumeral;
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = RomanNumerals;



/***/ })
/******/ ]);