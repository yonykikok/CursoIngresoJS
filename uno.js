
function Mostrar()
{
	/*  pedir la base y la altura de un triangulo equilatero e informar 
	el perimetro y la superficie*/

	var base;
	var altura;
	var perimetro;
	var superficie;
	//var hipotenusa;

	base=document.getElementById('laBase').value;
	altura=prompt("ingrese la altura");
	
	perimetro=base*3
	//hipotenusa=base*base+altura*altura;
	superficie=base*altura/2

	alert("el perimetro es "+perimetro+" y la superficie es "+superficie);

}
