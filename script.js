
// JavaScript to handle scroll or click animations
const intro = document.getElementById('intro');
const introContent = document.getElementById('intro-content');
const mainContent = document.getElementById('main-content');
const name = document.getElementById('name')

function transitionContent() {
    // Add the "scrolled" class to the intro
    intro.classList.add('shrink');
    introContent.classList.add('shrink');
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