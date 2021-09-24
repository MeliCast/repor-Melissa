//1. Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado debería ser un console.log, resumiendo los datos del usuario.

let nombres = prompt("Cuál es tu nombre?");

let apellidos = prompt("Cuál es tu apellido?");

let edad = prompt("Cuál es tu edad?");

// console.log(`Bienvenid@: ${nombres} ${apellidos} de ${edad} años de edad`);

//alert, es una ventana con un mensaje
alert(`Bienvenid@: ${nombres} ${apellidos} de ${edad} años de edad`);

//2.Programe un algoritmo que calcule el área de un triángulo, considera las variables necesarias y muestre el resultado en la consola.
// a) Qué datos necesito???????
//rpta: la base y la altura
// b) Cómo puedo obtener esos datos?????????
//prompt (declarando variables)
// c) Esos datos están en la forma que necesito?????????


//manera 1 de convertir a número, poner + delante del prompt
// let base = +prompt("Cual es la base del triángulo?");
// let altura = +prompt("Cuál es a altura del triángulo?");

// console.log(typeof altura);
// let resultado = (base * altura) / 2;

//manera 2
let base = prompt("Cual es la base del triángulo?");
let altura = prompt("Cuál es a altura del triángulo?");

//convirtiendo de texto a número
let baseNumero = parseFloat(base);
let alturaNumero = parseFloat(altura);

let resultado = (baseNumero * alturaNumero) / 2;

console.log(resultado);

//3. preguntar al usuario por dos números y mostrar el RESIDUO de la división

let numero1 = prompt("Indique el primer número");

let numero2 = prompt("Indique el segundo número");
console.log(`El residuo de los numeros es : ${numero1 % numero2}`);
