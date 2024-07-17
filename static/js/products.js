function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

//document.addEventListener('click', function(event) {
//    const menu = document.getElementById('menu');
//    const menuIcon = document.querySelector('.menu-icon');
//    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
//        menu.style.display = 'none';
//    }
//});


// Prix

    const buyButtons = document.querySelectorAll('.product-card button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productName = event.target.parentNode.querySelector('h3').innerText;
            alert(`¡Has comprado ${productName}!`);
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Obtener todos los botones de comprar
        const botonesComprar = document.querySelectorAll('.product-card button');
    
        // Recorrer cada botón y añadir un evento de clic
        botonesComprar.forEach(function(boton) {
            boton.addEventListener('click', function() {
                // Obtener el nombre del producto
                const nombreProducto = boton.parentNode.querySelector('h3').innerText;
    
                // Simular una acción de compra (aquí puedes agregar tu lógica real)
                alert(`Has comprado ${nombreProducto}`);
    
                // Ejemplo de redirección a otra página después de la compra
                // window.location.href = '/gracias-por-comprar';
            });
        });
    });
