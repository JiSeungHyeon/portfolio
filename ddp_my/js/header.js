history.replaceState({}, null, location.pathname);

/* tap bar & top button =================== */
let prevScrollTop = 0;
let nowScrollTop = 0;

function wheel(){
  return prevScrollTop - nowScrollTop > 0 ? 'up' : 'down';
};

document.addEventListener('scroll', function(){
  let tapBar = document.querySelector('#tap_bar');
  let top = document.querySelector('#top');

  nowScrollTop = $(this).scrollTop();

  if(wheel() == 'down'){
    tapBar.classList.remove('active');
    top.classList.remove('active');
  }
  if(wheel() == 'up'){
    tapBar.classList.add('active');
    top.classList.add('active');
}
prevScrollTop = nowScrollTop;
});

/* header============================= */
let trigger = document.querySelector('.trigger');
let nav= document.querySelector('nav');

trigger.addEventListener('click', ()=>{
  trigger.classList.toggle('active');
  nav.classList.toggle('active');
});

$(document).ready(function () {
  $(".lnb").slideUp();
  $(".gnb li").click(function(){
    $(this).siblings().find(".lnb").slideUp(300);
    $(this).find(".lnb").stop().slideToggle(200);
  });
  $("lnb li").click(function(){
    $("nav").removeClass("active");
  });
  $("gnb li:nth-of-type(3)").click(function(){
    $("nav").removeClass("active");
  });

});

/* back=============================== */
let back = document.querySelector('.back');

back.addEventListener('click', ()=>{
  history.back();
});