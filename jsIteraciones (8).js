function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.*/
	var respuesta='si';
	var numeroPedido;
	var sumaPositivos=0;
	var multiplicarNegativos=1;

	while(respuesta=="si")
	{
		numeroPedido=prompt("ingrese un numero");
		if (numeroPedido==null)
			{
				break;
			}
		numeroPedido=parseInt(numeroPedido);

		if (numeroPedido>0)
		{
			sumaPositivos=sumaPositivos+numeroPedido;
		}
		else if (numeroPedido<0) 
		{
		
			multiplicarNegativos=multiplicarNegativos*numeroPedido;
		}

	}

document.getElementById('suma').value=sumaPositivos;
document.getElementById('producto').value=multiplicarNegativos;

}//FIN DE LA FUNCIÓN