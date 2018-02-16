function Mostrar()
{
/*
Enunciado:
Bienvenidos. 
(SWITCH)realizar el algoritmo que pida un día de la semana por prompt, si es un “Sábado” o 
“Domingo” informar por alert “es fin de semana” de lo contrario informar por alert “a trabajar !!!” .*/

	var dias;


	dias=prompt("ingrese un dia de la semana");


	switch(dias)
	{
		case "Lunes":
		{
		alert("a trabajar !!!");
		break
		}
	
		case "Martes":
		{
		alert("a trabajar !!!");
		break
		}
	
		case "Miercoles":
		{
		alert("a trabajar !!!");
		break
		}
	
		case "Jueves":
		{
		alert("a trabajar !!!");
		break
		}
	
		case "Viernes":
		{
		alert("a trabajar !!!");
		break
		}
	
		case "Sabado":
		{
		alert("es fin de semana");
		break
		}
	
		case "Domingo":
		{
		alert("es fin de semana");
		break
		}
		}



	/*
	if (dias=="Samado"||"Domingo") {
		alert("es fin de semana");

	}
	else (a trabajar!!!);*/
}
