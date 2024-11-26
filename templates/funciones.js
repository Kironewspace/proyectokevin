let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(slideIndex) {
    const slides = document.querySelector('.slides');
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function autoSlide() {
    showSlide(currentSlide + 1);
}

setInterval(autoSlide, 3000);

showSlide(currentSlide);


const comprarBotones = document.querySelectorAll('.comprar');
comprarBotones.forEach(boton => {
    boton.addEventListener('click', () => {
        const cartCount = document.getElementById('cart-count');
        const count = parseInt(cartCount.textContent) + 1;
        cartCount.textContent = count;

        const cartItems = document.getElementById('cart-items');
        const item = document.createElement('li');
        item.textContent = boton.parentElement.querySelector('h3').textContent;
        cartItems.appendChild(item);

        document.getElementById('empty-cart').style.display = 'none';
    });
});


function vaciarCarrito() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 
    document.getElementById('cart-count').textContent = '0'; 
    document.getElementById('empty-cart').style.display = 'block'; 
}


const cartIcon = document.getElementById('cart-icon');
const cartDropdown = document.getElementById('cart-dropdown');


cartIcon.addEventListener('click', () => {
    cartDropdown.classList.toggle('active');
});


function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown');

dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});
