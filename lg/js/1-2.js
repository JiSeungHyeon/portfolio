$(document).ready(function(){

  $("dl dt").click(function(){

    $(this).siblings("dt").removeClass("selected");
    $(this).addClass("selected");
    $(this).siblings("dd").hide("slow");
    $(this).next().show("slow");

    let dataBackimg = $(this).attr("data-background");

    $(".image img").attr("src",dataBackimg).hide().fadeIn();


  });

});