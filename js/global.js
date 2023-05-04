/* Scroll to top */

const scrollToTop = document.querySelector(".scroll-top-icon");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
