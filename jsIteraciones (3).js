function Mostrar()
{

	var clave;
	var contador;

	clave= prompt("ingrese el número clave.");

	contador=0


	while(contador<10&&clave!="utn750")
	{
		clave= prompt("ingrese el número clave.");
		contador ++;
	}


	document.write("Bienvenido, Ups erraste  "+contador+ " veces paso algo?");

}//FIN DE LA FUNCIÓN
