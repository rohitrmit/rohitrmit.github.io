const myCat = document.querySelector("#my-cat");
console.log(myCat);

const msgBox = document.querySelector("#more-info");
console.log(msgBox);

myCat.addEventListener("mouseenter", showMsg);
myCat.addEventListener("mouseleave", hideMsg);

function showMsg() {
  msgBox.classList.add("show");
}

function hideMsg() {
  msgBox.classList.remove("show");
}
//---------------------------------------------------

const profileBtn = document.querySelector("#profile-button");
console.log(profileBtn);
profileBtn.addEventListener("click", toggleMenu);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

function toggleMenu() {
  console.log("i m clicked");
  profileContent.classList.toggle("show");
}
//---------------------------------------------------

const footerBtn = document.querySelector("#footer-button");
console.log(footerBtn);
footerBtn.addEventListener("click", gotoFooter);

function gotoFooter() {
  window.location.href = "#bottom";
}

const topBtn = document.querySelector("#top-button");
console.log(topBtn);
topBtn.addEventListener("click", gotoTop);

function gotoTop() {
  window.location.href = "#top";
}
//---------------------------------------------------

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

//---------------------------------------------------

const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);
const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let draggedElement = null;

purpleBox.addEventListener("dragstart", startDrag);

function startDrag() {
  draggedElement = purpleBox;
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  event.preventDefault();
}

dropBox.addEventListener("drop", handleDrop);
function handleDrop() {
  if (draggedElement) {
    const color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "Dropped!";
    draggedElement = null;
  }
}

const resizableBox = document.querySelector("#resize-box");
const resizer = document.querySelector("#resize-pointer");

let isResizing = false;

resizer.addEventListener("mousedown", startResize);

function startResize(event) {
  isResizing = true;

  // Attach event listeners for mousemove and mouseup events
  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
}

function resize(event) {
  if (isResizing) {
    const boxRect = resizableBox.getBoundingClientRect();
    const newWidth = event.clientX - boxRect.left;
    const newHeight = event.clientY - boxRect.top;

    resizableBox.style.width = newWidth + "px";
    resizableBox.style.height = newHeight + "px";
  }
}

function stopResize() {
  isResizing = false;

  // Remove event listeners for mousemove and mouseup events
  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", stopResize);
}
