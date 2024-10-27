// TODO: Create a variable that selects the main element, and a variable that selects the back button element
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const backButton = document.querySelector('#back');
});
// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(element, text, className) {
    const newEl = document.createElement(element);
    newEl.textContent = text;
    newEl.classList.add(className);
    mainEl.appendChild(newEl);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    buildElement('h2', 'No blog posts available', 'no-posts');
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = readLocalStorage();
    if (blogPosts.length) {
        blogPosts.forEach(post => {
            buildElement('h2', post.title, 'post-title');
            buildElement('p', post.content, 'post-content');
        });
        
    } else {
        noPosts();
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

backBtn.addEventListener('click', () => {
    redirectPage('./index.html');
});

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
// ! Use the following function whenever you need to redirect to a different page
const redirectPage = function (url) {
    location.assign(url);
}
