function mostrar()
{

 var alumnos = 0;
 var totalnotas;
 var contador;
 var promedio;

for (alumnos; alumnos<=5 ; alumnos++){

    // debería ingresarlo con do while pq nose la cantida de notas?
    var nota = parseInt(prompt("Ingresar nota entre 0 y 10."));
    while(isNaN(nota) || nota<0 || nota>10 ){
        nota= parseInt(prompt("Ingrese una nota válida"))
    }
    
    var sexo = prompt("Ingresar sexo");
        while (sexo != "m" || sexo != "f" ){
            sexo = prompt("Ingresar un sexo válido");
        } 
     totalnotas += nota;
     contador ++ ;
     promedio;



}

}
