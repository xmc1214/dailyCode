"attribute"和"property"有什么不同？

- attribute是html本身的属性，返回初始化的值，格式为字符串，返回值与HTML代码中的属性值相同，可以获取HTML代码中自定义的属性，设值时DOM树结构变了

- property是dom节点对象的属性，返回当前属性值，格式可为字符串也可为其他格式，返回值可能与HTML代码中的属性值不相同，只能获取原生的属性值，设值时DOM树结构不变


你理解的"use strict"是什么?使用它有什么优缺点？

- 解释:是一种在JavaScript代码运行时自动实行更严格解析和错误处理的方法。这种模式使得Javascript在更严格的条件下运行

- 优点:

    1. 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
	
	2. 消除代码运行的一些不安全之处，保证代码运行的安全；
	
	3. 提高编译器效率，增加运行速度；
	
	4. 为未来新版本的Javascript做好铺垫。

	注：经过测试 IE6,7,8,9 均不支持严格模式。


- 缺点:现在网站的 JS 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 merge 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。

typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？

- typeof是个操作符，括号是为了让运算更加清晰易懂

返回到顶部的方法有哪些？把其中一个方法写出来

- 锚点法：使用锚点链接是一种简单的返回顶部的功能实现。该实现主要在页面顶部放置一个指定名称的锚点链接，然后在页面下方放置一个返回到该锚点的链接，用户点击该链接即可返回到该锚点所在的顶部位置

- 具体实现：

     <body style="height:2000px;">
     <div id="topAnchor"></div>
    <a href="#topAnchor" style="position:fixed;right:0;bottom:0">回到顶部</a>
    </body>

- scrollTop：scrollTop属性表示被隐藏在内容区域上方的像素数。元素未滚动时，scrollTop的值为0，如果元素被垂直滚动了，scrollTop的值大于0，且表示元素上方不可见内容的像素宽度。

- 具体实现：

     <body style="height:2000px;">
     <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
    <script>test.onclick = function(){document.body.scrollTop = document.documentElement.scrollTop = 0;} </script>
    </body>

- scrollTo()：scrollTo(x,y)方法滚动当前window中显示的文档，让文档中由坐标x和y指定的点位于显示区域的左上角
设置scrollTo(0,0)可以实现回到顶部的效果。

- 具体实现：

    <body style="height:2000px;">
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
    <script>test.onclick = function(){document.body.scrollTop = document.documentElement.scrollTop = 0;} </script>
    </body>

- scrollBy()：scrollBy(x,y)方法滚动当前window中显示的文档，x和y指定滚动的相对量
　　只要把当前页面的滚动长度作为参数，逆向滚动，则可以实现回到顶部的效果

- 具体实现：

    <body style="height:2000px;">
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
    <script> test.onclick = function(){var top = document.body.scrollTop || document.documentElement.scrollTopscrollBy(0,-top);}</script>
    </body>

- scrollIntoView()：Element.scrollIntoView方法滚动当前元素，进入浏览器的可见区域　

　　该方法可以接受一个布尔值作为参数。如果为true，表示元素的顶部与当前区域的可见部分的顶部对齐（前提是当前区域可滚动）；如果为false，表示元素的底部与当前区域的可见部分的尾部对齐（前提是当前区域可滚动）。如果没有提供该参数，默认为true

　　使用该方法的原理与使用锚点的原理类似，在页面最上方设置目标元素，当页面滚动时，目标元素被滚动到页面区域以外，点击回到顶部按钮，使目标元素重新回到原来位置，则达到预期效果

- 具体实现：

    <body style="height:2000px;">
    <div id="target"></div>
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
    <script>test.onclick = function(){target.scrollIntoView();} </script>
    </body>