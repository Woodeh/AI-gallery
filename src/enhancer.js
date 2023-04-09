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
    let newMaskWidth = parseInt(getComputedStyle(maskContainer).width) + delta;
   

    // Limit the movement of the circle within the container
    let containerLeft = container.getBoundingClientRect().left;
    let containerRight = container.getBoundingClientRect().right;
    let circleLeft = circle.getBoundingClientRect().left;
    let circleRight = circle.getBoundingClientRect().right;
    if (circleLeft + delta < containerLeft) {
      delta = containerLeft - circleLeft;
    } else if (circleRight + delta > containerRight) {
      delta = containerRight - circleRight;
    } 

    maskContainer.style.width = newMaskWidth + "px";
    border.style.left = parseInt(getComputedStyle(border).left) + delta + "px";
    circle.style.left = parseInt(getComputedStyle(circle).left) + delta + "px";
    
    startPosition = event.pageX;
  }
});

document.addEventListener("mouseup", function (event) {
  isDragging = false;
});