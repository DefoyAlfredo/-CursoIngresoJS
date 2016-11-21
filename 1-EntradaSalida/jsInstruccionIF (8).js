function Mostrar()
{
//tomo la edad  
var edad;
var estado;
edad=document.getElementById('edad'). value;

estado=document.getElementById('estadoCivil'). value;

edad=parseInt(edad);

if (edad < 18 && estado != "soltero")
{	}
		if (edad >=18 && estado == "soltero")
		{
		 alert("Es soltero y no es menor.");
		}
		
	


}//FIN DE LA FUNCIÓN