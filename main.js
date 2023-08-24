document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('open');
        } else {
            navLinks.classList.add('active');
            hamburger.classList.add('open');
        }
    });

    //This was added - to close the menu when a link is clicked
document.addEventListener('click', (evt) => {
    if (!navLinks.contains(evt.target) && !hamburger.contains(evt.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        }
    });
});