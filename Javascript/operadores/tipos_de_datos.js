'use strict'

//Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
var operacion2 = numero1 - numero2;
var operacion3 = numero1 * numero2;
var operacion4 = numero1 / numero2;
var operacion5 = numero1 % numero2; // sacar el resto sirve para cuando un numero es par o impar.

alert("El resultado de la operación es: " + operacion);
alert("El resultado de la operación es: " + operacion2);
alert("El resultado de la operación es: " + operacion3);
alert("El resultado de la operación es: " + operacion4);
alert("El resultado de la operación es: " + operacion5);

//Tipos de Operadores
var numero_entero = 44;
var cadena_texto = "Hola que tal"; // las comillas doble tienen mas prioridad que las simples.
var verdadero_o_falso = true; //valor boolean puede ser true o false o 1 ó 0

//Funciones
var numero_falso = "33";
console.log(Number(numero_falso) + 7);
console.log(parseInt(numero_falso) + 7);
console.log(parseFloat(numero_falso) + 7.5);
console.log(String(numero_entero) + 7); // para convertir cualquier variable a String

//Operador de tipo de dato(como su nombre indica es para decir el tipo de dato que es)
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof numero_falso);
console.log(typeof verdadero_o_falso);

