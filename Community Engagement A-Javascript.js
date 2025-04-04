// JavaScript to handle the scroll event and toggle the navbar state
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav'); // Select the navbar
    if (window.scrollY > 0) {  // Check if the user has scrolled down
        navbar.classList.add('scrolled'); // Add the 'scrolled' class to the navbar
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when at the top
    }
});