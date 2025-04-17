const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// --------------------------------------------------------------
// My logic for playing video
// first I need to fetch the right button for play

const playButton = document.querySelector("#play-button");
console.log(playButton);

// then I will listen to the click events on that button
playButton.addEventListener("click", playVideo);

// whenever click happens, i will play the video
function playVideo() {
  myVideo.play();
}
// --------------------------------------------------------------

// --------------------------------------------------------------
// My logic for pausing video
// first I need to fetch the right button for pause

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

// then I will listen to the click events on that button
pauseButton.addEventListener("click", pauseVideo);

// whenever click happens, i will pause the video
function pauseVideo() {
  myVideo.pause();
}
// --------------------------------------------------------------

// --------------------------------------------------------------
// My logic for playing and pausing video
// first I need to fetch the right button for pause

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// then I will listen to the click events on that button
playPauseButton.addEventListener("click", toggleVideo);

// whenever click happens, i will pause the video
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
// --------------------------------------------------------------
