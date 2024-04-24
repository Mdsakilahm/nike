var tl=gsap.timeline();    
gsap.set(".a",{opacity:0,y:10})
gsap.set(".puma_red",{opacity:0,y:10,scale:.6})
gsap.set(".nikename",{opacity:0,y:40})

tl
 .from(".left",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
})
.from(".right",{
    width:0,
    ease:Expo.easeInOut,
    duration:1.5
})
.to(".a",{
    delay:-2,
    stagger:.2,
    opacity:1,
    ease:Expo.easeInOut,
    duration:1.5
})
.to(".puma_red ",{
    delay:-1,
    opacity:1,
    y:0,
    scale:1,
    ease:Expo.easeInOut,
    duration:1.5,
})
.to(".nikename ",{
    delay:-2,
    opacity:1.5,
    y:0,
    ease:Expo.easeInOut,
    duration:1,
})


    

