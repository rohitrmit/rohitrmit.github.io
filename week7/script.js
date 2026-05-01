//   first get access to the audio element so that we can control it from here

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

// let us access the video too
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const msg = document.querySelector("#msg");
console.log(msg);

// similarly access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  //   airportAudio.play();
  myVideo.play();
  msg.textContent = "audio is playing";
}

// similarly access the pause button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  //   airportAudio.pause();
  myVideo.pause();
  msg.textContent = "audio is paused";
}

// similarly access the pop button
const popAudio = document.querySelector("#pop-audio");
console.log(popAudio);
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", makeItPop);

function makeItPop() {
  popAudio.play();
  msg.textContent = "popping...";
}

const body = document.querySelector("body");
body.addEventListener("keydown", playVideo);

function playVideo() {
  if (event.code === "Space") {
    // Prevent default behavior (like scrolling down the page)
    event.preventDefault();
    console.log("Spacebar was pressed!");
    // myVideo.play();
  }
}
