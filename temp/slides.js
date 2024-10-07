const prevBtn = document.querySelector("#prev-btn");
console.log(prevBtn);
prevBtn.addEventListener("click", gotoPrevious);

const slidesContainer = document.querySelector("#slides-container");

const slides = document.querySelectorAll(".slides");
console.log(slides);

let currentSlide = 0;
let distance = 0;
function gotoPrevious() {
  //   window.location.href = "#bottom";
}

const nextBtn = document.querySelector("#next-btn");
console.log(nextBtn);
nextBtn.addEventListener("click", gotoNext);

function gotoNext() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  console.log(currentSlide);
  distance = slides[currentSlide].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
  //   window.location.href = "#top";
}
