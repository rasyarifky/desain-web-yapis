// scroll

// toggle class active
const navbarSection = document.querySelector(".navbar-section");

document.querySelector(".icon-menu").onclick = () => {
  navbarSection.classList.toggle("active");
};

const menu = document.querySelector(".icon-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarSection.contains(e.target)) {
    navbarSection.classList.remove("active");
  }
});
