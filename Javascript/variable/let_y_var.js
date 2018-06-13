'use strict'
//Prueba con let y var

//Prueba con var
var numero = 10;
console.log(numero); //valor 10

if (true) {
	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

//Prueba con let este solo actua dentro del bloque de llaves
var texto = "Francisco";
console.log(texto); // valor Francisco

if (true) {
	let texto = "Manuel";
	console.log(texto); // valor Manuel
}
console.log(texto); // valor Francisco
