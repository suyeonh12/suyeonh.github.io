$(document).ready(function(){

	//mousewheel-fullpage-scroll
	$("#main").fullpage({
   //options here
   menu: '#menu',
   autoScrolling:true,
   scrollHorizontally: true,
   navigation: true,
   navigationPosition: 'right',
   showActiveTooltip: true,
   anchors: ['div1', 'div2', 'div3', 'div4', 'div5'],
   scrollBar: true,
   computed: {
   color() {
     return "color: orange";
   },
   user() {
     return this.$store.getters.getPersonalInformation;
   },
   skill() {
     return this.$store.getters.getTechnologyStack;
   },
   projects() {
     return this.$store.getters.getProject;
   }
 }
 });


	//nav-navigation
	$("#smartphone_header .depth_01 li").click(function(){
		$(this).addClass("active").siblings("li").removeClass("on");
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

	// li 한번만 돌아가기 + 반복 = 연구 필요...
	var deg = 0;

	Rotate = setTimeout(function(){
		$(".phone_info .info li").mouseenter(function(){
				$(this).css("transform","rotateY("+deg+"deg)");
			});
			deg += 360;
	},1000);

});
