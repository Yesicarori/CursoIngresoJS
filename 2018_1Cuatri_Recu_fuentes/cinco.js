function mostrar()
{

    var dia = prompt("Ingresar día de la semana.");
       //dia = dia.toLowerCase();

    switch (dia){
        case "sabado":
        case "domingo":
            alert("Buen finde");
            break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("A trabajar");
            break;
        default:
            alert("Día no valido");

    }
}
