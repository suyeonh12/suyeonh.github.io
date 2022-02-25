$(document).ready(function(){

  $("#header nav .depth_01 > li").mouseenter(function(){
    $(".ab_box", this).slideDown(500);
  });
  $("#header nav .depth_01 > li").mouseleave(function(){
    $(".ab_box", this).slideUp(300);
  });

  setInterval(function(){
    slideAni();
  },3000);

    function slideAni(){
    $("#main .slide_section .slide").animate({"marginLeft":"-="+1280}, 2000, function(){
      $("li:first-child", this).appendTo($(this));
       $(this).css({"marginLeft":"0"});
    });
  }

});
