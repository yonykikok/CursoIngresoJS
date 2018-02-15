function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostar: "EXCELENTE" para notas igual a 9 o 10,"APROBÓ"
 para notas mayores a 4, "Vamos, la proxima se puede" para notas menores a 4*/


		var Resultado;

		Resultado=Math.floor(Math.random()*11);



		if (Resultado==9||Resultado==10) {
			alert(Resultado+" EXCELENTE");

		}

		if (Resultado>4&&Resultado<9) {
			alert(Resultado+" APROBO");
		}

		if (Resultado<4) {
			alert(Resultado+" Vamos, la proxima se puede");

		}




}//FIN DE LA FUNCIÓN