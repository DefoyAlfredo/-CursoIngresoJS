function Mostrar()
{
//tomo la edad  
var laEdad;
var estado;
laEdad=document.getElementById('edad').value;

estado=document.getElementById('estadoCivil').value;


if (laEdad >18 && estado =="Soltero")
	{	
		alert("Es Soltero y no es menor");
	}
		 
		
	


}//FIN DE LA FUNCIÓN