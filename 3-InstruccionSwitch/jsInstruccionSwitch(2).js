function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);


	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace Frio");
		break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("¨Falta para el invierno");
		break;
		default:
		alert (" Ya pasamos el frio, ahora calor!!! ");
		break;
		
	}
}//FIN DE LA FUNCIÓN