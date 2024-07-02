// TODO: Create a variable that selects the main element
const main = document.querySelector("main");

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function appendElement(parent, element) {
  parent.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogs() {
  const emptyMessage = buildElement("h2", "No Blog Posts Yet...");
  appendElement(main, emptyMessage);
}

// TODO: Create a function that reads from local storage and returns the data
function readBlogs() {
  return JSON.parse(localStorage.getItem("blogs")) || [];
}

// TODO: Call the function to render the list of blog posts
function renderBlogs() {
  const blogs = readBlogs();

  if (blogs.length === 0) {
    noBlogs();
    return;
  }

  blogs.forEach((blog) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const blockquote = document.createElement("blockquote");
    const p = document.createElement("p");

    h2.textContent = blog.title;
    blockquote.textContent = blog.content;
    p.textContent = `Posted by: ${blog.username}`;

    appendElement(main, article);
    appendElement(article, h2);
    appendElement(article, blockquote);
    appendElement(article, p);
  });
  console.log(blogs);
}

renderBlogs();
