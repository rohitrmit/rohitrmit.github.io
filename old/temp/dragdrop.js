const card = document.querySelector(".card");
console.log(card);

let draggedCard = null;

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

card.addEventListener("dragstart", function () {
  draggedCard = card;
  console.log(draggedCard);
});

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function (e) {
  //   const clone = draggedCard;
  const clone = draggedCard.cloneNode(true);
  dropbox.appendChild(clone);
  draggedCard = null;
  clone.addEventListener("click", function () {
    clone.classList.add("flip");
  });
});
