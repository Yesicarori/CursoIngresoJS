function mostrar()
{

var respuesta = "si";
var temppares = 0;
var pesomax;
var pesomin;
var productos0g;
var contador = 0;
var sumapesos=0;
var flag = 0;
var marcapesada;

    do {
    var marca = prompt("Ingresar marca del producto");
    var peso = parseInt(prompt("Ingresar peso entre 1 y 100"));

        while(peso < 0 || peso >=100 || isNaN(peso)){
        peso = parseInt(prompt("Valor incorrecto. Ingrese de nuevo."));
        }

    var temperatura = prompt("ingresar temperatura entre -30 y 30");
        
    //a)
        if(temperatura % 2 == 0){
            temppares ++;
        }

    //b) y f)
        if(peso>pesomax || flag==0)
        {
            pesomax = peso;
            marcapesada = marca;
        
        }

        if(peso<pesomin || flag == 0)
        {
            pesomin = peso;
            flag=1;
        }
    
    //c)
    if (temperatura < 0)
    { productos0g ++;}

    //d)
    sumapesos+= peso;
    contador ++;
    var promedio = sumapesos/contador;

        respuesta = prompt("Ingresar otro numero? si no");
        respuesta = respuesta.toLowerCase();

    
 


    }while(respuesta = "si")
}
document.write("Cantidad de temperaturas pares: " + temppares + 
" Marca del producto mas pesado: " + marcapesada + 
" Cantidad de productos que se conservan a menos de 0 grados: " +productos0g +
" Promedio del peso de todos los productos: " + promedio + 
"\n Peso max: " + pesomax + 
" Peso min: " + pesomin 
)