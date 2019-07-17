function mostrar()
{

	var max ;
	var min ;

	// declarar variables


	do {
		
		var numero = parseInt(prompt("Ingresar numero"));

		var respuesta = prompt("Desea ingresar otro número? si / no");

		if (numero > max){
			max = numero;
		} 
		if (numero < min){
			min = numero; 
		}

		
	}	while(respuesta == "si")

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;



}//FIN DE LA FUNCIÓN