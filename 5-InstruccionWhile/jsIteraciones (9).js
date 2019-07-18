function mostrar()
{

	var max ;
	var min ;
	var flag = 0;

	// declarar variables


	do {
		
		var numero = parseInt(prompt("Ingresar numero"));

		var respuesta = prompt("Desea ingresar otro número? si / no");

		if (numero > max || flag==0){
			max = numero;
		} 
		if (numero < min || flag==0){
			min = numero; 
			flag = 1;
		}

		
	}	while(respuesta == "si")

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;



}//FIN DE LA FUNCIÓN