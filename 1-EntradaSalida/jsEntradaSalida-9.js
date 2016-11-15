/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	//id="sueldo"
	//id="resultado"

		var sueldo;
		var aumento= 1.1;
		sueldo=document.getElementById('sueldo').value;
		sueldo=parseInt(sueldo);
		console.log(sueldo);
		var resultado=sueldo*aumento; 
		resultado=parseInt(resultado);
		document.getElementById('resultado').value= resultado;


	
}
