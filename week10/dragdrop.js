const card = document.querySelector(".card");
// console.log(card);

card.addEventListener("click", function () {
  card.classList.toggle("yflip");
});

let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
  console.log(draggedCard);
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  //   let clone = draggedCard.cloneNode(true);
  let clone = draggedCard;
  dropbox.appendChild(clone);
  draggedCard = null;
});
