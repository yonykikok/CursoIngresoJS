//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*Enunciado:

7-Realizar el algoritmo que al presionar el botón "Mostrar" pida por prompt las notas (validar entre 0 y 10) 
y el sexo(validar el sexo “f” o “m”) de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/

	var nota;
	var sexo;
	var notabaja;
	var bandera=0;
	var acumuladorDeNotas=0;
	var promedio;
	var contadorvarones=0;


	for (contador=0; contador<6; contador++){

		nota=prompt("ingrese la nota del estudiante");
		while(isNaN(nota)||nota<0||nota>10)
		{
			nota=prompt("ingrese una nota valida del 0 al 10");
		}
		nota=parseInt(nota);
		sexo=prompt("ingrese el sexo del alumno 'f' o 'm' ");

		while(sexo!='f'&&sexo!='m')
			{	
				sexo=prompt("ERROR, ingrese el sexo del alumno 'f' o 'm' ");
			}
			if (sexo=="m"&&nota>5) 
			{
				contadorvarones++;
			}

		if (bandera==0)
		{
			bandera++;

			notabaja=nota;
		}
			if (nota<notabaja) 
				{
					notabaja=nota;
				}
		acumuladorDeNotas=acumuladorDeNotas+nota;
		promedio=acumuladorDeNotas/6;

	}
	alert("el promedio es "+promedio);
	alert("la nota mas baja es " +notabaja);
	alert("varones con notas mayores de 6 solo hay "+contadorvarones);
	//alert("la suma de las notas es "+acumuladorDeNotas);
}

