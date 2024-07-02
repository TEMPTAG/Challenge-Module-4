// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const page = document.querySelector(".page");

// Mode variable defined, if undefined, set initial mode and save to local storage
let mode = readMode() || "light";

writeMode();

// Event listener to toggle the light/dark modes
toggle.addEventListener("click", function () {
  mode = mode === "light" ? "dark" : "light";
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
  document.documentElement.style.setProperty(
    "--circle-color",
    mode === "dark" ? "#000" : "#ffb100"
  );
}
