$(function(){
    var x = 0;
    setInterval(function(){
        x-=1;
        $("#request .flow:hover").css('background-position', x + 'px 100%');
    }, 20);
})

$(document).ready(function(){

  $(window).scroll(function(){
  funcInterHeader();
  });

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  $("#flow").click(function(){
    $("#flow #modal").addClass("open");
  });
  $("#flow #modal .xi-close").click(function(e){
    event.stopPropagation();
    $("#flow #modal").removeClass("open");
  });

  setTimeout(function(){
    $(".text_box h2").css('transform','translateY(0)');
  }, 1000);
  setTimeout(function(){
    $(".text_box h3").css('transform','translateY(0)');
  }, 1500);

  $("#pagetop").click(function(){
    $('html, body').animate({scrollTop: '0'}, 500);
  });

  $(function(){
    var $pagetop = $('#pagetop');
    var $pt_change = $('.pagetop-change');
    var $window = $(window);
    var pageOffsetTop = $pt_change.offset().top;

   $window.on('scroll', function(){ //스크롤시
  var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
  $pagetop.toggleClass('black', scrolled); //클래스 토글
  });

  });

  function funcInterHeader(){
  var $nowScrollValue = $(document).scrollTop();

  if($nowScrollValue > 50){
      $("header").addClass("top");
    /*
    if($nowScrollValue > $scrollValue) { // ë‚´ë ¤ê°ˆë•Œ
      $scrollValue = $(document).scrollTop();
      $("header").removeClass("top");
    } else { // ì˜¬ë¼ê°ˆë•Œ
      $("header").addClass("top");

      $scrollValue = $(document).scrollTop();
    }*/
  } else {
    $("header").removeClass("top");
  }
  }

});
