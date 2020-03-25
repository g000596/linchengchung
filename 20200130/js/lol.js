// $(document).ready(function(){
//     $(".close,.ppb").click(function(){
//         $(".popup-bg").hide();
//     });
//     $("#btn-3").click(function(){
//         $(".popup-bg").hide();
//         $("#register").show();
//     });
//     $("#btn1").click(function(){
//         $("#register").show();
      
//     });
//     $("#btn2").click(function(){
//         $("#login").show();
      
//     });
// });
        // $(".t").html("<p>多能力女實況主，主持、cosplay、玩遊戲樣樣行，反差萌月希正在狙擊你的心！</p>");
        // $(".").css("color","red");
        // $(this,).toggleClass('open'); 
        //    $('.j1m').toggleClass('open');
        //    $('html').toggleClass('m-off');
        $(document).ready(function () {
            $('#nav-icon1,.tr').click(function () {
              $(this, ).toggleClass('open');
              $('.nav-open').toggleClass('open');
              $('html').toggleClass('m-off');
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
