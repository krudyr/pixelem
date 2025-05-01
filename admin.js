// Példavásárlások (később szerverről töltheted)
let orders = [
{ url: "https://pelda.hu", blocks: 20, approved: false },
{ url: "https://weboldal.com", blocks: 35, approved: false }
];

function renderOrders() {
const tbody = document.querySelector("#orders tbody");
tbody.innerHTML = "";

orders.forEach((order, index) => {
const tr = document.createElement("tr");
tr.innerHTML = `
<td>${index + 1}</td>
<td><a href="${order.url}" target="_blank">${order.url}</a></td>
<td>${order.blocks}</td>
<td>
${order.approved
? "Jóváhagyva"
: `<button onclick="approveOrder(${index})">Jóváhagyás</button>`}
</td>
`;
tbody.appendChild(tr);
});

const totalSold = orders.reduce((sum, o) => sum + (o.approved ? o.blocks : 0), 0);
const totalRevenue = totalSold * 15000;
document.getElementById("totalSold").textContent = totalSold;
document.getElementById("totalRevenue").textContent = totalRevenue;
}

function approveOrder(index) {
orders[index].approved = true;
renderOrders();
}

renderOrders();
