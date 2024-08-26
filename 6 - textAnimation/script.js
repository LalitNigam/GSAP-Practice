function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1Text.split("")

    var clutter =""

    var halfValue = splittedText.length/2

splittedText.forEach((e,idx)=>{
    if(idx<halfValue){
        clutter += `<span class="a">${e}</span>`
    }
    else{
        clutter += `<span class="b">${e}</span>`
    }
})

h1.innerHTML = clutter

}

breakTheText()

gsap.from("h1 .a",{
    y:50,
    opacity:0,
    duration:0.6,
    delay: 0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:50,
    opacity:0,
    duration:0.6,
    delay: 0.5,
    stagger:-0.15
})