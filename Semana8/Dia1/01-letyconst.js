for(var i = 0: i < 5; i++) {
    console.log(i);
}
console.log(`iterador ${i}`);

for(let i = 0: j < 5; j++) {
    console.log(j);
}
console.log(`iterador ${j}`);  //esto da error

//RESUMEN NO USEN VAR, AL MENOS UN LET

//Cuando son const que tienen valores, se tiene la convencióm de poner el nombre en mayúsculas
const PI = 3.1415;

// PI = 40; //no podemos cambiar una variable creada con const

console.log("Mostrando Pi", PI);