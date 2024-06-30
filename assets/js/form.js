// TODO: Create a variable that selects the form element
const form = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
// const formData = new FormData(form);
// const username = formData.get("username");
// const title = formData.get("title");
// const content = formData.get("content");

const username = document.querySelector("#username");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const submitButton = document.querySelector("submit");

// let redirectURL = "blog.html";

// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const blog = {
    username: username.value.trim(),
    title: title.value.trim(),
    content: content.value.trim(),
  };

  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  redirectPage("./blog.html");
});
