function Mostrar()
{

	/*Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/

	var repetir;
	var stop;

	for(repetir=0; ; repetir++)
	{
		
		if (repetir>100) 
		{
			break;
		}
		document.write("<br>"+repetir);
	}
}//FIN DE LA FUNCIÓN