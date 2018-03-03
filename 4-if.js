//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*4-Realizar el algoritmo que al presionar el botón "Mostrar" pida dos números por prompt, 
	si son iguales que los multiplique, si el primero es mayor al segundo que los reste 
	y si no que los sume, mostrar el resultado por document.write.
	*/

	var primernumero;
	var segundoNumero;
	var multiplicar;
	var resta;
	var suma;

	primernumero=prompt("ingrese un numero");
	segundoNumero=prompt("ingrese otro numero");

	primernumero=parseInt(primernumero);
	segundoNumero=parseInt(segundoNumero);

	if (segundoNumero==primernumero) 
		{
			multiplicar=segundoNumero*primernumero;
		}
		else if (primernumero>segundoNumero) 
			{
				resta=primernumero- segundoNumero;
			}
			else
				suma=segundoNumero+primernumero;
document.write("la suma es "+suma+"<br>"+"la resta es "+resta+"<br>"+"la multiplicacion es "+multiplicar);

}

