const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if there's a saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
}

// Toggle dark mode
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
