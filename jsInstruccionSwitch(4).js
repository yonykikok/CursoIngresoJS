function Mostrar()
{
//tomo la edad
/*Enunciado:
al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/

	var mes 
	mes= document.getElementById('mes').value;

	switch(mes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		{
		alert("tiene 30 dias");
		break;}

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		{
		alert("tiene 31 días.");
		break;
		}

		case "Febrero":
		{
		alert("tiene 28 dias");
		break}


	}



//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN