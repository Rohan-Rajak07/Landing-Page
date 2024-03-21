var tl=gsap.timeline();


gsap.from(".foot",{
    y:100,
    duration:2
})
tl.from(".nav-part1 , .nav-part2 , .nav-part3",{
    y:-100,
    duration:2,
    // delay:1,
    scale:2
})

tl.from(".md",{
    opacity: 0
})
