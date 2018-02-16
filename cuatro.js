function Mostrar()
{

/*Enunciado:
Bienvenidos. 
(IF) Realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, 
si el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.*/

	var numerouno;
	var numerodos;
	var suma;
	var multiplicacion;
	var resta;

	numerouno=prompt("ingrese un numero, ejemplo uno");
	numerouno=parseInt(numerouno);

	numerodos=prompt("ingrese otro numero");
	numerodos=parseInt(numerodos);

	suma=numerodos+numerouno;

	resta=numerouno-numerodos;

	multiplicacion=numerouno*numerodos;

	if (numerouno==numerodos) {

		document.write(multiplicacion);

}
	if (numerouno>numerodos) {

		document.write(resta);
	}
	if (numerouno<numerodos) {

		document.write(suma);
	}

}
