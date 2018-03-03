	//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*Enunciado:

8-Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos 
(validar que sea positivo) hasta que el usuario quiera. 
Informar al terminar el ingreso por document.write: 
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el minimo. */

	var numerospositivos;
	var cantidadPares;
	var Promedio;
	var sumatotal;
	var bandera=0;
	var maximo;
	var minimo;


	for(contador=0;;contador++)
	{	
		numerospositivos=prompt("ingrese numeros positivos");
		if (numerospositivos==null) {break;}
		numerospositivos=parseInt(numerospositivos);

		while(numerospositivos<0)
		{
			numerospositivos=prompt("ERROR, ingrese SOLO numeros positivos");
			numerospositivos=parseInt(numerospositivos);
		}

		if (bandera==0) 
		{
			bandera++;
			maximo=numerospositivos;
			minimo=numerospositivos;
		}
			else if (numerospositivos<minimo) 
			{
				minimo=numerospositivos;
			}
				else if (numerospositivos>maximo) 
				{
					maximo=numerospositivos;
				}
			document.write("maximo "+maximo+"<br>"+" minimo "+minimo);	
	}	


}

