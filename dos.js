function Mostrar()
{
  /* se ingresa un porsentaje de descuento y el importe mostrar cuantos se debe pagar. 
  Ejemplo 20%
  100
  =80*/

  	var importe;
  	var descuento;
  	var preciocondescuento;
  	var resultado;
  	
  	descuento=prompt("ingrese el descuento");
  	descuento=parseInt(descuento);

  	importe=prompt("ingrese el importe");
  	importe=parseInt(importe);

  	preciocondescuento=importe/100*descuento
  	resultado=importe- preciocondescuento;

  	document.getElementById('importeFinal').value=resultado;

}
