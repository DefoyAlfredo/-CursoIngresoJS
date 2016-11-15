/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//id="Largo"
	//id="Ancho"

	var largo;
	var ancho;
	ancho=document.getElementById('Ancho').value;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	var funcion= ((largo*2)+(ancho+2)*3);//3 vueltas de alambre

	funcion=parseInt(funcion);
	alert("cantidad de alambre:"funcion);
}
function Circulo () 
{
	//id="Radio"
	var radio;
	radio=document.getElementById('Radio').value;
	var funcion=((radio/2)*3.14);
	var funcion2=funcion*3;
	alert(funcion2);

	
}
function Materiales () 
{
	
}