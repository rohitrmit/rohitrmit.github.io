const myButton = document.querySelector("#mybutton");

myButton.addEventListener("click", moveBell);

const bell = document.querySelector("#bell");
let count = 0;

function moveBell() {
  bell.classList.add("bellanimation");

  //   if (count === 0) {
  //     console.log("movebell");
  //     bell.classList.add("bellanimation");
  //     count = 1;
  //   } else {
  //     bell.classList.remove("bellanimation");
  //     count = 1;
  //   }
  //   bell.style.transform = "translateY(-300px)";
}
