'use strict'

//Condicional IF
// Instrucciones que nos permiten comparar 2 o mas valores o una condicion concreta, en consecuencia haga algo.
// Si A es igual a B entonces haz algo

/*
var edad1 = 30;
var edad2 = 12;
//Si pasa esto
if (edad1 > edad2) {
    //Ejecuta esto
    console.log("Edad uno es mayor que la edad2");
}else{
    console.log("La edad uno es inferior");
}*/

/*Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/
var edad = 12;
var nombre = "Jose Perez";

if (edad >= 18) {
    //Es mayor de Edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavia eres Milenial");
    } else if (edad >= 70) {
        console.log("Es Anciano");
    } else {
        console.log("Ya no eres Milenial");
    }

} else {
    //Es menor de Edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/*Operadores lógicos
    AND (Y) : &&
    OR (O) : ||
    NEGACION: !
*/

//Negación
var year = 2028;
if (year != 2016) {
    console.log("El año no es 2016 realmente es: " + year);
}

//AND
if (year >= 2000 && year <= 2020 && year != 2018) {
    console.log("Estamos en la era Actual");
} else {
    console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
} else {
    console.log("Año no resgistrado");
}
