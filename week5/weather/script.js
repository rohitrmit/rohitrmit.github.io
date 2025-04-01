function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer = document.querySelector(".outer");
  if (myTemp.value < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "gray";
    outer.style.backgroundColor = "limegreen";
  } else if (myTemp.value >= 10 && myTemp.value < 20) {
    console.log("it is a pleasant weather");
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "violet";
  } else if (myTemp.value >= 20 && myTemp.value < 30) {
    console.log("it is nice and sunny");
    body.style.backgroundColor = "coral";
    outer.style.backgroundColor = "beige";
  } else if (myTemp.value >= 30) {
    console.log("it is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.backgroundColor = "blue";
  }
}
