document.addEventListener('DOMContentLoaded', () => {

    const prevButton1 = document.querySelector('.carousel-container .prev');
    const nextButton1 = document.querySelector('.carousel-container .next');
    const carousel1 = document.querySelector('.carousel');
    const images1 = document.querySelectorAll('.carousel img');
    let currentIndex1 = 0;


    const prevButton2 = document.querySelector('.carousel-container2 .prev');
    const nextButton2 = document.querySelector('.carousel-container2 .next');
    const carousel2 = document.querySelector('.carousel2');
    const images2 = document.querySelectorAll('.carousel2 img');
    let currentIndex2 = 0;


    function updateCarousel(carousel, images, currentIndex) {
        const imageWidth = images[0].clientWidth;
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }


    prevButton1.addEventListener('click', () => {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = images1.length - 1;
        }
        updateCarousel(carousel1, images1, currentIndex1);
    });

    nextButton1.addEventListener('click', () => {
        if (currentIndex1 < images1.length - 1) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateCarousel(carousel1, images1, currentIndex1);
    });


    prevButton2.addEventListener('click', () => {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = images2.length - 1;
        }
        updateCarousel(carousel2, images2, currentIndex2);
    });

    nextButton2.addEventListener('click', () => {
        if (currentIndex2 < images2.length - 1) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateCarousel(carousel2, images2, currentIndex2);
    });


    updateCarousel(carousel1, images1, currentIndex1);
    updateCarousel(carousel2, images2, currentIndex2);
});
document.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            image.classList.add('visible');
        }
    });
});
