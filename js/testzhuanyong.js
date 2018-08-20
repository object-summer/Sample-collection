window.onload = function(){
	
	/*1-这是$id页面的js
			function $(id){
				return document.getElementById(id);
				}
			$("test").style.backgroundColor = "red";
			$("demo").style.backgroundColor = "yellow";

/*2-鼠标展示css部分（淘宝商品图展示）
				var box = document.getElentById("box");
				function fun(id,bg){//封装函数
					var obj = document.getElentById(id);
					obj.onmouseover = function(){
						box.style.backgroundImage = bg ;
					}
					}
				fun("li01","url(images/pro1.jpg)");
				fun("li02","url(images/pro2.jpg)");
				fun("li03","url(images/pro1.jpg)");
				fun("li04","url(images/pro2.jpg)");
				fun("li05","url(images/pro1.jpg)");
				console.log("网上")
*/
/*2-点击隐藏文字（搜索框）js

var text = document.getElementById("text");
 text.onfocus = function(){
 	if(text.value == "请输入..."){
 		text.value = "";
 		text.style.color = "#333";
 	}
 }
  text.onblur = function(){
  	if(text.value == ""){
  		text.value = "请输入...";
  		text.style.color = "#CCC"
  	}
  }*/
 
 
/*3-下一个js
function $(id) {
	return document.getElementById(id);
}
//$("text2").onfocus();//这个是自动获取焦点，即进入页面后光标就会在搜索框中
//$("text2").onmouseover = function(){$("text2").select();}这个是鼠标经过选择搜索框内的全部内容
$("text2").onblur = function(){//判断离开焦点
	if(this.value == ""){
	$("result").className = "wrong";
	$("result").innerHTML = "内容不能为空";
	}else 
	if(isNaN(this.value)){
	$("result").className = "wrong";
	$("result").innerHTML = "请输入数字";
	}else 
	if(isNaN(this.value<150 || this.value>0)){
	$("result").className = "wrong";
	$("result").innerHTML = "请输入请输入合理范围";
	}else
	{
		$("result").className = "right";
		$("result").innerHTML = "输入正确";
	}
}*/
/*4-这是hr金字塔js
for(var i=0; i<=100;i+3){
	document.write("<hr/>");
	}
*/

/*5-这是全选和单选js
var btns = document.getElementsByTagName("button");//注意是bytagnam而不是byid
var inputs = document.getElementById("bottom").getElementsByTagName("input")/*这是不简洁的js*/
/*btns[0].onclick = function(){//对btns的第一个点击
	for(var i=0; i<inputs.length; i++){//遍历inputs
		inputs[i].checked = true;//true和fals是常量不用加“”
	}
}
btns[1].onclick = function(){
	for(var i=0; i<inputs.length; i++){
		if(inputs[i].checked == true){
			inputs[i].checked = false;
		}else
		{
			inputs[i].checked = true;
		}
	}
}
btns[2].onclick = function(){
	for(var i=0; i<inputs.length;i++){
		inputs[i].checked = false;
	}
	
}*//*这是简洁的js
function all(flag){
	for(var i=0; i<inputs.length;i++){
		inputs[i].checked = flag;
	}
}
btns[0].onclick = function(){
	all(true);
}
btns[2].onclick = function(){
	all(false);
}
btns[1].onclick = function(){
		for(var i=0; i<inputs.length; i++){
		inputs[i].checked = true ? inputs[i].checked = false : inputs[i].checked = true;
}*/

/*6-这是tab选项卡的排他思想
var btns6 = document.getElementsByTagName("button");
for (var i=0; i<btns6.length; i++){//遍历所有button
	btns6[i].onclick = function(){//第i个点击事件
		for(var i=0; i<btns6.length; i++){
			btns6[i].className = "";//清空所有人，包括自己
		}
		this.className = "demo4";//现在只留下自己一个，而且是点击的
	}
}*/

/*7-tab切换效果
var btns7 = document.getElementsByTagName("button");
var divs7 = document.getElementById("divs").getElementsByClassName("div");
for (var i=0; i<btns7.length; i++){
	//让所有btn按钮类名清除，只留当前被点击的那一个
	btns7.index = i ;//这是整个js里最重要的一步：把当前点击的序号值i给btns7的自定属性index（其中index是随意设置的，也可以是btns.suiyi）'
	btns7[i].onclick = function(){
//		alert(btns7.index);
		for(var j=0; j<btns7.length ;j++ ){
			btns7[j].className = "";
			divs7[j].className = "";
		}
		//只留自己,当前点击的这个按钮，添加类名
		this.className = "purple";
	}
}
//先隐藏下面div盒子
//for(var i=0; i<divs7.length; i++){
//	divs7[i].style.display = "none";
//}

//只留下一个相应的盒子
   divs7[this.index].className = "show";
*/
//8-tab选项卡复习,yes
/*function tab(obj){
	var spans8 = document.getElementsByTagName("span");
	var lis8 = document.getElementsByTagName("li");
	for(var i=0; i<spans8.length; i++){
		spans8[i].index = i ;
	    spans8[i].onclick = function(){
			for(var j=0; j<spans8.length; j++){
				spans8[j].className = "";
				lis8[j].className = "";
			}
			//留下自己
			this.className = "corrent";
			//this.index是spans8的索引序号，指向被点击的那一个，然后被li所用
			lis8[this.index].className = "show";
		}
	}
}
tab("one");
tab("two");
tab("three");*/


/*10-封装自己的class类名，i8不兼容
function getclass(classname){
	//如果浏览器支持,则直接返回
	if(document.getElementsByClassName){
		return document.getElementsByClassName(classname)
	}
    //如果浏览器不支持
    var arr = [];//用于存放数组
    var dom = document.getElementsByTagName("*");//获取所有的节点
    for (var i=0; i<dom.length; i++){
    	if(dom[i].className == classname){
    		arr.push("dom[i]");
    	}
    }
    return arr;
}
getclass("dome");
*/

11-京东轮播图js
var scroll = document.getElementById("scroll");
var circle = document.createElement("div");
circle.attributes("class","circle");
scroll.appendChild(circle);
//生成circle大盒子
var ul = document.getElementsByTagName("ul");
var lis = ul.children;//ul的所有的孩子
for(var i=0; i<lis.length; i++){
	var newspan = document.createElement("span");
	newspan.innerHTML = i+1 ;
	circle.appendChild(newspan);
	var child = circle.children;
	child[0].setAttribute("class","current");
}


/*12-微博发布
var btn = document.getElementsByTagName("button")[0];
var txt = document.getElementsByTagName("textarea")[0];
var ul = document.createElement("ul");
btn.parentNode.appendChild(ul);
btn.onclick = function (){
	if(txt.value == ""){
		alert("内容不能为空");
		return false; //终止执行函数
	}
	var newli = document.createElement("li");
	newli.innerHTML = txt.value + "<a href='javascript:;'>删除</a>";
	ul.appendChild(newli);
	
	txt.value = "";//清楚表单内容
	//把新添加的li放在最前面，insertBefor(,)
	var lis = ul.children;
	if(lis.length== 0){//第一次创建li
		ul.appendChild(newli);//在ul后面添加新的li
	}
	else{
		ul.insertBefore(newli,lis[0]);//在ul后面的第一个lis【0】前面添加一个newli
	}
	var as = document.getElementsByTagName("a");
	for(var i=0;i<as.length;i++){//遍历所有的a
		as[i].onclick = function(){
			ul.removeChild(this.parentNode);//给this（当前的a）移除他的父亲节点li
		}
	}	
}*/


/*13-日历
var box = document.getElementById("box");
var ds = box.children;
var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六",];
var date = new Date();
ds[0].innerHTML = date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDay()+"日"+arr[date.getDay()];
ds[1].innerHTML = date.getDate();*/



/*14-节点操作，添加li节点
var demo_14 =document.getElementById("demo_14");
var btn = document.getElementsByTagName("button")[0];
btn.onclick = function(){
	var newli = document.createElement("li");
	newli.innerHTML = "13";
	demo_14.appendChild(newli);
}
*/

/*15-模拟时钟
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var h=0;s=0;m=0;ms=0;
//定时器开始
setInterval(function(){
	var date = new Date();//得到最新的时间
	ms = date.getMilliseconds();//得到的是1.2秒，0.2是毫秒数
	s = date.getSeconds() + ms / 1000;//得到的是1.2分钟
	m = date.getMinutes() + s / 60;
	h = date.getHours()%12 + m / 60;
	//开始旋转角度
	//一圈360度，一秒6度，一分钟6度，一小时30度
	//这是谷歌兼容
	second.style.WebkitTransform = "rotate("+s*6+"deg)";
	//           谷歌的变化                             旋转                               度数
	minute.style.webkitTransform = "rotate("+m*6+"deg)";
	hour.style.webkitTransform = "rotate("+h*30+"deg)";
	//这是火狐（mozllia firefox）兼容
	second.style.MozTransform = "rotate("+s*6+"deg)";
	//           变化                             旋转                               度数
	minute.style.MozTransform = "rotate("+m*6+"deg)";
	hour.style.MozTransform = "rotate("+h*30+"deg)";

},1000)
*/

/*16-发送短信验证
var btn_16 = document.getElementById("btn_16");
var cont = 5;
var timer = null;
btn_16.onclick = function(){
	this.disable = true;
	//this指向的是btn
	var that = this;
	//把btn对象给that，如var _this = this(这样便不会出现下面函数内都用this)
	timer = setInterval(sendtextmessage,1000);
	function sendtextmessage(){
			cont--;
//			this.innerHTML = "请等待"+ cont +"秒";其中this指向的是新的函数sendtext参数，而不是btn
	    if(cont>=0){
	    	that.innerHTML = "请等待"+ cont +"秒";
	    }else{
	    	that.innerHTML = "请重新发送短信"
	    	that.disable = false;//双重否定，则肯定
	    	clearInterval(timer);
	    	cont = 5;//上一步结果是0，回不去5.因此我们数值回到5
	    }
	    }
	}
*/

/*17-5秒跳转
var demo_17 = document.getElementById("demo");
var cont = 5;
var speed = 1000;
setTimeout(goIndexPage,speed);//一秒之后执行这个函数
function goIndexPage(){
	cont--;
	demo_17.innerHTML = "<a href="www.baidu.com">本页面将在"+cont+"秒后跳转";
	if(cont<0){
		window.location.href="http://www.baidu.com";
	}else{
		setTimeout(goIndexPage,speed);//递归调用，自己调用自己
	}
}
*/

/*18-5秒关闭广告（练习hide，$,show）
function $(id){return Document.getElementById("id");}//$()获取函数
function hide(id){$(id).style.display = "none";}//hide（）隐藏函数
function show(id){$(id).style.display = "block";}
setTimeout(closeAd,1000);
function closedAd(){
	hide("left");//关闭id为left
	show("right");//显示
}
*/

/*23-点击跟随鼠标
var image = document.getElementById("image");
document.onclick = function(event){
	var event = event || window.event;
	targetX = event.clientX - image.offsetWidth / 2;
	targetY = event.clientY - image.offsetHeight / 2;
	//缓冲
	var leaderX = 0 , leaderY = 0 , targetX = 0 , targetY = 0;
	setInterval(function(){
		leaderX = leaderX + (targetX - leaderX) / 10;
		leaderY = leaderY + (targetY - leaderY) / 10;
		image.style.left = leaderX + "px";
		image.style.top = leaderY + "px";
	},10)
}*/







/*26_固定导航栏，调用scroll（）*/
/*scroll函数__设置或返回当前页面相对于窗口显示区左上角的 X和y位置，用于做固定的导航栏或者是跟着浏览器可视区移动的广告，以及小火箭返回到页面顶部等js特效
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
var nav = $("nav");
var nav_value = nav.offsetTop;
//console.log(nav_value);
window.onscroll = function(){
	if(scroll().top >= nav_value){//调用了scroll（）函数
//		alert(到地方了);
		nav.className = "nav fixed";
	}
	else{
		nav.className = "nav";
	}
}
*/


/*26_两侧广告，调用scroll（）*/
/*scroll函数__设置或返回当前页面相对于窗口显示区左上角的 X和y位置，用于做固定的导航栏或者是跟着浏览器可视区移动的广告，以及小火箭返回到页面顶部等js特效
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

var imgs = $("imgs");
var top = imgs.offsetTop;
var leader = 0,target = 0;
var timer = null;
window.onscroll = function(){
	clearInterval(timer);
	target = scroll().top + top;
	timer = setInterval(function(){
		leader = leader + (target - leader)/10;
		imgs.style.top = leader + "px";
	},30)
}
*/






	/*28_检测屏幕大小，封装client（）函数
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
}//封装完毕
	//开始根据屏幕大小，改变页面的颜色
	reSize();//页面已加载，先调用一次
	window.onresize = reSize;//reSize是函数体的内容，而reSize()是函数全部
	function reSize(){
		var clientWidth = client().width;
		if(clientWidth > 960){
			document.body.style.backgroundcolor = "red";
		}
		else if(clientWidth > 640 )
			{
				document.body.style.backgroundColor = "green";
			}
			else
			{
				document.body.style.backgroundColor = "blue";
			}
	}
	 */


	/*29_（登录注册）点击空白处隐藏！！！！没有测试成功！！！！！
	function $(id) { return document.getElementById(id);}
	var login = document.getElementById("login");
	login.onclick = function(event) {
		$("mask").style.display = "block";
		$("show").style.display = "block";
		document.body.style.overflow = "hidden";  // 不显示滚动条
		//取消冒泡
		var event = event || window.event;
		if(event && event.stopPropagation)
		{
			event.stopPropagation();
		}
		else
		{
			event.cancelBubble = true;
		}
	}
	document.onclick = function(event) {
		var event = event || window.event;
		// alert(event.target.id);  // 返回的是点击的某个对象的id 名字
		// alert(event.srcElement.id);
		var targetId = event.target ? event.target.id : event.srcElement.id;
		// 看明白这个写法
		if(targetId != "show")  // 不等于当前点点击的名字
		{
			$("mask").style.display = "none";
			$("show").style.display = "none";
			document.body.style.overflow = "visible"; // 显示滚动条
		}
	}
*/
	/*30_选出文字，弹出文字层（用到获取targetid）
	function $(id) {return document.getElementById(id)}
	$("test").onmouseup = function(event) {
		var event = event || window.event;
		var x = event.clientX;  //  鼠标的x坐标
		var y = event.clientY;  //  同理
		var txt;  // 用于存贮文字的变量
		if(window.getSelection)  // 获取我们选中的文字
		{
			txt = window.getSelection().toString();   // 转换为字符串
		}
		else
		{
			txt = document.selection.createRange().text;   // ie 的写法
		}
		if(txt)   // 所有的字符串都为真  "" 是假    所有的数字为真  0  为假
		{
			//看看有没有选中的文字，没有选中文字为空的，就不应该执行   点击一下鼠标 就是空的
			showBox(x,y,txt);  // 调用函数
		}
	}
	document.onmousedown = function(event) {  // 点击空白处隐藏
		var event = event || window.event;
		var targetId = event.target ? event.target.id : event.srcElement.id;
		if(targetId != "demo"){
			$("demo").style.display = "none";
		}
	}
	function showBox(mousex,mousey,contentText) {  // 相关操作
		setTimeout(function() {
			$("demo").style.display = "block";
			$("demo").style.left = mousex + "px";
			$("demo").style.top = mousey + "px";
			$("demo").innerHTML = contentText;
		},200)
	}
*/





	//  4. 添加定时器
/*	var timer = null;   // 轮播图的定时器
	var key = 0;  //控制播放张数
	var square = 0; // 控制小方块
	timer = setInterval(autoplay,1000);  // 开始轮播图定时器
	function autoplay() {
		key++;  // 先 ++
		if(key>ullis.length - 1)  // 后判断
		{
			ul.style.left = 0;  // 迅速调回
			key = 1;  // 因为第6张就是第一张  第6张播放 下次播放第2张
		}
		animate(ul,-key*500);  // 再执行(图片的Width是500px)
		// 小方块
		square++;
		if(square > ollis.length -1)
		{
			square = 0;
		}
		for(var i=0;i<ollis.length;i++)   // 先清除所有的
		{
			ollis[i].className = "";
		}
		ollis[square].className = "cerrent";  // 留下当前的
	}
	//last最后  鼠标经过大盒子要停止定时器
	box.onmouseover = function() {
		clearInterval(timer);
	}
	box.onmouseout = function() {
		timer = setInterval(autoplay,1000);  // 开始轮播图定时器
	} 
*/
/*33_再次完善封装anitae（）函数*/
	/*//完整的缓动器用于轮播图，参数obj为box
	var btn = document.getElementById("btn");
	var obj = document.getElementById("obj");
	var timer = null;
	var target = 400px;
	btn.onclick = function () {
		timer = setInterval(function(obj){
			var step = (target - box.offsetLeft)/ 10;
			step = step > 0 ? 	Math.ceil(step):Math.floor(step);
			obj.style.left = obj.offsetLeft + step + "px";
			if (obj.offsetLeft = target){
				clearInterval(timer)
			}
		},30)
	}
	/!*再次完善封装anitae（）函数*!/
	/!*再次完善封装anitae（）函数*!/
	/!*再次完善封装anitae（）函数*!/
	/!*再次完善封装anitae（）函数*!/
	/!*再次完善封装anitae（）函数*!/
	/!*再次完善封装anitae（）函数*!/
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

	*/


	/*34_getstyle()封装返回当前样式的函数，考虑兼容性

	function getstyle(obj,attr){//attribute(属性)得意思
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,null)["attr"];
		}
	}
	var box = document.getElementById("box");
	//getstyle(box,"width");
	console.log(getstyle(box,"width"));
	 */


	/*/!*封装运动框架基本函数animate（）*!/
	/!*
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

	animate(ul,"left",400);//让ul的属性left向目标值400走400px；


	/!*再次完善animate（）函数，用josn，可以用多个属性*!/
	/!*animate(ul,{width:200,heligh:200});//{}是josn的写法
	animate(ul,{width:200,heligh:200});//{}是josn的写法
	animate(ul,{width:200,heligh:200});//{}是josn的写法
	animate(ul,{width:200,heligh:200});//{}是josn的写法
	animate(ul,{width:200,heligh:200});//{}是josn的写法*!/
	function animate(obj,josn){//  josn写法  {width:200,heligh:200}
		clearInterval(obj.timer);
		timer = setInterval(function(){
			for(var attr in josn){  //for循环遍历josn，attr是属性（width,heligh等）
				var current = parseInt(getstyle(obj,attr));//这是获得当前的obj。attr的属性值，parseInt()转换为整数
				var step = (josn[attr] - current)/ 10;//josn[attr]是当前的属性值
				step = step > 0 ?Math.ceil(step):Math.floor(step);
				obj.style[attr] = josn[attr] + step + "px";//style[attr]是css的另一种写法  1、style。attr   2、style[attr]
			}
		},30)
	}
	/!*再次完善animate（）函数，用josn，可以用多个属性*!/
	/!*再次完善animate（）函数，用josn，可以用多个属性*!/
	/!*再次完善animate（）函数，用josn，可以用多个属性*!/
	/!*再次完善animate（）函数，用josn，可以用多个属性*!/
	/!*再次完善animate（）函数，用josn，可以用多个属性*!/

	/!*animate(ul,{width:200,heligh:200});//{}是josn的写法*!/
	var flag = true;//用来判断是否停止定时器
	function animate(obj,josn){//  josn写法  {width:200,heligh:200}
		clearInterval(obj.timer);
		timer = setInterval(function(){
			for(var attr in josn){  //for循环遍历josn，attr是属性（width,heligh等）
				var current = parseInt(getstyle(obj,attr));//这是获得当前的obj。attr的属性值，parseInt()转换为整数
				var step = (josn[attr] - current)/ 10;//josn[attr]是当前的属性值
				step = step > 0 ?Math.ceil(step):Math.floor(step);
				obj.style[attr] = josn[attr] + step + "px";//style[attr]是css的另一种写法  1、style。attr   2、style[attr]
				if（current != josn[attr]）{//只要有一个不满足，则停止定时器
					flag  = flase;
				}
			}
			if(flag){
				clearInterval(obj.timer);
			}
		},30)
	}
*/

	/*36_仿网易云轮播图（animate（）等函数）*/
































}//这是上面的onload，别删了






















