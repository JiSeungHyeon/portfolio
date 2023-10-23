$(document).ready(function () {

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".modal-gnb").fadeToggle();
    $(".top_btn").fadeToggle();
  });

});