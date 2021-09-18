// console.log permite mostrar en la consola de JS lo que se nos antoje, es muy útil para saber que esta pasando internamente dentro de JS
console.log("Hola Mundo!");

//Variables
//Palabras reservadas, JS las usa
//los nombres de variables son sensibles a Mayus y Minus
var nombre = "Susan";

console.log(nombre); //Solamente para mostrar algo

//Tipos de gatos -Texto, Números, Booleanos,

//String - Texto - Cadena de texto
var nombre2 = "Melissa";

//Number - número
var edad = 30;

console.log(edad);

//Boolean - Booleano
var esDeNoche = true; //true ó false
console.log(esDeNoche);

//para ver el tipo de dato
console.log(typeof esDeNoche);

//para cambiar de valor a una variable, me basta con llamarla

edad = 25;

console.log(edad);

nombre = "Héctor";

console.log(nombre);

//cambiar de tipo de dato

var anio = 2021;

anio = "dos mil veintidos";

console.log(anio);

//JS es un lenguaje que no es tipado, no pre declaramos los tipos de datos

//VALORES RAROS EN VARIABLES

var nota; //undefined, no esta definido

console.log(nota);

var nulo = null; //Debería haber algo, pero no esta

console.log(nulo);

//Not a Number = NaN
var rareza = 100 / "cebollas";

console.log(rareza);

//Infinito
var infinito = 100 / 0;

console.log(infinito);

console.log(typeof infinito);









