function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var sumapositivos = 0;
	var sumanegativos = 0;
	var cantidadpositivos;
	var cantidadnegativos;
	var cantidadceros;
	var numerospares;
	var promediopositivos;
	var promedionegativos;
	var difpositivosnegativos;

	while(respuesta!="no")
	{
		var numeroingresado = parseInt(prompt("Ingresar numero"));
		respuesta = prompt ("Desea ingresar otro numero? si / no");

		if(numeroingresado > 0){
			cantidadpositivos ++;
			sumapositivos += numeroingresado;
		} 
		if(numeroingresado < 0){
			cantidadnegativos ++;
			sumanegativos += numeroingresado;
		}
		if(numeroingresado == 0){
			cantidadceros ++;
		}

		
	
	}




}//FIN DE LA FUNCIÓN