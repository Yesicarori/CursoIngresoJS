function mostrar()
{
var respuesta;
var numeroingresado;
var letraingresada;
var cantimpares=0;
var cantpares=0;
var cantceros=0;
var promediopositivos;
var contadorpositivos = 0;
var sumapositivos = 0;
var sumanegativos = 0; 

do{
    numeroingresado = parseInt(prompt("Ingresar numero entre -100 y 100"));

    while(numeroingresado < -100 || numeroingresado > 100 ){
        numeroingresado = parseInt(prompt("Numero inválido, ingresar de nuevo"));
    }
    letraingresada = prompt("Ingresar letra");
    while (!isNaN(letraingresada)){
        letraingresada = prompt("Tiene que ser una letra.");

    }

    if(numeroingresado%2 == 0){
        cantpares ++;
    }else{
        cantimpares ++;
    }

    if(numeroingresado < 0){
        sumanegativos += numeroingresado;
    }else if (numeroingresado>0){
        contadorpositivos ++;
        sumapositivos += numeroingresado;
        promediopositivos = sumapositivos /contadorpositivos;
    }else{
        cantceros ++;
    }


    








}
while( respuesta = S);

}
