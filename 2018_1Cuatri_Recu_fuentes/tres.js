function mostrar()
{

    var precio = parseFloat(prompt("Indicar precio"));
    var descuento = parseInt(prompt("Indicar porcentaje de descuento"));

    var descuentoprecio = (precio * descuento) / 100;
    var preciofinal = precio - descuentoprecio;

    document.getElementById("elPrecioFinal").value = preciofinal;

}
