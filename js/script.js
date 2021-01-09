const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navLis = document.querySelectorAll('.navbar-links li');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  console.log('hello');
});

for (let navLi of navLis) {
  navLi.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
  });
}
