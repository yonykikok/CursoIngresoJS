/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1
	var numero2
	var resultado

	numero1=document.getElementById('numeroUno').value;
	numero2=document.getElementById('numeroDos').value;

	resultado=parseInt(numero1)+parseInt(numero2);
	alert(parseInt(resultado));
}

function restar()
{
	var numeroresta1
	var numeroresta2
	var resultadoresta

	numeroresta1=document.getElementById('numeroUno').value;
	numeroresta2=document.getElementById('numeroDos').value;

	resultadoresta=parseInt(numeroresta1)-parseInt(numeroresta2);

	alert(parseInt(resultadoresta));
}

function multiplicar()
{ 
	var numeromultiplicado1
	var numeromultiplicado2
	var resultadomultiplicacion

	numeromultiplicado1=document.getElementById('numeroUno').value;
	numeromultiplicado2=document.getElementById('numeroUno').value;

	resultadomultiplicacion=parseInt(numeromultiplicado1)*parseInt(numeromultiplicado2);

	alert(parseInt(resultadomultiplicacion));
}

function dividir()
{
	var divicion1
	var divicion2
	var resultadodividir

	divicion1=document.getElementById('numeroUno').value;
	divicion2=document.getElementById('numeroDos').value;

	resultadodividir=parseInt(divicion1)/parseInt(divicion2);

	alert(parseInt(resultadodividir));

}

