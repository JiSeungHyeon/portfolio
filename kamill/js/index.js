$(document).ready(function(){
  
  let $slider = $('.slider');
  let $progressBar = $('.progress');
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    let calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
  });
  
  $slider.slick({
    slidesToShow:3,
    slidesToScroll:1,
    speed:400
  });

  $(window).scroll(function(){

    let wscroll= $(this).scrollTop();
  
    if(wscroll>=2400){
      $(".fact1").addClass("f_scroll1");
    }else{
      $(".fact1").removeClass("f_scroll1");
    }

    if(wscroll>=3000){
      $(".fact2").addClass("f_scroll2");
    }else{
      $(".fact2").removeClass("f_scroll2");
    }

    if(wscroll>=3400){
      $(".fact3").addClass("f_scroll3");
    }else{
      $(".fact3").removeClass("f_scroll3");
    }
  
  });

});