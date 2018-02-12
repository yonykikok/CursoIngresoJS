function Mostrar()
{
/*tomo la edad  

Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/

	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad<13||edad>17) {

		alert("usted no es adolescente");

	}


}//FIN DE LA FUNCIÓN