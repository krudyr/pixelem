const form = document.getElementById('loginForm');
const errorDisplay = document.getElementById('error');

// Itt állítsd be az admin jelszót
const adminPassword = "titkos123";

form.addEventListener('submit', function(e) {
e.preventDefault();
const password = document.getElementById('password').value;

if (password === adminPassword) {
// Sikeres belépés – átirányít admin oldalra
window.location.href = "admin.html";
} else {
errorDisplay.textContent = "Hibás jelszó!";
}
});
