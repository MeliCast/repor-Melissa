//obtener productos
const obtenerProductos = async () => {
    try{
        let rpta = await fetch("https://616b5eb316c3fa0017171684.mockapi.io/productos");
        let productos = await rpta.json();
        console.tabla(productos);
        return productos
    } catch (error) {
        console.log(error);
    }
};

let body = document.querySelector("body")

//me devuelve una promesa
obtenerProductos().then((misProductos) => {
    let htmlProductos = "";
    misProductos.forEach(prod) => {
        htmlProductos = htmlProductos +

        <tr>
            <td>${prod.nombre}</td>
            <td>${prod.precio}</td>
        </tr>
;
});
body.innerHTML = <table border="1">
                    ${htmlProductos}
                </table>;
})
.catch((err) => console.log(err));