#说说你对css盒子模型的理解 

    1.盒子模型基本概念：标准模型 + IE模型

    2.两者的区别

        标准模型：元素宽度 = content

        IE模型：元素宽度 = content + padding + border
    
    3.css如何设定使用哪种模型

         box-sizing: content-box;(标准模型，默认)    
         
         box-sizing: border-box;(IE模型)

    4.可以就着盒子模型谈论边距重叠的问题，以及解决方案BFC