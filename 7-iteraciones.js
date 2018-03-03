//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
/*7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas
(validar entre 0 y 10) y el sexo(validar el sexo “f” o “m”) de 6 alumnos,
informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/
	
	var nota;
	var sexo;

	var promedio;
	var notaBaja;

	var CantVarones=0;
	var bandera=0;
	var sumaTotal=0;


	for(contador=0; contador<6; contador++){

		nota=prompt("ingrese la nota del alumno entre '0' y '10'");
		if (nota==null) 
			{
				break;
			}

		nota=parseInt(nota);

		while(isNaN(nota)||nota<0||nota>10)
		{
			nota=prompt("ERROR, ingrese una nota entre '0' y '10'");
			nota=parseInt(nota);
		}
		sexo=prompt("ingrese el sexo del alumno 'f' o 'm'");
		while(sexo!="m"&&sexo!="f")
			{	
				sexo=prompt("ERROR, ingrese 'f' para Femenino o 'm' para Masculino");
			}

		if (bandera==0) 
			{
				bandera++;
				notaBaja=nota;
			}
			if (notaBaja>nota) 
				{
					notaBaja=nota;
				}

		else if (nota>5&&sexo=='m') 
		{
			CantVarones++;
		}

		sumaTotal=sumaTotal+nota;
		promedio=sumaTotal/6;
		
	}

	alert("la nota mas baja es "+notaBaja);
	//alert("la suma total es "+sumaTotal);
	alert("la cantidad de varones con nota mayores a 6 hay solo "+CantVarones);
	alert("el promedio es "+promedio);
}

