 window.addEventListener('resize', function (){ 
 'use strict';
 window.location.reload(); 
})
function init() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    locoScroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed'
    });
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
    ScrollTrigger.refresh();
}
init()

// $('#text p').textillate({ in: { effect: 'rollIn' } });

var cursor=document.querySelector("#cursor")
document.querySelector("#main").addEventListener("mousemove",function(dets){
    gsap.to(cursor,{ 
        top:dets.y+"px",
        left:dets.x+"px",
    })
})
const text = document.querySelector("#text1 p") 
text.innerHTML=text.innerText.split("").map(
    (char,i) => 
    `
      <span style ="transform:rotate(${i*6.2}deg)">${char}</span>
    `
).join("")

document.querySelector("#page2").addEventListener("mousemove",function(dets){
    gsap.to("#cir",{ 
        top:dets.y+"px",
        left:dets.x+"px",
    })
})

var myname=document.querySelector("#page2h1").addEventListener("mousemove",function(){
    gsap.to("#cir",{ 
        opacity:1,
    })
  
    gsap.to("#cursor",{ 
        backgroundColor:"transparent"
    })
})
var myname=document.querySelector("#page2h1").addEventListener("mouseleave",function(){
    gsap.to("#cir",{ 
        opacity:0,
    })
 
    gsap.to("#cursor",{ 
        backgroundColor:"rgba(0, 0, 0, 0.219)"
    })
})

document.querySelector("#box1").addEventListener("mouseenter",function(){ 
    gsap.to("#box1 img",{ 
        
        opacity :1
    })
})
document.querySelector("#box1").addEventListener("mouseleave",function(){ 
    gsap.to("#box1 img",{ 
        opacity :0
    })
})
document.querySelector("#box2").addEventListener("mouseenter",function(){ 
    gsap.to("#box2 img",{ 
        stagger:0.5,
        opacity :1
    })
})
document.querySelector("#box2").addEventListener("mouseleave",function(){ 
    gsap.to("#box2 img",{ 
        opacity :0
    })
})
document.querySelector("#box3").addEventListener("mouseenter",function(){ 
    gsap.to("#box3 img",{ 
        opacity :1
    })
})
document.querySelector("#box3").addEventListener("mouseleave",function(){ 
    gsap.to("#box3 img",{ 
        opacity :0
    })
})
var cur=document.querySelector("#cursor1") 
document.querySelector("#page4").addEventListener("mousemove",function(det2){ 
gsap.to(cur,{ 
    top:det2.y+30+"px",
    left:det2.x+"px",
})
})

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  }); 

document.querySelector("#woekbrench").addEventListener("mouseenter",function(){ 
    document.querySelector("#cursor1").style.zIndex=-1
})
document.querySelector("#woekbrench").addEventListener("mouseleave",function(){ 
    document.querySelector("#cursor1").style.zIndex=99
})

