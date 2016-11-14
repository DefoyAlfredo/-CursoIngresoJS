/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	//id="FormIngreso"
	//id="elNombre"
	//error de escritura del promrt
	var dat=prompt("ingrese dato");
	
	document.getElementById('elNombre'). value =dat ;
}
