$('.nav>li').mouseenter(function(){
  $(this).find('.nav3').fadeIn();
});
$('.nav>li').mouseleave(function(){
  $(this).find('.nav3').fadeOut();
});
$('.nav>li>a').click(function(e){
  e.preventDefault();
  var ind = $(this).parent().index();
  var maodian = $(this).attr('href');
  var href = window.location.href;

  if(href.indexOf('index') != -1){// 首页
    if(ind == 0){
      window.location.href = 'index.html';
    }else if(ind == 3){
      window.open(maodian, '_blank');
    }else{
      var gaodu = $(maodian).offset().top;
      $("html,body").animate({scrollTop: gaodu}, 500);
      return false;
    }
  }else{
    if(ind == 0){
      window.location.href = 'index.html';
    }else if(ind == 3){
      window.location.href = maodian;
    }else{
      window.location.href = 'index.html' + maodian;
    }
  }

});
$('.nav2>a').click(function(e){
  e.preventDefault();
  var ind = $(this).index();
  var maodian = $(this).attr('href');
  var href = window.location.href;
  
  if(href.indexOf('index') != -1){// 首页
    if(ind == 4){
      window.open(maodian, '_blank');
    }else{
      var gaodu = $(maodian).offset().top;
      $("html,body").animate({scrollTop: gaodu}, 500);
      return false;
    }
  }else{
    if(ind == 4){
      window.location.href = maodian;
    }else{
      window.location.href = 'index.html' + maodian;
    }
  }

});
// banner 动效
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    x2 = 0;
    y2 = 0;
    friction = 1 / 30;
    friction2 = 1 / 10;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.banner-bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (40 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (20 * lMouseY) / 100;

});

moveBackground();
// 返回顶部
$(window).scroll(function(){
    var hei=$(window).scrollTop();
    var hei_scr=$(window).height();
    if(hei>hei_scr){
        $('.totop').css('display','block');
    }else{
        $('.totop').css('display','none');
    }
});
$('.totop').click(function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop:0},500)
});