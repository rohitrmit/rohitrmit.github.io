const card = document.querySelector(".card");
console.log(card);

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

dropbox.addEventListener("drop", function (e) {
  const clone = draggedCard;
  //   const clone = draggedCard.cloneNode(true);
  dropbox.appendChild(clone);
  clone.addEventListener("click", function () {
    clone.classList.toggle("flip");
  });
  draggedCard = null;
});
