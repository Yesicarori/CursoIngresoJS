/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
    //debería poner parsefloat pq es plata y puede venir en centavos 
    var primerprecio = parseInt(document.getElementById("PrecioUno").value);
    var segundoprecio = parseInt(document.getElementById("PrecioDos").value);
    var tercerprecio = parseInt(document.getElementById("PrecioTres").value);
    var suma = primerprecio + segundoprecio + tercerprecio;
    alert("La suma es : " + suma);
}
function Promedio () 
{
    var primerprecio = parseInt(document.getElementById("PrecioUno").value);
    var segundoprecio = parseInt(document.getElementById("PrecioDos").value);
    var tercerprecio = parseInt(document.getElementById("PrecioTres").value);
    var suma = primerprecio + segundoprecio + tercerprecio;

    var promedio = suma / 3;
    alert ("El promedio es: " + promedio);
	
}
function PrecioFinal () 
{
    var primerprecio = parseInt(document.getElementById("PrecioUno").value);
    var segundoprecio = parseInt(document.getElementById("PrecioDos").value);
    var tercerprecio = parseInt(document.getElementById("PrecioTres").value);
    var suma = primerprecio + segundoprecio + tercerprecio;
    var Iva = suma*21/100;
    var preciofinal = suma + Iva;
    alert("El precio final es : " + preciofinal);
	
}