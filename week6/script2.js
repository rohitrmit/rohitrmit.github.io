const heading = document.querySelector("h1");
console.log(heading);
console.log(heading.textContent); // reading DOM
heading.textContent = "I already know DOM"; // modifying or updating DOM

const subheading = document.querySelectorAll("h2");
console.log(subheading);
for (let i = 0; i < subheading.length; i++) {
  console.log(subheading[i].textContent);
}
// console.log(subheading.textContent);

const subsubheading = document.querySelector("h3");
console.log(subsubheading);

const blueItems = document.querySelectorAll(".blue-color");
console.log(blueItems);

const subHead = document.querySelector("#subhead-1");
console.log(subHead);

const courseName = "Interactive Media";
const courseId = "OART1013";
const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML += `
<h3 class="blue-color"> ${courseName} </h3>
<p> ${courseId} </p> 
`;

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myButton = document.querySelector("#my-button");
console.log(myButton);
myCat.addEventListener("click", toggleMe);
// myCat.addEventListener("mouseenter", addMe);
// myCat.addEventListener("mouseleave", removeMe);
myCat.addEventListener("mouseover", addMe);
myCat.addEventListener("mouseout", removeMe);

const body = document.querySelector("body");

function addMe() {
  myCat.classList.add("round");
  myButton.textContent = "clicked";
  // body.style.backgroundColor = "aqua";
}

function removeMe() {
  myCat.classList.remove("round");
  myButton.textContent = "not clicked";
  // body.style.backgroundColor = "lime";
}

function toggleMe() {
  myCat.classList.toggle("round");
}
