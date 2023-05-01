let displayTheme = localStorage.getItem("displayTheme");
const themeBtnToggle = document.querySelector(".toggle-button");


function enableLightMode() {
  document.body.classList.add("light-mode");
  localStorage.setItem("displayTheme", "enabled");
}
enableLightMode()


function disableLightMode(){
  document.body.classList.remove("light-mode");
  localStorage.setItem("displayTheme", null);
}
disableLightMode()

themeBtnToggle.addEventListener("click", () => {
  displayTheme = localStorage.getItem("displayTheme");
  if (displayTheme !== "enabled") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});
