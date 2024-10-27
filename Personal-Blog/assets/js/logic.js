let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function toggle() {
  const lightDarkSwitch = document.querySelector('#toggle');
  let mode = 'light';

  lightDarkSwitch.addEventListener('click', () => {
    const body = document.querySelector('body');
    const root = document.querySelector('html');
    const image = document.querySelector('#toggle img');
    if (mode === 'dark') {
      mode = 'light';
      body.setAttribute('class', 'light');
      image.setAttribute('src', 'images/sun.svg');
      root.style.setProperty('--circle-color', '#ffb100');
}
    else {
      mode = 'dark';
      body.setAttribute('class', 'dark');
      image.setAttribute('src', 'images/moon.svg');
      root.style.setProperty('--circle-color', 'red');
    }
  });
}

toggle();
// todo: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {

  const storeLocalStorageRead = JSON.parse(localStorage.getItem('blogPosts'));
  if (!storeLocalStorageRead) {
    return []
  }

  else if (!storeLocalStorageRead.length) {
    const mainEl = document.querySelector('#blog');
    const newEl = document.createElement('h2');
    newEl.textContent = "No blog posts yet...";
    mainEl.appendChild(newEl);
    return [];
  }

  else {
    return storeLocalStorageRead;
  }

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const blogPostsArray = readLocalStorage();
function storeLocalStorage(blogPost) {
  blogPostsArray.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPostsArray));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};