const activeIndex = 2; // Assuming array indices start from 0
const mncircles = document.querySelectorAll(".mncircle");
const sec = document.querySelectorAll(".sec");

const fadeIn = (element) => {
  gsap.to(element, { opacity: 1 });
};

const rotateCircle = (index) => {
  gsap.to("#circle", {
    rotate: (3 - index) * 10,
    ease: Expo.easeInOut,
    duration: 1.2,
  });
};

const greyOut = () => {
  gsap.to(mncircles, { opacity: 0.08 });
  gsap.to(sec, { opacity: 0.3 });
};

const handleCircleClick = (index) => {
  rotateCircle(index);
  greyOut();
  fadeIn(mncircles[index]);
  fadeIn(sec[index]);
};

// Initial animations
fadeIn(mncircles[activeIndex]);
fadeIn(sec[activeIndex]);

// Event listeners for mncircles
mncircles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    handleCircleClick(index);
  });
});

// Final rotation animation
gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});
