const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const backgroundBlur = document.querySelector(".banner");

const darkModeIcon = document.getElementById("icon");
// Local Storage For Webpage Theme
const ls = window.localStorage;

darkMode();
var element = document.body;

hamburger.addEventListener("click", mobileMenu);
// darkModeIcon.addEventListener("click", darkMode);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  backgroundBlur.classList.toggle("active");
}

function darkMode() {
  if (ls.getItem("theme") == null) {
    ls.setItem("theme", "light");
  }
  let localData = ls.getItem("theme");
  var element = document.body;
  if (localData == "light") {
    darkModeIcon.src = "img/moon.png";
    element.classList.remove("dark-mode");
  } else if (localData == "dark") {
    darkModeIcon.src = "img/sun.png";
    element.classList.add("dark-mode");
  }
}

function toggleDarkMode() {
  darkMode();
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.src = "img/sun.png";
    ls.setItem("theme", "dark");
  } else {
    darkModeIcon.src = "img/moon.png";
    ls.setItem("theme", "light");
  }
}
