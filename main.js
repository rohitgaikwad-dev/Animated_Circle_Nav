const active = 3;
const mncircles = document.querySelectorAll(".mncircle");
const sec = document.querySelectorAll(".sec");

gsap.to(mncircles[active - 1], {
  opacity: 1,
});

gsap.to(sec[active - 1], {
  opacity: 1,
});

mncircles.forEach((val, index) => {
  val.addEventListener("click", () => {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Expo.easeInOut,
      duration: 1.2,
    });
    greyOut();
    gsap.to(val, {
      opacity: 1,
    });

    gsap.to(sec[index], {
      opacity: 1,
    });
  });
});

const greyOut = () => {
  gsap.to(mncircles, {
    opacity: 0.08,
  });

  gsap.to(sec, {
    opacity: 0.3,
  });
};


gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});
