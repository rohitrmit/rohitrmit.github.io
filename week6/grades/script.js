function calculateTotal(a, b) {
  let total = a + b;
  return total;
}

function sendReport(score) {
  //   console.log(a);
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "you got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got a D");
    report.textContent = "you got a D";
  }
}

function calculateGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1);
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  //   let total = parseFloat(a1.value) + parseFloat(a2.value);
  let a = parseFloat(a1.value);
  let b = parseFloat(a2.value);
  let sum = calculateTotal(a, b);
  console.log("sum is", sum);
  sendReport(sum);
}

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");
// h1.textContent = "This is a new heading";

const question1 = document.querySelector("#question1");
console.log(question1.textContent);
question1.classList.add("red-style");
question1.classList.add("blue-style");
// question1.classList.remove("blue-style");
// question1.textContent = "what is as1 score?";

const question2 = document.querySelector("#question2");
console.log(question2.textContent);
question2.textContent = "what is as2 score?";

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

// const allAbcd = document.querySelectorAll(".abcd");
// console.log(allAbcd);

// const report = document.querySelector("#report");
// console.log(report);

const myCat = document.querySelector("#my-cat");
console.log(myCat);
// myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
// header.textContent = "my cat 2";
let personality = "boring";
let doubt = "doubt";
header.innerHTML += `<p class="blue-style" > is the ${personality}! </p>
<p class="red-style" > do you have any ${doubt}? </p>`;
