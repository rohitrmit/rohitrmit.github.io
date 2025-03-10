function checkWeather() {
  let temp = document.querySelector("#temp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(temp.value);
  if (temp.value >= 40) {
    console.log("it is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.borderColor = "blue";
  } else if (temp.value < 40 && temp.value >= 30) {
    console.log("it is sunny and warm");
    body.style.backgroundColor = "limegreen";
    outer.style.borderColor = "peach";
  } else if (temp.value < 30 && temp.value >= 15) {
    console.log("it is a pleasant weather");
    body.style.backgroundColor = "aqua";
    outer.style.borderColor = "purple";
  } else if (temp.value < 15) {
    console.log("it is freezing cold");
    body.style.backgroundColor = "grey";
    outer.style.borderColor = "coral";
  }
}
