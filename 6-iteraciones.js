//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*Enunciado:

6-Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas
(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
 e informar cual fue el mayor importe y cuál fue el menor importe de venta*/
	
	var importe;
	var bandera=0;
	var maximoImporte;
	var minimoImporte;
	var contador=0;


	while(contador<7)
	{
		contador++;
		importe=prompt("ingrese el importe");
	
		if (importe==null) 
				{
					break;
				}
		importe=parseInt(importe);		
		while(isNaN(importe))
		{
			importe=prompt("ERROR, ingrese el importe");
			importe=parseInt(importe);
		}	

		if (bandera==0) 
		{
			bandera++;
			minimoImporte=importe;
			maximoImporte=importe;
		}
		if (maximoImporte<importe) 
			{
				maximoImporte=importe;
			}
		if (minimoImporte>importe) 
			{
				minimoImporte=importe;
			}
    }	
		document.write("el importe minimo de la semana fue "+minimoImporte+"<br>"+"el importe maximo de la semana fue "+maximoImporte);
}

