function Mostrar()
{
/*tomo la edad  

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad>=18) {
	alert("usted es mayor, puede entrar");
}	

else if (edad<18) {
	alert("usted es menor, regrese luego");
}


}//FIN DE LA FUNCIÓN