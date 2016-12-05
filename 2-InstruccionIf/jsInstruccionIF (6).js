function Mostrar()
{
//tomo la edad  

var laEdad;
laEdad=document.getElementById('edad').value;
	if (laEdad > 17)
		{
			alert("Es mayor");

		}
			if(laEdad <12)
			{
			
				alert("en un niño");
			}

				if(laEdad>12 && laEdad<18)
					{
					
						alert("es adolecente");
					}


}//FIN DE LA FUNCIÓN

/* if(laEdad>17)
{
	//es mayor

}else if(laEdad<13)
{
	alert("es un niño");
}
else {

		alert("es adolecente");
	 }