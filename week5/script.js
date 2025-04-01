let students = ["Rohit", "Jim", "Sarah", "Alice", "Lucy"];
// console.log("hello", students[0]);
// console.log("hello", students[1]);
// console.log("hello", students[2]);
// console.log("hello", students[3]);
for (let i = 0; i < students.length; i++) {
  console.log("HELLO", students[i]);
}

// number variable  0 - infinity dont use quotes
let a = 100;
let b = parseInt("20");
console.log(a, b);
let c = a + b;
console.log(c);
let grade = 52;
if (grade > 70) {
  console.log("Yey you got HD");
} else {
  console.log("sorry you just passed the course");
}

let weather = "rainy";
if (weather === "sunny") {
  console.log("what a nice pleasant sunny weather");
} else {
  console.log("sorry no sun today");
}
//  + addition as well as joining
//  - subtract
//  * multiplication
//  / division

// string variables
const myName = "Rohit Ashok Khot";
console.log(myName);
const myCity = "Melbourne";
const msg = `
<h1> I live in ${myCity} </h1>
<p> I love this city </p>

`;

console.log(msg);

// boolen variable TRUE FALSE
let isThisSunday = false;
let isItAfternoon = true;

// objects { name:vale, name:value}
const myStudentRecord = {
  name: "Sam",
  id: 1234,
  course: "OART1013",
  isLocal: false,
};
console.log(myStudentRecord);
console.log(myStudentRecord.course);

// arrays
// let sName1 = "Rohit";
// let sName2 = "Jim";
// let sName3 = "Alice";

let sNames = ["Rohit", "Jim", "Sarah", "Alice"];
console.log(sNames[0]);

let numbers = [2, 4, 6, 8, 10];
console.log(numbers[3]);
