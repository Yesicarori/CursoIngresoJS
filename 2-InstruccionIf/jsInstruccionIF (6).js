function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);

if(edad>=18)
{
    alert("mayor de edad");
}else if(edad>=13 && edad<=17 )
{
    alert("es adolescente");
}else if(edad<13)
{
    alert("es un niño");
}

}//FIN DE LA FUNCIÓN