// myVideo contains the video I am working with
const myVideo = document.querySelector("#dj-video");
console.log(myVideo);
// myVideo.removeAttribute("controls");

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// This function will play and pause the video on clicking
playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.pause();
  }
}
//--------------------------------------------------------

// This function will mute or unmute video on clicking
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
myVideo.addEventListener("click", toggleSound);
muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteButton.style.backgroundColor = "#d5cea3";
    myVideo.muted = false;
  } else {
    muteUnmuteButton.style.backgroundColor = "#736f55";
    myVideo.muted = true;
  }
}
//--------------------------------------------------------

// This function will update the progress bar to show how much of the video is
// currently played and how much is remaining.
const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  progressBar.style.width = progress + "%";
}
//--------------------------------------------------------

// this function will add full screen mode when double clicked on the video
myVideo.addEventListener("dblclick", goFullScreen);

const fullscreenButton = document.querySelector("#fullscreen-button");

fullscreenButton.addEventListener("click", goFullScreen);

function goFullScreen(event) {
  event.preventDefault();
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
//--------------------------------------------------------

// This function  will add timestamp for easy navigation
const step1Button = document.querySelector("#step-1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step-2-button");
console.log(step2Button);
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 40.0;
}
