const myDuck = document.querySelector("#my-duck");
console.log(myDuck);

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", moveDuck);

let clicked = false;

function moveDuck() {
  if (!clicked) {
    myDuck.style.translate = "0px -50px";
    clicked = true;
  } else {
    myDuck.style.translate = "0px 0px";
    clicked = false;
  }
}
