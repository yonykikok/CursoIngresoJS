function Mostrar()
{
/*
Enunciado:
al presionar el botón pedir un número. Mostar los numeros pares desde el 1 al número ingresado, y mostar la cantidad de numeros pares encontrados.
*/

	var mostrar;
	var numeros;
	var pares=0;

		mostrar=prompt("ingrese un numero");

	for(repetir=0; repetir<mostrar; repetir++)
	{

		numeros=prompt("ingrese un numero");

		if (numeros%2 ==0) 
		{
			pares++;
		}


	}
	document.write(pares);

}//FIN DE LA FUNCIÓN