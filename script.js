document.addEventListener("DOMContentLoaded",()=>{

  function setVH() {
  document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
}
setVH();
window.addEventListener('resize', setVH);





        //  redirectiong to chrome
  function isInstagramBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes("instagram");
  }

  function isChromeBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes("chrome") && !ua.includes("instagram");
  }

  const link = document.getElementById("chrome-link");

  if (isChromeBrowser()) {
    // Hide if opened in Chrome
    link.style.display = "none";
  } else if (!isInstagramBrowser()) {
    // Also hide if it's some other browser (Safari, Firefox, etc.)
    link.style.display = "none";
  }





    //  reaching out icons
let instaIcon = document.querySelector(".instaIcon");

instaIcon.addEventListener("click",()=>{
 window.location.href = "https://www.instagram.com/hrisikesh_optimizer?igsh=MWFlemQwMndjbnRyeg==";

})


let DownloadResume = document.querySelector(".resume");

DownloadResume.addEventListener("click",()=>{
  let link = document.createElement("a");
  link.href = "webPics/resume.jpg";
  link.download = "webPics/resume.jpg";
  link.click();
  link.remove(link);
})


// var typed = new Typed('#element', {
//       strings: ['I build websites',' that evolve and improve with you.'],
//       typeSpeed: 50,  
//     });

 var typed = new Typed('#element', {
      strings: ['I build Websites.', ' That evolve and improve with you.'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
                                               // desktop screen
let desktop = gsap.matchMedia();

desktop.add("(min-width:800px)",()=>{


let tl2 = gsap.timeline();

tl2.from(".navigation",{
  y:20,
  stagger:0.1,
  opacity:0
})

tl2.from(".gsapIntro",{
  y:40,
  stagger:0.3,
  opacity:0
})

tl2.from(".contact",{
  y:40,
  stagger:0.4,
  opacity:0
})

tl2.from(".pics",{
  y:40,
  duration:0.2,
  opacity:0
})

tl2.from(".outerIntro2",{
  y:40,
  duration:0.2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".outerIntro2",
    scrub:2,
    start:"top 90%",
    end:"top 70",
  }
})


tl2.from(".A",{
  y:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".A",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
  }
})

tl2.from(".a",{
  y:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".a",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
  }
})

tl2.from(".add",{
  y:40,
  duration:0.2,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".add",
    scrub:2,
    start:"top 90%",
    end:"top 70",
  }
})


tl2.from(".b",{
  x:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".b",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
  }
})

tl2.from(".c",{
  x:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".c",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
  }
})



tl2.from(".skillsBox",{
   y:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".skillsBox",
    scrub:2,
    start:"top 80%",
    end:"top 60%"
  }
})

tl2.from(".d",{
  x:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".d",
    scrub:2,
    start:"top 90%",
    end:"top 60%"
  }
})


tl2.from(".pakage",{
  y:80,
  scale:0.8,
  duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:".pakage",
    scrub:2,
    start:"top 70%",
    end:"top 60%"
  }
})

tl2.from(".badge",{
  scale:0,
  duration:0.3,
  scrollTrigger:{
    scroller:"body",
    trigger:".badge",
    scrub:2,
     start:"top 70%",
     end:"top 60%"
  }
})

tl2.from(".e",{
  x:50,
  stagger:0.7,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".e",
    scrub:2,
    start:"top 90%",
    end:"top 60%"
  }
})

tl2.from(".whyMe-pic",{
  opacity:0,
  duration:1.7,
  scrollTrigger:{
    scroller:"body",
    trigger:".whyMe-pic",
    scrub:2,
    start:"top 80%",
    end:"top 30%"
  }
})

tl2.from(".f",{
  y:-50,
  duration:0.8,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".f",
    scrub:2,
    start:"top 80%",
    end:"top 50%"
  }
})

tl2.from(".g",{
  y:50,
  duration:0.8,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    scroller:"body",
    trigger:".g",
    scrub:2,
    start:"top 90%",
    end:"top 70%"
  }
})


tl2.from("details",{
  x:20,
  opacity:0,
  duration:0.8,
  stagger:2,
  scrollTrigger:{
    scroller:"body",
    trigger:"details",
    scrub:2,
     start:"top 90%",
     end:"top 60%"
  }
})



                                                     // hover effect using gsap
 let skills = document.querySelectorAll(".a");

skills.forEach((u)=>{
   u.addEventListener("mouseenter",()=>{
      gsap.to( u,{
        scale:1.2,
        duration:0.5
      })
   })
})

skills.forEach((u)=>{
   u.addEventListener("mouseleave",()=>{
      gsap.to( u,{
        scale:1,
        duration:0.5
      })
   })
})

let offerBox = document.querySelectorAll(".skillsBox");

offerBox.forEach((e)=>{
     e.addEventListener("mouseenter",()=>{
      gsap.to(e,{
        scale:1.07,
        duration:0.5
      })
     })
})

offerBox.forEach((e)=>{
     e.addEventListener("mouseleave",()=>{
      gsap.to(e,{
        scale:1,
        duration:0.5
      })
     })
})

window.addEventListener("load",()=>{
  scrollTrigger.refresh();
})


})




                                                     // circle cursor

