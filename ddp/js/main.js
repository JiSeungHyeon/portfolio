 // Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.scr');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

//자주 묻는 질문
$(document).ready(function(){

  $(".title").click(function(){

    $(this).siblings(".title").removeClass("active"); 
    $(this).toggleClass("active");
    $(".content").toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();

  });

});