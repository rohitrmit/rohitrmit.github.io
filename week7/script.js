// I should also acces the audio so
// that I can control with my buttons
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// I need to access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

// let us add a click event listener so that whenver
// someone click on the play button we can play the audio

playButton.addEventListener("click", playAudio);

function playAudio() {
  //   myAudio.play();
  myVideo.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  //   myAudio.pause();
  myVideo.pause();
}

// -------------------------------------------------------
// my logic for creating a popping sound effect
// first i need to access the popping sound
const popSound = document.querySelector("#pop-sound");
console.log(popSound);

// I need to access the button and listen to clicks on it.
// so whenever someone clicks on that button,
// we hear a popping sound.
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}
// -------------------------------------------------------
