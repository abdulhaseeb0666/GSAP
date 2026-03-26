window.addEventListener("wheel" , function(dets){
    if(dets.deltaY > 0){
        gsap.to("#move" , {
            transform : "translateX(-100%)" ,
            duration : 10,
            repeat : -2,
            ease : "none",
        }) 
    }
})

