function Mostrar()
{
/*tomo la edad  

Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>12&&edad<18) {


	alert("usted es adolescente");
	}

	



}//FIN DE LA FUNCIÓN