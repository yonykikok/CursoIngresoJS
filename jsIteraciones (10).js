function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
	var contador=0;
	//declarar contadores y variables 
	var numeros;
	var seguro;
	var sumapositivo=0;
	var sumanegativo=0;
	var cantidadpositivos=0;
	var cantidadnegativos=0;
	var cantidadcero=0;
	var cantidadnumerospares=0;
	var promediopositivo;
	var promedionegativo;
	var diferenciapositivonegativo;// (positivos-negativos)

	var respuesta="si";

	while(respuesta!="no")
	{
		numeros=prompt("ingrese los numeros");
		if (numeros==null) 
			{
				seguro=prompt("Para salir ingrese 'si'");
				if (seguro=="si") 
					{
						document.write("<br>"+"suma de positivo "+sumapositivo);
						document.write("<br>"+"suma de negativo "+sumanegativo);
						document.write("<br>"+"cantidad de negativos "+cantidadnegativos);
						document.write("<br>"+"cantidad de positivos "+cantidadpositivos);
						document.write("<br>"+"cantidad de ceros "+cantidadcero);
						document.write("<br>"+"cantidad de numeros pares "+cantidadnumerospares);
						document.write("<br>"+"promedio negativo "+promedionegativo);
						document.write("<br>"+"promedio positivo "+promediopositivo);
						document.write("<br>"+"diferencia positivo-negativo "+diferenciapositivonegativo);
						break;

					}	
					else
						alert("Bueno, Sigamos");

			}
			numeros=parseInt(numeros);

			if (numeros<0) 
				{
				sumanegativo=sumanegativo+numeros;
				cantidadnegativos++;

				}
				if (numeros>0) 
					{
						sumapositivo=sumapositivo+numeros;
						cantidadpositivos++;
					}
					if (numeros==0) 
						{
							cantidadcero++;
						}
						
						promediopositivo=cantidadpositivos/numeros;
						promedionegativo=cantidadnegativos/numeros;	
						diferenciapositivonegativo=sumapositivo+ sumanegativo;	// no me da bien..
						if (numeros % 2 ==0) 
							{
								cantidadnumerospares++;
							}
			if (isNaN(numeros)) 
			{
				alert("ingrese numeros por favor");
			}

	
	}




}//FIN DE LA FUNCIÓN