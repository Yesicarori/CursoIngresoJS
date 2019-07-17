/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{
        var primernumero = parseInt(document.getElementById("numeroUno").value);
        var segundonumero = parseInt(document.getElementById("numeroDos").value);

        var totalsuma = primernumeropasado + segundonumeropasado;

        alert (totalsuma);
	
}

function restar()
{

    var primernumero = parseInt(document.getElementById("numeroUno").value);
    var segundonumero = parseInt(document.getElementById("numeroDos").value);

    var totalresta = primernumero - segundonumero;

    alert (totalresta);
	
}

function multiplicar()
{ 
    var primernumero = parseInt(document.getElementById("numeroUno").value);
    var segundonumero = parseInt(document.getElementById("numeroDos").value);

    var totalmultiplicacion = primernumero * segundonumero;

    alert (totalmultiplicacion);
	
}

function dividir()
{

    var primernumero = parseInt(document.getElementById("numeroUno").value);
    var segundonumero = parseInt(document.getElementById("numeroDos").value);

    var totaldividir = primernumero / segundonumero;

    alert (totaldividir);
    
}

