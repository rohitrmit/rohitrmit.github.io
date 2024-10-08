// let us first work on the hover effect
const myCat = document.querySelector("#my-cat");
console.log(myCat);
const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);
myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

// adding show class containing display:block will make the div visible
function showMoreInfo() {
  console.log("mouse is inside the image");
  moreInfo.classList.add("show");
}

//taking the show class out will make the div revert back to display:none
function hideMoreInfo() {
  moreInfo.classList.remove("show");
}

//-----------------------------------------------------------------------

// let us work on the drop down example
const profileButton = document.querySelector("#profile-button");
console.log(profileButton);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

profileButton.addEventListener("click", toggleMenu);

// on click we can toggle between display:block and display:none
// by adding and removing the show class
function toggleMenu() {
  profileContent.classList.toggle("show");
}
//-----------------------------------------------------------------------

// let us work on the navigation example
const bottomButton = document.querySelector("#bottom-button");
console.log(bottomButton);
bottomButton.addEventListener("click", gotoBottom);
function gotoBottom() {
  window.location.href = "#bottom";
  //   window.location.href = "https://www.abc.net.au/";
}

const topButton = document.querySelector("#top-button");
console.log(topButton);
topButton.addEventListener("click", gotoTop);
function gotoTop() {
  window.location.href = "#top";
}
//-----------------------------------------------------------------------

// let us work on the scroll example
const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
}

const hscroll150Button = document.querySelector("#hscroll150-button");
console.log(hscroll150Button);

hscroll150Button.addEventListener("click", gotoHScroll150);

function gotoHScroll150() {
  scrollContent.scrollTo({ left: 150, behavior: "smooth" });
}

const vscroll300Button = document.querySelector("#vscroll300-button");
console.log(vscroll300Button);

vscroll300Button.addEventListener("click", gotoVScroll300);

function gotoVScroll300() {
  scrollContent.scrollTo({ top: 300, behavior: "smooth" });
}

const wvscrollButton = document.querySelector("#wvscroll-button");
console.log(wvscrollButton);

wvscrollButton.addEventListener("click", getWVScroll);

const wvscroll = document.querySelector("#wvscroll");

function getWVScroll() {
  wvscroll.textContent = window.scrollY;
}
//-----------------------------------------------------------------------

// let us work on the drag drop idea
const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);
const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let draggedElement = null;
purpleBox.addEventListener("dragstart", startDrag);
function startDrag() {
  console.log("dragging has started");
  draggedElement = purpleBox;
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  console.log("stop dragging and drop now ");
  event.preventDefault();
}

dropBox.addEventListener("drop", handleDrop);
function handleDrop() {
  if (draggedElement) {
    let color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    console.log(color);
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "content is dropped";
    draggedElement = null;
  }
}
