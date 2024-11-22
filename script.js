const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

// Get total number of slides
const slides = slider.children;
const totalSlides = slides.length;

// Update slider position
function updateSlider() {
  const offset = -currentIndex * slides[0].clientWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Event listeners for navigation buttons
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

// Adjust slider on window resize
window.addEventListener("resize", updateSlider);
