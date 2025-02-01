const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function updateCarousel() {
    const imageWidth = images[0].clientWidth; // Az első kép szélessége
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Váltás az aktuális index alapján
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Ha az első képnél vagyunk, az utolsóra ugrik
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Ha az utolsó képnél vagyunk, az elsőre ugrik
    }
    updateCarousel();
});
