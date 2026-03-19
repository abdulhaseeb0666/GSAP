const svg = document.querySelector('svg');
const path = document.querySelectorAll('path');

initialPath = "M 100 200 Q 600 200 1100 200"
finalPath = "M 100 200 Q 600 200 1100 200"

svg.addEventListener('mousemove' , (dets)=>{
    
    gsap.to(path , {
        duration: 0,
        attr: {d: `M 100 200 Q ${dets.x} ${dets.y} 1100 200`}
    })
})

svg.addEventListener('mouseleave' , (dets)=>{
    gsap.to(path, {
        duration: 0.7,
        attr: {d: initialPath},
        ease: "elastic.out(1.5,0.3)",
    })
})


// Cursor Animation
const cursor = document.querySelector('#cursor');
const cursorElement = document.querySelector('#cursor-element');

cursor.addEventListener('mouseenter , click' , (dets)=>{
    gsap.to( cursorElement , {
        duration: 1,
        x: dets.x -30,
        y: dets.y -160,
    })
})

cursor.addEventListener('mousemove' , (dets)=>{
    gsap.to( cursorElement , {
        duration: 1,
        x: dets.x -30,
        y: dets.y -160,
    })
})

cursor.addEventListener('mouseleave' , (dets)=>{
    gsap.to( cursorElement , {
        duration: 1,
        x: dets.x -30,
        y: dets.y -160,
    })
})