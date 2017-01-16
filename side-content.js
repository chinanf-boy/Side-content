(function() {   
	var sideObject = [];


	function getSideContent() {
	// 总 sideObject 
		//js函数验证
		if (!document.getElementById) return false;
		if (!document.body.childElementCount) return false;

		//content
		var sideContent = document.getElementById('side-content');
		getClassSide(sideContent);
		
		//side
		getSider();
	}

	function getClassSide(sideContent) {
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
		}
}
	function getSider() {
		//获得sider

		var sider = document.getElementById('sider');
		CreateLiElementById(sider);
	}

	function CreateLiElementById(sider) {
		var li_number = sideObject.length;

		for (var i = 0; i < li_number; i++) {
			//init li a Element
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

	}

	if(getSideContent() == false)
	{
		alert('hey use javascript,OK!');
	}

})();














