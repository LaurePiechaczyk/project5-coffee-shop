const CoffeeLiquide = document.querySelector('.coffe-pot img:nth-child(1)')
const emptyCoffeePot = document.querySelector('.coffe-pot img:nth-child(2)')
const introText = document.querySelector('.intro-text')

let potAnimationDuration = 3; 

let potScrollTrigger  = {
    trigger: ".coffee-animation",
    markers:true,
    start: "100px 200px",
    markers:true,
    toggleActions: "play pause reverse reset",
  
    };

gsap.to(emptyCoffeePot, {
    rotation: 30, 
    duration: potAnimationDuration,
    scrollTrigger: potScrollTrigger,
})


gsap.to(CoffeeLiquide, {
    rotation: 10, 
    scale:0.9,
    y:18,
    x:-15,
   scrollTrigger: potScrollTrigger,
   duration: potAnimationDuration ,
})

/*
gsap.to(introText, {
    opacity: 0,
   scrollTrigger: potScrollTrigger,
})
*/
