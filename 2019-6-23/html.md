#### 浏览器内多个标签页之间的通信方式有哪些？

    1.localStroage

        使用localStroage.setItem(key,value)添加内容

        使用stroage监听添加、修改、删除等事件

            window.addEventListener("storage",function(event){
                $("#name").val(event.key+”=”+event.newValue);
            });

    2.使用 cookie + setInterval

        <input id="name"><input type="button" id="btnOK" value="发送">

        页面a: $(function(){
        $("#btnOK").click(function(){
            varname=$("#name").val();
            document.cookie="name="+name;
            });
        });

        页面b:   
         
        //获取Cookie天的内容
        function getKey(key) {
            return JSON.parse("{\""+ document.cookie.replace(/;\s+/gim,"\",\"").replace(/=/gim, "\":\"") +"\"}")[key];
        }

        //每隔1秒获取Cookie的内容
        setInterval(function(){
            console.log(getKey("name"));
        },1000);