function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo.*/
	
	var numero;
	var entradaWhile="si";
	var maximo;
	var minimo;
	var bandera=0;

	while(entradaWhile=="si")
	{
		numero=prompt("ingrese un numero");
		if (numero==null) 
		{
			break;
		}
		numero=parseInt(numero);

		if (bandera==0) 
		{
			bandera++;
			maximo=numero;
			minimo=numero;
		}
			if (numero>maximo) 
			{
				maximo=numero;
			}
			if (numero<minimo) 
			{
				minimo;numero;
			}

	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN