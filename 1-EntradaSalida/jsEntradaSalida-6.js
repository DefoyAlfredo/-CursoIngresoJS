/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//id="numeroUno"
	//id="numeroDos"

	/* declaracion de varioable 

	var numneroUno
	var numeroDos
	*/ 
	var numneroUno;
	var numeroDos;
		
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	// v. 1.0
	/*var suma=  parseInt(numeroUno)+parseInt(numeroDos);
	// v 2.0*/
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var suma = numeroUno+numeroDos;

	alert( suma);


}

