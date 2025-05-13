const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];
// Shuffle cards using Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledCards = shuffleArray(myCards);
console.log(shuffledCards);

let cardComposition = "";

for (let i = 0; i < shuffledCards.length; i++) {
  cardComposition += `
  <div class="card-container">
          <div class="card" draggable="true">
            <div class="card-face"><img src="cloud.png" alt="Back" /></div>
            <div class="card-face flip">
              <img src="${shuffledCards[i].src}" alt="${shuffledCards[i].name}" class="card-front" />
            </div>
          </div>
        </div>
  `;
  //   console.log(cardComposition);
}
const deck = document.querySelector(".deck");
console.log(deck);

deck.innerHTML = cardComposition;

const cards = document.querySelectorAll(".card");
console.log(cards);

let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    const value = draggedCard.querySelector(".card-front");
    console.log("you are dragging", value.alt);
  });
}

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  dropbox.innerHTML = "";
  const clone = draggedCard;
  //   const clone = draggedCard.cloneNode(true);
  //   dropbox.innerHTML = draggedCard;
  dropbox.appendChild(clone);
  clone.addEventListener("click", function () {
    clone.classList.toggle("flip");
  });
  draggedCard = null;
});
