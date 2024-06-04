// get the search tool
const searchTool = document.querySelector("#search-tool");

// add mousemove to the document so that the search tool is enable for the entire screen
document.addEventListener("mousemove", revealImage);

//change the position of the search tool based on mouse position
function revealImage(event) {
  searchTool.style.translate = `${event.clientX}px ${event.clientY}px`;
}

// find grid items that are marked as trash
const trashSpots = document.querySelectorAll(".trash");

trashSpots.forEach(addHover);

function addHover(spot) {
  // add hover effect so that whenever mouse is on top of them, display a message
  spot.addEventListener("mouseover", function () {
    displayMessage(spot);
  });
  spot.addEventListener("mouseout", function () {
    hideMessage(spot);
  });
}

function displayMessage(spot) {
  spot.innerHTML = " <p>found trash </p>";
}

function hideMessage(spot) {
  spot.innerHTML = "";
}
