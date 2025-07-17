// this is a hover example
const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

// adding show class containing display:block it will make the div visible
function showMoreInfo() {
  moreInfo.classList.add("show");
}

// removing show class containing display:block it will make the div visible
// as it will revert back to display:none
function hideMoreInfo() {
  moreInfo.classList.remove("show");
}
//-------------------------------------------------------------------------

// let us work on the drop down example
const profileButton = document.querySelector("#profile-button");
console.log(profileButton);
profileButton.addEventListener("click", toggleMenu);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

// toggle will add and remove the show class on click
function toggleMenu() {
  profileContent.classList.toggle("show");
}
//-------------------------------------------------------------------------

// let us work on navigate action
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
//-------------------------------------------------------------------------

//let us work on the scroll action
const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
  //   it gives me value of horizontal scroll
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
  //   it gives me value of vertical scroll
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
  //   it gives me value of window vertical scroll
}
//-------------------------------------------------------------------------

// let us implement drag and drop
const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);
const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let draggedElement = null;

purpleBox.addEventListener("dragstart", startDrag);

function startDrag() {
  draggedElement = purpleBox;
  console.log("dragging started");
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  event.preventDefault();
  console.log("dragging ended");
}

dropBox.addEventListener("drop", handleDrop);

function handleDrop() {
  console.log("dropped");
  if (draggedElement) {
    const color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    console.log(color);
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "Content dropped.";
    draggedElement = null;
  }
}
