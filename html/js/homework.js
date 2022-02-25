$(document).ready(function(){

  var count = 0;

  $("#con .fade_list li").eq(count).fadeIn(700);

  setInterval(function(){

    count++;
    count = count%5;
    $("#con .fade_list li").eq(count).fadeIn(700).siblings().fadeOut(700);
  },1000);

});
