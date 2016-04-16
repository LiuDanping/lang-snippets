#在京东页面拷的获得cookie的函数

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}       

#自动补全
function fix(oldItem,fixStr,len,type){  //type: left right 默认是left
    if(typeof oldItem == 'object') return '';
    var type = type || 'left';
    var oldStr = oldItem.toString();
    var strLen = oldStr.length;
    var arr = oldStr.split('');
    var typeFun = null;
    if(type=='left'){
        typeFun = Array.prototype.unshift;
    }else if(type=='right'){
        typeFun = Array.prototype.push;
    }
    for(var j = 0; j < len - strLen; j++){
        typeFun.call(arr,fixStr);
    }
    return arr.join('');
}
