const videoList = [
  { id: 1, src: "stardust.mp4", name: "stardust" },
  { id: 2, src: "zenscape.mp4", name: "zenscape" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "music video",
  },
];

// ----------------------------------------------------------------
// First course of action: get access to the video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// play pause logic
// 1. get access to the right button

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// 2. Add addeventlistener for the click on this button
playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// 3. write the callback function that needs to play or pause the video
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// mute unmute logic
// 1. get access to the right button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

// 2. Add addeventlistener for the click on this button
muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// 3. write the callback function that needs to play or pause the video
function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// fast forward logic
// 1. get access to the right button

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// 2. Add addeventlistener for the click on this button
fastForwardButton.addEventListener("click", fastForwardVideo);

const fastForwardImg = document.querySelector("#fast-forward-img");
console.log(fastForwardImg);

// 3. write the callback function that needs to play or pause the video
function fastForwardVideo() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// stepping logic
// 1. get access to the right buttons

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// 2. Add addeventlistener for the click on these buttons
step1Button.addEventListener("click", gotoStep1);
step2Button.addEventListener("click", gotoStep2);

// 3. write the callback function that individual steps
function gotoStep1() {
  myVideo.currentTime = 17;
}

function gotoStep2() {
  myVideo.currentTime = 43;
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// likes logic
// 1. get access to the right button

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);
//  1.2 get acces to the text area and I should also create a counter
let likes = 0;
const likesText = document.querySelector("#likes");
console.log(likesText);

// 2. Add addeventlistener for the click on these buttons
heartButton.addEventListener("click", displayLikes);

// 3. write the callback function that individual steps
function displayLikes() {
  likes++;
  likesText.textContent = likes;
}

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// progress bar logic
// 1. get access to the progress bar

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  let duration = (myVideo.currentTime / myVideo.duration) * 100;
  //   console.log(duration);
  progressBar.style.width = duration + "%";
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// full screen logic
// 1. get access to the right button

const fullScreenButton = document.querySelector("#fullscreen-button");
console.log(fullScreenButton);

// 2. Add addeventlistener for the click on these buttons
fullScreenButton.addEventListener("click", goFullScreen);
myVideo.addEventListener("dblclick", goFullScreen);

// 3. write the callback function that individual steps
function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// playlist logic
// 1. get access to the all the playlist buttons

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
const musicVideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVideoButton);

const playingVideo = document.querySelector("#current-video");
console.log(playingVideo);

// 2. Add addeventlistener for the click on these buttons
stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

musicVideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

// 3. write the callback function that individual steps
function chooseVideo(no) {
  let currentVideo = videoList[no].src;
  let name = videoList[no].name;
  console.log(name);
  myVideo.src = currentVideo;
  myVideo.load();
  myVideo.play();
  playingVideo.textContent = name;
}

// ----------------------------------------------------------------
