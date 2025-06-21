const navbar = document.getElementById("navbar");

// Navbar background on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Tilt effect for hero video container (optional usage)
document.addEventListener("DOMContentLoaded", () => {
  const tiltCard = document.querySelector(".tilt-card");
  if (!tiltCard) return;

  document.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    tiltCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  });
});



window.addEventListener("scroll", () => {
  const infoSection = document.querySelector(".info-section");
  const nextSection = document.querySelector(".next-section");
  const nextTop = nextSection.getBoundingClientRect().top;

  // Animate cards translating
  if (nextTop < window.innerHeight * 0.9) {
    infoSection.classList.add("scrolling-out");
  } else {
    infoSection.classList.remove("scrolling-out");
  }

  // Trigger final flip state
  if (nextTop < window.innerHeight * 0.5) {
    infoSection.classList.add("final-state");
  } else {
    infoSection.classList.remove("final-state");
  }
});

