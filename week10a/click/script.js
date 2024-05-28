const catButton = document.querySelector("#cat-button");
console.log(catButton);

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

catButton.addEventListener("click", increaseLikes);

function increaseLikes() {
  likeCount++;
  //   likeCount = likeCount + 1;
  //   likes.textContent = likeCount;
  likes.innerHTML = `<h3>${likeCount} </h3>`;
}
