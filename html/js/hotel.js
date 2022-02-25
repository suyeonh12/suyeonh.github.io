$("document").ready(function(){

  $(".tab1").addClass("on");
  $(".tab_box1").addClass("on");

  $(".tab2").click(function(){
    $(this).addClass("on");
    $(".tab1").removeClass("on");
    $(".tab_box2").addClass("on");
    $(".tab_box1").removeClass("on");
    $(".main_banner").addClass("on");
    $(".plus").addClass("on");
  });

  $(".tab1").click(function(){
    $(this).addClass("on");
    $(".tab2").removeClass("on");
    $(".tab_box1").addClass("on");
    $(".tab_box2").removeClass("on");
    $(".main_banner").removeClass("on");
    $(".plus").removeClass("on");
  });

  $(".xi-angle-left").click(function(){
    $("tab").toggleClass("on");
    $(".tab_box").toggleClass("on");
    $(".main_banner").toggleClass("on");
  });

  $(".xi-angle-right").click(function(){
    $("tab").toggleClass("on");
    $(".tab_box").toggleClass("on");
    $(".main_banner").toggleClass("on");
  });

});
