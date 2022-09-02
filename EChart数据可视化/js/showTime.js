var t = null;
t = setTimeout(time,1000);//开始运行
function time(){
    clearTimeout(t);//清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    document.querySelector(".showTime").innerHTML = '当前时间：' 
    + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s+"秒";
    t = setTimeout(time,1000)
}