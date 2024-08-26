gsap.from("h1",{
    opacity:0,
    y:20,
    duration:2,
    delay:1,
    stagger:0.3,
    repeat:-1,
    yoyo:true,
})

var tl = gsap.timeline()

tl.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
})
tl.to("#box2",{
    x:1000,
    duration:2,
})
tl.to("#box3",{
    x:1000,
    duration:2,
})