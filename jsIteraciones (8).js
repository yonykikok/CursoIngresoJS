function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera
, sumar los que son positivos y multiplicar los negativos.*/


	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador;
	var numero;
	
	var respuesta='si';

	

	while(true)
	{
		contador++;
		numero=prompt("ingrese el importe");

		if (numero==null) 
			{
				respuesta=prompt('para obtener la suma ingrese"si"');
				if (respuesta=="si") 
				{
					break;	
				}
				
			}

		numero=parseInt(numero);
		acumulador=contador+numero;

			if (acumulador>0) 
			{
				positivo+=numero;
			}
			else if (acumulador<0)
			{
				negativo*=numero;
			}

	

	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN