/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function r(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(t,c,s){if(arguments.length>1&&!e.isFunction(c)){if(s=e.extend({},u.defaults,s),"number"==typeof s.expires){var d=s.expires,f=s.expires=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d)}return document.cookie=[n(t),"=",i(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var a=t?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;m>l;l++){var x=p[l].split("="),g=o(x.shift()),j=x.join("=");if(t===g){a=r(j,c);break}t||void 0===(j=r(j))||(a[g]=j)}return a};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});

// extend JQuery
$.fn.extend({
    touchInterface : function(up){
		var down = (arguments.length > 1 ) ? arguments[1] : false;
        var move = (arguments.length > 2 ) ? arguments[2] : false;
        var cancel = (arguments.length > 3 ) ? arguments[3] : false;
        return $(this).on({
            'touchstart mousedown': function(e){
                e.preventDefault();
                this.touching = true;
                if(down)down(e,$(this));
            },
            'touchmove mousemove': function(e){
                if(!this.touching)return;
                e.preventDefault();
                if(move)move(e,$(this));
                if('ontouchstart' in window){
                    var touch = e.originalEvent.changedTouches[0];
                    var offset = $(this).offset();
                    if( touch.pageX < offset.left || touch.pageX > $(this).outerWidth()  + offset.left ||
                        touch.pageY < offset.top  || touch.pageY > $(this).outerHeight() + offset.top  ){
                        this.touching = false;
                        if(cancel)cancel(e,$(this));
                    }
                }
            },
            'touchcancel mouseout': function(e){
                if(!this.touching)return;
                e.preventDefault();
                if(cancel)cancel(e,$(this));
                this.touching = false;
            },
            'touchend mouseup': function(e){
                if(!this.touching)return;
                e.preventDefault();
                up(e,$(this));
                this.touching = false;
            }
        });
    }
});

function autoType(elementClass, typingSpeed){
	var thhis = $(elementClass);
	thhis.css({
		"position": "relative",
		"display": "inline-block"
	});
	thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
	thhis = thhis.find(".enter-page__whatHappens-text");
	var text = thhis.text().trim().split('');
	var amntOfChars = text.length;
	var newString = "";
	thhis.text("|");
	thhis.css("opacity",1);
	thhis.prev().removeAttr("style");
	thhis.text("");
	for(var i = 0; i < amntOfChars; i++){
		(function(i,char){
			setTimeout(function() {
				newString += char;
				thhis.text(newString);
			},i*typingSpeed);
		})(i+1,text[i]);
	}
}

var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
function enterPageButton(){
	$.cookie("alreadyVisit",true);
	$(".enter-page__button").on("touchend click", function(){
		$("#enter-page").fadeOut(1000);
		$(document).off(scroll_event);
		$(document).off('.noScroll');
		$("body").removeClass("is-scrollOff");
		$(".index-bg,#smph-header,#main").removeClass("is-beforeStart");
	});
}

function topAnimationSkip(){	
	$("#enter-page").removeClass("is-beforeStart");
	$(".enter-page__whatHappens-wrap,.baseCircle,.rect,.enter-page__logo,.circle2,.tri,.hex,.rect-m,.tri-m,.enter-page__logo-wrap,.enter-page__logo-text-item,.enter-page__logo-text-item-dec,.enter-page__button,.rect1,.rect2,.rect3,.rect4,.rect5,.rect6").addClass("is-skipped-force");
	enterPageButton();
	topBgAnimation();
}

function topBgAnimation(){
	setInterval(function(){
		var changes = [];
		for(var i=1;i<=1000;i++){
			if(Math.random()<0.1){changes.push(i);}
		}
		changes.forEach(function(num){
			var obj = $(".index-bg-"+num), duration = 500+Math.random()*(1000);
			obj.fadeOut(duration,function(){
				obj.attr("src","assets/img/bg-"+ (1+Math.floor(Math.random()*(40))) +".svg");
			});
			obj.fadeIn(duration);
		})
	},1000);
}

