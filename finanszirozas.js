function showFinancingDetails(type) {
    const detailsSection = document.getElementById('financing-details');
    const financingText = document.getElementById('financingText');

    if (type === 'autoHitel') {
        financingText.innerHTML = "Az autóhitel lehetőséget kínál, hogy könnyedén az Ön tulajdonába kerüljön az Audi autója. Az ajánlat részletei: Kamat: 4.5%, Futamidő: 24–72 hónap.";
    } else if (type === 'lizing') {
        financingText.innerHTML = "Lízingeljen egy új Audi-t és élvezze a rugalmas futamidőt. Az ajánlat részletei: Kamat: 5.0%, Futamidő: 24–60 hónap, havi részletek az Ön kényelmére.";
    } else if (type === 'ballonLizing') {
        financingText.innerHTML = "A ballon lízing lehetősége lehetőséget biztosít arra, hogy a futamidő végén eldöntse, vásárolja meg, adja vissza, vagy válasszon új autót. Az ajánlat részletei: Kamat: 5.2%, Futamidő: 36–60 hónap.";
    }

    detailsSection.style.display = 'block';
}