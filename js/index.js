if (self.name != 'reload') {
  self.name = 'reload';
  self.location.reload(true);
}
else self.name = ''; 

/* preloader */
/* function startLoader(){
  let counter = document.querySelector(".counter");
  let curValue = 0;

  function updateCounter(){
    if(curValue===100){
      return;
    }
    curValue += Math.floor(Math.random()*10) +1;

    if(curValue>100){
      curValue = 100;
    }
    counter.textContent = curValue;

    let delay = Math.floor(Math.random()*700);
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}
startLoader();

gsap.to(".preloader",2.5,{
  scale:0,
  ease:"power4.inOut",
  delay:6,
}) */

/* clock */
function clock(){
  let dateInfo = new Date();
  let hour = addZero(dateInfo.getHours());
  let min =addZero(dateInfo.getMinutes());
  let year = dateInfo.getFullYear();
  let month = dateInfo.getMonth() + 1;
  let date = dateInfo.getDate();

  document.querySelector(".date").innerHTML = `${year}.${month}.${date}`;
  document.querySelector(".time").innerHTML = `${hour} : ${min}`;
};
function addZero(time){
  if(parseInt(time)<10){
    return "0" + time;
  }else{
    return time;
  }
};
clock();
setInterval(clock,1000);

/* text rotating */
let rWords = document.querySelectorAll('.word');

rWords.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  })
});

let curWordIdx = 0;
let maxWordIdx = rWords.length - 1;
rWords[curWordIdx].style.opacity = "1";

