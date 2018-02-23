function Mostrar()
{/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera e informar la suma acumulada y el promedio.*/

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		contador ++;

		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero;

		respuesta=prompt('para continuar, "si"');
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN