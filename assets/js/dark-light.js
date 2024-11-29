const btnthemetoggle = document.getElementById("theme-toggle");
// check the default theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
//
btnthemetoggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  //update localstorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
