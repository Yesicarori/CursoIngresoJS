function mostrar()
{

	/*var contador=0;
	var acumulador=0;
	var numero;

	while(contador < 5){
numero = parseInt( prompt ("Indicar numero") );
acumulador += numero;
contador ++;


	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; */

var contador = 0 ;
var acumulador = 0;
var numero;

do {
	numero = parseInt(prompt("Indicar numero"));
	acumulador += numero;
	contador ++;
}while (contador < 5);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN