var path = `M 10 130 Q 670 130 1356 130`

var finalPath = `M 10 130 Q 670 130 1356 130`

var string = document.querySelector("#string")

string.addEventListener("mousemove",(dets)=>{
    path = `M 10 130 Q ${dets.x} ${dets.y} 1356 130`
    gsap.to("svg path",{
        attr:{d: path},
        duration:0.3,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.4,
        ease:"elastic.out(1,0.2)"
    })
})