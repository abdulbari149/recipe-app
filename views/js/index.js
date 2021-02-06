const container = document.querySelector("#app-content");
let navItems = document.querySelectorAll("[data-link='navItem']");

function loaderFetching() {
  fetch("http://localhost:5500/views/static/loader.html", {
    headers: {
      "content-type": "text/html",
    },
  })
    .then((data) => {
      return data.text();
    })
    .then((loader) => {
      container.innerHTML = loader;
    })
}
navItems.forEach((item) =>
  item.addEventListener("click", loaderFetching, {
    once: true,
  })
);
