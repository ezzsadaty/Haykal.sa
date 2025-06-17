document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const closeIcon = document.querySelector('.close-icon');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'inline-block';
        } else {
            hamburgerIcon.style.display = 'inline-block';
            closeIcon.style.display = 'none';
        }
    });
});