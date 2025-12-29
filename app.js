
gsap.registerPlugin(ScrollTrigger)
// const loader = document.getElementsByClassName("loading")[0];
const footer = document.getElementsByClassName("footer")[0];
const sidebars = Array.from(document.getElementsByClassName("sidebar"));

const revealText = document.getElementById("revealText");
const text = revealText.innerText;
revealText.textContent = "";
revealText.setAttribute("aria-label", text); // Good Accessibility
text.split(" ").forEach(word => {
  const span = document.createElement("span")
  span.innerHTML = word + " ";
  span.setAttribute("aria-hidden", "true"); // Good Accessibility
  revealText.appendChild(span)
})
// console.log(revealText)
console.log(document.querySelectorAll("#revealText span"))
gsap.to("#revealText span", {
  scrollTrigger: {
    scrub: 0.3,
    trigger: revealText,
    markers: true,
    start: "top 50%",
    end: "bottom 60%",
  },
  stagger: {
    each: 0.7,
    // ease: "power2."
  },
  opacity: 1,
})

// gsap.to(loader, {
//   y: "-100%",
//   delay: 1,
//   duration: 1,
// });

/*
const tl = gsap.timeline({
  repeat: "-1",
});
tl.from(header, {
  y: "-100%",
  duration: 0.5,
  delay: 1,
});
tl.from(footer, {
  y: "100%",
  duration: 0.5,
});
tl.from(sidebars[0], {
  x: "-100%",
  duration: 0.5,
});
tl.from(sidebars[1], {
  x: "100%",
  duration: 0.5,
});
// tl.reverse();
*/
