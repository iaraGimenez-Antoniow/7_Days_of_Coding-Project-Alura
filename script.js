const menu = document.querySelector(".opciones");
const menuIcon = document.querySelector(".back__menu img");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("active");
});
