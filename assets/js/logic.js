// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const page = document.querySelector(".page");
const aside = document.querySelector(".aside");

let mode = "light";

toggle.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    page.setAttribute("class", "dark");
    document.documentElement.style.setProperty("--circle-color", "#000");
  } else {
    mode = "light";
    page.setAttribute("class", "light");
    document.documentElement.style.setProperty("--circle-color", "#ffb100");
  }
  localStorage.setItem("mode", mode);
});

// TODO: Create functions to read and write from local storage
