const myButton = document.querySelector("#my-button");
console.log(myButton);

const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);

let isOpened = false;

myButton.addEventListener("click", toggleDrawer);

function toggleDrawer(event) {
  if (!isOpened) {
    sideDrawer.style.translate = "200px";
    isOpened = true;
  } else {
    sideDrawer.style.translate = "-200px";
    isOpened = false;
  }
}
