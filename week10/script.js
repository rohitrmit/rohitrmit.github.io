const hoverclickButton = document.querySelector("#hoverclick-button");
console.log(hoverclickButton);

hoverclickButton.addEventListener("click", gotoFlip);

function gotoFlip() {
  window.location.href = "flip.html";
}

const dragdropButton = document.querySelector("#dragdrop-button");
console.log(dragdropButton);

dragdropButton.addEventListener("click", function () {
  window.location.href = "dragdrop.html";
});

// function gotoDragdrop() {
//   //   window.location.href = "https://www.abc.net.au/";
//   window.location.href = "dragdrop.html";
// }

const multiDragDropButton = document.querySelector("#multidragdrop-button");
console.log(multiDragDropButton);
multiDragDropButton.addEventListener("click", function () {
  location.href = "multidragdrop.html";
});

const findQueenButton = document.querySelector("#findqueen-button");
console.log(findQueenButton);
findQueenButton.addEventListener("click", function () {
  location.href = "queen.html";
});

const gameButton = document.querySelector("#completegame-button");
console.log(gameButton);
gameButton.addEventListener("click", function () {
  location.href = "game.html";
});
