function mostrar()
{

    var numero = parseInt(prompt("Ingresar numero"));
    var pares= 0;
    var conteo = 1;

    for( conteo ; conteo <= numero; conteo ++ )
    {
       var par = conteo % 2;
       if (par == 0){
           pares ++;
       }
    }

    console.log("Pares encontrados: " + pares);





}//FIN DE LA FUNCIÓN