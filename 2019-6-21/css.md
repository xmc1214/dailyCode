#px em rem 的区别是什么

    px的定义：相对长度单位，像素px是相对于显示器屏幕分辨率而言的。

    px的特点：

        1.IE无法调整那些使用px作为单位的字体大小

        2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位

        3.Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)


    em的定义：em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的

    字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸

    em的特点：

        1.em的值不是固定的

        2.em会继承父级元素的字体大小

    注意：任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。
    
    那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，
    
    这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，
    
    然后换上em作为单位就行了


    rem的定义：是css3新增的一个相对单位

    rem的特点：

        1.rem的值不固定

        2.相对于html根元素设定大小，通过修改根元素就可以成比例的改变所有字体的大小，对于不支持rem的浏览器可添加绝对单位进行声明

    px与rem的选择

        1.对于只需要适配少部分手机设备，且分辨率对页面的影响不大的，使用px即可

        2.对于需要适配各种移动端设备，使用rem,例如iphone和ipad分辨率较大的设备