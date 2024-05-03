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
}
function handelShow(event) {
  event.parentElement.querySelectorAll(".showed").forEach((e) => {
    e.classList.remove("showed");
  });
  event.classList.add("showed");
}

// go to tours page
let searchTourBtn = document.querySelector("#tours-search");
searchTourBtn.addEventListener("click", () => {
  location.assign("tours-search.html");
});

// go to flights page
let searchFlightBtn = document.querySelector("#flight-search");
searchFlightBtn.addEventListener("click", () => {
  location.assign("flights-search.html");
});

// go to hotels page
let searchHotelsBtn = document.querySelector("#hotel-search");
searchHotelsBtn.addEventListener("click", () => {
  location.assign("hotels-search.html");
});

// go to cruises page
let searchCruisesBtn = document.querySelector("#cruise-search");
searchCruisesBtn.addEventListener("click", () => {
  location.assign("cruises-search.html");
});

// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
