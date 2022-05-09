let lastImage = document.getElementsByClassName("last-img")[0];
let midImage = document.getElementsByClassName("mid-img")[0];
let birdImage = document.getElementsByClassName("bird-img")[0];
let focusImage = document.getElementsByClassName("focus-img")[0];
let leaf = document.getElementsByClassName("leaf-img")[0];
let travelling = document.querySelector("#landing h1");
let button = document.querySelector(".btns");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  birdImage.style.left = value * 0.9 + "px";
  birdImage.style.top = value * 0.7 + "px";
  lastImage.style.top = value * 0.7 + "px";
  midImage.style.top = value * 0.3 + "px";

  focusImage.style.top = value * 0 + "px";
  leaf.style.left = value * 1 + "px";
  travelling.style.right = value * 0.5 + "px";
  button.style.marginTop = value * 0.1 + "px";
});