let rotateText = () =>{
  let curWord = rWords[curWordIdx];
  let nextWord =
  curWordIdx ===maxWordIdx ? rWords[0] : rWords[curWordIdx + 1];
  Array.from(curWord.children).forEach((letter, i) => {
    setTimeout(()=>{
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(()=>{
      letter.className = "letter in";
    }, 300 + i * 60);
  });
  curWordIdx = 
  curWordIdx === maxWordIdx ? 0 : curWordIdx + 1;
};

rotateText();
setInterval(rotateText, 2000);

/* music */
const music = document.querySelector('.music');
let trackInfo =document.querySelector('.track-info');
let trackNmae = document.querySelector('.track-name');
let artist = document.querySelector('.track-artist');
let trackNav = document.querySelector('.track-nav');

let ppBtn = document.querySelector('.playpause-track');
const ntBtn = document.querySelector('.next-track');
const ptBtn = document.querySelector('.prev-track');

const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

let trackIdx = 0;
let isPlaying = false;

let curTrack = document.createElement("audio");
let trackList = [
  {
    name:"After the rain",
    artist:"Rexlambo",
    path:"audio/track1.mp3"
  },
  {
    name:"Juicy",
    artist:"Blue Caramel Beat",
    path:"audio/track2.wav"
  },
  {
    name:"A walk on the stars",
    artist:"Sledg3",
    path:"audio/track3.wav"
  }
];
function loadTrack(trackIdx){
  curTrack.src = trackList[trackIdx].path;
  curTrack.load();
  trackNmae.textContent = trackList[trackIdx].name;
  artist.textContent = trackList[trackIdx].artist;
  curTrack.addEventListener("ended",nextTrack)
};

loadTrack(trackIdx);

function ppTrack(){
  if(!isPlaying) playTrack();
  else pauseTrack();
};

function playTrack(){
  curTrack.play();
  isPlaying = true;
  ppBtn.innerHTML = '<ion-icon name=pause-sharp></ion-icon>';
};

ppBtn.addEventListener('click',function(){
  ppTrack();
});

function pauseTrack(){
  curTrack.pause();
  isPlaying = false;
  ppBtn.innerHTML = '<ion-icon name="play-sharp"></ion-icon>'
};

function nextTrack(){
  trackIdx++;
  if(trackIdx>2){trackIdx = 0;}
  loadTrack(trackIdx);
  playTrack();
};

function prevTrack(){
  trackIdx--;
  if(trackIdx<0){
    trackIdx = trackList.length -1;
  }
  loadTrack(trackIdx);
  playTrack();
};

ptBtn.addEventListener('click',function(){
  prevTrack();
});
ntBtn.addEventListener('click',function(){
  nextTrack();
});

function updateProgress(e){
  const {duration, currentTime} = e.srcElement;
  const progressPer = (currentTime / duration) * 100;
  progress.style.width = `${progressPer}%`;
};

function changeProgress(e){
  const width = e.target.clientWidth;
  const offsetX = e.offsetX;
  const duration = curTrack.duration;
  curTrack.currentTime = (offsetX / width) * duration; 
};

curTrack.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', changeProgress);

/* gnb */
const gnbContainer = document.querySelector('.gnb-fix');
const gnbItems = document.querySelectorAll('.gnb-fix li');

const defaultScale =1;
const hoverScale = 1.4;
const neighborScale =1.2;

const defaultMg = "7px";
const expandMg = "13px";

const updateGnb = ()=>{
  gnbItems.forEach((item)=>{
    let scale = defaultScale;
    let margin = defaultMg;

    if(item.isHovered){
      scale=hoverScale;
      margin=expandMg;
    }else if(item.isNeighbor){
      scale = neighborScale;
      margin = expandMg;
    }
    item.style.transform = `scale(${scale})`;
    item.style.margin = `0 ${margin}`
  })
}

gnbItems.forEach((item)=>{
  item.addEventListener("mousemove",()=>{
    gnbItems.forEach((otherItem)=>{
      otherItem.isHovered = otherItem === item;
      otherItem.isNeighbor = Math.abs(
        Array.from(gnbItems).indexOf(otherItem)-Array.from(gnbItems).indexOf(item)
      ) ===1;
    })
    updateGnb();
  })
})
gnbContainer.addEventListener("mouseleave",()=>{
  gnbItems.forEach((item)=>{
    item.isHovered = item.isNeighbor = false;
  })
  updateGnb();
})

/* skills */
const skills = document.querySelector(".skill");

let triggered = false
window.addEventListener("load", () => {
  splitWords();
  renderCanvas();
});

const splitWords = () => {
  const textNode = document.querySelector(".text");
  const text = textNode.textContent;
  const newDomElements = text.split(" ").map((text) => {
    const highlighted =
      text.startsWith(`Javascript`) ||
      text.startsWith(`HTML`) ||
      text.startsWith(`CSS`);
    return `<span class="words ${highlighted ? "highlighted" : null}">${text}</span>`;
  });
  textNode.innerHTML = newDomElements.join("");
};

const renderCanvas = () => {
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Runner = Matter.Runner;

  const params = {
    isStatic: true,
    render: {
      fillStyle: "transparent",
    }
  };

  const canvasSize = {
    width: window.innerWidth *0.95,
    height: window.innerHeight*0.8
  };

  const engine = Engine.create({});

  const render = Render.create({
    element:skills,
    engine: engine,
    options: {
      ...canvasSize,
      background: "transparent",
      wireframes: false,
    }
  });

  const floor = Bodies.rectangle(
    canvasSize.width / 2,
    canvasSize.height,
    canvasSize.width,
    50,
    params
  );
  const wall1 = Bodies.rectangle(
    0,
    canvasSize.height / 2,
    50,
    canvasSize.height,
    params
  );
  const wall2 = Bodies.rectangle(
    canvasSize.width,
    canvasSize.height / 2,
    50,
    canvasSize.height,
    params
  );
  const top = Bodies.rectangle(
    canvasSize.width / 2,
    0,
    canvasSize.width,
    50,
    params
  );

  const wordElements = document.querySelectorAll(".words");
  const wordBodies = [...wordElements].map((elemRef) => {
    const width = elemRef.offsetWidth;
    const height = elemRef.offsetHeight;

    return {
      body: Matter.Bodies.rectangle(canvasSize.width /2, 0, width, height, {
        render: {
          fillStyle: "transparent"
        }
      }),
      elem: elemRef,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y - 20}px`;
        this.elem.style.left = `${x + 20}px`;
        this.elem.style.transform = `rotate(${this.body.angle}rad)`;
      }
    };
  });

  World.add(engine.world, [
    floor,
    ...wordBodies.map((box) => box.body),
    wall1,
    wall2,
    top
  ]);
  Runner.run(engine);
  Render.run(render);

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({      
    trigger: '#skills',
    markers:false,
    onEnter() {
      if (!triggered) {
        triggered = true;
        Runner.run(engine);
        Render.run(render);
        (function rerender() {
          wordBodies.forEach((element) => {
            element.render();
          });
          Matter.Engine.update(engine);
          requestAnimationFrame(rerender);
        })();
      }
    }
  })
};

/* publish */
let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const markWrapper = document.querySelector('.marker-wrapper');
const activeSlide = document.querySelector(".active-slide");

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function swipe(start, end, factor){
  return start + (end - start) * factor;
}
function updateNum(markerMove,markerMaxMove){
  const partWidth = markerMaxMove /6;
  let currentPart = Math.round((markerMove - 70)/partWidth)+1;
  currentPart = Math.min(7, currentPart);
  activeSlide.textContent = `${currentPart}/7`;
};
function update(){
  current = swipe(current, target, ease);

  gsap.set(".slider-wrapper",{
    x: -current
  });

  let moveRatio = current / maxScroll;
  let markerMaxMove = window.innerWidth - markWrapper.offsetWidth - 119;
  let markerMove = +49 + moveRatio * markerMaxMove;
  gsap.set(".marker-wrapper",{
    x:markerMove
  });
  updateNum(markerMove,markerMaxMove);
  requestAnimationFrame(update);
};
window.addEventListener("resize",()=>{
  maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
});

const publish = document.querySelector("#publish");
publish.addEventListener("wheel",(e)=>{
  target += e.deltaY;
  target = Math.max(0,target);
  target = Math.min(maxScroll, target);
});
update();

let pinWrapWidth = sliderWrapper.offsetWidth;
let horizontalScrollLength = pinWrapWidth - window.innerWidth;

gsap.to(".slider-wrapper", {
  scrollTrigger: {
    trigger:"#publish",
    pin: true,
    start: "#publish",
    end: pinWrapWidth * 1.2,
  },
  x: -horizontalScrollLength,
  ease: "none"
});

function MM_openBrWindow(theURL, winName, features){
  window.open(theURL, winName, features);
}

/* uiux */
$(".uiux-items li").click(function(){
  g_pop = $(this).index();
  $(".uiux_overlay").scrollTop(0);
  $(".img-container li").eq(g_pop).addClass("active");
  $(".img-container li").eq(g_pop).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

/* graphic */
const galleryContainer = document.querySelector('.gallery');
const galleryItems = galleryContainer.querySelectorAll(".gallery li");
const indicator = document.querySelector("#graphic .indicator");

const defaultItemFlex = "0 1 1000px";
const hoverItemFlex = "1 1 4000px";

const updateGalleryItems =()=>{
  galleryItems.forEach((item)=>{
    let flex = defaultItemFlex;
    if(item.isHovered){
      flex = hoverItemFlex;
    }
    item.style.flex = flex;
  });
};

galleryItems[0].isHovered = true;
updateGalleryItems();

galleryItems.forEach((item)=>{
  item.addEventListener("mouseenter",()=>{
    galleryItems.forEach((otherItem)=>{
      otherItem.isHovered = otherItem === item;
    });
    updateGalleryItems();
  });
});

galleryContainer.addEventListener("mousemove",(e)=>{
  indicator.style.left = `${e.clientX - galleryContainer.getBoundingClientRect().left}px`;
});

$(".gallery li").click(function(){
  g_pop = $(this).index();

  $(".g_page span:nth-child(1)").text(g_pop+1);
  $("html").css({overflowY:"hidden"}); 
  $(".popup li").eq(g_pop).show();
  $(".graphic-popup").stop().fadeIn();
});

$(".left_btn").click(function(){
  if(g_pop>0){
    $(".popup li").eq(g_pop).stop().fadeOut();
    g_pop--;
    $(".g_page span:nth-child(1)").text(g_pop+1);
    $(".popup li").eq(g_pop).stop().fadeIn();
    $(".graphic-popup").scrollTop(0);
  };
});

$(".right_btn").click(function(){
  if(g_pop<6){
    $(".popup li").eq(g_pop).stop().fadeOut();
    g_pop++;
    $(".g_page span:nth-child(1)").text(g_pop+1);
    $(".popup li").eq(g_pop).stop().fadeIn();
    $(".graphic-popup").scrollTop(0);
  };
});

$(".btn_close").click(function(){
  $("html").css({overflowY:"scroll",overflowX:"hidden"});
  $(".graphic-popup").stop().fadeOut();
  $(".popup li").stop().hide();
});

/* planning */
const webPlans = document.querySelector(".plan");
const webPlan = document.querySelectorAll(".web-plan>li");

const planDefaultFlex = "0 1 70px";
const planHoverFlex = "0 1 550px";

const updatePlan = () =>{
  webPlan.forEach((item)=>{
    let flex = planDefaultFlex;
    if(item.isHovered){
      flex = planHoverFlex;
    }
    item.style.flex = flex;
  });
};

webPlan[0].isHovered = true;
updatePlan();

webPlan.forEach((item)=>{
  item.addEventListener("mouseenter",()=>{
    webPlan.forEach((otherItem)=>{
      otherItem.isHovered = otherItem === item;
    });
    updatePlan();
  });
});

$(".plan-btn li").click(function(){
  g_pop = $(this).index();
  $(".plan-contents").show(10);
  $(".plan-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
  $(".plan-content li").eq(g_pop).siblings().css({clipPath:"circle(0%)",zIndex:"0"});
});

$(".p-prev").click(function(){
  if(g_pop>0){
    $(".plan-content li").eq(g_pop).css({clipPath:"circle(0%)",zIndex:"0"});
    g_pop--;
    $(".plan-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
  };
});

$(".p-next").click(function(){
  if(g_pop<4){
    $(".plan-content li").eq(g_pop).css({clipPath:"circle(0%)",zIndex:"0"});
    g_pop++;
    $(".plan-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
  };
});

$(".p-close").click(function(){
  $(".plan-contents").fadeOut(350);
});

$(".plan2-btn li").click(function(){
  g_pop = $(this).index();
  $(".plan2-contents").show(10);
  $(".plan2-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
});

$(".p2-close").click(function(){
  $(".plan2-contents").fadeOut(350);
});

$(".plan3-btn li").click(function(){
  g_pop = $(this).index();
  $(".plan3-contents").show(10);
  $(".plan3-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
  $(".plan3-content li").eq(g_pop).siblings().css({clipPath:"circle(0%)",zIndex:"0"});
});

$(".p3-prev").click(function(){
  if(g_pop>0){
    $(".plan3-content li").eq(g_pop).css({clipPath:"circle(0%)",zIndex:"0"});
    g_pop--;
    $(".plan3-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
  };
});

$(".p3-next").click(function(){
  if(g_pop<4){
    $(".plan3-content li").eq(g_pop).css({clipPath:"circle(0%)",zIndex:"0"});
    g_pop++;
    $(".plan3-content li").eq(g_pop).css({clipPath:"circle(100%)",zIndex:"10"});
  };
});

$(".p3-close").click(function(){
  $(".plan3-contents").fadeOut(350);
});

$(".plan3-modal").click(function(){
  $(".plan3").addClass("active");
  $("html").css({overflowY:"hidden"});
});

$(".plan3-close").click(function(){
  $(".plan3").removeClass("active");
  $("html").css({overflowY:"scroll",overflowX:"hidden"});
});

/* footer */
gsap.from("footer", {
  y:100,
  scrollTrigger: {
    trigger: ".footer-in",
    start: "bottom bottom",
    scrub: true,
  },
});