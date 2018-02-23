function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

	var contador=0;
	var acumulador=0;
	var numero;
	var interaciones=5;
	var promedio;


	while (contador<interaciones)
	{
		contador ++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}

	promedio=acumulador/contador;
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN