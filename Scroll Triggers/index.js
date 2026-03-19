gsap.from("#page1 #box" , {
    scale: 0,
    duration: 2,
    rotate : 360,
})

gsap.from("#page2 #box" , {
    scale: 0,
    duration: 2,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page2 #box",
        start : "top 50%",
        end : "top 20%",
        markers : true,
        scrub : 2,
    }
})

var tl = gsap.timeline({scrollTrigger : {
        trigger : "#page3 #box",
        start : "top 60%",
        markers : true,
    }});

tl.from("#page3 #box" , {
    scale: 0,
    opacity: 0,
    duration: 1,
    rotate : 360,
})
tl.from("#page3 #box h1" , {
    x : -40,
    opacity: 0,
    duration: 1,
})
tl.from("#page3 #box h2" , {
    x : 40,
    opacity: 0,
    duration: 1,
})

gsap.to("#page4" , {
    scrollTrigger:{
        trigger:"#page4",
        start: "top 5%",
        end: "top 0%",
        pin:true,
    }
})

gsap.to("#page4 h1" , {
    transform:"translateX(-6000px)",
    duration: 5,
    scrollTrigger : {
        trigger : "#page4 h1",
        start : "top 25%",
        // end : "top 10%",
        scroller : "body",
        markers : true,
        scrub : 1,
    }
})