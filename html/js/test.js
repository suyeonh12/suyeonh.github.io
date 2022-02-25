$("document").ready(function(){

  $(".tab1").addClass("on");
  $(".tab_box1").addClass("on");
  $(".tab_box2").addClass("on");

  $(".tab2").click(function(){
    $(this).addClass("on");
    $(".tab1").removeClass("on");
    $(".tab_box2").addClass("on");
    $(".main_banner").addClass("on");
    $(".plus").addClass("on");
  });

  $(".tab1").click(function(){
    $(this).addClass("on");
    $(".tab2").removeClass("on");
    $(".tab_box1").addClass("on");
    $(".main_banner").removeClass("on");
    $(".plus").removeClass("on");
  });

  $("#main").slick();


});
