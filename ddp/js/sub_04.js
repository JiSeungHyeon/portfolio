$(document).ready(function(){

  $(window).scroll(function(){ 
  $("#txt1").text($(this).scrollTop());
});

});