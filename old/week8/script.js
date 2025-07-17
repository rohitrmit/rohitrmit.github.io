// fetch the video so that we can work with it
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// play pause logic
//  1. fetch the right button to play and pause the video
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// 2. listen to the click event on that button
playPauseButton.addEventListener("click", togglePlay);

// 3. write the function that will do play and pause
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}
// ----------------------------------------------------------------------

// mute unmute logic
//  1. fetch the right button to mute or unmute the video
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// 2. listen to the click event on that button
muteUnmuteButton.addEventListener("click", toggleSound);

// 3. write the function that will do play and pause
// myvideo.muted => myvideo.muted === true
function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    myVideo.muted = false;
  } else {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = true;
  }
}
// ----------------------------------------------------------------------

// fast forward logic
//  1. fetch the right button to mute or unmute the video
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// 2. listen to the click event on that button
fastForwardButton.addEventListener("click", fastForward);

// 3. write the function that will do fast forward
// = assigning a value let b= 4 name ="rohit" id =1234
// === comparison of value and type let b=4, if(b===4) true but if (b===6) false
//  if(b) => b === true
// if(!b) => b === false

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
// ----------------------------------------------------------------------

// stepping logic
//  1. fetch the right button to mute or unmute the video
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

// 2. listen to the click event on that button
step1Button.addEventListener("click", gotoStep1);

// 3. write the function that will do fast forward

function gotoStep1() {
  myVideo.currentTime = 17.0;
}
//  1. fetch the right button to mute or unmute the video
const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// 2. listen to the click event on that button
step2Button.addEventListener("click", gotoStep2);

// 3. write the function that will do fast forward

function gotoStep2() {
  myVideo.currentTime = 43.54;
}
// ----------------------------------------------------------------------

// full screen logic
//  1. fetch the right button to mute or unmute the video
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

myVideo.addEventListener("dblclick", goFullscreen);

// 2. listen to the click event on that button
fullscreenButton.addEventListener("click", goFullscreen);

// 3. write the function that will do fast forward

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
// ----------------------------------------------------------------------

// full screen logic
//  1. fetch the right button to mute or unmute the video
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

const likesContainer = document.querySelector("#likes");
console.log(likesContainer);

let likes = 0;

// 2. listen to the click event on that button
heartButton.addEventListener("click", updateLikes);

// 3. write the function that will do fast forward

function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}
// ----------------------------------------------------------------------

// progres bar logic
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  //   console.log(progress);
  progressBar.style.width = progress + "%";
}

// ----------------------------------------------------------------------
const playlist = [
  {
    id: 1,
    name: "stardust",
    src: "stardust.mp4",
  },
  {
    id: 2,
    name: "zenscape",
    src: "zenscape.mp4",
  },
  {
    id: 3,
    name: "Music video",
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

// playlist logic
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
stardustButton.addEventListener("click", function chooseStardust() {
  //   chooseVideo(0);
  chooseSrc("stardust.mp4");
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
zenscapeButton.addEventListener("click", function chooseZenscape() {
  //   chooseVideo(1);
  chooseSrc("zenscape.mp4");
});

const musicvidButton = document.querySelector("#musicvideo-vid-button");
console.log(musicvidButton);
musicvidButton.addEventListener("click", function chooseMusicvid() {
  //   chooseVideo(2);
  chooseSrc(
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4"
  );
});

function chooseVideo(no) {
  myVideo.src = playlist[no].src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}

function chooseSrc(src) {
  myVideo.src = src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
