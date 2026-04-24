//  Variables - boxes to store value
//  let & const -  let - can change its value while const - remain fixed
//  numeric, string, boolean, null, undefined, object and arrays

// numeric - used for math operations
let a = 10;

// string  - text containing alphanumeric value
const name = "rohit";

// boolean  - true and false
let isItRaining = false;

// object - group of properties of same entity - student, properties: age, name, id
let student = {
  name: "rohit",
  id: 1234,
};
//  student.name  student.id

//  arrays - collection but they all are of same type
let grades = [34, 45, 68, 78];
let names = ["rohit", "a", "b", "c"];
// grades[2] = 68 IMP: arrays start at 0
// grades.length

// conditional statement
//  if (condition) { true -> execute this}
// else { false -> execute this}

if (isItRaining) {
  console.log("yes it is ");
} else {
  console.log("no isn't");
}

// loops - iterate through a function or set of instructions
//  for loop
for (let i = 0; i < names.length; i++) {
  console.log("Hello", names[i]);
}

// functions
let b = 20;
function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
} // this is called defining a function

add(a, b); //this is calling a function - function executes when it is called.
add(4, 5);
let c = add(a, 50);
console.log("value of c", c);

function greet(name) {
  let greetings = "hello " + name;
  return greetings;
}

let welcome = greet("alice");
console.log(welcome);
console.log(greet("Oda"));
