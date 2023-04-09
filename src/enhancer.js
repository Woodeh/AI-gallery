let container = document.querySelector(".container");
let maskContainer = document.querySelector(".mask-container");
let maskImageContainer = document.querySelector(".mask-image-container");

let border = document.querySelector(".border");
let circle = document.querySelector(".circle");

let isDragging = false;
let startPosition = 0;
let delta = 0;

circle.addEventListener("mousedown", function (event) {
  isDragging = true;
  startPosition = event.pageX;
});

document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    delta = event.pageX - startPosition;
    maskContainer.style.width = parseInt(getComputedStyle(maskContainer).width) + delta + "px";
    border.style.left = parseInt(getComputedStyle(border).left) + delta + "px";
    circle.style.left = parseInt(getComputedStyle(circle).left) + delta + "px";
    startPosition = event.pageX;
  }
});

document.addEventListener("mouseup", function (event) {
  isDragging = false;
});