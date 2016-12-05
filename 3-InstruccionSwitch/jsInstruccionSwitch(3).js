function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
	alert("Este mes no tiene las de 29 dias");
	break;
	default:
	alert("Este mes tiene 30 o mas");
	break;

}
	


}//FIN DE LA FUNCIÓN