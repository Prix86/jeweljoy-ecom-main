const socket = new WebSocket('ws://' + window.location.host + '/ws/shop/');

socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    const productMenu = document.getElementById('product-menu');
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="/media/${data.image}" alt="${data.name}" class="product-image">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <button>Comprar</button>
    `;
    productMenu.appendChild(productCard);
};
