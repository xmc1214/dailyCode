#写一个获取当前url查询字符串中的参数的方法

    解题思路：首先使用window对象的方法获取带问号的字符串，然后取得问号后的字符串，根据'&'拆分参数，使用map设置key,value，根据
    '='拆分key,value

    代码实现：

        function queryString(){
            const search = window.location.search
            search = search.substr(1, search.length);
            const res = {};
            if (!search) return res;
            search.split('&').map(item => {
                const [key, value] = item.split('=');
                res[key] = decodeURIComponent(value);
            });
            return res;
        }