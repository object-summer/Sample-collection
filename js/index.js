
//关于书籍图片的处理
$(function(){
	$(".right_books").hover(function(){
		$(this).addClass("find_fa").css("border-bottom","2px solid #48B30F")
			.siblings().removeClass("find_fa").css("border-bottom","2px solid #FFFFFF");
		$(".find_fa").find(".hidden_span").fadeIn();
	}).mouseleave(function(){
		$(".find_fa").css("border-bottom","2px solid #FFFFFF").find(".hidden_span").fadeOut();
	});
	$(".left_books").hover(function(){
		$(this).addClass("find_fa_left").css("border-bottom","2px solid #48B30F")
			.siblings().removeClass("find_fa_left").css("border-bottom","2px solid #FFFFFF");
		$(".find_fa_left").find(".hidden_span_left").fadeIn();
	}).mouseleave(function(){
		$(".find_fa_left").css("border-bottom","2px solid #FFFFFF").find(".hidden_span_left").fadeOut();
	})
})
//按钮的文字改变
$(function(){
	$(".btn_find").hover(function(){
		$(this).children().html("GO");
	}).mouseout(function(){
		$(this).children().html("去看看");
	})
})
//切换公告栏和活动栏

$(function(){
	$('.sec-one').show();
	$(".index-one").click(function(){
		$(".sec-two").hide();
		$(".sec-one").show();
	})
	$(".index-two").click(function(){
	$(".sec-two").show();
		$(".sec-one").hide();
	})
})
//$(function(){
//	$('sec-1').show();
//	$("jsone").click(
//		function(){
//		$('.sec-three,.sec-two').hide();
//		$('.sec-one').show();
//		})
//	$("jstwo").click(
//		function(){
//		$('.sec-three,.sec-one').hide();
//		$('.sec-two').show();
//		})
//	$("jsthree").click(
//		function(){
//		$('.sec-three,.sec-one').hide();
//		$('.sec-three').show();
//		})
//})
$(
	function(){
		$('sec-1').show();
		$("jsone").click(function(){
			$('sec-1').removeClass('nav-one')
		})
		$("jstwo").click(function(){
			$('sec-2').removeClass('nav-two')
		})
		$("jsthree").click(function(){
			$('sec-3').removeClass(nav-three)
		})
	}
)










var three=getElementById("nav-three")
three.onclick=function(){
	three.style.color="blue";
}
