// if conditions
let grade = 45;
if (grade > 70) {
  // console.log("Hey you got a HD");
} else {
  // console.log("You just passed the course");
}

// numerical variables  0-9
let a = 100;
let b = parseInt("20");
let c = a + b;
// console.log(a, b, c);
// + addition - substraction * multiplication / division

// string variable text '' "" `` back tick
let myName = "Rohit Ashok Khot";
// console.log("hello", myName);
let myCity = "melbourne";
if (myCity === "perth") {
  // console.log("you are from perth");
} else {
  // console.log("you are not from perth");
}
let msg = `<h1> I live in ${myCity} </h1>

<p> hello this is ${myName} </p>`;
// console.log(msg);
// console.log("hello", myName + myCity);
// boolean variable
let isItSunday = false;
let isItOART1013 = true;

// object variables
const myStudentRecord = {
  name: "Rohit",
  id: 1234,
  homeTown: "Melbourne",
  isLocal: false,
};
// console.log(myStudentRecord);
// console.log(myStudentRecord.homeTown);

//arrays  array start at 0
let student1 = "Rohit";
let student2 = "John";
let student3 = "Melissa";
let students = ["Rohit", "John", "Lucy", "Sarah", "Sam", "Alice"];
console.log(students);
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
