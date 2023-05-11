const themeBtnToggle = document.querySelector(".lightdark-toggle");

themeBtnToggle.addEventListener("click", () => {
  switchMode();
});

function switchMode() {
  console.log(mode);
  if (mode == "light") {
    mode = "dark";
    localStorage.setItem("mode", "dark");
  } else {
    mode = "light";
    localStorage.setItem("mode", "light");
  }
  setMode();
}

function setMode() {
  console.log(mode);
  if (mode == "light") {
    document.querySelector(".lightmode");
  }
}

let mode = localStorage.getItem("mode");
if (!mode) {
  localStorage.setItem("mode", "light");
  mode = localStorage.getItem("mode");
}

setMode();
