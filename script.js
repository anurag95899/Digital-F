function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay:{
      delay:2000,
    },
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
gsap.from("#img1",{
  delay:0.4,
  duration:1,
  y:60
})
gsap.from("#img2",{
  delay:0.4,
  duration:1,
  x:60
})
gsap.from("#img3",{
  delay:0.4,
  duration:1,
  y:-60
})
gsap.from("#page1 h1",{
  delay:0.4,
  opacity:0,
  duration:1,
})
gsap.from("#page2 h2",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:100,
  scrollTrigger:{
    scroll:"main",
    trigger:"#page2 h5",
    start:"top 100%",
    marker:true,
  }
})
gsap.from("#page2 h1",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:100,
  scrollTrigger:{
    scroll:"main",
    trigger:"#page2 h5",
    start:"top 100%",
    marker:true,
  }
})
gsap.from(".anime",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:100,
  scrollTrigger:{
    scroll:"main",
    trigger:".anime",
    start:"top 100%",
    marker:true,
  }
})
gsap.from(".leftt1 h5",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:100,
  stagger:.2,
  scrollTrigger:{
    scroll:"main",
    trigger:".anime",
    start:"top 100%",
    marker:true,
  }
})
gsap.from(".leftt1 h1",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:100,
  stagger:.5,
  scrollTrigger:{
    scroll:"main",
    trigger:".anime",
    start:"top 100%",
    marker:true,
  }
})



swiper()
