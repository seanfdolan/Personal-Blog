// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleMode = function() {
  const body = document.body;
  const circle = document.getElementById('circle');

  // Check if the body has the 'dark-mode' class
  if (document.body.contains('dark-mode')) {
    // If it does, remove the class to switch to light mode
    body.classList.remove('dark-mode');
    circle.classList.remove('dark-mode');
    // Save the mode to local storage
    localStorage.setItem('mode', 'light');
  } else {
    // If it doesn't, add the class to switch to dark mode
    body.classList.add('dark-mode');
    circle.classList.add('dark-mode');
    // Save the mode to local storage
    localStorage.setItem('mode', 'dark');
  }
};

// Call the toggleMode function when the mode button is clicked
document.getElementById('mode-button').addEventListener('click', toggleMode);


$('#api-search').click(function(){
  const name = $('#search-criteria').val()
  if(!name){
    const el = document.querySelector('#error')
    console.log(el)
    el.innerText('Theres no input')
    console.log('theres no input')
  }
})

  //
$(mode-button).on('click', function(){}) 
  //

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function() {
  const data = localStorage.getItem('myData');
  return data ? JSON.parse(data) : [];
};

function readLocalStorage() {
  let storedBlogPostsArray = localStorage.getItem('blogPostsArray');
  if (storedBlogPostsArray !== null) {
    return JSON.parse(storedBlogPostsArray);
  } else {
    return [];
  }  

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function(object) {
  const data = readLocalStorage();
  data.push(object);
  localStorage.setItem('myData', JSON.stringify(data));
};

const blogPostsKey = "blogPosts";
let storedBlogPosts = localStorage.getItem(blogPostsKey);
let blogPostsArray = storedBlogPosts ? JSON.parse(storedBlogPosts) : [];

function storeLocalStorage() {
  const blogPostsKey = "blogPosts";
  let storedBlogPosts = localStorage.getItem(blogPostsKey);
  let blogPostsArray = storedBlogPosts ? JSON.parse(storedBlogPosts) : [];
  let newBlogPost = {
    username: username.value,
    title: title.value,
    content: content.value,
  };
  blogPostsArray.push(newBlogPost);
  localStorage.setItem(blogPostsKey, JSON.stringify(blogPostsArray));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
}
