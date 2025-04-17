const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

// --------------------------------------------------------
// my logic for playing sound
// first I need to fetch the right buttoon for play

const playButton = document.querySelector("#play-button");
console.log(playButton);
// then I listen to clicks on that button
playButton.addEventListener("click", playAudio);

// whenever someone clicks, the audio is played
function playAudio() {
  airportAudio.play();
}
// --------------------------------------------------------

// --------------------------------------------------------
// my logic for pausing sound
// first I need to fetch the right buttoon for play

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// then I listen to clicks on that button
pauseButton.addEventListener("click", pauseAudio);

// whenever someone clicks, the audio is played
function pauseAudio() {
  airportAudio.pause();
}
// --------------------------------------------------------

// --------------------------------------------------------
// my logic for popping sound
// first I need to fetch the right buttoon for pop
// as well as the popping sound

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);
// then I listen to clicks on that button
popButton.addEventListener("click", popAudio);

// whenever someone clicks, the audio is played
function popAudio() {
  popSound.play();
  //   airportAudio.pause();
}
// --------------------------------------------------------
