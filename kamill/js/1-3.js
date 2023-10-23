$(document).ready(function(){
  
  $("dl dt").click(function(){

    $(this).siblings("dd").hide("slow");
    $(this).next().show("slow");
    $(this).siblings("dt").removeClass("selected"); 
    $(this).addClass("selected");

  });

});