$(document).ready(function(){

  let oimg = 0;
  let nimg = 0;
  
  $(".j_thumb a").click(function(){
    nimg = $(this).index();
    $(".j_thumb a").eq(oimg).removeClass("on");
    $(".j_thumb a").eq(nimg).addClass("on");
    $(".j_img>img").eq(oimg).stop().fadeOut(1000);
    $(".j_img>img").eq(nimg).stop().fadeIn(1000);
    $(".j_link a").eq(oimg).stop().fadeOut(1000);
    $(".j_link a").eq(nimg).stop().fadeIn(1000);

    oimg=nimg;
  
    return false;
  })

});