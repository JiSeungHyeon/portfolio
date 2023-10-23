$(document).ready(function(){
  $(".gif").mouseover(function(){
    $(this).attr("src", $(this).data("animated"))
  }),
  $(".gif").mouseout(function(){
    $(this).attr("src", $(this).data("static"))
  });
});