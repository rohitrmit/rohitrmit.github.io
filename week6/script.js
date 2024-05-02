// const myHeading = document.querySelector("p");
// console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "this is a new heading";

const myProjects = document.querySelectorAll("p");
console.log(myProjects);

myProjects.forEach(checkTopic);

function checkTopic(item) {
  if (item.dataset.topic === "web") {
    item.classList.add("purple-box");
  } else if (item.dataset.topic === "sound") {
    item.classList.add("coral-box");
  } else if (item.dataset.topic === "games") {
    item.classList.add("lime-box");
  }
}

// myPara.classList.add("purple-box");
// myPara.classList.add("lime-box");

// myPara[0].classList.add("purple-box");
// myPara[1].classList.add("coral-box");
// myPara[2].classList.add("lime-box");

// const myColors = ["purple-box", "coral-box", "lime-box"];

// for (let i = 0; i < 3; i++) {
//   myPara[i].classList.add(myColors[i]);
//   myPara[i].textContent = "New para " + i;
// }

// myPara.forEach(addColors);

// function addColors(item)
// {
//     item.classList.add("purple-box");
// }

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", toggleMe);

function toggleMe() {
  const myImg = document.querySelector("#my-image");
  console.log(myImg);
  myImg.classList.toggle("round");
  const myHeading = document.querySelector("h1");
  myHeading.textContent = myImg.dataset.catname;

  //   const myDiv = document.querySelector(".outer");
  //   console.log(myDiv);
  //   myDiv.classList.toggle("lime-box");
}
