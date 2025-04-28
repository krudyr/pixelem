document.addEventListener('DOMContentLoaded', () => {
const remainingCount = document.getElementById('remaining-count');
function updateRemaining() {
const total = 32 * 32;
const reserved = Object.keys(savedPixels).length;
remainingCount.textContent = total - reserved;
}

// az oldal betöltésekor frissítjük
updateRemaining();  
const pixels = document.querySelectorAll('.pixel:not(.taken)');
const form = document.getElementById('buy-form');
const linkInput = form.querySelector('input[type="url"]:first-of-type');
const imageInput = form.querySelector('input[type="url"]:nth-of-type(2)');

let selectedPixel = null; // Tároljuk melyik pixel van kiválasztva

pixels.forEach(pixel => {
pixel.addEventListener('click', () => {
// Ha már volt korábban kiválasztott pixel, távolítsuk el a highlight-ot
if (selectedPixel) {
selectedPixel.classList.remove('selected');
}

// Jelöld ki az új pixelt
pixel.classList.add('selected');
selectedPixel = pixel;

// Görgetés és fókusz az űrlapra
form.scrollIntoView({ behavior: 'smooth' });
linkInput.focus();
});
});

form.addEventListener('submit', (e) => {
e.preventDefault();
updateRemaining('Blokk foglalva!');
alert('Ez csak egy DEMO vásárlás! Az űrlap adatai: \nLink: ' + linkInput.value + '\nKép: ' + imageInput.value);
});
});
