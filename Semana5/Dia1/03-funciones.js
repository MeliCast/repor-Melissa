
let constante = 2;


function calcularAreaTriangulo(base, altura){
    //ponemos el código que se va a ejecutar
    //cuando invoquemos7llamemos7ejecutemos
    //esta función
    let area = base * altura / constante;

    // a) indica que va a devolver mi función
    // b) termina la ejecución de mi función
    return area;
}

console.log(constante);

let resultado = calcularAreaTriangulo(50, 15);

let resultado2 = calcularAreaTriangulo(100, 25);

console.log(resultado);

console.log(resultado2);

console.log(calcularAreaTriangulo(10, 4));





// //ámbito global = todo el documento
// let constante = 2; ok
// function calcularAreaTriangulo(base, altura) {  ok
//     //ámbito local = solamente dentro de esta función
//     let mivariable = 1000;  ok
//     //ponemos el código que se va a ejecutar
//     //cuando invoquemos/llamemos/ejecutemos
//     //esta función
//     let area = (base * altura) / constante;  ok
//     //a) indica que va a devolver mi función
//     //b) termina la ejecución de mi función
//     console.log("mi variable", mivariable);  ok
//     return area;  ok
// }
// console.log(constante);  ok
// calcularAreaTriangulo(1, 2);  ok
// // console.log(area);
// // let resultado = calcularAreaTriangulo(50, 15);
// // let resultado2 = calcularAreaTriangulo(100, 25);
// // console.log(resultado);
// // console.log(resultado2);
// // console.log(calcularAreaTriangulo(10, 4));
