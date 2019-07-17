/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{


var primernumero = parseInt(document.getElementById("numeroUno").value);
var segundonumero = parseInt(document.getElementById("numeroDos").value);

var total = primernumero + segundonumero;

alert(total); 

}

