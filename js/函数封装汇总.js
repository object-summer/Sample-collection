/**
 * Created by dell3020mt-47 on 2017/10/28.
 */
animate()
animate()
animate()
1_准备的animate()动画函数，备调用
function animate(obj,target) {
    var speed = obj.offsetLeft < target ? 15 : -15;//让增量apeed，选择是加5还是减5
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft;//把到目标位置的距离给result
        obj.style.left = obj.offsetLeft + speed + "px";
        if (Math.abs(result) <= 15) {//判断result的绝对值是否是小于或是等于5
            clearInterval(obj.timer);
            obj.style.left = target + "px";//在范围之内则直接定在目标位置处
        }
    }, 10)
}


client（）
client（）
client（）
2_检测屏幕大小，封装client（）函数
 function  client(){//检测屏幕大小，封装client（）函数
 if(window.innerWidth != null){//ie9+ 浏览器
    return{
        width:window.innerWidth,
        height:window.innerHeight
    }
 }else if(document.compatMode === "CSS1Compat"){//其他标准浏览器
        return{
             width:document.documentElement.clientWidth,
             height:document.documentElement.clientHeight
        }
 }
     return{
            width:document.body.clientWidth,
            height:document.body.clientHeight
     }
 }//封装完毕*/

scroll（）
scroll（）
scroll（）
scroll（）
3_返回顶部小火箭，调用scroll（）scroll函数__设置或返回当前页面相对于窗口显示区左上角的 X和y位置，用于做固定的导航栏或者是跟着浏览器可视区移动的广告，以及小火箭返回到页面顶部等js特效
 function $(id) {return document.getElementById(id);}
 function scroll() {
 if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
 {
 return {
 left: window.pageXOffset,//设置或返回当前页面相对于窗口显示区左上角的 X 位置
 top: window.pageYOffset
 }
 }
 else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
 // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
 {
 return {
 left: document.documentElement.scrollLeft,
 top: document.documentElement.scrollTop
 }
 }
 return { //  剩下的肯定是怪异模式的
 left: document.body.scrollLeft,
 top: document.body.scrollTop
 }
 }
 //scroll（）函数结束，准备被调用



close()
close()
close()
close()
4_5秒关闭广告close()函数
 function $(id){return Document.getElementById("id");}//$()获取函数
 function hide(id){$(id).style.display = "none";}//hide（）隐藏函数
 function show(id){$(id).style.display = "block";}
 setTimeout(closeAd,1000);
 function closedAd(){
 hide("left");//关闭id为left
 show("right");//显示
 }

style.["width":100px]
完整的缓动器
完整的缓动器
完整的缓动器
5_再次完善封装anitae（）函数，完整的缓动器用于轮播图
function animate(obj,target){  //  第一个参数 动谁   第二个参数  动多少
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 计算步长   动画的原理    盒子本身的位置  +  步长
        var step = (target - obj.offsetLeft) / 10;  // 步长
        step =  step > 0 ? Math.ceil(step) : Math.floor(step);  //  取整步长
        // obj.style.left = 盒子本身的位置  +  步长
        obj.style.left = obj.offsetLeft + step + "px";
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
        }
    },30)
}



6_getstyle()封装返回当前样式的函数，考虑兼容性

function getstyle(obj,attr){//attribute(属性)得意思
    if(obj.currentStyle){
        return obj.currentStyle[attr];//attr是一个字符串
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}
getstyle(obj,"width")//attr是字符串类型，所以加双引号
/*
var box = document.getElementById("box");
console.log(getstyle(box,"width"));
*/

7_/*再次封装运动框架基本函数animate（）*/
function animate(obj,attr,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        var current = parseInt(getstyle(obj,attr));
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style[attr] = current + step + "px";
        if(current == target){
            clearInterval(obj.timer)
        }
    },30)
}

animate(ul,"left",400);//让ul的属性left向目标值400走400px// ；

/*再次完善animate（）函数，用josn，可以用多个属性*/
animate(ul,{width:200,heligh:200});//{}是josn的写法
var flag = true;//用来判断是否停止定时器
function animate(obj,josn){//  josn写法  {width:200,heligh:200}
    clearInterval(obj.timer);
    timer = setInterval(function(){
        for(var attr in josn){  //for循环遍历josn，attr是属性（width,heligh等）
            var current = parseInt(getstyle(obj,attr));//这是获得当前的obj。attr的属性值，parseInt()转换为整数
            var current = 0;
            if(attr = "opacity" ){
                current = parseFloat(getstyle(obj,attr)*100);//这是获得当前的obj。attr的属性值，parseInt()转换为整数
            }else {
                current = parseInt(getstyle(obj,attr));
            }
            var step = (josn[attr] - current)/ 10;//josn[attr]是当前的属性值
            step = step > 0 ?Math.ceil(step):Math.floor(step);
            //当attr是opacity时，他的只是小数，则我们要判断一下
            if（attr == "opacity"）{//判断用户有没有输入opacity
                if("opactiy" in obj.style[attr]){//判断浏览器是否支持opacity属性
                    obj.style[opacity] = (current + step )/100;
                }else{
                    obj.style[filter] = alpha(opacity = "+josn[attr]*100+");
                }
            }else {
                obj.style.opacity = current + step + "px";
            }
            //obj.style[attr] = josn[attr] + step + "px";//style[attr]是css的另一种写法  1、style。attr   2、style[attr]
            if（current != josn[attr]）{//只要有一个不满足，则停止定时器
                flag  = flase;
            }
        }
        if(flag){
            clearInterval(obj.timer);
        }
    },30)
}
//被调用的getstyle（）函数
function getstyle(obj,attr){//attribute(属性)得意思
    if(obj.currentStyle){
        return obj.currentStyle[attr];//attr是一个字符串
    }else{
        return window.getComputedStyle(obj,null)[attr];
    }
}





加载多个js文件函数

function addLoadEvent(func) {/*加载多个js文件函数*/
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(changeimg);/*调用多个js文件方式*/
