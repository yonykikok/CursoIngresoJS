function Mostrar()
{
/*Enunciado:
Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/
	var sexo;
	sexo= prompt("ingrese f ó m .");




	while(sexo!="f"&&sexo!="m")
	{
		sexo= prompt("caracter no valido, ingrese f ó m .");
	
	}

	if (sexo=="f") 
		{
			sexo="femenino";
		}
		else if (sexo=="m") 
			{
				sexo="masculino";
			}	

		document.getElementById('Sexo').value=sexo;




}//FIN DE LA FUNCIÓN