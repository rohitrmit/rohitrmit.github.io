const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//------------------------------------------------
// here is my logic for playing the sound
// first I am fetching the right play button
const playButton = document.querySelector("#play-button");
console.log(playButton);
// playing sound on click
playButton.addEventListener("click", playAudio);

// my play logic
function playAudio() {
  airportAudio.play();
}
//------------------------------------------------

//------------------------------------------------
// here is my logic for pausing the sound
// first I am fetching the right pause button
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// playing sound on click
pauseButton.addEventListener("click", pauseAudio);

// my play logic
function pauseAudio() {
  airportAudio.pause();
}
//------------------------------------------------

//------------------------------------------------
// here is my logic for the pop sound
// first I am fetching the right pause button
const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);
// playing sound on click
popButton.addEventListener("click", popAudio);

// my play logic
function popAudio() {
  //   airportAudio.pause();
  popSound.play();
}
//------------------------------------------------
