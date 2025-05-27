const myTops = [
  { id: 1, name: "singlet", src: "WSinglet.png", styleid: "sing" },
  { id: 2, name: "tshirt", src: "PTshirt.png", styleid: "shirt" },
  { id: 3, name: "shoulder", src: "GLong.png", styleid: "should" },
];

// Keep track of currently equipped item and its original parent
let currentTopOnModel = null;
let currentTopOriginalParent = null;

function populate() {
  const topContainer = document.querySelector(".toprow");
  let newContent = "";
  for (let i = 0; i < myTops.length; i++) {
    newContent += `
              <div id="${myTops[i].styleid}" draggable="true">
                <img
                  class="top"
                  id="${myTops[i].name}"
                  src="${myTops[i].src}"
                  alt="${myTops[i].name}"
                  width="75px"
                />
              </div>
             `;
  }
  topContainer.innerHTML = newContent;
  
  // Re-attach event listeners after populating
  attachTopEventListeners();
}

function attachTopEventListeners() {
  const tops = document.querySelectorAll(".top");
  
  for (let i = 0; i < tops.length; i++) {
    tops[i].addEventListener("dragstart", function (e) {
      draggedTops = tops[i];
      // Store the original parent of the dragged item
      draggedOriginalParent = tops[i].parentElement.parentElement;
    });
  }
}

populate();

let draggedTops = null;
let draggedOriginalParent = null;

const dropBoxT = document.querySelector(".droptop");
dropBoxT.innerHTML = "";

dropBoxT.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxT.addEventListener("drop", function () {
  if (draggedTops) {
    // If there's already a top on the model, return it to its original location
    if (currentTopOnModel && currentTopOriginalParent) {
      returnTopToOriginal();
    }
    
    // Clear the drop box
    dropBoxT.innerHTML = "";
    
    // Clone the new top and add it to the model
    const cloneT = draggedTops.cloneNode(true);
    
    // Set positioning classes based on the dragged item
    if (draggedTops.id === "singlet") {
      dropBoxT.classList.remove("tshirt-pos", "should-pos");
      dropBoxT.classList.add("singlet-pos");
    } else if (draggedTops.id === "tshirt") {
      dropBoxT.classList.remove("singlet-pos", "should-pos");
      dropBoxT.classList.add("tshirt-pos");
    } else if (draggedTops.id === "shoulder") {
      dropBoxT.classList.remove("singlet-pos", "tshirt-pos");
      dropBoxT.classList.add("should-pos");
    }

    // Add the clone to the model
    dropBoxT.appendChild(cloneT);
    
    // Update tracking variables
    currentTopOnModel = cloneT;
    currentTopOriginalParent = draggedOriginalParent;
    
    // Hide the original item from its container
    draggedTops.parentElement.style.display = 'none';
  }
});

function returnTopToOriginal() {
  if (currentTopOnModel && currentTopOriginalParent) {
    // Find the original item in the container and show it again
    const originalItems = currentTopOriginalParent.querySelectorAll('[style*="display: none"]');
    for (let item of originalItems) {
      if (item.querySelector('.top').id === currentTopOnModel.id) {
        item.style.display = '';
        break;
      }
    }
  }
}

// Similar logic for legs/pants
const myLegs = [
  { id: 1, name: "Skirt", src: "Pskirt.png" },
  { id: 2, name: "Short", src: "BShort.png" },
  { id: 3, name: "Pant", src: "BPants.png" },
];

const legs = document.querySelectorAll(".leg");
let draggedLegs = null;
let draggedLegsOriginalParent = null;
let currentLegOnModel = null;
let currentLegOriginalParent = null;

const dropBoxL = document.querySelector(".droppant");
dropBoxL.innerHTML = "";

for (let i = 0; i < legs.length; i++) {
  legs[i].addEventListener("dragstart", function () {
    draggedLegs = legs[i];
    draggedLegsOriginalParent = legs[i].parentElement;
  });
}

dropBoxL.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxL.addEventListener("drop", function () {
  if (draggedLegs) {
    // If there's already a leg item on the model, return it to its original location
    if (currentLegOnModel && currentLegOriginalParent) {
      currentLegOriginalParent.appendChild(currentLegOnModel);
    }
    
    // Clear the drop box
    dropBoxL.innerHTML = "";
    
    // Move the dragged item to the model (not clone for legs)
    const itemToMove = draggedLegs;
    dropBoxL.appendChild(itemToMove);
    
    // Update tracking variables
    currentLegOnModel = itemToMove;
    currentLegOriginalParent = draggedLegsOriginalParent;
  }
});