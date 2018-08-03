'use strict'

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales.
 */

 //Ingreso de datos
 var n1= parseInt(prompt("Ingrese el número 1 ",0)); //Recordando que esto lo que guarda es un string debemos transfomar.
 var n2= parseInt(prompt("Ingrese el número 2 ",0));

 //Para comprobar sus valores los mostramos en consola
 console.log(n1,n2);

/*
// PRIMERA FORMA
if(n1>n2){
    //console.log("El numero 1 ("+n1+") es mayor");
    //console.log("El numero 2 ("+n2+") es menor");
    alert("EL NUMERO MAYOR ES: "+n1);
    alert("EL NUMERO MENOR ES: "+n2);
}else if(n1<n2){
    //console.log("El numero 2 ("+n2+") es mayor");
    //console.log("El numero 1 ("+n1+") es menor");
    alert("EL NUMERO MAYOR ES: "+n2);
    alert("EL NUMERO MENOR ES: "+n1);
}else if(n1 == n2){
    //console.log("El numero 1 ("+n1+") y el numero 2 ("+n2+") son iguales.");
    alert("LOS NUMEROS SON IGUALES");
}else{
    alert("INTRODUZCA NUMEROS CORRECTOS");
}*/

// SEGUNDA FORMA
if (n1==n2) {
    alert("LOS NUMEROS SON IGUALES");
} else if (n1>n2) {
    alert("EL NUMERO MAYOR ES: "+n1);
    alert("EL NUMERO MENOR ES: "+n2);
} else if (n2>n1) {
    alert("EL NUMERO MAYOR ES: "+n2);
    alert("EL NUMERO MENOR ES: "+n1);
}else{
    alert("INTRODUZCA NUMEROS CORRECTOS");
}


