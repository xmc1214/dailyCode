置换元素和非置换元素的区别

- 置换元素：是指浏览器根据标元素的标签和属性来决定元素具体的显示内容，例如：浏览器根据标签的src属性显示图片，根据标签的type属性决定显示输入框还是按钮

- 非置换元素：浏览器中大多数元素都是非置换元素，即其内容直接展示给浏览器，例如<label>标签，<p>标签里的内容会被浏览器直接显示给用户。


如何在页面上实现一个圆形点击区域？

- border-radius(css3的属性)

 - 具体实现：通过对一个div标签设置50%的border-radius值，再向标签中添加点击事件

- 事件坐标实现

 - 具体实现：
 
    <script>

    // 获取目标元素
    var box = document.getElementById('box');

    // 对目标元素target的圆形区域进行一个点击事件绑定
    function bindClickOnCircleArea(target, callback) {
    target.onclick = function (e) {
    e = e || window.event;
 
    // target中心点的坐标
    var x1 = 100;
    var y1 = 100;
 
    // 事件源坐标
    var x2 = e.offsetX;
    var y2 = e.offsetY;
 
    // 校验是否在圆形点击区，在的话就执行callback回调

    // 计算事件触发点与target中心的位置
    var len = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    // 通过半径进行校验
    if (len <= 100) {
      callback();
        } else  {
      alert('xxx');
            }
        }
    }
    // 执行
    bindClickOnCircleArea(box, function () {
        alert('xxx');
    });

    </script>

- map + area

 - 具体实现：

    <img src="../imgs/test.jpg" width="200" border="0" usemap="#Map" />
    <map name="Map" id="Map">
    <area shape="circle" coords="100,100,100" href="http://www.baidu.com" target="_blank" />
    </map>

    需要注意的是：area默认是没有宽高的，所以为了使得它能够有宽高用于点击，我们设置它的position为absolute，这种情况下，我们不仅可以设置它的宽高，同时背景色、边框都能进行一个简单的设置。再补充一个之前没有提到的东西，通过按tap键我们可以依次查看页面中的area（会依次显示每个area的outline）。

你认为table布局的优缺点是什么？

- 优点：兼容性好，内容可自适应，有利于搜索引擎优化

- 缺点：table比其他html占用字节更多（延迟下载时间，占用服务器更多流量资源）
        table会阻挡浏览器渲染引擎的渲染顺序，只有当数据全部加载完成才会显示在页面

元素属性alt和title的区别

- alt用于用于图像无法显示或在用户禁止图像显示时代替图像在浏览器中的显示的内容

- title用于当鼠标移至元素上时，显示额外的提示信息

title与h1的区别、b与strong的区别、i与em的区别？

- title于h1的区别：title是网页主题标签，h1是文本标签

- b与strong的区别：b标签是一种物理元素，它所传达的意思只是告诉浏览器将文本加粗；strong标签是一种逻辑元素，强调文档的逻辑，并告知浏览器应该如何显示

- i与em的区别：i标签是一种物理元素，它所传达的意思只是告诉浏览器将文本变为斜体；em标签是一种逻辑元素，强调文档的逻辑，并告知浏览器应该如何显示

- 推荐使用strong，em标签有利于seo优化

为什么HTML5只需要写<!DOCTYPE HTML>就可以？

- HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。而 HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为。其中，SGML是标准通用标记语言,简单的说，就是比HTML,XML更老的标准，这两者都是由SGML发展而来的。BUT，HTML5不是的。

<!DOCTYPE>声明位于位于HTML文档中的第一行，处于 <html> 标签之前。作用：告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以怪异模式呈现。