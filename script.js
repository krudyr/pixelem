const grid = document.getElementById('pixelGrid');
const availableBlockCounter = document.getElementById('availableBlocks');
let availableBlocks = 2250;
let selectedBlocks = [];

for (let i = 0; i < 50 * 45; i++) {
const pixel = document.createElement('div');
pixel.classList.add('pixel');
pixel.dataset.index = i;
pixel.addEventListener('click', () => togglePixel(pixel));
grid.appendChild(pixel);
}

function togglePixel(pixel) {
const index = pixel.dataset.index;
if (pixel.classList.contains('selected')) {
pixel.classList.remove('selected');
selectedBlocks = selectedBlocks.filter(i => i !== index);
} else {
pixel.classList.add('selected');
selectedBlocks.push(index);
}
}

document.getElementById('adForm').addEventListener('submit', function(e) {
e.preventDefault();
if (selectedBlocks.length === 0) {
alert('Kérlek jelölj ki blokkokat!');
return;
}

const url = document.getElementById('url').value;
const logo = document.getElementById('logo').files[0];

if (!url || !logo) {
alert('Töltsd ki az összes mezőt!');
return;
}

selectedBlocks.forEach(index => {
const block = document.querySelector(`.pixel[data-index='${index}']`);
block.style.backgroundColor = '#B6A19E';
block.classList.remove('selected');
block.onclick = () => window.open(url, '_blank');
});

availableBlocks -= selectedBlocks.length;
availableBlockCounter.textContent = availableBlocks;
selectedBlocks = [];
document.getElementById('adForm').reset();
});
