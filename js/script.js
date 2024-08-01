// JavaScript for banner auto-slide
let currentSlide = 0;
const slides = document.querySelectorAll('.main-content-banner .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// JavaScript for form validation and notification
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    if (!name || !email || !interest) {
        alert('All fields are required.');
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    showNotification('Form successfully submitted!');
    return true;
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
