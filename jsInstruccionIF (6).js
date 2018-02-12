function Mostrar()
{
/*tomo la edad  

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (edad>=18) {

		alert("usted es mayor de edad");
	}
	else if (edad<13) {

		alert("usted es menor de edad");
	}

	else if (edad>=13&&edad<=17) {

		alert("usted es adolescente");
	}

}//FIN DE LA FUNCIÓN