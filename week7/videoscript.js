const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// my logic for playing the video:
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);

function playVideo() {
  myVideo.play();
}
// -------------------------------------

// my logic for pausing the video:
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVideo.pause();
}
// -------------------------------------

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
