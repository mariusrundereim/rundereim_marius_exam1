let displayTheme = localStorage.getItem("displayTheme");
const themeBtnToggle = document.querySelector(".lightdark-toggle");

function enableLightMode() {
  document.body.classList.add("light-mode");
  localStorage.setItem("displayTheme", "enabled");
}

function disableLightMode() {
  document.body.classList.remove("light-mode");
  localStorage.setItem("displayTheme", "disabled");
}

function saveDisplayTheme() {
  localStorage.setItem("displayTheme", displayTheme);
}

window.addEventListener("beforeunload", saveDisplayTheme);

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
