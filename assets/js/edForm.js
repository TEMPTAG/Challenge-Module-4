// TODO: Create a variable that selects the form element
const form = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (username && title && content) {
    const blog = {
      username,
      title,
      content,
    };

    localStorage.setItem("blog", JSON.stringify(blog));

    redirectPage("blog.html");
  } else {
    const error = document.querySelector("#error");
    error.textContent = "Please complete the form.";
    return;
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener("submit", handleFormSubmit);
