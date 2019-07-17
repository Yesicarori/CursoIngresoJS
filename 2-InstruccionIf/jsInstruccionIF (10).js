function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota = Math.floor(Math.random()*10) + 1;

	
	if(nota == 9 || nota == 10){
		alert(nota + " EXCELENTE");
		
	}else if(nota >= 4 && nota < 9){
		alert(nota + " APROBADO");
	}else{ alert(nota +" Vamos, la próxima se puede");
		
	
	}	
	//FIN DE LA FUNCIÓN
}



