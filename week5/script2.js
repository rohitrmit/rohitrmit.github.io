let a = 10;
let b = 40;

// declaring or defining a function
function add(a, b) {
  let c = a + b;
  console.log("value of c", c);
  return c;
}
function multiply(a, b) {
  let f = a * b;
  console.log("value of f", f);
  return f;
}

function greet(name) {
  let newName = name.toUpperCase();
  let msg = "";
  if (newName === "ROHIT") {
    msg = "HELLO " + newName;
  } else {
    msg = "sorry I do not know you!";
  }
  console.log(msg);
  return msg;
}

let name = "Rohit12";
greet(name);

greet("Sarah");

//calling of a function
let sum = add(a, b);
console.log("value of sum", sum);
let sum2 = add(sum, 67);
let d = 56;
let e = 8788;
let sum3 = add(d, e);
console.log("value of sum", sum3);
let balance = multiply(100, 35);
console.log("value of balance", balance);
