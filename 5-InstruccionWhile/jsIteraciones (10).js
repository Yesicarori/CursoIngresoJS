function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var sumapositivos = 0;
	var sumanegativos = 0;

	var cantidadpositivos = 0;
	var cantidadnegativos = 0;
	var cantidadceros = 0;

	var numerospares = 0;

	var promediopositivos;
	var promedionegativos;

	




	do {
		var numeroingresado = parseInt(prompt("Ingresar numero"));
		respuesta = prompt ("Desea ingresar otro numero? si / no");

		if(numeroingresado >= 0){
			cantidadpositivos ++;
			sumapositivos += numeroingresado;
			promediopositivos = sumapositivos / cantidadpositivos;
		} 
		if(numeroingresado < 0){
			cantidadnegativos ++;
			sumanegativos += numeroingresado;
			promedionegativos = sumanegativos / cantidadnegativos;
		}
		if(numeroingresado == 0){
			cantidadceros ++;
		}
		if (numeroingresado%2==0){
			numerospares++;
		}
		var diferenciapositivosnegativos = sumapositivos - sumanegativos;


		
	
	}while(respuesta!="no")

console.log("Suma de negativos: " + sumanegativos +", suma de positivos: " + sumapositivos + 
" Cantidad de positivos: " + cantidadpositivos + " Cantidad de negativos: " + cantidadnegativos +
" Cantidad de 0's: " + cantidadceros + " Cantidad de numeros pares: " + numerospares +
" Promedio positivos: " + promediopositivos + " Promedio negativos: " + promedionegativos + 
" Diferencia positivos y negativos: "+ diferenciapositivosnegativos)


}//FIN DE LA FUNCIÓN