function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario 
quiera e informar la suma acumulada y el promedio.*/

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(true)
	{	
	numero=prompt("ingrese los numeros");
	contador++

	if (numero==null) 
		{
			numero=prompt("Desea obtener la suma acumulada? ingrese 'si'");
			if (numero=="si")
			 {
			 	break;
			 }

			 continue;
		}
		numero=parseInt(numero);
		acumulador=acumulador+numero;


	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN