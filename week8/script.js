const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// ----------------------------------------------------------------------

//play pause logic
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (myVideo.paused === true || myVideo.ended === true) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
  //   myVideo.play();
}
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

//mute unmute logic
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted === true) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
  //   myVideo.play();
}
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

//step logic
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 53.0;
}
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

//likes logic
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

let likesCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

heartButton.addEventListener("click", showLikes);

function showLikes() {
  likesCount++;
  //   console.log(likesCount);
  likes.textContent = likesCount;
}
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

//fullscreen logic
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", goFullscreen);
myVideo.addEventListener("dblclick", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
// ----------------------------------------------------------------------

//fullscreen logic
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  //   console.log(myVideo.currentTime);
  let progress = Math.floor((myVideo.currentTime / myVideo.duration) * 100);
  //   console.log(progress);
  progressBar.style.width = progress + "%";
}
// ----------------------------------------------------------------------

const videoList = [
  { id: 1, src: "stardust.mp4", name: "stardust" },
  { id: 2, src: "zenscape.mp4", name: "zenscape" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "music video",
  },
];

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

const musicvideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvideoButton);
musicvideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

const msg = document.querySelector("#msg");
console.log(msg);

function chooseVideo(id) {
  console.log(videoList[id].name);
  msg.textContent = "Now playing: " + videoList[id].name;
  myVideo.src = videoList[id].src;
  myVideo.load();
  //   myVideo.play();
}
