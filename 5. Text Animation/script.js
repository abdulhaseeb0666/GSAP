let h1 = document.querySelector("h1");

h1Array = h1.textContent.split("");

console.log(h1Array)

h1.textContent = "";

h1Array.forEach((letter, index) => {
    let span = document.createElement("span");
    span.textContent = letter;
    document.querySelector("h1").appendChild(span);    
})

gsap.from("h1 span" , {
    y: -50,
    opacity : 0,
    stagger : 0.2,
})

var tl = gsap.timeline({repeat : -1});

tl.to("h1 span" , {
    color : "white",
})
tl.to("h1 span" , {
    color : "red",
})
tl.to("h1 span" , {
    color : "#2755a1",
})
tl.to("h1 span" , {
    color : "yellow",
})