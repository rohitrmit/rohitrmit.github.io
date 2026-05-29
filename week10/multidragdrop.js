const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

let cardComposition = "";

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

const deck = document.querySelector(".deck");
console.log(deck);

for (let i = 0; i < shuffledCards.length; i++) {
  let content = `
  <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face yflip">
                <img src="${shuffledCards[i].src}" alt="${shuffledCards[i].name}" />
              </div>
            </div>
          </div>`;

  cardComposition = cardComposition + content;
}

console.log(cardComposition);
deck.innerHTML = cardComposition;

const cards = document.querySelectorAll(".card");
console.log(cards);
let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("dragstart", function () {
    draggedCard = cards[i];
    console.log(draggedCard);
    // console.log("Currently I am dragging", cards);
  });
}

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  dropbox.innerHTML = "";
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  //   let clone = draggedCard.cloneNode(true);
  let clone = draggedCard;
  dropbox.appendChild(clone);
  clone.addEventListener("click", function () {
    clone.classList.toggle("yflip");
  });
  draggedCard = null;
});
