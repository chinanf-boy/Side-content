# Side-Content
V_0.2

---

# 简单,以标题链接侧边

# how-to-use

- 添加 ``js``文件 ``side-content.js``

```
<script src='side-content.js'></script>
</body>
```

- 设置一个 ``sider ID`` 用来显示标题

```
<ul id='sider'>

	</ul>
```


- 设置一个主内容 ID

>例如``side-content`` 可是自己设置

```
<div id='side-content'>
	<div id="side-1">你</div>
	<div id="side-2">是</div>
	//你想添加的标题 -- 前缀必须是 side-
</div>
```

```
var a = setSider('side-content'); //setSider('主内容ID');

//or

var a = setSider(); //默认 side-content

```

- and done ,完成

> tips: 视口的变化，会，影响准确性，主要是 高度，

![show](https://github.com/chinanf-boy/Side-content/blob/master/show_pic/show_one.gif)
