
        $(document).ready(function () {
            $('#nav-icon1').click(function () {
              $(this, ).toggleClass('open');
              $('.nav-open').toggleClass('open');
              $('html').toggleClass('m-off');
            });

          });
          $(document).ready(function () {
            $('.tr').click(function () {
                $('.open').toggleClass('open');
             
            });
          });
          $(document).ready(function () {
            $('#close,#closee').click(function () {
                $(".popup").fadeOut(1000);
            });
          });
$(document).ready(function(){
    $('#navj1').hover(function(){
        $(".live-box").hide();
        $("#j1m").show();
    });
    $('#navj2').hover(function(){
        $(".live-box").hide();
        $("#j2m").show();
    });
    $('#navj3').hover(function(){
        $(".live-box").hide();
        $("#j3m").show();
    });
	$('#navj4').hover(function(){
        $(".live-box").hide();
        $("#j4m").show();
    });
    $('#navy1').hover(function(){
        $(".live-box").hide();
        $("#y1m").show();
    });
    $('#navy2').hover(function(){
        $(".live-box").hide();
        $("#y2m").show();
    });
    $('#navy3').hover(function(){
        $(".live-box").hide();
        $("#y3m").show();
    });
    $('#navy4').hover(function(){
        $(".live-box").hide();
        $("#y4m").show();
    });
});

$(function () {
    $(".gotop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 900);
        return false;
    });
});
$('.btn-a1').click(function () {
    $('html,body').animate({
        scrollTop: $('#ap1').offset().top
    }, 800);
});
$('.btn-a2').click(function () {
    $('html,body').animate({
        scrollTop: $('#ap2').offset().top
    }, 800);
});
$('.btn-a3').click(function () {
    $('html,body').animate({
        scrollTop: $('#ap3').offset().top
    }, 800);
});
$('.btn-a4').click(function () {
    $('html,body').animate({
        scrollTop: $('#ap4').offset().top
    }, 800);
});

$(document).ready(function () {
    $('#close,#closee').click(function () {
        $(".popup").fadeOut(1000);
    });
    $('.j1btn').click(function () {
        $("#j1mp").fadeIn(100);
    });
    $('.j2btn').click(function () {
        $("#j2mp").fadeIn(100);
    });
    $('.j3btn').click(function () {
        $("#j3mp").fadeIn(100);
    });
    $('.j4btn').click(function () {
        $("#j4mp").fadeIn(100);
    });
    $('.y1btn').click(function () {
        $("#y1mp").fadeIn(100);
    });
    $('.y2btn').click(function () {
        $("#y2mp").fadeIn(100);
    });
    $('.y3btn').click(function () {
        $("#y3mp").fadeIn(100);
    });
    $('.y4btn').click(function () {
        $("#y4mp").fadeIn(100);
    });
  });
