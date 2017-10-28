$(function(){
	var bindTouchEnd = window.ontouchstart===null?"touchend":"click";
	$(".time-table__item").on(bindTouchEnd,function(){
		var chosen = $(this).data("time-table");
		var moveTo = $(".program-list__item:nth-of-type("+chosen+")").offset().top;
		$("body").animate({
			scrollTop: moveTo
		},150*chosen,"swing");
	});
});