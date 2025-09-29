

document.addEventListener("DOMContentLoaded",()=>{

let box = document.querySelector(".box");
let  body= document.querySelector("body");


body.addEventListener("mousemove",(der)=>{
        gsap.to(box,{
          x:der.clientX + window.scrollX,
          y:der.clientY + window.scrollY,
        });
        
      });

                     
    
                                    // for desktop screen

let desktop = gsap.matchMedia();

desktop.add("(min-width:1030px)",()=>{

 let tl2 = gsap.timeline();

 tl2.from(".a",{
   x:50,
   stagger:0.7,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".a",
    start:"top 90%",
    end:"top 30%",
    scrub:1
   }
 })

 tl2.from(".myPic",{
    opacity:0,
    rotate:360,
    stagger:0.7,
     scrollTrigger:{
    scroller:"body",
    trigger:".myPic",
    start:"top 90%",
    end:"top 50%",
    scrub:1
   }
 })

  

 tl2.from(".toolsUse",{
    opacity:0,
    x:50,
    stagger:1,
     scrollTrigger:{
    scroller:"body",
    trigger:".toolsUse",
    start:"top 90%",
    end:"top 50%",
    scrub:1
   }
 })

tl2.from(".b",{
   x:50,
   stagger:2,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".b",
    start:"top 90%",
    end:"top 70%",
    scrub:1
   }
})

tl2.from(".c",{
   scale:0.8,
   y:50,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".c",
    start:"top 90%",
    end:"top 60%",
    scrub:1
   }
})

tl2.from(".d",{
   scale:0.8,
   y:50,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".d",
    start:"top 90%",
    end:"top 60%",
    scrub:1
   }
})

tl2.from(".e",{
   scale:0.8,
   y:50,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".e",
    start:"top 90%",
    end:"top 60%",
    scrub:1
   }
})

tl2.from(".f",{
   scale:0.8,
   y:50,
   opacity:0,
   scrollTrigger:{
    scroller:"body",
    trigger:".f",
    start:"top 90%",
    end:"top 60%",
    scrub:1
   }
})

})


      //  hover effect

let hover = document.querySelectorAll(".p");

hover.forEach((u)=>{
  u.addEventListener("mouseenter",()=>{
   gsap.to( u,{
       scale:1.2,
       duration:0.5
   });
  });
});

hover.forEach((u)=>{
  u.addEventListener("mouseleave",()=>{
   gsap.to( u,{
       scale:1,
       duration:0.5
   })
  })
})


let hover1 = document.querySelectorAll(".socialMedia img");

hover1.forEach((u)=>{
  u.addEventListener("mouseenter",()=>{
   gsap.to( u,{
       scale:1.1,
       duration:0.5
   });
  });
});

hover1.forEach((u)=>{
  u.addEventListener("mouseleave",()=>{
   gsap.to( u,{
       scale:1,
       duration:0.5
   })
  })
})




                             //  for mobile screen

let mm = gsap.matchMedia();

mm.add("(max-width: 800px)",()=>{
  
let close = document.querySelector("#close");
let menu = document.querySelector("#menu");


let tl = gsap.timeline();

tl.to(".navigations",{
  x:"100vw",
  duration:0.7
})


tl.from(".navigation",{
  x:30,
  stagger:0.2,
  opacity:0
})

tl.from("#close",{
  x:-50,
  opacity:0
})

tl.pause();

menu.addEventListener("click",()=>{
  tl.play();
})

close.addEventListener("click",()=>{
  tl.reverse();
})

let tlu = gsap.timeline();


// second timeline

tlu.from(".firstSecH1",{
    scale:0,
    duration:0.8
})

tlu.from(".myPic",{
  rotate:"360 deg",
  duration:0.6,
  scrollTrigger:{
    scroller:"body",
    trigger:".myPic",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
})

tlu.from(".a",{
  x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".a",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

tlu.from(".b",{
  x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".b",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
})

let animate = document.querySelectorAll(".p");
animate.forEach((u)=>{
     tlu.from(u,{
     scale:0,
     opacity:0,
     scrollTrigger:{
    scroller:"body",
    trigger: u,
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
  })
})


tlu.from(".fourthSec1P1",{
    x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".fourthSec1P1",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

tlu.from(".fourthSec1H1",{
   x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".fourthSec1H1",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

let animate2 = document.querySelectorAll(".z");

animate2.forEach((u)=>{
  tlu.from(u,{
    y:50,
    scale:0.8,
     opacity:0,
     scrollTrigger:{
    scroller:"body",
    trigger: u,
    scrub:2,
    start:"top 70%",
    end:"top 60%"
  }
  })
})


return ()=>{
  tl.kill();
};


})


                  // for tablets

let tablet = gsap.matchMedia();

tablet.add("(min-width:819px) and (max-width:1024px)",()=>{


let tlu = gsap.timeline();


// second timeline

tlu.from(".firstSecH1",{
    scale:0,
    duration:0.8
})

tlu.from(".myPic",{
  rotate:"360 deg",
  duration:0.6,
  scrollTrigger:{
    scroller:"body",
    trigger:".myPic",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
})

tlu.from(".a",{
  x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".a",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

tlu.from(".b",{
  x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".b",
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
})

let animate = document.querySelectorAll(".p");
console.log(animate);

animate.forEach((u)=>{
     tlu.from(u,{
     scale:0,
     opacity:0,
     scrollTrigger:{
    scroller:"body",
    trigger: u,
    scrub:2,
    start:"top 90%",
    end:"top 80%"
  }
  })
})


tlu.from(".fourthSec1P1",{
    x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".fourthSec1P1",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

tlu.from(".fourthSec1H1",{
   x:50,
  stagger:2,
  duration:2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".fourthSec1H1",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

let animate2 = document.querySelectorAll(".z");

animate2.forEach((u)=>{
  tlu.from(u,{
    y:50,
    scale:0.8,
     opacity:0,
     scrollTrigger:{
    scroller:"body",
    trigger: u,
    scrub:2,
    start:"top 70%",
    end:"top 60%"
  }
  })
})

})







//  making divs clickable

let one = document.querySelector(".one");

  one.addEventListener("click",()=>{
    window.location.href = "https://tucky.netlify.app/";
 })




let Hrisikesh = document.querySelector(".Hrisikesh img");

Hrisikesh.addEventListener("click",()=>{
 window.location.href = "https://www.instagram.com/h.r.i.s.i.k.e.s.h?igsh=czBiZTVpa244emhm";

})


let brand = document.querySelector(".Xyra img");


brand.addEventListener("click",()=>{
  window.location.href = "https://www.instagram.com/xyra.tech?igsh=MTE1N3N6dHp4ejhzbA==";
})

let himanshu = document.querySelector(".Himanshu img");

himanshu.addEventListener("click",()=>{
  window.location.href = "https://www.instagram.com/vizualuxe_?igsh=MXJsOTVjNThlMHFpbw==";
})



})


let p = document.querySelectorAll(".p");

p.forEach((item)=>{

  item.addEventListener("click",()=>{

  localStorage.setItem("itemsId",item.dataset.id)

  window.location.href = "caseStudy.html";

})

})

