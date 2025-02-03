// Gomb interakció
document.getElementById('explore-btn').addEventListener('click', function() {
    alert("A jövő Audi modelljeit felfedezheted hamarosan!");
});

// Háttér kör animáció gyorsítása
let circle = document.getElementById('circle');
let carImage = document.getElementById('car');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let scaleValue = 1 + scrollPosition / 1000;
    circle.style.transform = `scale(${scaleValue})`;
    carImage.style.transform = `rotate(${scrollPosition / 3}deg)`;
});
