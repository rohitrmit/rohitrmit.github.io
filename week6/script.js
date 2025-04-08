const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", handleClick);
const topHeading = document.querySelector("h1");

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
  myCat.classList.toggle("round");
}
topHeading.textContent = "This is my new top heading";
topHeading.style.color = "red";
// console.log(topHeading);
// console.log(topHeading.textContent);

const header = document.querySelector("header");
console.log(header);
console.log(header.textContent);
console.log(header.innerHTML);
let course = "OART1013";
// header.innerHTML += `<h1>my course is ${course}</h1>
// <p> this is another para </p>
// `;
// console.log(header.innerHTML);

const allParas = document.querySelectorAll("p");
// console.log(allParas);
// console.log(allParas.textContent);
for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
  allParas[i].style.backgroundColor = "beige";
}

const mySubHeading = document.querySelector("#first-subheading");
// console.log(mySubHeading);
// console.log(mySubHeading.textContent);

const allSubHeadings = document.querySelectorAll("h2");
// console.log(allSubHeadings);
for (let i = 0; i < allSubHeadings.length; i++) {
  //   console.log(allSubHeadings[i].textContent);
}
