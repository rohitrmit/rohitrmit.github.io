<p style="background-color:blue">Hello world</p>
 
let myPara = document.querySelector("p");

myPara.textContent   =>  "hello world" 
myPara.style.backgroundColor = "red";
myPara.textContent = "new world";

<p>Hello <span id="name">Rohit</span></p>
let myPara = document.querySelector("p");
myPara.textContent => Hello Rohit 
myPara.innerHTML => Hello <span id="name">Rohit</span>

myPara.innerHTML = "<strong>welcome to class </strong>";
<p><strong>welcome to class </strong></p>

let courseName = "OART1013";
myPara.innerHTML += `<strong id="msg">welcome to ${courseName} </strong>`;
<p>Hello <span id="name">Rohit</span>
<strong>welcome to OART1013 </strong></p>

const question1 = "gsgsdgsdg";
const answer1 ="afsafafa";

const mySection = document.querySelectorAll(".question");
mySection.forEach(addData);

function addData(item) 
{
    mySection.innerHTML = 
    `<p class="question">${question[item]}</p>
     <p class="answer">${answer[item]} </p>
     `;
}

click dblclick mouseover mouseout
...

mySection.addEventListener("click", doSomething);

function doSomething()
{
    console.log("i am clicked");
}



 <section id="question-1">
    <p>gsgsdgsdg</p>
    <p>afsafaf</p>
 </section>

