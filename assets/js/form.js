// TODO: Create a variable that selects the form element
const formElement = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (!username || !title || !content) {
    const error = document.querySelector("#error");
    error.textContent = "Please complete the form.";
    return;
  }

  const blog = {
    username,
    title,
    content,
  };

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  redirectPage("./blog.html");
}

function redirectPage(url) {
  window.location.href = url;
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener("submit", handleFormSubmit);
