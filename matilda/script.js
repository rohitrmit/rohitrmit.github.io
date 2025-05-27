// const singlet = document.querySelector("#singlet");
// console.log(singlet);
// let draggedSing = null;

// singlet.addEventListener("dragstart", function () {
//   draggedSing = singlet;
// });

// const dropBoxT = document.querySelector(".droptop");
// dropBoxT.innerHTML = "";

// dropBoxT.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// dropBoxT.addEventListener("drop", function () {
//   const clone = draggedSing;
//   dropBoxT.appendChild(clone);
// });

const myTops = [
  { id: 1, name: "singlet", src: "WSinglet.png", styleid: "sing" },
  { id: 2, name: "tshirt", src: "PTshirt.png", styleid: "shirt" },
  { id: 3, name: "shoulder", src: "GLong.png", styleid: "should" },
];

const topContainer = document.querySelector(".toprow");

let hiddenTop = null;

function populate() {
  topContainer.innerHTML = "";
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
}
populate();
const tops = document.querySelectorAll(".top");
console.log(tops);

let draggedTops = null;

const dropBoxT = document.querySelector(".droptop");
dropBoxT.innerHTML = "";
for (let i = 0; i < tops.length; i++) {
  tops[i].addEventListener("dragstart", function () {
    draggedTops = tops[i];
    dropBoxT.innerHTML = "";
  });
}

dropBoxT.addEventListener("dragover", function (e) {
  e.preventDefault();
  //   draggedTops.classList.add("selected");
});

dropBoxT.addEventListener("drop", function () {
  if (draggedTops && !dropBoxT.querySelector(".tops")) {
    // display previously hidden top
    if (hiddenTop) {
      hiddenTop.style.display = "";
    }

    console.log(draggedTops.id);
    // const cloneT = draggedTops;
    const cloneT = draggedTops.cloneNode(true);
    if (draggedTops.id === "singlet") {
      dropBoxT.classList.remove("tshirt-pos");
      dropBoxT.classList.remove("should-pos");
      dropBoxT.classList.add("singlet-pos");
    } else if (draggedTops.id === "tshirt") {
      dropBoxT.classList.remove("singlet-pos");
      dropBoxT.classList.remove("should-pos");
      dropBoxT.classList.add("tshirt-pos");
    } else if (draggedTops.id === "shoulder") {
      dropBoxT.classList.remove("singlet-pos");
      dropBoxT.classList.remove("tshirt-pos");
      dropBoxT.classList.add("should-pos");
    }

    dropBoxT.appendChild(cloneT);
    // save the container of dragged top as hiddenTop and hide it using display:none
    hiddenTop = draggedTops.parentElement;
    hiddenTop.style.display = "none";
  }
});

const myLegs = [
  { id: 1, name: "Skirt", src: "Pskirt.png" },
  { id: 2, name: "Short", src: "BShort.png" },
  { id: 3, name: "Pant", src: "BPants.png" },
];

const legs = document.querySelectorAll(".leg");
console.log(legs);

let draggedLegs = null;

const dropBoxL = document.querySelector(".droppant");
dropBoxL.innerHTML = "";
for (let i = 0; i < legs.length; i++) {
  legs[i].addEventListener("dragstart", function () {
    draggedLegs = legs[i];
    dropBoxL.innerHTML = "";
  });
}

dropBoxL.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBoxL.addEventListener("drop", function () {
  if (draggedLegs && !dropBoxL.querySelector(".legs")) {
    const cloneL = draggedLegs;
    dropBoxL.appendChild(cloneL);
  }
});
