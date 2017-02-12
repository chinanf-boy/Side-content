/*! side-content.js @@version
 * https://github.com/chinanf-boy/side-content
 *
 * Copyright (c) @@year @chinanf-boy
 * Available under the MIT license
 */

//set run fuc
(function (){
	'use stript';

	var setSider = function(get_ID) {

	if (get_ID == undefined) {
		get_ID = 'side-content';
		console.log('you change -> ' + get_ID);
	}

	var sideObject = [],
	 	sideObjectTop = [];
	/*



	*/
	var getSideContent = function( Element_ID ) {
	// 总 sideObject 
		//js函数验证
		if (!document.getElementById) return false;
		if (!document.body.childElementCount) return false;

		//content
		var sideContent = document.getElementById( Element_ID );

		if (!sideContent){
			return false;
		}
		getClassSide(sideContent);
		
		//side
		getSider();
		getSideContentTop();
	},
	//
		/*



	*/
	//添加li 函数 
	getClassSide = function(sideContent) {
		//找出 side前缀的class 

		var sideNumber = sideContent.childNodes.length;
		for (var i = 0; i < sideNumber; i++) {
			if (sideContent.childNodes[i].nodeType == 1)
			{
				 var div_this = sideContent.childNodes[i];
				 if (div_this.getAttribute('id') && div_this.getAttribute('id').match('side')){
				 	//找到前缀，加入大家庭 sideObject;
				 	sideObject.push(div_this);
				 }
				 else{
				 	//不是side前缀

				 }

				 //childElementCount 不长见，不知道其他浏览器是否有
				 if (div_this.childElementCount) {
				 	getClassSide(div_this);
				 }
			}
			else{
				//不是元素节点
				continue;
			}
		}},
			/*



	*/
	//获得sider

	getSider = function() {
		var sider = document.getElementById('sider');
		CreateLiElementById(sider);
	},
	/*



	*/
	CreateLiElementById = function(sider) {
		var li_number = sideObject.length;

		for (var i = 0; i < li_number; i++) {
			//init ( li, a ) Element
			var li_this = document.createElement('li');
			var li_a_this = document.createElement('a');
			//get href
			var _href = '#'+sideObject[i].getAttribute('id');
			//setting href
			li_a_this.setAttribute('href',_href);
			li_a_this.innerHTML = sideObject[i].firstChild.nodeValue;
			//a->li
			li_this.appendChild(li_a_this);
			//li->sider
			sider.appendChild(li_this);
		}

	},
	/*



	*/
	getElementTop = function(element){
　　　　var actualTop = element.offsetTop;
　　　　var current = element.offsetParent;
　　　　while (current){
　　　　　　actualTop += current.offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
　　　　return actualTop;
　　},
	/*



	*/
	getSideContentTop = function() {

		for (var i = 0; i < sideObject.length; i++) {

			sideObjectTop.push(getElementTop(sideObject[i]));
		}
	},
		/*



	*/
   //滚动事件函数 ||
	clearActive = function(all_a) {
		for (var i = 0; i < sideObject.length; i++) {
			all_a[i].removeAttribute('class');
		}
	},
	/*



	*/
	onscrollEvent = function() {
		return (function (body_top) {
		var active_side = 0;
		for (var i = 0; i < sideObjectTop.length; i++) {
			if (body_top >= sideObjectTop[i] && sideObjectTop[i] ){
				active_side = i;
			}
		}
		//
		var sider = document.getElementById('sider');

		clearActive(sider.getElementsByTagName('a'));

		var active_a = sider.getElementsByTagName('a')[active_side];

		active_a.setAttribute('class','active');

	})(document.body.scrollTop);
	},
	/*



	*/
	sideContent = function( get_ID ){
		if ( getSideContent( get_ID ) == false ){
		// get_ID 传值 Element_ID
		alert('hey use javascript,OK! or input 有效 主内容 ID！');
		}
		//
	};

	/*


	*/
	sideContent.prototype = {
		setS : function(argument) {
			// body...
			console.log(argument);
		}
	}
	//window 滚动事件 	
	window.onscroll = onscrollEvent;

	//返回 未完待续
	return new sideContent( get_ID );

};//setSider ending
	if (typeof module !== "undefined" && module.exports) {
    module.exports = setSider;
  } else {
    window.setSider = setSider;
  }

})(window);






