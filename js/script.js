$(document).ready(function(){
  $('.popapexid').fadeOut(0);
  $('.toggle .rb').addClass('hov');
  $('.medle .lm2').fadeOut(0);
  $('.medle .rm2').fadeOut(0);
  $('.undermedle .l2').fadeOut(0);
  $('.undermedle .r2').fadeOut(0);
  $('.case-1').addClass('r1');
  $('.case-2').addClass('r1');
  $('.case-3').addClass('r1');
  $('.mphone').mask('+7 999-999-99-99');
  $('.mphone2').mask('+7 999-999-99-99');
});

$('#formq').on('submit', function (e) {
  $.ajax({
      url: "send.php",
      method: "POST",
      data: $("#formq").serialize(),
      beforeSend: function () {
        $('.blolock').fadeOut(300);
        setTimeout(function(){
          $('.tnx').fadeIn(300);
        }, 300);
      },
  }).done(function () {
    console.log('ok');
  }).error(function () {
    console.log('no');
  });
  e.preventDefault();
});

$('#formexid').on('submit', function (e) {
  $.ajax({
      url: "send.php",
      method: "POST",
      data: $("#formexid").serialize(),
      beforeSend: function () {
        $('body').css("overflow", "visible");
        $('.backop').fadeOut(300);
        $('.popapexid').fadeOut(300);
      },
  }).done(function () {
    console.log('ok');
  }).error(function () {
    console.log('no');
  });
  e.preventDefault();
});

$('input[type=radio]').on('change',function(){
  $('.rit').fadeOut(300);
  setTimeout(function(){
    $('.rit2').fadeIn(300);
  }, 300);
});

var pop = true;

$('body').mouseleave(function(){
  setTimeout(function(){
    if(pop == true){
        $('body').css("overflow", "hidden");
        $('.backop').fadeIn(300);
        $('.popapexid').fadeIn(300);
        pop = false;
      }
  },30000);
});

$('.backop , .ex').on('click',function(){
    $('body').css("overflow", "visible");
    $('.backop').fadeOut(300);
    $('.popapexid').fadeOut(300);
});

$('.fname').on('keyup',function(){
  var count = $(this).val().length;
    if(count >= 2){
      $('#name').addClass('v');
      $('#name').addClass('iv');
      $('#name').attr("placeholder", "Неверные данные");
    }
});

$('.mphone').on('keyup',function(){
  var count = $(this).val().length;
    if(count >= 5){
      $('#phone').addClass('v');
      $('#phone').addClass('iv');
      $('#phone').attr("placeholder", "Неверные данные");
    }
});

$('.email').on('keyup',function(){
  var count = $(this).val().length;
    if(count >= 2){
      $('.email').addClass('v');
      $('.email').addClass('iv');
      $('.email').attr("placeholder", "Неверные данные");
    }
});

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
$('input[name="phone"]').click(function(){
  $(this).setCursorPosition(3);
});

$('.toggle .lb').on('hover',function(){
  $('.toggle .lb').addClass('hov');
  $('.toggle .rb').removeClass('hov');
  $('.medle .lm').fadeOut(0);
  $('.medle .rm').fadeOut(0);
  $('.undermedle .l').fadeOut(0);
  $('.undermedle .r').fadeOut(0);
  $('.medle .lm2').fadeIn(0);
  $('.medle .rm2').fadeIn(0);
  $('.undermedle .l2').fadeIn(0);
  $('.undermedle .r2').fadeIn(0);
});

$('.toggle .rb').on('hover',function(){
  $('.toggle .rb').addClass('hov');
  $('.toggle .lb').removeClass('hov');
  $('.medle .lm').fadeIn(0);
  $('.medle .rm').fadeIn(0);
  $('.undermedle .l').fadeIn(0);
  $('.undermedle .r').fadeIn(0);
  $('.medle .lm2').fadeOut(0);
  $('.medle .rm2').fadeOut(0);
  $('.undermedle .l2').fadeOut(0);
  $('.undermedle .r2').fadeOut(0);
});

