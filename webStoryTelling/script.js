

gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  }
});






// GSAP PARALLAX - INDIVIDUAL ELEMENTS (while sharing class)

// get sections
var parallaxElements = Array.prototype.slice.call(document.querySelectorAll("section"));
var self = this;
	
// get box or parallax element inside each section
//  parallaxElements.forEach(function(self) {
	  
//    var boxTop = self.querySelectorAll(".parallaxTop");
//    var box = self.querySelectorAll(".parallax");
    
    // animate boxes at top of page (section already in viewport)
    
    
//});


////////////////////////////////////

// get pinned boxes and box width
var pinBoxes = $('.pin-box');
console.log(pinBoxes);
var pinBoxWidth = pinBoxes.width();

// screen width 100vw equivalent
var windowWidth = $(window).innerWidth();

// get pin box wrpper and calc width based on window width X number of boxes
var pinWrap = $('.pin-wrap');
var pinWrapWidth = windowWidth * pinBoxes.length;

var horizontalScrollLength = (pinBoxes.length - 1) * windowWidth;

// give pin wrap a set width
$('.pin-wrap').width(pinWrapWidth);


console.log('length', pinBoxes.length);
console.log('pin box width', pinBoxWidth);
console.log('pin wrap total width', pinWrapWidth);
console.log('horizontal scroll', horizontalScrollLength);


// Pinning and horizontal scrolling

gsap.to(".pin-wrap", {
  scrollTrigger: {
    scroller: ".smooth-scroll",
    scrub: true,
    trigger: "#sectionPin",
    pin: "#sectionPin",
    // anticipatePin: 1,
    start: "top top",
    end: pinWrapWidth
  }, 
  x: -horizontalScrollLength,
  ease: "none"
});





////////////////////////////////////





//timeline test
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      scroller: ".smooth-scroll",
      // scrub: true,
      start: "top 50%",
      // end: "+=100%",
      // markers: true,
      // id: "text panel"
    }
  });







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

