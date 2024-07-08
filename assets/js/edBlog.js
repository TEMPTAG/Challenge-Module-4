// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector("main");
const backButton = document.querySelector(".back");

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
  appendElement(mainElement, emptyMessage);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogs = readLocalStorage();

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

    appendElement(mainElement, article);
    appendElement(article, h2);
    appendElement(article, blockquote);
    appendElement(article, p);
  });
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
addEventListener("click", function (event) {
  event.preventDefault();
  redirectPage("index.html");
});
