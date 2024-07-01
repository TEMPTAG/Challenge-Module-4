// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const header = document.querySelector(".header");
const circle = document.querySelector(".circle");

let mode = "light";

toggle.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    header.setAttribute("class", "dark");
  } else {
    mode = "light";
    header.setAttribute("class", "light");
  }
  localStorage.setItem("mode", mode);
});

// TODO: Create functions to read and write from local storage
