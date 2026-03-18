gsap.to("#box", { 
    duration: 2, 
    x: 550,
    backgroundColor: "blue",
    delay:2,
    rotate: 360,
    repeat: -1
});

gsap.from("#heading" , {
    duration: 1,
    y : -10,
    opacity: 0,

})