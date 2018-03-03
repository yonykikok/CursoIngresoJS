//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
/*Enunciado:

8-Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar
números positivos (validar que sea positivo) hasta que el usuario quiera. 
Informar al terminar el ingreso por document.write: 
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo. */
	var numerosPares;

	var sumaTotal=0;
	var maximoYMinimo=0;
	var cantidadPares=0;
	var banderaPromedio=0;

	
	var promedio;
	var Maximo;
	var Minimo;
	

	for (contador=0;;contador++)
	{
		banderaPromedio++;

		NumeroIngresado=prompt("ingrese solo numeros positivos");
		if (NumeroIngresado==null) 
			{
				break;
			}
		NumeroIngresado=parseInt(NumeroIngresado);

		while(isNaN(NumeroIngresado)||NumeroIngresado<0)
		{
			NumeroIngresado=prompt("ERROR, ingrese SOLO numeros positivos");
			NumeroIngresado=parseInt(NumeroIngresado);
		}
			/*if (maximoYMinimo==0) 
			{
				maximoYMinimo++;
				Minimo=NumeroIngresado;
				Maximo=NumeroIngresado;
			}
			else if (Minimo>NumeroIngresado) 
			{
				Minimo=NumeroIngresado;
			}
			else if (Maximo<NumeroIngresado) 
			{
				Maximo=NumeroIngresado;
			}
			if (NumeroIngresado%2==0&&NumeroIngresado!=0) 
			{
				cantidadPares++;
			}
			sumaTotal=sumaTotal+NumeroIngresado;
			promedio=sumaTotal/banderaPromedio;*/


	}
document.write("la cantidad de pares es "+cantidadPares+"<br>");
document.write("el promedio es "+promedio+"<br>");
document.write("la suma total de todo es "+sumaTotal+"<br>");
document.write("el maximo es "+Maximo+" y el minimo es "+Minimo+"<br>");

}

