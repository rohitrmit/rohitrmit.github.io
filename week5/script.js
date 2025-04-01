let studentArray = ["Rohit", "Roger", "Sarah", "Julia", "Tim", "lucy"];

// console.log("hello", studentArray[0]);
// console.log("hello", studentArray[1]);
// console.log("hello", studentArray[2]);

for (let i = 0; i < studentArray.length; i++) {
  console.log("HELLO", studentArray[i]);
}

// string variables = use quotes
let myName = "rohit";
let myID = "s12345";
let myNewName = "Melbourne";
let myCity = "Perth";

// number variables
let num = 100;
let num2 = parseInt("20");
let sum = num * num2;
console.log("total is", sum);

//  + for addition as well as joining text
// - for subtraction
// * for multiplication
// / division

const weather = "rainy";
const grade = 55;

if (grade >= 75) {
  console.log("I got Distinction");
} else {
  console.log("I just passed the course");
}

const msg = `<h1> Today's weather is ${weather}
<p> this is so nice to see the sun again </p>
</h1>`;
// console.log(msg);

// boolean variables - true or false
let isThisEvening = false;
let isThisRMIT = true;

//object variables {name:value, name:value}
const myStudentDetails = {
  name: "Rohit",
  id: 1234,
  homeTown: "Melbourne",
};

let array = [2, 4, 6, 8, 10];
console.log(array[0]);
let student1 = "Rohit";
let student2 = "Roger";
console.log(student1, student2);

console.log(studentArray[2]);
console.log(studentArray[0]);
// console.log(myStudentDetails);
// console.log("my hometown is", myStudentDetails.homeTown);

// console.log("Hi");
// console.log("how are you buddy? ");
// this is a comment

// I am declaring a variable called myName to contain my name

// console.log("Hi, I am", myName);

// console.log("Hi, my student id is", myID);
// myName = "abcd";
// console.log("Hi, I am", myName);
// let myNewName = prompt("What is your name");

// console.log("Hello", myNewName);

// console.log("Hello", myNewName, myCity);

// if you know the value is not going to change, define it using const
// or else use let
let a = 30;
{
  let a = 10;
  //   console.log("Hello", a);
}
// console.log("Hello", a);
