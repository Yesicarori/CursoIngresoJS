function mostrar()
{

var numeroingresado = parseInt(prompt("Ingresar numero"));
var cantidaddivisores= 0;
var conteo;

for(conteo=1; conteo <= numeroingresado; conteo ++){
    if(numeroingresado%conteo==0){
        cantidaddivisores ++;
        console.log(conteo +", ");

    }


    
}
console.log("cantidad divisores" + cantidaddivisores);
}//FIN DE LA FUNCIÓN