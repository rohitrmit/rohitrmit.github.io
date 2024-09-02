// console.log("welcome to interactive media");
// // this is a comment
// // this is an another comment
// let count = 10;
// console.log(count);
// // const name = prompt("what is your name?");
// // console.log("Hello", name);
// const myName = "Rohit";
// const myCity = "Melbourne";
// console.log(myName, "lives in", myCity);

// count = 40;
// console.log(count);

// count = 20;
// console.log(count);

// let isItRaining = true;
// console.log(isItRaining);
// if (isItRaining === true) {
//   console.log("Please bring umbrella");
// } else {
//   console.log("no need for umbrella");
// }
// // let isitOARTClass = true;
// // console.log(isitOARTClass);

// const studentRecord = {
//   name: "Rohit",
//   id: 1234,
//   class: "OART1013",
//   amIScienceStudent: false,
//   amIDesignStudent: false,
// };

// if (studentRecord.amIDesignStudent === true) {
//   console.log("welcome to the class");
// } else {
//   console.log("sorry you are in wrong class");
// }

// let myGrade = 85;
// if (myGrade >= 90) {
//   console.log("you got an HD");
// } else if (myGrade < 90 && myGrade >= 70) {
//   console.log("you got D");
// } else if (myGrade < 70 && myGrade >= 50) {
//   console.log("you got C");
// } else if (myGrade < 50 && myGrade >= 30) {
//   console.log("you got P");
// } else {
//   console.log("you got F");
// }

// console.log(studentRecord.name);
// console.log(studentRecord.name, "is a", studentRecord.class, "student");
// console.log(`${studentRecord.name}
//     is a ${studentRecord.class}
//     student`);
// console.log(studentRecord.amIDesignStudent);

// let studentNames = ["Robert", "Alice", "Frank", "Jenny"];
// console.log(studentNames);
// console.log(studentNames[4]);

// let numArray = [2, 5, 6, 8, 10];
// console.log(numArray);
// let myScore = -10.45523553;
// console.log(myScore);

console.log("hello Sarah");
console.log("hello Alice");
console.log("hello Frank");
console.log("hello Peter");
console.log("hello Rob");

let names = ["Sarah", "Alice", "Frank", "Peter", "Rob", "Jenny", "Mike"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

/*
i = 0 , names.length = 7
0 < 7  TRUE
hello names[0] => Sarah
i = 1

1 < 7 TRUE
hello names[1] => Alice
i = 2

2 < 7 TRUE
hello names[2] => Frank
i = 3

3 < 7 TRUE
hello names[3] => Peter
i = 4

4 < 7 TRUE
hello names[4] => Rob
i = 5

5 < 7 TRUE
hello names[5] => Jenny
i = 6

6 < 7 TRUE
hello names[6] => Mike
i = 7

7 < 7 FALSE

*/

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "Sunglasses", price: 90 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log("my shopping total", total);

let sum = 0;
for (let i = 0; i < shoppingCart.length; i++) {
  sum = sum + shoppingCart[i].price;
  console.log("intermediate sum", sum);
}

console.log("my shopping sum", sum);

sum = shoppingCart.forEach(calculateTotal);

function calculateTotal(item) {
  sum = sum + item.price;
  console.log(item.price);
  return sum;
}
console.log("my shopping sum", sum);
