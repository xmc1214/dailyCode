#css常用的布局方式有哪些?

    1.传统布局方式：display + position + float

    2.flex布局：又称为弹性布局，当元素设置flex属性后，子元素的 float、clear 和 vertical-align 属性将失效。

        父容器拥有六大属性:

            flex-direction：主轴方向

            flex-wrap：超出父容器的子容器的排列样式

            flex-flow：前两个属性的简写

            justify-content：子容器在主轴方向的排列方式

            align-items：子容器在交叉轴方向的排列方式

            align-content：多根轴线的对齐方式，如果项目只有一根轴线，该属性不起作用

        子容器也有六大属性:

            order：子容器的排列顺序

            flex-grow：子空间的剩余拉伸比例

            flex-shrink：子容器超出空间的压缩比例

            flex-basis：子容器在不伸缩情况下的原始尺寸

            flex：子元素的 flex 属性是 flex-grow,flex-shrink 和 flex-basis 的简写

            align-self：允许单个项目有与其他项目不一样的对齐方式，可覆盖父容器 align-items 

    3.Grid网格布局：使用 grid 布局很简单，通过display属性设置属性值为 grid 或 inline-grid 或者是 
    subgrid（该元素父元素为网格，继承父元素的行和列的大小）

    4.圣杯布局：常见的三栏布局，两边顶宽，中间自适应

        HTML结构：

            <div class='container'>
                <div class='middle'>中间部分</div>
                <div class='left'>左边部分</div>
                <div class='right'>右边部分</div>
            </div>

        css样式：

            body {
                min-width: 600px;
            }
        
            .container {
                padding: 0 200px;
            }
        
            .middle {
                width: 100%;
                background: paleturquoise;
                height: 200px;
                float: left;
                color: black;
                text-align: center; 
                line-height: 200px;
                z-index: 99;
            }
        
            .left {
                width: 200px;
                background: rebeccapurple;
                height: 200px;
                float: left;
                color: aliceblue;
                text-align: center;
                line-height: 200px;
                margin-left: -100%;
                position: relative;
                right: 200px;
            }
        
            .right {
                width: 200px;
                height: 200px;
                background: yellowgreen;
                float: left;
                color: aliceblue;
                text-align: center;
                line-height: 200px;
                margin-left: -200px;
                position: relative;
                left: 200px;
            }

    5.双飞翼布局:与圣杯布局的区别在于不使用定位将两边的盒子移至左右两边，允许的页面最小宽度小于圣杯布局

        HTML结构：

            <div class="container">
                <div class="middle-contanier">
                    <div class="middle">中间部分</div>
                </div>
                <div class="left">左边部分</div>
                <div class="right">右边部分</div>
            </div>

        css样式：

            body {
                min-width: 400px;
            }
        
            .middle-contanier {
                width: 100%;
                background: paleturquoise;
                height: 200px;
                float: left;
                color: black;
                text-align: center;
                line-height: 200px;
                z-index: 99;
            }
        
            .middle {
                margin-left: 200px;
                margin-right: 200px;
            }
        
            .left {
                width: 200px;
                background: rebeccapurple;
                height: 200px;
                float: left;
                color: aliceblue;
                text-align: center;
                line-height: 200px;
                margin-left: -100%;
            }
        
            .right {
                width: 200px;
                height: 200px;
                background: yellowgreen;
                float: left;
                color: aliceblue;
                text-align: center;
                line-height: 200px;
                margin-left: -200px;
            }
