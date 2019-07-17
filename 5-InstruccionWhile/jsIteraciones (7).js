function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
while(respuesta == "si"){
		numero = parseInt(prompt("Ingresar un numero"));
		acumulador += numero;
		contador ++;
		respuesta = prompt("Desea ingresar otro numero? si / no")

}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN