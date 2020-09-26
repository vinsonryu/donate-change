
const text1 = document.querySelector(".display-2");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4")
const t1 = new TimelineMax();

t1.fromTo(
  text1,
  1,
  { y: "-100%", opacity: 0 },
  { y: "0%", opacity: 1, ease: Power2.easeInOut }
)
  .fromTo(
    text2,
    0.5,
    { x: "100%", opacity: 0 },
    { x: "0%", opacity: 1, ease: Power2.easeInOut }
  )
  .fromTo(
    text3,
    0.5,
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, ease: Power2.easeInOut }
  )
  .fromTo(
    text4,
    1,
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, ease: Power2.easeInOut }
  );