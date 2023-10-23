$(document).ready(function(){

  /* scroll effect */
$(window).scroll(function(){

  let wscroll= $(this).scrollTop();

  if(wscroll>=500){
    $(".ask").addClass("scroll");
  }else{
    $(".ask").removeClass("scroll");
  }

});

});