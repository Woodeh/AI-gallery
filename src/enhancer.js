let container = document.querySelector(".container");
let maskContainer = document.querySelector(".mask-container");
let maskImageContainer = document.querySelector(".mask-image-container");

let border = document.querySelector(".border");
let circle = document.querySelector(".circle");

circle.style.draggable = true;

circle.ondrag = function (event) {
  maskContainer.style.width = event.pageX + "px";
  border.style.left = event.pageX + "px";
  circle.style.left = event.pageX + "px";
};

circle.ondragend = function (event) {
  maskContainer.style.width = event.pageX + "px";
  border.style.left = event.pageX + "px";
  circle.style.left = event.pageX + "px";
};