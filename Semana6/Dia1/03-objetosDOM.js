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
miTitulo.innerHTML = "Hola soy de nuevo Titulo";

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
let series = {
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
};

//createElement("etiqueta") :"p", "ul", "h1", "td"
let lista = document.createElement("ul");

divContenido.appendChild(lista);
