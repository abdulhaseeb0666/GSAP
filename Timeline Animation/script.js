gsap.from("#container #nav" , {
    duration: 1,
    y: -20,
    opacity: 0,
    stagger: 0.5
})

var tl = gsap.timeline();

const button = document.getElementsByClassName("ri-menu-line")[0];
const closeButton = document.getElementsByClassName("ri-close-circle-line")[0];


button.addEventListener('click' , (dets)=>{
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
    gsap.to("#container h1 i" , {
        display : "none",
        duration: 0
    })
})

closeButton.addEventListener('click' , (dets)=>{
    tl.to("#menu" , {
        x: 0,
        duration: 1,
        staggerX: 0.5
    })
    gsap.to("#container h1 i" , {
        display : "block",
        duration: 1,
    })
})