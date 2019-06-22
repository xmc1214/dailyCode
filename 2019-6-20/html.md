#常见的浏览器内核都有哪些？并介绍下你对内核的理解

    1.Gecko: netscape6开始采用的内核，火狐使用的最多，故也称为FireFox内核，此外Gecko也是一个跨平台内核，可以在Windows、 BSD、Linux和Mac OS X中使用。

    2.Trident: 这是微软开发的一种排版引擎。该内核程序在1997年的IE4中首次被采用，是微软在Mosaic代码的基础之上修改而来的，并沿用到目前的 IE7

    3.Presto: Presto是一个由Opera Software开发的浏览器排版引擎，该内核在2003年的Opera7中首次被使用，该款引擎的特点就是渲染速度的优化达到了极致，也是目前公认网页浏览速度最快的浏览器内核

    4.Webkit: 苹果公司自己的内核，也是苹果的Safari浏览器使用的内核。 Webkit引擎包含WebCore排版引擎及JavaScriptCore解析引擎，均是从KDE的KHTML及KJS引擎衍生而来，它们都是自由软 件，在GPL条约下授权，同时支持BSD系统的开发。所以Webkit也是自由软件，同时开发源代码。在安全方面不受IE、Firefox的制约，所以 Safari浏览器在国内还是很安全的。

内核的理解:

    浏览器的内核主要分为渲染引擎和javaScript引擎，渲染引擎主要负责取得网页的内容(html,xml和图像等)，整理讯息(例如css)，以及计算网页的显示方式，然后输出到显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不同。JS引擎主要负责解析和执行JavaScript来实现网页的动态效果。