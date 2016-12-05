
function Mostrar()
{
//tomo la edad  
var laEdad;
var estadoCivil;
estadoCivil=document.getElementById('estadoCivil').value;
laEdad=document.getElementById('edad').value;

console.log("valor de la variable satado estadoCivil"+estadoCivil);
console.log("valor de la variable edad"+laEdad);

if (laEdad < 18 && estadoCivil !="soltero")
{	
		alert("Es muy pequeño para NO ser soltero");

}



}//FIN DE LA FUNCIÓN