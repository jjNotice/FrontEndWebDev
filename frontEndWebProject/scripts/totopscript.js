const mybutton = document.getElementById("gotothetop");

const refreshButtonVisibility = () => {
  if (document.documentElement.scrollTop <= 1) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "block";
  }
};

refreshButtonVisibility();

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("scroll", (e) => {
  refreshButtonVisibility();
});
