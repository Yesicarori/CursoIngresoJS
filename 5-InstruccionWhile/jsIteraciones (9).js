function mostrar()
{

	var contador=0;
	var max ;
	var min ;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!="no")
	{
		
		var numero = parseInt(prompt("Ingresar numero"));

		respuesta = prompt("Desea ingresar otro número? si / no");

		if (numero > max){
			max = numero;
		} 
		if (numero < min){
			min = numero; 
		}

		
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;



}//FIN DE LA FUNCIÓN