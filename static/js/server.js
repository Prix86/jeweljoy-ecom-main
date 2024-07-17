const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const products = require('./products.json');

app.use(express.json());

// Ruta para obtener los productos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Ruta para agregar un producto
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    io.emit('productAdded', newProduct); // Emitir evento de producto agregado
    res.status(201).json(newProduct);
});

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
