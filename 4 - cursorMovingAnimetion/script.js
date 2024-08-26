var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
    })
})


image.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:4
    })
})
image.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1
    })
})