$('.arrowR').on('click',function(){
  if($('.case-1').hasClass('r1') & $('.case-2').hasClass('r1') & $('.case-3').hasClass('r1') || $('.case-1').hasClass('br3') & $('.case-2').hasClass('br3') & $('.case-3').hasClass('br3')){
    $('.case-1').removeClass('r1');
    $('.case-2').removeClass('r1');
    $('.case-3').removeClass('r1');
    $('.case-1').removeClass('br3');
    $('.case-2').removeClass('br3');
    $('.case-3').removeClass('br3');
    $('.case-1').addClass('r2');
    $('.case-2').addClass('r2');
    $('.case-3').addClass('r2');
  }else if($('.case-1').hasClass('r2') & $('.case-2').hasClass('r2') & $('.case-3').hasClass('r2') || $('.case-1').hasClass('br1') & $('.case-2').hasClass('br1') & $('.case-3').hasClass('br1')){
    $('.case-1').removeClass('r2');
    $('.case-2').removeClass('r2');
    $('.case-3').removeClass('r2');
    $('.case-1').removeClass('br1');
    $('.case-2').removeClass('br1');
    $('.case-3').removeClass('br1');
    $('.case-1').addClass('r3');
    $('.case-2').addClass('r3');
    $('.case-3').addClass('r3');
  }else if($('.case-1').hasClass('r3') & $('.case-2').hasClass('r3') & $('.case-3').hasClass('r3') || $('.case-1').hasClass('br2') & $('.case-2').hasClass('br2') & $('.case-3').hasClass('br2')){
    $('.case-1').removeClass('r3');
    $('.case-2').removeClass('r3');
    $('.case-3').removeClass('r3');
    $('.case-1').removeClass('br2');
    $('.case-2').removeClass('br2');
    $('.case-3').removeClass('br2');
    $('.case-1').addClass('r1');
    $('.case-2').addClass('r1');
    $('.case-3').addClass('r1');
  }
});

$('.arrowL').on('click',function(){
  if($('.case-1').hasClass('r1') & $('.case-2').hasClass('r1') & $('.case-3').hasClass('r1') || $('.case-1').hasClass('br3') & $('.case-2').hasClass('br3') & $('.case-3').hasClass('br3')){
    $('.case-1').removeClass('br3');
    $('.case-2').removeClass('br3');
    $('.case-3').removeClass('br3');
    $('.case-1').removeClass('r1');
    $('.case-2').removeClass('r1');
    $('.case-3').removeClass('r1');
    $('.case-1').addClass('br1');
    $('.case-2').addClass('br1');
    $('.case-3').addClass('br1');
  }else if($('.case-1').hasClass('r2') & $('.case-2').hasClass('r2') & $('.case-3').hasClass('r2') || $('.case-1').hasClass('br1') & $('.case-2').hasClass('br1') & $('.case-3').hasClass('br1')){
    $('.case-1').removeClass('br1');
    $('.case-2').removeClass('br1');
    $('.case-3').removeClass('br1');
    $('.case-1').removeClass('r2');
    $('.case-2').removeClass('r2');
    $('.case-3').removeClass('r2');
    $('.case-1').addClass('br2');
    $('.case-2').addClass('br2');
    $('.case-3').addClass('br2');
  }else if($('.case-1').hasClass('r3') & $('.case-2').hasClass('r3') & $('.case-3').hasClass('r3') || $('.case-1').hasClass('br2') & $('.case-2').hasClass('br2') & $('.case-3').hasClass('br2')){
    $('.case-1').removeClass('br2');
    $('.case-2').removeClass('br2');
    $('.case-3').removeClass('br2');
    $('.case-1').removeClass('r3');
    $('.case-2').removeClass('r3');
    $('.case-3').removeClass('r3');
    $('.case-1').addClass('br3');
    $('.case-2').addClass('br3');
    $('.case-3').addClass('br3');
  }
});

$(window).on('scroll',function(){
  var s = $(window).scrollTop();
  if(s >= 1500){
    $('.btnUp').fadeIn(300);
  }
  if(s < 1500){
    $('.btnUp').fadeOut(300);
  }
});
$('.btnUp').on('click',function(){
  $('html, body').animate({scrollTop: '0px'}, 300);
});