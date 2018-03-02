function Mostrar()
{
	/* 
	pedir 3 datos hasta que el cliente quiera, nombre del animal.
	peso del animal(validar que sea mayor a "0").
	temperatura del habitat del animal (entre -40º y 40º)
	informar nombre del animal mas pesado
	el nombre del animal de la temperatura mas baja
	la cantidad de temperaturas pares que se ingresaron 
	el promedio del peso de todos los animales.
	la temperatura maxima y la temperatura minima*/

 	var preguntanumbre;
 	var preguntapeso;
 	var preguntaTemperatura;
 	var nombreDelAnimal;
 	var pesoDelAnimal;
 	var temperaturaDelHabitat;
 	var NombreDelMasPesado
 	var NombreDelAnimalTemperaturaMasBaja;
 	var cantidadDeTemperaturasBajas;
 	var PromedioDelPeso;
 	var ingreso;
 	var temperaturaMinima;
 	var temperaturaMaxima;

	
 	
 	while (true)
 	{
	preguntanombre=prompt("ingrese el nombre del animal");
 	preguntapeso=prompt("ingrese el peso del animal");
 	preguntaTemperatura=prompt("ingrese la temperatura del habitat del animal"); 		
	 	 			
 		
	 	if (preguntanombre==null) 
	 		{
	 			break;
	 		}

		while(isNaN(preguntapeso||preguntaTemperatura))
			preguntapeso=prompt("ingrese el peso del animal");
 			preguntaTemperatura=prompt("ingrese la temperatura del habitat del animal"); 

 			while(preguntapeso>0)	

 				preguntapeso=



 	preguntapeso=parseInt(preguntapeso);
 	preguntaTemperatura=parseInt(preguntaTemperatura);
 	}
 //	document.write(NombreDelMasPesado+preguntanombreTemperaturaMasBaja+cantidadDeTemperaturasPares+PromedioDelPeso+temperaturaMinima+temperaturaMaxima);
}
