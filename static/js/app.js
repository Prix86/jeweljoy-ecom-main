document.addEventListener('DOMContentLoaded', () => {
    const productMenu = document.getElementById('product-menu');

    // Cargar productos desde la API
    const loadProducts = async () => {
        const response = await fetch('/shop/products/');
        const products = await response.json();
        productMenu.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="/media/${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button>Comprar</button>
            `;
            productMenu.appendChild(productCard);
        });
    };

    loadProducts();
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}