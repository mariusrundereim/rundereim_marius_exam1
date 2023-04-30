let displayTheme = localStorage.getItem("displayTheme");
const themeBtnToggle = document.querySelector(".toggle-button");

const enableLightMode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("displayTheme", "enabled");
};

const disableLightMode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("displayTheme", null);
};

themeBtnToggle.addEventListener("click", () => {
  displayTheme = localStorage.getItem("displayTheme");
  if (displayTheme !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
