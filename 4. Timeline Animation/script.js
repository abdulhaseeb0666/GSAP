gsap.from("#container #nav" , {
    duration: 1,
    y: -20,
    opacity: 0,
    stagger: 0.5
})

const button = document.getElementsByClassName("ri-menu-line")[0];
const closeButton = document.getElementsByClassName("ri-close-circle-line")[0];

var tl = gsap.timeline();


tl.to("#container #menu" , {
    y: -20,
    x: -400,
    duration: 1,
})
tl.from("#container #menu h1" , {
    x: 30,
    opacity : 0,
    stagger : 0.5,
})

tl.pause();

button.addEventListener('click' , (dets)=>{

    tl.play();

    gsap.to("#container h1 i" , {
        display : "none",
        duration: 0
    })
})

closeButton.addEventListener('click' , (dets)=>{

    tl.reverse();

    gsap.to("#container h1 i" , {
        display : "block",
        delay: 3,
    })
})