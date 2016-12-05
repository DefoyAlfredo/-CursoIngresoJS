function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var miRamdom=Math.floor((Math.random() *10 ) +1);
	console.log("nota del ramdom"+miRamdom);
	if (miRamdom ==9 || miRamdom== 10)
	{
		alert("Sacaste:"+miRamdom+"Exelente");
	}
		else
		{
			if(miRamdom >4)
				{
					alert("Sacaste:  " +miRamdom+" APROBASTE" );
				}

		
			else
			{
			alert("Sacaste: "+miRamdom+  "Vamos, la proxima se puede.");
			}
		}
}//FIN DE LA FUNCIÓN