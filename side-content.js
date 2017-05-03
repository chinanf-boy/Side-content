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
	var setSider = function (get_ID) {

		if (get_ID == undefined) {
			get_ID = 'side-content';
			console.log('you change -> ' + get_ID);
		}

		var sideObject = [], // 标题对象数组
			sideObjectTop = []; // 标题对象的距离数组

		/*
		0 init ------------------


		*/
		var getSideContent = function (Element_ID) {
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
				//window 滚动事件
				if (get_ID && sideObjectTop.length !== 0) {
					window.onscroll = onscrollEvent;
				};

			},
			//
			/*
	1.	------------------


	*/
			//添加li 函数
			getClassSide = function (sideContent) {
				//找出 side前缀的class
				// 添加到 sideObject
				var sideNumber = sideContent.childNodes.length;
				for (var i = 0; i < sideNumber; i++) {
					if (sideContent.childNodes[i].nodeType == 1) {
						var div_this = sideContent.childNodes[i];
						if (div_this.getAttribute('id') && div_this.getAttribute('id').match('side')) {
							//找到前缀，加入大家庭 sideObject;
							sideObject.push(div_this);
						} else {
							//不是side前缀

						}

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

			getSider = function () {
				var sider = document.getElementById('sider');
				CreateLiElementById(sider); //组装sider
			},
			/*
			2.1	------------------


			*/
			CreateLiElementById = function (sider) {
				var li_number = sideObject.length;
				var add_div = document.createElement('div');
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
					add_div.appendChild(li_this);
				}
				sider.appendChild(add_div);
			},
			/*
			3	------------------


			*/
			getSideContentTop = function () {
				for (var i = 0; i < sideObject.length; i++) {
					console.log(sideObject[i]);
					sideObjectTop.push(getElementTop(sideObject[i]));
				}
			},
			/*
			3.1	------------------


			*/
			getElementTop = function (element) {
				var actualTop = element.offsetTop;
				var current = element.offsetParent;
				while (current && current.tagName !== "BODY") {
					actualTop += current.offsetTop;
					current = current.offsetParent;
				}

				return actualTop;
			},
			/*
			4	------------------

			*/
			onscrollEvent = function () {
				return (function (body_top) {
					try {
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

						return true;
					} catch (error) {
						console.log(error);
					};
				})(document.body.scrollTop);
			},

			/*
			4.1	------------------


			*/
			//remove all a class
			clearActive = function (all_a) {
				for (var i = 0; i < sideObject.length; i++) {
					all_a[i].removeAttribute('class');
				}
			},
			/*
			000000	------------------


			*/
			sideContent = function (get_ID) {
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
			setS: function (argument) {
				// body...
				console.log(argument);
			}
		};
		//返回 未完待续
		return new sideContent(get_ID);

	}; //setSider ending
	if (typeof window !== "undefined") {
		window.setSider = setSider;
	} else {
		module.exports = setSider;
	}

})(window);