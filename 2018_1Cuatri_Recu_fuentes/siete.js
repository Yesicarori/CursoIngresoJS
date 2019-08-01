function mostrar()
{

 var alumnos = 0;
 var totalnotas = 0;
 var promedio;
 var flag = 0;
var notamin;
var sexomin;
var contadorvarones = 0;


for (alumnos; alumnos<=5 ; alumnos++){

    var nota = parseInt(prompt("Ingresar nota entre 0 y 10."));
    while(isNaN(nota) || nota<0 || nota>10 ){
        nota= parseInt(prompt("Ingrese una nota válida"))
    }
    
    var sexo = prompt("Ingresar sexo");

        while (!isNaN(sexo) && sexo != "m" && sexo != "f" ){
            sexo = prompt("Ingresar un sexo válido");
        } 
        sexo = sexo.toLowerCase();


     totalnotas += nota;
     promedio = totalnotas / 5;
     promedio.toFixed(2);

        if(nota < notamin || flag == 0){
           notamin = nota;
           sexomin = sexo;
           flag = 1;
        }

        if (nota >= 6 && sexo== "m")
        {
            contadorvarones ++;
        }

    
}

document.write("Promedio de notas totales: " + promedio + "."); 
document.write(" La nota mas baja es " + notamin + " y su sexo es " + sexomin + "."); 
document.write(" La cantidad de varones aprobados " + contadorvarones + ".");

}
