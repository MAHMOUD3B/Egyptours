// loading of page
let overlay = document.querySelector(".overlay");
window.onload = function loading() {
  overlay.style.opacity = "1";
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-10";
  }, 1200);
};

// increase number function
document.querySelector(".fa-plus").addEventListener("click", function () {
  document.querySelector(".number").value + 1;
});

//decrease number function
document.querySelector(".fa-minus").addEventListener("click", function () {
  if (document.querySelector(".number").value > 0) {
    document.querySelector(".number").value - 1;
  }
});

// handle header links activation
let links = document.querySelectorAll(".head-links li");
links.forEach((link) => {
  link.addEventListener("click", (ele) => {
    handelActive(ele);
  });
});

// add handle active and show classes.
let servicesLinks = document.querySelectorAll(".services-nav li");
let services = document.querySelectorAll(".services-content > div");
servicesLinks.forEach((link) => {
  link.addEventListener("click", (ele) => {
    services.forEach((serv) => {
      if (ele.target.dataset.target === serv.dataset.match) {
        handelActive(ele);
        handelShow(serv);
      }
    });
  });
});

function handelActive(event) {
  event.target.parentElement.querySelectorAll(".active").forEach((e) => {
    e.classList.remove("active");
  });
  event.target.classList.add("active");
  return event.target.classList.contains("active");
}
function handelShow(event) {
  event.parentElement.querySelectorAll(".showed").forEach((e) => {
    e.classList.remove("showed");
  });
  event.classList.add("showed");
}

// link tour page with others
let searchBtn = document.querySelector("#tours-search");
searchBtn.addEventListener("click", () => {
  location.assign("/tours.html");
});
