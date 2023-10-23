$(document).ready(function(){

  $(".title").click(function(){


    $(this).siblings(".title").removeClass("active"); 
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle(); /* title이 나오면 그 다음것 div. 같은 계열 같은 동급의 형제찾기. */




  });




});