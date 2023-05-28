const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpenClose();
});

function menuOpenClose() {
  const menuIcon = document.querySelector(".menu-toggle");
  if (!menuOpen) {
    navigation.classList.add("close");
    menuIcon.innerHTML = `<i class="fas fa-bars menu--icon"></i>`;
    menuOpen = true;
  } else {
    navigation.classList.remove("close");

    menuIcon.innerHTML = `<i class="fas fa-times menu--icon"></i>`;
    menuOpen = false;
  }
}

menuOpenClose();


// Toggle light/dark mode functionality

let lightDarkMode = false;
const lightDarkToggle = document.querySelector(".lightdark-toggle");

lightDarkToggle.addEventListener("click", () => {
  toggleLightDark();
});

function toggleLightDark() {
  const lightDarkIcon = document.querySelector(".lightdark-toggle");
  if (!lightDarkMode) {
    lightDarkIcon.innerHTML = `<i class="fas fa-sun lightdark-icon"></i>`;
    lightDarkMode = true;
  } else {
    lightDarkIcon.innerHTML = `<i class="fas fa-moon lightdark-icon"></i>`;
    lightDarkMode = false;
  }
}
