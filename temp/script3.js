<h1 id="my-heading">This is my heading</h1>;

const myHeading = document.querySelector("#my-heading");
console.log(myHeading);
<h1 id="my-heading">This is my heading</h1>;

myHeading.textContent => This is my heading
myHeading.textContent = "this is a new heading";

<h1 id="my-heading">this is a new heading</h1>;


<h1 id="my-heading">This is my <span id="course-name">course</span> </h1>
myHeading.textContent => This is my course
myHeading.innerHTML => This is my <span id="course-name">course</span> 

myHeading.innerHTML = `This is my new <span id="course-name">course</span> `;

<h1 id="my-heading">This is my new <span id="course-name">course</span> </h1>

const courseName = "OART1013";
myHeading.innerHTML = `This is my new <span id="course-name">${courseName}</span> `;

<h1 id="my-heading">This is my new <span id="course-name">OART1013</span> </h1>

const Q1 = "What is my name?";
const A1 = "My name is Rohit";

<section id="QnA-block"></section>

const myQnABlock = document.querySelectorAll("#QnA-block");
myQnABlock.innerHTML += `<p>${Q1}</p> <p>${A1}</p>`;

<section id="QnA-block">
    <p>What is my name?</p>
    <p>My name is Rohit</p>
</section>

myQnABlock.forEach(addMyAnswers);
function addMyAnswers(item)
{
    myQnABlock.innerHTML += `<p>${Q[item]}</p> <p>${A[item]}</p>`;
}

event listeners 

<button id="my-button">Click me </button>

const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", doSomething);

function doSomething()
{
    console.log("hey did you just click me?");
}