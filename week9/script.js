const myDuck = document.querySelector("#my-duck");
const myButton = document.querySelector("#my-button");
myButton.addEventListener("click", moveDuck);

let clicked = false;

function moveDuck() {
  if (!clicked) {
    myDuck.style.translate = "30px 20px";
    clicked = true;
  } else {
    myDuck.style.translate = "0px 0px";
    clicked = false;
  }
}
