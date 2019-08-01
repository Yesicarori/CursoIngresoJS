function mostrar()
{

var numerouno = parseInt(prompt("Ingresar primer número"));
var numerodos = parseInt(prompt("Ingresar segundo número"));

if( numerouno == numerodos){
    alert("Los números son " + numerouno + " y " + numerodos);
}
else if( numerouno > numerodos){
    var resultado = numerouno / numerodos;
    alert("El resultado es: " + resultado);
}else {
    var resultado = numerodos + numerodos;
    if(resultado < 50){
        alert("La suma es " + resultado + " y es menor a 50. ");
    }else{
        alert("La suma es" + resultado);
    }

}


}
