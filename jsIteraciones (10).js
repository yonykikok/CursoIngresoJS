function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
	
	var entrada="si"
	var numeros;

	var contadorsuma=0;
	var suma=0;

	var contadorNegativo=0;
	var sumaNegativos=0;
	var contadorCero=0;
	var contadorPar=0;
	var promediopositivos;
	var promedioNegativos;
	var diferencia;


	while(entrada=="si")
	{
		numeros=prompt("ingrese un numero");
		if (numeros==null) {break;}
		numeros=parseInt(numeros);

		if (numeros<0) 
			{
				contadorNegativo++;
				sumaNegativos=sumaNegativos+numeros;
			}
			if (numeros>0) 
				{
					contadorsuma++;
					suma=suma+numeros;
				}
				if (numeros==0) 
					{
						contadorCero++;
					}
					if (numeros%2==0&&numeros!=0) 
					{
						contadorPar++;
					}
					diferencia=suma+sumaNegativos;
					promediopositivos=suma/contadorsuma;
					promedioNegativos=sumaNegativos/contadorNegativo;
	}	
	document.write("diferencia entre positivos y negativos "+diferencia+"<br>"+"contador pares "+contadorPar+"<br>"+"contador de '0' "+contadorCero+"<br>"+"suma de negativos "+sumaNegativos+"<br>"+ "suma de positivos "+suma+"<br>"+"contador de suma "+contadorsuma+"<br>"+"contador de negativos "+contadorNegativo+"<br>"+"promedio de positivos "+promediopositivos+"<br>"+"promedio de negativos "+promedioNegativos);
	



}//FIN DE LA FUNCIÓN