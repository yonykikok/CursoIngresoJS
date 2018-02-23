function Mostrar()
{
/*Enunciado:
al presionar el botón pedir un número entre 0 y 9 inclusive.*/

	var numero;
	numero= prompt("ingrese un número entre 0 y 10.");

	while(numero<0||numero>9)

	{

		numero= prompt("ingrese un número entre 0 y 10.");

	}


		document.write("ingresaste "+numero+ " bien hecho");



}//FIN DE LA FUNCIÓN