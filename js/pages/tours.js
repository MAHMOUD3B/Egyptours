// loading of page
let overlay = document.querySelector(".overlay");
window.onload = function loading() {
  overlay.style.opacity = "1";
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-10";
  }, 1200);
};

// handle tours links activation
let links = document.querySelectorAll(".head-links li");
links.forEach((link) => {
  link.addEventListener("click", (ele) => {
    handelActive(ele);
  });
});
function handelActive(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  event.target.classList.add("active");
  return event.target.classList.contains("active");
}
