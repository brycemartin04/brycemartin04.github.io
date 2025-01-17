
// JavaScript to handle scroll or click animations
const intro = document.getElementById('intro');
const mainContent = document.getElementById('main-content');
const greeting = document.getElementById('greeting');
const greeting2 = document.getElementById('greeting2');
const name = document.getElementById('name')

function transitionContent() {
    // Add the "scrolled" class to the intro
    intro.classList.add('shrink');
    greeting.classList.add('fade-out');
    greeting2.classList.add('fade-out');
    
    // Show main content
    mainContent.style.transform = 'translateY(-100vh)';
}

// Scroll or click event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    transitionContent();
    }
});

intro.addEventListener('click', () => {
    transitionContent();
});