let a = 1;

let b = "4"; //string

let c = a + b;

console.log(typeof c); //me devuelve el tipo de dato
// console.log(a+b);
let nombre = "Melissa";

let apellido = "Castillo";

// console.log("Melissa " + apellido);

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

//TEMPLATE STRING 7 TEMPLATE LITERAL
//Backticks ``
// ${Acá adentro, ppodemos poner código de JS} 

let edad = 31;

let texto= `Hola soy ${nombre} ${apellido} y soy de Lima, tengo ${edad} años`;

console.log(texto);

//PROMPT, capturar datos, del usuario
// let cantidadMascotas = prompt("Cuántas mascotas tienes?");
let cantidadMascotas = prompt(`Hola ${nombre}, cuántas mascotas tienes?`);

console.log(`Mascotas : ${cantidadMascotas}`);

console.log(typeof cantidadMascotas); //todo lo ingresado en un prompt es string

let convertido = +cantidadMascotas; //ok
//parseInt, parse = interpretar, convierte a un entero
//int - solo enteros
//float - acepta decimales
// let convertido = parseInt(cantidadMascotas);
// let convertido = parseFloat(cantidadMascotas);

console.log(typeof convertido, convertido, "PATATA"); //OK