function Mostrar()
{
/*Enunciado:
al presionar el botón pedir un número. Mostar los numeros pares desde el 1 al número 
ingresado, y mostar la cantidad de numeros pares encontrados.*/
	var numero;
	var pares;

	pares=0

	numero=prompt("ingrese un numero");

	for(repetir=0; repetir<numero; repetir++)
	{
		pares=numero%2==0
	}

	document.write(numero);



}//FIN DE LA FUNCIÓN