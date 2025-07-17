const myAudio = document.querySelector("#airport-audio");
console.log(myAudio);
// myAudio.removeAttribute("controls");
// myAudio.play();

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAirportAudio);

function playAirportAudio() {
  myAudio.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAirportAudio);

function pauseAirportAudio() {
  myAudio.pause();
}

const popButton = document.querySelector("#pop-button");
console.log(popButton);

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

popButton.addEventListener("click", popIt);

function popIt() {
  popSound.play();
}
