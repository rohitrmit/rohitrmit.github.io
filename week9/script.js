const clickButton = document.querySelector("#click-button");
console.log(clickButton);

const myDuck = document.querySelector("#my-duck");
console.log(myDuck);

let counter = 0;

clickButton.addEventListener("click", moveDuck);

function moveDuck() {
  if (counter === 0) {
    myDuck.style.translate = "-20px -40px";
    myDuck.style.rotate = "-12deg";
    counter = 1;
  } else {
    myDuck.style.translate = "0px 0px";
    myDuck.style.rotate = "0deg";
    counter = 0;
  }
}
