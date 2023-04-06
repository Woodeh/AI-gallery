document.querySelectorAll(".slider").forEach((item) => {
    let clone = item.querySelector(".slider-items").cloneNode(true);
    clone.classList.add("clone");
    clone.ariaHidden = true;
    item.append(clone);
  });
  
  
// Get all the images inside the sliders
const images = document.querySelectorAll('.slider img');

// Add a click event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Create a modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create an image element inside the modal
    const modalImage = document.createElement('img');
    modalImage.src = image.src;
    modalImage.alt = image.alt;

    // Add the image element to the modal
    modal.appendChild(modalImage);

    // Add the modal to the page
    document.body.appendChild(modal);

    // Add a click event listener to the modal to close it
    modal.addEventListener('click', () => {
      modal.remove();
    });
  });
});