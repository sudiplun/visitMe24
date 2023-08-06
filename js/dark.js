// Function to toggle the dark theme
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark-mode");
}

// Event listener for the theme switch button
const themeSwitchButton = document.getElementById("themeSwitchButton");
themeSwitchButton.addEventListener("click", toggleDarkMode);
