console.log("Hi");
// this is a comment
//  this is another Comment
//  but a bit longer

// Data types within JS
// let is for defining variables or creating boxes whose value change
//  const is for defining boxes for variables whose value is constant

// numbers , they can be both positive as well as negative as well fraction.

let myStudentId = 1234;
console.log(myStudentId);
myStudentId = 4567;
console.log(myStudentId);
let myBudget = 30.57;
console.log("I can spend today: $", myBudget);
// + addition - subtraction * multication / division
{
  let a = 20;
  let b = 40;
  let c = a + b;
  console.log("total value", c);
}

let x = "40";
if (x === 40) {
  console.log(true);
} else {
  console.log(false);
}

// console.log("total value", c);
// boolean: mainly used for condition check
let isItFriday = true;
let isItPublicHoliday = true;

if (isItPublicHoliday) {
  console.log("thank god no class today");
} else {
  console.log("sorry classes today");
}

// null and undefined null means empty box and undefined means blind unknown box
let iAmUnknown;
let emptyBox = null;
console.log(emptyBox);

// strings to store alphanumeric value including html

const myName = "Rohit Ashok Khot";
console.log("Hello", myName);
const myName2 = "Alice";
console.log("Hello", myName2);

let myCity = "Melbourne";
console.log("Hello", myCity);

// objects to group things that belong to same entity
// and here you can have multiple datatypes
const myRecord = { myName: "Rohit", id: 1234, city: "Perth" };
console.log(myRecord);
console.log(myRecord.city);

const grade1 = 87;
const grade2 = 84;

if (grade1 >= 60 && grade1 < 70) {
  console.log("you got C");
} else if (grade1 >= 70 && grade1 < 80) {
  console.log("you got D");
}
if (grade1 >= 80 && grade1 < 100) {
  console.log("you got HD");
}
// arrays is collection of elements if same kind
const grades = [67, 84, 76, 90, 45];
const cities = ["mel", "syd", "ade"];
// array starts at 0 not 1
console.log("grade of student 1", grades[0]);
console.log("second city I visited", cities[1]);

const students = ["alice", "bob", "carol", "deb", "elisa", "frank"];
// console.log ("hello", students[0]);
// console.log ("hello", students[1]);
// console.log ("hello", students[2]);
// console.log ("hello", students[3]);
// c = a + b;
console.log(students.length);
for (let i = 0; i < students.length; i++) {
  console.log("hello", students[i]);
}

const expenditures = [34, 4, 78, 5, 10];
let totalSpend = 0;
console.log(expenditures.length);
for (let i = 0; i < expenditures.length; i++) {
  totalSpend = totalSpend + expenditures[i];
  console.log("expenditure so far: ", totalSpend);
}
console.log("total expenditure is: ", totalSpend);

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
  { name: "sunglasses", price: 120 },
];
console.log(shoppingCart[0].price);
let purchases = 0;
console.log(shoppingCart.length);
for (let i = 0; i < shoppingCart.length; i++) {
  purchases = purchases + shoppingCart[i].price;
  console.log(
    "purchased: ",
    shoppingCart[i].name,
    "for: $",
    shoppingCart[i].price,
  );
}
console.log("total purchase is: ", purchases);
let discount = 0;
if (purchases > 100) {
  discount = purchases - 10 * (purchases / 100);
  console.log("your discounted price is :", discount);
}
