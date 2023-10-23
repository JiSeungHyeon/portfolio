$(document).ready(function(){

  /* scroll effect */
$(window).scroll(function(){

  let wscroll= $(this).scrollTop();

  if(wscroll>=300){
    $(".value_in h1").addClass("scr1")
    $(".value_in span").addClass("scr1");
  }else{
    $(".value_in h1").removeClass("scr1")
    $(".value_in span").removeClass("scr1");
  }

  if(wscroll>=500){
    $(".v_text").addClass("scr2");
    $(".value_in span").addClass("scr2");
  }else{
    $(".v_text").removeClass("scr2");
    $(".value_in span").removeClass("scr2");
  }

  if(wscroll>=800){
    $(".v1_img").addClass("scr3");
    $(".value_in span").addClass("scr3");
  }else{
    $(".v1_img").removeClass("scr3");
    $(".value_in span").removeClass("scr3");
  }

  if(wscroll>=1000){
    $(".v1_text").addClass("scr4");
    $(".value_in span").addClass("scr4");
  }else{
    $(".v1_text").removeClass("scr4");
    $(".value_in span").removeClass("scr4");
  }

  if(wscroll>=1300){
    $(".v2_img").addClass("scr5");
    $(".value_in span").addClass("scr5");
  }else{
    $(".v2_img").removeClass("scr5");
    $(".value_in span").removeClass("scr5");
  }

  if(wscroll>=1500){
    $(".v2_text").addClass("scr6");
    $(".value_in span").addClass("scr6");
  }else{
    $(".v2_text").removeClass("scr6");
    $(".value_in span").removeClass("scr6");
  }

  if(wscroll>=1800){
    $(".v3_img").addClass("scr7");
    $(".value_in span").addClass("scr7");
  }else{
    $(".v3_img").removeClass("scr7");
    $(".value_in span").removeClass("scr7");
  }

  if(wscroll>=2100){
    $(".v3_text").addClass("scr8");
    $(".value_in span").addClass("scr8");
  }else{
    $(".v3_text").removeClass("scr8");
    $(".value_in span").removeClass("scr8");
  }

});

/* press */
let pold = 0;

$(".pright").click(function(){
  
  pnew = pold+1;
  pnum = $(".press_list li").length;

  if(pnew<pnum){
    $(".press_list li").eq(pold).hide();
    $(".press_list li").eq(pnew).show();
    pold=pnew;
  }

});

$(".pleft").click(function(){

  pnew=pold-1;

  if(pnew>=0){
    $(".press_list li").eq(pold).hide();
    $(".press_list li").eq(pnew).show();
    pold=pnew;
  }

});

  /* banner */
  function bannerAuto(){

    $(".ban ul").stop(true,true).animate({marginLeft:"-=295px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
  };

  bauto = setInterval(bannerAuto,4000);

  $(".ban_btn .ban_right").click(function(){

    clearInterval(bauto);
    $(".ban ul").stop(true,true).animate({marginLeft:"-=295px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
    bauto = setInterval(bannerAuto,4000);

  });

  $(".ban_btn .ban_left").click(function(){

    clearInterval(bauto);
    $(".ban ul").stop(true,true).animate({marginLeft:"295px"},500,function(){
      $(".ban ul li:last-child").prependTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
    bauto = setInterval(bannerAuto,4000);

  });

  $(".ban").hover(function(){
    clearInterval(bauto);
  },function(){
    bauto = setInterval(bannerAuto,4000);
  });

});