let box = document.querySelector(".box");
let  body= document.querySelector("body");


body.addEventListener("mousemove",(der)=>{
        gsap.to(box,{
          x:der.clientX + window.scrollX,
          y:der.clientY + window.scrollY,
        });
        
      });



                                            //  hover effect end



// buttons

let portfolioBtn = document.querySelector("#PortfolioButton");

portfolioBtn.addEventListener("click",()=>{
   window.location.href = "portfolio.html";
})




//  making divs clickable

let one = document.querySelector("#one");
one.addEventListener("click",()=>{
  window.location.href = "https://tucky.netlify.app/";
})

let offerbox1 = document.querySelectorAll(".sec3One");
offerbox1.forEach((el)=>{
  el.addEventListener("click",()=>{
    window.location.href = "https://wa.me/917635959930";
  })
})


let offerBoxEditing = document.querySelector(".secTwo");
offerBoxEditing.addEventListener("click",()=>{
    window.location.href = "https://portfolio.malloy.sg/vizualuxe_?fbclid=PAZXh0bgNhZW0CMTEAAaeuEMOOynHheYLeMTqiXbjV4UaCzS8s6d4Ao9KpcRe7KjRhJnZKh_24pwVN0w_aem_hp14f50vbeqHshVEjZDwtQ";
})


let pakagesBtn = document.querySelectorAll("#pakageButton");       
pakagesBtn.forEach((u)=>{
  u.addEventListener("click",()=>{
    window.location.href = "https://www.instagram.com/xyra.tech?igsh=MTE1N3N6dHp4ejhzbA==";
  })
})


let  Stock = document.querySelectorAll(".stock");

Stock.forEach((i)=>{
  i.addEventListener("click",()=>{
    alert("these services are not currently available")
  })
})


// notifications



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


let tl3 = gsap.timeline();

tl3.from(".gsapIntro",{
y:30,
stagger:0.3,
opacity:0,
})

tl3.from(".contact",{
y:30,
stagger:0.3,
opacity:0,
})

tl3.from(".pic",{
y:30,
stagger:0.3,
opacity:0,
})

tl3.from(".myPic",{
scale:0.7,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".myPic",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

tl3.from(".A",{
y:30,
stagger:0.3,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".A",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

tl3.from(".addPic",{
y:50,
scale:0.7,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".addPic",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

tl3.from("#ic1",{
  y:30,
stagger:0.6,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:"#ic1",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

tl3.from("#ic2",{
  y:30,
stagger:0.6,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:"#ic2",
  scrub:2,
  start:"top 80%",
  end:"top 70%"
}
})

tl3.from(" .b",{
  x:30,
stagger:0.3,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".b",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

let offerbox1 = document.querySelectorAll("#third-A");
  
offerbox1.forEach((e)=>{
    tl3.from(e ,{
     y:80,
  scale:0.5,
  opacity:0,
  duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:e,
    scrub:2,
    start:"top 90%",
    end:"top 75%"
  }
  })
})

let offerbox2 = document.querySelectorAll("#third-B");

offerbox2.forEach((e)=>{
    tl3.from(e ,{
     y:80,
  scale:0.5,
  opacity:0,
  duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:e,
    scrub:2,
    start:"top 90%",
    end:"top 75%"
  }
  })
})


tl3.from(" .c",{
  x:30,
stagger:0.3,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".c",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

let skillsBox = document.querySelectorAll(".skillsBox");

skillsBox.forEach((t)=>{
  tl3.from(t,{
  y:80,
  scale:0.8,
  duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:t,
    scrub:2,
    start:"top 90%",
    end:"top 75%"
  }
   })
})

tl3.from(" .d",{
  x:30,
stagger:0.3,
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".d",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

let pakage = document.querySelectorAll(".pakage");

pakage.forEach((u)=>{
   tl3.from(u,{
  y:80,
  scale:0.8,
  duration:0.4,
  scrollTrigger:{
    scroller:"body",
    trigger:u,
    scrub:2,
    start:"top 90%",
    end:"top 75%"
  }
    })
})

tl3.from(".f",{
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".f",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

tl3.from(".g",{
opacity:0,
scrollTrigger:{
  scroller:"body",
  trigger:".g",
  scrub:2,
  start:"top 90%",
  end:"top 75%"
}
})

tl3.from(".whyMe-pic",{
  rotate:"360 deg",
  duration:0.6,
  scrollTrigger:{
    scroller:"body",
    trigger:".whyMe-pic",
    scrub:2,
    start:"top 90%",
    end:"top 75%"
  }
})


tl3.from("details",{
  x:20,
  opacity:0,
  duration:0.8,
  stagger:2,
  scrollTrigger:{
    scroller:"body",
    trigger:"details",
    scrub:2,
     start:"top 90%",
     end:"top 60%"
  }
})


return ()=>{
  tl.kill();
  tl3.kill();
};
})




let allDetails = document.querySelectorAll(".sevenSec details");

allDetails.forEach((detail)=>{
  detail.addEventListener("toggle",()=>{
    if(detail.open)
    {
      allDetails.forEach((el)=>{
        if(el !== detail)
          el.removeAttribute("open");
      })
    }
  })
})



    // swiper











})