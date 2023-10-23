const slide = document.querySelector(".best ul");
let slideWidth = slide.clientWidth;
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

const slideItems = document.querySelectorAll(".best ul li");
const maxSlide = slideItems.length;
let currSlide = 1;

prevBtn.style.display = 'none';

function hideBtn(){
  if(currSlide===1){
    prevBtn.style.display = 'none';
  } else if(currSlide>=7){
    nextBtn.style.display = 'none';
  } else{
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';
  }
}

function nextMove() {
  prevBtn.style.display = 'inline-block';
  currSlide++;
  hideBtn();
  if (currSlide <= maxSlide) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
  } else {
    currSlide--;
  }
}

function prevMove() {
  prevBtn.style.display = 'inline-block';
  currSlide--;
  hideBtn();
  if (currSlide > 0) {
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
  } else {
    currSlide++;
  }
}

nextBtn.addEventListener("click", () => {
  nextMove();
});
prevBtn.addEventListener("click", () => {
  prevMove();
});

window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX;
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});