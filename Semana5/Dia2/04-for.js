/**
 * for(contador; condicional; actualización:contador){
 *      codigo que se va a repetir
 * }
 */
// i++
// i = i + 1;




/*
for(let i = 0; i <= 10; i = i + 1){
    console.log(`El contador es:${i}`);
}

console.log("Yo estoy al final!");

let ropa = ["Bufanda","Camisa","Guantes","Jeans"]

//Length = Longitud, es la cant items en un arreglo
for (let i= 0; i < ropa.length; i++) {
    console.log(ropa[i]);
}
*/



let carta = ["ceviche","pollo a la brasa","costillar","adobo", "caldo de gallina"];

let eleccion = +prompt("0. Ceviche, 1. pollo, 2. costillar; 3. adobo, 4. caldo de gallina");

for(let i = 0; i < carta.length; i++){
    if(eleccion == i){
        console.log(`Ud. ha elegido: ${carta[i]}`);
    }
}

