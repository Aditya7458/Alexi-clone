function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  
  init()
  



document.addEventListener("mousemove",function(dets){
    document.querySelector("#curser").style.left =`${dets.x+20}px`
    document.querySelector("#curser").style.top =`${dets.y+20}px`
})
document.querySelector("#nav-prt1>img").addEventListener("mouseenter",function(){
    document.querySelector("#curser").style.scale = 3
})
document.querySelector("#nav-prt1>img").addEventListener("mouseleave",function(){
    document.querySelector("#curser").style.scale = 1
})
document.querySelector("#nav-prt2>h4").addEventListener("mouseenter",function(){
    document.querySelector("#curser").style.scale = 3
})
document.querySelector("#nav-prt2>h4").addEventListener("mouseleave",function(){
    document.querySelector("#curser").style.scale = 1
})
document.querySelector("#nav-prt2>i").addEventListener("mouseenter",function(){
    document.querySelector("#curser").style.scale = 3
})
document.querySelector("#nav-prt2>i").addEventListener("mouseleave",function(){
    document.querySelector("#curser").style.scale = 1
})

var zoom  = document.querySelectorAll(".container").forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    document.querySelector("#curser").style.scale =2
  })
  elem.addEventListener("mouseleave",function(){
    document.querySelector("#curser").style.scale =1
  })
})

gsap.to("#page1 h2",{
  opacity:0.3,
  scrollTrigger:{
    trigger:"page1 h2",
    scroller:"#main",
    // markers: true,
    start:"top -2%",
    end:"top -50%",
    scrub:true,
    stagger:2
  }
})
gsap.from("#page1 h2",{
  y:100,
  // rotate:2,
  opacity:0,
  delay:.5,
})

//$$$$$$$$$$$$         page 2  $$$$$$$$$$$$$$$$// 
var page2TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    scrub: 2,
    // markers: true,
    stagger:4,
    start:"top 5%",
    end:"top -100%",
    pin: true
  }
})
page2TL.from("#page2-btm>h3,#page2-btm>h4",{
  opacity:.3,
  pin:true
})
page2TL.to("#page2 #page2-btm",{
  opacity:.3,
  pin:true
})
page2TL.to("#page3",{
  top:"-100vh",
})


gsap.from(".box h1",{
  y:100,
  rotate:5,
  opacity:0,
  scrollTrigger:{
    trigger:".box h1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }
})
// $$$$$$$$$$$$$$$$$$$$ page5 $$$$$$$$$$$$$$$$$$$$$$$$

gsap.from(".box5-txt h1",{
  y:100,
  rotate:5,
  opacity:0,
  scrollTrigger:{
    trigger:".box5-txt",
    scroller:"#main",
    // markers:true,
    scrub:2,
    start: "top 70%",
    end: "top 50%"
  }
})

// $$$$$$$$$$$$$$$ page6  $$$$$$$$$$$$$$$$$$$$$$$$/

gsap.from(".row6 p",{
  y:100,
  // rotate:5,
  opacity:0,
  scrollTrigger:{
    trigger:".row6",
    scroller:"#main",
    // markers:true,
    scrub:2,
    start: "top 55%",
    end: "top 30%"
  }
})

// $$$$$$$$$$$$$$$$$ page7 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
gsap.from("#box7 h1",{
  y:100,
  // rotate:5,
  opacity:0,
  scrollTrigger:{
    trigger:"#box7 h1",
    scroller:"#main",
    // markers:true,
    scrub:2,
    start: "top 55%",
    end: "top 30%"
  }
})


var row7 = document.querySelectorAll(".row7 .imge")
row7.forEach(function(elem){
  gsap.to(elem ,{
    opacity:1,
    scale:1,
    // rotate:10,
    scrollTrigger:{
      trigger:elem,
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 40%",
      scrub:true,
      snap:true,
      pin:true
    }
  })
  gsap.to(elem ,{
    opacity:0,
    scale:.5,
    // rotate:10,
    scrollTrigger:{
      trigger:elem,
      scroller:"#main",
      // markers:true,
      start:"top 35%",
      end:"top 10%",
      scrub:true,
      snap:true,
      // pin:true
    }
  })
})
