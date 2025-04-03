function checkWeather() {
  let myTemp = document.querySelector("#myTemp");
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log(myTemp);
  let temp = myTemp.value;
  console.log("temp value is", temp);
  if (temp < 10) {
    console.log("it is freezing");
    body.style.backgroundColor = "Gray";
    outer.style.backgroundColor = "black";
  } else if (temp >= 10 && temp < 20) {
    console.log("it is a pleasant weather");
    body.style.backgroundColor = "blue";
    outer.style.backgroundColor = "violet";
  } else if (temp >= 20 && temp < 35) {
    console.log("it is nice and sunny");
    body.style.backgroundColor = "green";
    outer.style.backgroundColor = "beige";
  } else if (temp >= 35) {
    console.log("it is burning hot");
    body.style.backgroundColor = "crimson";
    outer.style.backgroundColor = "aqua";
  }
}
