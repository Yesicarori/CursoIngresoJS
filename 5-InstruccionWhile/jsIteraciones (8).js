function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
while (respuesta == "si"){
	var numero = parseInt(prompt("Ingrese numero"));

	respuesta = prompt ("Ingresar otro numero? si / no");

	if(numero > 0 )
	{
		positivo += numero;
	}else{
		negativo *= numero
	}

}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN