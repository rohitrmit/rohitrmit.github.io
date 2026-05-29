const card = document.querySelector(".card");
console.log(card);

// card.addEventListener("mouseenter", function () {
//   card.classList.add("flip");
// });

// card.addEventListener("mouseleave", function () {
//   card.classList.remove("flip");
// });

card.addEventListener("click", function () {
  card.classList.toggle("yflip");
});

card.addEventListener("dblclick", function () {
  card.classList.toggle("xflip");
});
