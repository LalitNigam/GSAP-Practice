function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.5,
    stagger:0.15
})

tl.from(".center-part1 h1, .center-part1 p",{
    x:-300,
    opacity:0,
    duration:0.8,
    stagger:0.5
},"-=0.5")
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.8,
})

tl.from(".center-part2 img",{
    x:300,
    opacity:0,
    duration:1,
},"-=2")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
},"-=1.5")
}

//! section2

function page2Animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top -15%",
        scrub:2
        }
})


tl2.from(".services",{
    y:100,
    opacity:0
})

// line 1

tl2.from(".elem.line.left",{
    x:-400,
    opacity:0,
    duration:0.5
},"same")
tl2.from(".elem.line.right",{
    x:400,
    opacity:0,
    duration:1
},"same")

// line 2

tl2.from(".elem.line2.left",{
    x:-400,
    opacity:0,
},"same2")
tl2.from(".elem.line2.right",{
    x:400,
    opacity:0,
},"same2")
}

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".section3",
            scroller:"body",
            start:"top 60%",
            end:"top 5%",
            scrub:2
            }
    })
    
    tl3.from(".card",{
        x:90,
        opacity:0
        
    },"pin")
    tl3.from(".card h1, .card p, .card button",{
        x:-160,
        opacity:0
    },"pin")
    
    tl3.from(".learn",{
        y:-200,
        opacity:0,
        duration:1,
    })
}

page1Animation()
page2Animation()
page3Animation()


