const CoffeeLiquide = document.querySelector('.coffe-pot img:nth-child(1)')
const emptyCoffeePot = document.querySelector('.coffe-pot img:nth-child(2)')
const entireCoffeePot = document.querySelector('.coffe-pot')

const coffeeCup = document.querySelector('.coffe-cup img:nth-child(1)')
const coffeeSmoke = document.querySelector('.coffe-cup img:nth-child(2)')

const introText = document.querySelector('.intro-text')
const coffeeBag = document.querySelector('.coffe-bag-container')
const coffeeLeaf = document.querySelector('.coffe-leaf-container')
const coffeeFruits = document.querySelector('.coffe-fruits-container')

const secondPartText = document.querySelector('.second-part-text')



// --------------- Pot animations
let potAnimationDuration = 3; 

let potScrollTrigger  = {
    trigger: ".coffee-animation",
    start: "100px 200px",
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


// --------------- Introtexte animation
let introTextScrollTrigger  = {
    trigger: ".coffee-beans-background",
    start: "top 550px",
    endTrigger: "footer",
    end:"bottom top",
    
    toggleActions: "play none none reverse",
    };


gsap.to(introText, {
    opacity: 0,
    scrollTrigger: introTextScrollTrigger,
    duration: 1,
    display:"none",
})

// --------------- coffebag animation
gsap.to(coffeeBag, {
    scrollTrigger: introTextScrollTrigger,
    duration: 6,
    y:0,
})

// --------------- coffee leaf animation
let plantsTextScrollTrigger  = {
    trigger: ".coffee-beans-background",
    start: "top 0px",
    endTrigger: "footer",
    end:"bottom top",
    markers:true,
    toggleActions: "play none none reverse",
    };

gsap.to(coffeeLeaf, {
    opacity: 1,
    scrollTrigger: plantsTextScrollTrigger,
    duration: 6,
})

// --------------- coffee fruits animation
gsap.to(coffeeFruits, {
    opacity: 1,
    scrollTrigger: plantsTextScrollTrigger,
    duration: 10,
})

// --------------- second-part-text animation
gsap.to(secondPartText, {
    opacity: 1,
    scrollTrigger: plantsTextScrollTrigger,
    duration: 5,
})



// --------------- Pot disapearance
gsap.to(entireCoffeePot, {
    opacity: 0,
    scrollTrigger: plantsTextScrollTrigger,
    duration: 2,
})

// --------------- cup animation
/*
gsap.to(coffeeCup, {
    opacity: 1,
    scrollTrigger: plantsTextScrollTrigger,
    duration: 10,
})
*/