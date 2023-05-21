let displayTheme = localStorage.getItem("displayTheme");
const themeBtnToggle = document.querySelector(".lightdark-toggle");
let pageLogo = document.querySelector("#page-logo")

function enableLightMode() {
  pageLogo.innerHTML = `
  <img
    class="site-logo"
    src="/images/svg/sv_logo_dark.svg"
    alt="Page Logo"
  />
  `
  document.body.classList.add("light-mode");
  localStorage.setItem("displayTheme", "enabled");
}

function disableLightMode() {
  pageLogo.innerHTML = `
  <img
      class="site-logo"
      src="/images/svg/sv_logo_white.svg"
      alt="Page Logo"
    />
  `
  document.body.classList.remove("light-mode");
  localStorage.setItem("displayTheme", "disabled");
}

function saveDisplayTheme() {
  localStorage.setItem("displayTheme", displayTheme);
}

//window.addEventListener("beforeunload", saveDisplayTheme);

if (displayTheme === "enabled") {
  enableLightMode();
} else {
  disableLightMode();
}

themeBtnToggle.addEventListener("click", () => {
  displayTheme = localStorage.getItem("displayTheme");
  if (displayTheme !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
