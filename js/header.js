const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpenClose();
});

function menuOpenClose() {
  const menuIcon = document.querySelector(".menu-toggle");
  if (!menuIcon) {
    navigation.classList.toggle("close");
    menuIcon.innerHTML = `<i class="fas fa-times menu--icon"></i>`;
    menuOpen = true;
  } else {
    navigation.classList.toggle("close");
    menuIcon.innerHTML = `<i class="fas fa-bars menu--icon"></i>`;
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

// Resize

window.addEventListener("resize", () => {
  resize();
});

function resize() {
  if (window.innerWidth > 600) {
    console.log("Lower than 600px");
    menuToggle.classList.add("hide");
  } else {
    console.log("Mobile");
  }
}
