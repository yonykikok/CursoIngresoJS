function Mostrar()
{
	/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera,
 mostrar el número máximo y el número mínimo.*/

	var contador=0;
	// declarar variables
	var numero;
	var respuestadesalida;
	var minimo;
	var maximo;
	var bandera=0;
	
	var respuesta='si';

	while(true)
	{
		contador++;
		numero=prompt("ingrese los numeros necesarios");

		if (numero==null) 
		{
			respuestadesalida=prompt('para salir ingrese "si"');
			if (respuestadesalida=="si") 
			{
				break;
			}
			else alert("Bueno, sigamos");
			
		}
		numero=parseInt(numero);

		if (bandera==0) 
			{
			bandera++
			minimo=numero;
			maximo=numero;
			}

		if (numero<minimo) 
			{
				minimo=numero;
			}

			else if(numero>maximo) 
				{
				maximo=numero;
				}
	
	}
	

	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;


}//FIN DE LA FUNCIÓN