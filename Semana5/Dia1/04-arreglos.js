//para declarar areglos, necesitamos ponerlos entre []
//desde el primer elemento se cuenta desde 0, 1, 2 ...
//ese número se conoce como posicion, indice o index
let nombres = ["Masami", "Oscar", "Mauro", "Melissa", "Frank", "Julio"];

//si deseo referenciar un elemento necesito su posicion
//nombre_arreglo[#]
console.log(nombres[4]);

console.log(`Los nombres de mis alumn@s son ${nombres[0]}, ${nombres[1]}, ${nombres[2]}`);

console.log(nombres);

//Longitud=legth me dice la cantidad de elementos
console.log(nombres.length); //number

//En un arreglo puedo guardar cualquier cosa, es flexible
let cofre = ["gato", 100, true];

console.log(cofre);

//agregar ítems, al final de una arreglo
cofre.push("perrete", "pinguino", "jirafa");

console.log("cofre actualizado", cofre);

