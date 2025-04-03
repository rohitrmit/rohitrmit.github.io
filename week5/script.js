let grade = 40;
if (grade > 75) {
  console.log("Yey! you got distinction");
} else {
  console.log("You just passed the course");
}

// numerical variables 0 -9
let a = 100;
let b = parseInt("20");
let c = a + b;
// console.log(a, b, c);
//  + add - subtract * multiply / division

// string or text variables '' "" `` back ticks
let myName = "Rohit Ashok Khot";
// console.log("Hello", myName);

let myCity = "Melbourne";
if (myCity === "perth") {
  console.log("you live in perth");
} else {
  console.log("Oh I thought you are from perth");
}
let msg = `<h1> I live in ${myCity}</h1>

<p> this is ${myName} </p>`;
// console.log(msg);

// boolean variable true or false
let isItSunday = false;
const isItOART1013 = true;

// object variable
const myStudentRecord = {
  name: "Rohit",
  id: 1234,
  homeTown: "Melbourne",
  isLocal: false,
};
// console.log(myStudentRecord);
// console.log(myStudentRecord.homeTown);

// arrays they start at 0
let student1 = "Rohit";
let student2 = "Roger";
let student3 = "Lucy";
let student4 = "Sarah";
let students = ["Rohit", "Lucy", "Sarah", "Jim", "Mike", "Alice"];
// console.log(students);
// console.log("hello", students[0]);
// console.log("hello", students[1]);
// console.log("hello", students[2]);
for (let i = 0; i < students.length; i++) {
  console.log("HELLO", students[i]);
}
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Taking step no:", step);
}
