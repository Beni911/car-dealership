function showDetails(model) {
    const detailsSection = document.getElementById('details');
    const detailsText = document.getElementById('detailsText');

    if (model === 'audiA4') {
        detailsText.innerHTML = "Az Audi A4 aktuális akciója 50 000 Ft kedvezményt kínál minden új vásárlónak! Az akció 2025. február 28-ig érvényes, ne hagyja ki!";
    } else if (model === 'audiA6') {
        detailsText.innerHTML = "Az Audi A6 akciós áron kapható, 100 000 Ft kedvezménnyel! Az ajánlat a teljes Audi A6 modellválasztékra vonatkozik, és 2025. február 28-ig érvényes.";
    }

    detailsSection.style.display = 'block';
}