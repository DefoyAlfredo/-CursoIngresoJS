function Mostrar()
{
//tomo la edad  

var valor;
valor=document.getElementById('edad').value;
if (valor <= 17 && valor >=13)
	{alert("Usted es Adolecente");}
			else if (valor >=18)
				{alert("Usted es Adulto");}
			else
				{alert("Usted es un niño");}
			
			


}//FIN DE LA FUNCIÓN