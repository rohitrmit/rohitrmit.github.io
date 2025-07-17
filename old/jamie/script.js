const myButton = document.querySelector("#mybutton");

myButton.addEventListener("click", moveBell);

const bell = document.querySelector("#bell");
let count = 0;

function moveBell() {
  if (bell.classList.contains("bellanimaiton")) {
    bell.classList.remove("bellanimation");
  } else {
    bell.classList.add("bellanimation");
  }
}
