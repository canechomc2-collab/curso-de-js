let precios = [30, 52, 35, 1, 12, -3];

let precioMasBarato = Math.min(...precios);
let precioMasCaro = Math.max(...precios);

console.log("Lista de precios:", precios);
console.log("El precio más barato es:", precioMasBarato);
console.log("El precio más caro es:", precioMasCaro);
