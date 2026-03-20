// gsap.to("#box", { 
//     duration: 2, 
//     x: 550,
//     y:-180,
//     backgroundColor: "blue",
//     delay:1,
//     rotate: 360,
//     repeat: -1,
//     borderRadius: "50%",
// });
// gsap.from("#box", { 
//     duration: 2, 
//     x: 550,
//     y:-180,
//     backgroundColor: "blue",
//     delay:1,
//     rotate: 360,
//     repeat: -1,
//     borderRadius: "50%",
// });

gsap.from("nav" , {
    y : -20,
    opacity: 0,
    duration: 1,
    stagger: 1,
})

var h1 = gsap.timeline({repeat:-1});

h1.to("nav h1" , {
    color: "red",
    duration: 2,
})
h1.to("nav h1" , {
    color: "#1a2c8a",
    duration: 2,
})
h1.to("nav h1" , {
    color: "white",
    duration: 2,
})



gsap.from("nav div a" , {
    y : -20,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})

var tl = gsap.timeline({repeat:-1});

tl.to("#box1", { 
    duration: 2, 
    x: 550,
    y:-180,
    backgroundColor: "blue",
    rotate: 360,
    borderRadius: "50%",
    repeart: -1,
})
tl.to("#box1", { 
    duration: 2, 
    x: 0,
    y: 0,
    backgroundColor: "blue",
    rotate: 360,
    borderRadius: "0%",
    backgroundColor: "red",
    repeart: 3,
})
tl.to("#box2", { 
    duration: 2, 
    x: 550,
    y:-180,
    backgroundColor: "blue",
    rotate: 360,
    borderRadius: "50%",
})
tl.to("#box2", { 
    duration: 2, 
    x: 0,
    y: 0,
    backgroundColor: "blue",
    rotate: 360,
    borderRadius: "0%",
    backgroundColor: "red",
})

gsap.from("#heading" , {
    duration: 1,
    y : -20,
    opacity: 0,
    color: "red",
    stagger:1
})