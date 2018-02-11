/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	
	var nombre;
		//prompt ("ingrese su nomre", "ejemplo: Juan");
	nombre= prompt ("ingrese su edad por favor", "18 años");
	
	/* "document.getElementById('el nombre del ID').value=Variable;"
	muestra el contenido ingresado por el prompt en la casilla del usuario.
	*/
	document.getElementById('elNombre').value=nombre;

	
}

