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


// START DarkModeJS
const body = document.querySelector('body');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');

// Enable Dark Mode
const enableDarkMode = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled")
}

// Disable Dark Mode
const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
    enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
// END DarkModeJS



// START SideNavJS
const parentMenuItems = document.querySelectorAll('.top-nav .parent-item');
const submenusList = document.querySelectorAll('.parent-item .submenu');

parentMenuItems.forEach(parentMenu => {
	parentMenu.addEventListener("click", toggleSubmenu);
})

function toggleSubmenu() {
	let submenu = this.getElementsByClassName('submenu')[0];
	this.classList.toggle('active');
	submenu.classList.toggle('active');
}
// END SideNavJS

