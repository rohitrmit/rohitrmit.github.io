const header = document.querySelector("header");
// console.log(header);
// console.log(header.textContent);
// console.log(header.innerHTML);
let course = "OART1013";
const topHeading = document.querySelector("h1");
const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", handleClick);
const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}

function handleClick() {
  console.log("Hey did you just click me?");
  // topHeading.textContent = "this is my new heading";
  myCat.classList.toggle("round");
  topHeading.classList.toggle("blue-color");
}

// header.innerHTML += `<h2 class="blue-color">This is ${course} </h2>`;
// console.log(header.textContent);
// const topHeading = document.querySelector("h1");
// console.log(topHeading);
// console.log(topHeading.textContent);
// topHeading.textContent = "this is my new heading";
// topHeading.style.color = "crimson";

const allParas = document.querySelectorAll("p");
// console.log(allParas);
// console.log(allParas.textContent);
for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid green";
  allParas[i].style.backgroundColor = "beige";
}

const firstSubHeading = document.querySelector("#first-subheading");
// console.log(firstSubHeading);
// console.log(firstSubHeading.textContent);
