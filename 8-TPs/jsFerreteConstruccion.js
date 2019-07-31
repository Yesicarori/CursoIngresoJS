/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var alto = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var total = (alto+ancho)*2; 
    var totaldos = total*3
    alert ("Hay que comprar: " + totaldos );

}
function Circulo () 
{

    var radio = parseInt(document.getElementById("Radio").value);
    var perimetro = (2*3,14)* radio;
    var total = perimetro * 3;


    alert("Hay que comprar: " + total);

	
}
function Materiales () 
{
    var altura = parseInt(document.getElementById("Largo").value);
    var base = parseInt(document.getElementById("Ancho").value);
    var terreno = base * altura;
    var cemento = terreno * 2;
    var cal = terreno * 3;

    alert("Se necsitan " + cemento + " bolsas de cemento, y " + cal + "de cal");
	
}