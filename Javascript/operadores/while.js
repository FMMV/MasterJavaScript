'use strict'

//Bucle while
var year = 2018;

//Con operador de incremento
while (year <= 2051) {
    //ejecuta esto
    console.log("Estamos en el año:" + year);

    //se controla con este operador de incremento sino se hace un blucle infinito.
    year++;
}

/*
// Con operador de decremento
while (year != 1991) {
    //ejecuta esto
    console.log("Estamos en el año:" + year);
    //El break corta la ejecución de un bucle.
    
    
    if(year == 2000){
        break;
    }

    //se controla con este operador de incremento sino se hace un blucle infinito.
    year--;
}*/

// Blucle DO while

// lo primero que hace es ejecutar el do y luego comprobar el while.
//var years = 21;
//var years = 30;

/*
do{
    alert("Solo cuando sea diferente a 20");
    years = 20;

}while(years !=20)*/

// A pesar de estar la condicion >25 se ejecutara 1 vez y luego no lo hara porque no cumple con la condicion
// el incremento solo lo realiza la primera vez sabiendo que el valor de years es 21 luego pasa a 22 pero no es
// mayor a 25
// Nos permite siempre ejecutar primero el bloque de codigo y luego evaluar.
/*
do{
    alert("Solo cuando sea mayor a 25");
    years--;

}while(years >25)*/
/*
do{
    alert("Solo cuando sea mayor a 25");
    years++;

}while(years >25)*/
