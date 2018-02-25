function Mostrar()
{
/*
Enunciado:
al presionar el botón pedir un número. Mostar los numeros divisores desde el 
1 al número ingresado, y mostar la cantidad de numeros divisores encontrados.
*/

	var divisores=0;
	var pregunta;
	var numero;

	pregunta=prompt("indeque el numero del cual desea encontrar los divisores");

	for(repetidor=0; repetidor<pregunta;repetidor++)

	{
		numero=prompt("ingrese el numero")
		if (repetidor%2==0) 
		{
			divisores++;

		}

	}

document.write(divisores);


}//FIN DE LA FUNCIÓN