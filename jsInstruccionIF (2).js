function Mostrar()
{
/*tomo la edad  

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad
*/

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad>=18) {
	alert("usted es mayor, puede entrar");
}	

}//FIN DE LA FUNCIÓN