// TODO: Create a variable that selects the form element
const username = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');
const errorElement = document.getElementById('error');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitPost() {
    const blogPost = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value
    };

    if (!usernameInput.value.length || !titleInput.value.length || !contentInput.value.length) {
        const error = 'Please complete the form.';
        submitMessage.textContent = error;
        return;
    }  else {
        const success = 'Success! Your post has been submitted';
        submitMessage.textContent = success;
        redirectPage('blog.html');
    }
    storeLocalStorage(blogPost);

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    submitPost();
});

    //==================================================================
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#search-criteria').value;
    if (!name) {
      const error = document.querySelector('#error');
      error.textContent = 'There is no input';
      return;
    }
    storeLocalStorage({ name });
    redirectPage('blog.html');
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const errorElement = document.getElementById("error");
  const submit = document.getElementById("submit")


  form.addEventListener("submit", function(event) {
    if (
        username.value.trim() === "" ||
        title.value.trim() === "" ||
        content.value.trim() === ""
    )   {
        event.preventDefault();
        errorElement.textContent = "All fields must be filled out.";  //or innerText not textContent
    }   else {
        storeLocalStorage();
        event.preventDefault();
        const redirectPage = function (url) {
            redirectURL = url;
            location.assign(url);
    };  
        redirectPage("https://web.us.edusercontent.com/dcr4nlo4qnt5q5ncms0ad9l5cs/blog.html");
            };   
    });
});

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const usernameValue = username.value;
      const titleValue = title.value;
      const contentValue = content.value;
      if (usernameValue === "" || titleValue === "" || contentValue === "") {
        errorElement.innerText = "Please fill out all fields";
      } else {
        storeLocalStorage({ username: usernameValue, title: titleValue, content: contentValue });
        redirectPage("blog.html");
      }
    }