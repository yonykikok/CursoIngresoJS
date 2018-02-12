function Mostrar()
{

/*
Enunciado:
Bienvenidos.
(IF) Realizar el algoritmo que pida dos números por prompt, si son iguales que los multiplique, 
si el primero es mayor al segundo que los reste y si no que los sume, mostrar el resultado por document.write.
*/

	var numero1;
	var numero2;
	var multiplicacion;
	var resta;
	var suma;

	numero1=prompt("ingrese un numero");
	numero1=parseInt(numero1);

	numero2=prompt("ingrese otro numero");
	numero2=parseInt(numero2);

	if (numero1==numero2) {

	multiplicacion=numero1*numero2

	document.write(multiplicacion);

	}
	else if (numero1>numero2) {

	resta=numero1 - numero2;

	document.write(resta);


	}
	else {
	suma=numero1+numero2;
	document.write(suma);
	}
}
