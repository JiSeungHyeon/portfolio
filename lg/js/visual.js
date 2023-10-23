$(document).ready(function(){
  let $simg = $(".slide ul");
  let $simgli = $(".slide ul li");
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx = 0;
  let sindex = 0;
  
  function slideImg(sindex){
    
    targetX = -(sindex*simg_w)
    
    $simg.stop().animate({left:targetX},600);
    soldidx = sindex;
  
  };
  
  function slideAuto(){
    sindex++;
  
    if(sindex == simg_n){
      sindex = 0;
    }
    slideImg(sindex);
  }
  
  auto = setInterval(slideAuto,4000);

});