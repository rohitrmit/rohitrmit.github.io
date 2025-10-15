// all my colors are in inner boxes so I am first accessing them
const boxes = document.querySelectorAll(".inner");
// // similarly I am accessing all the orange flowers
// const orangeFlower = document.querySelector("#orange-flower");

const orangeFlowers = document.querySelectorAll(".orange");
console.log(orangeFlowers);
// const target = document.body;
// const target = orangeFlower;
let bgColor = null;
// console.log(target);
boxes.forEach((colorBlock) => {
  colorBlock.addEventListener("dragstart", (event) => {
    // Get the background color of the dragged box
    const computedStyle = window.getComputedStyle(event.target);
    bgColor = computedStyle.backgroundColor;

    console.log(bgColor);
  });
});

orangeFlowers.forEach((flower) => {
  flower.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allow dropping
    // console.log(flower);
  });
  flower.addEventListener("drop", (event) => {
    event.preventDefault();
    //   // Set the background color of the body to the dropped color
    //   //   target.style.backgroundColor = bgColor;
    flower.style.fill = bgColor;
  });
});

// for (i = 0; i < orangeFlowers.length; i++) {
//   orangeFlowers[i].addEventListener("dragover", (event) => {
//     event.preventDefault(); // Allow dropping
//     console.log(orangeFlowers[i]);
//   });

//   orangeFlowers[i].addEventListener("drop", (event) => {
//     event.preventDefault();
//     // Set the background color of the body to the dropped color
//     //   target.style.backgroundColor = bgColor;
//     orangeFlowers[i].style.fill = bgColor;
//   });
// }

// Add dragover event listener to target box
// target.addEventListener("dragover", (event) => {
//   event.preventDefault(); // Allow dropping
// });

// target.addEventListener("drop", (event) => {
//   event.preventDefault();
//   // Set the background color of the body to the dropped color
//   //   target.style.backgroundColor = bgColor;
//   target.style.fill = bgColor;
// });
