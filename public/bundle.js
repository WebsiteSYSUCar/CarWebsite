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

		$(function() {
			//collapse button
			var flags = 0;
			$('#collapseBtn').click(function() {

				if (flags % 2 === 1) {

					$('.navbar-collapse').css('background', 'rgb(51,51,51)');
					$('.navbar-header').css('background', 'rgb(51,51,51)');
					$('#collapseBtn').css('background', 'rgb(51,51,51)').css('border', 'none')
					$('.navbar-form a span').html("");
					$('.navbar-nav').css('margin-left', '0%').css('visibility', 'hidden');
					flags++;
				} else {
					$('.navbar-collapse').css('background', 'black');
					$('.navbar-header').css('background', 'black');

					$('.navbar-form a span').html(" 搜索deepdriving.com");
					$('.navbar-form').css('text-align', 'center');
					$('#collapseBtn').css('background', 'black').css('border', 'none');
					var widthNum = $(window).width() - 150;
					widthNum = widthNum / 2;
					$('.navbar-nav').css('margin-left', widthNum).css('visibility', 'visible');
					flags++;
				}
			});
			$(window).resize(function() {
				$('.navbar-nav').css('visibility', 'visible');
				var widthNum = $('.navbar-collapse').width();
				$('.footer1').css('width', widthNum/6);
				$('.footer2').css('width', widthNum/6);

			});
			//end collapse button

			//search buttton
			$('#searchBtn').click(function() {

				$('.search').css('visibility', 'visible');

			});
			$('#slider').nivoSlider();


		})

/***/ })
/******/ ]);