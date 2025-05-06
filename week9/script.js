const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", moveInput);

const myDuck = document.querySelector("#my-duck");
let clicked = false;

function moveInput() {
  if (!clicked) {
    myDuck.style.transform = "translateX(30px) translateY(40px)";
    clicked = true;
  } else {
    myDuck.style.transform = "translateX(0px) translateY(0px)";
    clicked = false;
  }
}
