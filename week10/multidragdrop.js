const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

const deck = document.querySelector(".deck");
console.log(deck);

let cardContent = "";

for (i = 0; i < myCards.length; i++) {
  cardContent += `
    <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face flip">
                <img src="${myCards[i].src}" alt="${myCards[i].name}" />
              </div>
            </div>
          </div>
    `;
  //   console.log(cardContent);
}

deck.innerHTML = cardContent;
let draggedCard = null;

const dropBox = document.querySelector(".dropbox");
console.log(dropBox);
dropBox.innerHTML = "";

const cards = document.querySelectorAll(".card");
console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    console.log(draggedCard);
    dropBox.innerHTML = "";
  });
}

dropBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBox.addEventListener("drop", function () {
  if (draggedCard && !dropBox.querySelector(".card")) {
    // const clone = draggedCard.cloneNode(true);
    const clone = draggedCard;
    clone.classList.remove("flip");
    clone.addEventListener("click", function () {
      clone.classList.toggle("flip");
    });
    dropBox.appendChild(clone);
  }
});
