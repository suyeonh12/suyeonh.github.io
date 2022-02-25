$(document).ready(function(){

  $("#banner_slider").slick();

  $(".baro").click(function(){
    $(".pop").show();
  });

  $("#btn").click(function(){
    $(".pop").hide();
  });

  $(".qna dt").click(function(){
    $(this).next().slideDown().siblings("dd").slideUp();
  });

  $("input[name=email]").keyup(function(event){

   if (!(event.keyCode >=37 && event.keyCode<=40)) {

    var inputVal = $(this).val();

    $(this).val(inputVal.replace(/[^a-z0-9]/gi,''));

   }

  });

});
