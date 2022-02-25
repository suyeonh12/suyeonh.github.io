$(document).ready(function(){

	//mousewheel-fullpage-scroll
	new fullScroll({
		displayDots: true,
		dotsPosition: 'left',
		animateTime: 0.7,
		animateFunction: 'ease-in'
	});

	//nav-navigation
	$("#smartphone_header .depth_01 li").click(function(){
		$(this).find(".section_a").addClass("go");
		$(this).siblings("li").find(".section_a").removeClass("go");
	});

	//section1-Btn
	$("#main .section1 .ad_text #section1Btn").click(function(){
		alert("로그인이 필요합니다.");
	});

	//section3-banner-slide
	setInterval(function(){
		autoSlide();
	},5000);

	function autoSlide(){
		$(".promotion_slide").animate({"marginLeft":"-="+"1920"}, 3000, function(){
			$("> li:first-child", this).appendTo($(this));
			$(this).css({"marginLeft":"0"});
		});
	}

	//swiper-slide
	var swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	});

});
