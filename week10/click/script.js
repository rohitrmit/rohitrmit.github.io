const catButton = document.querySelector("#cat-button");
console.log(catButton);

catButton.addEventListener("click", increaseLikes);

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

function increaseLikes() {
  //   likeCount = likeCount + 1;
  likeCount++;
  console.log("i am clicked");
  //   likes.textContent = likeCount;
  likes.innerHTML = `<h3>${likeCount} </h3>`;
}
