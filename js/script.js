const menuBurger = document.querySelector(".nav-burger");
const navBlock = document.querySelector(".nav-block");

menuBurger.addEventListener("click", () => {
  console.log("clicked!");

  navBlock.classList.toggle("show");
});
