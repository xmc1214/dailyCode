####编写一个加密字符串的方法

    1. function strEncrypt(str){
        return str.split("").map((s)=>{
            return String.fromCharCode(s.charCodeAt() + 1)
        }).join('')
    }

    console.log(strEncrypt('Hello world'))

    2.仅支持浏览器端

        function encode (str) {
	        return btoa(encodeURIComponent(str));//转码
        }

        function decode (str) {
	        return decodeURIComponent(atob(str));//解码
        }