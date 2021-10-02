// window.console.log("Hola");

//Info del navegar
console.log(`Info Navegador: ${window.navigator.userAgent}`);

//Cuál es mi url
console.log(`URL: ${window.location}`);

navigator.geolocation.getCurrentPosition(function (ubicacion) {
    console.log(ubicacion);
});
//Javascript a travez del objeto window
//Window = pestaña del navegador

console.log(window.document);

//estoy capturando un elemento
let miTitulo = document.querySelector("h1");

console.log(miTitulo);

//innerHTML, es el contenido HTML de un elemento
miTitulo.innerHTML = "Hola soy un nuevo Titulado";

//EL HTML DENTRO DE LA ETQIUETA
console.log(miTitulo.innerHTML);

//obtener un elemento
let miCaja = document.getElementById("caja");

console.log(miCaja);

//innerHTML, representa el contenido HTML de un elemento
miCaja.innerHTML = "<h2>Titulo Caja</h2>";


//background-color = backgroundColor
miCaja.style.backgroundColor = "purple";
miCaja.style.color = "white";

let misItems = document.getElementsByClassName("lista_item");

console.log(misItems);

//Array.from(htmlCollection), crea un arreglo
let arregloItems = Array.from(misItems);

console.log(arregloItems);

//anotación importante acerca de forEach, map, filter, find
//forEach(function(item, indice_item){})
arregloItems.forEach(function(item, indice, conjunto){
    item.style.backgroundColor = "skyblue";
    item.innerHTML = `Patata ${indice}`;
    console.log("mostrando el arreglo", conjunto);
});

//obtener element de diferentes maneras
//los querySelector y querySelectorAll funcionan de la misma manera que los selectores en css
let miTexto = document.querySelector("#texto");

console.log(miTexto);

//querySelectorAll me da un NodelList
let boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach(function(bx){
    bx.innerHTML = `<p>Soy un párrafo</p>`;
});

console.log(boxes[0].innerHTML);

//crear elementos
let series = [
    "Squid Game",
    "Pasión de Gavilanes",
    "Dark",
    "Billions",
    "Got",
    "Suits",
    "Mr. Robot",
    "House of gragons",
    "Chernobyl",
    "Breaking Bad",
    "Lupin",
];

let divContenido = document.getElementById("contenido");

//createElement("etiqueta") :"p", "ul", "h1", "td"
let lista = document.createElement("ul");

//agregando ese elemento como hijo
//push a un elemento ya existente
divContenido.appendChild(lista);

let textoLI = "";
series.forEach(function (programaTv) {
    textoLI = textoLI + `<li>${programaTv}</li>`;
});

// console.log(textoLI);

lista.innerHTML = textoLI;

let imagen = document.createElement("img")

divContenido.appendChild(imagen);

//setAttribute("nombre_attr","valor_attr")
imagen.setAttribute("src","https://i.picsum.photos/id/76/200/300.jpg?hmac=SWpe2KMM2qFiQ8C8WHIZilaJb7KVkgOVVJPTbasGyUU");

//clases de CSS
//a un elemento le podemos aplicar varias clases
//add("nombreclase")
lista.classList.add("resaltado");
lista.classList.add("redondeado");
// lista.classList.add("verdecito");
lista.classList.remove("resaltado");


