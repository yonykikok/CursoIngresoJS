function Mostrar()
{
	/* ingresamos dos numeros, si son iguales los cantenamos
	si el primero es meyor que el segundo los multiplicamos
	si el primero es menor que el segundo los restamos	*/

	var numero; 
	var  numerodos;
	var suma;
	var resta;
	var multiplicamos;



	numero=prompt("ingrese un numero");
	
	numero=parseInt(numero);
					
	numerodos=prompt("ingrese otro numero");
	numerodos=parseInt(numerodos);

	if (numero==numerodos) 
		{
			suma=numero+""+numerodos;
		}
		else if (numero>numerodos) 
			{
				multiplicamos=numero*numerodos;
			}
				
			
			else if (numero<numerodos) 
				{

					resta=numero- numerodos;
				}	

			document.write("suma "+suma+"<br>"+"multiplicacion "+multiplicamos+"<br>"+"resta "+resta);
}
