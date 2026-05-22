const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", doJump);

const flyButton = document.querySelector("#fly-button");
console.log(flyButton);

flyButton.addEventListener("click", flyHigh);

const duck = document.querySelector("#duck");
console.log(duck);

let clicked = false;
let displacement = 20;

function doJump() {
  //   console.log("did you just click me?");

  if (clicked) {
    clicked = false;
    duck.style.translate = "0px 0px";
  } else {
    duck.style.translate = "0px -60px";
    clicked = true;
  }

  console.log(clicked);
}

function flyHigh() {
  duck.style.translate = `0px -${displacement}px`;
  displacement = displacement + 20;
}
