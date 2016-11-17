/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
// id="Largo
//id=Ancho
var largo;
var ancho;

ancho=document.getElementById('Ancho').value;

largo=document.getElementById('Largo').value;
largo=parseInt(largo);
ancho=parseInt(ancho);

var funcion;
funcion=(largo*2)+(ancho*2)*3;
funcion=parseInt(funcion);
alert("longitud de alambre" +funcion);

}
function Circulo () 
{
	//id=Radio

var circulo;
circulo=document.getElementById('Radio').value;

var funcion;
funcion=((circulo/2)*3);
funcion=parseInt(funcion);
alert("Cantidad de alambre para el circulo: "+funcion );

}
function Materiales () 
{
	var largo;
  var ancho;
 largo=document.getElementById('Largo').value;
 ancho=document.getElementById('Ancho').value;
largo=parseInt(largo);
ancho=parseInt(ancho);


var cemento=2;
var cal=3;
var cantcemento=((largo*ancho)/2);
cantcemento=parseInt(cantcemento);
var cantcal=((largo*ancho)/3);

cantcal=parseInt(cantcal);
alert("cantidad de cemento: "+cantcemento+"cantidad de cal: "+cantcal);
}