// set loader
$("#loader, #enter-page").addClass("is-beforeStart");
$("#loader").css("display","flex")
// onload
$(function(){

	$(document).on("scroll", "body", function(){
		console.log("");
	});
	// set bg
	for(var i=1;i<=10000;i++){
		$(".index-bg-"+i).attr("src","assets/img/bg-"+ (1+Math.floor(Math.random()*(40))) +".svg");
	}

	// hide the loader
	setTimeout(function(){
		$("#loader").removeClass("is-beforeStart"); // loader hide animation
		setTimeout(function(){
			$("#loader").css("display","none"); // actually hide loader
		},500);
	},1500);

	 // if IE, stop showing animation
	var ua = navigator.userAgent;
	if(ua.match(/MSIE/) || ua.match(/Trident/)){
		topAnimationSkip();
	}

	// ios11 bugfix ?
	function ios_bugFix(){
		$(".rect,.tri-m").css({
			"transform-origin": "50% 50%"
		});
	}
	if(/iPhone/.test(ua)) {
		ua.match(/iPhone OS (\w+){1,3}/g);
		var osv=(RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
		if(osv >= 1100 || osv == 110) {ios_bugFix();}
	}else if(/iPad/.test(ua)) {
		ua.match(/CPU OS (\w+){1,3}/g);
		var osv=(RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
		if(osv >= 1100 || osv == 110) {ios_bugFix();}
	}else if(/Macintosh/.test(ua)){
		if(ua.indexOf("11.0") !== -1){ios_bugFix();}
	}

	if(location.pathname == "/" || location.pathname == "/development/" || location.pathname == "/index.html"){ // animation only in index.html
		if($.cookie("alreadyVisit")){ // if already visited stop showing animation
			topAnimationSkip();
			$("#enter-page").hide();
		}else{
			// force no scroll
			$(document).on(scroll_event,function(e){e.preventDefault();});
			$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
			$("body").addClass("is-scrollOff");

			// set the position of enter page
			$("#enter-page").removeClass("is-beforeStart");
			
			// set the height of letter animation
			$(".enter-page__whatHappens-wrap").css("hight",$(window).outerHeight())

			// hide following contents
			$(".index-bg,#smph-header,#main").addClass("is-beforeStart");

			// animation
			setTimeout(function(){
				setTimeout(function(){
					autoType(".enter-page__whatHappens",100);
					setTimeout(function(){
						// show skip button
						$(".enter-page__skip").fadeIn(500);
						$(".enter-page__skip").on("touchend mouseup",function(){
							topAnimationSkip();
							$(this).fadeOut(1000);
						});

						// hide "WHAT HAPPENS?"
						$(".enter-page__whatHappens-wrap").addClass("is-started");
						setTimeout(function(){
							$(".enter-page__whatHappens-wrap").css("display","none");
						},500);

						// show logo animation
						$(".enter-page__logo").removeClass("is-beforeStart");
						setTimeout(function(){
							setTimeout(function(){
								// draw circle and rectangles
								$(".baseCircle").addClass("is-started");
								$(".rect").addClass("is-started");
								setTimeout(function(){
									// paint colors while the circle is rotating
									$(".baseCircle").addClass("is-started-2");
									$(".rect1,.rect2,.rect3,.rect4,.rect5,.rect6").addClass("is-delayOff");
									$(".rect").addClass("is-started-2");
									$(".enter-page__logo,.circle2,.tri,.hex,.rect-m,.tri-m").addClass("is-started");
									setTimeout(function(){
										// show letters and button
										$(".enter-page__logo-wrap,.enter-page__logo-text-item,.enter-page__button").addClass("is-started");
										$(".enter-page__skip").fadeOut(500);
										enterPageButton();
									},2500);
								},6500);
							},500);
						},1000);
					},2500);
				},1000);
			},2000);
		}
	}else{
		topAnimationSkip();
		$("#enter-page").hide();
	}


	/* smph menu open */
	var openCheck = false;
	var scrollTop;
	function openSmphMenu(flg){
		$(".smph-header__menu-trigger").toggleClass("is-active");
		$("#smph-pagecover,#header-menu,#smph-header,#main,#footer").toggleClass("is-opened");
		if (flg){
			$(".smph-header__txt").html("MENU");
			$(window).scrollTop(scrollTop);
			$("#main").css({
				"top": 0,
				"position": "relative"
			});
			$("#footer").css({
				"top": 0,
				"position": "relative"
			});
			return false;
		}else{
			$(".smph-header__txt").html("CLOSE");
			$("#main").css({
				"top": -scrollTop,
				"position": "fixed"
			});
			$("#footer").css({
				"top": $("#main").outerHeight() - scrollTop,
				"position": "fixed"
			});
			$("#header-menu").scrollTop(0);
			return true;
		}
	}

	$(".smph-header__menu-trigger, .is-current").touchInterface(function(e,$_this){
		if($(window).width()<=960){
			scrollTop = $(window).scrollTop();
			openCheck = openSmphMenu(openCheck);
		}
	});
	$("#smph-pagecover").touchInterface(function(e,$_this){
		if(openCheck===true){
			openCheck = openSmphMenu(openCheck);
		}
	});

	/* smph swipe menu open */
	if(ua.match(/(iPhone|iPad|iPod|Android)/)){
		var touchstartPosition,touchmovePosition
		$("#main").on("touchstart",function(e){
			touchstartPosition = e.originalEvent.changedTouches[0].pageX;
		}).on("touchmove",function(e){
			touchmovePosition = e.originalEvent.changedTouches[0].pageX;
			var diff = touchmovePosition - touchstartPosition;
			if(diff > 50 && openCheck===false){
				e.preventDefault();
				if(diff > 100){
					scrollTop = $(window).scrollTop();
					openCheck = openSmphMenu(openCheck);
				}
			}
		});
	}

	/* pc menu */
	$(".header-menu__item").not(".is-current").on("mouseover",function(){
		$(".shown",this).addClass("is-hidden");
		$(".hidden",this).addClass("is-shown");
	}).on("mouseleave",function(){
		$(".shown",this).removeClass("is-hidden");
		$(".hidden",this).removeClass("is-shown");
	});

	$(".touchItem").on("touchstart",function(){
		$(this).addClass("touched");
	}).on("touchend",function(){
		$(this).removeClass("touched");
	});

	function snsButton(snsName,snsLink){
		$(snsName).touchInterface(function(e,$_this){
			location.href = snsLink;
		});
	}
	var currentURL = location.href;
	snsButton(".twitter","https://twitter.com/share?hashtag=%e7%ad%91%e9%a7%92%e6%96%87%e5%8c%96%e7%a5%ad2017");
	snsButton(".facebook","https://www.facebook.com/sharer/sharer.php?u=" + currentURL);
	snsButton(".googleplus","https://plus.google.com/share?url=" + currentURL);
});
