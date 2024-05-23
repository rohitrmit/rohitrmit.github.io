const myButton = document.querySelector("#my-button");
console.log(myButton);

const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);

myButton.addEventListener("click", toggleSideDrawer);

let isOpened = false;

function toggleSideDrawer() {
  //   console.log("you just clicked me");
  if (!isOpened) {
    sideDrawer.style.translate = "200px";
    isOpened = true;
  } else {
    sideDrawer.style.translate = "0px";
    isOpened = false;
  }
}
