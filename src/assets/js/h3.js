$(function(){
	var bindTouchEnd = window.ontouchstart===null?"touchend":"click";
	$(".time-table__item").on(bindTouchEnd,function(){
		var chosen = $(this).data("time-table");
		var moveTo = $(".program-list__item:nth-of-type("+chosen+")").offset().top;
		$("body").animate({
			scrollTop: moveTo
		},150*chosen,"swing");
	});

	$(".cafe-menu-list").slideUp(0);
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
});