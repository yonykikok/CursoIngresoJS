function Mostrar()
{
/*Enunciado:
Bienvenidos. 
(IF) Realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, 
si el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.*/

	var numerouno;
	var numerodos;

	numerouno=prompt("ingrese un numero");
	numerouno=parseInt(numerouno);
	numerodos=prompt("ingrese otro numero");
	numerodos=parseInt(numerodos);

	if (numerouno==numerodos) {

		alert(numerouno*numerodos);
	}
	if (numerouno>numerodos) {

		alert(numerouno-numerodos);
	}
	if (numerouno<numerodos) {

		alert(numerouno+numerodos);
	}
}
