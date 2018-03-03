//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*Enunciado:

6-Realizar el algoritmo que al presionar el botón "Mostrar" 
pida el importe de las ventas (validar que sea mayor a 0,”cero”)
 de los 7 días de la semana por prompt (una por día), 
 e informar cual fue el mayor importe y cuál fue el menor importe de venta*/

 	var importe;
 	var bandera;
 	var importeMenor;
 	var importeMayor;
 	var bandera=0;
 	

 	for (contador=0; contador<7; contador++){
 		importe=prompt("ingrese el importe de ventas");

 		if (importe==null) 
 		{
 			break;
 		}

 		importe=parseInt(importe);

	 	while(isNaN(importe)||importe<0)
	 	{
	 		importe=prompt("ERROR, ingrese un importe de ventas mayor a '0'");
 			importe=parseInt(importe);
	 	}

	 	if (bandera==0) 
	 	{
	 		bandera++;
	 		importeMayor=importe;
	 		importeMenor=importe;
	 	}
	 	if (importeMenor>importe) 
		 	{
		 		importeMenor=importe;
		 	}
		 	if (importeMayor<importe) 
		 		{
		 			importeMayor=importe;
		 		}
		
	}	
	document.write("el importe minimo es "+importeMenor+"<br>"+"el importe maximo es "+importeMayor);
}