/*37_旋转木马轮播图（change（）和animtae（））*/
	//需要调用36和35的getstyle()和 animate（）上面
	function $(id){return document.getElementById(id);}
	var wrap = $("wrap");
	var arrow = $("arrow");
	var slider = $("slider");
	var lis = document.getElementsByTagName("li");
	wrap.onmouseover = function () {
		animate(arrow, {"opacity":100});
	}
	wrap.onmouseout = function () {
		animate(arrow, {"opacity":0});
	}
//	var josn
	var wrap = document.getElementById("wrap");  // 大盒子
	var arrow = document.getElementById("arrow");  // 三角
	var slider = document.getElementById("slide");
	var lis = slider.getElementsByTagName("li");  // 所有要操作的盒子
	wrap.onmouseover = function() {  // 鼠标经过显示和隐藏 左右两个箭头
		animate(arrow,{'opacity':100});
	}
	wrap.onmouseout = function() {
		animate(arrow,{'opacity':0});
	}
	//  存储了每个图片的信息
	var json = [
		{   //  1
			width:400,
			top:20,
			left:50,
			opacity:20,
			z:2
		},
		{  // 2
			width:600,
			top:70,
			left:0,
			opacity:80,
			z:3
		},
		{   // 3
			width:800,
			top:100,
			left:200,
			opacity:100,
			z:4
		},
		{  // 4
			width:600,
			top:70,
			left:600,
			opacity:80,
			z:3
		},
		{   //5
			width:400,
			top:20,
			left:750,
			opacity:20,
			z:2
		}
	];
	function change(){
		for(var i=0; i<lis.length; i++){
			animate(lis[i].width)
		}
	}















	//  存储了每个图片的信息
	var json = [
		{   //  1
			width:400,
			top:20,
			left:50,
			opacity:20,
			z:2
		},
		{  // 2
			width:600,
			top:70,
			left:0,
			opacity:80,
			z:3
		},
		{   // 3
			width:800,
			top:100,
			left:200,
			opacity:100,
			z:4
		},
		{  // 4
			width:600,
			top:70,
			left:600,
			opacity:80,
			z:3
		},
		{   //5
			width:400,
			top:20,
			left:750,
			opacity:20,
			z:2
		}
	];
	//  两个按钮点击事件
	// 函数节流
	var jieliu = true; //  用来控制函数节奏的 变量
	var as = arrow.children;
	change();
	for(var k in as)
	{
		as[k].onclick = function() {
			if(this.className == "prev")
			{
				//  alert("左侧")  移除第一个   放到json 最后一个
				if(jieliu == true)
				{
					change(false);
					jieliu = false;  // 点击完毕之后，立马取反
				}

			}
			else
			{
				// alert('右侧');   把 最后一个json 删除   并且把最后一个添加到json 第一个位置
				if(jieliu == true)
				{
					change(true);
					jieliu = false;  // 点击完毕之后，立马取反
				}
			}
		}
	}

	function change(flag) {
		//  来判断
		if(flag)
		{
			// 把 最后一个json 删除   并且把最后一个添加到json 第一个位置
			json.unshift(json.pop());
		}
		else
		{
			//   移除第一个   放到json 最后一个
			json.push(json.shift());
		}
		// 为什么给for呢？ 以为我们的json 有5个  盒子li 有 5个
		for(var i=0;i<json.length; i++)
		{
			animate(lis[i],{
				width: json[i].width,
				top: json[i].top,
				left: json[i].left,
				opacity:json[i].opacity,
				zIndex:json[i].z
			},function(){ jieliu = true;})  // 回调函数是等动画执行完毕  才行
		}
	}




























	

















