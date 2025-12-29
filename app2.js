gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
  wheelMultiplier: 1,
  smoothTouch: false
})

// RAF loop (critical)
function raf(time) {
  lenis.raf(time)
  ScrollTrigger.update()
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Sync on resize / refresh
lenis.on('scroll', ScrollTrigger.update)
ScrollTrigger.addEventListener('refresh', () => lenis.resize())
ScrollTrigger.refresh()

const tl = gsap.timeline()

// Initial Text Animation
const intro = document.querySelectorAll(".intro-line")
console.log('intro.textContent', intro.innerText)


// tl.to(".loading", {
//   width: "20%",
//   duration: 0.3,
//   delay: 1
// }).to(".loading", {
//   width: "60%",
//   duration: 1.2,
// }).to(".loading", {
//   width: "80%",
//   duration: .3,
// }).to('.curtain', {
//   clipPath: "inset(0% 0% 100% 0%)",
//   duration: 1,
//   ease: "power4.inOut"
// })
tl.from("h1 span", {
  y: "100%",
  // duration: .3,
  ease: "power.inOut",
  // stagger: {
  //   each: 0.2,
  // }
}).from(".intro span", {
  opacity: 0,
  y: "100%",
  ease: "power.inOut",
}).from(".nav-content, .hero-bottom-text", {
  opacity: 0,
  duration: 1
})

// Scroll bg change
gsap.to("body", {
  background: "#f5f5dc",
  scrollTrigger: {
    trigger: ".first-section",
    markers: true,
    start: "top 59%",
    end: "top 48%",
    toggleActions: "play play reverse reverse",
  },
})

const drivenBy = ["motion & interaction", "strong sense of detail", "code & coffee"]

const textImgTextWrapper = document.querySelectorAll(".text-img-container > div")
const textImgTextContainer = document.querySelector(".text-img-container")
textImgTextContainer.addEventListener("mouseleave", () => {
  gsap.killTweensOf(".text-img-img")
  gsap.to(".text-img-img", {
    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    duration: 0.2
  })
  gsap.to(".text-img-text", {
    borderBottomColor: "white"
  })
  gsap.to(".next-section-text", {
    opacity: 1
  })
  zIndex = 10
})
let zIndex = 10;
textImgTextWrapper.forEach(textContainer => {
  console.log('textContainer', textContainer)
  const textImgText = textContainer.querySelector(".text-img-text")
  const textImgImg = textContainer.querySelector(".text-img-img")

  textImgText.addEventListener("mouseenter", () => {
    gsap.to(".next-section-text", {
      opacity: 0
    })
    gsap.to(".text-img-text", {
      borderBottomColor: "transparent"
    })
    gsap.killTweensOf(textImgImg)
    gsap.set(textImgImg, {
      clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      zIndex: ++zIndex
    });

    // Animate outward from center
    gsap.to(textImgImg, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.out",
    });
  })

})



// --------------------------------------- 1st section ------------------------------------------
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
console.log(document.querySelectorAll("#re  vealText span"))
gsap.to("#revealText span", {
  scrollTrigger: {
    scrub: 0.3,
    trigger: revealText,
    // markers: true,
    start: "top 50%",
    end: "bottom 90%",
  },
  stagger: {
    each: 0.7,
    // ease: "power2."
  },
  color: "brown",
})
