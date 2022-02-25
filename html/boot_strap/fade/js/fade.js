$(document).ready(function(){

  var count = 0;

  $("#fade_wrap .fade_list li").eq(count).fadeIn(500);

  setInterval(function(){

    count++;
    count = count%5;
    $("#fade_wrap .fade_list li").eq(count).fadeIn(500).siblings().fadeOut(500);
  },1000);

});
