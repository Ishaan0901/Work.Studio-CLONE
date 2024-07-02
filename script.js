// LOCOMOTIVE
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.05, //jhatak
});

//video animation
let animate = () => {
  let tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.2,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.3,
      duration: 1,
      ease: "expo.out",
    },
    "anime"
  );

  tl.to(
    "#loader h1",
    {
      color: "black",
      delay: 0.5,
      duration: 0.5,
    },
    "anime"
  );

  tl.to("#loader", {
    display: "none",
    opacity: 0,
  });
};
animate();

// pictures
let pictures=()=>{
    let page2=document.querySelector("#page2");
    let elems=document.querySelectorAll(".elem");
    elems.forEach((e)=>{
        e.addEventListener("mouseenter",()=>{
            let bgImg=e.getAttribute("data-img");
            console.log(bgImg);
            page2.style.backgroundImage= `url(${bgImg})`
        })
    })
}
pictures();

// back to top
document.querySelector(".top h2").addEventListener("click",()=>{
    scroll.scrollTo(0);
})