let stars = document.GetElementById("stars");
let moon = document.GetElementById("moon");
let mountains_behind = document.GetElementById("mountains_behind");
let mountiains_front = document.GetElementById("mountiains_front");
let text = document.GetElementById("text");
let btn = document.GetElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value + "px";
});