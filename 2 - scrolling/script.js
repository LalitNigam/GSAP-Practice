gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:3
    }
})

gsap.to("#page3 h1",{
    transform:"translateX(-40%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 20%",
        end:"top -100%",
        scrub:2,
    }
})