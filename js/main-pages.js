// loading of page
let overlay = document.querySelector(".overlay");
function loading() {
  overlay.style.opacity = "1";
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-10";
  }, 1200);
}
loading();

// handle header links activation
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
}

let Grid = document.querySelector("#layout-grid");
let List = document.querySelector("#layout-list");
let GridBtn = document.querySelector("#grid");
let ListBtn = document.querySelector("#list");
let Pagination = document.getElementById("tour-pgination");

// grid layout
GridBtn.addEventListener("click", () => {
  List.classList.add("d-none");
  Grid.classList.remove("d-none");
  Pagination.innerHTML = "Grid";
});

// list layout
ListBtn.addEventListener("click", () => {
  Grid.classList.add("d-none");
  List.classList.remove("d-none");
  Pagination.innerHTML = "List";
});
