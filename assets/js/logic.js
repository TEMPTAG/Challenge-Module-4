// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const page = document.querySelector(".page");

// Mode variable defined, if undefined, set initial mode and save to local storage
let mode = readMode();
if (!mode) {
  mode = "light";
  saveMode();
}
writeMode();

// Event listener to toggle the light/dark modes
toggle.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  saveMode();
  writeMode();
});

function saveMode() {
  localStorage.setItem("mode", mode);
}

// TODO: Create functions to read and write from local storage

function readMode() {
  return localStorage.getItem("mode");
}

function writeMode() {
  page.className = "page " + mode;
  if (mode === "dark") {
    document.documentElement.style.setProperty("--circle-color", "#000");
  } else {
    document.documentElement.style.setProperty("--circle-color", "#ffb100");
  }
}
