<h1 id="course-heading">My course</h1>;

const myHeading = document.querySelector("h1");
const myHeading = document.querySelector("#course-heading");
console.log(myHeading);
<h1 id="course-heading">My course</h1>;

myHeading.textContent => My course 
myHeading.textContent = "New course";
<h1 id="course-heading">New course</h1>;

<h1 id="course-heading">My <span>Course</span></h1>;
myHeading.textContent => My course 
myHeading.innerHTML => My <span>Course</span>
const courseName = "OART1013";
myHeading.innerHTML = `My <strong id="course-name"> ${courseName} </strong>`;

<h1 id="course-heading">My <strong> OART1013 </strong></h1>;

<section id="qna-block">
    <h2>Question: what is my name?</h2>
    <p>My name is Rohit</p>
</section>

const question1= "Question: what is my name?";
const answer1= "My name is Rohit";

const mySection = document.querySelectorAll("#qna-block");
mySection.innerHTML = `<h2>${question1} </h2><p> ${answer1} </p>`;

<section id="qna-block">
    <h2>Question: what is my name?</h2>
    <p>My name is Rohit</p>
</section>

mySection.forEach(addMyAnswers);

function addMyAnswers(item)
{
    mySection.innerHTML = `<h2>${question[item]} </h2><p> ${answer[item]} </p>`;
}

event listeners 

<button id="my-button">click me </button>

const myButton = document.querySelector("#my-button");

myButton.addEventListener("click", doSomething);

function doSomething()
{
    console.log("did you just click me?");
}