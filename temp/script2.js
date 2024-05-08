<h1 style="background-color:blue">My course title <span>OART1013</span></h1>

const myHeading = document.querySelector("h1");
myHeading.textContent => My course title 

myHeading.textContent = "New course title";
<h1>New course title</h1>

myHeading.style.backgroundColor = "red";
myHeading.textContent => My course title OART1013

myHeading.innerHTML => My course title <span>OART1013</span>

myHeading.innerHTML = "Interactive <strong> Media </strong> ";
<h1 style="background-color:blue">Interactive <strong> Media </strong></h1>

myHeading.innerHTML += "Interactive <strong> Media </strong> ";
<h1 style="background-color:blue">My course title <span>OART1013</span>
Interactive <strong> Media </strong></h1>

const courseName = "OART1013";
myHeading.innerHTML = `Interactive <strong id="title"> ${courseName} </strong>`;
<h1 style="background-color:blue">Interactive <strong id="title"> OART1013 </strong></h1>

const question = "what is a time today?";
const answer = "1:53pm";

<section id="question-answer-block"></section>

const mySection = document.querySelector("#question-answer-block");

mySection.innerHTML = `<h2>${question}<h2> <p>${answer} </p>`;

<section id="question-answer-block">
    <h2>what is a time today?</h2>
    <p>1:53pm</p>
</section>

const mySection = document.querySelectorAll("#question-answer-block");

mySection.forEach(addMyResponses);

function addMyResponses(item){
    mySection.innerHTML = `<h2>${question[item]}<h2> <p>${answer[item]} </p>`;
}

click dblclick mouseover mouseout 

<button id="my-button">Click</button>

const myButton = document.querySelector("#my-button");
myButton.addEventListener("click", doSomethingToday);

function doSomethingToday()
{
    console.log("hey did you just clicked me?");
}