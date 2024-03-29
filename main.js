const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("on");
  menu.classList.toggle("on");
});
menu.addEventListener("click", () => {
    menuButton.classList.toggle("on");
    menu.classList.toggle("on");
  });