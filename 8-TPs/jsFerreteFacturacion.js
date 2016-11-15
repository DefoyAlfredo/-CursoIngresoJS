/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//id="PrecioUno"
	//id="PrecioDos"
	//id="PrecioTres"
	

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
	var suma= PrecioUno+PrecioDos+PrecioTres;
	alert("SUMA: "+ suma);
}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);
 
 	var promedio=(PrecioUno+PrecioDos+PrecioTres) /3;
 	alert(promedio);
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;
	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	var PrecioFinal=(PrecioUno+PrecioDos+PrecioTres)*1.21;
	PrecioFinal=parseInt(PrecioFinal);
	alert(PrecioFinal);
	console.log("hola");
	console.log(PrecioFinal);
	console.log(PrecioUno);
	
}