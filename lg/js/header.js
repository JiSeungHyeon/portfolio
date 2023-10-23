$(document).ready(function(){

  /* menu */
  $(".sub").hover(function(){
    $(this).find(".lnb").stop(true,true).delay(300).slideDown();
  },function(){
    $(this).find(".lnb").stop(true,true).slideUp();
  });

});