// main.js

// Toggle Menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Order Button Alert
const orderButtons = document.querySelectorAll('.btn');

orderButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Thank you for your order!');
    });
});
