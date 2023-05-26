function scrollTop() {
  // Create Element
  const scrollBtnContainer = document.createElement("div");
  const scrollButton = document.createElement("button");
  // Classlist
  scrollBtnContainer.classList.add("scroll-container");
  scrollButton.classList.add("scroll-top-icon");
  // Content
  scrollButton.innerHTML = `<i class="fas fa-arrow-up"></i>`;
  // Append Child
  scrollBtnContainer.appendChild(scrollButton);
  document.body.appendChild(scrollBtnContainer);

  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });
}
scrollTop();

// Header
const currentPage = window.location.href;
const navLinks = document.querySelectorAll(".nav-item a");

for (let i = 0; i < navLinks.length; i++) {
  if (navLinks[i].href === currentPage) {
    navLinks[i].classList.add("active");
  }
}
