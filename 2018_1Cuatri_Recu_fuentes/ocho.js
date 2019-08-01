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
var flag = 0;
var letramax;
var nummax;

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

    if (numeroingresado>nummax || flag==0){
        nummax = numeroingresado;
        letramax = letraingresada;
        flag = 1;
    }

        respuesta = prompt("Desea ingesar otro numero? S ó N");



}
while(respuesta == "S");
 document.write("Cantidad de numeros pares: " + cantpares + 
 " Cantidad de numeros impares: " + cantimpares + " Cantidad de ceros: " + cantceros + 
 " Promedio delos numeros positivos ingresados: " + promediopositivos +
" Suma de negativos: " + sumanegativos + " Numero y letra del maximo ingresado" + nummax + " " + letramax);
}
