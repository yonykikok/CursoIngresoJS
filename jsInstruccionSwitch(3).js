function Mostrar()
{
//tomo la edad  
var mes
mes= document.getElementById('mes').value;

//alert (mesDelAño);
	/*Enunciado:
al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"*/
	switch(mes)
	{
		case "Febrero":
		{
			alert("Este mes no tiene más de 29 días.");
			break;
			}
			default:
			alert("Este mes tiene 30 o más días");


	}

	


}//FIN DE LA FUNCIÓN