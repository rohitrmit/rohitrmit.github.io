//  let us first fetch the media or video file to play
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

myVideo.addEventListener("timeupdate", updateProgressbar);

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

function updateProgressbar() {
  // find in percentange the amount of video played
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  //   console.log(progress);
  //  adjust the width of the progress bar accordingly
  progressBar.style.width = progress + "%";
}

// play pause logic
// fetch the play pause button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}
// -----------------------------------------------------------------

// mute unmute logic
// fetch the mute unmute button
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

// listen to click on that button
muteUnmuteButton.addEventListener("click", toggleSound);

// fetch the image so that we can change the icon based on the state
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleSound() {
  // if the video has no sound that means muted === true, then unmute the video
  if (myVideo.muted) {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = false;
  }
  // if the video has sound then mute the video
  else {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    myVideo.muted = true;
  }
}
// -----------------------------------------------------------------

// fast forward logic
// fetch the fast forward button
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// listen to click on that button
fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
// -----------------------------------------------------------------

//  = assigning value name = "rohit" id =3;
// == comparing values  3 == 4 false   let b = 4; b==4 true  DONT USE ==
// === compare value and type  3 == "3" true 3=== "3" false
//  myvideo.muted === true  => myvideo.muted
//   myvideo.muted === false  => !myvideo.muted

// -----------------------------------------------------------------

// steping logic
// fetch the fast forward button
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

// listen to click on that button
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// listen to click on that button
step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.54;
}

// -----------------------------------------------------------------

// full screen logic
// fetch the fast forward button
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

// listen to click on that button
fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// -----------------------------------------------------------------

// likes logic
// fetch the fast forward button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

// listen to click on that button
heartButton.addEventListener("click", updateLikes);

let likes = 0;
const likesContainer = document.querySelector("#likes");

function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}

// -----------------------------------------------------------------

// -----------------------------------------------------------------

const playlist = [
  {
    id: 1,
    src: "stardust.mp4",
    name: "Stardust",
  },
  {
    id: 2,
    src: "zenscape.mp4",
    name: "Zenscape",
  },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    name: "Music video",
  },
];

// playlist logic
// fetch the fast forward button
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

// listen to click on that button
stardustButton.addEventListener("click", function chooseStardust() {
  //   chooseVideo(0);
  chooseSrc("stardust.mp4");
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

// listen to click on that button
zenscapeButton.addEventListener("click", function chooseZenscape() {
  //   chooseVideo(1);
  chooseSrc("zenscape.mp4");
});

const musicVidButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVidButton);

// listen to click on that button
musicVidButton.addEventListener("click", function chooseMusicvideo() {
  //   chooseVideo(2);
  chooseSrc(
    "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4"
  );
});

function chooseVideo(no) {
  // myVideo.pause();
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

// -----------------------------------------------------------------
