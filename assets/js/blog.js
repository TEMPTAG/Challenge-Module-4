// TODO: Create a variable that selects the main element
const main = document.querySelector("main");

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (element, text, className) {
  const el = document.createElement(element);
  el.textContent = text;
  el.className = className;
  main.appendChild(el);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const noBlogs = function () {
  buildElement("h3", "No blog posts yet...", "no-blogs");
};

// TODO: Create a function that reads from local storage and returns the data
const getBlogs = function () {
  return JSON.parse(localStorage.getItem("blogs")) || [];
};

// TODO: Call the function to render the list of blog posts
const renderBlogs = function () {
  const blogs = getBlogs();

  if (!blogs.length) {
    noBlogs();
    return;
  }

  blogs.forEach((blog) => {
    buildElement("h3", blog.title, "title");
    buildElement("p", `by ${blog.username}`, "username");
    buildElement("p", blog.content, "content");
  });
};
