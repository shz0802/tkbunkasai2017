$(function(){
	var bindTouchStart = window.ontouchstart===null?"touchstart":"mousedown",bindTouchEnd = window.ontouchend===null?"touchend":"mouseup";
	$(".time-table__item").on(bindTouchEnd,function(){
		var chosen = $(this).data("time-table");
		var moveTo = $(".program-list__item:nth-of-type("+chosen+")").offset().top;
		$("body").animate({
			scrollTop: moveTo
		},150*chosen,"swing");
	});

	$(".cafe-menu-trigger").on(bindTouchEnd,function(){
		$(".cafe-menu-trigger").toggleClass("is-active");
		$(".cafe-menu-list").slideToggle(500);
	});
	$(".cafe-menu__item").on({
		"touchstart": function(){
			$(this).has("a").addClass("is-touched");
		},
		"touchend": function(){$(this).removeClass("is-touched");}
	});
	$(".touch-item").on(bindTouchStart,function(){
		$(this).addClass("is-touched");
	}).on(bindTouchEnd,function(){
		$(this).removeClass("is-touched");
	});

	$(".menu-exp__icon-list li").on(bindTouchEnd,function(){
		var chosen = $(this).data("menu-id"),moveTo = $(".menu-exp-type:nth-of-type("+chosen+")").offset().top,adjust;
		if($(window).outerWidth()<959){
			adjust = $(window).outerWidth()*0.175;
		}else{
			adjust = $(window).outerWidth()*0.05;
		}
		$("body").animate({
			scrollTop: (moveTo - adjust)
		},500*chosen,"swing");
	});
});