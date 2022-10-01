// Element selection
const toggleCheck = document.getElementById("toggle-check");
const hamburger = document.getElementById("hamnurger");
const navLinks = document.getElementById("nav-links");

// Toggle menu function
const toggleMenu = () => {
  if (!toggleCheck.checked) {
    navLinks.style.display = "block";
    console.log(toggleCheck.checked);
  } else {
    console.log(toggleCheck.checked);
    navLinks.style.display = "none";
  }
};

// Hamburger event listener
hamburger.addEventListener("click", toggleMenu);
