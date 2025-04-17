const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// --------------------------------------------------------
// my logic for playing video
// first I need to fetch the right buttoon for play

const playButton = document.querySelector("#play-button");
console.log(playButton);
// then I listen to clicks on that button
playButton.addEventListener("click", playVideo);

// whenever someone clicks, the video is played
function playVideo() {
  myVideo.play();
}
// --------------------------------------------------------

// --------------------------------------------------------
// my logic for pausing sound
// first I need to fetch the right buttoon for play

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
// then I listen to clicks on that button
pauseButton.addEventListener("click", pauseVideo);

// whenever someone clicks, the audio is played
function pauseVideo() {
  myVideo.pause();
}
// --------------------------------------------------------

// --------------------------------------------------------
// my logic for playing video
// first I need to fetch the right buttoon for play

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);
// then I listen to clicks on that button
playPauseButton.addEventListener("click", toggleVideo);

// whenever someone clicks, the video is played
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
  //   myVideo.play();
}
// --------------------------------------------------------
