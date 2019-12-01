$(document).ready(function(){
    $(".close,.ppb").click(function(){
        $(".popup-bg").hide();
    });
    $("#btn-3").click(function(){
        $(".popup-bg").hide();
        $("#register").show();
    });
    $("#btn1").click(function(){
        $("#register").show();
      
    });
    $("#btn2").click(function(){
        $("#login").show();
      
    });
});
