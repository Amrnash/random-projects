// select the slider-container and slider
const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slider"));
// the state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;
// adding eventlisteneres on each slide
slides.forEach((slide, index) => {
  // remove the default behvior of dragstart event on img
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());
  // Mouse Events
  slide.addEventListener("mousedown", clickStart(index));
  slide.addEventListener("mouseup", clickEnd);
  slide.addEventListener("mouseleave", clickEnd);
  slide.addEventListener("mousemove", mousemove);
});
// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
function clickStart(index, e) {
  currentIndex = index;
}

// utility functions
