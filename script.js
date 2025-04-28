document.addEventListener('DOMContentLoaded', () => {
const remainingCount = document.getElementById('remaining-count');
function updateRemaining() {
const total = 32 * 32;
const reserved = Object.keys(savedPixels).length;
remainingCount.textContent = total - reserved;
}

// az oldal betöltésekor frissítjük
updateRemaining();  
const progressBar = document.getElementById('progress-bar');

function updateRemaining() {
const total = 32 * 32;
const reserved = Object.keys(savedPixels).length;
const free = total - reserved;
const percent = (free / total) * 100;

remainingCount.textContent = free;
progressBar.style.width = `${percent}%`;

if (free <= 10) {
progressBar.style.backgroundColor = 'red';
} else if (free <= 50) {
progressBar.style.backgroundColor = 'orange';
} else {
progressBar.style.backgroundColor = '#c69870'; // eredeti szín
}
}
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
const progressBar = document.getElementById('progress-bar');

function updateRemaining() {
const total = 32 * 32;
const reserved = Object.keys(savedPixels).length;
const free = total - reserved;
const percent = (free / total) * 100;

remainingCount.textContent = free;
progressBar.style.width = `${percent}%`;

if (free <= 10) {
progressBar.style.backgroundColor = 'red';
} else if (free <= 50) {
progressBar.style.backgroundColor = 'orange';
} else {
progressBar.style.backgroundColor = '#c69870'; // eredeti szín
}

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
function openPopup(content) {
document.getElementById('popup-content').innerHTML = content;
document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
document.getElementById('popup').style.display = 'none';
}
