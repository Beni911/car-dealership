document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Üzeneted sikeresen elküldve!');
    document.getElementById('contact-form').reset();
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const sections = document.querySelectorAll('.services, .offers, .contact, .hero');


if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    sections.forEach(section => {
        section.classList.add('dark-mode');
    });
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
