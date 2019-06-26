#### 清除浮动的方式以及优缺点

    1.overflow属性清除浮动

        实现过程：通过给父盒子设置overflow:hidden来清除子元素浮动所造成的影响

        缺点：在超出父盒子区域的元素会被隐藏

    2.额外标签法

        实现过程：通过在浮动盒子下方放置一个盒子设置clear的类名，添加clear:both

    如果是内部标签，清除浮动后会把父元素的高度撑开，如果是外部标签则清除浮动后父元素高度不变

        缺点：这种方式会增加页面标签，造成结构混乱

    3.使用伪类元素:after来清除浮动

        实现过程：

            .clearfix:after{

　　　　　　    content:"";//设置内容为空

　　　　　　    height:0;//高度为0

　　　　　　    line-height:0;//行高为0

　　　　　　    display:block;//将文本转为块级元素

　　　　　　    visibility:hidden;//将元素隐藏

　　　　　　    clear:both//清除浮动

　　　　　  }

　　　　    .clearfix{

　　　　　　    zoom:1; //为了兼容IE

　　　　    }


    4.双伪类元素清除浮动

        实现过程：

            .clearfix:after{

　　　　　　    content:"";//设置内容为空

　　　　　　    height:0;//高度为0

　　　　　　    line-height:0;//行高为0

　　　　　　    display:block;//将文本转为块级元素

　　　　　　    visibility:hidden;//将元素隐藏

　　　　　　    clear:both//清除浮动

　　　　　  }

　　　　    .clearfix{

　　　　　　    zoom:1; //为了兼容IE

　　　　    }
