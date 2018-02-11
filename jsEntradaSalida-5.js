/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	
	var nombre
	var edad
	// tomamos el valor de "elNombre" y lo guardamos en la variable "nombre"
	nombre=document.getElementById('elNombre').value;
	// tomamos el valor de "laEdad" y lo guardamos en la variable "edad"
	edad=document.getElementById('laEdad').value;
	//motramos el valor de las variables concatenados a uno o mas msj.
	alert("usted se llama "+nombre+" y tiene "+edad+ " años de edad");
}

