const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "This is my new heading";
topHeading.style.color = "red";

const firstPara = document.querySelector("p");
console.log(firstPara);
console.log(firstPara.textContent);
firstPara.textContent = "This is my new para";

const h2Heading = document.querySelector("#second-heading");
console.log(h2Heading);
console.log(h2Heading.textContent);

const allParas = document.querySelectorAll("p");
console.log(allParas);
// console.log(allParas.textContent);
for (let i = 0; i < allParas.length; i++) {
  console.log("Para", i + 1, ":", allParas[i].textContent);
  //   allParas[i].style.backgroundColor = "aqua";
  //   allParas[i].textContent = 'this is my new paragraphs'
  allParas[i].classList.add("para-style");
}

const allAnothers = document.querySelectorAll(".another");
console.log(allAnothers);
for (let i = 0; i < allAnothers.length; i++) {
  console.log(
    "Elements with class another",
    i + 1,
    ":",
    allAnothers[i].textContent
  );
}

function toggleMe() {
  const myImg = document.querySelector("img");
  console.log(myImg);
  myImg.classList.toggle("round");
}
