#简述什么是回调函数，并写出一个回调函数

    定义：回调函数就是一个参数，将这个函数a作为一个参数传入另一个函数b，当函数b执行完后再执行函数a，
    
    这个过程就叫回调

    例子：
        function a(callback){
            callback()
            console.log("我是主函数a")
        }

        function b(){
            setTimeout("console.log('我是回调函数')", 3000);//模仿耗时操作
        }

        a(b)

        由于上述回调函数设置了settimeout模仿实际使用中的耗时操作，故主函数完成后才会执行回调函数