function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/

	var positivo=0;
	var negativo=1;
	var numero;
	
	while(true)
	{	
	numero=prompt("ingrese si para comenzar");	
		if (numero==null) 
		{
			break;
		}
			else

			numero=parseInt(numero);
			if (isNaN(numero)) 
				{
					alert("ingrese un numero para continuar");
					continue;
				}
		if (numero>0 ) 
		{
			positivo+=numero; //es igual a positivo=positivo+numero
		}
			else if (numero<0) 
				{
					negativo*=numero;//es igual negativo=negativo*numero
				}		
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN