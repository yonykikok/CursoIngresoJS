function Mostrar()
{
/*tomo la edad  
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */


	var edad;
	var estadocivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	estadocivil=document.getElementById('estadoCivil').value;

// 
	if (edad<18&&estadocivil!="Soltero") {

	alert("Es muy pequeño para NO ser soltero.");

}

	


}//FIN DE LA FUNCIÓN