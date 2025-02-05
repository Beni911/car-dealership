// Kapcsolatfelvételi űrlap küldése
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Üzeneted sikeresen elküldve!');
    document.getElementById('contact-form').reset();
});
// Dark mode toggle gomb kezelése
const darkModeToggle = document.getElementById('dark-mode-toggle');
const sections = document.querySelectorAll('.services, .offers, .contact, .hero'); // Minden szakasz, amit dark mode érinthet

// Ellenőrizzük, hogy a Dark Mode már be van-e kapcsolva (localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    sections.forEach(section => {
        section.classList.add('dark-mode');
    });
}

// Gomb esemény
darkModeToggle.addEventListener('click', () => {
    // Toggle Dark Mode
    document.body.classList.toggle('dark-mode');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });

    // A dark mode beállítása a localStorage-ban
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
