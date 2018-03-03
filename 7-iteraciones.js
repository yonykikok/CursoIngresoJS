//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*Enunciado:

7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10) 
y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

	var notas;
	var sexo;
	var notaBaja
	var bandera=0;
	var promedio;

	
	for (contador=0; contador<6; contador++){

		
		notas=prompt("ingrese las notas del 0 al 10");
		if (notas==null) 
			{
				break;
			}
		notas=parseInt(notas);

		while(sexo!="m"&&sexo!="f")
		{
			sexo=prompt("ingrese un sexo valido");
		}

 			if (bandera==0) 
			{
				notaBaja=notas;
			}

			if (nota<notaBaja) 
			{
				notaBaja=nota;
			}
	}
	
	document.write(notaBaja);
	
}

