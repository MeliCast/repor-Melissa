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
