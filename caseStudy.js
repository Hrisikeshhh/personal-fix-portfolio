document.addEventListener("DOMContentLoaded",()=>{


let url = fetch("data.json");

url.then((response)=>{
  return response.json();
})
.then((data)=>{

    let webId = localStorage.getItem("itemsId");
    let caseStudyId = data.find( p=> p.id == webId);


    if(caseStudyId)
    {
                               //    projects overview
    document.querySelector(".OverviewPic img").src = caseStudyId.overViewPic;                        
    document.querySelector(".OverviewParaP1").textContent = caseStudyId.OverviewPara1;
    document.querySelector(".OverviewParaP2").textContent = caseStudyId.OverviewPara2;
    document.querySelector(".OverviewParaP3").textContent = caseStudyId.OverviewPara3;

                                //  clients problems(goals)
    document.querySelector(".problemPic img").src = caseStudyId.problemPic;
    document.querySelector(".problemParaP1").textContent = caseStudyId.problemParaP1;
    document.querySelector(".problemParaP2").textContent = caseStudyId.problemParaP2;
    document.querySelector(".problemParaP3").textContent = caseStudyId.problemParaP3;

                              //  my Approach
    document.querySelector(".sec3Ans1").textContent = caseStudyId.sec3Ans1; 
    document.querySelector(".sec3Ans2").textContent = caseStudyId.sec3Ans2;
    document.querySelector(".sec3Ans3").textContent = caseStudyId.sec3Ans3;
    document.querySelector(".sec3Ans4").textContent = caseStudyId.sec3Ans4;
    document.querySelector(".approachPic img").src = caseStudyId.approachImg;

                            // solutions
    document.querySelector(".point1").textContent = caseStudyId.point1;
    document.querySelector(".point2").textContent = caseStudyId.point2; 
    document.querySelector(".point3").textContent = caseStudyId.point3;
    document.querySelector(".point4").textContent = caseStudyId.point4;
    document.querySelector(".point5").textContent = caseStudyId.point5;
    document.querySelector(".point6").textContent = caseStudyId.point6;
    document.querySelector(".point7").textContent = caseStudyId.point7;
    document.querySelector(".point8").textContent = caseStudyId.point8;
    document.querySelector(".point9").textContent = caseStudyId.point9;
    document.querySelector(".Url").href = caseStudyId.url;

                          // ScreenShots
    document.querySelector(".Screenshot1 img").src = caseStudyId.ScreenShot1;
    document.querySelector(".Screenshot2 img").src = caseStudyId.ScreenShot2;
    document.querySelector(".Screenshot3 img").src = caseStudyId.ScreenShot3;

   document.querySelector(".TestimonialPic img").src = caseStudyId.Testimonials;

    }
   
  })
 
                // for desktop Screen
        
  let desktop = gsap.matchMedia();

  desktop.add("(min-width:800px)",()=>{
  
    let tl1 = gsap.timeline();

    tl1.from(".para1",{
        y:60,
        opacity:0,
        stagger:0.3
      }
    )

  tl1.from(".section2P1",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".section2P1",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".para2",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".para2",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".section3P1",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".para2",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".para3",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".para3",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".para4",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".para4",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".para5",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".para5",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".para6",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".para6",
         scrub:2,
         start:"top 90%",
         end:"top 70%",
        }
  })

  tl1.from(".Screenshot1",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".Screenshot1",
         scrub:2,
         start:"top 90%",
         end:"top 65%",
        }
  })

  tl1.from(".Screenshot2",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".Screenshot2",
         scrub:2,
         start:"top 90%",
         end:"top 65%",
        }
  })

  tl1.from(".Screenshot3",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".Screenshot3",
         scrub:2,
         start:"top 90%",
         end:"top 65%",
        }
  })

  tl1.from(".section6P1",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".section6P1",
         scrub:2,
         start:"top 90%",
         end:"top 65%",
        }
  })

  tl1.from(".TestimonialPic",{
        y:60,
        opacity:0,
        stagger:0.3,
        scrollTrigger:{
         scroller:"body",
         trigger:".TestimonialPic",
         scrub:2,
         start:"top 90%",
         end:"top 65%",
        }
  })

  })













//   FOR MOBILE

let menu = document.querySelector("#menu");
let close = document.querySelector("#close");

let mobile = gsap.matchMedia();

mobile.add("(max-width:800px)",()=>{

  let tl2 = gsap.timeline();

  tl2.to(".navigations",{
  x:"100vw",
  duration:0.7
})


tl2.from(".navigation",{
  x:30,
  stagger:0.2,
  opacity:0
})

tl2.from("#close",{
  x:-50,
  opacity:0
})

tl2.pause();

menu.addEventListener("click",()=>{
  tl2.play();
})

close.addEventListener("click",()=>{
  tl2.reverse();
})






})


})