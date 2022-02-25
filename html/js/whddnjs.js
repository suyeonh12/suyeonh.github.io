$(document).ready(function(){

  $("#section_1 .depth_07 li").click(function(){
  $(".li_wrap",this).show();
});

  $("#section_1 .depth_07 li .li_wrap .box_sell .clase_btn .circle").click(function(e){
  e.stopPropagation();
  $("#section_1 .depth_07 li .li_wrap").hide();
});

});
