function Mostrar()
{
  
  var variable1
  var variable2
  var resultado

  variable1=prompt("ingresar importe");

  variable1=parseInt(variable1);
  resultado= variable1 +(variable1*0.21);

  document.getElementById('importeFinal').value=resultado;

}
/*var nombre;
	nombre=prompt("ingresa tu nombre");
	document.getElementById('elNombre').value=nombre;*/