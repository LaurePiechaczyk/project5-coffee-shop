const CoffeeLiquide = document.querySelector('.coffe-pot img:nth-child(1)')
const emptyCoffeePot = document.querySelector('.coffe-pot img:nth-child(2)')
const entireCoffeePot = document.querySelector('.coffe-pot')

let potAnimationDuration = 3; 

let potScrollTrigger  = {
    //markers:true,
    trigger: ".coffe-pot",
    start: "100px 90%",
    endTrigger: "footer",
    end:"bottom top",
    toggleActions: "play pause reverse reset",
    
    };

gsap.to(emptyCoffeePot, {
    rotation: -30, 
    duration: potAnimationDuration,
    scrollTrigger: potScrollTrigger,
})


gsap.to(CoffeeLiquide, {
    rotation: -10, 
    scale:0.9,
    y:5,
    x:8,
   scrollTrigger: potScrollTrigger,
   duration: potAnimationDuration ,
})