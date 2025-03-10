const footerButton = document.querySelector("#footer-button");
console.log(footerButton);

footerButton.addEventListener("click", gotoFooter);

function gotoFooter() {
  window.location.href = "#bottom";
  //   window.location.href = "https://www.abc.net.au/";
}
