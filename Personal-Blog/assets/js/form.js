// TODO: Create a variable that selects the form element
const form = document.querySelector('#blogForm');
const submitButton = document.querySelector('button');
let usernameInput = document.querySelector('#username');
let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        document.querySelector('#error').textContent = 'Please complete the form.'
    } else {

        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

        const blogPost = {
            username: usernameInput.value,
            title: titleInput.value,
            content: contentInput.value
        }

        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPost));
        storeLocalStorage(blogPost);
        redirectPage('./blog.html');
        console.log("Form submitted");
    }
});
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

