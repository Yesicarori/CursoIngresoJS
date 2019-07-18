function mostrar()
{

    var numero = parseInt(prompt("Ingresar numero"));
    var pares= 0;
    var par;

    for( var conteo = 1; conteo <= numero; conteo ++ )
    {
      // var par = conteo % 2;
       if (conteo%2== 0){
           pares ++;
       }
    }

    console.log("Pares encontrados: " + pares);





}//FIN DE LA FUNCIÓN