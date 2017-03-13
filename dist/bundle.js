/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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

/*! side-content.js @@version
 * https://github.com/chinanf-boy/side-content
 *
 * Copyright (c) @@year @chinanf-boy
 *
 */

//set run fuc
(function () {
	'use stript';

	// (Will +) init options

	var setSider = function setSider(get_ID) {

		if (get_ID == undefined) {
			get_ID = 'side-content';
			console.log('you change -> ' + get_ID);
		}

		var sideObject = [],
		    // 标题对象数组
		sideObjectTop = []; // 标题对象的距离数组

		/*
  0 init ------------------
  
  */
		var getSideContent = function getSideContent(Element_ID) {
			// 总 sideObject
			//js函数验证
			if (!document.getElementById) return false;
			if (!document.body.childElementCount) return false;

			//content
			var sideContent = document.getElementById(Element_ID);

			if (!sideContent) {
				return false;
			}
			getClassSide(sideContent); // 1

			//side
			getSider(); // 2
			getSideContentTop(); // 3
		},

		//
		/*
  1.	------------------
  	*/
		//添加li 函数
		getClassSide = function getClassSide(sideContent) {
			//找出 side前缀的class
			// 添加到 sideObject
			var sideNumber = sideContent.childNodes.length;
			for (var i = 0; i < sideNumber; i++) {
				if (sideContent.childNodes[i].nodeType == 1) {
					var div_this = sideContent.childNodes[i];
					if (div_this.getAttribute('id') && div_this.getAttribute('id').match('side')) {
						//找到前缀，加入大家庭 sideObject;
						sideObject.push(div_this);
					} else {}
					//不是side前缀

					//childElementCount 不长见，不知道其他浏览器是否有
					if (div_this.childElementCount) {
						getClassSide(div_this);
					}
				} else {
					//不是元素节点
					continue;
				}
			}
		},

		/*
  2.	------------------
  	*/
		//获得sider

		getSider = function getSider() {
			var sider = document.getElementById('sider');
			CreateLiElementById(sider); //组装sider
		},

		/*
  2.1	------------------
  
  */
		CreateLiElementById = function CreateLiElementById(sider) {
			var li_number = sideObject.length;

			for (var i = 0; i < li_number; i++) {
				//init ( li, a ) Element
				var li_this = document.createElement('li');
				var li_a_this = document.createElement('a');
				//get href
				var _href = '#' + sideObject[i].getAttribute('id');
				//setting href
				li_a_this.setAttribute('href', _href);
				li_a_this.innerHTML = sideObject[i].firstChild.nodeValue;
				//a->li
				li_this.appendChild(li_a_this);
				//li->sider
				sider.appendChild(li_this);
			}
		},

		/*
  3	------------------
  
  */
		getSideContentTop = function getSideContentTop() {

			for (var i = 0; i < sideObject.length; i++) {

				sideObjectTop.push(getElementTop(sideObject[i]));
			}
		},

		/*
  3.1	------------------
  
  */
		getElementTop = function getElementTop(element) {
			var actualTop = element.offsetTop;
			var current = element.offsetParent;
			while (current) {
				actualTop += current.offsetTop;
				current = current.offsetParent;
			}
			return actualTop;
		},

		/*
  4	------------------
  	*/
		onscrollEvent = function onscrollEvent() {
			return function (body_top) {
				var active_side = 0;
				for (var i = 0; i < sideObjectTop.length; i++) {
					if (body_top >= sideObjectTop[i] && sideObjectTop[i]) {
						active_side = i;
					}
				}
				//
				var sider = document.getElementById('sider');

				var sel_a = sider.getElementsByTagName('a');

				clearActive(sel_a);

				var active_a = sel_a[active_side];

				active_a.setAttribute('class', 'active');
			}(document.body.scrollTop);
		},


		/*
  4.1	------------------
  
  */
		//remove all a class
		clearActive = function clearActive(all_a) {
			for (var i = 0; i < sideObject.length; i++) {
				all_a[i].removeAttribute('class');
			}
		},

		/*
  000000	------------------
  
  */
		sideContent = function sideContent(get_ID) {
			// 0 init
			if (getSideContent(get_ID) == false) {
				// get_ID 传值 Element_ID
				alert('hey use javascript,OK! or input 有效 主内容 ID！');
			}
			//
		};

		/*
  
  */
		sideContent.prototype = {
			setS: function setS(argument) {
				// body...
				console.log(argument);
			}
		};
		//window 滚动事件
		window.onscroll = onscrollEvent;

		//返回 未完待续
		return new sideContent(get_ID);
	}; //setSider ending
	if (typeof window !== "undefined") {
		window.setSider = setSider;
	} else {
		module.exports = setSider;
	}
})(window);

/***/ })
/******/ ]);