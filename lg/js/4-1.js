$(document).ready(function(){

  $(".tab li").click(function(){ 

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tab_contents div").removeClass("active");
    $("#"+result).addClass("active");


  });

});